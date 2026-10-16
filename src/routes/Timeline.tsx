import { useState } from 'react'
import Project from '../classes/Project.tsx'
import projects from '../data/Projects.tsx'
import PTAG from '../data/ProjectTags.tsx'

// Converts projects array to a format that can be directly displayed on the page.
function projectsToHTML(p: Array<Project>) {
    let out = []
    for (let i: number = 0; i < p.length; i++) {
        const project: Project | undefined = p[i]
        if (project != undefined) {
            out[i] = project.toHTML(i)
        }
    }
    return out
}

// Returns a copy of p sorted by method. Returns p if no method specified.
function sortProjects(p: Array<Project>, method = "") {
    switch (method) {
        case "AZ": // Alphabetical Descending
            return p.toSorted((a,b) => a.title.localeCompare(b.title))
        case "ZA": // Alphabetical Ascending
            return p.toSorted((a,b) => b.title.localeCompare(a.title))
        case "cDateD": // Created Date Descending
            return p.toSorted((a,b) => b.createdDate.getTime() - a.createdDate.getTime())
        case "cDateA": // Created Date Ascending
            return p.toSorted((a,b) => a.createdDate.getTime() - b.createdDate.getTime())
        case "uDateD": // Updated Date Descending
            return p.toSorted((a,b) => b.updatedDate.getTime() - a.updatedDate.getTime())
        case "uDateA": // Updated Date Ascending
            return p.toSorted((a,b) => a.updatedDate.getTime() - b.updatedDate.getTime())
        default:
            return p
    }
}

function SortMethodButton(props: { method: string, sortMethod: string,
    setSortMethod: React.Dispatch<React.SetStateAction<string>>, content: string }) {
        return (
            <button
                onClick={() => props.setSortMethod(props.method)}
                style={{
                    color: props.sortMethod == props.method ? 'magenta' : 'white',
                    borderColor: props.sortMethod == props.method ? 'magenta' : 'white',
                    marginRight: "2em",
                }}
            >
                {props.content}
            </button>
        )
    }

function SortMethodButtons(props: { sortMethod: string, setSortMethod: React.Dispatch<React.SetStateAction<string>> }) {
    return (
        <div style={{marginBottom: "2em"}}>
            <SortMethodButton setSortMethod={props.setSortMethod} sortMethod={props.sortMethod} method="AZ" content="A→Z"/>
            <SortMethodButton setSortMethod={props.setSortMethod} sortMethod={props.sortMethod} method="ZA" content="Z→A"/>
            <SortMethodButton setSortMethod={props.setSortMethod} sortMethod={props.sortMethod} method="cDateD" content="Created ↓"/>
            <SortMethodButton setSortMethod={props.setSortMethod} sortMethod={props.sortMethod} method="cDateA" content="Created ↑"/>
            <SortMethodButton setSortMethod={props.setSortMethod} sortMethod={props.sortMethod} method="uDateD" content="Updated ↓"/>
            <SortMethodButton setSortMethod={props.setSortMethod} sortMethod={props.sortMethod} method="uDateA" content="Updated ↑"/>
        </div>
    )
}


// Returns a copy of p with projects removed that have no tags in indcludedTags.
// Returns p if no method specified.
function tagFilterProjects(p: Array<Project>, includedTags: Array<string>) {
    if (includedTags.length > 0) {
        let pc: Array<Project> = []
        
        p.forEach(project => {
            for (const tag of includedTags) {
                if (project.tags.includes(tag)) {
                    pc.push(project)
                    break;
                }
            }
        })

        return pc
    } else {
        return p
    }
}

function TagFilterInput(props: { thisTag: string, includedTags: Array<string>,
    setIncludedTags: React.Dispatch<React.SetStateAction<Array<string>>>
}) {
    return (
        <div style={{margin: "0"}}>
            <input
                type="checkbox"
                checked={props.includedTags.includes(props.thisTag)}
                onChange={
                    function() {
                        if (props.includedTags.includes(props.thisTag)) {
                            props.setIncludedTags(props.includedTags.filter(item => item != props.thisTag))
                        } else {
                            let copy: Array<string> = [...props.includedTags]
                            copy.push(props.thisTag)
                            props.setIncludedTags(copy)
                        }
                    }
                }
                style={{margin: "10px"}}
                id={"tagselector_" + props.thisTag}
            />
            <label htmlFor={"tagselector_" + props.thisTag}>{props.thisTag}</label>
        </div>
    )
}

function  TagFilterInputs(props: { includedTags: Array<string>,
    setIncludedTags: React.Dispatch<React.SetStateAction<Array<string>>>}
) {
    return (
        <div style={{marginTop: "1em", marginBottom: "2em"}}>
            <TagFilterInput includedTags={props.includedTags} setIncludedTags={props.setIncludedTags} thisTag={PTAG.APP} />
            <TagFilterInput includedTags={props.includedTags} setIncludedTags={props.setIncludedTags} thisTag={PTAG.UTIL} />
            <TagFilterInput includedTags={props.includedTags} setIncludedTags={props.setIncludedTags} thisTag={PTAG.GAME} />
            <TagFilterInput includedTags={props.includedTags} setIncludedTags={props.setIncludedTags} thisTag={PTAG.MOD} />
        </div>
    )
}

export default function Timeline() {
    const [sortMethod, setSortMethod] = useState("uDateD")
    const [includedTags, setIncludedTags] = useState([] as Array<string>)

    return (
        <div className="routebody">
            <details open>
                <summary>Sort</summary>
                <SortMethodButtons setSortMethod={setSortMethod} sortMethod={sortMethod}/>
            </details>
            <details>
                <summary>Filters</summary>
                <TagFilterInputs includedTags={includedTags} setIncludedTags={setIncludedTags} />
            </details>
            <div>
                {/* Sorted projects here */}
                {projectsToHTML(sortProjects(tagFilterProjects(projects, includedTags), sortMethod))}
            </div>
        </div>
    )
}
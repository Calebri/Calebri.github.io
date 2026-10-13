import { useState } from 'react'
import BigBox from './BigBox.jsx'

// Enum-like structure for project tags.
// Keys are easily referenced by code and values are end-user-readable strings.
const PTAG = Object.freeze({
    GAME: "Game",
    APP: "App",
    UTIL: "Utility",
    MOD: "Mod",
})

// Class for a single project to display.
class Project {
    constructor(title, description, createdDate, updatedDate, linkURL = "", tags = []) {
        this.title = title
        this.description = description
        this.createdDate = createdDate
        this.updatedDate = updatedDate
        this.linkURL = linkURL
        this.tags = tags
    }

    addDemoLink(demo_link) {
        this.demoLink = demo_link
        return this
    }

    toHTML(key = 0) {
        return (
            <BigBox
                key = {key}
                head_content = {this.title}
                subtitle = {"Created: " + formatDate(this.createdDate) + "; Updated: " + formatDate(this.updatedDate)}
                body_content = {this.description}
                link = {this.linkURL}
                demo_link = {this.demoLink}
            />
        )
    }
}

// Array of projects to display/sort.
const projects = [
    new Project(
        "XCursor Theme Packager",
        `Utility script in Bash that automatically creates X11 cursor packages from raw images using
         xcursorgen.`,
        new Date(2026, 7),
        new Date(2026, 7),
        "https://github.com/Calebri/xcursor_theme_packager",
        [PTAG.UTIL]
    ).addDemoLink("https://www.google.com"),
    new Project(
        "point-n-click",
        `Short demo for a point and click game made in Love2D (Lua framework) for a college project.
         Uses a custom modular point and click engine that I built specifically for this project.
         I made all the engine code and shaders while my co-collaborator designed the in-game graphics.
         Source also includes a custom build script that packages the project into an executable.`,
        new Date(2026, 3),
        new Date(2026, 4),
        "https://github.com/Calebri/point-n-click",
        [PTAG.GAME, PTAG.UTIL]
    ),
    new Project(
        "level-game",
        `Short platformer demo in GDevelop made for a college project.`,
        new Date(2026, 2),
        new Date(2026, 2),
        "https://github.com/Calebri/level-game",
        [PTAG.GAME]
    ),
    new Project(
        "A Walk in the Dark",
        `Short text-based game made in Twine Snowman and Javascript for a college project. It uses
         an experimental framework I created in Snowman to procedurally generate story pages to
         make the game different every time.`,
        new Date(2026, 2),
        new Date(2026, 2),
        "https://github.com/Calebri/A-Walk-in-the-Dark",
        [PTAG.GAME]
    ),
    new Project(
        "CloverPitAPHints",
        `A BepInEx plugin designed to implement CloverPit as a hint game for the Archipelago Multiworld.
         Sends hints out to the multiworld when certain deadlines are reached in-game.`,
        new Date(2025, 9),
        new Date(2026, 0),
        "https://github.com/Calebri/CloverPitAPHints",
        [PTAG.MOD]
    ),
    new Project(
        "Picture Poker Scratch",
        `A remake of the Picture Poker minigame from Super Mario 64 DS and New Super Mario Bros.
         in Scratch 3.0. Made in Turbowarp, although it requires no Turbowarp modules and can run
         in base Scratch 3.0.`,
        new Date(2023, 10),
        new Date(2024, 0),
        "https://github.com/Calebri/picture-poker-scratch",
        [PTAG.GAME]
    ),
    new Project(
        "Shepaug Schedule App",
        `Web app that would predict the daily schedule at my old high-school.
         The schedule there was notoriously complicated and hard to keep track of manually,
         so I made a web app that would use data from a public Google Calendar and fill
         it out with user-inputted class information. Their scheduling sceme has since
         completely changed, so this app is pretty much useless`,
         new Date(2022, 7),
         new Date(2023, 7),
         "https://github.com/Calebri/shepaug-schedule",
         [PTAG.APP]
    ),
    new Project(
        "DSLightshow",
        `Python app to control and animate the lights on a PS5 DualSense controller.
         Has a GUI and multiple different animation presets.`,
        new Date(2022, 10),
        new Date(2022, 10),
        "https://github.com/Calebri/DSLightshow",
        [PTAG.APP]
    ),
    new Project(
        "Game for 2021 Complexity Jam",
        `A game in Scratch for the 2021 Complexity Jam, which my middle school participated in.
         The theme, as I was told, was to make a game about some aspect of the COVID.`,
        new Date(2021, 4),
        new Date(2021, 5),
        "https://github.com/Calebri/2021-Complexity-Jam",
        [PTAG.GAME]
    ),
    new Project(
        "speed game",
        `A simple game in Unity where you move left and right to dodge obstacles.`,
        new Date(2020, 10),
        new Date(2020, 10),
        "https://github.com/Calebri/speed",
        [PTAG.GAME]
    ),
    new Project(
        "platformer",
        `Possibly my earliest programming project. A simple platforming game in Unity.
         Updated a few times, but was never fully finished.`,
        new Date(2020, 7),
        new Date(2020, 7),
        "https://github.com/Calebri/platformer",
        [PTAG.GAME]
    )
]

// Converts Date to formatted string.
function formatDate(d) {
    return (
        d.toLocaleString('default', { month: 'short' })
        + ", "
        + d.getFullYear()
    )
}

// Converts projects array to a format that can be directly displayed on the page.
function projectsToHTML(p) {
    let out = []
    for (let i = 0; i < p.length; i++) {
        out[i] = p[i].toHTML(i)
    }
    return out
}

// Returns a copy of p sorted by method. Returns p if no method specified.
function sortProjects(p, method = "") {
    switch (method) {
        case "AZ": // Alphabetical Descending
            return p.toSorted((a,b) => a.title.localeCompare(b.title))
        case "ZA": // Alphabetical Ascending
            return p.toSorted((a,b) => b.title.localeCompare(a.title))
        case "cDateD": // Created Date Descending
            return p.toSorted((a,b) => b.createdDate - a.createdDate)
        case "cDateA": // Created Date Ascending
            return p.toSorted((a,b) => a.createdDate - b.createdDate)
        case "uDateD": // Updated Date Descending
            return p.toSorted((a,b) => b.updatedDate - a.updatedDate)
        case "uDateA": // Updated Date Ascending
            return p.toSorted((a,b) => a.updatedDate - b.updatedDate)
        default:
            return p
    }
}

function SortMethodButton(props) {
        return (
            <button
                onClick={() => props.setSortMethod(props.method)}
                style={{
                    color: props.sortMethod == props.method ? 'magenta' : 'white',
                    borderColor: props.sortMethod == props.method ? 'magenta' : 'white'
                }}
            >
                {props.content}
            </button>
        )
    }

function SortMethodButtons(props) {
    return (
        <div style={{marginTop: "0"}}>
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
function tagFilterProjects(p, includedTags) {
    if (includedTags.length > 0) {
        let pc = []
        
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

function TagFilterInput(props) {
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
                            let copy = [...props.includedTags]
                            copy.push(props.thisTag)
                            props.setIncludedTags(copy)
                        }
                    }
                }
                style={{margin: "10px"}}
            />
            <span>{props.thisTag}</span>
        </div>
    )
}

function  TagFilterInputs(props) {
    return (
        <div style={{marginTop: "10px"}}>
            <TagFilterInput includedTags={props.includedTags} setIncludedTags={props.setIncludedTags} thisTag={PTAG.APP} />
            <TagFilterInput includedTags={props.includedTags} setIncludedTags={props.setIncludedTags} thisTag={PTAG.UTIL} />
            <TagFilterInput includedTags={props.includedTags} setIncludedTags={props.setIncludedTags} thisTag={PTAG.GAME} />
            <TagFilterInput includedTags={props.includedTags} setIncludedTags={props.setIncludedTags} thisTag={PTAG.MOD} />
        </div>
    )
}

export default function Timeline() {
    const [sortMethod, setSortMethod] = useState("uDateD")
    const [includedTags, setIncludedTags] = useState([])

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
import { useState } from 'react'
import BigBox from './BigBox.jsx'

// Class for a single project to display.
class Project {
    constructor(title, description, createdDate, updatedDate, linkURL = "") {
        this.title = title
        this.description = description
        this.createdDate = createdDate
        this.updatedDate = updatedDate
        this.linkURL = linkURL
    }

    toHTML(key = 0) {
        return (
            <BigBox
                key = {key}
                head_content = {this.title}
                subtitle = {"Created: " + formatDate(this.createdDate) + "; Updated: " + formatDate(this.updatedDate)}
                body_content = {this.description}
                link = {this.linkURL}
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
        "https://github.com/Calebri/xcursor_theme_packager"
    ),
    new Project(
        "point-n-click",
        `Short demo for a point and click game made in Love2D (Lua framework) for a college project.
         Uses a custom modular point and click engine that I built specifically for this project.
         I made all the engine code and shaders while my co-collaborator designed the in-game graphics.`,
        new Date(2026, 3),
        new Date(2026, 4),
        "https://github.com/Calebri/point-n-click"
    ),
    new Project(
        "level-game",
        `Short platformer demo in GDevelop made for a college project.`,
        new Date(2026, 2),
        new Date(2026, 2),
        "https://github.com/Calebri/level-game"
    ),
    new Project(
        "A Walk in the Dark",
        `Short text-based game made in Twine Snowman and Javascript for a college project. It uses
         an experimental framework I created in Snowman to procedurally generate story pages to
         make the game different every time.`,
        new Date(2026, 2),
        new Date(2026, 2),
        "https://github.com/Calebri/A-Walk-in-the-Dark"
    ),
    new Project(
        "CloverPitAPHints",
        `A BepInEx plugin designed to implement CloverPit as a hint game for the Archipelago Multiworld.
         Sends hints out to the multiworld when certain deadlines are reached in-game.`,
        new Date(2025, 9),
        new Date(2026, 0),
        "https://github.com/Calebri/CloverPitAPHints"
    ),
    new Project(
        "Picture Poker Scratch",
        `A remake of the Picture Poker minigame from Super Mario 64 DS and New Super Mario Bros.
         in Scratch 3.0. Made in Turbowarp, although it requires no Turbowarp modules and can run
         in base Scratch 3.0.`,
        new Date(2023, 10),
        new Date(2024, 0),
        "https://github.com/Calebri/picture-poker-scratch"
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
         "https://github.com/Calebri/shepaug-schedule"
    ),
    new Project(
        "DSLightshow",
        `Python app to control and animate the lights on a PS5 DualSense controller.
         Has a GUI and multiple different animation presets.`,
        new Date(2022, 10),
        new Date(2022, 10),
        "https://github.com/Calebri/DSLightshow"
    ),
    new Project(
        "Game for 2021 Complexity Jam",
        `A game in Scratch for the 2021 Complexity Jam, which my middle school participated in.
         The theme, as I was told, was to make a game about some aspect of the COVID.`,
        new Date(2021, 4),
        new Date(2021, 5),
        "https://github.com/Calebri/2021-Complexity-Jam"
    ),
    new Project(
        "speed game",
        `A simple game in Unity where you move left and right to dodge obstacles.`,
        new Date(2020, 10),
        new Date(2020, 10),
        "https://github.com/Calebri/speed"
    ),
    new Project(
        "platformer",
        `Possibly my earliest programming project. A simple platforming game in Unity.
         Updated a few times, but was never fully finished.`,
        new Date(2020, 7),
        new Date(2020, 7),
        "https://github.com/Calebri/platformer"
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

export default function() {
    const [sortMethod, setSortMethod] = useState("cDateD")

    function SortMethodButton(props) {
        return (
            <button
                onClick={() => setSortMethod(props.method)}
                style={{
                    color: sortMethod == props.method ? 'magenta' : 'white',
                    borderColor: sortMethod == props.method ? 'magenta' : 'white'
                }}
            >
                {props.content}
            </button>
        )
    }

    return (
        <div className="routebody">
            <div>
                <SortMethodButton method="AZ" content="A→Z"/>
                <SortMethodButton method="ZA" content="Z→A"/>
                <SortMethodButton method="cDateD" content="Created ↓"/>
                <SortMethodButton method="cDateA" content="Created ↑"/>
                <SortMethodButton method="uDateD" content="Updated ↓"/>
                <SortMethodButton method="uDateA" content="Updated ↑"/>
            </div>
            <div>
                {/* Sorted projects here */}
                {projectsToHTML(sortProjects(projects, sortMethod))}
            </div>
        </div>
    )
}
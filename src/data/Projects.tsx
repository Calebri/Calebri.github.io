import Project from '../classes/Project.tsx'
import PTAG from '../data/ProjectTags.tsx'

const projects = [
    new Project(
        "XCursor Theme Packager",
        `Utility script in Bash that automatically creates X11 cursor packages from raw images using
         xcursorgen.`,
        new Date(2026, 7),
        new Date(2026, 7),
        "https://github.com/Calebri/xcursor_theme_packager",
        [PTAG.UTIL]
    ).addReleasesLink(),
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
    ).addReleasesLink(),
    new Project(
        "level-game",
        `Short platformer demo in GDevelop made for a college project.`,
        new Date(2026, 2),
        new Date(2026, 2),
        "https://github.com/Calebri/level-game",
        [PTAG.GAME]
    ).addDemoLink("https://calebri.github.io/level-game/"),
    new Project(
        "A Walk in the Dark",
        `Short text-based game made in Twine Snowman and Javascript for a college project. It uses
         an experimental framework I created in Snowman to procedurally generate story pages to
         make the game different every time.`,
        new Date(2026, 2),
        new Date(2026, 2),
        "https://github.com/Calebri/A-Walk-in-the-Dark",
        [PTAG.GAME]
    ).addDemoLink("https://calebri.github.io/A-Walk-in-the-Dark/").addReleasesLink(),
    new Project(
        "CloverPitAPHints",
        `A BepInEx plugin designed to implement CloverPit as a hint game for the Archipelago Multiworld.
         Sends hints out to the multiworld when certain deadlines are reached in-game.`,
        new Date(2025, 9),
        new Date(2026, 0),
        "https://github.com/Calebri/CloverPitAPHints",
        [PTAG.MOD]
    ).addLink("Thunderstore", "https://thunderstore.io/c/clover-pit/p/Calebri/CloverPitAPHints/").addReleasesLink(),
    new Project(
        "Picture Poker Scratch",
        `A remake of the Picture Poker minigame from Super Mario 64 DS and New Super Mario Bros.
         in Scratch 3.0. Made in Turbowarp, although it requires no Turbowarp modules and can run
         in base Scratch 3.0.`,
        new Date(2023, 10),
        new Date(2024, 0),
        "https://github.com/Calebri/picture-poker-scratch",
        [PTAG.GAME]
    ).addDemoLink("https://calebri.github.io/picture-poker-scratch/"),
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
    ).addDemoLink("https://calebri.github.io/shepaug-schedule"),
    new Project(
        "DSLightshow",
        `Python app to control and animate the lights on a PS5 DualSense controller.
         Has a GUI and multiple different animation presets.`,
        new Date(2022, 10),
        new Date(2022, 10),
        "https://github.com/Calebri/DSLightshow",
        [PTAG.APP]
    ).addReleasesLink(),
    new Project(
        "Game for 2021 Complexity Jam",
        `A game in Scratch for the 2021 Complexity Jam, which my middle school participated in.
         The theme, as I was told, was to make a game about some aspect of the COVID.`,
        new Date(2021, 4),
        new Date(2021, 5),
        "https://github.com/Calebri/2021-Complexity-Jam",
        [PTAG.GAME]
    ).addDemoLink("https://calebri.github.io/2021-Complexity-Jam/").addReleasesLink(),
    new Project(
        "speed game",
        `A simple game in Unity where you move left and right to dodge obstacles.`,
        new Date(2020, 10),
        new Date(2020, 10),
        "https://github.com/Calebri/speed",
        [PTAG.GAME]
    ).addReleasesLink(),
    new Project(
        "platformer",
        `Possibly my earliest programming project. A simple platforming game in Unity.
         Updated a few times, but was never fully finished.`,
        new Date(2020, 7),
        new Date(2020, 7),
        "https://github.com/Calebri/platformer",
        [PTAG.GAME]
    ).addReleasesLink()
]

export default projects
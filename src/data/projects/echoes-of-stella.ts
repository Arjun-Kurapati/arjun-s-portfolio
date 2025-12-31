import { Project } from "./types";

// Fully independent project: Echoes of Stella
export const echoesOfStella: Project = {
  id: "echoes-of-stella",
  title: "Echoes of Stella",
  description: "A first-person psychological horror game focusing on atmosphere, tension, and exploration",
  category: "group",
  icon: "Gamepad2",
  genre: "First Person · Psychological Horror",
  thumbnailImage: "/images/echoes-of-stella/cover.jpg",
  coverImage: "/images/echoes-of-stella/cover.jpg",
  
  sections: [
    // Overview Section with cover image
    {
      type: "imageGrid",
      title: "",
      images: [
        { src: "/images/echoes-of-stella/cover.jpg", alt: "Echoes of Stella Cover" },
      ],
      columns: 1,
    },
    
    // Two Column: Project Overview + Focus Areas
    {
      type: "twoColumn",
      left: {
        title: "Project Overview",
        paragraphs: [
          {
            text: "Echoes of Stella is a first-person psychological horror game created during Game Project 3 at Futuregames. The game focuses on atmosphere, tension, and exploration instead of combat.",
            highlights: ["Echoes of Stella", "first-person psychological horror", "Futuregames", "atmosphere", "tension", "exploration"],
          },
          {
            text: "It was developed by a team of 15 students over a seven-week period, with the goal of creating fear through level design, gameplay systems, and scripted events. The project was built in Unreal Engine 5.",
            highlights: ["15 students", "seven-week period", "level design", "gameplay systems", "scripted events", "Unreal Engine 5"],
          },
          {
            text: "My work focused on level design, technical gameplay systems, and gameplay narrative planning.",
            highlights: ["level design", "technical gameplay systems", "gameplay narrative planning"],
          },
        ],
      },
      right: {
        title: "Focus Areas",
        bulletPoints: [
          {
            label: "Level Design:",
            text: "Designed level layouts and player flow, focusing on pacing, exploration, tension, and guiding the player naturally through the environment.",
          },
          {
            label: "Technical Level Design:",
            text: "Implemented gameplay systems using Unreal Engine Blueprints, including door systems, player fall traps, triggers, and object interactions.",
          },
          {
            label: "Gameplay Narrative Design:",
            text: "Planned how the story is experienced through gameplay by deciding progression, event timing, and story moments delivered through level design and triggers.",
          },
          {
            label: "Gameplay Systems & Triggers:",
            text: "Implemented scripted events such as objects falling, objects moving suddenly, environment changes, scare spawns, and trap sequences with camera shake.",
          },
          {
            label: "UI & Gameplay Integration:",
            text: "Implemented the mirror shard system, including UI feedback, shard collection logic, and the final mirror interaction sequence.",
          },
        ],
      },
    },
    
    // Overview Screenshots
    {
      type: "screenshotGallery",
      title: "Overview Screenshots",
      images: [
        "/images/echoes-of-stella/screenshot-gallery.jpg",
        "/images/echoes-of-stella/overview.jpg",
      ],
    },
    
    // Game Design Section
    {
      type: "text",
      title: "Game Design (My Contribution)",
      paragraphs: [
        {
          text: "My role in game design focused on planning the gameplay narrative and deciding how the story is experienced through play, rather than writing full dialogue or deep lore. I thought about what the player sees, hears, and does, and how those moments slowly explain the story.",
          highlights: ["gameplay narrative", "story is experienced through play"],
        },
        {
          text: "I planned story flow using level progression, gameplay systems, and scripted events, so the player understands things naturally through movement and interaction. I used the Game Design Document as a guide to align gameplay, level design, AI behavior, and story beats, then applied those ideas directly inside the levels.",
          highlights: ["level progression", "gameplay systems", "scripted events", "Game Design Document"],
        },
      ],
    },
    
    // Two Column: Narrative + Design Pillars
    {
      type: "twoColumn",
      left: {
        title: "Narrative Summary",
        paragraphs: [
          {
            text: "Planned when and where story moments happen during gameplay, using level progression to guide the player through the mirror world naturally.",
            highlights: ["story moments", "level progression", "mirror world"],
          },
          {
            text: "Used gameplay events, triggers, environment changes, and mirror shard progression to support story beats and pacing.",
            highlights: ["gameplay events", "triggers", "environment changes", "mirror shard progression"],
          },
          {
            text: "Delivered the story through player movement, interactions with mirrors and objects, and scripted events instead of dialogue or cutscenes.",
            highlights: ["player movement", "interactions", "scripted events"],
          },
        ],
      },
      right: {
        title: "Design Pillars",
        pillars: [
          { icon: "Compass", label: "Exploration" },
          { icon: "BookOpen", label: "Storytelling" },
        ],
        documentLink: {
          text: "Link to Game Design Document",
          url: "#",
        },
      },
    },
    
    // Gameplay Systems Section
    {
      type: "text",
      title: "Gameplay Systems & Interactions (My Contribution)",
      paragraphs: [
        {
          text: "My work did not focus on player movement mechanics or AI Ghost. Instead, I worked on gameplay systems that react to the player's actions and control how the environment responds during play. These systems were designed to support horror, tension, and story progression through interaction and triggers.",
          highlights: ["gameplay systems", "environment responds", "horror", "tension", "story progression"],
        },
      ],
    },
    
    // Gameplay Systems Details
    {
      type: "imageGrid",
      title: "",
      description: {
        text: "Door Systems: Implemented interactive door systems using Blueprints. Doors react to player input, triggers, and progression states.",
        highlights: ["Door Systems", "Blueprints", "triggers", "progression states"],
      },
      bulletPoints: [
        {
          label: "Triggers & Scripted Events:",
          text: "Implemented trigger-based gameplay events across the levels. Triggers were used for horror events and environment changes.",
        },
        {
          label: "Traps:",
          text: "Implemented player fall traps that drop the player into new areas, used camera shake and forced movement to sell impact and fear.",
        },
        {
          label: "Mirror Shard Gameplay System:",
          text: "Implemented mirror shard collection logic and connected shard collection to gameplay progression. Implemented the final mirror interaction where shards are placed into the mirror holder.",
        },
      ],
      images: [
        { src: "/images/echoes-of-stella/gameplay-systems.jpg", alt: "Gameplay Systems", caption: "Gameplay Systems" },
      ],
      columns: 1,
    },
    
    // Exploration Section
    {
      type: "imageGrid",
      title: "Exploration & Interactive Objects (My Contribution)",
      description: {
        text: "My work on exploration focused on interactive objects and progression items that guide the player through the level and support the gameplay narrative.",
        highlights: ["interactive objects", "progression items", "gameplay narrative"],
      },
      bulletPoints: [
        {
          label: "Mirror Shard & Key System:",
          text: "The mirror shard system and key collect system was designed as a key exploration mechanic. Shards and keys are placed in specific areas to guide the player through the level and encourage exploration. Collecting mirror shards and keys is required to progress, and their placement helps control pacing while supporting the story flow naturally during gameplay.",
        },
        {
          label: "Interactive Environment Objects:",
          text: "Implemented interactive environment objects that react to the player. Some objects fall or move suddenly when the player enters an area, creating surprise and tension. These events are triggered based on player position and progression, making the environment feel alive, unsafe, and closely connected to the horror experience.",
        },
      ],
      images: [
        { src: "/images/echoes-of-stella/exploration.jpg", alt: "Exploration", caption: "Exploration" },
      ],
      columns: 1,
    },
    
    // Level Design Section
    {
      type: "levelLayout",
      title: "Level Design",
      description: [
        {
          text: "The blockout level is divided into three phases, with three sections in each phase. The flow starts calm, slowly builds tension, and ends in intense horror.",
          highlights: ["three phases", "calm", "tension", "intense horror"],
        },
        {
          text: "Each phase is designed to change how the player feels as they move through the space. The level uses space, sound, and interaction to guide the player and deliver story moments through gameplay instead of cutscenes.",
          highlights: ["space", "sound", "interaction", "story moments"],
        },
        {
          text: "Exploration is encouraged early, but safety is gradually removed, keeping the player alert and tense until the end.",
          highlights: ["Exploration", "safety is gradually removed", "alert and tense"],
        },
      ],
      mapImage: "/images/echoes-of-stella/level-layout.jpg",
    },
    
    // Level Beats
    {
      type: "levelBeats",
      title: "Level Beats & Walkthrough",
      phases: [
        {
          name: "Phase 1 - Emotional Setup",
          beats: [
            { number: 1, label: "Safe Introduction Space" },
            { number: 2, label: "Environmental Storytelling" },
            { number: 3, label: "First Tension Moment" },
          ],
        },
        {
          name: "Phase 2 - Rising Tension",
          beats: [
            { number: 4, label: "Ghost Introduced" },
            { number: 5, label: "Traps" },
            { number: 6, label: "First Chase" },
          ],
        },
        {
          name: "Phase 3 - Horror Climax",
          beats: [
            { number: 7, label: "Loss of Comfort" },
            { number: 8, label: "Sudden Changes" },
            { number: 9, label: "Survive and Escape" },
          ],
        },
      ],
      images: [
        "/images/echoes-of-stella/level-beats.jpg",
      ],
    },
    
    // Pacing Graph
    {
      type: "graph",
      title: "Pacing & Tension Graph",
      imageUrl: "/images/echoes-of-stella/pacing-graph.jpg",
    },
    
    // Design Techniques Section
    {
      type: "imageGrid",
      title: "Design Techniques (My Contribution)",
      description: {
        text: "While working on level design and gameplay implementation, I focused on guiding the player naturally, building tension, and supporting the gameplay narrative through space, timing, and interaction. My approach was not about visual polish alone, but about how level structure, triggers, and events affect player experience.",
        highlights: ["guiding the player naturally", "building tension", "gameplay narrative", "level structure", "triggers", "events"],
      },
      bulletPoints: [
        {
          label: "Player Guidance Through Level Design:",
          text: "Used level layout and paths to guide players without heavy UI. Placed doors, corridors, and narrow spaces to control player movement. Used open and closed spaces to manage pacing and tension.",
        },
        {
          label: "Spatial Tension & Flow:",
          text: "Designed tight corridors to create fear and pressure. Used larger spaces after tight areas to give brief relief. Controlled how much the player can see at a time.",
        },
        {
          label: "Surprise Moments:",
          text: "Implemented moments where the environment behaves unexpectedly. Used sudden events to break player expectations. These moments were carefully timed using triggers, not random behavior.",
        },
      ],
      images: [
        { src: "/images/echoes-of-stella/design-techniques.jpg", alt: "Design Techniques", caption: "Design Techniques" },
      ],
      columns: 1,
    },
    
    // Development Section
    {
      type: "development",
      title: "Pre-Production & Development Approach (My Contribution)",
      intro: {
        text: "For Echoes of Stella, I followed a clear and iterative workflow focused on level design, gameplay planning, and technical implementation. My approach was to plan first, test early, and then improve through iteration. This helped me make sure the gameplay, story moments, and level flow worked well together.",
        highlights: ["Echoes of Stella", "iterative workflow", "level design", "gameplay planning", "technical implementation"],
      },
      subsections: [
        {
          title: "Planning & Development Approach",
          paragraphs: [
            { text: "Week 1: Idea & Planning - Defined the core idea and theme.", highlights: ["Week 1:"] },
            { text: "Week 2: Map & Layout Planning - Planned level layouts and player paths.", highlights: ["Week 2:"] },
            { text: "Week 3: Initial Blockout - Built the first playable version.", highlights: ["Week 3:"] },
            { text: "Week 4: Gameplay Implementation - Added gameplay systems and triggers.", highlights: ["Week 4:"] },
            { text: "Week 5-7: Iteration, Level Dressing & Polish - Refined and polished the experience.", highlights: ["Week 5-7:"] },
          ],
          media: {
            type: "image",
            src: "/images/echoes-of-stella/development.jpg",
          },
        },
        {
          title: "Production & Process",
          paragraphs: [
            { text: "My level design process focused on testing and iteration:", highlights: [] },
            { text: "Started with rough blockouts to check scale and readability.", highlights: ["rough blockouts", "scale", "readability"] },
            { text: "Implemented gameplay systems directly into the level.", highlights: ["gameplay systems"] },
            { text: "Iterated based on playtesting and feedback.", highlights: ["playtesting", "feedback"] },
            { text: "Refined layouts to improve tension, pacing, and clarity.", highlights: ["tension", "pacing", "clarity"] },
          ],
          media: {
            type: "image",
            src: "/images/echoes-of-stella/production.jpg",
          },
        },
      ],
    },
    
    // Post-Mortem
    {
      type: "postMortem",
      title: "Post-Mortem",
      insights: {
        text: "Looking back, I would have liked more time for playtesting and iteration, especially to fine-tune level flow, trigger timing, and scare pacing. I would also spend more time refining some late-game areas to make the final moments feel even stronger and more polished in terms of gameplay events and level progression.",
        highlights: ["playtesting", "iteration", "level flow", "trigger timing", "scare pacing"],
      },
      whatWentWell: [
        "Designing levels together with gameplay systems helped create a more connected experience",
        "Using triggers and scripted events allowed me to control pacing and tension",
        "Planning layouts in Photoshop before blockout saved time during implementation",
        "Level dressing helped improve atmosphere and visual storytelling",
      ],
      whatILearned: {
        intro: "This project helped me grow as a Level Designer and Technical Level Designer. I learned how to:",
        points: [
          "Plan gameplay and story through level design",
          "Implement complex interactions using Blueprints",
          "Balance atmosphere, tension, and player guidance",
          "Work under tight deadlines while iterating on gameplay",
        ],
        conclusion: "Seeing the game come together step by step was both challenging and rewarding, and it gave me a clearer understanding of how level design, gameplay systems, and narrative work together in a horror game.",
      },
      paragraphs: [],
    },
  ],
};

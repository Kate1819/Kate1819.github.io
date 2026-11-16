/*
  ============================================================
   EDIT ME: everything about you lives in this one file.
  ============================================================

  How to edit on GitHub:
    1. Open this file (edit-me.js) in your repository.
    2. Click the pencil icon, change the text between the quotes "like this".
    3. Click "Commit changes". The site updates in about a minute.

  Rules of thumb:
    - Keep the quotes and the comma at the end of each line.
    - Leave something as "" (empty) or [] (empty list) and that part
      simply stays hidden on the page. Nothing breaks.
    - To write an apostrophe inside quotes, just type it: "I'm".
*/

window.PROFILE = {

  // Your name as you want it shown, big, at the top of the page.
  name: "Kate",

  // A short line in the little badge above your name, e.g. "Product designer · London".
  headline: "Interactive worlds · 3D · Play",

  // One or two sentences under your name. Who you are and what you do.
  intro: "I make things you can explore. A city made of software, a living cell you can take apart, a sleepy planet and a train made of light. Each one turns something complicated into a place you can wander around.",

  // Where you are based (optional), e.g. "Manchester, UK".
  location: "",

  // The short film under the top of the page. Upload a new video (.mp4)
  // to the media folder and put its name here. Use "" to hide the film.
  introVideo: "media/kate-intro.mp4",
  introPoster: "media/kate-intro-poster.jpg",   // the still shown before it plays

  // ---------------- ABOUT ----------------
  // A few short paragraphs about you. Each paragraph goes in its own quotes,
  // separated by commas. The first one is shown larger.
  // Example:
  //   about: [
  //     "I'm a ... who loves ...",
  //     "Before this I ...",
  //   ],
  about: [
  ],

  // Your skills or tools, shown as small tags.
  // Example: skills: ["UX research", "Figma", "Three.js", "Teaching"],
  skills: [
  ],

  // Your background: jobs, studies, projects. Newest first.
  // Copy a { ... } block for each one.
  // Example:
  //   background: [
  //     { when: "2024 to now", what: "Junior Designer", where: "Studio Name" },
  //     { when: "2020 to 2023", what: "BSc Computer Science", where: "University Name" },
  //   ],
  background: [
  ],

  // ---------------- LINKS ----------------
  // Paste full links. Empty ones are hidden.
  linkedin: "",                              // e.g. "https://www.linkedin.com/in/your-name/"
  email: "",                                 // e.g. "you@example.com"
  github: "https://github.com/Kate1819",
  cv: "",                                    // link to your CV / resume PDF, if you have one

  // Any other links, e.g. { label: "Instagram", url: "https://..." }
  otherLinks: [
  ],

  // ---------------- PROJECTS ----------------
  // Your work, in the order shown. The first four also appear in the
  // picture collage at the top. To add a project, copy one { ... } block.
  //   color: "blue", "lime", "orange", "pink", "yellow" or "sky"
  //   image: a picture in the images folder (upload it there first),
  //          or a full https:// link to a picture. Wide pictures look best.
  //   source: link to the code, or "" to hide the Source button.
  projects: [
    {
      title: "Uptime",
      kind: "3D explorer · Learning",
      description: "A system you can walk through. A small 3D city where every building is part of a real app. Follow a request, grow it to 100 million users, and break things to see what happens.",
      link: "https://kate1819.github.io/uptime/",
      linkText: "Explore the city",
      source: "https://github.com/Kate1819/uptime",
      image: "images/uptime.webp",
      color: "blue",
    },
    {
      title: "Microcosm",
      kind: "3D model · Biology",
      description: "A cell you can hold. Orbit a living cell, meet its parts, then pull one out and watch what the cell does without it. No quizzes, just 27 small discoveries.",
      link: "https://kate1819.github.io/microcosm/",
      linkText: "Step inside",
      source: "https://github.com/Kate1819/microcosm",
      image: "images/microcosm.webp",
      color: "lime",
    },
    {
      title: "Meridian K-1",
      kind: "3D model · Design",
      description: "A train made of light and brass, inspired by mechanical wooden kits. Open the throttle and every wheel, rod and gear moves, then pull it apart or see it as a blueprint.",
      link: "https://kate1819.github.io/meridian-k1/",
      linkText: "Ride it",
      source: "https://github.com/Kate1819/meridian-k1",
      image: "images/meridian.webp",
      color: "orange",
    },
    {
      title: "Sleepy Planet",
      kind: "Game · Play",
      description: "Shh, Earth is dreaming. Cheeky stars tumble toward her, so pop them with rockets before she wakes. Every pop plays a note in her lullaby.",
      link: "https://kate1819.github.io/sleepy-planet/",
      linkText: "Play",
      source: "https://github.com/Kate1819/sleepy-planet",
      image: "images/sleepy-planet.webp",
      color: "pink",
    },
  ],

  // ---------------- AUTOMATIC PROJECTS ----------------
  // New projects can appear on your site by themselves, with no editing here.
  // On GitHub, open the new repository, click the gear next to "About",
  // type  portfolio  under Topics and save. It shows on your site straight away.
  // It uses the repository's name and description, its GitHub Pages link,
  // and a picture called preview.png in that repository if there is one.
  // Projects already listed above are never shown twice.
  autoProjects: {
    on: true,                 // change to false to turn this off
    githubUser: "Kate1819",
    topic: "portfolio",
    hide: [],                 // repository names to never show, e.g. ["Test-3"]
  },

  // The words that scroll across the coloured ribbon.
  ribbon: ["Interactive 3D", "Playful games", "Explorable explainers", "Sound & music", "Curious ideas"],

  // The line above the buttons at the bottom of the page.
  contactNote: "Want to chat about an idea, a collaboration or anything you saw here? I'd love to hear from you.",
};

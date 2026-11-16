# How to look after your website

Your site: **https://kate1819.github.io/**
Its files: **https://github.com/Kate1819/kate1819.github.io**

You can do everything on this page in the GitHub website. You don't need to install anything. Each change shows on your site about a minute after you save it. If you don't see it, refresh the page.

---

## Contents

1. [Change your details (name, intro, about, links)](#1-change-your-details)
2. [Add a new project automatically](#2-add-a-new-project-automatically)
3. [Add or change a project by hand](#3-add-or-change-a-project-by-hand)
4. [Change or add a picture](#4-change-or-add-a-picture)
5. [Publish a brand new project with its own link](#5-publish-a-brand-new-project-with-its-own-link)
6. [Hide a project](#6-hide-a-project)
7. [If something goes wrong](#7-if-something-goes-wrong)
8. [Change or hide the intro film](#8-change-or-hide-the-intro-film)

---

## 1. Change your details

Everything you write on the site is in one file called **`edit-me.js`**.

1. Open https://github.com/Kate1819/kate1819.github.io/blob/main/edit-me.js
2. Click the **pencil icon** (top right of the file).
3. Change only the text **between the quotes**, for example:
   ```
   name: "Kate",
   intro: "I make things you can explore...",
   linkedin: "https://www.linkedin.com/in/your-name/",
   ```
4. Click the green **Commit changes...** button, then **Commit changes** again.

Here is what you can fill in:

| Field | What it is |
|---|---|
| `name` | Your name, big at the top |
| `headline` | The small coloured line above your name |
| `intro` | One or two sentences under your name |
| `location` | Where you are based (optional) |
| `about` | A few paragraphs about you. Each one goes in its own quotes, followed by a comma |
| `skills` | Short tags, e.g. `["Figma", "3D", "Teaching"]` |
| `background` | Jobs or studies, e.g. `{ when: "2024 to now", what: "Designer", where: "Studio" },` |
| `linkedin`, `email`, `cv` | Your links. Each one gets a button at the bottom of the page |
| `otherLinks` | Any other links, e.g. `{ label: "Instagram", url: "https://..." },` |
| `ribbon` | The words that scroll across the page |
| `contactNote` | The sentence above the contact buttons |

**Golden rules**
- Keep the quotes `" "` and the comma `,` at the end of each line.
- Leave something empty (`""` or `[]`) and that part is simply hidden.
- Apostrophes are fine inside quotes, e.g. `"I'm"`.

---

## 2. Add a new project automatically

Your site checks your GitHub every time someone opens it, and shows any repository marked with the topic **portfolio**.

1. Open the project's repository on GitHub, for example `https://github.com/Kate1819/your-project`
2. On the right, next to **About**, click the **gear icon**.
3. In **Description**, write one sentence about the project. This becomes the text on its card.
4. In **Website**, tick **Use your GitHub Pages website**, if it is offered.
5. In **Topics**, type `portfolio` and press Enter.
6. Click **Save changes**.

That's it. The project now appears at the end of the "Things I've made" section, with a button to open it.

**The card's picture:** if the project's repository has a picture called **`preview.png`** next to its `index.html` (1200 x 630 pixels looks best), that picture is used. If not, GitHub's own preview card for the repository is shown instead.

Projects that are already listed by hand in `edit-me.js` are never shown twice.

---

## 3. Add or change a project by hand

Do this when you want to choose the exact wording, colour or order, or when you want the project to appear in the picture fan at the top of the page (the first four projects appear there).

1. Upload the picture first (see [section 4](#4-change-or-add-a-picture)).
2. Open `edit-me.js` and click the **pencil icon**.
3. Find `projects: [`. Each project looks like this:
   ```
   {
     title: "Uptime",
     kind: "3D explorer · Learning",
     description: "A system you can walk through...",
     link: "https://kate1819.github.io/uptime/",
     linkText: "Explore the city",
     source: "https://github.com/Kate1819/uptime",
     image: "images/uptime.webp",
     color: "blue",
   },
   ```
4. Copy a whole block, from `{` to `},`, and paste it where you want the new project to appear. The order in the file is the order on the page.
5. Change the text:
   - `link` is the live page. `linkText` is the words on its button.
   - `source` is the GitHub repository. Use `""` to hide the Source link.
   - `image` is `images/` followed by the picture's file name.
   - `color` can be `"blue"`, `"lime"`, `"orange"`, `"pink"`, `"yellow"` or `"sky"`.
6. Click **Commit changes**.

To remove a project, delete its whole block, from `{` to `},`.

---

## 4. Change or add a picture

1. Open https://github.com/Kate1819/kate1819.github.io/tree/main/images
2. Click **Add file** → **Upload files**, and drag your picture in.
   Use a wide picture (about 1200 x 630 pixels), saved as `.png`, `.jpg` or `.webp`. Short names without spaces work best, e.g. `star-garden.png`.
3. Click **Commit changes**.
4. In `edit-me.js`, set that project's `image` to the new name, e.g. `image: "images/star-garden.png",`

**The picture people see when you share your link** (on LinkedIn, for example) is `preview.png` in the main folder. To change it, upload a new picture with exactly that name. LinkedIn keeps old previews for a while. To refresh it, paste your link into https://www.linkedin.com/post-inspector/

---

## 5. Publish a brand new project with its own link

This is how your other projects were published. Each project gets its own address, like `https://kate1819.github.io/project-name/`.

1. Go to https://github.com/new
2. Give it a **Repository name**, e.g. `star-garden`. Use lowercase and dashes, no spaces. This becomes part of its link.
3. Choose **Public**, then click **Create repository**.
4. Click **uploading an existing file**, drag in the project's files (the main page must be called **`index.html`**), and add `preview.png` if you have one. Click **Commit changes**.
5. Go to **Settings** → **Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose **main** and **/ (root)**, and click **Save**.
6. Wait a minute or two. Your project is live at `https://kate1819.github.io/star-garden/`
7. Follow [section 2](#2-add-a-new-project-automatically) to add the `portfolio` topic, and it appears on your site.

---

## 6. Hide a project

- **An automatic project:** remove the `portfolio` topic from that repository (gear icon next to About). Or, in `edit-me.js`, add its repository name to `hide`, e.g. `hide: ["star-garden"],`
- **A project listed by hand:** delete its block in `edit-me.js`.
- **Turn off automatic projects completely:** in `edit-me.js`, set `on: false,` under `autoProjects`.

---

## 7. If something goes wrong

- **The page looks empty or the projects are missing** after you edited `edit-me.js`: there is usually a missing quote `"` or comma `,`. Open the file and click **History** (the clock icon). Open your last change to see exactly what changed, shown in red and green, and fix that spot.
- **A change doesn't show:** wait a minute and refresh. On a phone, close the tab and open the link again.
- **Check that the site is being published:** open the repository's **Actions** tab. A green tick means your last change is live. A red cross means GitHub couldn't publish it, so try saving the change again.
- **Undo anything:** every change is kept in **History**, so you can always look up the old text and copy it back.

---

## 8. Change or hide the intro film

The short film under the top of the page is `media/kate-intro.mp4` (10 seconds, no sound, it loops).

- **Hide it:** in `edit-me.js`, set `introVideo: "",`
- **Use a different video:** upload an `.mp4` to the `media` folder (**Add file** → **Upload files**). Keep it under about 10 MB, and use a wide 16:9 shape. Then set `introVideo: "media/your-video.mp4",`
- **The still shown before it plays:** upload a picture to `media` and set `introPoster` to its name.

# Kate

My little universe of interactive worlds.

**Visit:** https://kate1819.github.io/

![Preview](preview.png)

## Work

- [Uptime](https://kate1819.github.io/uptime/): a system architecture you can walk through
- [Microcosm](https://kate1819.github.io/microcosm/): a living cell you can hold
- [Meridian K-1](https://kate1819.github.io/meridian-k1/): a train made of light and brass
- [Sleepy Planet](https://kate1819.github.io/sleepy-planet/): shh, Earth is dreaming

## Updating the site

**Full step-by-step guide: [GUIDE.md](GUIDE.md)**


Everything you write lives in **`edit-me.js`**: name, intro, about, skills, background, links, projects and the words in the ribbon. Open it on GitHub, click the pencil, change the text between the quotes and click **Commit changes**. Anything left empty stays hidden. The site updates in about a minute.

## Adding a new project

**Automatic (no editing):**
1. Publish the new project in its own public repository, with GitHub Pages on, as usual.
2. On the repository page, click the gear next to **About**, add a short description, type `portfolio` under **Topics**, and save.
3. It now appears at the end of the Work section, with its description, a link to the live page and a picture. Add a file called `preview.png` (1200 x 630 looks best) to that repository to choose the picture yourself.

To hide one again, remove the topic, or add its name to `hide` in `edit-me.js`.

**By hand (to choose the wording, colour and order):**
1. Upload a wide picture to the `images` folder of this repository.
2. In `edit-me.js`, copy one of the `{ ... }` blocks under `projects`, paste it where you want the project to appear and change the text, links, `image` and `color`.
3. Commit. A project listed by hand is never shown twice, even if it also has the topic.

---

© 2026 Kate. All rights reserved. The games and code on this site may not be copied or reused without permission. See [LICENSE](LICENSE).

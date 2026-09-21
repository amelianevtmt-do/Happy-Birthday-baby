# 🎂 Birthday Surprise Website

A personal, interactive birthday surprise website — built with plain HTML, CSS, and JavaScript. No frameworks, no installs beyond a code editor, no database. Just open a file and start editing.

This README is written for someone who has never used Visual Studio Code before. Follow it top to bottom the first time.

---

## 1. What each file does

```
birthday-surprise/
│
├── index.html          ← the structure/content of every section
├── style.css            ← all the colors, fonts, spacing, animations
├── script.js             ← all the interactivity + the ONE place you edit content
│
├── assets/
│   ├── images/           ← put his/your photos here
│   ├── music/             ← put the background song here
│   └── icons/              ← optional, for a favicon or extra icons
│
└── README.md             ← this file
```

| File | What it's for | Do you need to edit it? |
|---|---|---|
| `index.html` | The skeleton of the page — headings, buttons, sections. | Rarely. Mostly you'll only touch this if you want to change wording that isn't in `script.js` (like button labels). |
| `style.css` | Colors, fonts, spacing, animations, responsiveness. | Only if you want to change the look (colors, fonts). |
| `script.js` | Contains a clearly marked block near the top called **"EDIT YOUR BIRTHDAY SURPRISE HERE"** — this is where 95% of your customizing happens: his name, the messages, timeline, photos, reasons, quiz, and the letter. | **Yes — this is the main file you'll edit.** |

---

## 2. Visual Studio Code setup (complete beginner tutorial)

### Step 1 — Install Visual Studio Code
1. Go to **https://code.visualstudio.com**
2. Click the big **Download** button for your operating system (Windows, Mac, or Linux).
3. Open the downloaded installer and follow the prompts (default settings are fine).

### Step 2 — Get the project folder
You already have the finished `birthday-surprise` folder (the one this README is inside of). Keep it somewhere easy to find, like your Desktop or Documents.

If you ever need to create the structure from scratch, it should look exactly like the tree in section 1 above.

### Step 3 — Open the folder in Visual Studio Code
1. Open VS Code.
2. Go to **File → Open Folder...**
3. Select the `birthday-surprise` folder and click **Open**.
4. You'll see the file list on the left (the "Explorer" panel) with `index.html`, `style.css`, `script.js`, and the `assets` folder.

### Step 4 — Confirm the files are all there
Click each file in the Explorer panel to open it in the editor. You should already see complete code in `index.html`, `style.css`, and `script.js` — nothing more to paste in, they're ready to go.

If you're starting from a blank folder instead: right-click the folder name → **New File** → type the filename (e.g. `index.html`) → paste in the matching code.

---

## 3. Adding your photos

1. In VS Code's Explorer panel, open the `assets/images` folder.
2. Drag and drop your photo files directly into that folder (or right-click the folder → **Reveal in File Explorer / Finder** and copy them in from there).
3. Open `script.js` and find the `memories` array near the top:

```javascript
const memories = [
    {
        image: "assets/images/photo1.jpg",
        caption: "One of my favorite memories ♡"
    },
    {
        image: "assets/images/photo2.jpg",
        caption: "This day was special."
    }
];
```

4. Change `"assets/images/photo1.jpg"` to match your actual filename exactly (capitalization and extension matter — `.jpg` and `.JPG` are treated as different files on some systems).
5. Add or delete entries in the array to match however many photos you have. Each one needs its own `{ image: ..., caption: ... }` block, separated by commas.

**Tip:** Resize very large photos (over ~3–4 MB each) before adding them, so the page loads quickly on his phone. Any free online "compress image" tool works fine.

---

## 4. Adding music

1. Find or export your song as an **MP3** file.
2. Rename it to `birthday-song.mp3` (or keep its name and update the code — see below).
3. Drag it into the `assets/music` folder.
4. If you used a different filename, open `index.html` and find this line:

```html
<audio id="bgMusic" loop>
    <source src="assets/music/birthday-song.mp3" type="audio/mpeg">
</audio>
```

Change `birthday-song.mp3` to your actual filename.

The music will **not** play automatically — browsers block that. He'll see a small music button in the bottom-right corner to press play himself.

**Note on copyright:** if you plan to publish this site publicly (see the GitHub Pages section), avoid uploading commercially copyrighted songs. A royalty-free or personally recorded track is the safest choice.

---

## 5. Customizing the content

Everything below is inside `script.js`, in the block marked:

```javascript
// =====================================
// ✨ EDIT YOUR BIRTHDAY SURPRISE HERE
// =====================================
```

| What you want to change | Variable to edit |
|---|---|
| His name | `birthdayPerson` |
| The short message under "Happy Birthday" | `birthdayMessage` |
| Timeline moments | `timeline` array |
| Photos & captions | `memories` array |
| "Reasons why I like you" cards | `reasons` array |
| Quiz questions & answers | `quizQuestions` array |
| The long personal letter | `letterMessage` |
| The very last message | `finalMessage` |

You don't need to touch anything below the line that says `DO NOT NEED TO EDIT BELOW THIS LINE`.

### Changing colors or fonts
Open `style.css` and look at the very top — the `:root { ... }` block. Each color is labeled, e.g.:

```css
--berry: #a6435c;   /* primary accent — buttons, headings */
```

Change the hex code (`#a6435c`) to any other color. You can pick colors visually at a site like `https://coolors.co` and paste the hex code in.

To change fonts, edit the Google Fonts link in `index.html` (`<head>` section) and the `--font-display` / `--font-body` values in `style.css`.

### Turning off animations
Everything already respects a visitor's "reduce motion" accessibility setting automatically — you don't need to do anything for that. If you personally want fewer floating hearts, open `script.js` and reduce the numbers in the particle-spawning section (search for `spawnParticle`).

---

## 6. Running the website (Live Server)

1. In VS Code, click the **Extensions** icon in the left sidebar (it looks like four squares).
2. Search for **"Live Server"** (by Ritwick Dey) and click **Install**.
3. In the Explorer panel, right-click `index.html`.
4. Select **"Open with Live Server"**.
5. Your default browser opens automatically showing the site — usually at an address like `http://127.0.0.1:5500`.
6. Any time you save a change to a file, the page refreshes automatically.

If you'd rather not install anything, you can also just double-click `index.html` to open it directly in a browser — it will work, just without the auto-refresh convenience.

---

## 7. Publishing it online (GitHub Pages)

This is how you get a real link (like `https://yourname.github.io/birthday-surprise/`) that he can open from his phone.

### Step 1 — Create a GitHub account
Go to **https://github.com** and sign up (it's free).

### Step 2 — Create a new repository
1. Click the **+** icon (top right) → **New repository**.
2. Name it something like `birthday-surprise` (or something less obvious if you'd like — see the privacy note below).
3. Set it to **Public** (GitHub Pages requires this on free accounts).
4. Click **Create repository**.

### Step 3 — Upload your website files
1. On the new repository's page, click **"uploading an existing file"** (or the **Add file → Upload files** button).
2. Drag in `index.html`, `style.css`, `script.js`, the `README.md`, and the entire `assets` folder (with your photos/music already inside it).
3. Scroll down and click **Commit changes**.

**Important:** `index.html` must sit at the top level of the repository (not inside a subfolder), or GitHub Pages won't find it.

### Step 4 — Enable GitHub Pages
1. In your repository, go to **Settings → Pages** (in the left sidebar).
2. Under **Branch**, choose `main` and folder `/ (root)`, then click **Save**.
3. Wait about a minute, then refresh the page — GitHub will show you the live URL.

### Step 5 — Get and send the link
The link will look like:

```
https://yourusername.github.io/birthday-surprise/
```

Copy it and send it however you like — text, DM, whatever.

### Updating the site after publishing
Whenever you want to change something:
1. Edit the files locally in VS Code and save.
2. Go back to your GitHub repository in the browser.
3. Click into the changed file → the pencil (✏️) **Edit** icon → paste in your updated code → **Commit changes**.

(Or, for multiple files at once: **Add file → Upload files** again — GitHub will ask to replace the existing ones.)

GitHub Pages automatically republishes within a minute or two of any commit.

---

## 8. Important privacy note

GitHub Pages sites are **public** — anyone with the link can open them, and search engines can technically index them if they find the link. Do not include:

- Passwords or private accounts
- Home addresses or phone numbers
- Anything you wouldn't want a stranger to stumble across

If you'd like the site to be harder to accidentally find, you can name the repository something unguessable (e.g. `for-alex-9284` instead of `birthday-surprise-for-alex`). This is **not the same as password protection** — anyone who has the exact link can still open it. Free GitHub Pages doesn't support real password locking; if that matters to you, that would require a different (paid or self-hosted) setup, which is outside the scope of this beginner tutorial.

---

## 9. Troubleshooting

**Photos aren't showing up**
- Double check the filename in `script.js` matches the actual file in `assets/images/` exactly, including capitalization and file extension.
- Make sure the photo was actually uploaded into the `assets/images` folder (and not accidentally left outside it, or inside a nested folder).

**Music button doesn't do anything**
- Confirm the file is named exactly `birthday-song.mp3` (or that you updated the filename in `index.html` to match).
- Some browsers require a real user click before any audio plays — this is expected and why there's a button instead of autoplay.

**The page looks broken after I edited something**
- Check the JavaScript console for errors: right-click the page → **Inspect** → **Console** tab. A red error message will usually point to the exact line and file.
- A very common mistake is a missing comma between items in an array (like `memories` or `reasons`) — every item except the last one needs a comma after its closing `}`.

**Live Server won't open / "port already in use"**
- Close other Live Server tabs/windows, or restart VS Code.

**GitHub Pages shows a 404 error**
- Make sure `index.html` is at the root of the repository, not inside a subfolder like `birthday-surprise/birthday-surprise/index.html`.
- Give it a minute or two after enabling Pages — the first deploy isn't instant.

**Text looks cut off or overlapping on mobile**
- This shouldn't happen since the layout is already responsive, but if you've added very long custom text (e.g. an extra-long letter), just try it in Live Server's mobile preview or on your own phone before sending the link, and shorten if needed.

---

Made with plain HTML, CSS, and JavaScript — no frameworks required. Happy editing, and happy birthday to whoever this is for. ♡

Birthday website 💗

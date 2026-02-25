# Site Design Language

## Aesthetic Goal

Terminal / IDE shell aesthetic. Every content section should feel like output from a command-line session — the user is
effectively `ssh`'d into `NiftyMike@mvillere.github.io` and exploring the filesystem. Commands should be plausible
Unix one-liners that a developer would immediately recognize, even when slightly fictional.

## Command Vocabulary

Each command prompt (`$ ...`) is a visual label that signals the *type* of content below it. Use the right command for
the right output type — consistency is what makes this feel like a real shell, not decoration.

---

### `whoami`
**When:** First-person identity summary — who you are at a glance.
**Content:** Name card, one-line title, bio paragraph.
**Used in:** About (hero)

---

### `cat <file>.txt`
**When:** Sequential prose output — reading a plain text file.
**Content:** Continuous narrative text, role descriptions, personal blurbs.
**Used in:** About (roles, education), Personal
**Rule:** If the content reads like paragraphs a human wrote, use `cat`.

---

### `man NiftyMike | grep 'SECTION'`
**When:** Capability enumeration — filtering a reference manual by topic.
**Content:** Skill tags, grouped capabilities. The `man` page is the canonical reference for the subject; `grep` selects
a section.
**Used in:** Skills
**Rule:** If the content is a structured list of *what you can do*, use `man | grep`. Section names should be
UPPERCASE to match real `man` page conventions.

---

### `ls -la <dir>/`
**When:** Navigable directory listing — items that can be clicked or followed.
**Content:** External link buttons, profile links, any set of "go here" items.
**Used in:** About (links)
**Rule:** If the output is a list of things to *navigate to*, use `ls`.

---

### `curl -s <url> | grep article`
**When:** Fetched remote content — articles, feeds, published writing.
**Content:** Article cards, author profiles linked to external sites.
**Used in:** Content

---

## Tabs That Intentionally Skip This Scheme

**Projects** and **Open Source** are card-heavy interfaces where the content is richer and more interactive
(expand/collapse, links, status badges, tag clouds). Applying command prompts there would feel forced — the cards
themselves carry enough visual identity. These two tabs are intentionally left without command chrome.

The unix scheme is most effective on text-heavy, prose-like sections (About, Skills, Content, Personal) where it
contextualizes *what kind of thing you're looking at*. On data-dense card grids it adds noise rather than signal.

---

## General Rules

- Every prose/text section should have a command prompt above it.
- The command should be plausible (a developer should not need to Google it), but it does not need to be
  copy-pasteable.
- Pipe characters (`|`) and flags (`-la`, `--oneline`) add authenticity.
- Avoid inventing commands that don't exist as real Unix utilities (e.g. no `nft-list`, `crypto-log`).
- Fictional flags on real commands are fine (e.g. `curl --list-articles` doesn't exist but reads naturally).
- Filenames in `cat` commands should use `kebab-case.txt` and describe the content literally.
- Don't overuse it — the scheme should feel like seasoning, not wallpaper.

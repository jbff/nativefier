**Note:** Original Nativefier is unmaintained and has been publicly archived: https://github.com/nativefier/nativefier

It was built a couple of years ago before the ability to [create shortcuts](https://support.google.com/chrome_webstore/answer/3060053?hl=en) for websites in Chrome, or [similarly](https://support.mozilla.org/en-US/kb/create-desktop-shortcut-website) on Firefox. Users who want to build and use their own website wrappers should strongly prefer these options as they are protected from security vulnerabilities by the browser's self updating mechanism.

If you need to build a bespoke application for distribution, consider using Electron directly which offers much more flexibility.

_Special thanks to [@ronjouch](https://github.com/ronjouch) and [@TheCleric](https://github.com/TheCleric) for keeping the lights on all this time._

---

This fork contains updated dependencies. See [DEPENDENCY_UPDATES.md](DEPENDENCY_UPDATES.md) for details. OpenAI Codex addressed vulnerabilities reported by `npm audit`. All Codex changes are documented in [CODEX_UPDATES.md](CODEX_UPDATES.md).

This code should build and run in a modern environment. It has been tested lightly on Linux, but no guarantees are made for other platforms or full functionality.

## Quick Start

```bash
git clone https://github.com/jbff/nativefier
cd nativefier
npm install
npm run build
```

and

```bash
npm link
```

will but a nativefier binary in your npm global bin directory.

and

```bash
node lib/cli.js
```

will let you run the CLI directly from the top level of the repo

All content below is the latest README.md from the archived project at the time of forking and has not been updated, so may be out of date in some specifics, but should be correct when describing usage and functionality of the project.

---

Note: Nativefier is unmaintained, please see https://github.com/nativefier/nativefier/issues/1577.

# Nativefier

![Example of Nativefier app in the macOS dock](.github/dock-screenshot.png)

You want to make a native-looking wrapper for WhatsApp Web (or any web page).

```bash
nativefier 'web.whatsapp.com'
```

![Walkthrough animation](.github/nativefier-walkthrough.gif)

You're done.

## Introduction

Nativefier is a command-line tool to easily create a “desktop app” for any web site
with minimal fuss. Apps are wrapped by [Electron](https://www.electronjs.org/)
(which uses Chromium under the hood) in an OS executable (`.app`, `.exe`, etc)
usable on Windows, macOS and Linux.

I built this because I grew tired of having to Alt-Tab to my browser and then search
through numerous open tabs when using Messenger or
Whatsapp Web ([HN thread](https://news.ycombinator.com/item?id=10930718)). Nativefier features:

- Automatically retrieval of app icon / name
- Injection of custom JS & CSS
- Many more, see the [API docs](API.md) or `nativefier --help`

## Installation

Install Nativefier globally with `npm install -g nativefier` . Requirements:

- macOS 10.13+ / Windows / Linux
- [Node.js](https://nodejs.org/) ≥ 16.9 and npm ≥ 7.10

Optional dependencies:

- [ImageMagick](http://www.imagemagick.org/) or [GraphicsMagick](http://www.graphicsmagick.org/) to convert icons.
  Be sure `convert` + `identify` or `gm` are in your `$PATH`.
- [Wine](https://www.winehq.org/) to build Windows apps from non-Windows platforms.
  Be sure `wine` is in your `$PATH`.

<details>
  <summary>Or install with Docker (click to expand)</summary>

  - Pull the image from [Docker Hub](https://hub.docker.com/r/nativefier/nativefier): `docker pull nativefier/nativefier`
  - ... or build it yourself: `docker build -t local/nativefier .`
    (in this case, replace `nativefier/` in the below examples with `local/`)

  By default, `nativefier --help` will be executed.
  To build e.g. a Gmail app into `~/nativefier-apps`,

  ```bash
  docker run --rm -v ~/nativefier-apps:/target/ nativefier/nativefier https://mail.google.com/ /target/
  ```

  You can pass Nativefier flags, and mount volumes to pass local files. E.g. to use an icon,

  ```bash
  docker run --rm -v ~/my-icons-folder/:/src -v $TARGET-PATH:/target nativefier/nativefier --icon /src/icon.png --name whatsApp -p linux -a x64 https://web.whatsapp.com/ /target/
  ```
</details>

<details>
  <summary>Or install with Snap & AUR (click to expand)</summary>

  These repos are *not* managed by Nativefier maintainers; use at your own risk.
  If using them, for your security, please inspect the build script.

  - [Snap](https://snapcraft.io/nativefier)
  - [AUR](https://aur.archlinux.org/packages/nodejs-nativefier)
</details>

## Usage

To create an app for medium.com, simply `nativefier 'medium.com'`

Nativefier will try to determine the app name, and well as other options that you
can override. For example, to override the name, `nativefier --name 'My Medium App' 'medium.com'`

**Read the [API docs](API.md) or run `nativefier --help`**
to learn about command-line flags and configure your app.

## Troubleshooting

**See [CATALOG.md](CATALOG.md) for site-specific ideas & workarounds contributed by the community**.

If this doesn’t help, go look at our [issue tracker](https://github.com/nativefier/nativefier/issues).

## Development

Help welcome on [bugs](https://github.com/nativefier/nativefier/issues?q=is%3Aopen+is%3Aissue+label%3Abug) and
[feature requests](https://github.com/nativefier/nativefier/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request)!

Docs: [Developer / build / hacking](HACKING.md), [API / flags](API.md),
[Changelog](CHANGELOG.md).

License: [MIT](LICENSE.md).

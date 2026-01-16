# twinni6glass
Liquid Glass inspired Spicetify theme, based of dribbblish

also used in the screenshot "no controls" by: (https://github.com/ohitstom/spicetify-extensions)

# Showcase 
![twinni6glass](https://raw.githubusercontent.com/john-json/twinni6glass/refs/heads/main/Screenshots/twinni6glass-dark.png)

# Twinni6Glass for Spicetify

Twinni6Glass is a glassmorphic Spicetify theme that brings a macOS Tahoe–style translucent look to the Spotify desktop client. It features soft blur, rounded corners, and a clean layout designed for both dark and light appearances via Spicetify’s theme and color scheme system.

## Features

- Glassmorphic panels and playback bar inspired by macOS Music / Finder. 
- Separate color schemes defined in color.ini (for example Glass and Glass-light). 
- Custom layout and spacing for the now playing bar, headers, and sidebars via user.css.
- Optional behavior tweaks and dynamic appearance via theme.js (if enabled in your setup). 

## 1. Prerequisites

Before installing Twinni6Glass you need:

- Spotify desktop client (latest stable version).
- Spicetify CLI installed and working on your system. 
- Basic familiarity with running terminal or PowerShell commands.

Spicetify installation guide:
- Docs: https://spicetify.app/docs/advanced-usage/installation/ 
- Themes overview: https://spicetify.app/docs/customization/themes 

--------------------------------
2. Installation on macOS & Linux
--------------------------------

2.1 Locate your Spicetify theme folder

Default themes directory on Linux/macOS: 

```bash
    ~/.config/spicetify/Themes
```
2.2 Copy the Twinni6Glass folder

Clone or download this repository, then copy the Twinni6Glass folder into your Spicetify Themes directory.

Example (bash):
```bash
    cd /path/to/where/you/downloaded/Twinni6Glass
    cp -r Twinni6Glass ~/.config/spicetify/Themes/
```

You should end up with:
```bash
    ~/.config/spicetify/Themes/Twinni6Glass/
      ├── color.ini
      ├── user.css
      ├── theme.js        # optional, if present
      ├── images/         # screenshots / assets
      └── extensions/     # optional extra JS
```
2.3 Enable CSS and color injection

```bash
    spicetify config inject_css 1
    spicetify config replace_colors 1
```
If theme.js or any theme-specific extensions in extensions/ are required, make sure extensions are enabled in your Spicetify config according to the official docs. 

2.4 Select the theme and color scheme

```bash

    spicetify config current_theme Twinni6Glass
```
If color.ini defines multiple schemes (for example Glass and Glass-light), choose one:
```bash
    spicetify config color_scheme Glass-dark
    # or
    spicetify config color_scheme Glass-light(work in progress)
```
2.5 Apply changes

```bash

    spicetify apply
```
Restart Spotify if it does not refresh automatically.

-----------------------------
3. Installation on Windows
-----------------------------

3.1 Locate your Spicetify theme folder

Default themes directory on Windows: 
```bash
    %appdata%\spicetify\Themes
```
You can paste that path into the Explorer address bar or use PowerShell:

PowerShell:
```bash
    cd "$env:APPDATA\spicetify\Themes"
```
3.2 Copy the Twinni6Glass folder

Download or clone this repository, then copy Twinni6Glass into the themes directory.

Example (PowerShell):
```bash
    cd "C:\Path\To\Downloaded\Repo"
    Copy-Item -Recurse ".\Twinni6Glass" "$env:APPDATA\spicetify\Themes\Twinni6Glass"
```
Resulting structure:
```bash
    %appdata%\spicetify\Themes\Twinni6Glass\
      ├── color.ini
      ├── user.css
      ├── theme.js
      ├── images\
      └── extensions\
```
3.3 Enable CSS and color injection

PowerShell:
```bash
    spicetify config inject_css 1
    spicetify config replace_colors 1
```
Enable extensions if needed for theme.js or any bundled extensions.

3.4 Select the theme and color scheme

PowerShell:
```bash
    spicetify config current_theme Twinni6Glass
    spicetify config color_scheme Glass-dark
    # or
    spicetify config color_scheme Glass-light (work in progress)
```
3.5 Apply changes

PowerShell:
```bash
    spicetify apply
```
Restart Spotify.

---------------------------------------
4. Switching between dark and light
---------------------------------------

If Twinni6Glass includes multiple color schemes in color.ini (e.g. a dark “Glass” and a light “Glass-light”), you can switch between them at any time:

```bash

    spicetify config color_scheme twinni6glass
    spicetify apply

    # or

    spicetify config color_scheme Glass-light(work in progress)
    spicetify apply
```
If theme.js contains logic to react to system appearance (such as prefers-color-scheme), make sure JavaScript/extension injection is enabled in Spicetify so that the theme can respond dynamically. 

---------------------------
5. Uninstall / Revert
---------------------------

To go back to the default look or another theme:

Bash / PowerShell:
```bash
    spicetify config current_theme Sleek        # or any other installed theme
    spicetify config color_scheme Spotify      # or desired scheme
    spicetify apply
```
To completely stop using custom themes, follow the “Reset / Uninstall” section in the Spicetify documentation.

--------------
6. Credits
--------------

- Built for the Spicetify ecosystem: https://spicetify.app 
- Theme structure and configuration follow the official Spicetify theme guidelines. 
- Designed and developed by Twinni6 (replace with your preferred name/handle).

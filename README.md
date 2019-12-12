# TKoK Talent Tree Simulator
The code behind [this](https://angelxice.ca/etc/tkok/ttree/TreeSimulator.html).

### Current Status
Completed classes: Arcanist, Phantom Stalker, Warrior, Chaotic Knight
Uncompleted classes: Everything else

### Running the simulator
Just open `TreeSimulator.html` in your browser. The simulator is pure HTML+JS, so no other setup is necessary.

### Adding a class
1. Create the JS data file for the class (see below).
2. Uncomment the two dropdown entries in `TreeSimulator.html` for the class.
3. Uncomment the entry for that class's `.js` file at the bottom of `TreeSimulator.html`.
4. Inside `scripts/index.js`, do a Find (CTRL+F) for your given class's identifier (e.g. `shadow_shaman`). You'll find a few commented blocks -- uncomment them.

### The class data
The class scripts are located in `scripts/`. At the very top of each script is the following line:
`var warrior_skills = [`
This has to be the correct identifier for the class.

The rest of the file follows a fairly consistent pattern. The class data is divided into 6 columns, with 5 talents in each column. Each talent looks something like this:
```js
{
    "hidden": 0,
    "image": 1811,
    "title": "Improved Shield Slam",
    "resource": "",
    "maxLevel": 3,
    "lvlReq": 4,
    "locked": 1,
    "lockReq": "1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
    "requirement": "",
    "info": "p",
    "texts": [
        "",
        "Shield Slam now stuns the target for a short duration, or deals <span class='info_blue'>16%</span> more damage against targets immune to being stunned.",
        "Shield Slam now stuns the target for a short duration, or deals <span class='info_blue'>32%</span> more damage against targets immune to being stunned.",
        "Shield Slam now stuns the target for a short duration, or deals <span class='info_blue'>48%</span> more damage against targets immune to being stunned.<br>Defensive Stance: Shield Slam grants a <span class='info_blue'>1.5s</span> buff that reflects all physical damage taken back to the attacker.<br>Aggressive Stance: Shield Slam grants a <span class='info_blue'>1s</span> buff that adds <span class='info_blue'>100%</span> Attack Crit Power.",
    ]
}
```
The meaning of all these properties is as follows:

Field Name | Type | Description
---- | ---- | ----
hidden | Boolean (0 or 1) | If 1, it means this talent slot is empty (there is no talent in that slot).
image | Integer | The icon used for the talent. It's the name of an image in `images/skills/`, you can check that folder for all the talent icons.
title | String | The name of the talent.
resource | String | Sub-text for the talent. This is only used to display `Hotkey: X` for active skills.
maxLevel | Integer | The maximum amount of points that can be spent on the talent.
lvlReq | Integer | The level requirement for the talent.
locked | Boolean (0 or 1) | If 0, this talent has no prerequisites. If 1, then it does.
lockReq | String | A string containing 30 digits, separated by dashes. Each digit corresponds to a position on the talent tree, specifying the prerequisites for a talent. For a live example, check out Shield Slam / Improved Shield Slam / Shield Spike in `scripts/warrior.js`.
requirement | String | This field is used internally. Leave it empty.
info | String | Contains the header text for the talent. If the talent is passive, then this should just contain the value "p". For actives, it contains the target and affected by info.
texts | Array (String) | The descriptions for each talent. The first entry is always an empty string `""`. Each line after that represents the levels of the talent.

var barbarian_skills = [
    column1 = [
        {
            "hidden": 0,
            "image": 303,
            "title": "Cleave",
            "resource": "Hotkey: Q",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Toggleable</span></p><p><span class='info_gray'>Melee / Enhancement / Self</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Damage</span></p>",
            "texts": [
                "",
                "<p><span class='info_gray'>Teaches Cleave: Causes autoattacks to deal 70% of their damage in a small AoE around the target. Consumes <span class='info_blue'>3</span> mana per hit.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 311,
            "title": "Improved Cleave",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 10,
            "locked": 1,
            "lockReq": "1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "The AoE damage dealt by Cleave now ignores armor. Increase Cleave's damage ratio from 70% to <span class='info_blue'>77%</span>.",
                "The AoE damage dealt by Cleave now ignores armor. Increase Cleave's damage ratio from 70% to <span class='info_blue'>84%</span>.",
                "The AoE damage dealt by Cleave now ignores armor. Increase Cleave's damage ratio from 70% to <span class='info_blue'>91%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 310,
            "title": "Eviscerate",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 26,
            "locked": 1,
            "lockReq": "1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Cleave deals <span class='info_blue'>20%</span> more damage to the primary target. Secondary targets hit by Cleave's AoE will also bleed and lose life equal to <span class='info_blue'>20%</span> of damage dealt over the course of 5s.",
                "Cleave deals <span class='info_blue'>40%</span> more damage to the primary target. Secondary targets hit by Cleave's AoE will also bleed and lose life equal to <span class='info_blue'>40%</span> of damage dealt over the course of 5s.",
                "Cleave deals <span class='info_blue'>60%</span> more damage to the primary target. Secondary targets hit by Cleave's AoE will also bleed and lose life equal to <span class='info_blue'>60%</span> of damage dealt over the course of 5s.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 304,
            "title": "Battle Lust",
            "resource": "Hotkey: T",
            "maxLevel": 1,
            "lvlReq": 12,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Area Caster</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Hero Level</span></p>",
            "texts": [
                "",
                "Teaches Battle Lust: Grants all allied units (including yourself) in <span class='info_blue'>625</span> AoE a buff that causes them to recover a small amount of health with autoattacks.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 312,
            "title": "Improved Battle Lust",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 26,
            "locked": 1,
            "lockReq": "0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Battle Lust now also adds bonus spell and attack critical chance while active. This bonus increases based on your Hero Level.",
            ]
        }
    ],
    column2 = [
        {
            "hidden": 0,
            "image": 391,
            "title": "Deep Slice",
            "resource": "Hotkey: W",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Melee / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical</span></p>",
            "texts": [
                "",
                "Teaches Deep Slice: A single target attack that deals physical damage.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 315,
            "title": "Improved Deep Slice",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 6,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Deep Slice now causes the target to bleed for <span class='info_blue'>14%</span> of Deep Slice's damage per second for <span class='info_blue'>5s</span>."
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 393,
            "title": "Berserker Rage",
            "resource": "Hotkey: R",
            "maxLevel": 1,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Self</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical, Hero Level</span></p>",
            "texts": [
                "",
                "Teaches Berserker Rage: A self buff that causes each autoattack you make to grant you a stacking damage bonus. After <span class='info_blue'>8</span> stacks are accumulated, your next autoattack explodes and deals bonus damage to the target.<br>You also move <span class='info_blue'>5%</span> faster while Berserker Rage is active.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 313,
            "title": "Improved Berserker Rage",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Berserker Rage now adds <span class='info_blue'>22%</span> attack speed while active.",
                "Berserker Rage now adds <span class='info_blue'>44%</span> attack speed while active."
            ]
        }
    ],[
        {
            "hidden": 1,
            "image": 0,
            "title": "",
            "resource": "",
            "maxLevel": 0,
            "lvlReq": 0,
            "locked": 1,
            "requirement": "",
            "info": "",
            "texts": [
                "",
            ]
        }
    ],
    column3 = [
        {
            "hidden": 0,
            "image": 392,
            "title": "Warcry",
            "resource": "Hotkey: E",
            "maxLevel": 1,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Area Caster</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Hero Level</span></p>",
            "texts": [
                "",
                "Teaches Warcry: Grants all allied units (including yourself) in <span class='info_blue'>625</span> AoE a buff that increases their attack damage.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 316,
            "title": "Improved Warcry",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 8,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Warcry now also adds a large amount of Life regeneration.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 319,
            "title": "Rupture",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 28,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Deep Slice has a <span class='info_blue'>10%</span> chance to deal <span class='info_blue'>3x</span> damage.",
                "Deep Slice has a <span class='info_blue'>20%</span> chance to deal <span class='info_blue'>3x</span> damage.",
                "Deep Slice has a <span class='info_blue'>30%</span> chance to deal <span class='info_blue'>3x</span> damage.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 395,
            "title": "Bladestorm",
            "resource": "Hotkey: Y",
            "maxLevel": 1,
            "lvlReq": 18,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Melee / Continuous / Area Caster</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical</span></p>",
            "texts": [
                "",
                "Teaches Bladestorm: Causes you to deal damage every <span class='info_blue'>0.5s</span> to all enemies in <span class='info_blue'>350</span> AoE. Lasts <span class='info_blue'>6</span> seconds.<br>While this effect is active, you cannot use other abilities and your movement speed is reduced by <span class='info_blue'>40%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 314,
            "title": "Improved Bladestorm",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Bladestorm now inflicts a debuff on hit enemies that causes them to take <span class='info_blue'>5%</span> more damage from all sources.<br>You also take <span class='info_blue'>10%</span> less damage from all sources while Bladestorm is active.",
                "Bladestorm now inflicts a debuff on hit enemies that causes them to take <span class='info_blue'>10%</span> more damage from all sources.<br>You also take <span class='info_blue'>20%</span> less damage from all sources while Bladestorm is active.",
            ]
        }
    ],
    column4 = [
        {
            "hidden": 0,
            "image": 302,
            "title": "Battle Fury",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Attack Power by <span class='info_blue'>10%</span> of your Power attribute. Increases Attack Speed by <span class='info_blue'>5%</span> + <span class='info_blue'>0.1%</span> x Hero Level</span>.",
                "Increases Attack Power by <span class='info_blue'>20%</span> of your Power attribute. Increases Attack Speed by <span class='info_blue'>10%</span> + <span class='info_blue'>0.2%</span> x Hero Level</span>.",
                "Increases Attack Power by <span class='info_blue'>30%</span> of your Power attribute. Increases Attack Speed by <span class='info_blue'>15%</span> + <span class='info_blue'>0.3%</span> x Hero Level</span>.",
            ]
        }
    ],[
        {
            "hidden": 1,
            "image": 0,
            "title": "",
            "resource": "",
            "maxLevel": 0,
            "lvlReq": 0,
            "locked": 1,
            "requirement": "",
            "info": "",
            "texts": [
                "",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 307,
            "title": "Empowered Cleave",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 20,
            "locked": 1,
            "lockReq": "1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increase the area of effect of Cleave by <span class='info_blue'>55</span> length and <span class='info_blue'>60</span> width.",
                "Increase the area of effect of Cleave by <span class='info_blue'>110</span> length and <span class='info_blue'>120</span> width.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 307,
            "title": "Blood Instinct",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Cleave deals <span class='info_blue'>10%</span> more damage both to the primary target and to AoE targets but its mana consumption is increased from 3 to <span class='info_blue'>5</span>.<br>When fully talented, Cleave also stuns the primary target for <span class='info_blue'>3s</span>. Enemies immune to being stunned take <span class='info_blue'>20%</span> more damage instead.",
                "Cleave deals <span class='info_blue'>20%</span> more damage both to the primary target and to AoE targets but its mana consumption is increased from 3 to <span class='info_blue'>5</span>.<br>When fully talented, Cleave also stuns the primary target for <span class='info_blue'>3s</span>. Enemies immune to being stunned take <span class='info_blue'>20%</span> more damage instead.",
                "Cleave deals <span class='info_blue'>30%</span> more damage both to the primary target and to AoE targets but its mana consumption is increased from 3 to <span class='info_blue'>5</span>.<br>When fully talented, Cleave also stuns the primary target for <span class='info_blue'>3s</span>. Enemies immune to being stunned take <span class='info_blue'>20%</span> more damage instead.",
                "Cleave deals <span class='info_blue'>40%</span> more damage both to the primary target and to AoE targets but its mana consumption is increased from 3 to <span class='info_blue'>5</span>.<br>When fully talented, Cleave also stuns the primary target for <span class='info_blue'>3s</span>. Enemies immune to being stunned take <span class='info_blue'>20%</span> more damage instead.",
                "Cleave deals <span class='info_blue'>50%</span> more damage both to the primary target and to AoE targets but its mana consumption is increased from 3 to <span class='info_blue'>5</span>.<br>When fully talented, Cleave also stuns the primary target for <span class='info_blue'>3s</span>. Enemies immune to being stunned take <span class='info_blue'>20%</span> more damage instead.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 304,
            "title": "Empowered Battle Lust",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 26,
            "locked": 1,
            "lockReq": "0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases the life leech effect from Battle Lust by <span class='info_blue'>10%</span> and its duration by <span class='info_blue'>8s</span>.",
            ]
        }
    ],
    column5 = [
        {
            "hidden": 0,
            "image": 317,
            "title": "No One Lives",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "When Bladestorm expires, deal immense damage to all enemies in <span class='info_blue'>600</span> AoE. Each talent point in this talent increases the damage dealt.<br>All enemies hit by No One Lives will also be stunned for <span class='info_blue'>0.5</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 300,
            "title": "Armor Piercing",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 6,
            "locked": 0,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases your Attack Critical Power by <span class='info_blue'>[10 + 0.1 x Hero Level]%</span>.",
                "Increases your Attack Critical Power by <span class='info_blue'>[20 + 0.2 x Hero Level]%</span>.",
                "Increases your Attack Critical Power by <span class='info_blue'>[30 + 0.3 x Hero Level]%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 308,
            "title": "Empowered Deep Slice",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 12,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Deep Slice's damage by <span class='info_blue'>13%</span> and the bleeding damage by <span class='info_blue'>10%</span>.",
                "Increases Deep Slice's damage by <span class='info_blue'>26%</span> and the bleeding damage by <span class='info_blue'>20%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 305,
            "title": "Empowered Berserker Rage",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases the duration of Berserker Rage by <span class='info_blue'>8s</span>.",
            ]
        }
    ],[
        {
            "hidden": 1,
            "image": 0,
            "title": "",
            "resource": "",
            "maxLevel": 0,
            "lvlReq": 0,
            "locked": 1,
            "requirement": "",
            "info": "",
            "texts": [
                "",
            ]
        }
    ],
    column6 = [
        {
            "hidden": 0,
            "image": 301,
            "title": "Battle Cruelty",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Attack Critical Chance by <span class='info_blue'>3%</span>. Increases Attack Damage by <span class='info_blue'>0.3</span> x Hero Level.",
                "Increases Attack Critical Chance by <span class='info_blue'>6%</span>. Increases Attack Damage by <span class='info_blue'>0.6</span> x Hero Level.",
                "Increases Attack Critical Chance by <span class='info_blue'>9%</span>. Increases Attack Damage by <span class='info_blue'>0.9</span> x Hero Level.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 318,
            "title": "Ravage",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 40,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Berserker Rage will explode an additional <span class='info_blue'>1</span> time(s) before consuming its stacks.<br>Apply the following effects when you are below <span class='info_blue'>50%</span> of your maximum Life: <br> - Cleave and Bladestorm deal <span class='info_blue'>30%</span> more damage.",
                "Berserker Rage will explode an additional <span class='info_blue'>2</span> time(s) before consuming its stacks.<br>Apply the following effects when you are below <span class='info_blue'>65%</span> of your maximum Life:<br> - Cleave and Bladestorm deal <span class='info_blue'>30%</span> more damage.<br> - Deep Slice deals <span class='info_blue'>30%</span> more damage.",
                "Berserker Rage will explode an additional <span class='info_blue'>3</span> time(s) before consuming its stacks.<br>Apply the following effects when you are below <span class='info_blue'>80%</span> of your maximum Life:<br> - Cleave and Bladestorm deal <span class='info_blue'>30%</span> more damage.<br> - Deep Slice deals <span class='info_blue'>30%</span> more damage.<br> - Berserker Rage's explosion deals <span class='info_blue'>30%</span> more damage.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 309,
            "title": "Empowered Warcry",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 18,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases the effectiveness of Warcry (both regen and damage) by <span class='info_blue'>15%</span>.",
                "Increases the effectiveness of Warcry (both regen and damage) by <span class='info_blue'>30%</span>.",
                "Increases the effectiveness of Warcry (both regen and damage) by <span class='info_blue'>45%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 308,
            "title": "Raging Blow",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-1-0-0-0-0-0-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases the 3x damage chance of Rupture from 30% to <span class='info_blue'>38%</span>.<br>When fully talented, the base cooldown of Deep Slice is reduced from 2.5s to <span class='info_blue'>1.5s</span>.",
                "Increases the 3x damage chance of Rupture from 30% to <span class='info_blue'>46%</span>.<br>When fully talented, the base cooldown of Deep Slice is reduced from 2.5s to <span class='info_blue'>1.5s</span>.",
                "Increases the 3x damage chance of Rupture from 30% to <span class='info_blue'>54%</span>.<br>When fully talented, the base cooldown of Deep Slice is reduced from 2.5s to <span class='info_blue'>1.5s</span>.",
                "Increases the 3x damage chance of Rupture from 30% to <span class='info_blue'>62%</span>.<br>When fully talented, the base cooldown of Deep Slice is reduced from 2.5s to <span class='info_blue'>1.5s</span>.",
                "Increases the 3x damage chance of Rupture from 30% to <span class='info_blue'>70%</span>.<br>When fully talented, the base cooldown of Deep Slice is reduced from 2.5s to <span class='info_blue'>1.5s</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 306,
            "title": "Empowered Bladestorm",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Apply the following effects:<br> - Bladestorm deals <span class='info_blue'>12%</span> more damage.<br> - Bladestorm's damage taken debuff is increased from 10% to <span class='info_blue'>13%</span>.<br> - Bladestorm's self movement speed reduction is changed from -40% to <span class='info_blue'>-20%</span>.<br> - If <span class='info_blue'>No One Lives</span> is talented, the stun duration of No One Lives will be increased by <span class='info_blue'>0.5s</span>.",
                "Apply the following effects:<br> - Bladestorm deals <span class='info_blue'>24%</span> more damage.<br> - Bladestorm's damage taken debuff is increased from 10% to <span class='info_blue'>16%</span>.<br> - Bladestorm's self movement speed reduction is changed from -40% to <span class='info_blue'>0%</span>.<br> - If <span class='info_blue'>No One Lives</span> is talented, the stun duration of No One Lives will be increased by <span class='info_blue'>1.0s</span>.",
                "Apply the following effects:<br> - Bladestorm deals <span class='info_blue'>36%</span> more damage.<br> - Bladestorm's damage taken debuff is increased from 10% to <span class='info_blue'>19%</span>.<br> - Bladestorm's self movement speed reduction is changed from -40% to <span class='info_blue'>+20%</span>.<br> - If <span class='info_blue'>No One Lives</span> is talented, the stun duration of No One Lives will be increased by <span class='info_blue'>1.5s</span>.",
            ]
        }
    ]
];
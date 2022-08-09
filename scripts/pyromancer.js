var pyromancer_skills = [
    column1 = [
        {
            "hidden": 0,
            "image": 966,
            "title": "Ignition",
            "resource": "Hotkey: Q",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>10</span> , Cooldown: <span class='info_gray'>1.5sec</span>",
            "texts": [
                "",
                "Teaches Ignition: A single target attack that deals magic damage",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 957,
            "title": "Improved Ignition",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 12,
            "locked": 1,
            "lockReq": "1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Ignition deals <span class='info_blue'>15%</span> bonus damage to burning targets",
                "Ignition deals <span class='info_blue'>30%</span> bonus damage to burning targets",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 954,
            "title": "Flame Fist",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 26,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "If a target is less than <span class='info_blue'>200</span> distance from Pyromancer, Flame Fist will be activated when casting Dragon Breath, dealing <span class='info_blue'>20%</span> of Dragon Breath's damage.",
                "If a target is less than <span class='info_blue'>200</span> distance from Pyromancer, Flame Fist will be activated when casting Dragon Breath, dealing <span class='info_blue'>40%</span> of Dragon Breath's damage.",
                "If a target is less than <span class='info_blue'>200</span> distance from Pyromancer, Flame Fist will be activated when casting Dragon Breath, dealing <span class='info_blue'>60%</span> of Dragon Breath's damage.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 967,
            "title": "Meteor",
            "resource": "Hotkey: T",
            "maxLevel": 1,
            "lvlReq": 12,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target AoE</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>30</span> , Cooldown: <span class='info_gray'>16sec</span>",
            "texts": [
                "",
                "Teaches Meteor: Calls a meteor from sky, on crash does <span class='info_blue'>350</span> AoE spell damage.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 958,
            "title": "Improved Meteor",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 20,
            "locked": 1,
            "lockReq": "0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Duration: <span class='info_gray'>5sec</span>",
            "texts": [
                "",
                "The meteor crash area now ignites the ground causing units standing in it to burn over time",
            ]
        }
    ],
    column2 = [
        {
            "hidden": 0,
            "image": 964,
            "title": "Dragon's Breath",
            "resource": "Hotkey: W",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>15</span> , Cooldown: <span class='info_gray'>5sec</span>",
            "texts": [
                "",
                "Teaches Dragon's Breath: A multi-target frontal cone area effect attack that deals magic damage",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 955,
            "title": "Improved Dragon's Breath",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 6,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Targets hit by Dragon's Breath will now burn doing <span class='info_blue'>17.5%</span> of the initial damage over <span class='info_blue'>5</span> seconds.",
                "Targets hit by Dragon's Breath will now burn doing <span class='info_blue'>35%</span> of the initial damage over <span class='info_blue'>5</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 963,
            "title": "Burning Desire",
            "resource": "Hotkey: R",
            "maxLevel": 1,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Area Caster</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> None</span></p><span class='info_blue'>Manacost: <span class='info_gray'>20</span> , Cooldown: <span class='info_gray'>45sec</span>, Duration: <span class='info_gray'>120sec</span>",
            "texts": [
                "",
                "Teaches Burning Desire: A hero buff granting a <span class='info_blue'>7%</span> bonus to all ability damage. For allies <span class='info_blue'>4%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 963,
            "title": "Improved Burning Desire",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 16,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>30</span>",
            "texts": [
                "",
                "- Burning Desire now increases mana regen rate by <span class='info_blue'>0.25.</span>.<br>- This effect is increased to <span class='info_blue'>0.50</span> on yourself.",
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
            "image": 962,
            "title": "Fireball",
            "resource": "Hotkey: E",
            "maxLevel": 1,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous / Projectile</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>15</span> , Cooldown: <span class='info_gray'>3sec</span>",
            "texts": [
                "",
                "Teaches Fireball: A single target attack that deals magic damage",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 956,
            "title": "Improved Fireball",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 6,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_gray'>Each point adds <span class='info_blue'>+5</span> mana cost.",
            "texts": [
                "",
                "Fireball now does <span class='info_blue'>18%</span> of its damage in a <span class='info_blue'>300</span> radius upon impact",
                "Fireball now does <span class='info_blue'>36%</span> of its damage in a <span class='info_blue'>300</span> radius upon impact",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 960,
            "title": "Instant Fireball",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Fireball has <span class='info_blue'>11%</span> chance to reset Fireball cooldown.",
                "Fireball has <span class='info_blue'>22%</span> chance to reset Fireball cooldown.",
                "Fireball has <span class='info_blue'>33%</span> chance to reset Fireball cooldown.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 965,
            "title": "Fire Form",
            "resource": "Hotkey: Y",
            "maxLevel": 1,
            "lvlReq": 18,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Toggleable</span></p><p><span class='info_gray'>Buff / Self</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power</span></p>",
            "texts": [
                "",
                "Teaches Fire Form: Increases all magical damage while active, but drains mana every second.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 965,
            "title": "Improved Fire Form",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 26,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Fire Form now also increases spell critical power bonus <span class='info_blue'>25%</span> while active.",
            ]
        }
    ],
    column4 = [
        {
            "hidden": 0,
            "image": 968,
            "title": "Fire Power",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases spell power by <span class='info_blue'>10%</span> of your Energy. Increases Fireball damage radius by <span class='info_blue'>50</span>",
                "Increases spell power by <span class='info_blue'>20%</span> of your Energy. Increases Fireball damage radius by <span class='info_blue'>100</span>",
                "Increases spell power by <span class='info_blue'>30%</span> of your Energy. Increases Fireball damage radius by <span class='info_blue'>150</span>",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 970,
            "title": "Boiling Point",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 12,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases spell critical power by <span class='info_blue'>10%</span> + <span class='info_blue'>10%</span> of your hero level.",
                "Increases spell critical power by <span class='info_blue'>20%</span> + <span class='info_blue'>20%</span> of your hero level.",
                "Increases spell critical power by <span class='info_blue'>30%</span> + <span class='info_blue'>30%</span> of your hero level.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 969,
            "title": "No Mercy",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 18,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases spell damage dealt to targets with <span class='info_blue'>42%</span> or less HP by <span class='info_blue'>12%</span>",
                "Increases spell damage dealt to targets with <span class='info_blue'>42%</span> or less HP by <span class='info_blue'>24%</span>",
                "Increases spell damage dealt to targets with <span class='info_blue'>42%</span> or less HP by <span class='info_blue'>36%</span>",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 957,
            "title": "Ignition Point",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "1-2-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Ignition lights target on fire, dealing damage over time. This effect stacks up to <span class='info_blue'>2</span> times.<br>- When fully talented, Ignition temporarily reduces target's Magic Resist.",
                "- Ignition lights target on fire, dealing damage over time. This effect stacks up to <span class='info_blue'>3</span> times.<br>- When fully talented, Ignition temporarily reduces target's Magic Resist.",
                "- Ignition lights target on fire, dealing damage over time. This effect stacks up to <span class='info_blue'>4</span> times.<br>- When fully talented, Ignition temporarily reduces target's Magic Resist.",
                "- Ignition lights target on fire, dealing damage over time. This effect stacks up to <span class='info_blue'>5</span> times.<br>- When fully talented, Ignition temporarily reduces target's Magic Resist.",
                "- Ignition lights target on fire, dealing damage over time. This effect stacks up to <span class='info_blue'>6</span> times.<br>- When fully talented, Ignition temporarily reduces target's Magic Resist.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 959,
            "title": "Inferno Bombs",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Meteor will now also infuse targets with fire shards that will explode if an infused unit dies. Minions and bosses will receive <span class='info_blue'>30%</span> more damage from these shards.<br>- Dragon's Breath will immediately trigger a fire shard explosion if it hits an infused target.<br>- Effect lasts at most <span class='info_blue'>10</span> seconds.",
                "- Meteor will now also infuse targets with fire shards that will explode if an infused unit dies. Minions and bosses will receive <span class='info_blue'>60%</span> more damage from these shards.<br>- Dragon's Breath will immediately trigger a fire shard explosion if it hits an infused target.<br>- Effect lasts at most <span class='info_blue'>10</span> seconds.",
            ]
        }
    ],
    column5 = [
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
            "image": 952,
            "title": "Empowered Burning Desire",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>40</span>",
            "texts": [
                "",
                "- Increases Pyromancer's ability damage bonus by <span class='info_blue'>3%</span>, mana regen by <span class='info_blue'>0.010</span> per level.<br>- Increases allies' ability damage bonus by <span class='info_blue'>1%</span>, mana regen by <span class='info_blue'>0.005</span> per level.",
                "- Increases Pyromancer's ability damage bonus by <span class='info_blue'>6%</span>, mana regen by <span class='info_blue'>0.020</span> per level.<br>- Increases allies' ability damage bonus by <span class='info_blue'>2%</span>, mana regen by <span class='info_blue'>0.010</span> per level.",
                "- Increases Pyromancer's ability damage bonus by <span class='info_blue'>9%</span>, mana regen by <span class='info_blue'>0.030</span> per level.<br>- Increases allies' ability damage bonus by <span class='info_blue'>3%</span>, mana regen by <span class='info_blue'>0.015</span> per level.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 961,
            "title": "Pyromaniac",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases damage done to targets that are burning by <span class='info_blue'>9%</span>",
                "Increases damage done to targets that are burning by <span class='info_blue'>18%</span>",
                "Increases damage done to targets that are burning by <span class='info_blue'>27%</span>",
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
            "image": 950,
            "title": "Burning Soul",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 6,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases spell critical strike chance by <span class='info_blue'>3%</span>. Increases Double Meteor chance by <span class='info_blue'>3%</span>",
                "Increases spell critical strike chance by <span class='info_blue'>6%</span>. Increases Double Meteor chance by <span class='info_blue'>6%</span>",
                "Increases spell critical strike chance by <span class='info_blue'>9%</span>. Increases Double Meteor chance by <span class='info_blue'>9%</span>",
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
            "image": 951,
            "title": "Empowered Fireball",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases damage done by Fireball by <span class='info_blue'>20%</span>",
                "Increases damage done by Fireball by <span class='info_blue'>40%</span>",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 953,
            "title": "Fire Bird",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 40,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Replace <span class='info_blue'>Fire Form</span> with <span class='info_blue'>Phoenix Form</span>, increasing mana consumption but dealing continuous fire damage to nearby enemies. Damage increases with talent points spent.<br>- Also adds a Rebirth passive, cooldown <span class='info_blue'>300</span> seconds. Decreases life regen by level - <span class='info_blue'>9</span>.<br>- <span class='info_blue'>Dragon's Breath</span> casts <span class='info_blue'>1</span> more times if within Flame Fist range.",
                "- Replace <span class='info_blue'>Fire Form</span> with <span class='info_blue'>Phoenix Form</span>, increasing mana consumption but dealing continuous fire damage to nearby enemies. Damage increases with talent points spent.<br>- Also adds a Rebirth passive, cooldown <span class='info_blue'>250</span> seconds. Decreases life regen by level - <span class='info_blue'>18</span>.<br>- <span class='info_blue'>Dragon's Breath</span> casts <span class='info_blue'>2</span> more times if within Flame Fist range.",
                "- Replace <span class='info_blue'>Fire Form</span> with <span class='info_blue'>Phoenix Form</span>, increasing mana consumption but dealing continuous fire damage to nearby enemies. Damage increases with talent points spent.<br>- Also adds a Rebirth passive, cooldown <span class='info_blue'>200</span> seconds. Decreases life regen by level - <span class='info_blue'>27</span>.<br>- <span class='info_blue'>Dragon's Breath</span> casts <span class='info_blue'>3</span> more times if within Flame Fist range.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 951,
            "title": "Phoenix Blast",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0",
            "requirement": "",
            "info": "<p><span class='info_gray'>Fully talented </span></p><p><span class='info_blue'>Manacost: <span class='info_gray'>30</span> ",
            "texts": [
                "",
                "- Increase Instant Fireball proc chance to <span class='info_blue'>1.2x</span>.<br>- When fully talented, upgrades <span class='info_blue'>Fireball</span> into <span class='info_blue'>Phoenix Blast</span>.",
                "- Increase Instant Fireball proc chance to <span class='info_blue'>1.4x</span>.<br>- When fully talented, upgrades <span class='info_blue'>Fireball</span> into <span class='info_blue'>Phoenix Blast</span>.",
                "- Increase Instant Fireball proc chance to <span class='info_blue'>1.6x</span>.<br>- When fully talented, upgrades <span class='info_blue'>Fireball</span> into <span class='info_blue'>Phoenix Blast</span>.",
                "- Increase Instant Fireball proc chance to <span class='info_blue'>1.8x</span>.<br>- When fully talented, upgrades <span class='info_blue'>Fireball</span> into <span class='info_blue'>Phoenix Blast</span>.",
                "- Increase Instant Fireball proc chance to <span class='info_blue'>2.0x</span>.<br>- When fully talented, upgrades <span class='info_blue'>Fireball</span> into <span class='info_blue'>Phoenix Blast</span>.",
            ]
        }
    ]
];
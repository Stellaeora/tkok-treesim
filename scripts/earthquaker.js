var earthquaker_skills = [
    column1 = [
        {
            "hidden": 0,
            "image": 918,
            "title": "Heavystrike",
            "resource": "Hotkey: Q",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Melee / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical </span></p><span class='info_blue'>Manacost: <span class='info_gray'>10</span> , Cooldown: <span class='info_gray'>3sec</span>",
            "texts": [
                "",
                "Teaches Heavystrike: Deals damage to a single target",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 911,
            "title": "Improved Heavystrike",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 8,
            "locked": 1,
            "lockReq": "1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Heavystrike reduces enemy hit rate by <span class='info_blue'>10%</span> for <span class='info_blue'>2.5</span> seconds.",
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
            "image": 923,
            "title": "Rebirth Totem",
            "resource": "Hotkey: T",
            "maxLevel": 1,
            "lvlReq": 12,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Self / Target / Ranged / Instantaneous </span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> None</span></p><span class='info_blue'>Manacost: <span class='info_gray'>40</span> , Cooldown: <span class='info_gray'>30sec</span>",
            "texts": [
                "",
                "- Teaches Rebirth Totem: Summons a totem at the target location. If the hero dies while Rebirth Totem is active, he will be revived at the totem.<br>- Revival has an inner cooldown of <span class='info_blue'>300</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 916,
            "title": "Improved Rebirth Totem",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 20,
            "locked": 1,
            "lockReq": "0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Rebirth Totem taunts nearby enemies when revival occurs. Affects up to <span class='info_blue'>1</span> enemies in <span class='info_blue'>300</span> AoE.",
                "Rebirth Totem taunts nearby enemies when revival occurs. Affects up to <span class='info_blue'>10</span> enemies in <span class='info_blue'>600</span> AoE.",
            ]
        }
    ],
    column2 = [
        {
            "hidden": 0,
            "image": 922,
            "title": "Totem Strike",
            "resource": "Hotkey: W",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Area Caster / Instantaneous / Buff</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical </span></p><span class='info_blue'>Manacost: <span class='info_gray'>16</span> , Cooldown: <span class='info_gray'>10sec</span>",
            "texts": [
                "",
                "Teaches Totem Strike: Deals damage to surrounding enemies and improves your next attack damage",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 915,
            "title": "Improved Totem Strike",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 4,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "If Earthen Stance is learned, Totem Strike's buff is changed to: Increase attack damage for next attack and taunt attacked target.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 919,
            "title": "Bloody Axe",
            "resource": "Hotkey: R",
            "maxLevel": 1,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Self Buff / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power </span></p><span class='info_blue'>Manacost: <span class='info_gray'>25</span> , Cooldown: <span class='info_gray'>40sec</span>, Duration: <span class='info_gray'>10sec</span>",
            "texts": [
                "",
                "Teaches Bloody Axe: A self buff that grants lifesteal for a short duration",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 912,
            "title": "Improved Bloody Axe",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 16,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Triggering lifesteal while at full health increases your max Life. Life gain is limited to <span class='info_blue'>7%</span> of Max HP.",
                "Triggering lifesteal while at full health increases your max Life. Life gain is limited to <span class='info_blue'>14%</span> of Max HP.",
                "Triggering lifesteal while at full health increases your max Life. Life gain is limited to <span class='info_blue'>21%</span> of Max HP.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 902,
            "title": "Conversion",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 26,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Bloody Axe now adds armor when it reaches max effect. Max armor gain is <span class='info_blue'>2</span> times hero level.",
                "Bloody Axe now adds armor when it reaches max effect. Max armor gain is <span class='info_blue'>4</span> times hero level.",
                "Bloody Axe now adds armor when it reaches max effect. Max armor gain is <span class='info_blue'>6</span> times hero level.",
            ]
        }
    ],
    column3 = [
        {
            "hidden": 0,
            "image": 921,
            "title": "Fissure",
            "resource": "Hotkey: E",
            "maxLevel": 1,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical </span></p><span class='info_blue'>Manacost: <span class='info_gray'>30</span> , Cooldown: <span class='info_gray'>12sec</span> , Duration: <span class='info_gray'>6sec</span>",
            "texts": [
                "",
                "- Teaches Fissure: Creates a fissure, causing damage to enemies in a line <span class='info_blue'>1100</span> lenght <span class='info_blue'>400</span> width and stuns for <span class='info_blue'>1.5</span> second also lower their move speed for very short time.<br>- Fissure act as obstacle can block pathing <span class='info_blue'>Bosses cannot be blocked</span>",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 914,
            "title": "Improved Fissure",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 1,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increase the damage of Fissure by <span class='info_blue'>15%</span> and the length by <span class='info_blue'>220</span>.",
                "Increase the damage of Fissure by <span class='info_blue'>30%</span> and the length by <span class='info_blue'>440</span>.",
                "Increase the damage of Fissure by <span class='info_blue'>45%</span> and the length by <span class='info_blue'>660</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 906,
            "title": "Earthen Stance",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 2,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Dramatically increases threat generation and reduces all damage taken by <span class='info_blue'>5%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 920,
            "title": "Ember Strike",
            "resource": "Hotkey: Y",
            "maxLevel": 1,
            "lvlReq": 18,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical </span></p><span class='info_blue'>Manacost: <span class='info_gray'>20</span> , Cooldown: <span class='info_gray'>10sec</span>",
            "texts": [
                "",
                "Teaches Ember Strike: Leaps to a target and causes damage to it",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 913,
            "title": "Improved Ember Strike",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Ember Strike deals <span class='info_blue'>16%</span> of its damage in an AoE around the target and generates additional threat.<br>- Threat generation increases with talent points spent.",
                "- Ember Strike deals <span class='info_blue'>32%</span> of its damage in an AoE around the target and generates additional threat.<br>- Threat generation increases with talent points spent.",
                "- Ember Strike deals <span class='info_blue'>48%</span> of its damage in an AoE around the target and generates additional threat.<br>- Threat generation increases with talent points spent.",
            ]
        }
    ],
    column4 = [
        {
            "hidden": 0,
            "image": 900,
            "title": "Blood Rage",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increase Attack Power by <span class='info_blue'>1%</span> of max life.",
                "Increase Attack Power by <span class='info_blue'>2%</span> of max life.",
                "Increase Attack Power by <span class='info_blue'>3%</span> of max life.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 907,
            "title": "Empowered Heavystrike",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 22,
            "locked": 1,
            "lockReq": "1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>15</span> , Cooldown: <span class='info_gray'>2.5sec</span>",
            "texts": [
                "",
                "Increase Heavystrike damage by <span class='info_blue'>20%</span>.",
                "Increase Heavystrike damage by <span class='info_blue'>40%</span>.",
                "Increase Heavystrike damage by <span class='info_blue'>60%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 907,
            "title": "Shattering Axe",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Heavystrike throws a flying axe that damages a nearby enemy and reduces their armor by <span class='info_blue'>4%</span>.<br>- When fully talented, throws two axes instead of one.",
                "- Heavystrike throws a flying axe that damages a nearby enemy and reduces their armor by <span class='info_blue'>8%</span>.<br>- When fully talented, throws two axes instead of one.",
                "- Heavystrike throws a flying axe that damages a nearby enemy and reduces their armor by <span class='info_blue'>12%</span>.<br>- When fully talented, throws two axes instead of one.",
                "- Heavystrike throws a flying axe that damages a nearby enemy and reduces their armor by <span class='info_blue'>16%</span>.<br>- When fully talented, throws two axes instead of one.",
                "- Heavystrike throws a flying axe that damages a nearby enemy and reduces their armor by <span class='info_blue'>20%</span>.<br>- When fully talented, throws two axes instead of one.",
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
            "image": 901,
            "title": "Blood Strike",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Nearby allies also receive <span class='info_blue'>20%</span> of Totem Strike's bonus damage.<br>- <span class='info_blue'>Third point:</span> This bonus damage triggers lifesteal.",
                "- Nearby allies also receive <span class='info_blue'>40%</span> of Totem Strike's bonus damage.<br>- <span class='info_blue'>Third point:</span> This bonus damage triggers lifesteal.",
                "- Nearby allies also receive <span class='info_blue'>60%</span> of Totem Strike's bonus damage.<br>- <span class='info_blue'>Third point:</span> This bonus damage triggers lifesteal.",
            ]
        }
    ],
    column5 = [
        {
            "hidden": 0,
            "image": 903,
            "title": "Boiling Blood",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 4,
            "locked": 1,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases max life by <span class='info_blue'>15%</span> of Attack Power.",
                "Increases max life by <span class='info_blue'>30%</span> of Attack Power.",
                "Increases max life by <span class='info_blue'>45%</span> of Attack Power.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 904,
            "title": "Burning Spirit",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 30,
            "locked": 1,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Upon death, nearby enemies are stunned for <span class='info_blue'>3</span> seconds. Enemies that can't be stunned are slowed by <span class='info_blue'>100%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 910,
            "title": "Rebirth Cycle",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 36,
            "locked": 1,
            "lockReq": "0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Rebirth Totem affects up to <span class='info_blue'>1</span> allies.<br>- Each ally will have their own separate inner cooldown of <span class='info_blue'>300</span> seconds.",
                "- Rebirth Totem affects up to <span class='info_blue'>2</span> allies.<br>- Each ally will have their own separate inner cooldown of <span class='info_blue'>300</span> seconds.",
                "- Rebirth Totem affects up to <span class='info_blue'>3</span> allies.<br>- Each ally will have their own separate inner cooldown of <span class='info_blue'>300</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 909,
            "title": "Roar of the Land",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 40,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- When an attack is blocked, heal for <span class='info_blue'>12%</span> of Block Chance.<br>- <span class='info_blue'>First point:</span> Normal attack has a small chance to stun target. Generates extra threat on targets that can't be stunned.",
                "- When an attack is blocked, heal for <span class='info_blue'>24%</span> of Block Chance.<br>- <span class='info_blue'>First point:</span> Normal attack has a small chance to stun target. Generates extra threat on targets that can't be stunned.<br>- <span class='info_blue'>Second point:</span> Allies in Fissure gain a short damage buff.",
                "- When an attack is blocked, heal for <span class='info_blue'>36%</span> of Block Chance.<br>- <span class='info_blue'>First point:</span> Normal attack has a small chance to stun target. Generates extra threat on targets that can't be stunned.<br>- <span class='info_blue'>Second point:</span> Allies in Fissure gain a short damage buff.<br>- <span class='info_blue'>Third point:</span> Blocking an attack increases magic resist in an AoE by <span class='info_blue'>12%</span> for <span class='info_blue'>2</span> sec (<span class='info_blue'>1</span> sec for allies).",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 915,
            "title": "Successive Strike",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Totem Strike inflicts a stacking debuff on the target that reduces their magic damage dealt by <span class='info_blue'>6%</span> each stack, limit <span class='info_blue'>2</span> stacks.<br>- When fully talented, also reduces physical damage dealt.",
                "- Totem Strike inflicts a stacking debuff on the target that reduces their magic damage dealt by <span class='info_blue'>6%</span> each stack, limit <span class='info_blue'>3</span> stacks.<br>- When fully talented, also reduces physical damage dealt.",
                "- Totem Strike inflicts a stacking debuff on the target that reduces their magic damage dealt by <span class='info_blue'>6%</span> each stack, limit <span class='info_blue'>4</span> stacks.<br>- When fully talented, also reduces physical damage dealt.",
                "- Totem Strike inflicts a stacking debuff on the target that reduces their magic damage dealt by <span class='info_blue'>6%</span> each stack, limit <span class='info_blue'>5</span> stacks.<br>- When fully talented, also reduces physical damage dealt.",
                "- Totem Strike inflicts a stacking debuff on the target that reduces their magic damage dealt by <span class='info_blue'>6%</span> each stack, limit <span class='info_blue'>6</span> stacks.<br>- When fully talented, also reduces physical damage dealt.",
            ]
        }
    ],
    column6 = [
        {
            "hidden": 0,
            "image": 917,
            "title": "Iron Blood",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 10,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Adds bonus stats based on the currently equipped offhand.<br>- <span class='info_blue'>Dual Axe:</span> Adds hero level x <span class='info_blue'>0.75</span> armor.<br>- <span class='info_blue'>Idol:</span> Adds <span class='info_blue'>5%</span> block.",
                "- Adds bonus stats based on the currently equipped offhand.<br>- <span class='info_blue'>Dual Axe:</span> Adds hero level x <span class='info_blue'>1.5</span> armor.<br>- <span class='info_blue'>Idol:</span> Adds <span class='info_blue'>10%</span> block.",
                "- Adds bonus stats based on the currently equipped offhand.<br>- <span class='info_blue'>Dual Axe:</span> Adds hero level x <span class='info_blue'>2.25</span> armor.<br>- <span class='info_blue'>Idol:</span> Adds <span class='info_blue'>15%</span> block.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 908,
            "title": "Empowered Fissure",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increases Fissure's width by <span class='info_blue'>50</span>.<br>- When Fissure expires, <span class='info_blue'>25%</span> of its original damage will be dealt in a small AoE.",
                "- Increases Fissure's width by <span class='info_blue'>100</span>.<br>- When Fissure expires, <span class='info_blue'>50%</span> of its original damage will be dealt in a small AoE.",
                "- Increases Fissure's width by <span class='info_blue'>150</span>.<br>- When Fissure expires, <span class='info_blue'>75%</span> of its original damage will be dealt in a small AoE.",
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
            "image": 905,
            "title": "Culling Blade",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 36,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Ember Strike deals <span class='info_blue'>16%</span> extra damage to enemies below <span class='info_blue'>10%</span> health.<br>- When this effect triggers, additional threat is generated.",
                "- Ember Strike deals <span class='info_blue'>32%</span> extra damage to enemies below <span class='info_blue'>20%</span> health.<br>- When this effect triggers, additional threat is generated.",
                "- Ember Strike deals <span class='info_blue'>48%</span> extra damage to enemies below <span class='info_blue'>30%</span> health.<br>- When this effect triggers, additional threat is generated.",
            ]
        }
    ]
];
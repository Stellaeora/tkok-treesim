var warrior_skills = [
    column1 = [
        {
            "hidden": 0,
            "image": 1890,
            "title": "Shield Slam",
            "resource": "Hotkey: Q",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Melee / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>10</span> , Cooldown: <span class='info_gray'>3sec</span>",
            "texts": [
                "",
                "<p><span class='info_gray'>Teaches Shield Slam: A single target attack that deals physical damage.",
            ]
        }
    ],[
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
                "- Shield Slam now stuns the target for a short duration, or deals <span class='info_blue'>16%</span> more damage against targets immune to being stunned.",
                "- Shield Slam now stuns the target for a short duration, or deals <span class='info_blue'>32%</span> more damage against targets immune to being stunned.",
                "- Shield Slam now stuns the target for a short duration, or deals <span class='info_blue'>48%</span> more damage against targets immune to being stunned.<br>- Defensive Stance: Shield Slam grants a <span class='info_blue'>1.5s</span> buff that reflects all physical damage taken back to the attacker.<br>- Aggressive Stance: Shield Slam grants a <span class='info_blue'>1s</span> buff that adds <span class='info_blue'>100%</span> Attack Crit Power.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1800,
            "title": "Aggressive Stance",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 2,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "You cannot learn <span class='info_blue'>Defensive Stance</span> upon learning this ability.<br>Apply the following effects:<br>- Block Chance is set to <span class='info_blue'>0%</span>.<br>- All skills deal significantly more damage.<br>- All damage received is reduced by <span class='info_blue'>5%</span>.<br>- Battle Orders effect is reduced by <span class='info_blue'>60%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1894,
            "title": "Battle Orders",
            "resource": "Hotkey: T",
            "maxLevel": 1,
            "lvlReq": 12,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Area Caster</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Power, Attack Power</span></p><span class='info_blue'>Manacost: <span class='info_gray'>15</span> , Cooldown: <span class='info_gray'>30sec</span> , Duration: <span class='info_gray'>60sec</span>",
            "texts": [
                "",
                "Teaches Battle Orders: Increases the max Life of all nearby heroes.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1807,
            "title": "Master Commander",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Battle Orders now adds max Mana as well and grants the Warrior <span class='info_blue'>3</span> mana recovery on every critical attack.",
                "- Battle Orders now adds max Mana as well and grants the Warrior <span class='info_blue'>3</span> mana recovery on every critical attack.<br>- Every time the Warrior regenerates 30 total mana, surrounding friendly heroes also recover <span class='info_blue'>30</span> mana.",
            ]
        }
    ],
    column2 = [
        {
            "hidden": 0,
            "image": 1891,
            "title": "Charge",
            "resource": "Hotkey: W",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Movement</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>20</span> , Cooldown: <span class='info_gray'>15sec</span>",
            "texts": [
                "",
                "Teaches Charge: Dashes to the target, dealing damage and knocking it back. Deals reduced damage and knockback to any enemies caught in the path of the charge.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1809,
            "title": "Improved Charge",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 8,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- <span class='info_blue'>Defensive Stance:</span> Taunts the attacked target.<br>- <span class='info_blue'>Aggressive Stance:</span> Significantly increases Charge's damage (applied only at Hero Level 30+)."
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1893,
            "title": "Whirlslash",
            "resource": "Hotkey: R",
            "maxLevel": 1,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Area Caster</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>15</span> , Cooldown: <span class='info_gray'>5sec</span>",
            "texts": [
                "",
                "Teaches Whirlwind: Deals physical damage to all enemies around the Warrior",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1812,
            "title": "Improved Whirlslash",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 18,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Whirlslash now deals <span class='info_blue'>85%</span> increased damage against enemies that are stunned from Shield Slam.<br>- <span class='info_blue'>Aggressive Stance:</span> Further increases Whirlslash damage by <span class='info_blue'>25%</span> against enemies affected by Intimidating Bellow.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1812,
            "title": "Whirlstorm",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increase Whirlwind radius by <span class='info_blue'>50</span>.<br>- <span class='info_blue'>Defensive Stance:</span> Whirlwind now grants a <span class='info_blue'>1s</span> buff that changes blocked attack damage reduction from 50% to <span class='info_blue'>60%</span>.",
                "- Increase Whirlwind radius by <span class='info_blue'>100</span>.<br>- <span class='info_blue'>Defensive Stance:</span> Whirlwind now grants a <span class='info_blue'>1s</span> buff that changes blocked attack damage reduction from 50% to <span class='info_blue'>75%</span>.",
                "- Increase Whirlwind radius by <span class='info_blue'>150</span>.<br>- <span class='info_blue'>Defensive Stance:</span> Whirlwind now grants a <span class='info_blue'>1s</span> buff that changes blocked attack damage reduction from 50% to <span class='info_blue'>90%</span>.",
            ]
        }
    ],
    column3 = [
        {
            "hidden": 0,
            "image": 1892,
            "title": "Intimidating Bellow",
            "resource": "Hotkey: E",
            "maxLevel": 1,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Melee / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical, Hero Level</span></p><span class='info_blue'>Manacost: <span class='info_gray'>10</span> , Cooldown: <span class='info_gray'>12sec</span>",
            "texts": [
                "",
                "Teaches Intimidating Bellow: Deals physical damage to a single target and reduces their movement speed by <span class='info_blue'>15%</span> and attack speed.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1810,
            "title": "Improved Intimidating Bellow",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 16,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Intimidating Bellow's attack speed reduction is increased to <span class='info_blue'>20%</span>.<br>- <span class='info_blue'>Defensive Stance:</span> Each autoattack on the debuffed target decreases their attack speed by a further <span class='info_blue'>1%</span>. This effect stacks up to <span class='info_blue'>10</span> times.<br>- <span class='info_blue'>Aggressive Stance:</span> Intimidating Bellow now also inflicts a bleed effect that deals <span class='info_blue'>10%</span> of Intimidating Bellow's base damage per second for <span class='info_blue'>5s</span>.",
                "- Intimidating Bellow's attack speed reduction is increased to <span class='info_blue'>20%</span>.<br>- <span class='info_blue'>Defensive Stance:</span> Each autoattack on the debuffed target decreases their attack speed by a further <span class='info_blue'>2%</span>. This effect stacks up to <span class='info_blue'>10</span> times.<br>- <span class='info_blue'>Aggressive Stance:</span> Intimidating Bellow now also inflicts a bleed effect that deals <span class='info_blue'>15%</span> of Intimidating Bellow's base damage per second for <span class='info_blue'>8s</span>.",
                "- Intimidating Bellow's attack speed reduction is increased to <span class='info_blue'>20%</span>.<br>- <span class='info_blue'>Defensive Stance:</span> Each autoattack on the debuffed target decreases their attack speed by a further <span class='info_blue'>3%</span>. This effect stacks up to <span class='info_blue'>10</span> times.<br>- <span class='info_blue'>Aggressive Stance:</span> Intimidating Bellow now also inflicts a bleed effect that deals <span class='info_blue'>20%</span> of Intimidating Bellow's base damage per second for <span class='info_blue'>11s</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1805,
            "title": "Defensive Stance",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 2,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "You cannot learn <span class='info_blue'>Aggressive Stance</span> upon learning this ability.<br>Apply the following effects:<br>- Threat generation is significantly increased.<br>- All damage received is reduced by <span class='info_blue'>5%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1895,
            "title": "Heroic Shout",
            "resource": "Hotkey: Y",
            "maxLevel": 1,
            "lvlReq": 18,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Self</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Hero Level</span></p><span class='info_blue'>Manacost: <span class='info_gray'>25</span> , Cooldown: <span class='info_gray'>30sec</span>, Duration: <span class='info_gray'>3sec</span>",
            "texts": [
                "",
                "Teaches Heroic Shout: A self buff that reduces damage taken by <span class='info_blue'>55%</span> for <span class='info_blue'>3s</span> and generates threat on all enemies near the Warrior.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1808,
            "title": "Improved Heroic Shout",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "All allies within <span class='info_blue'>400</span> AoE of the Warrior will now also gain <span class='info_blue'>40%</span> damage reduction from Heroic Shout.",
            ]
        }
    ],
    column4 = [
        {
            "hidden": 0,
            "image": 1802,
            "title": "Avoidance",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 14,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases your Dodge Chance by <span class='info_blue'>3.75%</span>.",
                "Increases your Dodge Chance by <span class='info_blue'>7.5%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1813,
            "title": "Lionheart",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 12,
            "locked": 1,
            "lockReq": "0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Attack Crit Chance by <span class='info_blue'>0.075%</span> x Hero Level.<br>Increases Attack Crit Power by <span class='info_blue'>0.3%</span> x Hero Level.",
                "Increases Attack Crit Chance by <span class='info_blue'>0.15%</span> x Hero Level.<br>Increases Attack Crit Power by <span class='info_blue'>0.6%</span> x Hero Level.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1815,
            "title": "Shield Spike",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 22,
            "locked": 1,
            "lockReq": "1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increase Shield Slam damage by <span class='info_blue'>15%</span>.",
                "Increase Shield Slam damage by <span class='info_blue'>30%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1815,
            "title": "Listener",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 36,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increase Charge damage by <span class='info_blue'>30%</span>.<br>Charge now grants a <span class='info_blue'>5s</span> buff that adds Armor equal to <span class='info_blue'>1.0</span> x Hero Level.",
                "Increase Charge damage by <span class='info_blue'>60%</span>.<br>Charge now grants a <span class='info_blue'>5s</span> buff that adds Armor equal to <span class='info_blue'>2.0</span> x Hero Level.",
                "Increase Charge damage by <span class='info_blue'>90%</span>.<br>Charge now grants a <span class='info_blue'>5s</span> buff that adds Armor equal to <span class='info_blue'>3.0</span> x Hero Level.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1815,
            "title": "Meteor Charge",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-3-0-0-0-1-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increases the duration of the Listener buff by <span class='info_blue'>1.5s</span> and increases its effect by <span class='info_blue'>10%</span>.<br>- When fully talented, Charge becomes AoE and generates additional threat if in Defensive Stance.",
                "- Increases the duration of the Listener buff by <span class='info_blue'>3.0s</span> and increases its effect by <span class='info_blue'>20%</span>.<br>- When fully talented, Charge becomes AoE and generates additional threat if in Defensive Stance.",
                "- Increases the duration of the Listener buff by <span class='info_blue'>4.5s</span> and increases its effect by <span class='info_blue'>30%</span>.<br>- When fully talented, Charge becomes AoE and generates additional threat if in Defensive Stance.",
                "- Increases the duration of the Listener buff by <span class='info_blue'>6.0s</span> and increases its effect by <span class='info_blue'>40%</span>.<br>- When fully talented, Charge becomes AoE and generates additional threat if in Defensive Stance.",
                "- Increases the duration of the Listener buff by <span class='info_blue'>7.5s</span> and increases its effect by <span class='info_blue'>50%</span>.<br>- When fully talented, Charge becomes AoE and generates additional threat if in Defensive Stance.",
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
            "hidden": 0,
            "image": 1806,
            "title": "Natural Resistance",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 20,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases your Magic Resist by <span class='info_blue'>4%</span>.<br>- <span class='info_blue'>Defensive Stance:</span> Grants a permanent bonus to Life Regen based on Hero Level.<br>- <span class='info_blue'>Aggressive Stance:</span> Increases Attack Speed by <span class='info_blue'>7.5%</span> plus <span class='info_blue'>0.15%</span> x Hero Level.",
                "Increases your Magic Resist by <span class='info_blue'>8%</span>.<br>- <span class='info_blue'>Defensive Stance:</span> Grants a permanent bonus to Life Regen based on Hero Level.<br>- <span class='info_blue'>Aggressive Stance:</span> Increases Attack Speed by <span class='info_blue'>15%</span> plus <span class='info_blue'>0.3%</span> x Hero Level.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1815,
            "title": "Mega Charge",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>30</span> , Cooldown: <span class='info_gray'>14sec</span>",
            "texts": [
                "",
                "- <span class='info_blue'>Defensive Stance:</span> Grants a short buff after using Charge that adds <span class='info_blue'>+100</span> movespeed.<br>- <span class='info_blue'>Aggressive Stance:</span> Changes Charge's behavior. Charge will now have a <span class='info_blue'>4</span> second buildup time before dashing to the target and dealing <span class='info_blue'>7</span> powerful attacks. This effect cannot be interrupted.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1801,
            "title": "Empowered Heroic Shout",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases the duration of Heroic Shout's damage resistance buff by <span class='info_blue'>0.667s</span>.",
                "Increases the duration of Heroic Shout's damage resistance buff by <span class='info_blue'>1.334s</span>.",
                "Increases the duration of Heroic Shout's damage resistance buff by <span class='info_blue'>2s</span>.",
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
            "image": 1814,
            "title": "Mitigation",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 6,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases your Block Chance by <span class='info_blue'>6%</span>.",
                "Increases your Block Chance by <span class='info_blue'>12%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1803,
            "title": "Battle Veteran",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 8,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Attack Power by <span class='info_blue'>10%</span> of your Power attribute.<br>Increases all threat generation by <span class='info_blue'>2%</span>.",
                "Increases Attack Power by <span class='info_blue'>20%</span> of your Power attribute.<br>Increases all threat generation by <span class='info_blue'>4%</span>.",
                "Increases Attack Power by <span class='info_blue'>30%</span> of your Power attribute.<br>Increases all threat generation by <span class='info_blue'>6%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1804,
            "title": "Commanding Presence",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 26,
            "locked": 1,
            "lockReq": "0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Battle Orders' Life and Mana boosts by <span class='info_blue'>12%</span>.",
                "Increases Battle Orders' Life and Mana boosts by <span class='info_blue'>24%</span>.",
                "Increases Battle Orders' Life and Mana boosts by <span class='info_blue'>36%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1814,
            "title": "Intimidate",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 40,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- <span class='info_blue'>Aggressive Stance:</span> Decreases threat generation.<br>- <span class='info_blue'>Defensive Stance:</span> Increases threat generation.<br>Apply the following effects:<br> - Charge inflicts a debuff that reduces the main target's armor for <span class='info_blue'>5s</span>.",
                "- <span class='info_blue'>Aggressive Stance:</span> Decreases threat generation.<br>- <span class='info_blue'>Defensive Stance:</span> Increases threat generation.<br>Apply the following effects:<br> - Charge inflicts a debuff that reduces the main target's armor for <span class='info_blue'>5s</span>.<br> - Shield Slam can be used twice before going on cooldown.",
                "- <span class='info_blue'>Aggressive Stance:</span> Decreases threat generation and significantly improves Charge's damage.<br>- <span class='info_blue'>Defensive Stance:</span> Increases threat generation and increases your maximum Block Chance to <span class='info_blue'>80%</span>.<br>Apply the following effects:<br> - Charge inflicts a debuff that reduces the main target's armor for <span class='info_blue'>5s</span>.<br> - Shield Slam can be used twice before going on cooldown.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 1804,
            "title": "Champion Orders",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increases Battle Orders' Life bonus by <span class='info_blue'>15%</span>.<br>- Battle Orders now reduces all damage taken by <span class='info_blue'>3%</span>.<br>- When fully talented, casting Battle Orders will dispel all positive buffs from all nearby enemies.",
                "- Increases Battle Orders' Life bonus by <span class='info_blue'>30%</span>.<br>- Battle Orders now reduces all damage taken by <span class='info_blue'>6%</span>.<br>- When fully talented, casting Battle Orders will dispel all positive buffs from all nearby enemies.",
                "- Increases Battle Orders' Life bonus by <span class='info_blue'>45%</span>.<br>- Battle Orders now reduces all damage taken by <span class='info_blue'>9%</span>.<br>- When fully talented, casting Battle Orders will dispel all positive buffs from all nearby enemies.",
                "- Increases Battle Orders' Life bonus by <span class='info_blue'>60%</span>.<br>- Battle Orders now reduces all damage taken by <span class='info_blue'>12%</span>.<br>- When fully talented, casting Battle Orders will dispel all positive buffs from all nearby enemies.",
                "- Increases Battle Orders' Life bonus by <span class='info_blue'>75%</span>.<br>- Battle Orders now reduces all damage taken by <span class='info_blue'>15%</span>.<br>- When fully talented, casting Battle Orders will dispel all positive buffs from all nearby enemies.",
            ]
        }
    ]
];
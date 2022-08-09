var shadow_shaman_skills = [
    column1 = [
        {
            "hidden": 0,
            "image": 4020,
            "title": "Unstable Potion",
            "resource": "Hotkey: Q",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Projectile / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>10</span> , Cooldown: <span class='info_gray'>3sec</span> , Duration: <span class='info_gray'>3sec</span>",
            "texts": [
                "",
                "Teaches Unstable Potion: Increases the life regeneration of a single ally or deals magic damage to a single enemy",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4014,
            "title": "Improved Unstable Potion",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 2,
            "locked": 1,
            "lockReq": "1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>15</span>",
            "texts": [
                "",
                "- When used on allies, grants a <span class='info_blue'>7%</span> chance to take 0 damage from a physical attack.<br>- Shown as <span class='info_red'>*dodge*</span> when activated on screen.<br>- When used on enemies, increases physical damage taken by <span class='info_blue'>5%</span>.",
                "- When used on allies, grants a <span class='info_blue'>14%</span> chance to take 0 damage from a physical attack.<br>- Shown as <span class='info_red'>*dodge*</span> when activated on screen.<br>- When used on enemies, increases physical damage taken by <span class='info_blue'>10%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4016,
            "title": "Shadow Weapon",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 12,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Each auto attack consume, </span></p><p><span class='info_blue'>Manacost: <span class='info_gray'>5</span> ",
            "texts": [
                "",
                "- Autoattacks deal additional magic damage and slow enemies by <span class='info_blue'>10%</span> for a short time.<br>- Also have a <span class='info_blue'>10%</span> chance to stun. Enemies that cannot be stunned take <span class='info_blue'>10%</span> more damage.",
                "- Autoattacks deal additional magic damage and slow enemies by <span class='info_blue'>15%</span> for a short time.<br>- Also have a <span class='info_blue'>15%</span> chance to stun. Enemies that cannot be stunned take <span class='info_blue'>10%</span> more damage.",
                "- Autoattacks deal additional magic damage and slow enemies by <span class='info_blue'>20%</span> for a short time.<br>- Also have a <span class='info_blue'>20%</span> chance to stun. Enemies that cannot be stunned take <span class='info_blue'>10%</span> more damage.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4024,
            "title": "Shadow Totem",
            "resource": "Hotkey: T",
            "maxLevel": 1,
            "lvlReq": 12,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>15</span> , Cooldown: <span class='info_gray'>15sec</span> , Duration: <span class='info_gray'>25sec</span>",
            "texts": [
                "",
                "- Teaches Shadow Totem: Summons a totem that attacks nearby enemies rapidly, dealing magic damage.<br> -Totem consumes your mana by 1 each second while damage on enemies.<br> -It disables if you not within <span class='info_blue'>500</span> range near your totem.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4013,
            "title": "Improved Shadow Totem",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 26,
            "locked": 1,
            "lockReq": "0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Shadow Totem creates a new Shadow Totem every <span class='info_blue'>15th</span> attack.<br>- This effect can trigger up to <span class='info_blue'>1</span> times. Shadow Totems created by this effect deal <span class='info_blue'>40%</span> of the original's damage.",
                "- Shadow Totem creates a new Shadow Totem every <span class='info_blue'>15th</span> attack.<br>- This effect can trigger up to <span class='info_blue'>2</span> times. Shadow Totems created by this effect deal <span class='info_blue'>40%</span> of the original's damage.",
            ]
        }
    ],
    column2 = [
        {
            "hidden": 0,
            "image": 4022,
            "title": "Healing Chain",
            "resource": "Hotkey: W",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Range / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>20</span> , Cooldown: <span class='info_gray'>7sec</span>",
            "texts": [
                "",
                "- Teaches Healing Chain: Launches a wave of healing energy that bounces within <span class='info_blue'>450</span> range, healing up to <span class='info_blue'>4</span> allies.<br>- Healing is reduced with each bounce.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4011,
            "title": "Improved Healing Chain",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 6,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "<span class='info_blue'>First point:</span> Increases Healing Chain's AoE by 150.",
                "<span class='info_blue'>First point:</span> Increases Healing Chain's AoE by 150.<br> <span class='info_blue'>Second point:</span> Healing Chain will not get weaker each bounce.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4009,
            "title": "Ancestral Blessing Totem",
            "resource": "Hotkey: R",
            "maxLevel": 1,
            "lvlReq": 8,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Ranged</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power</span></p><span class='info_blue'>Manacost: <span class='info_gray'>40</span> , Cooldown: <span class='info_gray'>60sec</span> , Duration: <span class='info_gray'>30sec</span>",
            "texts": [
                "",
                "Teaches Ancestral Blessing Totem: Summons a totem that improves allies maximum Life withing <span class='info_blue'>500</span> AoE",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4009,
            "title": "Improved Ancestral Blessing Totem",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increase Ancestral Blessing Totem's AoE by <span class='info_blue'>100</span>.<br>- Improve max life increase by <span class='info_blue'>10%</span>.<br>- Improve healing received by <span class='info_blue'>5%</span>.",
                "- Increase Ancestral Blessing Totem's AoE by <span class='info_blue'>200</span>.<br>- Improve max life increase by <span class='info_blue'>20%</span>.<br>- Improve healing received by <span class='info_blue'>10%</span>.",
                "- Increase Ancestral Blessing Totem's AoE by <span class='info_blue'>300</span>.<br>- Improve max life increase by <span class='info_blue'>30%</span>.<br>- Improve healing received by <span class='info_blue'>15%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4018,
            "title": "Curse Totem",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Shadow Totem imposes a debuff on the target that causes it to deal 0 damage on attack at a <span class='info_blue'>3%</span> rate for <span class='info_blue'>1</span> second.<br>- Enemies immune to this effect instead take <span class='info_blue'>10%</span> more damage.",
                "- Shadow Totem imposes a debuff on the target that causes it to deal 0 damage on attack at a <span class='info_blue'>6%</span> rate for <span class='info_blue'>1</span> second.<br>- Enemies immune to this effect instead take <span class='info_blue'>15%</span> more damage.",
                "- Shadow Totem imposes a debuff on the target that causes it to deal 0 damage on attack at a <span class='info_blue'>9%</span> rate for <span class='info_blue'>1</span> second.<br>- Enemies immune to this effect instead take <span class='info_blue'>20%</span> more damage.",
            ]
        }
    ],
    column3 = [
        {
            "hidden": 0,
            "image": 4023,
            "title": "Healing Totem",
            "resource": "Hotkey: E",
            "maxLevel": 1,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>25</span> , Cooldown: <span class='info_gray'>21sec</span> , Duration: <span class='info_gray'>11sec</span>",
            "texts": [
                "",
                "Teaches Healing Totem: Creates a ward that heals all allies within <span class='info_blue'>450</span> AoE every <span class='info_blue'>0.5</span> seconds",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4012,
            "title": "Improved Healing Totem",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 10,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Healing Totem also restores some mana.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4003,
            "title": "Bloodthirst",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Ancestral Blessing Totem grants Bloodlust on nearby allies, increasing attack speed by <span class='info_blue'>50%</span> and move speed by <span class='info_blue'>75</span> for <span class='info_blue'>10</span> seconds.<br>- Inner cooldown <span class='info_blue'>80</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4021,
            "title": "Earthen Totem",
            "resource": "Hotkey: Y",
            "maxLevel": 1,
            "lvlReq": 20,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>45</span> , Cooldown: <span class='info_gray'>45sec</span> , Duration: <span class='info_gray'>25sec</span>",
            "texts": [
                "",
                "Teaches Earthen Totem: Creates a totem that absorbs damage taken from nearby allies.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4010,
            "title": "Improved Earthen Totem",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 22,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increase Earthen Totem's durability by <span class='info_blue'>20%</span>.",
                "Increase Earthen Totem's durability by <span class='info_blue'>40%</span>.",
            ]
        }
    ],
    column4 = [
        {
            "hidden": 0,
            "image": 4001,
            "title": "Blessing of the Ancestors",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases your Spell Power by <span class='info_blue'>5%</span> of your Power and Energy.",
                "Increases your Spell Power by <span class='info_blue'>10%</span> of your Power and Energy.",
                "Increases your Spell Power by <span class='info_blue'>15%</span> of your Power and Energy.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4008,
            "title": "Empowered Unstable Potion",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 16,
            "locked": 1,
            "lockReq": "1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_gray'>First point taken adds <span class='info_blue'>+5</span>  mana cost.<br>- Fully talented <span class='info_blue'>Cooldown:</span> <span class='info_gray'>2.5sec</span>",
            "texts": [
                "",
                "Increase Unstable Potion's duration by <span class='info_blue'>0.5</span> seconds.",
                "Increase Unstable Potion's duration by <span class='info_blue'>1.0</span> seconds.",
                "Increase Unstable Potion's duration by <span class='info_blue'>1.5</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4002,
            "title": "Wrath of the Ancestors",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 36,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Ancestral Blessing Totem reduces nearby enemies' hit rate by <span class='info_blue'>10%</span> and their attack speed by <span class='info_blue'>15%</span>.",
                "Ancestral Blessing Totem reduces nearby enemies' hit rate by <span class='info_blue'>20%</span> and their attack speed by <span class='info_blue'>30%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4008,
            "title": "Potion Catalyst",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Unstable Potion stacks on the target, but gains only <span class='info_blue'>20%</span> additional healing per stack. Limit <span class='info_blue'>2</span> stacks.<br>- Against enemies, increases damage taken multiplier to <span class='info_blue'>1.2x</span>.<br>- When fully talented, the base duration of Unstable Potion is increased to <span class='info_blue'>5</span> seconds.",
                "- Unstable Potion stacks on the target, but gains only <span class='info_blue'>20%</span> additional healing per stack. Limit <span class='info_blue'>3</span> stacks.<br>- Against enemies, increases damage taken multiplier to <span class='info_blue'>1.4x</span>.<br>- When fully talented, the base duration of Unstable Potion is increased to <span class='info_blue'>5</span> seconds.",
                "- Unstable Potion stacks on the target, but gains only <span class='info_blue'>20%</span> additional healing per stack. Limit <span class='info_blue'>4</span> stacks.<br>- Against enemies, increases damage taken multiplier to <span class='info_blue'>1.6x</span>.<br>- When fully talented, the base duration of Unstable Potion is increased to <span class='info_blue'>5</span> seconds.",
                "- Unstable Potion stacks on the target, but gains only <span class='info_blue'>20%</span> additional healing per stack. Limit <span class='info_blue'>5</span> stacks.<br>- Against enemies, increases damage taken multiplier to <span class='info_blue'>1.8x</span>.<br>- When fully talented, the base duration of Unstable Potion is increased to <span class='info_blue'>5</span> seconds.",
                "- Unstable Potion stacks on the target, but gains only <span class='info_blue'>20%</span> additional healing per stack. Limit <span class='info_blue'>6</span> stacks.<br>- Against enemies, increases damage taken multiplier to <span class='info_blue'>2.0x</span>.<br>- When fully talented, the base duration of Unstable Potion is increased to <span class='info_blue'>5</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4007,
            "title": "Empowered Shadow Totem",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Shadow Totem gains Multishot, attacking up to <span class='info_blue'>2</span> enemies per hit.<br>- Increase Shadow Totem's attack range by <span class='info_blue'>50</span>.",
                "- Shadow Totem gains Multishot, attacking up to <span class='info_blue'>3</span> enemies per hit.<br>- Increase Shadow Totem's attack range by <span class='info_blue'>100</span>.",
            ]
        }
    ],
    column5 = [
        {
            "hidden": 0,
            "image": 4017,
            "title": "Shadow Magic",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 20,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increase all healing dealt by <span class='info_blue'>0.15%</span> x hero level.",
                "Increase all healing dealt by <span class='info_blue'>0.3%</span> x hero level.",
                "Increase all healing dealt by <span class='info_blue'>0.45%</span> x hero level.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4005,
            "title": "Empowered Healing Chain",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 18,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increase the number of bounces by <span class='info_blue'>1</span>.<br>- Increase bounce max range by <span class='info_blue'>50</span>.",
                "- Increase the number of bounces by <span class='info_blue'>2</span>.<br>- Increase bounce max range by <span class='info_blue'>100</span>.",
                "- Increase the number of bounces by <span class='info_blue'>3</span>.<br>- Increase bounce max range by <span class='info_blue'>150</span>.",
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
            "image": 4000,
            "title": "Descent of the Ancestors",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 40,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Each spell cast improves Spell Power for <span class='info_blue'>3</span> sec. This effect stacks up to <span class='info_blue'>0.1</span> x level times.",
                "Each spell cast improves Spell Power for <span class='info_blue'>3</span> sec. This effect stacks up to <span class='info_blue'>0.1</span> x level times.<br> <span class='info_blue'>First point:</span> When Bloodthirst activates, all inner cooldowns are reduced.<br> <span class='info_blue'>Second point:</span> Healing Chain transfers Unstable Potion healing.",
                "Each spell cast improves Spell Power for <span class='info_blue'>3</span> sec. This effect stacks up to <span class='info_blue'>0.1</span> x level times.<br> <span class='info_blue'>First point:</span> When Bloodthirst activates, all inner cooldowns are reduced.<br> <span class='info_blue'>Second point:</span> Healing Chain transfers Unstable Potion healing.<br> <span class='info_blue'>Third point:</span> Allows hero to survive past death by magic damage for <span class='info_blue'>7</span> sec, inner cooldown <span class='info_blue'>300</span> sec",
            ]
        }
    ],
    column6 = [
        {
            "hidden": 0,
            "image": 4015,
            "title": "Shadow Veil",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 8,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Spell Critical Chance by <span class='info_blue'>0.075%</span> per hero level and Spell Critical Power by <span class='info_blue'>0.3%</span> per hero level.",
                "Increases Spell Critical Chance by <span class='info_blue'>0.15%</span> per hero level and Spell Critical Power by <span class='info_blue'>0.6%</span> per hero level.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4006,
            "title": "Empowered Healing Totem",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Healing Totem's duration by <span class='info_blue'>2</span> seconds.",
                "Increases Healing Totem's duration by <span class='info_blue'>4</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4019,
            "title": "Totem Mastery",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 28,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increase the effect of all Totems by <span class='info_blue'>7%</span>.",
                "Increase the effect of all Totems by <span class='info_blue'>14%</span>.",
                "Increase the effect of all Totems by <span class='info_blue'>21%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4006,
            "title": "Totem of Malfeasance",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Healing Totem curses nearby enemies.<br>- Each talent point spent adds the following reductions: Move speed/attack speed/armor/physical damage dealt/magical damage dealt.<br>- When fully talented, increases Healing Totem duration by <span class='info_blue'>3</span> seconds.",
                "Healing Totem curses nearby enemies.<br>- Each talent point spent adds the following reductions: Move speed/attack speed/armor/physical damage dealt/magical damage dealt.<br>- When fully talented, increases Healing Totem duration by <span class='info_blue'>3</span> seconds.",
                "Healing Totem curses nearby enemies.<br>- Each talent point spent adds the following reductions: Move speed/attack speed/armor/physical damage dealt/magical damage dealt.<br>- When fully talented, increases Healing Totem duration by <span class='info_blue'>3</span> seconds.",
                "Healing Totem curses nearby enemies.<br>- Each talent point spent adds the following reductions: Move speed/attack speed/armor/physical damage dealt/magical damage dealt.<br>- When fully talented, increases Healing Totem duration by <span class='info_blue'>3</span> seconds.",
                "Healing Totem curses nearby enemies.<br>- Each talent point spent adds the following reductions: Move speed/attack speed/armor/physical damage dealt/magical damage dealt.<br>- When fully talented, increases Healing Totem duration by <span class='info_blue'>3</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 4004,
            "title": "Earth Resonance",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 36,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- When Earthen Totem is destroyed, nearby enemies suffer a debuff that deals spell damage over time.<br>- <span class='info_blue'>Second point:</span> Slows all hit enemies for <span class='info_blue'>5</span> seconds.",
                "- When Earthen Totem is destroyed, nearby enemies suffer a debuff that deals spell damage over time.<br>- <span class='info_blue'>Second point:</span> Slows all hit enemies for <span class='info_blue'>5</span> seconds.",
            ]
        }
    ]
];
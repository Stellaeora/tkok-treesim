var paladin_skills = [
    column1 = [
        {
            "hidden": 0,
            "image": 873,
            "title": "Mark of Replenishment",
            "resource": "Hotkey: Q",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Melee / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>10</span> , Cooldown: <span class='info_gray'>8sec</span> , Duration: <span class='info_gray'>10sec</span>",
            "texts": [
                "",
                "Teaches Mark of Replenishment: A single target attack that deals magic damage. For the duration all attacks made against this target have a <span class='info_blue'>30%</span> chance to restore life to the attacker",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 864,
            "title": "Improved M. of R.",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 6,
            "locked": 1,
            "lockReq": "1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<span class='info_blue'>Cooldown: <span class='info_gray'>7</span>",
            "texts": [
                "",
                "Mark of Replenishment now has a <span class='info_blue'>20%</span> chance to restore mana to the attacker (this proc is a seperate chance from the heal effect)",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 866,
            "title": "Mark Of Justice",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 36,
            "locked": 1,
            "lockReq": "1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Mark of Replenishment adds a stacking debuff on the target, limit <span class='info_blue'>10</span> stacks.<br>- If the target is hit by Divine Wrath, the mark deals <span class='info_blue'>10%</span> of Divine Wrath's damage and heal per stack in a large AoE.",
                "- Mark of Replenishment adds a stacking debuff on the target, limit <span class='info_blue'>10</span> stacks.<br>- If the target is hit by Divine Wrath, the mark deals <span class='info_blue'>20%</span> of Divine Wrath's damage and heal per stack in a large AoE.",
                "- Mark of Replenishment adds a stacking debuff on the target, limit <span class='info_blue'>10</span> stacks.<br>- If the target is hit by Divine Wrath, the mark deals <span class='info_blue'>30%</span> of Divine Wrath's damage and heal per stack in a large AoE.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 872,
            "title": "Light Infusion",
            "resource": "Hotkey: T",
            "maxLevel": 1,
            "lvlReq": 18,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Target / Ranged</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Hero Level</span></p><span class='info_blue'>Manacost: <span class='info_gray'>15</span> , Cooldown: <span class='info_gray'>30sec</span> , Duration: <span class='info_gray'>15sec</span>",
            "texts": [
                "",
                "Teaches Light Infusion: A single target buff that reduces all damage taken by <span class='info_blue'>15%</span>",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 863,
            "title": "Improved Light Infusion",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>20</span>",
            "texts": [
                "",
                "While Light Infusion is active, all Divine Touches used on the target now heals all allies around the target for <span class='info_blue'>12%</span> of the total amount healed (Does not heal the target with this effect)",
                "While Light Infusion is active, all Divine Touches used on the target now heals all allies around the target for <span class='info_blue'>24%</span> of the total amount healed (Does not heal the target with this effect)",
            ]
        }
    ],
    column2 = [
        {
            "hidden": 0,
            "image": 874,
            "title": "Mark of Sanctuary",
            "resource": "Hotkey: W",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>15</span> , Cooldown: <span class='info_gray'>7sec</span>, Duration: <span class='info_gray'>5sec</span>",
            "texts": [
                "",
                "Teaches Mark of Sanctuary: A single target buff that reduces damage taken by <span class='info_blue'>10% </span>and heals the target over duration.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 874,
            "title": "Improved M. of S.",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 8,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Mark of Sanctuary now will heal all allies around the target when it expires for <span class='info_blue'>15%</span> of the total amount it healed.<br>- AoE increases with talent level. (Does not heal the target with this effect)",
                "- Mark of Sanctuary now will heal all allies around the target when it expires for <span class='info_blue'>30%</span> of the total amount it healed.<br>- AoE increases with talent level. (Does not heal the target with this effect)",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 871,
            "title": "Divine Wrath",
            "resource": "Hotkey: R",
            "maxLevel": 1,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Melee / Target / Instantaneous / Area Caster </span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>15</span> , Cooldown: <span class='info_gray'>8sec</span>",
            "texts": [
                "",
                "- Teaches Divine Wrath: A single target attack that deals magic damage. If Mark of Replenishment is active on the target, it will also heal all allies around the target.<br>- Will also restore mana with Improved Mark of Replenishment",
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
            "image": 868,
            "title": "Unbreakable Spirit",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Light Infusion duration by <span class='info_blue'>2</span> seconds. Increases armor by <span class='info_blue'>0.3</span> per level.",
                "Increases Light Infusion duration by <span class='info_blue'>4</span> seconds. Increases armor by <span class='info_blue'>0.6</span> per level.",
                "Increases Light Infusion duration by <span class='info_blue'>6</span> seconds. Increases armor by <span class='info_blue'>0.9</span> per level.",
            ]
        }
    ],
    column3 = [
        {
            "hidden": 0,
            "image": 870,
            "title": "Divine Touch",
            "resource": "Hotkey: E",
            "maxLevel": 1,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>20</span> , Cooldown: <span class='info_gray'>4sec</span>",
            "texts": [
                "",
                "Teaches Divine Touch: A single target damage or heal",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 850,
            "title": "Divine Favor",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Divine Touch resets the target's cooldowns, inner cooldown <span class='info_blue'>300</span> seconds.<br>- If Divine Touch hits an enemy, it reduces <span class='info_blue'>30</span> move speed and reduces damage of the target by <span class='info_blue'>5%</span> for <span class='info_blue'>2</span> seconds.",
                "- Divine Touch resets the target's cooldowns, inner cooldown <span class='info_blue'>250</span> seconds.<br>- If Divine Touch hits an enemy, it reduces <span class='info_blue'>60</span> move speed and reduces damage of the target by <span class='info_blue'>10%</span> for <span class='info_blue'>2</span> seconds.",
                "- Divine Touch resets the target's cooldowns, inner cooldown <span class='info_blue'>200</span> seconds.<br>- If Divine Touch hits an enemy, it reduces <span class='info_blue'>90</span> move speed and reduces damage of the target by <span class='info_blue'>15%</span> for <span class='info_blue'>2</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 853,
            "title": "Divine Stance",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 16,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increases threat generation. If this talent is learned, Divine Light can no longer heal but its damage is doubled.<br>- Generates threat when dodging attacks.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 869,
            "title": "Divine Light",
            "resource": "Hotkey: Y",
            "maxLevel": 1,
            "lvlReq": 12,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Area Continuous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>25</span> , Cooldown: <span class='info_gray'>30sec</span> , Duration: <span class='info_gray'>12sec</span>",
            "texts": [
                "",
                "Teaches Divine Light: Summons a light orb heals all allies within <span class='info_blue'>425</span> AoE for each <span class='info_blue'>2</span> second",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 862,
            "title": "Improved Divine Light",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Cooldown: <span class='info_gray'>28sec</span>",
            "texts": [
                "",
                "Divine Light will now damage enemies in the area as well",
            ]
        }
    ],
    column4 = [
        {
            "hidden": 0,
            "image": 867,
            "title": "Path of the Divine",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases spell power by <span class='info_blue'>9%</span> of your Power and <span class='info_blue'>7%</span> of your Energy",
                "Increases spell power by <span class='info_blue'>18%</span> of your Power and <span class='info_blue'>14%</span> of your Energy",
                "Increases spell power by <span class='info_blue'>27%</span> of your Power and <span class='info_blue'>21%</span> of your Energy",
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
            "image": 859,
            "title": "Empowered M. of S.",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Mark of Sanctuary ticks 1 less time but heals allies in a small AoE for <span class='info_blue'>15%</span> of healing dealt.",
                "- Mark of Sanctuary ticks 1 less time but heals allies in a small AoE for <span class='info_blue'>30%</span> of healing dealt.",
                "- Mark of Sanctuary ticks 1 less time but heals allies in a small AoE for <span class='info_blue'>30%</span> of healing dealt.<br>- <span class='info_blue'>Third point:</span> Restores the <span class='info_blue'>1</span> lost tick.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 861,
            "title": "Holy Prism",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 36,
            "locked": 1,
            "lockReq": "0-0-0-1-2-0-0-0-0-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Paladin receives part of the remaining damage dealt on the target of Light Infusion. Receives <span class='info_blue'>16%</span> damage for <span class='info_blue'>3</span> seconds.",
                "Paladin receives part of the remaining damage dealt on the target of Light Infusion. Receives <span class='info_blue'>32%</span> damage for <span class='info_blue'>5</span> seconds.",
                "Paladin receives part of the remaining damage dealt on the target of Light Infusion. Receives <span class='info_blue'>48%</span> damage for <span class='info_blue'>7</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 857,
            "title": "Empowered Light Infusion",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 26,
            "locked": 1,
            "lockReq": "0-0-0-1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_gray'>Each point adds <span class='info_blue'>+5</span> mana cost.",
            "texts": [
                "",
                "Increases the damage reduction of Light Infusion by <span class='info_blue'>4%</span> and area effect healing by <span class='info_blue'>3%</span>",
                "Increases the damage reduction of Light Infusion by <span class='info_blue'>8%</span> and area effect healing by <span class='info_blue'>6%</span>",
            ]
        }
    ],
    column5 = [
        {
            "hidden": 0,
            "image": 852,
            "title": "Divine Hammer",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 4,
            "locked": 1,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases your damage by <span class='info_blue'>15</span> plus <span class='info_blue'>7%</span> of your Power and your Energy",
                "Increases your damage by <span class='info_blue'>30</span> plus <span class='info_blue'>14%</span> of your Power and your Energy",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 858,
            "title": "Empowered M. of R.",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 10,
            "locked": 1,
            "lockReq": "1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases the damage of Mark of Replenishment by 20% and its chances to proc by <span class='info_blue'>5%</span> + <span class='info_blue'>0.2%</span> x hero level.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 858,
            "title": "Perfect Replenishment",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increase Mark of Replenishment's Life restore rate by <span class='info_blue'>11%</span>. Mana restoration chance is increased by half this amount.<br>- Increase healing amount by <span class='info_blue'>20%</span>.<br>- When fully talented, Mark of Replenishment can be cast twice before entering cooldown.",
                "- Increase Mark of Replenishment's Life restore rate by <span class='info_blue'>22%</span>. Mana restoration chance is increased by half this amount.<br>- Increase healing amount by <span class='info_blue'>40%</span>.<br>- When fully talented, Mark of Replenishment can be cast twice before entering cooldown.",
                "- Increase Mark of Replenishment's Life restore rate by <span class='info_blue'>33%</span>. Mana restoration chance is increased by half this amount.<br>- Increase healing amount by <span class='info_blue'>60%</span>.<br>- When fully talented, Mark of Replenishment can be cast twice before entering cooldown.",
                "- Increase Mark of Replenishment's Life restore rate by <span class='info_blue'>44%</span>. Mana restoration chance is increased by half this amount.<br>- Increase healing amount by <span class='info_blue'>80%</span>.<br>- When fully talented, Mark of Replenishment can be cast twice before entering cooldown.",
                "- Increase Mark of Replenishment's Life restore rate by <span class='info_blue'>55%</span>. Mana restoration chance is increased by half this amount.<br>- Increase healing amount by <span class='info_blue'>100%</span>.<br>- When fully talented, Mark of Replenishment can be cast twice before entering cooldown.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 856,
            "title": "Empowered Divine Wrath",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Divine Wrath inflicts a debuff that increases damage taken by <span class='info_blue'>100%</span> only against non-bosses for <span class='info_blue'>4</span> seconds.<br>- Against bosses, instead grants <span class='info_blue'>15%</span> spell lifesteal for <span class='info_blue'>1</span> seconds.",
                "- Divine Wrath inflicts a debuff that increases damage taken by <span class='info_blue'>200%</span> only against non-bosses for <span class='info_blue'>4</span> seconds.<br>- Against bosses, instead grants <span class='info_blue'>15%</span> spell lifesteal for <span class='info_blue'>2</span> seconds.",
                "- Divine Wrath inflicts a debuff that increases damage taken by <span class='info_blue'>300%</span> only against non-bosses for <span class='info_blue'>4</span> seconds.<br>- Against bosses, instead grants <span class='info_blue'>15%</span> spell lifesteal for <span class='info_blue'>3</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 860,
            "title": "Holy Field",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 40,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-2",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increase Divine Light's AoE by <span class='info_blue'>100</span>, and allies inside it gain <span class='info_blue'>25</span> movespeed.<br>- <span class='info_blue'>First point:</span> Summons a holy ring that repels enemies.",
                "- Increase Divine Light's AoE by <span class='info_blue'>200</span>, and allies inside it gain <span class='info_blue'>50</span> movespeed.<br>- <span class='info_blue'>First point:</span> Summons a holy ring that repels enemies.<br>- <span class='info_blue'>Second point:</span> Divine Touch produces holy flame at allies' feet, rapidly healing over time.",
                "- Increase Divine Light's AoE by <span class='info_blue'>300</span>, and allies inside it gain <span class='info_blue'>75</span> movespeed.<br>- <span class='info_blue'>First point:</span> Summons a holy ring that repels enemies.<br>- <span class='info_blue'>Second point:</span> Divine Touch produces holy flame at allies' feet, rapidly healing over time.<br>- <span class='info_blue'>Third point:</span> Damage received from Holy Prism is converted to healing that is distributed among allies inside Divine Light.<br>",
            ]
        }
    ],
    column6 = [
        {
            "hidden": 0,
            "image": 851,
            "title": "Divine Guardian",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 6,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases your armor by <span class='info_blue'>15</span> and by <span class='info_blue'3%></span> of your spell power. Adds <span class='info_blue'>4%</span> dodge.",
                "Increases your armor by <span class='info_blue'>30</span> and by <span class='info_blue'6%></span> of your spell power. Adds <span class='info_blue'>8%</span> dodge.",
                "Increases your armor by <span class='info_blue'>45</span> and by <span class='info_blue'9%></span> of your spell power. Adds <span class='info_blue'>12%</span> dodge.",
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
            "image": 855,
            "title": "Empowered Divine Touch",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 18,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases the healing and damage done by Divine Touch by <span class='info_blue'>12%</span>. Allies in a holy ring recieve <span class='info_blue'>1.5x</span> healing.",
                "Increases the healing and damage done by Divine Touch by <span class='info_blue'>24%</span>. Allies in a holy ring recieve <span class='info_blue'>2x</span> healing.",
                "Increases the healing and damage done by Divine Touch by <span class='info_blue'>36%</span>. Allies in a holy ring recieve <span class='info_blue'>2.5x</span> healing.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 855,
            "title": "Holy Trial",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increase healing of Divine Touch by <span class='info_blue'>10%</span>.<br>- Increase holy flame duration by <span class='info_blue'>1</span> seconds. When fully talented,<br>- Divine Touch becomes an AoE heal.",
                "- Increase healing of Divine Touch by <span class='info_blue'>20%</span>.<br>- Increase holy flame duration by <span class='info_blue'>2</span> seconds. When fully talented,<br>- Divine Touch becomes an AoE heal.",
                "- Increase healing of Divine Touch by <span class='info_blue'>30%</span>.<br>- Increase holy flame duration by <span class='info_blue'>3</span> seconds. When fully talented,<br>- Divine Touch becomes an AoE heal.",
                "- Increase healing of Divine Touch by <span class='info_blue'>40%</span>.<br>- Increase holy flame duration by <span class='info_blue'>4</span> seconds. When fully talented,<br>- Divine Touch becomes an AoE heal.",
                "- Increase healing of Divine Touch by <span class='info_blue'>50%</span>.<br>- Increase holy flame duration by <span class='info_blue'>5</span> seconds. When fully talented,<br>- Divine Touch becomes an AoE heal.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 854,
            "title": "Empowered Divine Light",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Cooldown: <span class='info_gray'>26sec</span>",
            "texts": [
                "",
                "Increases the damage dealt by Divine Light by <span class='info_blue'>20%</span> and healing per tick by <span class='info_blue'>10%</span> and duration by <span class='info_blue'>1</span> seconds.",
                "Increases the damage dealt by Divine Light by <span class='info_blue'>40%</span> and healing per tick by <span class='info_blue'>20%</span> and duration by <span class='info_blue'>2</span> seconds.",
            ]
        }
    ]
];
var cleric_skills = [
    column1 = [
        {
            "hidden": 0,
            "image": 690,
            "title": "Flash of Light",
            "resource": "Hotkey: Q",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p>",
            "texts": [
                "",
                "<p><span class='info_gray'>Teaches Flash of Light: Heals a single target or deals magic damage to a single enemy.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 611,
            "title": "Improved Flash of Light",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 6,
            "locked": 1,
            "lockReq": "1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Targets hit by your Flash of Light are now filled with holy energy. The next Holy Fire used on this target will increase in damage by <span class='info_blue'>25%</span> or healing by <span class='info_blue'>15%</span>.",
                "Targets hit by your Flash of Light are now filled with holy energy. The next Holy Fire used on this target will increase in damage by <span class='info_blue'>50%</span> or healing by <span class='info_blue'>30%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 602,
            "title": "Conjurator",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 36,
            "locked": 0,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Transforms the Cleric into a Dark Cleric.<br>All healing effects except Inner Power will be removed upon learning this ability.<br>Change the following skill behaviors:<br> - Flash of Light is changed to <span class='info_blue'>Desecrate</span> and its damage is increased.<br> - Holy Fire is changed to <span class='info_blue'>Bestow Curse</span> and its damage is increased.<br> - Divine Protection is changed to <span class='info_blue'>Entropic Shield</span> and its damage reduction is removed.<br> - Heavenly Rain is changed to <span class='info_blue'>Disrupting Rain</span> and deals damage to nearby enemies instead of healing allies.<br> - Guardian Angel is changed to <span class='info_blue'>Blasphemy</span> and its damage is increased.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 694,
            "title": "Heavenly Rain",
            "resource": "Hotkey: T",
            "maxLevel": 1,
            "lvlReq": 12,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Heal / Continuous / Area Caster</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p>",
            "texts": [
                "",
                "Teaches Heavenly Rain: Heals all allied units in <span class='info_blue'>525</span> AoE every second for <span class='info_blue'>10s</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 613,
            "title": "Improved Heavenly Rain",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Enemies that are within Heavenly Rain's AoE suffer <span class='info_blue'>20%</span> reduced attackspeed.<br>Dark Cleric: Reduces armor by <span class='info_blue'>20%</span> instead of attackspeed.",
            ]
        }
    ],
    column2 = [
        {
            "hidden": 0,
            "image": 691,
            "title": "Holy Fire",
            "resource": "Hotkey: W",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Delayed Cast</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p>",
            "texts": [
                "",
                "Teaches Holy Fire: Heals a single target or deals magic damage to a single enemy.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 614,
            "title": "Improved Holy Fire",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 10,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Targets healed by your Holy Fire now gain a heal-over-time effect that heals for <span class='info_blue'>35%</span> of Holy Fire's total heal over a 3 second duration.<br>Dark Cleric: Targets hit by Bestow Curse now gain a damage-over-time effect that deals <span class='info_blue'>35%</span> of Bestow Curse's total damage over a 3 second duration."
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 693,
            "title": "Divine Protection",
            "resource": "Hotkey: R",
            "maxLevel": 1,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Target</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Nothing</span></p>",
            "texts": [
                "",
                "Teaches Divine Protection: Reduce all damage the target takes by <span class='info_blue'>15%</span> for <span class='info_blue'>11</span> seconds.<br>Dark Cleric: Teaches Entropic Shield: Deals continuous damage over time based on your Spell Power to the target for <span class='info_blue'>11</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 610,
            "title": "Improved Divine Protection",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 14,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "While Divine Protection is active, the target receives <span class='info_blue'>15%</span> more healing from abilities.<br>Dark Cleric: While Entropic Shield is active, the target takes <span class='info_blue'>5%</span> more damage from all sources.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 617,
            "title": "Source of Rain",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 36,
            "locked": 0,
            "lockReq": "0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increase the duration of Heavenly Rain from 11 to <span class='info_blue'>13</span> seconds. Increase the attack speed reduction from 20% to <span class='info_blue'>25%</span>.<br>Dark Cleric: Increase the duration of Disrupting Rain by the same amount and the armor reduction from 20% to <span class='info_blue'>25%</span>.",
                "Increase the duration of Heavenly Rain from 11 to <span class='info_blue'>15</span> seconds. Increase the attack speed reduction from 20% to <span class='info_blue'>30%</span>.<br>Dark Cleric: Increase the duration of Disrupting Rain by the same amount and the armor reduction from 20% to <span class='info_blue'>30%</span>.",
                "Increase the duration of Heavenly Rain from 11 to <span class='info_blue'>17</span> seconds. Increase the attack speed reduction from 20% to <span class='info_blue'>35%</span>.<br>Dark Cleric: Increase the duration of Disrupting Rain by the same amount and the armor reduction from 20% to <span class='info_blue'>35%</span>.",
            ]
        }
    ],
    column3 = [
        {
            "hidden": 0,
            "image": 692,
            "title": "Inner Power",
            "resource": "Hotkey: E",
            "maxLevel": 1,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Area Caster</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power</span></p>",
            "texts": [
                "",
                "Teaches Inner Power: Grants all nearby allied units (including yourself) a buff that increases their armor and attack damage for <span class='info_blue'>120</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 615,
            "title": "Improved Inner Power",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 18,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Targets with Inner Power active now receive <span class='info_blue'>[5 + 0.07 x Hero Level]%</span> more healing from all abilities.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 601,
            "title": "Calm Emotions",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Inner Power now grants a <span class='info_blue'>3%</span> chance to negate negative effects.<br>Only the following effects can be negated: Stun, Silence, Ensnare, Disable, Disarm, Entangle.",
                "Inner Power now grants a <span class='info_blue'>6%</span> chance to negate negative effects.<br>Only the following effects can be negated: Stun, Silence, Ensnare, Disable, Disarm, Entangle.<br>Inner Power will now also provide <span class='info_blue'>[7 + 0.05 x Hero Level]%</span> Attack Crit Power.<br>Classes that use Hybrid Power receive 30% less Crit Power from this ability.",
                "Inner Power now grants a <span class='info_blue'>9%</span> chance to negate negative effects.<br>Only the following effects can be negated: Stun, Silence, Ensnare, Disable, Disarm, Entangle.<br>Inner Power will now also provide <span class='info_blue'>[7 + 0.05 x Hero Level]%</span> Attack Crit Power and Spell Crit Power.<br>Classes that use Hybrid Power receive 30% less Crit Power from this ability.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 695,
            "title": "Guardian Angel",
            "resource": "Hotkey: Y",
            "maxLevel": 1,
            "lvlReq": 18,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Area Caster / Delayed Cast</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Spell Power, Spell Critical</span></p>",
            "texts": [
                "",
                "Teaches Guardian Angel: Deals magic damage to all enemies in <span class='info_blue'>600</span> AoE around the caster.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 612,
            "title": "Improved Guardian Angel",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Guardian Angel now stuns all hit targets for <span class='info_blue'>2s</span>. Allies within the range of Guardian Angel will now be healed for an amount based on Spell Power.<br>Dark Cleric: Blasphemy now stuns all hit targets for <span class='info_blue'>2s</span>.",
            ]
        }
    ],
    column4 = [
        {
            "hidden": 0,
            "image": 609,
            "title": "Divine Faith",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 8,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Spell Power by <span class='info_blue'>10%</span> of your Energy attribute.<br>If Divine Spirit is talented, Divine Spirit will provide an additional <span class='info_blue'>[0.008 x Hero Level]</span> mana regeneration.",
                "Increases Spell Power by <span class='info_blue'>20%</span> of your Energy attribute.<br>If Divine Spirit is talented, Divine Spirit will provide an additional <span class='info_blue'>[0.016 x Hero Level]</span> mana regeneration.",
                "Increases Spell Power by <span class='info_blue'>30%</span> of your Energy attribute.<br>If Divine Spirit is talented, Divine Spirit will provide an additional <span class='info_blue'>[0.024 x Hero Level]</span> mana regeneration.",
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
            "image": 604,
            "title": "Divine Spirit",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 22,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "You regenerate an additional <span class='info_blue'>1.00</span> mana per second.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 603,
            "title": "Perfect Devotion",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Divine Protection's damage reduction by a further <span class='info_blue'>3%</span>. The delay between each heal tick of Divine Protection is reduced from 4 to <span class='info_blue'>3.5</span> seconds.<br>Dark Cleric: Increase the damage dealt by Entropic Shield by <span class='info_blue'>20%</span>, damage taken bonus by <span class='info_blue'>2%</span> and mana cost by <span class='info_blue'>5</span>.<br>When fully talented, Divine Protection/Entropic Shield's base duration is increased by 3 seconds.",
                "Increases Divine Protection's damage reduction by a further <span class='info_blue'>6%</span>. The delay between each heal tick of Divine Protection is reduced from 4 to <span class='info_blue'>3.0</span> seconds.<br>Dark Cleric: Increase the damage dealt by Entropic Shield by <span class='info_blue'>40%</span>, damage taken bonus by <span class='info_blue'>4%</span> and mana cost by <span class='info_blue'>10</span>.<br>When fully talented, Divine Protection/Entropic Shield's base duration is increased by 3 seconds.",
                "Increases Divine Protection's damage reduction by a further <span class='info_blue'>9%</span>. The delay between each heal tick of Divine Protection is reduced from 4 to <span class='info_blue'>2.5</span> seconds.<br>Dark Cleric: Increase the damage dealt by Entropic Shield by <span class='info_blue'>60%</span>, damage taken bonus by <span class='info_blue'>6%</span> and mana cost by <span class='info_blue'>15</span>.<br>When fully talented, Divine Protection/Entropic Shield's base duration is increased by 3 seconds.",
                "Increases Divine Protection's damage reduction by a further <span class='info_blue'>12%</span>. The delay between each heal tick of Divine Protection is reduced from 4 to <span class='info_blue'>2.0</span> seconds.<br>Dark Cleric: Increase the damage dealt by Entropic Shield by <span class='info_blue'>80%</span>, damage taken bonus by <span class='info_blue'>8%</span> and mana cost by <span class='info_blue'>20</span>.<br>When fully talented, Divine Protection/Entropic Shield's base duration is increased by 3 seconds.",
                "Increases Divine Protection's damage reduction by a further <span class='info_blue'>15%</span>. The delay between each heal tick of Divine Protection is reduced from 4 to <span class='info_blue'>1.5</span> seconds.<br>Dark Cleric: Increase the damage dealt by Entropic Shield by <span class='info_blue'>100%</span>, damage taken bonus by <span class='info_blue'>10%</span> and mana cost by <span class='info_blue'>25</span>.<br>When fully talented, Divine Protection/Entropic Shield's base duration is increased by 3 seconds.",
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
    column5 = [
        {
            "hidden": 0,
            "image": 607,
            "title": "Consecrate",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increase Inner Power's damage bonus by <span class='info_blue'>20%</span> and armor bonus by <span class='info_blue'>10%</span>.<br>Inner Power will now add <span class='info_blue'>2%</span> Magic Resist to all affected targets.",
                "Increase Inner Power's damage bonus by <span class='info_blue'>40%</span> and armor bonus by <span class='info_blue'>20%</span>.<br>Inner Power will now add <span class='info_blue'>4%</span> Magic Resist to all affected targets.",
                "Increase Inner Power's damage bonus by <span class='info_blue'>60%</span> and armor bonus by <span class='info_blue'>30%</span>.<br>Inner Power will now add <span class='info_blue'>6%</span> Magic Resist to all affected targets.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 606,
            "title": "Empowered Holy Fire",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 20,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increase the damage and healing dealt by Holy Fire by <span class='info_blue'>5%</span>.<br>Increase the heal-over-time effect on allies from 35% to <span class='info_blue'>42%</span>.<br>Dark Cleric: Increase the damage and damage-over-time effects of Bestow Curse by the same amount.",
                "Increase the damage and healing dealt by Holy Fire by <span class='info_blue'>10%</span>.<br>Increase the heal-over-time effect on allies from 35% to <span class='info_blue'>49%</span>.<br>Dark Cleric: Increase the damage and damage-over-time effects of Bestow Curse by the same amount.",
                "Increase the damage and healing dealt by Holy Fire by <span class='info_blue'>15%</span>.<br>Increase the heal-over-time effect on allies from 35% to <span class='info_blue'>56%</span>.<br>Dark Cleric: Increase the damage and damage-over-time effects of Bestow Curse by the same amount.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 605,
            "title": "Flash of Soul",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Flash of Light/Desecrate's bounce chance is increased from 45% to <span class='info_blue'>56%</span>. The maximum bounce range is increased from 300 to <span class='info_blue'>350</span>.<br>When fully talented, Flash of Light can bounce twice instead of once (each bounce must be on a different target).",
                "Flash of Light/Desecrate's bounce chance is increased from 45% to <span class='info_blue'>67%</span>. The maximum bounce range is increased from 300 to <span class='info_blue'>400</span>.<br>When fully talented, Flash of Light can bounce twice instead of once (each bounce must be on a different target).",
                "Flash of Light/Desecrate's bounce chance is increased from 45% to <span class='info_blue'>78%</span>. The maximum bounce range is increased from 300 to <span class='info_blue'>450</span>.<br>When fully talented, Flash of Light can bounce twice instead of once (each bounce must be on a different target).",
                "Flash of Light/Desecrate's bounce chance is increased from 45% to <span class='info_blue'>89%</span>. The maximum bounce range is increased from 300 to <span class='info_blue'>500</span>.<br>When fully talented, Flash of Light can bounce twice instead of once (each bounce must be on a different target).",
                "Flash of Light/Desecrate's bounce chance is increased from 45% to <span class='info_blue'>100%</span>. The maximum bounce range is increased from 300 to <span class='info_blue'>550</span>.<br>When fully talented, Flash of Light can bounce twice instead of once (each bounce must be on a different target).",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 603,
            "title": "Divine Plea",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Guardian Angel's damage and healing are both increased by <span class='info_blue'>15%</span>. Guardian Angel's AoE is increased from 600 to <span class='info_blue'>700</span>.<br>Dark Cleric: Increase the damage and AoE of Blasphemy by the same amounts.",
                "Guardian Angel's damage and healing are both increased by <span class='info_blue'>30%</span>. Guardian Angel's AoE is increased from 600 to <span class='info_blue'>800</span>.<br>Dark Cleric: Increase the damage and AoE of Blasphemy by the same amounts.",
                "Guardian Angel's damage and healing are both increased by <span class='info_blue'>45%</span>. Guardian Angel's AoE is increased from 600 to <span class='info_blue'>900</span>.<br>Dark Cleric: Increase the damage and AoE of Blasphemy by the same amounts.",
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
            "image": 605,
            "title": "Empowered Flash of Light",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 16,
            "locked": 1,
            "lockReq": "1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Flash of Light/Desecrate deals <span class='info_blue'>8%</span> more damage and healing.<br>Flash of Light/Desecrate has a <span class='info_blue'>15%</span> to bounce onto another valid target in 300 AoE and heal/damage them accordingly.",
                "Flash of Light/Desecrate deals <span class='info_blue'>16%</span> more damage and healing.<br>Flash of Light/Desecrate has a <span class='info_blue'>30%</span> to bounce onto another valid target in 300 AoE and heal/damage them accordingly.",
                "Flash of Light/Desecrate deals <span class='info_blue'>24%</span> more damage and healing.<br>Flash of Light/Desecrate has a <span class='info_blue'>45%</span> to bounce onto another valid target in 300 AoE and heal/damage them accordingly.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 616,
            "title": "Resurrection",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 40,
            "locked": 1,
            "lockReq": "0-0-0-1-1-0-0-0-0-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Allies that die while Inner Power is active on them will leave behind a stone cross at the point of death. If you cast Holy Fire on this cross within <span class='info_blue'>5</span> seconds, the target will be resurrected.<br>Target will have <span class='info_blue'>10%</span> Life and <span class='info_blue'>0</span> Mana upon revival.<br>Resurrection has a cooldown of <span class='info_blue'>300</span> seconds.<br>This talent has no effect on Dark Cleric.",
                "Allies that die while Inner Power is active on them will leave behind a stone cross at the point of death. If you cast Holy Fire on this cross within <span class='info_blue'>6</span> seconds, the target will be resurrected.<br>Target will have <span class='info_blue'>50%</span> Life and <span class='info_blue'>20%</span> Mana upon revival, and will spawn with the Inner Power buff.<br>Resurrection has a cooldown of <span class='info_blue'>250</span> seconds.<br>This talent has no effect on Dark Cleric.",
                "Allies that die while Inner Power is active on them will leave behind a stone cross at the point of death. If you cast Holy Fire on this cross within <span class='info_blue'>7</span> seconds, the target will be resurrected.<br>Target will have <span class='info_blue'>100%</span> Life and <span class='info_blue'>100%</span> Mana upon revival, and will spawn with the Inner Power and Divine Protection buffs.<br>Resurrection has a cooldown of <span class='info_blue'>200</span> seconds.<br>This talent has no effect on Dark Cleric.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 600,
            "title": "Blind Faith",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases the damage reduction of Divine Protection from 15% to <span class='info_blue'>19%</span> and the duration from 11 to <span class='info_blue'>12</span> seconds.<br>Divine Protection will now heal the target every 4 seconds for an amount based on your Spell Power.<br>Dark Cleric: Increases the damage taken bonus of Entropic Shield from 5% to <span class='info_blue'>9%</span> and duration from 11 to <span class='info_blue'>12</span> seconds.",
                "Increases the damage reduction of Divine Protection from 15% to <span class='info_blue'>23%</span> and the duration from 11 to <span class='info_blue'>13</span> seconds.<br>Divine Protection will now heal the target every 4 seconds for an amount based on your Spell Power.<br>Dark Cleric: Increases the damage taken bonus of Entropic Shield from 5% to <span class='info_blue'>13%</span> and duration from 11 to <span class='info_blue'>13</span> seconds.",
                "Increases the damage reduction of Divine Protection from 15% to <span class='info_blue'>27%</span> and the duration from 11 to <span class='info_blue'>14</span> seconds.<br>Divine Protection will now heal the target every 4 seconds for an amount based on your Spell Power.<br>Dark Cleric: Increases the damage taken bonus of Entropic Shield from 5% to <span class='info_blue'>17%</span> and duration from 11 to <span class='info_blue'>14</span> seconds.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 608,
            "title": "Glyph of Warding",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-3-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Guardian Angel heals an additional <span class='info_blue'>1</span> time with a 4 second delay between each heal, at half effectiveness.<br>Dark Cleric: Blasphemy deals damage <span class='info_blue'>1</span> additional time at the same ratio.",
                "Guardian Angel heals an additional <span class='info_blue'>2</span> times with a 4 second delay between each heal, at half effectiveness.<br>Dark Cleric: Blasphemy deals damage <span class='info_blue'>2</span> additional times at the same ratio.",
                "Guardian Angel heals an additional <span class='info_blue'>3</span> times with a 4 second delay between each heal, at half effectiveness.<br>Dark Cleric: Blasphemy deals damage <span class='info_blue'>3</span> additional times at the same ratio.",
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
    ]
];
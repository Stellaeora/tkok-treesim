var chaotic_knight_skills = [
	column1 = [
		{
			"hidden": 0,
			"image": 490,
			"title": "Armor Break",
			"resource": "Hotkey: Q",
			"maxLevel": 1,
            "lvlReq": 0,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Melee / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Hero Level</span></p>",
			"texts": [
				"",
                "<p><span class='info_gray'>Teaches Armor Break: Lowers the target's armor for a short duration.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 408,
			"title": "Improved Armor Break",
			"resource": "",
			"maxLevel": 2,
            "lvlReq": 6,
			"locked": 1,
			"lockReq": "1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"Armor Break now also reduces the target's Magic Resist by <span class='info_blue'>4%</span>.",
				"Armor Break now also reduces the target's Magic Resist by <span class='info_blue'>8%</span>.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 400,
			"title": "Arcane Mastery",
			"resource": "",
			"maxLevel": 1,
            "lvlReq": 2,
			"locked": 0,
			"requirement": "",
			"info": "p",
			"texts": [
                "",
				"You cannot learn <span class='info_blue'>Chaotic Stance</span> upon learning this ability.<br>Apply the following effects:<br>- Default attack becomes ranged instead of melee.<br>- Block Chance is set to <span class='info_blue'>0%</span>.<br>- Mindblade, Cleanse, and Chaotic Grasp deal significantly more damage and their behavior is altered.<br>- Attack Crit Power and Spell Crit Power are increased.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 494,
			"title": "Chaotic Curse",
			"resource": "Hotkey: T",
			"maxLevel": 1,
            "lvlReq": 12,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Target</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Spell Power, Hero Level</span></p>",
			"texts": [
				"",
				"Teaches Chaotic Curse: Grants the target a buff that causes any attackers to suffer spell damage. Only triggers in response to physical attacks.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 410,
			"title": "Improved Chaotic Curse",
			"resource": "",
			"maxLevel": 3,
            "lvlReq": 26,
			"locked": 1,
			"lockReq": "0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"When Chaotic Curse activates, the attacking enemy will be stunned for 1.5s at a <span class='info_blue'>22%</span> rate.<br>If the enemy is immune to stunning, a powerful counterattack triggers instead, dealing increased damage. Counterattack effect can only occur once every 2 seconds.<br>Higher levels of this talent will increase the counterattack's damage.",
				"When Chaotic Curse activates, the attacking enemy will be stunned for 1.5s at a <span class='info_blue'>28%</span> rate.<br>If the enemy is immune to stunning, a powerful counterattack triggers instead, dealing increased damage. Counterattack effect can only occur once every 2 seconds.<br>Higher levels of this talent will increase the counterattack's damage.",
				"When Chaotic Curse activates, the attacking enemy will be stunned for 1.5s at a <span class='info_blue'>34%</span> rate.<br>If the enemy is immune to stunning, a powerful counterattack triggers instead, dealing increased damage. Counterattack effect can only occur once every 2 seconds.<br>Higher levels of this talent will increase the counterattack's damage.",
			]
		}
	],
	column2 = [
		{
			"hidden": 0,
			"image": 491,
			"title": "Mindblade",
			"resource": "Hotkey: W",
			"maxLevel": 1,
            "lvlReq": 0,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Melee / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical, Spell Power, Spell Critical</span></p>",
			"texts": [
				"",
				"Teaches Mindblade: Deals magic damage to a single target.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 412,
			"title": "Improved Mindblade",
			"resource": "",
			"maxLevel": 2,
            "lvlReq": 12,
			"locked": 1,
			"lockReq": "0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
                "Mindblade now deals <span class='info_blue'>30%</span> of its damage in a small AoE around the primary target.<br>Mindblade's damage is increased by <span class='info_blue'>15%</span> against targets under Armor Break.",
                "Mindblade now deals <span class='info_blue'>60%</span> of its damage in a small AoE around the primary target.<br>Mindblade's damage is increased by <span class='info_blue'>30%</span> against targets under Armor Break.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 493,
			"title": "Hasten / Inspire",
			"resource": "Hotkey: R",
			"maxLevel": 1,
            "lvlReq": 4,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Area Caster</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Hero Level</span></p>",
			"texts": [
				"",
				"Arcane Mastery: Teaches Inspire: A party buff that increases mana regeneration.<br>Chaotic Stance: Teaches Hasten: A party buff that increases movement speed.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 411,
			"title": "Improved Hasten / Inspire",
			"resource": "",
			"maxLevel": 1,
            "lvlReq": 24,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
                "",
				"Arcane Mastery: Inspire now adds bonus Energy based on hero level.<br>Chaotic Stance: Hasten now adds bonus Agility based on hero level.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 403,
			"title": "Chaotic Will",
			"resource": "",
			"maxLevel": 3,
            "lvlReq": 30,
			"locked": 1,
			"lockReq": "0-0-0-1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
                "",
				"When the counterattack effect from Improved Chaotic Curse triggers, you will be instantly healed for <span class='info_blue'>10%</span> of your Hybrid Power.",
				"When the counterattack effect from Improved Chaotic Curse triggers, you will be instantly healed for <span class='info_blue'>20%</span> of your Hybrid Power.",
				"When the counterattack effect from Improved Chaotic Curse triggers, you will be instantly healed for <span class='info_blue'>30%</span> of your Hybrid Power.",
			]
		}
	],
	column3 = [
		{
			"hidden": 0,
			"image": 492,
			"title": "Cleanse",
			"resource": "Hotkey: E",
			"maxLevel": 1,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical, Spell Power, Spell Critical</span></p>",
			"texts": [
				"",
				"Teaches Cleanse. Apply the following effect on cast:<br>Arcane Mastery: Deals magic damage to a single target.<br>Chaotic Stance: Heals the target ally and deals magic damage to all enemies near them.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 409,
			"title": "Improved Cleanse",
			"resource": "",
			"maxLevel": 3,
            "lvlReq": 18,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
                "Arcane Mastery: Cleanse can now be used on an ally, dispelling a random debuff and granting them a <span class='info_blue'>3s</span> buff that adds <span class='info_blue'>3%</span> Spell Crit Chance and <span class='info_blue'>33%</span> increased healing effectiveness.<br>Arcane Mastery: Cleanse, when used on an enemy, will instead inflict damage over time and dispel a random positive buff.<br>Chaotic Stance: All enemies hit by Cleanse will suffer a <span class='info_blue'>10s</span> debuff that reduces their Attack Speed by <span class='info_blue'>20%</span>.",
                "Arcane Mastery: Cleanse can now be used on an ally, dispelling a random debuff and granting them a <span class='info_blue'>3s</span> buff that adds <span class='info_blue'>6%</span> Spell Crit Chance and <span class='info_blue'>66%</span> increased healing effectiveness.<br>Arcane Mastery: Cleanse, when used on an enemy, will instead inflict damage over time and dispel a random positive buff.<br>Chaotic Stance: All enemies hit by Cleanse will suffer a <span class='info_blue'>10s</span> debuff that reduces their Attack Speed by <span class='info_blue'>25%</span>.",
                "Arcane Mastery: Cleanse can now be used on an ally, dispelling a random debuff and granting them a <span class='info_blue'>3s</span> buff that adds <span class='info_blue'>3%</span> Spell Crit Chance and <span class='info_blue'>100%</span> increased healing effectiveness.<br>Arcane Mastery: Cleanse, when used on an enemy, will instead inflict damage over time and dispel a random positive buff.<br>Chaotic Stance: All enemies hit by Cleanse will suffer a <span class='info_blue'>10s</span> debuff that reduces their Attack Speed by <span class='info_blue'>30%</span>.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 402,
			"title": "Chaotic Stance",
			"resource": "",
			"maxLevel": 1,
            "lvlReq": 2,
			"locked": 0,
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"You cannot learn <span class='info_blue'>Arcane Mastery</span> upon learning this ability.<br>Apply the following effects:<br>- Threat generation is significantly increased.<br>- All damage received is reduced by <span class='info_blue'>5%</span>.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 495,
			"title": "Chaotic Grasp / Orb",
			"resource": "Hotkey: Y",
			"maxLevel": 1,
            "lvlReq": 18,
			"locked": 0,
			"requirement": "",
			"info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous (Grasp) or Projectile (Orb)</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Spell Power, Attack Critical, Spell Critical</span></p>",
			"texts": [
				"",
				"Teaches Chaotic Grasp (Chaotic Stance) / Chaotic Orb (Arcane Mastery). Apply the following effect on cast:<br>Arcane Mastery: Shoots an orb of dark energy in the target direction that inflicts heavy damage and inflicts a powerful damage over time effect.<br>Chaotic Stance: Drags the target unit towards the Chaotic Knight and taunts them. Bosses cannot be dragged, but will still be taunted.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 413,
			"title": "Improved Chaotic Grasp / Orb",
			"resource": "",
			"maxLevel": 1,
            "lvlReq": 20,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"Arcane Mastery: Chaotic Orb will now release smaller bolts of lightning on impact, damaging enemies in <span class='info_blue'>350</span> AoE around the target.<br>Chaotic Stance: Chaotic Grasp now deals damage to the target. This damage is applied after the taunt effect.",
			]
		}
	],
	column4 = [
		{
			"hidden": 0,
			"image": 414,
			"title": "Power of the Chaotic",
			"resource": "",
			"maxLevel": 3,
            "lvlReq": 4,
			"locked": 0,
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"Increases your Attack Power <span class='info_blue'>5%</span> of your Power attribute and Spell Power by <span class='info_blue'>11%</span> of your Energy attribute.",
				"Increases your Attack Power <span class='info_blue'>10%</span> of your Power attribute and Spell Power by <span class='info_blue'>22%</span> of your Energy attribute.",
				"Increases your Attack Power <span class='info_blue'>15%</span> of your Power attribute and Spell Power by <span class='info_blue'>33%</span> of your Energy attribute.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 405,
			"title": "Empowered Mindblade",
			"resource": "",
			"maxLevel": 2,
            "lvlReq": 16,
			"locked": 1,
			"lockReq": "0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
                "",
				"Increases Mindblade's damage by <span class='info_blue'>10%</span>.<br>Increases Mindblade's damage bonus against Armor Break afflicted targets by a further <span class='info_blue'>10%</span>.",
				"Increases Mindblade's damage by <span class='info_blue'>20%</span>.<br>Increases Mindblade's damage bonus against Armor Break afflicted targets by a further <span class='info_blue'>20%</span>.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 405,
			"title": "Mental Lock",
			"resource": "",
			"maxLevel": 5,
            "lvlReq": 50,
			"locked": 1,
			"lockReq": "0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-2-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
                "",
				"Mindblade inflicts a debuff on the primary target that reduces the damage they deal for a short time.<br>When fully talented, this effect becomes AoE, and Mindblade's threat generation is increased.",
				"Mindblade inflicts a debuff on the primary target that reduces the damage they deal for a short time.<br>When fully talented, this effect becomes AoE, and Mindblade's threat generation is increased.",
				"Mindblade inflicts a debuff on the primary target that reduces the damage they deal for a short time.<br>When fully talented, this effect becomes AoE, and Mindblade's threat generation is increased.",
				"Mindblade inflicts a debuff on the primary target that reduces the damage they deal for a short time.<br>When fully talented, this effect becomes AoE, and Mindblade's threat generation is increased.",
				"Mindblade inflicts a debuff on the primary target that reduces the damage they deal for a short time.<br>When fully talented, this effect becomes AoE, and Mindblade's threat generation is increased.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 415,
			"title": "Shattered Armor",
			"resource": "",
			"maxLevel": 3,
            "lvlReq": 22,
			"locked": 1,
			"lockReq": "1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
                "Increase the effect of Armor Break (both armor and magic resist) by <span class='info_blue'>25%</span>.",
                "Increase the effect of Armor Break (both armor and magic resist) by <span class='info_blue'>50%</span>.",
                "Increase the effect of Armor Break (both armor and magic resist) by <span class='info_blue'>75%</span>.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 403,
			"title": "Empowered Chaotic Curse",
			"resource": "",
			"maxLevel": 3,
            "lvlReq": 30,
			"locked": 1,
			"lockReq": "0-0-0-1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
                "",
				"Enemies damaged by Chaotic Curse now suffer a debuff that reduces their movement speed by <span class='info_blue'>5%</span> and increases all damage taken by <span class='info_blue'>7%</span> for <span class='info_blue'>4s</span>",
				"Enemies damaged by Chaotic Curse now suffer a debuff that reduces their movement speed by <span class='info_blue'>10%</span> and increases all damage taken by <span class='info_blue'>10%</span> for <span class='info_blue'>4s</span>",
				"Enemies damaged by Chaotic Curse now suffer a debuff that reduces their movement speed by <span class='info_blue'>15%</span> and increases all damage taken by <span class='info_blue'>13%</span> for <span class='info_blue'>4s</span>",
			]
		}
	],
	column5 = [
		{
			"hidden": 0,
			"image": 414,
			"title": "Chaotic Insight",
			"resource": "",
			"maxLevel": 1,
            "lvlReq": 36,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
                "Chaotic Grasp has a chance to reduce the target's attack damage by 50% for a short duration. This duration increases with the hero's level.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 409,
			"title": "Spell Refraction",
			"resource": "",
			"maxLevel": 3,
            "lvlReq": 30,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"Cleanse, when used on an ally, grants them a 10s shield that reduces spell damage. Shield can absotb damage up to <span class='info_blue'>1</span> time and can absorb up to <span class='info_blue'>0.8</span> x Hybrid Power damage. This effect has a cooldown of 20 seconds.",
				"Cleanse, when used on an ally, grants them a 10s shield that reduces spell damage. Shield can absotb damage up to <span class='info_blue'>2</span> times and can absorb up to <span class='info_blue'>1.6</span> x Hybrid Power damage each time. This effect has a cooldown of 20 seconds.",
				"Cleanse, when used on an ally, grants them a 10s shield that reduces spell damage. Shield can absotb damage up to <span class='info_blue'>3</span> times and can absorb up to <span class='info_blue'>2.4</span> x Hybrid Power damage each time. This effect has a cooldown of 20 seconds.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 401,
			"title": "Chaotic Attacks",
			"resource": "",
			"maxLevel": 1,
            "lvlReq": 20,
			"locked": 1,
			"lockReq": "0-0-0-0-0-1-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"Mindblade has a <span class='info_blue'>50%</span> chance to stun the main target and a <span class='info_blue'>20%</span> chance to stun AoE targets for <span class='info_blue'>2s</span>. Enemies that cannot be stunned take <span class='info_blue'>20%</span> more damage instead.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 407,
			"title": "Mixed Element",
			"resource": "",
			"maxLevel": 3,
            "lvlReq": 40,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"Reduce all damage taken by 50%, to a limit of <span class='info_blue'>0.013</span> x max Life damage.<br>Armor Break is now an AoE effect.<br>Arcane Mastery: When autoattacking, automatically triggers Chaotic Orb with an independent <span class='info_blue'>16s</span> inner cooldown.",
				"Reduce all damage taken by 50%, to a limit of <span class='info_blue'>0.026</span> x max Life damage.<br>Armor Break is now an AoE effect.<br>Chaotic Curse adds Life instead of draining it.<br>Arcane Mastery: When autoattacking, automatically triggers Chaotic Orb with an independent <span class='info_blue'>13s</span> inner cooldown.",
				"Reduce all damage taken by 50%, to a limit of <span class='info_blue'>0.039</span> x max Life damage.<br>Armor Break is now an AoE effect.<br>Chaotic Curse adds Life instead of draining it.<br>Arcane Mastery: When autoattacking, automatically triggers Chaotic Orb with an independent <span class='info_blue'>10s</span> inner cooldown.<br>Chaotic Stance: Reduces the damage taken from blocked attacks by <span class='info_blue'>30%</span>.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 406,
			"title": "Hand of Chaos",
			"resource": "",
			"maxLevel": 5,
            "lvlReq": 50,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-2",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
                "Increase Chaotic Insight duration by <span class='info_blue'>0.6s</span>.<br>Arcane Mastery: Increase Chaotic Orb damage by <span class='info_blue'>9%</span>.<br>Chaotic Stance: Increase Chaotic Grasp damage by <span class='info_blue'>12%</span>.<br>Apply the following effects when fully talented:<br> - Arcane Mastery: Reduce the inner cooldown of the autoattack Chaotic Orb proc by <span class='info_blue'>3s</span>.<br> - Chaotic Stance: Chaotic Grasp now heals you for <span class='info_blue'>100%</span> of the damage dealt.",
                "Increase Chaotic Insight duration by <span class='info_blue'>1.2s</span>.<br>Arcane Mastery: Increase Chaotic Orb damage by <span class='info_blue'>18%</span>.<br>Chaotic Stance: Increase Chaotic Grasp damage by <span class='info_blue'>24%</span>.<br>Apply the following effects when fully talented:<br> - Arcane Mastery: Reduce the inner cooldown of the autoattack Chaotic Orb proc by <span class='info_blue'>3s</span>.<br> - Chaotic Stance: Chaotic Grasp now heals you for <span class='info_blue'>100%</span> of the damage dealt.",
                "Increase Chaotic Insight duration by <span class='info_blue'>1.8s</span>.<br>Arcane Mastery: Increase Chaotic Orb damage by <span class='info_blue'>27%</span>.<br>Chaotic Stance: Increase Chaotic Grasp damage by <span class='info_blue'>36%</span>.<br>Apply the following effects when fully talented:<br> - Arcane Mastery: Reduce the inner cooldown of the autoattack Chaotic Orb proc by <span class='info_blue'>3s</span>.<br> - Chaotic Stance: Chaotic Grasp now heals you for <span class='info_blue'>100%</span> of the damage dealt.",
                "Increase Chaotic Insight duration by <span class='info_blue'>2.4s</span>.<br>Arcane Mastery: Increase Chaotic Orb damage by <span class='info_blue'>36%</span>.<br>Chaotic Stance: Increase Chaotic Grasp damage by <span class='info_blue'>48%</span>.<br>Apply the following effects when fully talented:<br> - Arcane Mastery: Reduce the inner cooldown of the autoattack Chaotic Orb proc by <span class='info_blue'>3s</span>.<br> - Chaotic Stance: Chaotic Grasp now heals you for <span class='info_blue'>100%</span> of the damage dealt.",
                "Increase Chaotic Insight duration by <span class='info_blue'>3.0s</span>.<br>Arcane Mastery: Increase Chaotic Orb damage by <span class='info_blue'>45%</span>.<br>Chaotic Stance: Increase Chaotic Grasp damage by <span class='info_blue'>60%</span>.<br>Apply the following effects when fully talented:<br> - Arcane Mastery: Reduce the inner cooldown of the autoattack Chaotic Orb proc by <span class='info_blue'>3s</span>.<br> - Chaotic Stance: Chaotic Grasp now heals you for <span class='info_blue'>100%</span> of the damage dealt.",
			]
		}
	],
	column6 = [
		{
			"hidden": 0,
			"image": 407,
			"title": "Hybrid Theory",
			"resource": "",
			"maxLevel": 2,
            "lvlReq": 8,
			"locked": 0,
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"Hybrid Power is calculated as (Attack Power + Spell Power) x Constant Factor. This talent increases the Constant Factor from 55% to <span class='info_blue'>65%</span>.",
				"Hybrid Power is calculated as (Attack Power + Spell Power) x Constant Factor. This talent increases the Constant Factor from 55% to <span class='info_blue'>75%</span>.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 416,
			"title": "Shield Training",
			"resource": "",
			"maxLevel": 2,
            "lvlReq": 14,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"Increases your Block Chance by <span class='info_blue'>4%</span>.<br>The damage you take from blocked attacks is also reduced from 62% to <span class='info_blue'>56%</span>.",
				"Increases your Block Chance by <span class='info_blue'>8%</span>.<br>The damage you take from blocked attacks is also reduced from 62% to <span class='info_blue'>50%</span>.",
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
			"image": 404,
			"title": "Empowered Hasten / Inspire",
			"resource": "",
			"maxLevel": 1,
            "lvlReq": 24,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"Increases the effect of Hasten and Inspire by <span class='info_blue'>20%</span>. This applies to all bonuses.",
			]
		}
	],[
		{
			"hidden": 0,
			"image": 406,
			"title": "Empowered Chaotic Grasp / Orb",
			"resource": "",
			"maxLevel": 2,
            "lvlReq": 30,
			"locked": 1,
			"lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
			"requirement": "",
			"info": "p",
			"texts": [
				"",
				"Chaotic Grasp and Chaotic Orb deal <span class='info_blue'>250%</span> increased damage.",
				"Chaotic Grasp and Chaotic Orb deal <span class='info_blue'>500%</span> increased damage.",
			]
		}
	]
];
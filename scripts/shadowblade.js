var shadowblade_skills = [
    column1 = [
        {
            "hidden": 0,
            "image": 3020,
            "title": "Dark Blast",
            "resource": "Hotkey: Q",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical, Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>10</span> , Cooldown: <span class='info_gray'>2.5sec</span>",
            "texts": [
                "",
                "Teaches Dark Blast: A single target spell that deals magical damage.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3007,
            "title": "Improved Dark Blast",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 1,
            "locked": 1,
            "lockReq": "1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>20</span>",
            "texts": [
                "",
                "Dark Blast now increases the duration of a random debuff by <span class='info_blue'>25%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3004,
            "title": "Death's Edge",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "lockReq": "1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Dark Blast gives the target a debuff that deals damage every <span class='info_blue'>0.2</span> seconds for <span class='info_blue'>2</span> seconds. Each damage tick is <span class='info_blue'>2%</span> of the Dark Blast damage.<br>- <span class='info_blue'>Third point:</span> Regenerate <span class='info_blue'>1</span> Mana every damage tick. Does not stack.",
                "- Dark Blast gives the target a debuff that deals damage every <span class='info_blue'>0.2</span> seconds for <span class='info_blue'>2</span> seconds. Each damage tick is <span class='info_blue'>4%</span> of the Dark Blast damage.<br>- <span class='info_blue'>Third point:</span> Regenerate <span class='info_blue'>1</span> Mana every damage tick. Does not stack.",
                "- Dark Blast gives the target a debuff that deals damage every <span class='info_blue'>0.2</span> seconds for <span class='info_blue'>2</span> seconds. Each damage tick is <span class='info_blue'>6%</span> of the Dark Blast damage.<br>- <span class='info_blue'>Third point:</span> Regenerate <span class='info_blue'>1</span> Mana every damage tick. Does not stack.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3025,
            "title": "Unholy Embrace",
            "resource": "Hotkey: T",
            "maxLevel": 1,
            "lvlReq": 12,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Critical, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>40</span> , Cooldown: <span class='info_gray'>20sec</span>, Duration: <span class='info_gray'>5sec</span>",
            "texts": [
                "",
                "Teaches Unholy Embrace: Inclifts a curse on the target that stores all damage dealt to it. When the curse expires, the target takes a percent of all the damage stored.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3012,
            "title": "Improved Unholy Embrace",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 12,
            "locked": 1,
            "lockReq": "0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Unholy Embrace now heals all allies and damage all enemies around the target for a percent of the damage done, split among them.",
            ]
        }
    ],
    column2 = [
        {
            "hidden": 0,
            "image": 3023,
            "title": "Soul Drain",
            "resource": "Hotkey: W",
            "maxLevel": 1,
            "lvlReq": 0,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Attack Critical, Spell Power, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>10</span> , Cooldown: <span class='info_gray'>9sec</span> , Duration: <span class='info_gray'>6sec</span>",
            "texts": [
                "",
                "Teaches Soul Drain: A single target curse that causes damage over time.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3010,
            "title": "Improved Soul Drain",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 1,
            "locked": 1,
            "lockReq": "0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>15</span>",
            "texts": [
                "",
                "Soul Drain now transfers damage dealt to nearby allies as life.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3022,
            "title": "Shadow Form",
            "resource": "Hotkey: R",
            "maxLevel": 1,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Buff / Self</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> None</span></p><span class='info_blue'>Manacost: <span class='info_gray'>20</span> , Cooldown: <span class='info_gray'>45sec</span> , Duration: <span class='info_gray'>60sec</span>",
            "texts": [
                "",
                "Teaches Shadow Form: Transforms into a Demon, gaining bonus to Attack Power and Spell Power.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3009,
            "title": "Improved Shadow Form",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 4,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>30</span>",
            "texts": [
                "",
                "Shadow Form now bestows its Attack Power and Spell Power bonuses to nearby allies.",
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
            "image": 3021,
            "title": "Shadow Bind",
            "resource": "Hotkey: E",
            "maxLevel": 1,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Active</span></p><p><span class='info_gray'>Ranged / Target / Instantaneous</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Spell Power</span></p><span class='info_blue'>Manacost: <span class='info_gray'>10</span> , Cooldown: <span class='info_gray'>10sec</span> , Duration: <span class='info_gray'>12sec</span>",
            "texts": [
                "",
                "- Teaches Shadow Bind: Curses the target so that whenever they attack, you drain some of their attack speed.<br>- Casts 1 time Dark Blast on the target.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3008,
            "title": "Improved Shadow Bind",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 22,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>40</span>",
            "texts": [
                "",
                "- Shadow Bind now drains damage with each attack as well.<br>- Casts <span class='info_blue'>1</span> more times Dark Blast.",
                "- Shadow Bind now drains damage with each attack as well.<br>- Casts <span class='info_blue'>2</span> more times Dark Blast.",
                "- Shadow Bind now drains damage with each attack as well.<br>- Casts <span class='info_blue'>3</span> more times Dark Blast.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3000,
            "title": "Abyssal Might",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 1,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Shadowblade has <span class='info_blue'>10%</span> chance to resist certain debuffs.<br>- Also has <span class='info_blue'>13%</span> chance to regain mana cost after casting any skill.",
                "- Shadowblade has <span class='info_blue'>50%</span> chance to resist certain debuffs.<br>- Also has <span class='info_blue'>26%</span> chance to regain mana cost after casting any skill.",
                "- Shadowblade has <span class='info_blue'>90%</span> chance to resist certain debuffs.<br>- Also has <span class='info_blue'>39%</span> chance to regain mana cost after casting any skill.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3014,
            "title": "Time Strike",
            "resource": "Hotkey: Y",
            "maxLevel": 1,
            "lvlReq": 18,
            "locked": 0,
            "requirement": "",
            "info": "<p><span class='info_gray'>Toggleable</span></p><p><span class='info_gray'>Melee / Self / Enhancement</span></p><p><span class='info_gray'><span class='info_green'>Affected by:</span> Attack Power, Spell Power, Attack Critical, Spell Critical</span></p><span class='info_blue'>Manacost: <span class='info_gray'>10</span> , Cooldown: <span class='info_gray'>None</span>",
            "texts": [
                "",
                "Simultaneously strike several times against random enemies around the caster.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3011,
            "title": "Improved Time Strike",
            "resource": "",
            "maxLevel": 1,
            "lvlReq": 18,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Time Strike now leaves a stacking debuff on the target that increases damage taken from future timestrike hits.",
            ]
        }
    ],
    column4 = [
        {
            "hidden": 0,
            "image": 3002,
            "title": "Dark Arts",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Your spells use your AP and SP combined, multiplied by a percentage. Increase this percentage to <span class='info_blue'>65%</span>.",
                "Your spells use your AP and SP combined, multiplied by a percentage. Increase this percentage to <span class='info_blue'>75%</span>.",
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
            "image": 3013,
            "title": "Nether Touched",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 10,
            "locked": 1,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increases the effectiveness of healing on the Shadowblade by <span class='info_blue'>17%</span>.<br>- Increases Attack Speed by <span class='info_blue'>5%</span> + <span class='info_blue'>0.1%</span> per hero level.<br>- Increases Attack Damage by <span class='info_blue'>30%</span> of your hero level.",
                "- Increases the effectiveness of healing on the Shadowblade by <span class='info_blue'>34%</span>.<br>- Increases Attack Speed by <span class='info_blue'>10%</span> + <span class='info_blue'>0.2%</span> per hero level.<br>- Increases Attack Damage by <span class='info_blue'>60%</span> of your hero level.",
                "- Increases the effectiveness of healing on the Shadowblade by <span class='info_blue'>51%</span>.<br>- Increases Attack Speed by <span class='info_blue'>15%</span> + <span class='info_blue'>0.3%</span> per hero level.<br>- Increases Attack Damage by <span class='info_blue'>90%</span> of your hero level.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3005,
            "title": "Abyssal Draw",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increase Dark Blast damage by <span class='info_blue'>10%</span> and number of debuff ticks by <span class='info_blue'>1</span>.<br>- When fully talented, increases debuff duration and increase maximum damage dealt by <span class='info_blue'>Unholy Embrace</span>.",
                "- Increase Dark Blast damage by <span class='info_blue'>20%</span> and number of debuff ticks by <span class='info_blue'>2</span>.<br>- When fully talented, increases debuff duration and increase maximum damage dealt by <span class='info_blue'>Unholy Embrace</span>.",
                "- Increase Dark Blast damage by <span class='info_blue'>30%</span> and number of debuff ticks by <span class='info_blue'>3</span>.<br>- When fully talented, increases debuff duration and increase maximum damage dealt by <span class='info_blue'>Unholy Embrace</span>.",
                "- Increase Dark Blast damage by <span class='info_blue'>40%</span> and number of debuff ticks by <span class='info_blue'>4</span>.<br>- When fully talented, increases debuff duration and increase maximum damage dealt by <span class='info_blue'>Unholy Embrace</span>.",
                "- Increase Dark Blast damage by <span class='info_blue'>50%</span> and number of debuff ticks by <span class='info_blue'>5</span>.<br>- When fully talented, increases debuff duration and increase maximum damage dealt by <span class='info_blue'>Unholy Embrace</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3017,
            "title": "True Form",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 26,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Brings out Shadowblade's true demonic nature, increasing the effectiveness of Shadow Form.<br>- Adds additional Attack Power and Spell Power.<br>- The larger the Shadowblade's level is, the larger of a bonus is granted.",
                "- Brings out Shadowblade's true demonic nature, increasing the effectiveness of Shadow Form.<br>- Adds additional Attack Power and Spell Power.<br>- The larger the Shadowblade's level is, the larger of a bonus is granted.",
            ]
        }
    ],
    column5 = [
        {
            "hidden": 0,
            "image": 3016,
            "title": "Soul Entropy",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 26,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-1-3-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Dark Blast stuns the target <span class='info_blue'>1</span> seconds and deals <span class='info_blue'>4%</span> of the target's current HP if the target is not a boss.<br>- Against bosses increases Dark Blast damage by <span class='info_blue'>20%</span>.",
                "- Dark Blast stuns the target <span class='info_blue'>1.5</span> seconds and deals <span class='info_blue'>8%</span> of the target's current HP if the target is not a boss.<br>- Against bosses increases Dark Blast damage by <span class='info_blue'>40%</span>.",
                "- Dark Blast stuns the target <span class='info_blue'>2</span> seconds and deals <span class='info_blue'>12%</span> of the target's current HP if the target is not a boss.<br>- Against bosses increases Dark Blast damage by <span class='info_blue'>60%</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3003,
            "title": "Dark Tap",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 6,
            "locked": 1,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases attack and spell crit power by <span class='info_blue'>8.5%</span>  + <span class='info_blue'>0.085%</span> per level.",
                "Increases attack and spell crit power by <span class='info_blue'>17%</span>  + <span class='info_blue'>0.170%</span> per level.",
                "Increases attack and spell crit power by <span class='info_blue'>25.5%</span>  + <span class='info_blue'>0.255%</span> per level.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3018,
            "title": "Unholy Desire",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 12,
            "locked": 1,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increases the healing of Soul Drain and Unholy embrace by <span class='info_blue'>15%</span>.<br>- Increases mana draining of Soul Drain and Dark Blast by <span class='info_blue'>15%</span>",
                "- Increases the healing of Soul Drain and Unholy embrace by <span class='info_blue'>30%</span>.<br>- Increases mana draining of Soul Drain and Dark Blast by <span class='info_blue'>30%</span>",
                "- Increases the healing of Soul Drain and Unholy embrace by <span class='info_blue'>45%</span>.<br>- Increases mana draining of Soul Drain and Dark Blast by <span class='info_blue'>45%</span>",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3006,
            "title": "Empowered Time Strike",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 24,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>20</span>",
            "texts": [
                "",
                "Increases the amount of strikes by <span class='info_blue'>1</span>.",
                "Increases the amount of strikes by <span class='info_blue'>2</span>.",
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
            "image": 3019,
            "title": "Unholy Mastery",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 4,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases attack power by <span class='info_blue'>7%</span> of Agility and spell power by <span class='info_blue'>8%</span> of Energy. Increases Dark Blast radius by <span class='info_blue'>50</span>.",
                "Increases attack power by <span class='info_blue'>14%</span> of Agility and spell power by <span class='info_blue'>16%</span> of Energy. Increases Dark Blast radius by <span class='info_blue'>100</span>.",
                "Increases attack power by <span class='info_blue'>21%</span> of Agility and spell power by <span class='info_blue'>24%</span> of Energy. Increases Dark Blast radius by <span class='info_blue'>150</span>.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3001,
            "title": "Blade of Disaster",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 40,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-2-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases Time Strike hits by <span class='info_blue'>1</span>.<br> <span class='info_blue'>First point:</span> Shadow Form has double duration. Increases <span class='info_blue'>20%</span> magic resist while in demon form. Increases <span class='info_blue'>0.9%</span> per level attack speed.<br> <span class='info_blue'>Second point:</span> Soul Drain absorbs Mana.<br> <span class='info_blue'>Third point:</span> Time Strike can attack a single target up to <span class='info_blue'>4</span> times.",
                "Increases Time Strike hits by <span class='info_blue'>2</span>.<br> <span class='info_blue'>First point:</span> Shadow Form has double duration. Increases <span class='info_blue'>20%</span> magic resist while in demon form. Increases <span class='info_blue'>0.9%</span> per level attack speed.<br> <span class='info_blue'>Second point:</span> Soul Drain absorbs Mana.<br> <span class='info_blue'>Third point:</span> Time Strike can attack a single target up to <span class='info_blue'>4</span> times.",
                "Increases Time Strike hits by <span class='info_blue'>3</span>.<br> <span class='info_blue'>First point:</span> Shadow Form has double duration. Increases <span class='info_blue'>20%</span> magic resist while in demon form. Increases <span class='info_blue'>0.9%</span> per level attack speed.<br> <span class='info_blue'>Second point:</span> Soul Drain absorbs Mana.<br> <span class='info_blue'>Third point:</span> Time Strike can attack a single target up to <span class='info_blue'>4</span> times.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3005,
            "title": "Empowered Dark Blast",
            "resource": "",
            "maxLevel": 2,
            "lvlReq": 18,
            "locked": 1,
            "lockReq": "1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "<p><span class='info_blue'>Manacost: <span class='info_gray'>20</span>",
            "texts": [
                "",
                "Dark Blask deals <span class='info_blue'>12%</span> splash damage in a small AoE.",
                "Dark Blask deals <span class='info_blue'>24%</span> splash damage in a small AoE.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3017,
            "title": "Archdemon Form",
            "resource": "",
            "maxLevel": 5,
            "lvlReq": 50,
            "locked": 1,
            "lockReq": "0-0-0-0-0-0-0-1-1-0-0-0-0-0-0-0-0-0-0-2-0-0-0-0-0-0-0-0-0-0",
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "- Increase Demon Form effect by <span class='info_blue'>7%</span> and duration by <span class='info_blue'>1</span> seconds.<br>- When fully talented, dispels debuffs on cast.",
                "- Increase Demon Form effect by <span class='info_blue'>14%</span> and duration by <span class='info_blue'>2</span> seconds.<br>- When fully talented, dispels debuffs on cast.",
                "- Increase Demon Form effect by <span class='info_blue'>21%</span> and duration by <span class='info_blue'>3</span> seconds.<br>- When fully talented, dispels debuffs on cast.",
                "- Increase Demon Form effect by <span class='info_blue'>28%</span> and duration by <span class='info_blue'>4</span> seconds.<br>- When fully talented, dispels debuffs on cast.",
                "- Increase Demon Form effect by <span class='info_blue'>35%</span> and duration by <span class='info_blue'>5</span> seconds.<br>- When fully talented, dispels debuffs on cast.",
            ]
        }
    ],[
        {
            "hidden": 0,
            "image": 3015,
            "title": "Time Twisting",
            "resource": "",
            "maxLevel": 3,
            "lvlReq": 30,
            "locked": 0,
            "requirement": "",
            "info": "p",
            "texts": [
                "",
                "Increases the duration of all buffs cast by the Shadowblade by <span class='info_blue'>12%</span>",
                "Increases the duration of all buffs cast by the Shadowblade by <span class='info_blue'>24%</span>",
                "Increases the duration of all buffs cast by the Shadowblade by <span class='info_blue'>36%</span>",
            ]
        }
    ]
];
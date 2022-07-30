var hiddens = [];
var images = [];
var titles = [];
var elements = [];
var resources = [];
var levels = [];
var maxLevels = [];
var lockeds = [];
var lockReqs = [];
var levelReqs = [];
var requirements = [];
var infos = [];
var texts = [];
var Class_skills;
var class_name = "Arcanist";
var attributePoints = 50;
var charLevel = 30;
var fusionLevel = 1;
var achTier = 1;
var worldLevel = 1;
var sylph = false;
var champion = false;
var lockedsURL = [];
var levelsURL = [];
var npcList = {};

// changeJob - Change skills to another job
function changeJob(job, name){

	if( job == undefined ){ return; }

	Class_skills = job;

	$('#skills_right').empty();
	createBase();
	setMouseTriggers();
	resetSkills();
	
	let infoRequirement = document.getElementById("jobName");
	infoRequirement.innerHTML = "<p>" + name + "</p>";
    class_name = name;

    $("#heroNameValue").text(name + " (Level " + charLevel + ")");
}

// loadUrlPoints - Grabs the url info and set points into the skills
function loadUrlPoints(){

	let params = location.href.split('#')[1];
	
	if(params){
	
		// Get job
		let job = arcanist_skills;
        let jobid = 0;
		
		params = params.split('-');

        // skills first -- 30 digits
		for(let i=0; i < 30; i++)
        {
			levelsURL[i] = params[i];
			if( params[i] > 0 ){
				lockedsURL[i] = 0;
			}else{
				lockedsURL[i] = 1;
			}
		}
        
        // jobid next
        jobid = parseInt(params[30]);
        switch(jobid)
        {
            case 0:
                job = arcanist_skills;
                class_name = "Arcanist";
                break;
            case 1:
                job = phantom_stalker_skills;
                class_name = "Phantom Stalker";
                break;
            case 2:
                job = barbarian_skills;
                class_name = "Barbarian";
                break;
            case 3:
                job = chaotic_knight_skills;
                class_name = "Chaotic Knight";
                break;
            case 4:
                job = chronowarper_skills;
                class_name = "Chronowarper";
                break;
            case 5:
                job = cleric_skills;
                class_name = "Cleric";
                break;
            case 6:
                job = druid_skills;
                class_name = "Druid";
                break;
            case 7:
                job = earthquaker_skills;
                class_name = "Earthquaker";
                break;
            case 8:
                job = hydromancer_skills;
                class_name = "Hydromancer";
                break;
            case 9:
                job = aeromancer_skills;
                class_name = "Aeromancer";
                break;
            case 10:
                job = medicaster_skills;
                class_name = "Medicaster";
                break;
            case 11:
                job = paladin_skills;
                class_name = "Paladin";
                break;
            case 12:
                job = pyromancer_skills;
                class_name = "Pyromancer";
                break;
            case 13:
                job = ranger_skills;
                class_name = "Ranger";
                break;
            case 14:
                job = shadowblade_skills;
                class_name = "Shadowblade";
                break;
            case 15:
                job = shadow_shaman_skills;
                class_name = "Shadow Shaman";
                break;
            case 16:
                job = venomancer_skills;
                class_name = "Venomancer";
                break;
            case 17:
                job = warrior_skills;
                class_name = "Warrior";
                break;
            default:
                alert("Error -- invalid jobid " + jobid);
                break;
        }
        Class_skills = job;
        
        // other character data
        if (params.length >= 32) {
            charLevel = parseInt(params[31]);
        } else {
            charLevel = 30;
        }
        if (params.length >= 33) {
            if (parseInt(params[32]) == 1) {
                sylph = true;
            } else {
                sylph = false;
            }
        } else {
            sylph = false;
        }
        if (params.length >= 34) {
            worldLevel = parseInt(params[33]);
        } else {
            worldLevel = 1;
        }
        if (params.length >= 35) {
            fusionLevel = parseInt(params[34]);
        } else {
            fusionLevel = 1;
        }
        if (params.length >= 36) {
            achTier = parseInt(params[35]);
        } else {
            achTier = 1;
        }
        if (params.length >= 37) {
            if (parseInt(params[36]) == 1) {
                champion = true;
            } else {
                champion = false;
            }
        } else {
            champion = false;
        }
		
		showSkills();
		
		let infoRequirement = document.getElementById("jobName");
		infoRequirement.innerHTML = "<p>" + class_name + "</p>";
        $("#heroNameValue").text(class_name + " (Level " + charLevel + ")");
	}

    updateBoxStates();
}

// createColumn - Create a column with skills
function createColumn(start, stop){

	let storeInfo = "";
	
	storeInfo = storeInfo + '<div class="col-2">';
	
	for(let i=start; i < stop; i++){
		storeInfo = storeInfo + '<div class="skill_box">' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="skill skill_' + i + '"></div>' +
			'<div class="skillImage"></div>' +
			'<div class="point_box">' +
			'<div class="bar">' +
			'<span class="skill_text skill_text_' + i + '"></span></div>' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="minus dec_' + i + ' skill_btn"></div>' +
			'<div data-hidden="' + hiddens[i] + '" data-title="' + titles[i] + '" class="plus inc_' + i + ' skill_btn"></div>' +
			'</div></div>';
	}
	
	// Add columns to the right side of the skill window
	let rightMenu = document.getElementById("skills_right");
	rightMenu.innerHTML = rightMenu.innerHTML + storeInfo + '</div>';
	
	let skillBoxes = document.getElementsByClassName("skill_box");
	let skillIcons = document.getElementsByClassName("skillImage");
	let skillTexts = document.getElementsByClassName("skill_text");
	
	for(let i=start; i < stop; i++){
	
		// Check if skill is not hidden
		if( hiddens[i] == 0 ){
			
			// Set skill icon
			skillIcons[i].style.backgroundImage = "url('./images/skills/" + images[i] + ".png')";
			
			// Check if the skill text is available and set level/maxlevel text
			if( skillTexts[i] != undefined ){
				skillTexts[i].innerHTML = levels[i] + "/" + maxLevels[i];
			}
			
		}else{
			
			// If skill is hidden, check if it exists and set it's opacity to 0
			if( skillBoxes[i] != undefined ){
				skillBoxes[i].style.opacity = 0;
			}
			
		}
	
	}

}

// storeData - stores the classes .js info into arrays
function storeData(){

	// Clean arrays
	hiddens = [];
	images = [];
	titles = [];
	elements = [];
	resources = [];
	maxLevels = [];
    levelReqs = [];
	lockReqs = [];
	requirements = [];
	infos = [];
	texts = [];
	levels = [];
	lockeds = [];
	
	// Class_skills are the .js stuff
	let skills = Class_skills;
	
	// Amount of skills (includes hidden) 5 skills per column, 6 columns.
	let skillAmount = 30;
	
	// Loop that pushes the .js info into the arrays
	for(let j=0; j < skillAmount; j++){
		for(let i=0; i < skills.length; i++){
			if(skills[j] && skills[j][i]){
				hiddens.push(skills[j][i].hidden);
				images.push(skills[j][i].image);
				titles.push(skills[j][i].title);
				resources.push(skills[j][i].resource);
				//levels.push(skills[j][i].level);
				levels.push(0);
				elements.push(skills[j][i].element);
				lockeds.push(skills[j][i].locked);
				lockReqs.push(skills[j][i].lockReq);
				maxLevels.push(skills[j][i].maxLevel);
                levelReqs.push(skills[j][i].lvlReq);
				requirements.push(skills[j][i].requirement);
                if (skills[j][i].info != undefined && skills[j][i].info == "p") { //shortcut
                    infos.push("<p><span class='info_gray'>Passive</span></p>");
                } else {
                    infos.push(skills[j][i].info);
                }
				texts.push(skills[j][i].texts);
			}
		}
	}
	
	// Check for default unlocked abilities.
	for(let l=0; l < lockeds.length; l++){
		if( lockeds[l] == 0 ){
			lockedsURL[l] = 0;
		}
	}
	
	// If URL have info, Use it instead
	if( levelsURL.length > 0 && lockedsURL.length > 0 ){
		levels = levelsURL;
		lockeds = lockedsURL;
		levelsURL = [];
		lockedsURL = [];
	}

}

/**
 * Sets the skill info for the hover-tooltip
 * @param {Event} event
 * @param {string} type - The class of the element. Can be: skill, plus, minus, min, max
 */
function setSkillInfo(event, type){

		// Check if skill info exists
		function isUndefined(info){
		
			if( info == undefined ){ return "Skill information is missing!"; }
			
			return info;
		
		}

		// Check if skill is hidden
		let isHidden = event.target.dataset.hidden;
		if( isHidden == 1 ){ return; }
		
		let box = document.getElementById('info_box');
		
		// Make the tooltip visible
		box.style.display = "block";
	
		// Get tooltip offsetHeight
		let infoContent = document.getElementById("info_content");
		let offset = infoContent.offsetHeight;

		// Get window dimensions
		let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		let windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	
		// Move the tooltip above the cursor to prevent text from going outside the screen
		if( event.pageY > windowHeight / 2 ){
		
			if( offset > 0 ){
				box.style.left = event.pageX + 25 + 'px';
				box.style.top = event.pageY - offset - 25 + 'px';
			}
			
			if( box.style.top.replace("px", "") <= 0 ){
				box.style.top = "0px";
			}
			
		}else{
			
			if( (windowHeight / 2) + offset + 25 >= windowHeight){
				box.style.top = (windowHeight - offset - 50) + "px";
			}else{
				box.style.top = event.pageY + 'px';
			}
			
			box.style.left = event.pageX + 25 + 'px';
			
		}
		
		if( event.pageX > windowWidth / 2 ){
			box.style.left = event.pageX - 362 - 15 + 'px';
			if( event.pageY > windowHeight / 2 ){
			
				if( offset > 0){
					box.style.top = event.pageY - offset - 25 + 'px';
				}
				
				if( box.style.top.replace("px", "") <= 0 ){
					box.style.top = "0px";
				}
			
			}else{
			
				if( (windowHeight / 2) + offset + 25 >= windowHeight){
					box.style.top = (windowHeight - offset - 50) + "px";
				}else{
					box.style.top = event.pageY + 'px';
				}

			}
		}
		
		let infoTitle = event.target.dataset.title;
		$("#info_name > p").text(infoTitle);
		
		// Loop titles and compare it with data-title. When matched, add the information into the info_box.
		for(let i=0; i < titles.length; i++){
		
			if( titles[i] == infoTitle ){
			
				// Hide tooltip for minus button if skill is at 0
				if( levels[i] <= 0 && type == "minus" ){
					box.style.display = "none";
					return;
				}
				
				// Hide tooltip for plus button if skill is at max
				if( levels[i] == maxLevels[i] && type == "plus" ){
					box.style.display = "none";
					return;
				}
				
                /*
				// Prevent skill(12, 18) from showing tooltip on plus/minus.
				if( (i == 12 || i == 18) && type != "skill" ){
					box.style.display = "none";
					return;
				}
				
				// Prevent skill(0, 1) from showing tooltip on minus.
				if( (i == 0 || i == 1) && levels[i] <= 1 && type == "minus" ){
					box.style.display = "none";
					return;
				}
                */
                
                // Prevent level 0 from showing tooltip on minus.
				if(levels[i] <= 1 && type == "minus" ){
					box.style.display = "none";
					return;
				}
				
				// Set element text
				$("#info_name").removeClass();
				if( elements[i] ){
					$("#info_name").addClass("element_" + elements[i].toLowerCase());
					$("#info_element > p").text(elements[i]);
				}else{
					$("#info_element > p").text("");
				}
				
				let infoDescription = document.getElementById("info_description_3");
				
				// Get/Set Resources text
				let isArray = Array.isArray(resources[i]);
				
				function getResources(changes){
					
					let newLevel = parseInt(levels[i]) + changes;
					
					if( isArray ){
						$(".info_resource").text(resources[i][newLevel]);
					}else{
						$(".info_resource").text(resources[i]);
					}

				}
			
				if( type == "skill" ){
					if( levels[i] == 0 ){
						let newLevel = parseInt(levels[i]) + 1;
						$(".info_level").text("Level " + newLevel );
						infoDescription.innerHTML = wrapSkillText(isUndefined(texts[i][newLevel]));
						getResources(1);
					}else{
						$(".info_level").text("Level " + parseInt( levels[i]) );
						infoDescription.innerHTML = wrapSkillText(isUndefined(texts[i][levels[i]]));
						getResources(0);
					}
				}else if( type == "plus" ){
					let newLevel = parseInt(levels[i]) + 1;
					$(".info_level").text("Level " + newLevel);
					infoDescription.innerHTML = wrapSkillText(isUndefined(texts[i][newLevel]));
					getResources(1);
				}else if( type == "minus" ){
					let newLevel = parseInt(levels[i]) - 1;
					$(".info_level").text("Level " + newLevel );
					infoDescription.innerHTML = wrapSkillText(isUndefined(texts[i][newLevel]));
					getResources(-1);
				}else if( type == "min" ){
					let newLevel = 1;
					$(".info_level").text("Level " + newLevel);
					infoDescription.innerHTML = wrapSkillText(isUndefined(texts[i][newLevel]));
					getResources(1 - parseInt(levels[i]));
				}else if( type == "max" ){
					let newLevel = parseInt(maxLevels[i]);
					$(".info_level").text("Level " + newLevel);
					infoDescription.innerHTML = wrapSkillText(isUndefined(texts[i][newLevel]));
					getResources(parseInt(maxLevels[i]) - parseInt(levels[i]));
				}
			
				// Set tooltip image
				let infoImage = document.getElementById("info_image");
				infoImage.style.backgroundImage = "url('./images/skills/" + images[i] + ".png')";
				
				// Set tooltip requirement text
                let lvlReq = "";
                let skillReq = "";
                
                if (levelReqs[i] > 1) {
                    lvlReq = "<p><span class='info_orange'>Required Level: " + levelReqs[i] + "</span></p>"
                }
                if (lockReqs[i] != undefined) {
                    let trueReqs = getDisplayedReqs(i);
                    
                    for (let j=0; j < trueReqs.length; j++) {
                        if (trueReqs[j] > 0) {
                            skillReq += "<p><span class='info_red'>Requires: " + titles[j] + "</span></p>";
                        }
                    }
                }
                
				let infoRequirement = document.getElementById("info_description");
				infoRequirement.innerHTML = lvlReq + skillReq + requirements[i];
			
				// Set tooltip's first info text
				let infoDescription2 = document.getElementById("info_description_2");
				infoDescription2.innerHTML = infos[i];
				
				break;
			
			}
		
		}

}

function wrapSkillText(text) {
    return "<p><span class='info_gray'>" + text + "</span></p>";
}

function getDisplayedReqs(skillId) {
    let combinedReqs = Array();
    let displayedReqs = Array();
    if (lockReqs[skillId] != undefined) {
        let split = lockReqs[skillId].split('-');
        for (let j = 0; j < split.length; j++) {
            if (parseInt(split[j]) > 0) {
                let nestedReq = lockReqs[j];
                if (nestedReq != undefined) {
                    combinedReqs.push(nestedReq);
                }
            }
        }
        for (let j = 0; j < split.length; j++) {
            let topLevelReq = true;
            for (let k = 0; k < combinedReqs.length; k++) {
                if (parseInt(combinedReqs[k].split('-')[j]) > 0) {
                    topLevelReq = false;
                    break;
                }
            }
            if (topLevelReq) {
                displayedReqs.push(parseInt(split[j]));
            } else {
                displayedReqs.push(0);
            }
        }
    }
    return displayedReqs;
}

// setSkillLock - Lock/Unlock skills that doesn't have the needed points and/or the needed level
function setSkillLock(){

	let skillIcons = document.getElementsByClassName("skillImage");

	
	for(let i=0; i < lockeds.length; i++){
        let hasReq = true;
	
		if (lockReqs[i] != undefined) {
			let split = lockReqs[i].split('-');
			for (let j=0; j < split.length; j++) {
				if(parseInt(split[j]) <= parseInt(levels[j])) {
					// Correct
				} else {
					hasReq = false;
					break;
				}
			}
		}
        if (charLevel < levelReqs[i]) {
            hasReq = false;
        }
        
        if (hasReq) {
            lockeds[i] = 0;
            //skillIcons[i].style.filter = "brightness(100%)";
            $(skillIcons[i].parentElement).removeClass("locked");
        } else {
            lockeds[i] = 1;
            //skillIcons[i].style.filter = "brightness(20%)";
            $(skillIcons[i].parentElement).addClass("locked");
            
            // Skills that doesn't fill it's skill requirements have their points removed.
            if( levels[i] > 0 ){
                levels[i] = 0;
                let skillTexts = document.getElementsByClassName("skill_text");
                skillTexts[i].innerHTML = levels[i] + "/" + maxLevels[i];
                updateSkillPoints();
            }
        }
	}

	// Setting this part in a Timeout because it sometimes load faster than the plus/minus class content. Temp fix?
	// Sets the class/images on the skill plus and minus buttons
	setTimeout(function(){
	
		let skillBtns = Array.from(document.getElementsByClassName("skill_btn"));
		let skillPlus = skillBtns.filter(skillBtn => 
			skillBtn.classList.contains('plus') || skillBtn.classList.contains('min')
		);
		let skillMinus = skillBtns.filter(skillBtn => 
			skillBtn.classList.contains('max') || skillBtn.classList.contains('minus')
		);
	
		for(let i=0; i < Class_skills.length; i++){

			if( parseInt(levels[i]) == 0 ){
				skillMinus[i].classList.replace("minus", "max"); // remove minus, add max
			} else {
				skillMinus[i].classList.replace("max", "minus");
			}

			if( parseInt(levels[i]) == maxLevels[i] ){
				skillPlus[i].classList.replace("plus", "min");
				if (skillMinus[i].classList.contains("max")) {
					skillMinus[i].classList.add("max_locked");
				}
			}else{
				skillPlus[i].classList.replace("min", "plus");
				skillMinus[i].classList.remove("max_locked");
			}

			// If out of skill points, show the lock icon
			if ( getSkillpoints() == 0 ) {
				if ( skillPlus[i].classList.contains("plus") ) {
					skillPlus[i].classList.add("plus_locked");
				}
				if ( skillMinus[i].classList.contains("max")) {
					skillMinus[i].classList.add("max_locked");
				}
			} else {
				skillPlus[i].classList.remove("plus_locked");
				skillMinus[i].classList.remove("max_locked");
			}
		}
	
	}, 100);

}

// setUrl - Sets the skillpoints into the url so that it can be linked
function setUrl(){

	// make url include skill numbers
	let str = "#";
	
	// Set Job id
	let job = 0;
	if( Class_skills == arcanist_skills ){ job = 0; }
	if( Class_skills == phantom_stalker_skills ){ job = 1; }
	if( Class_skills == barbarian_skills ){ job = 2; }
	if( Class_skills == chaotic_knight_skills ){ job = 3; }
	if( Class_skills == chronowarper_skills ){ job = 4; }
	if( Class_skills == cleric_skills ){ job = 5; }
	if( Class_skills == druid_skills ){ job = 6; }
	if( Class_skills == earthquaker_skills ){ job = 7; }
	if( Class_skills == hydromancer_skills ){ job = 8; }
	if( Class_skills == aeromancer_skills ){ job = 9; }
	if( Class_skills == medicaster_skills ){ job = 10; }
	if( Class_skills == paladin_skills ){ job = 11; }
	if( Class_skills == pyromancer_skills ){ job = 12; }
	if( Class_skills == ranger_skills ){ job = 13; }
	if( Class_skills == shadowblade_skills ){ job = 14; }
	if( Class_skills == shadow_shaman_skills ){ job = 15; }
	if( Class_skills == venomancer_skills ){ job = 16; }
	if( Class_skills == warrior_skills ){ job = 17; }
	
	for(let i=0; i < levels.length; i++){
		if( i == levels.length - 1 ){
			str = str + levels[i];
		}else{
			str = str + levels[i] + "-";
		}
	}
	
    str += "-" + job;
    str += "-" + charLevel;
    if (sylph) {
        str += "-1";
    } else {
        str += "-0";
    }
    
    str += "-" + worldLevel;
    str += "-" + fusionLevel;
    str += "-" + achTier;
    
    if (champion) {
        str += "-1";
    } else {
        str += "-0";
    }

    console.log(location.href.split('#')[0] + str);
	location.href = location.href.split('#')[0] + str;

}

// resetSkills - Reset all the skillpoints
function resetSkills(){

	for (let i=0; i < levels.length; i++){
        levels[i] = 0;
		
		let skillTexts = document.getElementsByClassName("skill_text");
		if( skillTexts[i] != undefined ){
			skillTexts[i].innerHTML = levels[i] + "/" + maxLevels[i];
		}
		updateSkillPoints();
		
	}

	setSkillLock();
	setUrl();

}

// getSkillpoints - Get remaining skillpoints
function getSkillpoints(){

        let pointsMax = Math.floor(charLevel / 2) + 1;
		let pointsUsed = 0;
        
        if (sylph) {
            pointsMax += 1;
        }
        
        if (worldLevel >= 2) {
            pointsMax += worldLevel - 1;
        }
        
        if (fusionLevel >= 7) {
            pointsMax += 1;
        }
        if (fusionLevel >= 9) {
            pointsMax += 3;
        }
        
        if (achTier >= 5) {
            pointsMax += 1;
        }
        if (achTier >= 8) {
            pointsMax += 1;
        }
        if (achTier >= 9) {
            pointsMax += 2;
        }
        if (achTier >= 13) {
            pointsMax += 2;
        }
        
        if (champion) {
            pointsMax += 1;
        }
		
		// Collect all the skill levels
		for(let i=0; i < levels.length; i++){
			pointsUsed += parseInt(levels[i]);
		}
		
		return (pointsMax - pointsUsed);

}

function changeLevel(level){
    charLevel = level;
    if (charLevel >= 45 && !sylph) { //must have completed sylph to reach 45+
        document.getElementById("sylphCheckbox").checked = true;
        toggleSylph();
    } else if (charLevel < 44 && sylph) { //can't do sylph before 44
        document.getElementById("sylphCheckbox").checked = false;
        toggleSylph();
    }
    setSkillLock();
    updateSkillPoints();
}

function changeWL(wl){
    worldLevel = wl;
    updateSkillPoints();
}

function changeFusion(fusion){
    if (fusion == 7) {
        if (document.getElementById("fusion7Checkbox").checked == false) {
            if (document.getElementById("fusion9Checkbox").checked) {
                document.getElementById("fusion9Checkbox").checked = false;
            }
            fusionLevel = 1;
        } else {
            fusionLevel = fusion;
        }
    } else if (fusion == 9) {
        if (document.getElementById("fusion9Checkbox").checked == false) {
            if (document.getElementById("fusion7Checkbox").checked) {
                fusionLevel = 7;
            } else {
                fusionLevel = 1;
            }
        } else {
            if (document.getElementById("fusion7Checkbox").checked == false) {
                document.getElementById("fusion7Checkbox").checked = true;
            }
            fusionLevel = fusion;
        }
    }
    updateSkillPoints();
}

function changeAchTier(tier){
    let elements = new Map();
    let trueTier = 4;
    
    elements.set(1, document.getElementById("ach5Checkbox"));
    elements.set(2, document.getElementById("ach8Checkbox"));
    elements.set(3, document.getElementById("ach9Checkbox"));
    elements.set(4, document.getElementById("ach13Checkbox"));
    
    if (elements.get(tier).checked) {
        for (var i = tier - 1; i >= 1; i--) {
            if (elements.get(i).checked == false) {
                elements.get(i).checked = true;
            }
        }
    } else {
        for (var i = tier; i <= 4; i++) {
            if (elements.get(i).checked) {
                elements.get(i).checked = false;
            }
        }
    }
    
    for (var i = 1; i <= 4; i++) {
        if (elements.get(i).checked == false) {
            trueTier = i - 1;
            break;
        }
    }
    
    switch(trueTier) {
        case 0:
            achTier = 1;
            break;
        case 1:
            achTier = 5;
            break;
        case 2:
            achTier = 8;
            break;
        case 3:
            achTier = 9;
            break;
        case 4:
            achTier = 13;
            break;
    }
    
    updateSkillPoints();
}

function toggleSylph() {
    sylph = document.getElementById("sylphCheckbox").checked;
    updateSkillPoints();
}

function toggleChampion() {
    champion = document.getElementById("championCheckbox").checked;
    updateSkillPoints();
}

/**
 * Increase or decrease a skillpoint from a skill
 * @param {Event} event - Used to get the skill name of the click target
 * @param {number} value - 1 or -1 to increase or decrease a skill point
 */
function changeSkillPoints(event, value){

	let infoTitle = event.target.dataset.title;
	let skillTexts = document.getElementsByClassName("skill_text");

	for(let i=0; i < titles.length; i++){
	
		if( titles[i] == infoTitle ){
			
			// Check if points should increase or decrease
			if( value == 1 ){
			
				// Increase points
				if( levels[i] < maxLevels[i] && getSkillpoints() > 0 && charLevel >= levelReqs[i]){
				
					// If a locked skill is increased, add pre-required skills
					if( lockeds[i] == 1 ){ 
						levelUpAllPrereqSkills(i);
					}
				
					levels[i] = parseInt(levels[i]) + 1;
					skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];
				
				}else if( levels[i] == maxLevels[i] ){
					
					// if you click on the {+} button at max skill level, set your starter skills to lv1
                    levels[i] = 0;
                    /*
					if ( i == 0 || i == 1) {
						levels[i] = 1;
					} else {
						levels[i] = 0;
					}
                    */
					skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];

				}
			
			}else{
			
				// Set skill level to max if you click on the {-} button at the minimum skill level
				// and prevent skill(0, 1) from being decreased lower than rank 1
				if( levels[i] == 0 /*|| (levels[i] == 1 && i <= 1)*/){

					if( lockeds[i] == 1 ){ 
						levelUpAllPrereqSkills(i);
					}

					if( getSkillpoints() >= maxLevels[i] ) {
						levels[i] = maxLevels[i];
					}else{
						levels[i] = getSkillpoints();
					}

					skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];

				}else if( levels[i] > 0 ){
					// Decrease points
					levels[i] = parseInt(levels[i]) - 1;
					skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];

				}
			
			}
			
		}
		
	}
	
	updateSkillPoints();
	
	let type = event.target.classList[0];
	
	setSkillInfo(event, type);
	setSkillLock();

}

// updateSkillPoints - Set/Change the points used text to show how many points that the user have spent.
function updateSkillPoints(){

	// Set text with current and max points
	$("#skill_points > #skillPointNumber").text( getSkillpoints() );

    updateCharInfo();
}

// updateCharInfo - Updates the right-side character info panel
function updateCharInfo(){
    setUrl();
    $("#heroNameValue").text(class_name + " (Level " + charLevel + ")");
    $("#heroWLValue").text(worldLevel);
    $("#heroFusionValue").text(fusionLevel);
    $("#heroAchValue").text(achTier);
    if (sylph) {
        $("#heroSylphValue").text("Yes");
    } else {
        $("#heroSylphValue").text("No");
    }
}

function updateBoxStates() {
    document.getElementById("sylphCheckbox").checked = sylph;
    document.getElementById("fusion7Checkbox").checked = fusionLevel >= 7;
    document.getElementById("fusion9Checkbox").checked = fusionLevel >= 9;
    document.getElementById("ach5Checkbox").checked = achTier >= 5;
    document.getElementById("ach8Checkbox").checked = achTier >= 8;
    document.getElementById("ach9Checkbox").checked = achTier >= 9;
    document.getElementById("ach13Checkbox").checked = achTier >= 13;
    document.getElementById("championCheckbox").checked = champion;
}

/**
 * Sets the level of your pre-req skills to the levels defined in lockReqs[].
 * @param {number} index The index of the skill to check the pre-reqs of.
 */
function levelUpAllPrereqSkills(index) {
	let skillTexts = document.getElementsByClassName("skill_text");
	let prereqArray = lockReqs[index].split('-');
	
	for (let i = 0; i < levels.length; i++) {
		if (levels[i] < prereqArray[i] && getSkillpoints() >= parseInt(prereqArray[i])) {
			levels[i] = parseInt(prereqArray[i]);
			skillTexts[i].innerHTML = (levels[i]) + "/" + maxLevels[i];
		}
	}
}

function setJobLines(){

	// Get job names
	let name = "arcanist";
	if( Class_skills == arcanist_skills ){ name = "arcanist"; }
	if( Class_skills == phantom_stalker_skills ){ name = "phantom_stalker"; }
	if( Class_skills == barbarian_skills ){ name = "barbarian"; }
	if( Class_skills == chaotic_knight_skills ){ name = "chaotic_knight"; }
	if( Class_skills == chronowarper_skills ){ name = "chronowarper"; }
	if( Class_skills == cleric_skills ){ name = "cleric"; }
	if( Class_skills == druid_skills ){ name = "druid"; }
	if( Class_skills == earthquaker_skills ){ name = "earthquaker"; }
	if( Class_skills == hydromancer_skills ){ name = "hydromancer"; }
	if( Class_skills == aeromancer_skills ){ name = "aeromancer"; }
	if( Class_skills == medicaster_skills ){ name = "medicaster"; }
	if( Class_skills == paladin_skills ){ name = "paladin"; }
	if( Class_skills == pyromancer_skills ){ name = "pyromancer"; }
	if( Class_skills == ranger_skills ){ name = "ranger"; }
	if( Class_skills == shadowblade_skills ){ name = "shadowblade"; }
	if( Class_skills == shadow_shaman_skills ){ name = "shadow_shaman"; }
	if( Class_skills == venomancer_skills ){ name = "venomancer"; }
	if( Class_skills == warrior_skills ){ name = "warrior"; }
    
    // Set job window background
	$("#window").css("background-image", "url(./images/classes/" + name + "_bg.png)");
    document.getElementById("panel_hero_icon").src = "./images/classes/" + name + "_icon.png";

}

function createBase(){
	
	// Store all the classes .js data inside arrays
	storeData();
	
	// Set job lines
	setJobLines();
	
	// Create 6 columns for the skills
	createColumn(0,5);
	createColumn(5,10);
	createColumn(10,15);
	createColumn(15,20);
	createColumn(20,25);
	createColumn(25,30);
	
	// Set points used
	updateSkillPoints();
	
	// Set lock on skills that aren't unlocked yet
	setSkillLock();

}

function resetStats(){

	attributePoints = 50;
	
	let stats = document.getElementsByClassName("statsButton");

	for(let i=0; i < stats.length; i++){
		stats[i].innerHTML = "<p>" + stats[i].dataset.base + "</p>";
		stats[i].classList.remove("bonus");
	}
	
	// Set new points
	let points = document.getElementById("attributePoints");
	points.innerHTML = "<p>" + attributePoints + "</p>";

}

function setMouseTriggers(){

	$(".skill, .plus, .minus, .max, .min").mousemove(function(event){
	
		let type = event.target.classList[0];
		setSkillInfo(event, type);

	});
	
	// Mouseleave for .skill, .plus and .minus
	$(".skill, .plus, .minus, .max, .min").mouseleave(function(event){

		let box = document.getElementById('info_box');
		box.style.display = "none";
		
	});
	
	// Mousedown for .plus
	$(".plus").mousedown(function(event){
	
		// Add point to skill
		changeSkillPoints(event, 1);
		
	});
	
	// Mousedown for .minus
	$(".minus").mousedown(function(event){
	
		// Remove point from skill
		changeSkillPoints(event, -1);
		
	});

}

function showSkills(){
	$("#window").show();
	$("#window").css("z-index", 20);
}

function populateDropdowns(){
    for (var i = 1; i <= 54; i++) {
        document.getElementById("levelDropdownContent").innerHTML += "<a class=\"dropdown-item\" onclick=\"changeLevel(" + i + ")\">" + i + "</a>"
    }
    for (var i = 1; i <= 9; i++) {
        document.getElementById("wlDropdownContent").innerHTML += "<a class=\"dropdown-item\" onclick=\"changeWL(" + i + ")\">" + i + "</a>"
    }
}

$( window ).on( "load", function(){

	if( location.href.search("TreeSimulator.html") == -1 ){ return; }

	// Set Default
	Class_skills = arcanist_skills;
	
	// Load url points
	loadUrlPoints();

	// Make window draggable
	//$("#window").draggable({ handle: "#drag_bar", containment: [0, 100, 1060, 1920] });
	
	// Collect data, load url points, create columns, set points and skill locks.
	createBase();

	// Set Mouse triggers (mousemove, mouseleave, mousedown)
	setMouseTriggers();
    
    // Populate the level/WL select dropdowns
    populateDropdowns();
	
});

$( window ).on( "load", function(){

	// Loader
	$(".new_loader").css("opacity", 0);
});

// if phone or pad
if( screen.width <= 768 ){
	window.location.replace("./mobile.html");
}
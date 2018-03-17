/* remove this comment and place your JavaScript here */ 
/*
When did you start studying for exams?
a. 1 month in advance of course(1pt)
b. I start organzing 2 weeks in advance and study the week before(2pt)
c. I'll probably pull an all nighter before each one(3pt)
d. WHAT EXAMS(4pt)

What do you see yourself doing the night before the exam?
a. just reviewing everything I've been studying (1pt)
b. Color coding a schedule for after exams(2pt)
c. I'm beginning my all nighter(3pt)
d. WHAT EXAMS,I've already fallen asleep(4pt)

What do you ask the teacher at a review session?

a. I have a list of well thought out and specific questions that I've already asked three other people about(1pt)
b. the best way to organize for exams(2pt)
c. how much studying is necessary( i.e. how many hours do I have to study minimum)(3pt)
d. HAha YoU ThINK i WouLd Go To A STudY sESSion(-_-)(4pt)

0pt: rachel     

3-4pt:roygbiv

5-7pt:procrastination

8-9pt:he-who-must-not-be-named

*/

var time = null,
    asking = null,
    doing = null,
   	pageTitle = document.getElementById('page-title'),
    pageTitleText = pageTitle.innerHTML
    tryAgain = document.getElementById('try-again'),
    quizWrapper = document.getElementById('quiz-wrapper'),
    result = document.getElementById('result'),
    formSubmit = document.getElementById('form-submit');

tryAgain.addEventListener("click", resetQuiz);
formSubmit.addEventListener("click", processResults);

function processResults(){
	time = document.querySelector('input[name="time"]:checked'),
    asking =  document.querySelector('input[name="asking"]:checked'),
    doing = document.querySelector('input[name="doing"]:checked')
    if(time == null){
		alert("Complete all questions before continuing.");
    }else if(asking == null){
    	alert("Complete all questions before continuing.");
    }else if(doing == null){
    	alert("Complete all questions before continuing.");
    }else{
    	var personality = getPersonality()
    	quizWrapper.style.display = "none"
    	formSubmit.style.display = "none"
    	result.style.display = "block"
    	tryAgain.style.display = "block"
    	if(personality == 0){
    		pageTitle.innerHTML = "You're Rachel Berry"
    		result.style.backgroundImage = "url('img/rachel.png')"
    	}else if(personality == 1){
    		pageTitle.innerHTML = "You're ROYGBIV"
    		result.style.backgroundImage = "url('img/roygbiv.jpg')"
    	}else if(personality == 2){
			pageTitle.innerHTML = "You're procrastination"
			result.style.backgroundImage = "url('img/procrastination.jpg')"
    	}
    	else if(personality == 3){
    		pageTitle.innerHTML = "You're he-who-must-not-be-named"
    		result.style.backgroundImage = "url('img/notnamed.png')"
    	}
    }

}
function resetQuiz(){
	pageTitle.innerHTML =  pageTitleText
	quizWrapper.style.display = "flex"
	result.style.display = "none"
    tryAgain.style.display = "none"
    formSubmit.style.display = "block"
    time.checked = "false"
    asking.checked = "false"
    doing.checked = "false"
    time = null
    asking = null
    doing = null
}
function getPersonality(){
	var score = 0;
	if(time.id === "roygbiv1"){
		score+=1
	}else if(time.id === "procrastination1"){
		score+=2
	}else if(time.id === "notnamed1"){
		score+=3
	}
	if(doing.id === "roygbiv2"){
		score+=1
	}else if(doing.id === "procrastination2"){
		score+=2
		
	}else if(doing.id === "notnamed2"){
		score+=3
	}
	if(asking.id === "roygbiv3"){
		score+=1
	}else if(asking.id === "procrastination3"){
		score+=2
	}else if(asking.id === "notnamed3"){
		score+=3
	}
	console.log(score)
	
	
	if(score>=0 && score<=2){
		return 0

	}
	if(score>=3 && score<=4){
		return 1
		
	}
	if(score>=5 && score<=7){
		return 2
	}
	if(score>=8 && score<=9){
		return 3
	}
}





var quiz = {
	"questions" : [{
		"question" : "Where was Isha and Anand Piramal Wedding held?",
		"option" : [
		{
			text : "Mumbai",
			isCorrect : true,
			feedback : "Correct Answer..."
		},
		{
			text : "Paris",
			isCorrect : false,
			feedback : "Incorrect"
		},
		{
			text : "Italy",
			isCorrect : false,
			feedback : "Incorrect"
		},
		{
			text : "Switzerland",
			isCorrect : false,
			feedback : "Incorrect"
		}
		],
		"hint" : "No hints are provided for this question."
	},
	{
		"question" : "Which is the first search engine?",
		"option" : [
		{
			text : "Google",
			isCorrect : false,
			feedback : "Incorrect"
		},
		{
			text : "Yahoo!",
			isCorrect : false,
			feedback : "Incorrect"
		},
		{
			text : "Archie",
			isCorrect : true,
			feedback : "Correct Answer..."
		},
		{
			text : "bing",
			isCorrect : false,
			feedback : "Incorrect"
		}
		],
		"hint" : "No hints are provided for this question."
	},
	{
		"question" : "Who is the last ruler of Iran?",
		"option" : [
		{
			text : "Reza Shah Pehlavi",
			isCorrect : true,
			feedback : "Correct Answer..."
		},
		{
			text : "Lenin",
			isCorrect : false,
			feedback : "Incorrect"
		},
		{
			text : "Stalin",
			isCorrect : false,
			feedback : "Incorrect"
		},
		{
			text : "Gamal Nasser",
			isCorrect : false,
			feedback : "Incorrect"
		}
		],
		"hint" : "No hints are provided for this question."
	},
	{
		"question" : "Who is the present CM of Telangana State?",
		"option" : [
		{
			text : "KTR",
			isCorrect : true,
			feedback : "Correct Answer..."
		},
		{
			text : "KCR",
			isCorrect : false,
			feedback : "Incorrect"
		},
		{
			text : "THR",
			isCorrect : false,
			feedback : "Incorrect"
		},
		{
			text : "Kavita",
			isCorrect : false,
			feedback : "Incorrect"
		}
		],
		"hint" : "No hints are provided for this question."
	}
	]
}
var i = 0;
var j = 0;
window.onload = function display() {
	document.getElementById('question 1').innerHTML = quiz.questions[i].question
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
	document.getElementById('question 2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint 2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('radio 2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + quiz.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + quiz.questions[i+1].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+i+1+','+j+2+')">' + quiz.questions[i+1].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+i+1+','+j+3+')">' + quiz.questions[i+1].option[j+3].text + '<br>'
    hideButton('Prev')
};
function radioclicked(i,j) {
	if (quiz.questions[i].option[j].isCorrect) {
		str=''
		str += '<div class="alert alert-success alert-dismissible">'
		str += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		str += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 1').innerHTML = str
	} else {
		str=''
		str += '<div class="alert alert-danger alert-dismissible">'
		str += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		str += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 1').innerHTML = str
	}
}
function radioclicked1(i,j) {
    if (quiz.questions[i].option[j].isCorrect) {
		str=''
		str += '<div class="alert alert-success alert-dismissible">'
		str += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		str += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 2').innerHTML = str
	} else {
		str=''
		str += '<div class="alert alert-danger alert-dismissible">'
		str += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		str += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 2').innerHTML = str
	}
}
function prev() {
	i = i - 2;
	if (i < 0) {
		i = 0;
		hidebutton('Prev')
		return;
	}
	showButton('Prev')
	showButton('Next')
	document.getElementById('question 1').innerHTML = quiz.questions[i].question
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
	document.getElementById('question 2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint 2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('radio 2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + quiz.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + quiz.questions[i+1].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+i+1+','+j+2+')">' + quiz.questions[i+1].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+i+1+','+j+3+')">' + quiz.questions[i+1].option[j+3].text + '<br>'
    if (i == 0) {
    	hideButton('Prev')
    }
}
function next() {
	i = i + 2
	if (i > quiz.questions.length - 1) {
		i = quiz.questions.length - 1
		hideButton('Next')
		return;
	}
	showButton('Next')
	showButton('Prev')
	document.getElementById('question 1').innerHTML = quiz.questions[i].question
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
	document.getElementById('question 2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint 2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('radio 2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + quiz.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + quiz.questions[i+1].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+i+1+','+j+2+')">' + quiz.questions[i+1].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+i+1+','+j+3+')">' + quiz.questions[i+1].option[j+3].text + '<br>'
    if (i == quiz.questions.length - 2) {
    	hideButton('Next')
    }
}
function hideButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'hidden'
}
function showButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'visible'
}
function reset() {
	location.reload()
}
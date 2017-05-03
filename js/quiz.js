function loadJSON(file, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); 
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
			
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


var i, j;
function load() {
    loadJSON("https://cdn.rawgit.com/kdzwinel/cd08d08002995675f10d065985257416/raw/811ad96a0567648ff858b4f14d0096ba241f28ef/quiz-data.json", function(response) {
        var actual_JSON = JSON.parse(response); //Parsing the JSON file 
        var numberofQuestions = actual_JSON.questions.length; //Returns the number of questions in quiz : 9
        var numberofAnswers = actual_JSON.questions[0].answers.length; //Gets the number of answers from the first question


        for (i = 0; i < numberofQuestions; i++) {
            divCreator("newDiv","qcontainer");		
            elementCreator("questionId", "P", "questionId animated bounceInLeft sg-text-bit sg-text-bit--not-responsive sg-text-bit--small");
            elementCreator("question", "P", "question animated bounceInLeft sg-text-bit sg-text-bit--not-responsive sg-text-bit--small"); //Dynamically creating elements from custom function (js/elementCreators.js)
            var questionIdLabels = document.getElementsByClassName("questionId")[i];
            var questionLabels = document.getElementsByClassName("question")[i+1];

            questionIdLabels.innerHTML = "Pytanie " + actual_JSON.questions[i].id; //Shows questions number
            questionLabels.innerHTML = actual_JSON.questions[i].question; //Shows the questions description

            for (j = 0; j < numberofAnswers; j++) {
                radioCreator("answerOption", "answer" + (i + 1),"option-input radio");
                elementCreator("answerLabel", "P", "answerLabel" + (j + 1));

                var answerLabels = document.getElementsByClassName("answerLabel" + (j + 1))[i];
                answerLabels.innerHTML = actual_JSON.questions[i].answers[j].answer; //Shows the possible answers for each question

                if (actual_JSON.questions[i].answers[j].correct == true) {			//Loop that changes the value atribute of radio buttons to true/false
                    document.getElementsByName("answer" + (i + 1))[j].value = true;
                } else {
                    document.getElementsByName("answer" + (i + 1))[j].value = false;

                }
            }
        }
    });
}

function finished() {
    var summaryDiv = document.createElement("DIV");					//Creates summaryDiv Window that will show your score
    summaryDiv.setAttribute("id","summary");
    document.getElementById("main_content").appendChild(summaryDiv);	//Asigning main_content as a parrent element
    
    var summaryLabel = document.createElement("P");
    summaryLabel.setAttribute("id","score");
    document.getElementById("summary").appendChild(summaryLabel);
    
    var radios = document.getElementsByTagName('input');		
    var value = 0;
    for (var i = 0; i < radios.length; i++) {					//Loop that returns all checked radio buttons with value TRUE
        if (radios[i].checked && radios[i].value == "true") {	
            value += 1;
        } 
        radios[i].disabled = true;
        document.getElementById("score").innerHTML = "Twój wynik : "+value+"/9";
    } 


}
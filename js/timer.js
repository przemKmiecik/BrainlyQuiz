quizTime = 60; //seconds
var isLoaded = false;
function countdown() {
  
    
    document.getElementById('counter').innerHTML = quizTime;
    quizTime--;
    if (quizTime < 0) {
        finished();
    } else if (isLoaded == false) {
        isLoaded = true;
        load();
        setTimeout(countdown, 1000);
        document.getElementById("intro").style.display = "none";	//Hides window with quiz name/time etc.
    } else {
        setTimeout(countdown, 1000);
    }
}
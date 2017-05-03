function divCreator(divId, divName) {
    var divId = document.createElement("DIV");
    divId.className = divName;
    document.getElementById("main_content").appendChild(divId);
}
        
function elementCreator(elementId, elementType, className) {
    var elementId = document.createElement(elementType);
    elementId.className = className;
    document.getElementsByClassName("qcontainer")[i].appendChild(elementId);
}

function radioCreator(radioId, radioName, radioClass) {
    var radioId = document.createElement("INPUT");
    radioId.setAttribute("type", "radio");
    radioId.className = radioClass;
    radioId.setAttribute("name", radioName);
    document.getElementsByClassName("qcontainer")[i].appendChild(radioId);
}
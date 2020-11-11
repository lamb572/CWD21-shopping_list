
document.addEventListener("click", doneLine);
document.addEventListener("click", deleteToDo);
window.addEventListener("load", doneLine);
window.addEventListener("load", deleteToDo);
document.addEventListener("keypress", doneLine);
document.addEventListener("keypress", deleteToDo);

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLenght(){
    return input.value.length;
}


function createListElement(){
    var li = document.createElement("li");
    var buttondel = document.createElement("button"); 
    li.setAttribute('class', 'todo');
    li.appendChild(document.createTextNode(input.value ));
    buttondel.setAttribute('class', 'delete');
    buttondel.appendChild(document.createTextNode("Delete"));
    li.appendChild(buttondel);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLenght() > 0){
        createListElement();
        
    } 
}

function addListAfterKeypress(event) {
    if (inputLenght() > 0 && event.keyCode === 13){
       createListElement()
    } 
}

function addDone(b){
    return b.target.classList.toggle("done")
};

function deleteItem(b){
    return b.path[1].remove() ;
}

function doneLine(){
    liList = document.querySelectorAll(".todo");
    for (var i =0; i < liList.length; i++) {
        liList[i].addEventListener("click", addDone)     
    };
};

function deleteToDo(){
    deleteButton = document.querySelectorAll(".delete");
    for (var i =0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteItem)     
    };
};


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);





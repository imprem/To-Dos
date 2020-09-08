var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLenght(){
    return input.value.length;
}

function listLength(){
    return item.length;
}


function createListElement(){
    var li = document.createElement("li"); //  create <li> element
    li.appendChild(document.createTextNode(input.value)); //make text form input field the li text
    ul.appendChild(li); // add li to ul
    input.value = "";

    function crossOut(){
        li.clasList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("Remove"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem(){
            li.classList.add("delete");
    }

}

function addListAfterclick(){
    if(inputLenght() > 0){
        createListElement();
    }
}

function addListAfterkeypress(){
    if(inputLenght() > 0 && event.which == 13){
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterclick);

input.addEventListener("keypress", addListAfterkeypress);
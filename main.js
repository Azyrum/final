let buttonAdd = document.getElementById("buttonAdd");
let inputPlace = document.getElementById("inputPlace");
let placeSpace = document.getElementById("placeSpace");
let allTaskArray = [];
buttonAdd.onclick = () =>{
    allTaskArray.push(inputPlace.value);
    inputPlace.value = "";
    placeSpace.innerHTML = "";
    allTaskArray.forEach(function(task, i){
        let elem = document.createElement("div");
        placeSpace.prepend(elem);
        elem.innerHTML =  `<div id="${i}">
        <p class='necesseryThings' >${task}</p>
        <button ><img class="deleteButton" src="delete.png" alt="" style="vertical-align:middle"></button>
       <button><img src="crossLine.png" class="crossLineButton" alt="" style="vertical-align:middle"></button>
      </div>`;
      
      
    });
}
placeSpace.onclick = (activeButton) =>{
    let activeKey = activeButton.target;
    if ((activeKey.className != "deleteButton")&&(activeKey.className != "crossLineButton")) return;
    if(activeKey.className == "deleteButton"){
        let completeTask = activeKey.parentNode.parentNode.id;
        console.log(activeKey.parentNode.id);
        allTaskArray.splice(completeTask, 1);
        placeSpace.innerHTML = "";
        allTaskArray.forEach(function(task, i){
        let elem = document.createElement("div");
        placeSpace.prepend(elem);
        elem.innerHTML =  `<div id="${i}">
        <p class='necesseryThings' >${task}</p>
        <button ><img class="deleteButton" src="delete.png" alt="" style="vertical-align:middle"></button>
       <button><img src="crossLine.png" class="crossLineButton" alt="" style="vertical-align:middle"></button>
      </div>`;
        });
    }
    if(activeKey.className == "crossLineButton"){
        //alert("hi");
        if(activeKey.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.style.textDecoration == "none"){
            activeKey.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.style.textDecoration = "line-through";
        } else{
            activeKey.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.style.textDecoration = "none";
        }
    }
};

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
        elem.innerHTML = `<p name="${i}"><div class='necesseryThings'>${task}</div><button>
        <img src="delete.png" class="deleteButton" alt="" style="vertical-align:middle"> 
       </button>
       <button>
       <img src="crossLine.png" class="crossLineButton" alt="" style="vertical-align:middle"> 
      </button></p>`;
      
      
    });
}
placeSpace.onclick = (activeButton) =>{
    let activeKey = activeButton.target;
    if (activeKey.className != "deleteButton") return;
    let completeTask = activeKey.parentElement.name;
    allTaskArray.splice(completeTask, 1);
    placeSpace.innerHTML = "";
    allTaskArray.forEach(function(task, i){
        let elem = document.createElement("div");
        placeSpace.prepend(elem);
        elem.innerHTML = `<p name="${i}"><div class='necesseryThings'>${task}</div><button>
        <img src="delete.png" class="deleteButton" alt="" style="vertical-align:middle"> 
       </button>
       <button>
       <img src="crossLine.png" class="crossLineButton" alt="" style="vertical-align:middle"> 
      </button></p>`;
      
      
    });
};
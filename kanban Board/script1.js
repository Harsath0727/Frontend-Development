const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".lists");
const input = document.getElementById("inptext");

for (const list of lists){
    list.addEventListener("dragstart",dragstart);
    list.addEventListener("dragend",dragend);
}

for(const card of cards){
    card.addEventListener("dragover",dragover);
    // card.addEventListener("dragenter",dragenter);
    card.addEventListener("drop",dragdrop);
}

function dragstart(e){
    e.dataTransfer.setData("text/plain",this.id);
}

function dragend(){
    console.log("dragended");
}

function dragover(e){
    e.preventDefault();
}

// function dragenter(e){
//     e.preventDefault();
// }

function dragdrop(e){
    const id = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(id);
    this.appendChild(card)
    // here this means the drop div
    // e.preventDefault();
}

function addtask(){
    const tasktext = input.value.trim();
    
    if(tasktext === ""){
        alert("please Enter A Task!");
        return;
    }

    const newtask = document.createElement("li");
    newtask.classList.add("lists");
    newtask.setAttribute("draggable","true");
    // newtask.textContent = tasktext;

    newtask.id = "card" + Math.floor(Math.random()*10000);
    newtask.addEventListener("dragstart",dragstart);
    newtask.addEventListener("dragend",dragend);

    newtask.innerHTML=`${tasktext} <button class="delbtn" onclick="this.parentElement.remove()">❌</button>`;

    const box1 = document.getElementById("card1");
    box1.appendChild(newtask);

    input.value ="";
}
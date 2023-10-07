const inputBox = document.querySelector(".inputBox");
const listBox = document.getElementById("listBox");
const btn = document.querySelector(".btn");

btn.addEventListener("click", addTask) 
function addTask (){
    if(inputBox.value === ""){
        alert("Stay disciplined, add a new task now!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "X";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listBox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});

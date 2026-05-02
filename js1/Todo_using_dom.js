let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", () => {
    let li = document.createElement("li");
    let btn1 = document.createElement("button");
    li.innerText = input.value;
    btn1.innerText = "Delete";
    btn1.classList.add("delete");
    ul.appendChild(li);
    li.appendChild(btn1);
    input.value = "";
}); 

ul.addEventListener("click", event => {
    if(event.target.nodeName === "BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("Deleted");
    }
}); 
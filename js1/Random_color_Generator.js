let h1 = document.querySelector("h1");

let div = document.querySelector("div");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  h1.innerText = `rgb(${red},${green},${blue})`;
  div.style.backgroundColor = `rgb(${red},${green},${blue})`;
  div.style.fontWeight = 500;
});

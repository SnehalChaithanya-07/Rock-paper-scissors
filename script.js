let btn = document.querySelector("#btn");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let You = document.querySelector(".u");
let com = document.querySelector(".c");
let new1=document.querySelector(".new")

let selected = document.querySelector(".selected");
let u = 0;
let c = 0;

const newGame =()=>{
  btn.innerText = "Pick Your Move";
  selected.innerText="Computer:"
  com.innerText = 0;
  You.innerText = 0;
}
new1.addEventListener("click",newGame);


box1.addEventListener("click", () => {
  console.log("box1 was clicked");
  let comp = Math.random();
  if (comp <= 0.33) {
    btn.innerText = "draw ";

    selected.innerText = " Computer :Rock";
    console.log(comp);
  } else if (comp > 0.33 && comp <= 0.66) {
    c = c + 1;
    btn.innerText = "Computer is the winner";

    com.innerText = c;
    console.log(comp);
    
    selected.innerText = " Computer :Paper"
  } else {
    u = u + 1;
    btn.innerText = "You are the winner";
    You.innerText = u;
    console.log(comp);
      selected.innerText = " Computer : Scissor"
  }
});

box2.addEventListener("click", () => {
  console.log("box2 was clicked");
  let comp2 = Math.random();
  if (comp2 <= 0.33) {
    u = u + 1;
    btn.innerText = "You are the winner";
    You.innerText = u;
    selected.innerText = " Computer :Rock";
    console.log(comp2);
  } else if (comp2 > 0.33 && comp2 <= 0.66) {
    btn.innerText = "draw";
    console.log(comp2);
     selected.innerText = " Computer :Paper"
  } else {
    c = c + 1;
    btn.innerText = "Computer is the winner";
    com.innerText = c;
    console.log(comp2);
      selected.innerText = " Computer : Scissor"
    
  }
});
box3.addEventListener("click", () => {
  console.log("box3 was clicked");
  let comp3 = Math.random();
  if (comp3 <= 0.33) {
    c = c + 1;
    btn.innerText = "Computer is the winner";
    com.innerText = c;
    console.log(comp3);
    selected.innerText = " Computer :Rock";
  } else if (comp3 > 0.33 && comp3 <= 0.66) {
    u = u + 1;
    btn.innerText = "You are the winner";
    You.innerText = u;
    console.log(comp3);
     selected.innerText = " Computer :Paper"
  } else {
    btn.innerText = "draw";
    console.log(comp3);
      selected.innerText = " Computer : Scissor"
  }
});

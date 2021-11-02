
let leftbutton = document.getElementById("sliderLeft");
let rightbutton = document.getElementById("sliderRight");
let slider = document.getElementsByClassName("slider")[0];
let commentRight = document.getElementById("commentRight");
let commentLeft = document.getElementById("commentLeft");
let pairs = document.getElementsByClassName("pair");
let dist = 0;
leftbutton.onclick = () => {
  console.log(dist);
  dist = dist - 100;
  if (dist == -100) {
    dist = (slider.children.length - 1) * 100;
  }
  slider.style.transform = "translateX(-" + dist + "%)";
}
rightbutton.onclick = () => {
  console.log(dist);
  dist = dist + 100;
  dist = dist % (slider.children.length * 100);
  slider.style.transform = "translateX(-" + dist + "%)";

}
commentRight.onclick = () => {
  console.log("вправо");
  let activePair = document.getElementsByClassName("activePair")[0];
  let nextPair;
  if (activePair.nextElementSibling.classList[0] == "pair") {
    nextPair = activePair.nextElementSibling;
  }
  else { nextPair = pairs[0] }
  activePair.classList.remove("activePair");
  setTimeout(function () {
    nextPair.classList.add("activePair");
  }, 300)

}
commentLeft.onclick = () => {
  console.log("влево");
  let activePair = document.getElementsByClassName("activePair")[0];
  let prevPair;
  if (activePair.previousElementSibling) {
    prevPair = activePair.previousElementSibling;
  }
  else { prevPair = pairs[2] }
  activePair.classList.remove("activePair");
  console.log(prevPair);
  prevPair.classList.add("activePair");
}
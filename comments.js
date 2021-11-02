let reviewLeft=document.getElementById("reviewLeft");
let reviewRight=document.getElementById("reviewRight");
let commentSlider=document.getElementsByClassName("commentSlider")[0];
let dist = 0;
reviewLeft.onclick = () => {
    console.log(dist);
    dist = dist - 100;
    if (dist == -100) {
      dist = (commentSlider.children.length - 1) * 100;
    }
    commentSlider.style.transform = "translateX(-" + dist + "%)";
  }
  reviewRight.onclick = () => {
    console.log(dist);
    dist = dist + 100;
    dist = dist % (commentSlider.children.length * 100);
    commentSlider.style.transform = "translateX(-" + dist + "%)";
  
  }
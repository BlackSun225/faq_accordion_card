const questionAns = document.getElementsByClassName("qa");

function displayAnswer(a) {
    for(let i = 0; i < questionAns.length; i++) {
    const x = questionAns[i].children;
    const y = x[0].children;
    y[0].style.color = "hsl(240, 6%, 50%)";
    y[0].style.fontWeight = "400";
    y[1].style.transform = "none";
    x[1].style.display = "none";
  }
  const b = a.children;
  b[1].style.display = "block";
}
function resetIt(a) {
  const c = b[0].children;
  b[1].style.display = "none";
  c[0].style.color = "hsl(240, 6%, 50%)";
  c[0].style.fontWeight = "400";
  c[1].style.transform = "none";
}
function changeColor(a) {
  const b = a.children;
  const c = b[0].children;
  c[0].style.color = "hsl(237, 12%, 33%)";
  c[0].style.fontWeight = "700";
}
function rotateImg(a) {
  const b = a.children;
  const c = b[0].children;
  c[1].style.transform = "rotate(180deg)";
}
function colorHover(a) {
  const b = a.children;
  const c = b[0].children;
  c[0].style.color = "hsl(14, 88%, 65%)";
}
function colorOut(a) {
  const b = a.children;
  const c = b[0].children;
  if(c[0].style.color = "hsl(237, 12%, 33%)") {
    return c[0].style.color = "hsl(237, 12%, 33%)";
  }
  c[0].style.color = "hsl(240, 6%, 50%)";  
}

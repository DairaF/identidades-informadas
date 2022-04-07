function commentMatch(className){
  let topPos = document.getElementsByClassName(className)[0].offsetTop;
  document.getElementsByClassName(className)[1].style.top = topPos + "px";
}
commentMatch("c1");
commentMatch("c2");

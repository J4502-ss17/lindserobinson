var newLink = document.createElement("a");

var allParagraphs = document.getElementsByTagName("p");

var firstParagraph = allParagraphs[0];

function revealCopy(e){
  for (var i = 0; i < allParagraphs.lenth; i++) {
      if( i === 0){
        continue;
      }
      allParagraphs[i].style.display = "none"


  }
    this.remove();
    e.presevenDefault();
}

newLink.setAttribute("href","#");

newLink.innerHTML="Read More";

firstParagraph.appendChild( newLink );

newLink.addEventListener("click", revealCopy);

newLink.style.display = "inline-block";

newLink.style.marginLeft = "0.5em";

for (var i = 0; i < allParagraphs.lenth; i++) {
    if( i === 0){
      continue;
    }
    allParagraphs[i].style.display = "none"


}

/*Show the first tab*/
var tabsContent, tabsLinks, tabsCount = 1;
tabsContent = document.getElementsByClassName("tabcontent");
tabsLinks = document.getElementsByClassName("tablinks");

for (i = 0; i < tabsContent.length; i++) {
  if (tabsContent[i].id.startsWith(tabsCount)) {
    tabsContent[i].style.display = "block";
    tabsContent[i].style.className += " active";
    tabsLinks[i].className += " active"
    tabsCount++;
  }
}

function openCode(evt, labelName) {

  var i, tabcontent, tablinks;

  if (labelName.includes(evt.currentTarget.innerText.toLowerCase())) {

    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
      /*If the id of the tabContent starts with the same number that the label pressed*/
      if (tabcontent[i].id.startsWith(labelName.substring(0, 1))) {
        tabcontent[i].style.display = "none";
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    }

  }
    /*Show the current tab, and add an "active" class to the button that opened the tab*/
    document.getElementById(labelName).style.display = "block";
    evt.currentTarget.className += " active";

}
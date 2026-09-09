var mydivs = document.getElementsByClassName("draggable");
for (var i = 0; i < mydivs.length; i++) {
  dragElement(mydivs[i]);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onpointerdown = dragPointerDown;
  } else {
    elmnt.onpointerdown = dragPointerDown;
  }

  function dragPointerDown(e) {
    e.preventDefault();
    elmnt.setPointerCapture(e.pointerId);
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.onpointerup = closeDragElement;
    elmnt.onpointercancel = closeDragElement;
    elmnt.onpointermove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    elmnt.onpointerup = null;
    elmnt.onpointercancel = null;
    elmnt.onpointermove = null;
  }
}
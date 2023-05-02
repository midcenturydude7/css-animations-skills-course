const anchors = document.querySelectorAll(".anchor-tooltip");

anchors.forEach((anchor) => {
  const toolTipText = anchor.getAttribute("title"),
    toolTip = document.createElement("span");

  toolTip.className = "title-tooltip";
  toolTip.innerHTML = toolTipText;

  anchor.appendChild(toolTip);
});

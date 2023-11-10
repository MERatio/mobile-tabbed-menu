"use strict";

function changeContent() {
  const tabLinks = document.querySelectorAll(".tabLink");
  const contents = document.querySelectorAll(".content");
  const hash = location.hash;
  const activeTabLink = document.querySelector(`[href="${hash}"]`);
  const activeContent = document.querySelector(`[data-href="${hash}"]`);

  for (const tabLink of tabLinks) {
    tabLink.classList.remove("active");
  }

  for (const content of contents) {
    content.classList.remove("active");
  }

  activeTabLink.classList.add("active");
  activeContent.classList.add("active");
}

function handleDOMContentLoaded() {
  if (!location.hash) {
    location.hash = "#home";
  }

  changeContent();
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
window.addEventListener("hashchange", changeContent);

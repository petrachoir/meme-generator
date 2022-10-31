"use strict";

// change form submit behavior on load
window.onload = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", formSubmit);
};

// form submission
const formSubmit = (evt) => {
  evt.preventDefault();
  const form = document.querySelector("form");
  const url = form.querySelector("input[name='url']").value;
  const topText = form.querySelector("input[name='top-text']").value;
  const bottomText = form.querySelector("input[name='bottom-text']").value;
  generateMeme(url, topText, bottomText);
  form.reset();
};

// meme generation
const generateMeme = (url, inputText1, inputText2) => {
  const topText = document.createElement("p");
  topText.innerText = inputText1;
  topText.id = "top-text";
  const bottomText = document.createElement("p");
  bottomText.innerText = inputText2;
  bottomText.id = "bottom-text";
  const image = document.createElement("img");
  image.src = url;

  const deleteMemeBtn = document.createElement("button");
  deleteMemeBtn.innerText = "X";
  deleteMemeBtn.addEventListener("click", (evt) => {
    const memeToDelete = evt.target.parentElement;
    memeToDelete.remove();
  });

  const meme = document.createElement("div");
  meme.className = "meme";
  meme.appendChild(topText);
  meme.appendChild(bottomText);
  meme.appendChild(image);
  meme.appendChild(deleteMemeBtn);

  const gallery = document.querySelector("#meme-gallery");
  gallery.prepend(meme);
};

import { parse } from "querystring"

// DOM Elements
const linksSection = document.querySelector('.links')
const errorMessage = document.querySelector('.error-message')
const newLinkForm = document.querySelector('.new-link-form')
const newLinkUrl = document.querySelector('.new-link-url')
const newLinkButton = document.querySelector('.new-link-button')
const clearStorageButton = document.querySelector('.clear-storage')


// DOM APIs
const parser = new DOMParser();
const parserResponse = text => {
   return parser.parseFromString(text,'text/html');
}

// Events
newLinkUrl.addEventListener('keyup', () => {
    newLinkButton.disabled = !newLinkUrl.validity.valid;
});



newLinkForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = newLinkUrl.value;
    const response = await fetch(url);
    const text = await response.text();

    const html = parserResponse(text)
    console.log(html);
})
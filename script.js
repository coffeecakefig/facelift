function createSpan () {
let span = document.createElement('span');
return span;
}

function createDiv () {
let div = document.createElement('div');
return div;
}

const header = document.querySelector('.stitchingTitle'); 
const h1 = document.createElement('h1');
const subheading = createDiv();
const boardHeadings = document.querySelectorAll('.stitchCatHeaderInner');
const specialSave = document.querySelector('#stitchForumID-4 h3 a');
const threads = document.querySelectorAll('.stitchForumPosterDeets thread');
const recentsRow = document.querySelectorAll('.recent-topics-info');
const affiliates = document.querySelector('#affiliates');
const topicHeadings = document.querySelectorAll('.stitchTopicHeader > b:has(+ .stitchTopicContainer)');
const avatars = document.querySelectorAll('.last-poster-avatar, .starter-avatar');
const latestPosters = document.querySelectorAll('.sitchForumLatestPoster');
const topicRepliers = document.querySelectorAll('.stitchTopicReplier');
const descs = document.querySelectorAll('.stitchPostMain .stitchPostHeader desc');
const anotherSave = document.querySelector('#stitchCat-3 h1');

descs.forEach((desc) => {
const descString = desc.textContent;
const newDescString = descString.replaceAll('/', '·');
desc.textContent = newDescString;
});

h1.textContent = 'New Paradigm';
header.appendChild(h1);
subheading.classList.add('subheading');
subheading.appendChild(createSpan()).textContent = '2424';
subheading.appendChild(createSpan()).textContent = 'Supernatural';
subheading.appendChild(createSpan()).textContent = 'Closed-lore';
header.appendChild(subheading);

affiliates.remove();

avatars.forEach((avatar) => {
let div = document.createElement('div');
div.classList.add('av-wrapper');
div.appendChild(avatar.cloneNode(true));
avatar.parentNode.replaceChild(div, avatar);
});

threads.forEach((thread) => {
if (thread.childNodes.length === 4) thread.childNodes[2].textContent = ' by ';
});

recentsRow.forEach((recent) => recent.childNodes[2].textContent = ' by ');



latestPosters.forEach((latestPoster) => {
const parentElement = latestPoster.closest('.stitchForumRow');
const accentClass = latestPoster.classList[1];
latestPoster.childNodes[3].childNodes[1].innerText.includes('by') ? parentElement.classList.add(accentClass) : parentElement.classList.add('gr-2');
});

topicRepliers.forEach((topicReplier) => {
const parentElement = topicReplier.closest('.stitchTopicContainer');
const accentClass = topicReplier.classList[1];
parentElement.classList.add(accentClass);
});

anotherSave.textContent = 'Out of Character';
specialSave.textContent = 'Claims and Templates';

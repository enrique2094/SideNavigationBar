let nav = document.querySelector('.nav');
let navExpand = document.querySelector('.nav_expand');
let navListItem = document.querySelectorAll('.nav_listitem');

// Add EventListener to the Icon
navExpand.addEventListener('click', () => {
	nav.classList.toggle('nav-closed');
});

// Loop through LIs
navListItem.forEach((link) => link.addEventListener('click', listActive));

// Adding and Remove the active class
function listActive() {
	navListItem.forEach((link) => link.classList.remove('nav_listitem-active'));
	this.classList.add('nav_listitem-active');
}

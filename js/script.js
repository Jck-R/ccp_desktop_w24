e = document.querySelector('.current-page');
mainContent = document.querySelector('main');
// When mouse is over the element with class 'current-page', set the background color to red.
e.addEventListener('mouseover', function() {
    mainContent.style.backgroundColor = 'yellow';
});
e.addEventListener('mouseout', function() {
    mainContent.style.backgroundColor = '';
});
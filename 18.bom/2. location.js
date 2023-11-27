console.clear();

// console.log(window.location);
// console.log(location.href);
// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);

const locationDiv = document.querySelector('.location-div');

const p1 = locationDiv.children[0];
p1.textContent = location.href;

const p2 = locationDiv.children[1];
p2.textContent = location.protocol;

const p3 = locationDiv.children[2];
p3.textContent = location.hostname;

const p4 = locationDiv.children[3];
p4.textContent = location.port;

const p5 = locationDiv.children[4];
p5.textContent = location.pathname;

const visitButton = document.getElementById('buttonId');
visitButton.addEventListener('click', function () {
    location.assign('https://mrmasum.netlify.app');
})
const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript";
document.querySelector('body').appendChild(h2);

function clickAlert() {
    alert("Don't touch me!");
}

h2.addEventListener('click', clickAlert);
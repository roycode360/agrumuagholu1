function dropdownMenu() {
    const x = document.getElementById('menu');
    if (x.className === 'links') {
        x.className += ' responsive';
    } else {
        x.className = 'links';
    }
    const y = document.getElementById('icon').parentNode.parentNode.parentNode;
    if (y.className === "") {
        y.className += ' edit';
    } else {
        y.className = "";
    }
};
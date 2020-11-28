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


//General Images
if (document.getElementsByTagName('title')[0].baseURI.includes('news') || document.getElementsByTagName('title')[0].baseURI.includes('events')) {
    document.getElementById('logo').src = `/Global/img/logo1.jpg`;

    let arrowImg = document.querySelectorAll('.col-3.sidebar-right ul li img');
    arrowImg.forEach(cur => {
        cur.src = `/Global/img/arrow.png`;
    });

    document.getElementById('btn-r').src = `/Global/img/button-bg-right.png`;
    document.getElementById('btn-l').src = `/Global/img/button-bg-left.png`;
};

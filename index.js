init();

// TOPNAV RESPONSIVE
function dropdownMenu() {
    const x = document.getElementById('menu');
    if (x.className === 'links') {
        x.className += ' responsive';
    } else {
        x.className = 'links';
    }
    const y = document.getElementById('icon').parentNode.parentNode.parentNode.parentNode.parentNode;
    if (y.className === "") {
        y.className += ' edit';
    } else {
        y.className = "";
    }
};


// BIBLE VERSE DISPLAY
function verseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('“And we have known and believed the love that God hath to us. God is love; and he that dwelleth in love dwelleth in God, and God in him.”');
        }, 6000);
    });
}
function textOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('1 John 4:16');
        }, 0);
    });
}


function verseTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('“The LORD [is] my strength and my shield; my heart trusted in him, and I am helped: therefore my heart greatly rejoiceth; and with my song will I praise him.”');
        }, 6000);
    });
}
function textTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Psalms 28:7');
        }, 0);
    });
}


function verseThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('“For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.”');
        }, 6000);
    });
}
function textThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('John 3:16');
        }, 0);
    });
}


async function displayVerseAW() {
    for (i = 0; i > -1; i++) {
    const bible3 = await verseThree();
    const text3 = await textThree();
    document.getElementById('b-verse').textContent = bible3;
    document.getElementById('b-text').textContent = text3;
    

    const bible2 = await verseTwo();
    const text2 = await textTwo();
    document.getElementById('b-verse').textContent = bible2;
    document.getElementById('b-text').textContent = text2;

    const bible1 = await verseOne();
    const text1 = await textOne();
    document.getElementById('b-verse').textContent = bible1;
    document.getElementById('b-text').textContent = text1;
    }
}


// HERO TEXT DISPLAY
function heroTextOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Learn About Jesus Today');
        }, 7500)
    })
};
function heroSubtextOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('“The LORD [is] my strength and my shield; my heart trusted in him, and I am helped: therefore my heart greatly rejoiceth; and with my song will I praise him.”');
        }, 0)
    })
};

function heroTextTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tell The World');
        }, 7500)
    })
};
function heroSubtextTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('“And we have known and believed the love that God hath to us. God is love; and he that dwelleth in love dwelleth in God, and God in him.”');
        }, 0)
    })
};

function heroTextThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Do You Believe In Jesus?');
        }, 7500)
    })
};
function heroSubtextThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('“For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.”');
        }, 0)
    })
};

function heroTextFour() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Living & Sharing The Gospel Of Christ');
        }, 7500)
    })
};
function heroSubtextFour() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('“For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.”');
        }, 0)
    })
};

async function displayHeroTextAW() {
    for (i = 0; i > -1; i++) {
        const text_1 = await heroTextOne();
        const sub_1 = await heroSubtextOne();
        document.getElementById('hero-text').textContent = text_1;
        document.getElementById('hero-subtext').textContent = sub_1;

        const text_2 = await heroTextTwo();
        const sub_2 = await heroSubtextTwo();
        document.getElementById('hero-text').textContent = text_2;
        document.getElementById('hero-subtext').textContent = sub_2;

        const text_3 = await heroTextThree();
        const sub_3 = await heroSubtextThree();
        document.getElementById('hero-text').textContent = text_3;
        document.getElementById('hero-subtext').textContent = sub_3;

        const text_4 = await heroTextFour();
        const sub_4 = await heroSubtextFour();
        document.getElementById('hero-text').textContent = text_4;
        document.getElementById('hero-subtext').textContent = sub_4;
    }
}

function sliderFxn() {
    document.getElementById('sliderDiv').style="animation: slider 30s ease-in-out infinite forwards";
}


function init() {
    sliderFxn();
    displayVerseAW();
    displayHeroTextAW();
}



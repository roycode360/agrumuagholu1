// Hero Headlines
const heroHeadlines =  ['Important Notice!','Live Service Every Sunday Morning'];

// Creating the slider
const imgDiv = document.getElementById('overlay');
const headLine = document.getElementById('headline');
const time = 50;

function stageOne () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 1;');
        }, 5000);
    })
}
function stageOne1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.9;');
        }, time);
    })
}
function stageOne2 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.8;');
        }, time);
    })
}
function stageOne3 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.7;');
        }, time);
    })
}
function stageOne4 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.6;');
        }, time);
    })
}
function stageOne5 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.5;');
        }, time);
    })
}
function stageOne6 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.4;');
        }, time);
    })
}
function stageOne7 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.3;');
        }, time);
    })
}
function stageOne8 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.2;');
        }, time);
    })
}
function stageOne9 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.1;');
        }, time);
    })
}
function stageOne10 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.2;');
        }, time);
    })
}
function stageOne11 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.3;');
        }, time);
    })
}
function stageOne12 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.4;');
        }, time);
    })
}
function stageOne13 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.5;');
        }, time);
    })
}
function stageOne14 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.6;');
        }, time);
    })
}
function stageOne15 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.7;');
        }, time);
    })
}
function stageOne16 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.8;');
        }, time);
    })
}
function stageOne17 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 0.9;');
        }, time);
    })
}
function stageOne18 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 1;');
        }, time);
    })
}
function stageTwo (counter, div) {
    return new Promise((resolve, reject) => {
        setTimeout((next, d) => {
            resolve(imgDiv.src = `../${d}/img/slider/slide-${next}.jpg`);
        }, 0, ...[counter, div]);
    })
}
function stageThree () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imgDiv.style = 'opacity: 1;');
        }, 0);
    })
}
function changeHeadline (content, head) {
    return new Promise((resolve, reject) => {
        setTimeout((move, H) => {
            resolve(headline.textContent = H[move]);
        }, 0, ...[content, head]);
    })
}


sliderUpdater = (sec, heading, end) => {
    let count = 1;
    let x = 100;
    // const i = 0;
    async function slider () {
        headLine.textContent = heroHeadlines[0];
        for (var e = 0; e < x; e--) {
            await stageOne();
            await stageOne1();
            await stageOne2();
            await stageOne3();
            await stageOne4();
            await stageOne5();
            await stageOne6();
            await stageOne7();
            await stageOne8();
            await stageOne9();
            await stageTwo(count, sec);
            await changeHeadline(count, heading);
            await stageOne10();
            await stageOne11();
            await stageOne12();
            await stageOne13();
            await stageOne14();
            await stageOne15();
            await stageOne16();
            await stageOne17();
            await stageOne18();
            await stageThree();
            count++;
            if (count === end) {
                count = 0;
            } else {
                count = count;
            }
        }
    }
    slider();
    document.getElementById('btn-r').addEventListener('click',() => {
        x = -100;
        check = true;
        count++;
        if(count > (heading.length-1)) {
            count = 0;
        } else {
            count = count;
        }
        imgDiv.src = `../${sec}/img/slider/slide-${count}.jpg`;
        headLine.textContent = heading[count];
    })
    document.getElementById('btn-l').addEventListener('click',() => {
        x = -100;
        count--;
        if(count < 0) {
            count = (heading.length-1);
        } else {
            count = count;
        }
        imgDiv.src = `../${sec}/img/slider/slide-${count}.jpg`;
        headLine.textContent = heading[count];
    });
}

sliderUpdater('Programs', heroHeadlines, heroHeadlines.length);


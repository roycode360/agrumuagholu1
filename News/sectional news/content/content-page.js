const contentCTRL = (() => {
    /*****News Contents*****/
    const heroNews = {
        page_1: {
            box_1: ['Communion Service','Remembering His Sacrifice'],
            box_2: ['Rev. Anthony Asuquo & Wife Mrs. Evelyn Asuquo','Cutting Of The Birthday Cake', 'Celebrant\'s Birthday cake', 'Group Photograph Of Deacons, Pastors & Deaconesses'],
            box_3: ['Cover Photo Of Abasio','Fjoez: Solid Rock (Cover)', 'Ebenezer: Fjoez & The H.R.P.C', 'Cover Photo Of Obimmo', 'Dafdoxa Records', 'Fjoez In Worship'],
        },
        page_2: {
            box_1: ['page-2-box-1 National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_2: ['page-2-box-2 National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_3: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_4: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_5: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_6: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_7: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_8: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_9: ['page-2-box-9 National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day']
        },
        page_3: {
            box_1: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_2: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_3: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_4: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_5: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_6: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_7: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_8: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_9: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day']
        },
        page_4: {
            box_1: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_2: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_3: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_4: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_5: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_6: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_7: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_8: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_9: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day']
        },
        page_5: {
            box_1: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_2: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_3: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_4: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_5: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_6: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_7: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_8: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day'],
            box_9: ['n-1National Missions Day','Division Of Ikwere South District', 'Men\'s National Convenction', 'Children\'s Harvest On The 25th November', 'n-1National Missions Day']
        },
    }
    const RTHeadlineInfo = {
        mostRecent: ['Local Church Harvest 2019', 'Sectional fellowship and communion service 22/03/20', 'District Women\'s Rally & Evangelism', 'Evangel vice chancellor wants inclusion of private universities in TETFund support', 'Greg Laurie Encourages Congregation to Replace Fear of Coronavirus with Faith'],
        topTrending: ['D\'DISCOVERY: One Year Anniversary', 'Our Big Daddy Celeberates his 59th Birthday!', 'Abasio: Latest song by gospel artist Fjoez', 'Peniel 2019 tagged "Injury Time"', 'Bible remains undamaged after truck goes up in flames']
    }
    return {
        RTheadline: RTHeadlineInfo,
        heroInfo: heroNews
    }
})();


const UICTRL = (() => {
    /*****Variables & Data******/
    const DOMstrings = {
        Major_Headlines: '.prefix',
        News_Headlines: '.top-stories',
        sideBar_links: 'div.sidebar-right ul li a',
        box_img: '.news-box img',
        box_headlines: '.news-box a',
        box_date: '.news-box h5',
        box_info: '.news-box p',
        page1: 'news.htm',
        page2: 'news1.htm',
        page3: 'news2.htm',
        page4: 'news3.htm',
        page5: 'news4.htm',
        News: 'News',
        local: 'local news',
        sectional: 'sectional news',
        district: 'district news',
        genC: 'general council news',
        worldwide: 'worldwide news'
    }

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
    function stageTwo (counter) {
        return new Promise((resolve, reject) => {
            setTimeout((next) => {
                resolve(imgDiv.src = `./img/slider/slide-${next}.jpg`);
            }, 0, counter);
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

    return {
        updateRecent_TrendText: (recentNews, trendingNews) => {
            let RTlinks = [];
            let RTlinks1 = document.querySelectorAll(DOMstrings.sideBar_links);
            RTlinks1.forEach(cur => {
                RTlinks.push(cur);
            });
            const Rlinks = RTlinks.slice(5, 10);
            // Updating recent news links
            Rlinks[0].attributes[0].nodeValue = `../../../../local news/content/page-1/box-1/box-1.htm`;
            Rlinks[1].attributes[0].nodeValue = `../../../../sectional news/content/page-1/box-1/box-1.htm`;
            Rlinks[2].attributes[0].nodeValue = `../../../../district news/content/page-1/box-1/box-1.htm`;
            Rlinks[3].attributes[0].nodeValue = `../../../../general council news/content/page-1/box-1/box-1.htm`;
            Rlinks[4].attributes[0].nodeValue = `../../../../worldwide news/content/page-1/box-1/box-1.htm`;
            
            const Tlinks = RTlinks.slice(10, 15);
            // Updating trending news links
            Tlinks[0].attributes[0].nodeValue = `../../../../local news/content/page-1/box-3/box-3.htm`;
            Tlinks[1].attributes[0].nodeValue = `../../../../sectional news/content/page-1/box-2/box-2.htm`;
            Tlinks[2].attributes[0].nodeValue = `../../../../district news/content/page-1/box-2/box-2.htm`;
            Tlinks[3].attributes[0].nodeValue = `../../../../general council news/content/page-1/box-5/box-5.htm`;
            Tlinks[4].attributes[0].nodeValue = `../../../../worldwide news/content/page-1/box-5/box-5.htm`;

            // Updating the Recent & Trending texts in sidebar right
            Rlinks.forEach((cur, indx, arr) => {
                arr[indx].textContent = recentNews[indx];
            });
            Tlinks.forEach((cur, indx, arr) => {
                arr[indx].textContent = trendingNews[indx];
            });
        },
        sliderUpdater: (heading, end) => {
            let count = 1;
            let x = 100;
            let check = false;
            // const i = 0;
            async function slider () {
                headLine.textContent = heading[0];
                imgDiv.src = `./img/slider/slide-0.jpg`;
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
                    await stageTwo(count);
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
                imgDiv.src = `./img/slider/slide-${count}.jpg`;
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
                imgDiv.src = `./img/slider/slide-${count}.jpg`;
                headLine.textContent = heading[count];
            });
        },
        getDOMstrings: () => {
            return DOMstrings;
        }
    }
})();


const webCTRL = ((content, UI) => {
    DOMstr = UI.getDOMstrings();
    //1. Update recent and Trending news section:
    UI.updateRecent_TrendText(content.RTheadline.mostRecent, content.RTheadline.topTrending);
    //2. Update news content slider text and images according to pages
    //Get page URI
     const pageID = document.baseURI;
     // Page-1
    if (pageID.includes('page-1') && pageID.includes('box-1')) {
        UI.sliderUpdater(content.heroInfo.page_1.box_1, content.heroInfo.page_1.box_1.length);
    } else if (pageID.includes('page-1') && pageID.includes('box-2')) {
        UI.sliderUpdater(content.heroInfo.page_1.box_2, content.heroInfo.page_1.box_2.length);
    } else if (pageID.includes('page-1') && pageID.includes('box-3')) {
        UI.sliderUpdater(content.heroInfo.page_1.box_3, content.heroInfo.page_1.box_3.length);
    } else if (pageID.includes('page-1') && pageID.includes('box-4')) {
        UI.sliderUpdater(content.heroInfo.page_1.box_4, content.heroInfo.page_1.box_4.length);
    } else if (pageID.includes('page-1') && pageID.includes('box-5')) {
        UI.sliderUpdater(content.heroInfo.page_1.box_5, content.heroInfo.page_1.box_5.length);
    } else if (pageID.includes('page-1') && pageID.includes('box-6')) {
        UI.sliderUpdater(content.heroInfo.page_1.box_6, content.heroInfo.page_1.box_6.length);
    } else if (pageID.includes('page-1') && pageID.includes('box-7')) {
        UI.sliderUpdater(content.heroInfo.page_1.box_7, content.heroInfo.page_1.box_7.length);
    } else if (pageID.includes('page-1') && pageID.includes('box-8')) {
        UI.sliderUpdater(content.heroInfo.page_1.box_8, content.heroInfo.page_1.box_8.length);
    } else if (pageID.includes('page-1') && pageID.includes('box-9')) {
        UI.sliderUpdater(content.heroInfo.page_1.box_9, content.heroInfo.page_1.box_9.length);
        // Page-2
    } else if (pageID.includes('page-2') && pageID.includes('box-1')) {
        UI.sliderUpdater(content.heroInfo.page_2.box_1, content.heroInfo.page_2.box_1.length);
    } else if (pageID.includes('page-2') && pageID.includes('box-2')) {
        UI.sliderUpdater(content.heroInfo.page_2.box_2, content.heroInfo.page_2.box_2.length);
    } else if (pageID.includes('page-2') && pageID.includes('box-3')) {
        UI.sliderUpdater(content.heroInfo.page_2.box_3, content.heroInfo.page_2.box_3.length);
    } else if (pageID.includes('page-2') && pageID.includes('box-4')) {
        UI.sliderUpdater(content.heroInfo.page_2.box_4, content.heroInfo.page_2.box_4.length);
    } else if (pageID.includes('page-2') && pageID.includes('box-5')) {
        UI.sliderUpdater(content.heroInfo.page_2.box_5, content.heroInfo.page_2.box_5.length);
    } else if (pageID.includes('page-2') && pageID.includes('box-6')) {
        UI.sliderUpdater(content.heroInfo.page_2.box_6, content.heroInfo.page_2.box_6.length);
    } else if (pageID.includes('page-2') && pageID.includes('box-7')) {
        UI.sliderUpdater(content.heroInfo.page_2.box_7, content.heroInfo.page_2.box_7.length);
    } else if (pageID.includes('page-2') && pageID.includes('box-8')) {
        UI.sliderUpdater(content.heroInfo.page_2.box_8, content.heroInfo.page_2.box_8.length);
    } else if (pageID.includes('page-2') && pageID.includes('box-9')) {
        UI.sliderUpdater(content.heroInfo.page_2.box_9, content.heroInfo.page_2.box_9.length);
        // Page-3
    } else if (pageID.includes('page-3') && pageID.includes('box-1')) {
        UI.sliderUpdater(content.heroInfo.page_3.box_1, content.heroInfo.page_3.box_1.length);
    } else if (pageID.includes('page-3') && pageID.includes('box-2')) {
        UI.sliderUpdater(content.heroInfo.page_3.box_2, content.heroInfo.page_3.box_2.length);
    } else if (pageID.includes('page-3') && pageID.includes('box-3')) {
        UI.sliderUpdater(content.heroInfo.page_3.box_3, content.heroInfo.page_3.box_3.length);
    } else if (pageID.includes('page-3') && pageID.includes('box-4')) {
        UI.sliderUpdater(content.heroInfo.page_3.box_4, content.heroInfo.page_3.box_4.length);
    } else if (pageID.includes('page-3') && pageID.includes('box-5')) {
        UI.sliderUpdater(content.heroInfo.page_3.box_5, content.heroInfo.page_3.box_5.length);
    } else if (pageID.includes('page-3') && pageID.includes('box-6')) {
        UI.sliderUpdater(content.heroInfo.page_3.box_6, content.heroInfo.page_3.box_6.length);
    } else if (pageID.includes('page-3') && pageID.includes('box-7')) {
        UI.sliderUpdater(content.heroInfo.page_3.box_7, content.heroInfo.page_3.box_7.length);
    } else if (pageID.includes('page-3') && pageID.includes('box-8')) {
        UI.sliderUpdater(content.heroInfo.page_3.box_8, content.heroInfo.page_3.box_8.length);
    } else if (pageID.includes('page-3') && pageID.includes('box-9')) {
        UI.sliderUpdater(content.heroInfo.page_3.box_9, content.heroInfo.page_3.box_9.length);
        // Page-4
    } else if (pageID.includes('page-4') && pageID.includes('box-1')) {
        UI.sliderUpdater(content.heroInfo.page_4.box_1, content.heroInfo.page_4.box_1.length);
    } else if (pageID.includes('page-4') && pageID.includes('box-2')) {
        UI.sliderUpdater(content.heroInfo.page_4.box_2, content.heroInfo.page_4.box_2.length);
    } else if (pageID.includes('page-4') && pageID.includes('box-3')) {
        UI.sliderUpdater(content.heroInfo.page_4.box_3, content.heroInfo.page_4.box_3.length);
    } else if (pageID.includes('page-4') && pageID.includes('box-4')) {
        UI.sliderUpdater(content.heroInfo.page_4.box_4, content.heroInfo.page_4.box_4.length);
    } else if (pageID.includes('page-4') && pageID.includes('box-5')) {
        UI.sliderUpdater(content.heroInfo.page_4.box_5, content.heroInfo.page_4.box_5.length);
    } else if (pageID.includes('page-4') && pageID.includes('box-6')) {
        UI.sliderUpdater(content.heroInfo.page_4.box_6, content.heroInfo.page_4.box_6.length);
    } else if (pageID.includes('page-4') && pageID.includes('box-7')) {
        UI.sliderUpdater(content.heroInfo.page_4.box_7, content.heroInfo.page_4.box_7.length);
    } else if (pageID.includes('page-4') && pageID.includes('box-8')) {
        UI.sliderUpdater(content.heroInfo.page_4.box_8, content.heroInfo.page_4.box_8.length);
    } else if (pageID.includes('page-4') && pageID.includes('box-9')) {
        UI.sliderUpdater(content.heroInfo.page_4.box_9, content.heroInfo.page_4.box_9.length);
        // Page-5
    } else if (pageID.includes('page-5') && pageID.includes('box-1')) {
        UI.sliderUpdater(content.heroInfo.page_5.box_1, content.heroInfo.page_5.box_1.length);
    } else if (pageID.includes('page-5') && pageID.includes('box-2')) {
        UI.sliderUpdater(content.heroInfo.page_5.box_2, content.heroInfo.page_5.box_2.length);
    } else if (pageID.includes('page-5') && pageID.includes('box-3')) {
        UI.sliderUpdater(content.heroInfo.page_5.box_3, content.heroInfo.page_5.box_3.length);
    } else if (pageID.includes('page-5') && pageID.includes('box-4')) {
        UI.sliderUpdater(content.heroInfo.page_5.box_4, content.heroInfo.page_5.box_4.length);
    } else if (pageID.includes('page-5') && pageID.includes('box-5')) {
        UI.sliderUpdater(content.heroInfo.page_5.box_5, content.heroInfo.page_5.box_5.length);
    } else if (pageID.includes('page-5') && pageID.includes('box-6')) {
        UI.sliderUpdater(content.heroInfo.page_5.box_6, content.heroInfo.page_5.box_6.length);
    } else if (pageID.includes('page-5') && pageID.includes('box-7')) {
        UI.sliderUpdater(content.heroInfo.page_5.box_7, content.heroInfo.page_5.box_7.length);
    } else if (pageID.includes('page-5') && pageID.includes('box-8')) {
        UI.sliderUpdater(content.heroInfo.page_5.box_8, content.heroInfo.page_5.box_8.length);
    } else if (pageID.includes('page-5') && pageID.includes('box-9')) {
        UI.sliderUpdater(content.heroInfo.page_5.box_9, content.heroInfo.page_5.box_9.length);
    }
})(contentCTRL, UICTRL);



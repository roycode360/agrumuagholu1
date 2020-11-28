const contentCTRL = (() => {
    /*****News Contents*****/
    const localNewsInfo = {
        pageOne: {
            headLines: ['Local Church Harvest 2019', 'Expansion Of Church Premises', 'D\'DISCOVERY: One Year Anniversary'],
            date: ['December 19th, 2019', 'October 20th, 2019', 'July 29th, 2019'],
            info: ['Welcome to 2019 harvest service,” said the harvest committee chairman, Justice Uchendu Nworgu, in his...', 'The Assemblies Of God Rumuagholu 1 church has successfully acquired a neighbouring piece of land...', 'D\'DISCOVERY as a programme is the brain child of a man who\'s earnest  desire is to see the youths of this generation take their rightful  place in...']
        },
        pageTwo: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageThree: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageFour: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageFive: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        }
    }
    const sectionalNewsInfo = {
        pageOne: {
            headLines: ['Sectional fellowship and communion service 22/03/20', 'Our Big Daddy Celeberates his 59th Birthday!', 'Abasio: Latest song by gospel artist Fjoez'],
            date: ['March 23rd, 2020', 'December 30th, 2019', 'April 4th, 2020'],
            info: ['The Rumuagholu 1 section of the Assemblies Of God church Nigeria, held their sectional fellowship and communion...', 'On sunday the 29th of December 2019, our father, the sectional leader and senior pastor of the Rumuagholu 1 section Reverend...', 'Port Harcourt\'s uprising gospel artist Friday Joseph, popularly known as Fjoez, few hours ago released yet another thrilling...']
        },
        pageTwo: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageThree: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageFour: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageFive: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        }
    }
    const districtNewsInfo = {
        pageOne: {
            headLines: ['District Women\'s Rally & Evangelism', 'Abasio: Latest song by gospel artist Fjoez', 'Our Big Daddy Celeberates his 59th Birthday!'],
            date: ['March 20th, 2020', 'April 4th, 2020', 'December 30th, 2019'],
            info: ['The exceptional women of the Ikwerre West district of Assemblies of God Nigeria hosted their first district women\'s rally for the...', 'Port Harcourt\'s uprising gospel artist Friday Joseph, popularly known as Fjoez, few hours ago released yet another thrilling...', 'On sunday the 29th of December 2019, our father, the sectional leader and senior pastor of the Rumuagholu 1 section Reverend...']
        },
        pageTwo: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageThree: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageFour: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageFive: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        }
    }
    const genCouncilNewsInfo = {
        pageOne: {
            headLines: ['Evangel vice chancellor wants inclusion of private universities in TETFund support', 'Assemblies Of God church leader prophesies as men’s convention ends', 'Peace Returns To Assemblies Of God Church, Sapele', 'Newly Elected Presbyters of Apapa District.', 'Peniel 2019 tagged "Injury Time"', 'AGC, Victory Temple Owerri, dedicates their new church auditorium.', 'Assemblies of God Nigeria opens it\'s Identity Management System office', 'Rev Dr Chidi Okoroafor receives Leadership Award', 'High Court delivers Judgement in Favour of Assemblies of God Nigeria.'],
            date: ['August 22, 2019', '25 July 2019', 'March 01, 2020', 'Febuary 18th, 2020', '18th November, 2019', 'November 24th, 2019', 'November 13th, 2019', 'August 15th 2019', 'November 15th, 2019'],
            info: ['Prof. Idika Kalu, the Vice Chancellor of Evangel University, Okpoto in Ebonyi has appealed...', 'The National Men’s Convention of the Assemblies of God Church (AGC) in Benin City, Edo State, which...', 'Peace and tranquillity has finally returned to the Assemblies of God Church, Sapele, in Sapele local government Area...', 'The General Superintendent Assemblies of God Nigeria Rev. Dr. Chidi Okoroafor today prayed for the Newly Elected...', 'The Assemblies Of God Church conduced their annual PENIEL program for the year 2019, tagged...', 'The General Superintendent Assemblies of God Nigeria Rev Dr. Chidi Okoroafor on the 24th....', 'The General Superintendent Assemblies of God Nigeria Rev. Dr. Chidi Okoroafor and the three other officers Rev. Pst. Ejikeme Ejim...', 'The General Superintendent, Assemblies of God Nigeria Rev Dr Chidi Okoroafor yesterday received a Leadership Award as...', 'A Landmark Judgment was delivered on the 15th of november, 2019 by Hon Justice Balogun of the Kaduna state High Court...']
        },
        pageTwo: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageThree: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageFour: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageFive: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        }
    }
    const worldNewsInfo = {
        pageOne: {
            headLines: ['Greg Laurie Encourages Congregation to Replace Fear of Coronavirus with Faith', '4-year-old daughter of youth minister killed in tornado devastation', 'Wife of Malaysian pastor who was abducted honored with Women of Courage Award.', 'Church of the Nativity shuttered in Bethlehem after coronavirus infections', 'Bible remains undamaged after truck goes up in flames', 'High school football coach fired for praying loses again in federal court', '350 Nigerian christian killed in the first 2 months of 2020: NGO report', 'Tony Evans shares that his wife saw \'a glimpse of heaven\' before she died', '\'The banker\' stars hope film motivates church leadersto discuss financial literacy inequality'],
            date: [' March 9, 2020', 'March 7, 2020', 'March 4, 2020', 'March 06, 2020', 'March 10, 2020', 'March 06, 2020', 'March 11, 2020', 'January 16, 2020', 'March 06, 2020'],
            info: ['This weekend, pastor Greg Laurie of Harvest Christian Fellowship in Southern California encouraged his congregation....', 'The 4-year-old daughter of a youth minister is among the victims of tornadoes that tore through Tennessee just after...', 'The wife of a Malaysian pastor who was abducted in 2017 was among 12 women honored....', 'The Palestinian Authority announced Thursday that the Church of the Nativity, a site revered by Christians as the birthplace...', 'A Houston-area woman is giving thanks to God not only for her life but also for saving her Bible this week...', 'After the U.S. Supreme Court sent his case back to a lower court last year, a federal judge ruled this week that a school...', 'A Nigerian civil society organization claims that no fewer than 350 Christians have been killed across the West African country since...', 'Pastor Tony Evans recently shared that just before his wife died, she told her family she saw “something outside earth’s realm.”...', 'MEMPHIS, Tenn. — The forthcoming film “The Banker” should motivate the church to address the issues of financial literacy, caring for the...']
        },
        pageTwo: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageThree: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageFour: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        },
        pageFive: {
            headLines: ['D\'discovery celebrates it\'s one year anniversary', 'National harvest day', 'Pastors appreciation day 2019', 'Bible school resumes 29th jan 2020', 'National general council camp', 'Youth National conference', 'Child dedication ceremony', 'Prayer & fasting for 10 Days', 'Christmas concert'],
            date: ['june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'june 29th, 2019', 'febuary 8th, 2020', 'september 5th, 2020', 'january 3rd 2020', 'december 22nd 2019'],
            info: ['We, at the above mentioned platform do not only assist the youths to discover their potentials...', 'we also move a step foward to support them financially and mentally to acquire their desired...', 'skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering...', 'public speaking We, at the above mentioned platform do not only assist the youths to discover', 'their potentials, we also move a step foward to support them financially and mentally to acquire their desired skill...', 'in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound engineering, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally to acquire...', 'their desired skill in any field of their choice. E.g Fashion designing, hair dressing, phone repair, sound ops, public speaking', 'We, at the above mentioned platform do not only assist the youths to discover their potentials, we also move a step foward to support them financially and mentally...']
        }
    }
    const NewsInfo = {
        pageOne: {
            headLines: [localNewsInfo.pageOne.headLines[0], sectionalNewsInfo.pageOne.headLines[0], districtNewsInfo.pageOne.headLines[0], genCouncilNewsInfo.pageOne.headLines[0], worldNewsInfo.pageOne.headLines[0], localNewsInfo.pageOne.headLines[1], sectionalNewsInfo.pageOne.headLines[1], districtNewsInfo.pageOne.headLines[1], genCouncilNewsInfo.pageOne.headLines[1]],
            date: [localNewsInfo.pageOne.date[0], sectionalNewsInfo.pageOne.date[0], districtNewsInfo.pageOne.date[0], genCouncilNewsInfo.pageOne.date[0], worldNewsInfo.pageOne.date[0], localNewsInfo.pageOne.date[1], sectionalNewsInfo.pageOne.date[1], districtNewsInfo.pageOne.date[1], genCouncilNewsInfo.pageOne.date[1]],
            info: [localNewsInfo.pageOne.info[0], sectionalNewsInfo.pageOne.info[0], districtNewsInfo.pageOne.info[0], genCouncilNewsInfo.pageOne.info[0], worldNewsInfo.pageOne.info[0], localNewsInfo.pageOne.info[1], sectionalNewsInfo.pageOne.info[1], districtNewsInfo.pageOne.info[1], genCouncilNewsInfo.pageOne.info[1]]
        },
        pageTwo: {
            headLines: [localNewsInfo.pageTwo.headLines[0], sectionalNewsInfo.pageTwo.headLines[0], districtNewsInfo.pageTwo.headLines[0], genCouncilNewsInfo.pageTwo.headLines[0], worldNewsInfo.pageTwo.headLines[0], localNewsInfo.pageTwo.headLines[1], sectionalNewsInfo.pageTwo.headLines[1], districtNewsInfo.pageTwo.headLines[1], genCouncilNewsInfo.pageTwo.headLines[1]],
            date: [localNewsInfo.pageTwo.date[0], sectionalNewsInfo.pageTwo.date[0], districtNewsInfo.pageTwo.date[0], genCouncilNewsInfo.pageTwo.date[0], worldNewsInfo.pageTwo.date[0], localNewsInfo.pageTwo.date[1], sectionalNewsInfo.pageTwo.date[1], districtNewsInfo.pageTwo.date[1], genCouncilNewsInfo.pageTwo.date[1]],
            info: [localNewsInfo.pageTwo.info[0], sectionalNewsInfo.pageTwo.info[0], districtNewsInfo.pageTwo.info[0], genCouncilNewsInfo.pageTwo.info[0], worldNewsInfo.pageTwo.info[0], localNewsInfo.pageTwo.info[1], sectionalNewsInfo.pageTwo.info[1], districtNewsInfo.pageTwo.info[1], genCouncilNewsInfo.pageTwo.info[1]]
        },
        pageThree: {
            headLines: [localNewsInfo.pageThree.headLines[0], sectionalNewsInfo.pageThree.headLines[0], districtNewsInfo.pageThree.headLines[0], genCouncilNewsInfo.pageThree.headLines[0], worldNewsInfo.pageThree.headLines[0], localNewsInfo.pageThree.headLines[1], sectionalNewsInfo.pageThree.headLines[1], districtNewsInfo.pageThree.headLines[1], genCouncilNewsInfo.pageThree.headLines[1]],
            date: [localNewsInfo.pageThree.date[0], sectionalNewsInfo.pageThree.date[0], districtNewsInfo.pageThree.date[0], genCouncilNewsInfo.pageThree.date[0], worldNewsInfo.pageThree.date[0], localNewsInfo.pageThree.date[1], sectionalNewsInfo.pageThree.date[1], districtNewsInfo.pageThree.date[1], genCouncilNewsInfo.pageThree.date[1]],
            info: [localNewsInfo.pageThree.info[0], sectionalNewsInfo.pageThree.info[0], districtNewsInfo.pageThree.info[0], genCouncilNewsInfo.pageThree.info[0], worldNewsInfo.pageThree.info[0], localNewsInfo.pageThree.info[1], sectionalNewsInfo.pageThree.info[1], districtNewsInfo.pageThree.info[1], genCouncilNewsInfo.pageThree.info[1]]
        },
        pageFour: {
            headLines: [localNewsInfo.pageFour.headLines[0], sectionalNewsInfo.pageFour.headLines[0], districtNewsInfo.pageFour.headLines[0], genCouncilNewsInfo.pageFour.headLines[0], worldNewsInfo.pageFour.headLines[0], localNewsInfo.pageFour.headLines[1], sectionalNewsInfo.pageFour.headLines[1], districtNewsInfo.pageFour.headLines[1], genCouncilNewsInfo.pageFour.headLines[1]],
            date: [localNewsInfo.pageFour.date[0], sectionalNewsInfo.pageFour.date[0], districtNewsInfo.pageFour.date[0], genCouncilNewsInfo.pageFour.date[0], worldNewsInfo.pageFour.date[0], localNewsInfo.pageFour.date[1], sectionalNewsInfo.pageFour.date[1], districtNewsInfo.pageFour.date[1], genCouncilNewsInfo.pageFour.date[1]],
            info: [localNewsInfo.pageFour.info[0], sectionalNewsInfo.pageFour.info[0], districtNewsInfo.pageFour.info[0], genCouncilNewsInfo.pageFour.info[0], worldNewsInfo.pageFour.info[0], localNewsInfo.pageFour.info[1], sectionalNewsInfo.pageFour.info[1], districtNewsInfo.pageFour.info[1], genCouncilNewsInfo.pageFour.info[1]]
        },
        pageFive: {
            headLines: [localNewsInfo.pageFive.headLines[0], sectionalNewsInfo.pageFive.headLines[0], districtNewsInfo.pageFive.headLines[0], genCouncilNewsInfo.pageFive.headLines[0], worldNewsInfo.pageFive.headLines[0], localNewsInfo.pageFive.headLines[1], sectionalNewsInfo.pageFive.headLines[1], districtNewsInfo.pageFive.headLines[1], genCouncilNewsInfo.pageFive.headLines[1]],
            date: [localNewsInfo.pageFive.date[0], sectionalNewsInfo.pageFive.date[0], districtNewsInfo.pageFive.date[0], genCouncilNewsInfo.pageFive.date[0], worldNewsInfo.pageFive.date[0], localNewsInfo.pageFive.date[1], sectionalNewsInfo.pageFive.date[1], districtNewsInfo.pageFive.date[1], genCouncilNewsInfo.pageFive.date[1]],
            info: [localNewsInfo.pageFive.info[0], sectionalNewsInfo.pageFive.info[0], districtNewsInfo.pageFive.info[0], genCouncilNewsInfo.pageFive.info[0], worldNewsInfo.pageFive.info[0], localNewsInfo.pageFive.info[1], sectionalNewsInfo.pageFive.info[1], districtNewsInfo.pageFive.info[1], genCouncilNewsInfo.pageFive.info[1]]
        }
    }


    /** Hero News */ 
    const heroNews = {
        Hnews: {
            heroHeadlines: [localNewsInfo.pageOne.headLines[0], sectionalNewsInfo.pageOne.headLines[0], districtNewsInfo.pageOne.headLines[0], genCouncilNewsInfo.pageOne.headLines[0], worldNewsInfo.pageOne.headLines[0]]
        },
        Hlocal: {
            heroHeadlines: [localNewsInfo.pageOne.headLines[0], localNewsInfo.pageOne.headLines[1], localNewsInfo.pageOne.headLines[2]]
        },
        Hsection: {
            heroHeadlines: [sectionalNewsInfo.pageOne.headLines[0],sectionalNewsInfo.pageOne.headLines[1], sectionalNewsInfo.pageOne.headLines[2]]
        },
        Hdistrict: {
            heroHeadlines: [districtNewsInfo.pageOne.headLines[0], districtNewsInfo.pageOne.headLines[1], districtNewsInfo.pageOne.headLines[2]]
        },
        HgenCouncil: {
            heroHeadlines: [genCouncilNewsInfo.pageOne.headLines[0], genCouncilNewsInfo.pageOne.headLines[1], genCouncilNewsInfo.pageOne.headLines[2], genCouncilNewsInfo.pageOne.headLines[3], genCouncilNewsInfo.pageOne.headLines[4]]
        },
        Hworldwide: {
            heroHeadlines: [worldNewsInfo.pageOne.headLines[0], worldNewsInfo.pageOne.headLines[1], worldNewsInfo.pageOne.headLines[2], worldNewsInfo.pageOne.headLines[3], worldNewsInfo.pageOne.headLines[4]]
        }
    }
    const RTHeadlineInfo = {
        mostRecent: [localNewsInfo.pageOne.headLines[0], sectionalNewsInfo.pageOne.headLines[0], districtNewsInfo.pageOne.headLines[0], genCouncilNewsInfo.pageOne.headLines[0], worldNewsInfo.pageOne.headLines[0]],
        topTrending: [localNewsInfo.pageOne.headLines[2], sectionalNewsInfo.pageOne.headLines[1], districtNewsInfo.pageOne.headLines[1], genCouncilNewsInfo.pageOne.headLines[4], worldNewsInfo.pageOne.headLines[4]]
    }
    return {
        News: NewsInfo,
        localNews: localNewsInfo,
        sectionalNews: sectionalNewsInfo,
        districtNews: districtNewsInfo,
        genCouncilNews: genCouncilNewsInfo,
        worldNews: worldNewsInfo,
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
        worldwide: 'worldwide news',
    }

    const imgDiv = document.getElementById('overlay');
    const headLine = document.getElementById('headline');
    const time = 50;
    flashHeadline = document.querySelector('.news-updates a');

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
                if (div === 'News') {
                    const secs = [DOMstrings.local, DOMstrings.sectional, DOMstrings.district, DOMstrings.genC, DOMstrings.worldwide];
                    // Update headline links in slider
                    flashHeadline.attributes[0].nodeValue = `../News/${secs[next]}/content/page-1/box-1/box-1.htm`;
                    // Update images in slider 
                    resolve(imgDiv.src = `../News/${secs[next]}/content/page-1/box-1/img/slider/slide-0.jpg`);
                } else {
                    // Update headline links in slider
                    flashHeadline.attributes[0].nodeValue = `../${d}/content/page-1/box-${next +1}/box-${next +1}.htm`;
                    // Update images in slider 
                    resolve(imgDiv.src = `../${d}/content/page-1/box-${next +1}/img/slider/slide-0.jpg`);
                }
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

    return {
        updateGeneralText : () => {
            document.querySelector(DOMstrings.Major_Headlines).textContent = 'Major Headlines:';
            document.querySelector(DOMstrings.News_Headlines).textContent = 'News Headlines';
        },
        updateRecent_TrendText: (recentNews, trendingNews, check) => {
            let RTlinks = [];
            let RTlinks1 = document.querySelectorAll(DOMstrings.sideBar_links);
            RTlinks1.forEach(cur => {
                RTlinks.push(cur);
            });
            const Rlinks = RTlinks.slice(5, 10);
            // Updating recent news links
            let start;
            if (check) {
                start = '';
            } else {
                start = '.'
            }
            Rlinks[0].attributes[0].nodeValue = `${start}./local news/content/page-1/box-1/box-1.htm`;
            Rlinks[1].attributes[0].nodeValue = `${start}./sectional news/content/page-1/box-1/box-1.htm`;
            Rlinks[2].attributes[0].nodeValue = `${start}./district news/content/page-1/box-1/box-1.htm`;
            Rlinks[3].attributes[0].nodeValue = `${start}./general council news/content/page-1/box-1/box-1.htm`;
            Rlinks[4].attributes[0].nodeValue = `${start}./worldwide news/content/page-1/box-1/box-1.htm`;
            
            const Tlinks = RTlinks.slice(10, 15);
            // Updating trending news links
            Tlinks[0].attributes[0].nodeValue = `${start}./local news/content/page-1/box-3/box-3.htm`;
            Tlinks[1].attributes[0].nodeValue = `${start}./sectional news/content/page-1/box-2/box-2.htm`;
            Tlinks[2].attributes[0].nodeValue = `${start}./district news/content/page-1/box-2/box-2.htm`;
            Tlinks[3].attributes[0].nodeValue = `${start}./general council news/content/page-1/box-5/box-5.htm`;
            Tlinks[4].attributes[0].nodeValue = `${start}./worldwide news/content/page-1/box-5/box-5.htm`;

            // Updating the Recent & Trending texts in sidebar right
            Rlinks.forEach((cur, indx, arr) => {
                arr[indx].textContent = recentNews[indx];
            });
            Tlinks.forEach((cur, indx, arr) => {
                arr[indx].textContent = trendingNews[indx];
            });
        },
        updateNewsBox: (headlines, date, info, page, div) => {
            let imgID = 1;
            let Ctrl = 0;
            const divs = [DOMstrings.local,DOMstrings.sectional,DOMstrings.district,DOMstrings.genC,DOMstrings.worldwide,DOMstrings.local,DOMstrings.sectional,DOMstrings.district,DOMstrings.genC];
            const num = ['1', '1', '1', '1', '1', '2', '2', '2', '2']
            for (var i = 0; i < headlines.length; i++) {
                if (div === 'News') {
                    document.querySelectorAll(DOMstrings.box_img)[Ctrl].attributes[0].nodeValue = `./${divs[Ctrl]}/content/page-${page}/box-${num[Ctrl]}/img/slider/slide-0.jpg`;
                } else {
                    document.querySelectorAll(DOMstrings.box_img)[Ctrl].attributes[0].nodeValue = `../${div}/content/page-${page}/box-${imgID}/img/slider/slide-0.jpg`;
                }
                document.querySelectorAll(DOMstrings.box_headlines)[Ctrl].textContent = headlines[Ctrl];
                document.querySelectorAll(DOMstrings.box_date)[Ctrl].textContent = date[Ctrl];
                document.querySelectorAll(DOMstrings.box_info)[Ctrl].textContent = info[Ctrl];
                Ctrl++;
                imgID++;
            }
        },
        sliderUpdater: (sec, heading, end) => {
            let count = 1;
            let x = 100;
            let check = false;
            // const i = 0;
            async function slider () {
                headLine.textContent = heading[0];
                if (sec === 'News') {
                    flashHeadline.attributes[0].nodeValue = `../News/${DOMstrings.local}/content/page-1/box-1/box-1.htm`;
                    imgDiv.src = `../News/${DOMstrings.local}/content/page-1/box-1/img/slider/slide-0.jpg`;
                } else {
                    flashHeadline.attributes[0].nodeValue = `../${sec}/content/page-1/box-1/box-1.htm`;
                    imgDiv.src = `../${sec}/content/page-1/box-1/img/slider/slide-0.jpg`;
                }
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
            const secs = [DOMstrings.local, DOMstrings.sectional, DOMstrings.district, DOMstrings.genC, DOMstrings.worldwide]
            document.getElementById('btn-r').addEventListener('click',() => {
                x = -100;
                check = true;
                count++;
                if(count > (heading.length-1)) {
                    count = 0;
                } else {
                    count = count;
                }
                // count === 0 ? count = 1 : count = count;
                if (sec === 'News') {
                    // Update headline links in slider
                    flashHeadline.attributes[0].nodeValue = `../News/${secs[count]}/content/page-1/box-1/box-1.htm`;

                    imgDiv.src = `../News/${secs[count]}/content/page-1/box-1/img/slider/slide-0.jpg`
                } else {
                    // Update headline links in slider
                    flashHeadline.attributes[0].nodeValue = `../${sec}/content/page-1/box-${count +1}/box-${count +1}.htm`;

                    imgDiv.src = `../${sec}/content/page-1/box-${count +1}/img/slider/slide-0.jpg`;
                }
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
                // count === 0 ? count = 1 : count = count;
                if (sec ==='News') {
                    // Update headline links in slider
                    flashHeadline.attributes[0].nodeValue = `../News/${secs[count]}/content/page-1/box-1/box-1.htm`;

                    imgDiv.src = `../News/${secs[count]}/content/page-1/box-1/img/slider/slide-0.jpg`
                } else {
                    // Update headline links in slider
                    flashHeadline.attributes[0].nodeValue = `../${sec}/content/page-1/box-${count +1}/box-${count +1}.htm`;
                    
                    imgDiv.src = `../${sec}/content/page-1/box-${count +1}/img/slider/slide-0.jpg`;
                }
                headLine.textContent = heading[count];
            });
        },
        linkNewsBoxes: (pageNum) => {
            const boxArr = document.querySelectorAll(' h4 a');
            boxArr.forEach((cur, indx, arr) => {
                cur.attributes[0].nodeValue = `./content/page-${pageNum}/box-${indx +1}/box-${indx +1}.htm`;
            });
        },
        newsPageBoxfn: (page) => {
            const boxArr = document.querySelectorAll(' h4 a');
            boxArr[0].attributes[0].nodeValue = `./local news/content/${page}/box-1/box-1.htm`;
            boxArr[1].attributes[0].nodeValue = `./sectional news/content/${page}/box-1/box-1.htm`;
            boxArr[2].attributes[0].nodeValue = `./district news/content/${page}/box-1/box-1.htm`;
            boxArr[3].attributes[0].nodeValue = `./general council news/content/${page}/box-1/box-1.htm`;
            boxArr[4].attributes[0].nodeValue = `./worldwide news/content/${page}/box-1/box-1.htm`;
            boxArr[5].attributes[0].nodeValue = `./local news/content/${page}/box-2/box-2.htm`;
            boxArr[6].attributes[0].nodeValue = `./sectional news/content/${page}/box-2/box-2.htm`;
            boxArr[7].attributes[0].nodeValue = `./district news/content/${page}/box-2/box-2.htm`;
            boxArr[8].attributes[0].nodeValue = `./general council news/content/${page}/box-2/box-2.htm`;
        },
        getDOMstrings: () => {
            return DOMstrings;
        }
    }
})();


const webCTRL = ((content, UI) => {
    DOMstr = UI.getDOMstrings();
    //1. Update Major Headlines & News Headlines text:
    UI.updateGeneralText();
    //2. Get the page ID:
    const pageID = document.getElementsByTagName('title')[0].baseURI;
    //3. Update recent and Trending news section 
    UI.updateRecent_TrendText(content.RTheadline.mostRecent, content.RTheadline.topTrending, pageID.includes('News/n'));
    //3. Updates news box for each section and page:
    // News Section
    if (pageID.includes(DOMstr.page1) && pageID.includes('News/n')) {
        UI.updateNewsBox(content.News.pageOne.headLines, content.News.pageOne.date, content.News.pageOne.info, '1', DOMstr.News);
        UI.sliderUpdater(DOMstr.News, content.heroInfo.Hnews.heroHeadlines, content.heroInfo.Hnews.heroHeadlines.length);
        UI.newsPageBoxfn('page-1')
    } else if (pageID.includes(DOMstr.page2) && pageID.includes('News/n')) {
        UI.updateNewsBox(content.News.pageTwo.headLines, content.News.pageTwo.date, content.News.pageTwo.info, '2', DOMstr.News);
        UI.sliderUpdater(DOMstr.News, content.heroInfo.Hnews.heroHeadlines, content.heroInfo.Hnews.heroHeadlines.length);
        UI.newsPageBoxfn('page-2')
    } else if (pageID.includes(DOMstr.page3) && pageID.includes('News/n')) {
        UI.updateNewsBox(content.News.pageThree.headLines, content.News.pageThree.date, content.News.pageThree.info, '3', DOMstr.News);
        UI.sliderUpdater(DOMstr.News, content.heroInfo.Hnews.heroHeadlines, content.heroInfo.Hnews.heroHeadlines.length);
        UI.newsPageBoxfn('page-3')
    } else if (pageID.includes(DOMstr.page4) && pageID.includes('News/n')) {
        UI.updateNewsBox(content.News.pageFour.headLines, content.News.pageFour.date, content.News.pageFour.info, '4', DOMstr.News);
        UI.sliderUpdater(DOMstr.News, content.heroInfo.Hnews.heroHeadlines, content.heroInfo.Hnews.heroHeadlines.length)
        UI.newsPageBoxfn('page-4')
    } else if (pageID.includes(DOMstr.page5) && pageID.includes('News/n')) {
        UI.updateNewsBox(content.News.pageFive.headLines, content.News.pageFive.date, content.News.pageFive.info, '5', DOMstr.News);
        UI.sliderUpdater(DOMstr.News, content.heroInfo.Hnews.heroHeadlines, content.heroInfo.Hnews.heroHeadlines.length)
        UI.newsPageBoxfn('page-5')
        // Local News Section
    } else if (pageID.includes(DOMstr.page1) && pageID.includes('local')) {
        UI.updateNewsBox(content.localNews.pageOne.headLines, content.localNews.pageOne.date, content.localNews.pageOne.info, '1', DOMstr.local);
        UI.sliderUpdater(DOMstr.local, content.localNews.pageOne.headLines, content.localNews.pageOne.headLines.length)
        UI.linkNewsBoxes('1');
    } else if (pageID.includes(DOMstr.page2) && pageID.includes('local')) {
        UI.updateNewsBox(content.localNews.pageTwo.headLines, content.localNews.pageTwo.date, content.localNews.pageTwo.info, '2', DOMstr.local);
        UI.sliderUpdater(DOMstr.local, content.localNews.pageTwo.headLines, content.localNews.pageOne.headLines.length)
        UI.linkNewsBoxes('2');
    }  else if (pageID.includes(DOMstr.page3) && pageID.includes('local')) {
        UI.updateNewsBox(content.localNews.pageThree.headLines, content.localNews.pageThree.date, content.localNews.pageThree.info, '3', DOMstr.local);
        UI.sliderUpdater(DOMstr.local, content.localNews.pageThree.headLines, content.localNews.pageOne.headLines.length)
        UI.linkNewsBoxes('3');
    }  else if (pageID.includes(DOMstr.page4) && pageID.includes('local')) {
        UI.updateNewsBox(content.localNews.pageFour.headLines, content.localNews.pageFour.date, content.localNews.pageFour.info, '4', DOMstr.local);
        UI.sliderUpdater(DOMstr.local, content.localNews.pagefour.headLines, content.localNews.pageOne.headLines.length)
        UI.linkNewsBoxes('4');
    }  else if (pageID.includes(DOMstr.page5) && pageID.includes('local')) {
        UI.updateNewsBox(content.localNews.pageFive.headLines, content.localNews.pageFive.date, content.localNews.pageFive.info, '5', DOMstr.local);
        UI.sliderUpdater(DOMstr.local, content.localNews.pagefive.headLines, content.localNews.pageOne.headLines.length)
        UI.linkNewsBoxes('5');
        // Sectional News Section
    } else if (pageID.includes(DOMstr.page1) && pageID.includes('sectional')) {
        UI.updateNewsBox(content.sectionalNews.pageOne.headLines, content.sectionalNews.pageOne.date, content.sectionalNews.pageOne.info, '1', DOMstr.sectional);
        UI.sliderUpdater(DOMstr.sectional, content.sectionalNews.pageOne.headLines, content.sectionalNews.pageOne.headLines.length)
        UI.linkNewsBoxes('1');
    } else if (pageID.includes(DOMstr.page2) && pageID.includes('sectional')) {
        UI.updateNewsBox(content.sectionalNews.pageTwo.headLines, content.sectionalNews.pageTwo.date, content.sectionalNews.pageTwo.info, '2', DOMstr.sectional);
        UI.sliderUpdater(DOMstr.sectional, content.sectionalNews.pageTwo.headLines, content.sectionalNews.pageOne.headLines.length)
        UI.linkNewsBoxes('2');
    }  else if (pageID.includes(DOMstr.page3) && pageID.includes('sectional')) {
        UI.updateNewsBox(content.sectionalNews.pageThree.headLines, content.sectionalNews.pageThree.date, content.sectionalNews.pageThree.info, '3', DOMstr.sectional);
        UI.sliderUpdater(DOMstr.sectional, content.sectionalNews.pageThree.headLines, content.sectionalNews.pageOne.headLines.length)
        UI.linkNewsBoxes('3');
    }  else if (pageID.includes(DOMstr.page4) && pageID.includes('sectional')) {
        UI.updateNewsBox(content.sectionalNews.pageFour.headLines, content.sectionalNews.pageFour.date, content.sectionalNews.pageFour.info, '4', DOMstr.sectional);
        UI.sliderUpdater(DOMstr.sectional, content.sectionalNews.pageFour.headLines, content.sectionalNews.pageOne.headLines.length)
        UI.linkNewsBoxes('4');
    }  else if (pageID.includes(DOMstr.page5) && pageID.includes('sectional')) {
        UI.updateNewsBox(content.sectionalNews.pageFive.headLines, content.sectionalNews.pageFive.date, content.sectionalNews.pageFive.info, '5', DOMstr.sectional);
        UI.sliderUpdater(DOMstr.sectional, content.sectionalNews.pageFive.headLines, content.sectionalNews.pageOne.headLines.length)
        UI.linkNewsBoxes('5');
        // District News Section
    } else if (pageID.includes(DOMstr.page1) && pageID.includes('district')) {
        UI.updateNewsBox(content.districtNews.pageOne.headLines, content.districtNews.pageOne.date, content.districtNews.pageOne.info, '1', DOMstr.district);
        UI.sliderUpdater(DOMstr.district, content.districtNews.pageOne.headLines, content.districtNews.pageOne.headLines.length)
        UI.linkNewsBoxes('1');
    } else if (pageID.includes(DOMstr.page2) && pageID.includes('district')) {
        UI.updateNewsBox(content.districtNews.pageTwo.headLines, content.districtNews.pageTwo.date, content.districtNews.pageTwo.info, '2', DOMstr.district);
        UI.sliderUpdater(DOMstr.district, content.districtNews.pageTwo.headLines, content.districtNews.pageOne.headLines.length)
        UI.linkNewsBoxes('2');
    }  else if (pageID.includes(DOMstr.page3) && pageID.includes('district')) {
        UI.updateNewsBox(content.districtNews.pageThree.headLines, content.districtNews.pageThree.date, content.districtNews.pageThree.info, '3', DOMstr.district);
        UI.sliderUpdater(DOMstr.district, content.districtNews.pageThree.headLines, content.districtNews.pageOne.headLines.length)
        UI.linkNewsBoxes('3');
    }  else if (pageID.includes(DOMstr.page4) && pageID.includes('district')) {
        UI.updateNewsBox(content.districtNews.pageFour.headLines, content.districtNews.pageFour.date, content.districtNews.pageFour.info, '4', DOMstr.district);
        UI.sliderUpdater(DOMstr.district, content.districtNews.pageFour.headLines, content.districtNews.pageOne.headLines.length)
        UI.linkNewsBoxes('4');
    }  else if (pageID.includes(DOMstr.page5) && pageID.includes('district')) {
        UI.updateNewsBox(content.districtNews.pageFive.headLines, content.districtNews.pageFive.date, content.districtNews.pageFive.info, '5', DOMstr.district);
        UI.sliderUpdater(DOMstr.district, content.districtNews.pageFive.headLines, content.districtNews.pageOne.headLines.length)
        UI.linkNewsBoxes('5');
        // General Council News Section
    } else if (pageID.includes(DOMstr.page1) && pageID.includes('general')) {
        UI.updateNewsBox(content.genCouncilNews.pageOne.headLines, content.genCouncilNews.pageOne.date, content.genCouncilNews.pageOne.info, '1', DOMstr.genC);
        UI.sliderUpdater(DOMstr.genC, content.genCouncilNews.pageOne.headLines, content.genCouncilNews.pageOne.headLines.length)
        UI.linkNewsBoxes('1');
    } else if (pageID.includes(DOMstr.page2) && pageID.includes('general')) {
        UI.updateNewsBox(content.genCouncilNews.pageTwo.headLines, content.genCouncilNews.pageTwo.date, content.genCouncilNews.pageTwo.info, '2', DOMstr.genC);
        UI.sliderUpdater(DOMstr.genC, content.genCouncilNews.pageTwo.headLines, content.genCouncilNews.pageOne.headLines.length)
        UI.linkNewsBoxes('2');
    }  else if (pageID.includes(DOMstr.page3) && pageID.includes('general')) {
        UI.updateNewsBox(content.genCouncilNews.pageThree.headLines, content.genCouncilNews.pageThree.date, content.genCouncilNews.pageThree.info, '3', DOMstr.genC);
        UI.sliderUpdater(DOMstr.genC, content.genCouncilNews.pageThree.headLines, content.genCouncilNews.pageOne.headLines.length)
        UI.linkNewsBoxes('3');
    }  else if (pageID.includes(DOMstr.page4) && pageID.includes('general')) {
        UI.updateNewsBox(content.genCouncilNews.pageFour.headLines, content.genCouncilNews.pageFour.date, content.genCouncilNews.pageFour.info, '4', DOMstr.genC);
        UI.sliderUpdater(DOMstr.genC, content.genCouncilNews.pageFour.headLines, content.genCouncilNews.pageOne.headLines.length)
        UI.linkNewsBoxes('4');
    }  else if (pageID.includes(DOMstr.page5) && pageID.includes('general')) {
        UI.updateNewsBox(content.genCouncilNews.pageFive.headLines, content.genCouncilNews.pageFive.date, content.genCouncilNews.pageFive.info, '5', DOMstr.genC);
        UI.sliderUpdater(DOMstr.genC, content.genCouncilNews.pageFive.headLines, content.genCouncilNews.pageOne.headLines.length)
        UI.linkNewsBoxes('5');
        // World Wide News Section
    } else if (pageID.includes(DOMstr.page1) && pageID.includes('worldwide')) {
        UI.updateNewsBox(content.worldNews.pageOne.headLines, content.worldNews.pageOne.date, content.worldNews.pageOne.info, '1', DOMstr.worldwide);
        UI.sliderUpdater(DOMstr.worldwide, content.worldNews.pageOne.headLines, content.worldNews.pageOne.headLines.length)
        UI.linkNewsBoxes('1');
    } else if (pageID.includes(DOMstr.page2) && pageID.includes('worldwide')) {
        UI.updateNewsBox(content.worldNews.pageTwo.headLines, content.worldNews.pageTwo.date, content.worldNews.pageTwo.info, '2', DOMstr.worldwide);
        UI.sliderUpdater(DOMstr.worldwide, content.worldNews.pageTwo.headLines, content.worldNews.pageOne.headLines.length)
        UI.linkNewsBoxes('2');
    }  else if (pageID.includes(DOMstr.page3) && pageID.includes('worldwide')) {
        UI.updateNewsBox(content.worldNews.pageThree.headLines, content.worldNews.pageThree.date, content.worldNews.pageThree.info, '3', DOMstr.worldwide);
        UI.sliderUpdater(DOMstr.worldwide, content.worldNews.pageThree.headLines, content.worldNews.pageOne.headLines.length)
        UI.linkNewsBoxes('3');
    }  else if (pageID.includes(DOMstr.page4) && pageID.includes('worldwide')) {
        UI.updateNewsBox(content.worldNews.pageFour.headLines, content.worldNews.pageFour.date, content.worldNews.pageFour.info, '4', DOMstr.worldwide);
        UI.sliderUpdater(DOMstr.worldwide, content.worldNews.pageFour.headLines, content.worldNews.pageOne.headLines.length)
        UI.linkNewsBoxes('4');
    }  else if (pageID.includes(DOMstr.page5) && pageID.includes('worldwide')) {
        UI.updateNewsBox(content.worldNews.pageFive.headLines, content.worldNews.pageFive.date, content.worldNews.pageFive.info, '5', DOMstr.worldwide);
UI.sliderUpdater(DOMstr.worldwide, content.worldNews.pageFive.headLines, content.worldNews.pageOne.headLines.length)
        UI.linkNewsBoxes('5');
    }
})(contentCTRL, UICTRL);
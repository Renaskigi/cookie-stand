'use strict';
const times = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total'];
//Create Store Objects for Daily Sales Projections
function Store (name, minHrlyCust,maxHrlyCust,aveCookiesPerCust,storeCookiesPerDay,totalSales,operatingHours, elementID) {
    this.name = name;
    this.minHrlyCust = minHrlyCust;
    this.maxHrlyCust = maxHrlyCust;
    this.aveCookiesPerCust = aveCookiesPerCust;
    this.storeCookiesPerDay = storeCookiesPerDay;
    this.totalSales = totalSales;
    this.operatingHours = operatingHours;
    this.elementID = elementID;
}

const pDXAirport = new Store ('PDX Airport', 23, 65, 6.3, [], 0, ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total'], 'pdx');

const pioneerSquare = new Store ('Pioneer Square', 3, 24, 1.2, [], 0, ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total'], 'pioneer');

const powells = new Store ('Powells', 11, 38, 3.7, [], 0, ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total'], 'powells');

const stJohns = new Store ('St. John\'s', 20, 38, 2.4, [], 0, ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total'], 'stjohns');

const waterfront = new Store ('Waterfront', 2, 16, 4.6, [], 0, ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total'], 'waterfront');

Store.prototype.rndmCustHr = function() {
    const min = Math.ceil(this.minHrlyCust);
    const max = Math.floor(this.maxHrlyCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

Store.prototype.cookiesPerHr = function() {
    const cookiesPerHr = Math.floor(this.aveCookiesPerCust * this.rndmCustHr());
    return cookiesPerHr;
};

Store.prototype.fifteenhr = function() {
    for (let i = 0; i < 15; i++) {
        this.storeCookiesPerDay.push(this.cookiesPerHr());
        this.totalSales += this.storeCookiesPerDay[i];
    }
    this.storeCookiesPerDay.push(this.totalSales);
    return this.storeCookiesPerDay;
};

// Store.prototype.renderRow = function () {
//     const tbody = document.


function headCreator () {
    for (let i = 0; i < times.length; i++) {
        const tr = document.getElementById('headBoxes');
        const th = document.createElement('th');
        th.textContent = [times[i]];
        tr.appendChild(th);
    }
};

headCreator();
//     for (let i = 0; i < 16; i++) {
//         const listItem = document.createElement('');
//         listItem.textContent = this.operatingHours[i] + this.storeCookiesPerDay[i] + ' cookies';
//         const ul = document.getElementById(this.elementID);
//         ul.appendChild (listItem);
//     }
// };

// const storeNames = [pDXAirport, pioneerSquare, powells, stJohns, waterfront];

// for (let i = 0; i < storeNames.length; i++ ) {
//     storeNames[i].rndmCustHr();
//     storeNames[i].cookiesPerHr();
//     storeNames[i].fifteenhr();
//     storeNames[i].renderLi();
// };

// Store.prototype.renderRow = function () {
//     // find the parent
//     const table = document.querySelector('#tablehere');

//     // create the element, add content
//     const tHead = document.createElement('thead');
//     const 
//     titleTd.textContent = this.title;
//     authorTd.textContent = this.author;
//     hasReadTd.textContent = this.hasRead; 

//     // append to parent
//     table.appendChild(tHead);
//     tr.appendChild(authorTd);
//     tr.appendChild(hasReadTd);

//     tbody.appendChild(tr);
// };
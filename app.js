'use strict';

const times = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total'];

const form = document.querySelector('form');

//Create Store Objects for Daily Sales Projections
function Store (name, minHrlyCust,maxHrlyCust,aveCookiesPerCust) {
    this.name = name;
    this.minHrlyCust = minHrlyCust;
    this.maxHrlyCust = maxHrlyCust;
    this.aveCookiesPerCust = aveCookiesPerCust;
    this.storeCookiesPerDay = [];
    this.totalSales = 0;
}

const pDXAirport = new Store ('PDX Airport', 23, 65, 6.3);

const pioneerSquare = new Store ('Pioneer Square', 3, 24, 1.2);

const powells = new Store ('Powells', 11, 38, 3.7);

const stJohns = new Store ('St. John\'s', 20, 38, 2.4);

const waterfront = new Store ('Waterfront', 2, 16, 4.6);

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

//Create Table Head Row

function headCreator () {
    for (let i = 0; i < times.length; i++) {
        const tr = document.getElementById('headBoxes');
        const th = document.createElement('th');
        th.textContent = times[i];
        tr.appendChild(th);
    }
};

headCreator();

//Create Table Main Rows

Store.prototype.rowCreator = function () {
    const tbod = document.getElementById('bodyBoxes');
    const tr = document.createElement('tr');
    const storeTitle = document.createElement('td');
    storeTitle.textContent = this.name;
    tr.appendChild(storeTitle);
    for (let i = 0; i < times.length; i++) {
        const td = document.createElement('td');
        td.textContent = this.storeCookiesPerDay[i];
        tr.appendChild(td);
        tbod.appendChild(tr);
    }
};

//Create Footer Row

//Call Methods
const storeNames = [pDXAirport, pioneerSquare, powells, stJohns, waterfront];

for (let i = 0; i < storeNames.length; i++ ) {
    storeNames[i].rndmCustHr();
    storeNames[i].cookiesPerHr();
    storeNames[i].fifteenhr();
    storeNames[i].rowCreator();
};

form.addEventListener('submit', function () {
    event.preventDefault();
    const newStoreName = document.getElementById('newStoreName').value;
    const minCust = document.getElementById('minCust').value;
    const maxCust = document.getElementById('maxCust').value;
    const avgCookiesPerCust = document.getElementById('avgCookiesPerCust').value;
    console.log('the new store name is', this.newStoreName.value);
    console.log('the minimum customers is', this.minCust.value);
    const newStore = new Store (newStoreName, minCust, maxCust, avgCookiesPerCust);
    newStore.rndmCustHr();
    newStore.cookiesPerHr();
    newStore.fifteenhr();
    newStore.rowCreator();
});
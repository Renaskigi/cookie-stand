'use strict';

//Create Store Objects for Daily Sales Projections
const storePDXAirport = {
    minHrlyCust: 23,
    maxHrlyCust: 65,
    avgCookiesPerCust: 6.3,
    storeCookiesPerDay: [],
    totalPDXSales: 0,
    operatingHours: ['6am: ', '7am:', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: '],
    rndmCustHr: function() {
        let min = Math.ceil(this.minHrlyCust);
        let max = Math.floor(this.maxHrlyCust);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    cookiesPerHr: function() {
        let cookiesPerHr = Math.floor(this.avgCookiesPerCust * this.rndmCustHr());
        return cookiesPerHr;
    },
    fifteenhr: function() {
        for (let i = 0; i < 13; i++) {
            this.storeCookiesPerDay.push(this.cookiesPerHr());
            this.totalPDXSales += this.storeCookiesPerDay[i];
        }
        return this.storeCookiesPerDay;
    },
    createLi: function () {
        for (let i = 0; i < 13; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = this.operatingHours[i] + this.storeCookiesPerDay[i];
            const ul = document.getElementById('pdx');
            ul.appendChild (listItem);
        }
    }
};

storePDXAirport.rndmCustHr();
storePDXAirport.cookiesPerHr();
storePDXAirport.fifteenhr();
storePDXAirport.createLi();

const storePioneerSquare = {
    minHrlyCust: 3,
    maxHrlyCust: 24,
    avgCookiesPerCust: 1.2,
    storeCookiesPerDay: [],
    totalPioneerSales: 0,
    rndmCustHr: function() {
        let min = Math.ceil(this.minHrlyCust);
        let max = Math.floor(this.maxHrlyCust);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    cookiesPerHr: function() {
        let cookiesPerHr = Math.floor(this.avgCookiesPerCust * this.rndmCustHr());
        return cookiesPerHr;
    },
    fifteenhr: function() {
        for (let i = 0; i < 15; i++) {
            this.storeCookiesPerDay.push(this.cookiesPerHr());
            this.totalPioneerSales += this.storeCookiesPerDay[i];
        }
        return this.storeCookiesPerDay;
    },
    createLi: function () {
        for (let i = 0; i < 15; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = this.storeCookiesPerDay[i];
            const ul = document.getElementById('pioneer');
            ul.appendChild (listItem);
        }
    }

};

storePioneerSquare.rndmCustHr();
storePioneerSquare.cookiesPerHr();
storePioneerSquare.fifteenhr();
storePioneerSquare.createLi();

const storePowells = {
    minHrlyCust: 11,
    maxHrlyCust: 38,
    avgCookiesPerCust: 3.7,
    storeCookiesPerDay: [],
    totalPowellSales: 0,
    rndmCustHr: function() {
        let min = Math.ceil(this.minHrlyCust);
        let max = Math.floor(this.maxHrlyCust);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    cookiesPerHr: function() {
        let cookiesPerHr = Math.floor(this.avgCookiesPerCust * this.rndmCustHr());
        return cookiesPerHr;
    },
    fifteenhr: function() {
        for (let i = 0; i < 15; i++) {
            this.storeCookiesPerDay.push(this.cookiesPerHr());
            this.totalPowellSales += this.storeCookiesPerDay[i];
        }
        return this.storeCookiesPerDay;
    },
    createLi: function () {
        for (let i = 0; i < 15; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = this.storeCookiesPerDay[i];
            const ul = document.getElementById('powells');
            ul.appendChild (listItem);
        }
    }
};

storePowells.rndmCustHr();
storePowells.cookiesPerHr();
storePowells.fifteenhr();
storePowells.createLi();

const storeStJohns = {
    minHrlyCust: 20,
    maxHrlyCust: 38,
    avgCookiesPerCust: 2.3,
    storeCookiesPerDay: [],
    totalStJohnsSales: 0,
    rndmCustHr: function() {
        let min = Math.ceil(this.minHrlyCust);
        let max = Math.floor(this.maxHrlyCust);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    cookiesPerHr: function() {
        let cookiesPerHr = Math.floor(this.avgCookiesPerCust * this.rndmCustHr());
        return cookiesPerHr;
    },
    fifteenhr: function() {
        for (let i = 0; i < 15; i++) {
            this.storeCookiesPerDay.push(this.cookiesPerHr());
            this.totalStJohnsSales += this.storeCookiesPerDay[i];
        }
        return this.storeCookiesPerDay;
    },
    createLi: function () {
        for (let i = 0; i < 15; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = this.storeCookiesPerDay[i];
            const ul = document.getElementById('stjohns');
            ul.appendChild (listItem);
        }
    }
};

storeStJohns.rndmCustHr();
storeStJohns.cookiesPerHr();
storeStJohns.fifteenhr();
storeStJohns.createLi();

const storeWaterfront = {
    minHrlyCust: 2,
    maxHrlyCust: 16,
    avgCookiesPerCust: 4.6,
    storeCookiesPerDay: [],
    totalWaterfrontSales: 0,
    rndmCustHr: function() {
        let min = Math.ceil(this.minHrlyCust);
        let max = Math.floor(this.maxHrlyCust);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    cookiesPerHr: function() {
        let cookiesPerHr = Math.floor(this.avgCookiesPerCust * this.rndmCustHr());
        return cookiesPerHr;
    },
    fifteenhr: function() {
        for (let i = 0; i < 15; i++) {
            this.storeCookiesPerDay.push(this.cookiesPerHr());
            this.totalWaterfrontSales += this.storeCookiesPerDay[i];
        }
        return this.storeCookiesPerDay;
    },
    createLi: function () {
        for (let i = 0; i < 15; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = this.storeCookiesPerDay[i];
            const ul = document.getElementById('waterfront');
            ul.appendChild (listItem);
        }
    }
};
storeWaterfront.rndmCustHr();
storeWaterfront.cookiesPerHr();
storeWaterfront.fifteenhr();
storeWaterfront.createLi();
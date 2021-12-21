// File: Timelog.js
// Author: S. Sigman   Date: 10/28/2020
//
// This file contains the main functionality for the
// time log application.
//
// Modification:  
//  

var logApp;

$(function () {
    logApp = new App("DUCS Time Logger")
    logApp.initialize();
});

class App {
    constructor (name) {
        this.title = name;
    }

    get getTitle() {
        return this.title;
    }

    initialize () {
        // code to initialize the app goes here
        // ie.  add the listeners here
        console.log("Application Initialized.")
    }
}
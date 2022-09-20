import _ from 'lodash';

// scripts
// import * as mainJS from './scripts/main.js';
import  './scripts/main.js';

// base html templates
import header from './static-components/header.html';
import footer from './static-components/footer.html';
import main from './static-components/main.html';
import { helloWorld } from './scripts/main.js';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

function setHeader(){
    const tempHeader = document.createElement('header');
    tempHeader.id = 'header';
    tempHeader.innerHTML = header;
    return tempHeader;
}

function setFooter(){
    const tempFooter = document.createElement('footer');
    tempFooter.id = 'footer';
    tempFooter.innerHTML = footer;
    return tempFooter;
}

function createMain(){
    const tempMain = document.createElement('main');
    tempMain.id = "main";
    tempMain.innerHTML = main;
    return tempMain;
}

document.body.prepend(setHeader());
document.body.appendChild(createMain());
document.body.appendChild(setFooter());

// mainJS.helloWorld();
helloWorld();

// setup main body section down here!
// document.getElementById('main')
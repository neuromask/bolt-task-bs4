import 'bootstrap';
import "@scss/styles.scss";
require('bootstrap-icons/font/bootstrap-icons.css');
const $ = require('jquery');  

import logoImg from "@img/logo.svg";
let filename = logoImg.substring(logoImg.lastIndexOf('/') + 1);

$('#logoHolder').html(`<svg><use xlink:href='assets/img/${filename}#img'></use></svg>`);

let message = "Hello Webpack";
console.log(` Message is: ${message}`);

$('.dropdown-toggle').dropdown();

$('#lang-dropdown-items li').on('click', function() {
    $('#dropdown-title').html($(this).find('a').html());
});
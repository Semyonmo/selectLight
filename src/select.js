import {info} from './core';
import template from './template.html'
import './select.styl'

/**
 * Default select
 */
export class Default {
    constructor({
        //options
        selectElement: s,
        parentElement: p
        }) {

        //set options
        this._selectElement = s;
        this._parentElement = p;

        //init
        this.hideDefaultHtml();
        this.createNewHtml();
        this.setEvents();
    }

    hideDefaultHtml() {
        this._selectElement.style.display = 'none';
    }

    createNewHtml() {
        this._parentElement.innerHTML = template;
    }

    setEvents() {
        var that = this;

        that._parentElement.querySelector('.select__field').onfocus = function () {
            that._parentElement.querySelector('.select__items').style.display = 'block';
        };

        that._parentElement.querySelector('.select__field').onblur = function () {
            that._parentElement.querySelector('.select__items').style.display = 'none';
        };
    }
}


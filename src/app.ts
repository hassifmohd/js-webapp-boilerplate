import { Howl, Howler } from 'howler'; //example: import library from node-modules
import { randomInt, toTime } from './calculator' //example: import function from another .js file

export default class App {
    //example: in order to define the "Howl" data type, you need to run "npm i --save-dev @types/howler"
    sound: Howl;
    timer: NodeJS.Timer;
    counter: number;

    constructor() {
        this.counter = 0;
        this.timer = null;
        this.sound = new Howl({
            src: ['sounds/drum.wav']
        });
    }

    documentReady() {
        const _this = this;

        //attach the onclick into the button
        document.querySelector(`.generate-quote`).addEventListener("click", function () {
            _this.playSound();
            _this.modalMessage();
        }, false);

        //reset the timer when you close the model
        $("#ok-modal").on("hidden.bs.modal", function () {
            clearInterval(_this.timer);
            document.getElementById('ok-modal-timer').innerHTML = '0:00:00';
            _this.counter = 0;
        });
    }

    /**
     * Popup random quote together with timer
     */
    modalMessage() {
        //note, i tried to make quotes.json editable after build but its not working
        const quotes: Array<string> = require("./data/quotes.json"); //load all the quotes

        const quote = quotes[randomInt(quotes.length)]; //get random quote

        document.getElementById('ok-modal-body').innerHTML = quote;

        const _this = this; //had to do this if you have nested functions

        this.timer = setInterval(function () {
            _this.counter++;
            document.getElementById('ok-modal-timer').innerHTML = toTime(_this.counter);
        }, 1000);

        ($('#ok-modal') as any).modal('show'); //example of using bootstrap element without jQuery
    }

    /**
     * Play sound example
     */
    playSound() {
        this.sound.play();
    }
}

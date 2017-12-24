var carousel = {

    init: function () {
        document.addEventListener('DOMContentLoaded', this._onContentLoaded.bind(this));

    },


    _onContentLoaded: function () {

        nextSlide.moveSlides();
        moveButtons.init();
    }


};
carousel.init();


var nextSlide = {
    _currentSlide: 0,
    _timeoutMs: 2000,

    init: function () {

        this.moveSlides(1);
    },

    moveSlides: function (v) {
        var images;
        this.clearTime();
        this.setТime();

        if (!v) {
            return
        }

        images = document.querySelectorAll('.slides .slide');

        images[this._currentSlide].className = "slide";

        console.log(images);
        console.log(images.length);


        this._currentSlide += v || 0;


        if (this._currentSlide >= images.length) {

            this._currentSlide -= images.length;
        }

        if (this._currentSlide < 0) {
            this._currentSlide += images.length;
        }

        images[this._currentSlide].className = "slide show";
    },

    setТime: function () {
        this._timeout = setTimeout(this.moveSlides.bind(this, 1), this._timeoutMs);
    },

    clearTime: function () {
        clearTimeout(this._timeout);
    }

};

var moveButtons = {

    init: function () {
        this._rightButtonDomElem = document.querySelector('.right-button');
        this._leftButtonDomElem = document.querySelector('.left-button');

        this.buttonEvents();
    },

    buttonEvents: function () {
        var rightButton = this._rightButtonDomElem;
        var leftButton = this._leftButtonDomElem;

        rightButton.addEventListener("click", this._moveRight);
        leftButton.addEventListener("click", this._moveLeft);
    },

    _moveRight: function () {
        nextSlide.moveSlides(1);
    },

    _moveLeft: function () {
        nextSlide.moveSlides(-1);
    }
};

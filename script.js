(function() {
    const keys = {
        65: "A",
        83: "S",
        68: "D",
        70: "F",
        71: "G",
        72: "H",
        74: "J",
        75: "K",
    };

    function sound(eventKey) {
        let ring = document.getElementById("sound-" + eventKey);
        ring.currentTime = 0;
        ring.play();

        document.getElementById("key-" + eventKey).classList.add('keyClick');
        setTimeout(function () {
            document.getElementById("key-" + eventKey).classList.remove('keyClick');
        }, 100);
    }


    window.addEventListener("keydown", function (event) {
        var charCode = (typeof event.which == "number") ? event.which : event.keyCode;
        let eventKey = (keys[charCode]);

        if(!eventKey) {
            return;
        }
        else {
            sound(eventKey);
        }
    });

    window.addEventListener("mousedown", function (event) {
        let eventClassName = event.target.className == 'key' || event.target.className == 'piano-key';
        let eventKey =  event.target.textContent;

        eventKey = eventKey.replace(/\s/g, '');

        if (eventClassName == false) {
            return;
        } else {
            sound(eventKey);
        }
    });

})();



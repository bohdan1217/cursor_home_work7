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

    let parent = document.querySelector('.piano');
    let parentAudio =  document.querySelector('.audio');

    Object.keys(keys).forEach(function(key, id) {
        let newChild = '<div id="key-'+ keys[key] +'" class="piano-key"><p class="key">' + keys[key] + '</p></div>';
        let newChildAudio = '<audio id="sound-'+ keys[key] +'"><source src="samples/'+ ++id +'.mp3" type="audio/mpeg"></audio>';
        parent.insertAdjacentHTML('beforeend', newChild);
        parentAudio.insertAdjacentHTML('beforeend', newChildAudio);
    });

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
        let charCode = (typeof event.which == "number") ? event.which : event.keyCode;
        let eventKey = (keys[charCode]);
        eventKey ? sound(eventKey) : null
    });

    window.addEventListener("mousedown", function (event) {
        let eventClassName = event.target.className == 'key' || event.target.className == 'piano-key';
        let eventKey =  event.target.textContent;
        eventKey = eventKey.replace(/\s/g, '');
        eventClassName ? sound(eventKey) : null
    });

})();



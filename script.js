(function() {
    const pianoKeys = new Map([
        [65,'A'],
        [83,'S'],
        [68,'D'],
        [70,'F'],
        [71,'G'],
        [72,'H'],
        [74,'J'],
        [75,'K'],
    ]);

    let parent = document.querySelector('.piano');
    let parentAudio =  document.querySelector('.audio');
    let start = 0;

    pianoKeys.forEach( (value, key, map) => {
        let newChild = '<div id="key-'+ value +'" class="piano-key"><p class="key">' + value + '</p></div>';
        let newChildAudio = '<audio id="sound-'+ value +'"><source src="samples/'+ ++start +'.mp3" type="audio/mpeg"></audio>';
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
        let eventKey = (pianoKeys.get(charCode));

        eventKey ? sound(eventKey) : null
    });

    window.addEventListener("mousedown", function (event) {
        let eventClassName = event.target.className == 'key' || event.target.className == 'piano-key';
        let eventKey =  event.target.textContent;
        eventKey = eventKey.replace(/\s/g, '');
        eventClassName ? sound(eventKey) : null
    });

})();



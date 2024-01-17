var inputEl = document.getElementById("magicInput");
var btnEl = document.getElementById("magicBtn");
var gif1El = document.getElementById("magicGif1");
var gif2El = document.getElementById("magicGif2");
var audioSuccess = document.getElementById("audioSuccess");
var audioFailure = document.getElementById("audioFailure");

var isGifPlaying = false;

function hideGifOnMusicEnd() {
    gif1El.style.display = "none";
    gif2El.style.display = "none";
    isGifPlaying = false;

    audioSuccess.pause(); 
    audioFailure.pause();

    audioSuccess.currentTime = 0; 
    audioFailure.currentTime = 0;
}

audioSuccess.addEventListener("ended", hideGifOnMusicEnd);
audioFailure.addEventListener("ended", hideGifOnMusicEnd);

btnEl.addEventListener("click", function () {
    if (isGifPlaying) {
        hideGifOnMusicEnd(); 
    }

    var isSevenLetterWord = inputEl.value.trim().length === 7;

    var digitSum = Array.from(inputEl.value.trim()).reduce(function (acc, digit) {
        return acc + parseInt(digit, 10);
    }, 0);

    if(inputEl.value.length == 0) {
        alert("Please enter a valid input");
    }
    else if (isSevenLetterWord || digitSum === 7) {
        gif1El.style.display = "block";
        gif2El.style.display = "none";

        audioSuccess.play();
        inputEl.value = "";
        isGifPlaying = true;
    } else {
        gif1El.style.display = "none";
        gif2El.style.display = "block";

        audioFailure.play();
        inputEl.value = "";
        isGifPlaying = true;
    }
});

inputEl.addEventListener("click", function () {
    if (isGifPlaying) {
        hideGifOnMusicEnd(); 
    }
});
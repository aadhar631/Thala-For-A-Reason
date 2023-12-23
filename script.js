var inputEl = document.getElementById("magicInput");
var btnEl = document.getElementById("magicBtn");
var gif1El = document.getElementById("magicGif1");
var gif2El = document.getElementById("magicGif2");
var audioSuccess = document.getElementById("audioSuccess");
var audioFailure = document.getElementById("audioFailure");

function hideGifOnMusicEnd() {
    gif1El.style.display = "none";
    gif2El.style.display = "none";
}

audioSuccess.addEventListener("ended", hideGifOnMusicEnd);
audioFailure.addEventListener("ended", hideGifOnMusicEnd);

btnEl.addEventListener("click", function () {
    var isSevenLetterWord = inputEl.value.trim().length === 7;

    var digitSum = Array.from(inputEl.value.trim()).reduce(function (acc, digit) {
        return acc + parseInt(digit, 10);
    }, 0);

    if (isSevenLetterWord || digitSum === 7) {
        gif1El.style.display = "block";
        gif2El.style.display = "none";

        audioSuccess.play();
        inputEl.value = "";
    } else {
        gif1El.style.display = "none";
        gif2El.style.display = "block";

        audioFailure.play();
        inputEl.value = "";
    }
});

var playground = document.getElementById("playground"),
    playgroundButton = document.getElementById("playgroundButton"),
    target = document.getElementById('target'),
    resultDiv = document.getElementById('resultDiv'),
    dismiss = document.getElementById('dismiss')
    ;

var getStats = function () {
    if (playground.value !== '') {// if the textarea is not empty
        var playString = playground.value,
            playArray = Array.from(playString),
            wordCount = 1,
            sentenceCount = 0,
            spaceCount = 0
            ;

        playArray.forEach(function (i) {
            if (i === ' ') {
                wordCount++;
                spaceCount++
            }
            if (i === '.' || i === '!' || i === '?') sentenceCount++;
        });

        var avgWords = wordCount / sentenceCount;

        target.innerHTML = "<h3>Text Stats</h3><p>Total words: " + wordCount + "</p><br/><p>Number of sentences: " + sentenceCount + "</p><br/><p>Average words per sentence: " + avgWords + "</p><br/><p>Number of spaces: " + spaceCount + "</p><br/>"
        resultDiv.style.display = 'inline';

    } else {
        target.innerHTML = "<h3>You haven't typed anything!</h3><p>Type some text into the text box and click 'Get Stats'.</p>"
        resultDiv.style.display = 'inline';
    }
}

playgroundButton.addEventListener('click', getStats);
dismiss.addEventListener('click', function () {
    resultDiv.style.display = 'none';
})
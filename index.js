document.addEventListener('DOMContentLoaded', function() {
    const word = document.getElementById('word')
    const dice = document.getElementById('dice')

    function roll() {
        dice.setAttribute('disabled', true);
        fetch('/nounlist.txt', { cache: "force-cache" })
            .then(response => response.text())
            .then(text => {
                const nounlist = text.split('\n')
                const noun = nounlist[Math.floor(Math.random() * nounlist.length)]
                word.innerText = noun
                dice.removeAttribute('disabled')
            })
            .catch(err => console.error(err))
    }

    dice.addEventListener('click', roll)

    roll()
})

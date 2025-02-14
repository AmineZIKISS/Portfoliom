const scriptURL = 'https://script.google.com/macros/s/AKfycbxb5vHXAL_P8PbsHH3URnOTxDc8wUA5PZxSyeqnu66g_m7wHC6_ox0CCLWiQWUusyYx/exec';
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                        console.log('Success!', response)
                        let thanks = document.getElementById('thanks');
                        thanks.classList.add('thanksopen');
                })
                .catch(error => {
                        console.error('Error!')
                        let thanks = document.getElementById('Error');
                        thanks.classList.add('Errorsopen');
                })
})
// Form two
const scriptURL2 = 'https://script.google.com/macros/s/AKfycbzRTUEej_Zh3ZYo3o0S7XDjhoPcer4v0UJRe_F0tC_0mWbRvPJm9F1a2WCH4WXyAIi9/exec';
const form2 = document.forms['submit-to-google-sheet2'];
form2.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL2, { method: 'POST', body: new FormData(form2) })
                .then(response => {
                        console.log('Success!', response)
                        let thanks = document.getElementById('thanks');
                        thanks.classList.add('thanksopen')
                        title = document.querySelector("span#loading2");
                        title.style.display = 'none';
                        title = document.querySelector("span#loading1");
                        title.style.display = 'none';
                        document.getElementsByClassName("submit")[0].style.opacity='1';
                        document.getElementsByClassName("submit")[1].style.opacity='1';
                })
                .catch(error => {
                        console.error('Error!')
                        let thanks = document.getElementById('Error');
                        thanks.classList.add('Errorsopen');
                        title = document.querySelector("span#loading2");
                        title.style.display = 'none';
                        title = document.querySelector("span#loading1");
                        title.style.display = 'none';
                        document.getElementsByClassName("submit")[0].style.opacity='1';
                        document.getElementsByClassName("submit")[1].style.opacity='1';

                })
})

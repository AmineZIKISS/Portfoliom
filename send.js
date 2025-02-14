const scriptURL = 'https://script.google.com/macros/s/AKfycby-6np26fYlU44x8ysLPiqtFqAtmXtdH7zcq1-UcpuHvpKanYKl2ZjyVPBJJpDDoEg2/exec';
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
const scriptURL2 = 'https://script.google.com/macros/s/AKfycbxqMFcORVI2wTSorrrMpsfBH8-rBETBLUfC2F9DxW-QsZX1yL1pURPNtT6gE0DbxynC/exec';
const form2 = document.forms['submit-to-google-sheet2'];
console.log(form2);
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

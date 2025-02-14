// Functions
function menu() {
        title = document.getElementById('ol');
        title.style.left = '0';
        title = document.getElementById('icon');
        title.style.display = 'none';
        title = document.getElementById('icon2');
        title.style.display = 'flex';

}
function finimenu() {
        title = document.getElementById('ol');
        title.style.left = '-100%';
        title = document.getElementById('icon2');
        title.style.display = 'none';
        window.icon.style.display = 'flex';

}
function okthanks() {
        let thanks = document.getElementById('thanks');
        thanks.classList.remove('thanksopen');
        title = document.querySelector("span#loading2");
        title.style.display = 'none';
        title = document.querySelector("span#loading1");
        title.style.display = 'none';
        document.getElementsByClassName("submit")[0].style.opacity='1';
        document.getElementsByClassName("submit")[1].style.opacity='1';
}
function okrefrech() {
        let thanks = document.getElementById('Error');
        thanks.classList.remove('Errorsopen');
        title = document.querySelector("span#loading2");
        title.style.display = 'none';
        title = document.querySelector("span#loading1");
        title.style.display = 'none';
}
function list() {
        title = document.getElementById('ol');
        title.style.left = '-100%';
        title = document.getElementById('icon2');
        title.style.display = 'none';
        if (screen.width >= 768) {
                window.icon.style.display = 'none';
        }
        else {
                window.icon.style.display = 'flex';
        }
}
function loading() {
        title = document.querySelector("span#loading2");
        title.style.display = 'block';
        title = document.querySelector("span#loading1");
        title.style.display = 'block';
        document.getElementsByClassName("submit")[0].style.opacity='0.5'
        document.getElementsByClassName("submit")[1].style.opacity='0.5'
}


// add the 
thenumber=0;
function addcomment(){
        console.log("yes")
        let addoneclient=document.createElement("div");
        addoneclient.className='oneclient';
        
        let thei=document.createElement("i");
        thei.className='fa-solid fa-quote-left';
        
        let thebr=document.createElement("br");
        
        let theh3=document.createElement("h3");
        var h3inner=document.getElementById('name').value;
        let theh3con=document.createTextNode(h3inner)
        theh3.appendChild(theh3con);

        let thelabel=document.createElement("label");
        var letter=h3inner[0].toUpperCase();
        let thelabelcon=document.createTextNode(letter);
        thelabel.appendChild(thelabelcon);
        
        let thep=document.createElement("p");
        var textarea=document.getElementById('textarea').value;
        let thepcon=document.createTextNode(textarea)
        thep.appendChild(thepcon);
        
        let thei0=document.createElement("i");
        thei0.className='fa-solid fa-star iadd';
        
        let thei1=document.createElement("i");
        thei1.className='fa-solid fa-star iadd';
        
        let thei2=document.createElement("i");
        thei2.className='fa-solid fa-star iadd';
        
        let thei3=document.createElement("i");
        thei3.className='fa-solid fa-star iadd';

        let thei4=document.createElement("i");
        thei4.className='fa-regular fa-star iadd';

        if(thenumber==1){
                thei0.className='fa-solid fa-star iadd';
                thei1.className='fa-regular fa-star iadd';
                thei2.className='fa-regular fa-star iadd';
                thei3.className='fa-regular fa-star iadd';
                thei4.className='fa-regular fa-star iadd';
        }
        else if(thenumber==2){
                thei0.className='fa-solid fa-star iadd';
                thei1.className='fa-solid fa-star iadd';
                thei2.className='fa-regular fa-star iadd';
                thei3.className='fa-regular fa-star iadd';
                thei4.className='fa-regular fa-star iadd';
        }
        else if(thenumber==3){
                thei0.className='fa-solid fa-star iadd';
                thei1.className='fa-solid fa-star iadd';
                thei2.className='fa-solid fa-star iadd';
                thei3.className='fa-regular fa-star iadd';
                thei4.className='fa-regular fa-star iadd';
        }
        else if(thenumber==4){
                thei0.className='fa-solid fa-star iadd';
                thei1.className='fa-solid fa-star iadd';
                thei2.className='fa-solid fa-star iadd';
                thei3.className='fa-solid fa-star iadd';
                thei4.className='fa-regular fa-star iadd';
        }
        else if(thenumber==5){
                thei0.className='fa-solid fa-star iadd';
                thei1.className='fa-solid fa-star iadd';
                thei2.className='fa-solid fa-star iadd';
                thei3.className='fa-solid fa-star iadd';
                thei4.className='fa-solid fa-star iadd';
        }
        
        
        addoneclient.appendChild(thei);
        addoneclient.appendChild(thebr);
        addoneclient.appendChild(thelabel);
        addoneclient.appendChild(theh3);
        addoneclient.appendChild(thep);
        addoneclient.appendChild(thei0);
        addoneclient.appendChild(thei1);
        addoneclient.appendChild(thei2);
        addoneclient.appendChild(thei3);
        addoneclient.appendChild(thei4);
        document.getElementById("parent").appendChild(addoneclient);
        document.getElementById("name").value='';
        document.getElementById("email").value='';
        document.getElementById("textarea").value='';
        document.getElementById('i1').style.display='inline';
        document.getElementById('i12').style.display='none';
        document.getElementById('i2').style.display='inline';
        document.getElementById('i22').style.display='none';
        document.getElementById('i3').style.display='inline';
        document.getElementById('i32').style.display='none';
        document.getElementById('i4').style.display='inline';
        document.getElementById('i42').style.display='none';
        document.getElementById('i5').style.display='inline';
        document.getElementById('i52').style.display='none';
}
function i1(){
        document.getElementById('i1').style.display='none';
        document.getElementById('i12').style.display='inline';
        document.getElementById('i2').style.display='inline';
        document.getElementById('i22').style.display='none';
        document.getElementById('i3').style.display='inline';
        document.getElementById('i32').style.display='none';
        document.getElementById('i4').style.display='inline';
        document.getElementById('i42').style.display='none';
        document.getElementById('i5').style.display='inline';
        document.getElementById('i52').style.display='none';
        thenumber=1
}
function i2(){
        document.getElementById('i1').style.display='none';
        document.getElementById('i12').style.display='inline';
        document.getElementById('i2').style.display='none';
        document.getElementById('i22').style.display='inline';
        document.getElementById('i3').style.display='inline';
        document.getElementById('i32').style.display='none';
        document.getElementById('i4').style.display='inline';
        document.getElementById('i42').style.display='none';
        document.getElementById('i5').style.display='inline';
        document.getElementById('i52').style.display='none';
        thenumber=2
}
function i3(){
        document.getElementById('i1').style.display='none';
        document.getElementById('i12').style.display='inline';
        document.getElementById('i2').style.display='none';
        document.getElementById('i22').style.display='inline';
        document.getElementById('i3').style.display='none';
        document.getElementById('i32').style.display='inline';
        document.getElementById('i4').style.display='inline';
        document.getElementById('i42').style.display='none';
        document.getElementById('i5').style.display='inline';
        document.getElementById('i52').style.display='none';
        var thenumber=3
}
function i4(){
        document.getElementById('i1').style.display='none';
        document.getElementById('i12').style.display='inline';
        document.getElementById('i2').style.display='none';
        document.getElementById('i22').style.display='inline';
        document.getElementById('i3').style.display='none';
        document.getElementById('i32').style.display='inline';
        document.getElementById('i4').style.display='none';
        document.getElementById('i42').style.display='inline';
        document.getElementById('i5').style.display='inline';
        document.getElementById('i52').style.display='none';
        thenumber=4
}
function i5(){
        document.getElementById('i1').style.display='none';
        document.getElementById('i12').style.display='inline';
        document.getElementById('i2').style.display='none';
        document.getElementById('i22').style.display='inline';
        document.getElementById('i3').style.display='none';
        document.getElementById('i32').style.display='inline';
        document.getElementById('i4').style.display='none';
        document.getElementById('i42').style.display='inline';
        document.getElementById('i5').style.display='none';
        document.getElementById('i52').style.display='inline';
        thenumber=5
}
// if the number is 130 number
function ifthenumer(){
        title=document.getElementById("textarea");
        number=title.value;
        number=number.length;
        document.getElementById("first").innerText=number;
        if(number>=130 && number<=150){
                title=document.getElementById("number");
                title.style.color='green';
        }
        else{
                title=document.getElementById("number");
                title.style.color='rgb(253, 65, 65)';
        }

}
function isEmpty(){
        let name=document.getElementById('name').value;
        let email=document.getElementById('email').value;
        let textareaa=document.getElementById('textarea').value;
        var num=textareaa.length;
        if(name!=''&& email!='' && num>=129 && num<=151){
                title=document.getElementById("button");
                title.removeAttribute('disabled')
                title.style.opacity='1';
                title.classList.add('button')
        }
        else{
                title=document.getElementById("button");
                // title.setAttribute('disabled');
                title.style.opacity='.5';
                title.classList.add('button')
        }
}
function textareaa(){
        title=document.getElementById('number');
        title.style.display='block';
}
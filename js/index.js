var icon = document.getElementById('moon')
var lay = document.getElementById('lay');
var list = document.querySelectorAll('#list')
var heading = document.getElementById("heading");
var social = document.querySelectorAll(".social-icon");
var dash = document.getElementById('dash');

function changeImage(){
    imgsrc = document.getElementById('moon').src;
    if( imgsrc.indexOf("icon/moon.png") != -1 ){
        console.log(list);
        icon.src = "icon/sun.png";
        document.body.style.backgroundColor = 'white';
        list.forEach(i => {
            i.style.color = '#000000';
        })
        lay.style.color = 'black';
        heading.style.color = 'rgb(41, 38, 62)';
        dash.style.color = 'black';
    }else{
        icon.src = "icon/moon.png";
        document.body.style.backgroundColor = 'rgb(41, 38, 62)';
        lay.style.color = 'white';
        list.forEach(i => {
            i.style.color = 'white';
        })
        heading.style.color = 'rgb(130, 187, 207)';
        dash.style.color = 'white';
    }   
}
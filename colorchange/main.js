const btn = document.querySelector('.btn');
const bg = document.querySelector('.bg')
const colorTxt = document.querySelector('.color')


btn.addEventListener("click", function(){
   const cor = geraCor();
    setaCor(cor);
})


function geraCor(){
 let rgb =[];
 rgb[0] = Math.floor(Math.random() * (155 - 1) + 1);
 rgb[1] = Math.floor(Math.random() * (155 - 1) + 1);
 rgb[2] = Math.floor(Math.random() * (155 - 1) + 1);
 return rgb;
}
function setaCor(cor){
   bg.style.backgroundColor = `rgb(${cor[0]}, ${cor[1]}, ${cor[2]})`;
   colorTxt.innerText = `RGB(${cor[0]}, ${cor[1]}, ${cor[2]})`;
}
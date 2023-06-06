//карусель
let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');
let images = document.querySelectorAll('#gallery .photos img');
let i = 0; // номер текущей картинки, на экране
images[i].style.display = 'none'; // прячем текущую картину
i++ ; // увеличиваем переменную i на единицу
if(i >= images.length){
    i = 0; // переменная i равна 0
}
btn_prev.onclick = function(){
images[i].style.display = 'none';
i = i - 1;
if(i < 0){
    i = images.length - 1;
}
images[i].style.display = 'block';
} 
//---------Set-Variables-To-Geme--------------------->
let start_game             = document.querySelector('.start_game');
let game_container         = document.querySelector('.game_container');
let fa_volume_off          = document.querySelector('.fa-volume-off');
let fa_volume_up           = document.querySelector('.fa-volume-up');
let game_entro             = document.querySelector('.game_entro');
let increase               = 0;
let img_game_pop           = ["images/back-img.jpg","images/back2.jpg","images/back.jpg"];
let game                   = document.querySelector('.game');
let qusetions              = document.querySelector('.qusetions');
let qusetions_input        = document.querySelector('.qusetions input');
let number_of_score        = document.querySelector('.number_of_score');
let up_icon       = document.querySelector('.up_icon');

//-------------Show_Container_Of_The_Game-------------->
start_game.addEventListener('click',(e) => {
    game_container.style.transform = "scale(1,1)";
    game_entro.play();
    e.target.style.display = "none";
})
//-------------Entro_Contolls-------------->
fa_volume_up.onclick = () => {
    game_entro.pause();
    fa_volume_up.classList.remove('active')
    fa_volume_off.classList.add('active')
}
//-------------Entro_Contolls-------------->
fa_volume_off.onclick = () => {
    game_entro.play();
    fa_volume_off.classList.remove('active')
    fa_volume_up.classList.add('active')
}
//-------------Entro_Contolls-Scroll-Event-------------->
window.onscroll = () => {

    if(scrollY > 4500){
        start_game.classList.add('btn_animation');
    }else{
        start_game.classList.remove('btn_animation');
    }
    scrollY != 0 ? up_icon.classList.add('active_up'):up_icon.classList.remove('active_up');
}
//-------------Baner_Games_Event_Entrols-------------->
window.addEventListener('load', imgGameSlide())
//-------------Baner_Games_Event_Entrols-Function-------------->
function imgGameSlide(){
    if(increase == img_game_pop.length-1){
        increase = 0;
    }else{
        increase++;
    }
    game.style.backgroundImage = `url(${img_game_pop[increase]})`;
    setTimeout(imgGameSlide,5000)
}
//----------------Stander_Massage------------------------>
    //---------------Submit_Event_Draw_Ui------------------------>
    qusetions.addEventListener('submit',darwGameUi);
    //---------------Submit_Event_Function_Draw_Ui------------------------>
    function darwGameUi(e){
        qusetions.innerHTML = 'سوف يتم صنع اللعبه قريبا انشاء الله';//----Default_Massage------>
        e.preventDefault();
    }

    
// ---------------Up_Icon_Event_Scroll_Of_Window------------------>
up_icon.onclick = () => {
    scroll({
        top:0,
        left:0
    })
}
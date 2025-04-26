function toggleButtonGame(){
    const button=document.querySelector('.js-btn1');
    // console.log(button);
    if(!button.classList.contains('is-toggled1')){
        button.classList.add('is-toggled1')
    }
    else{
        button.classList.remove('is-toggled1')
    }
}
function toggleButtonMusic(){
    const button=document.querySelector('.js-btn2');
    // console.log(button);
    if(!button.classList.contains('is-toggled2')){
        button.classList.add('is-toggled2')
    }
    else{
        button.classList.remove('is-toggled2')
    }
}
function toggleButtonTech(){
    const button=document.querySelector('.js-btn3');
    // console.log(button);
    if(!button.classList.contains('is-toggled3')){
        button.classList.add('is-toggled3')
    }
    else{
        button.classList.remove('is-toggled3')
    }
}

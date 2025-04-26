function toggleButton(btn){
    console.log('button');
    console.log(btn);
    const button=document.querySelector(btn);
    console.log(button);
    if(!button.classList.contains('is-toggled')){
        console.log('is tohgle check');
        console.log(btn);
        turnOffPreviousButton();
        button.classList.add('is-toggled')
    }
    else{
        button.classList.remove('is-toggled')
    }
}
function turnOffPreviousButton(){
    console.log('in turnOffPreviousButton');
    // console.log(btn);
    const previousBtn=document.querySelector('is-toggled');
    if(previousBtn){
        button.classList.remove('is-toggled')

    }

}



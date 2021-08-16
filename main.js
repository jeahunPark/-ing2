const mainText=document.querySelectorAll('.main_sidebar a');
const tabText=document.querySelectorAll('#main_text>article')

console.log(tabText);

for(let i=0;i<mainText.length;i++){
    mainText[i].addEventListener('click',function(e){
        e.preventDefault();
        let orgTarget=e.target.getAttribute('href')
        let tabTarget=orgTarget.replace('#','');

        for(let j=0;j<tabText.length;j++){
            tabText[j].style.display='none';
        }
        document.getElementById(tabTarget).style.display='block';
    })
}





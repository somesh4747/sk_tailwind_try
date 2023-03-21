const toggle_btn = document.getElementById('ham')
const nav = document.getElementById('nav')
const hamhh = document.querySelectorAll('.ham-hh')


toggle_btn.addEventListener('click',()=>{
    if(nav.classList.contains('h-20')){
        for(let i of hamhh){
            i.classList.add('cross')
        }
        nav.classList.remove('h-20')
        nav.classList.toggle('h-[320px]')
    }else{
        for(let i of hamhh){
            i.classList.remove('cross')
        }
        nav.classList.remove('h-[320px]')
        nav.classList.toggle('h-20')
    }
    
})
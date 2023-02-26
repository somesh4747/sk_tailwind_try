const toggle_btn = document.getElementById('toggle')
const nav = document.getElementById('nav-right')

toggle_btn.addEventListener('click',()=>{
    if(nav.classList.contains('flex')){
        
        nav.classList.remove('flex')
        nav.classList.toggle('hidden')
    }else{
        
        nav.classList.remove('hidden')
        nav.classList.toggle('flex')
    }
    
})
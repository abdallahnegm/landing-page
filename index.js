let stars =document.getElementById('star')
let moon =document.getElementById('moon')
let mountains3 =document.getElementById('mountains3')
let mountains4 =document.getElementById('mountains4')
let river5 =document.getElementById('river5')
let boat6 =document.getElementById('boat6')
let negm =document.querySelector('.negm')
let main =document.querySelector('.main')
let bar =document.getElementById('bar')
let items =document.querySelector('.items')
window.onscroll=function(){
    let value= scrollY
    stars.style.left=value +'px'
    moon.style.top=value*2 +'px'
    mountains3.style.top=value*1.5 +'px'
    river5.style.top=value +'px'
    boat6.style.top=value +'px'
    boat6.style.left=value*3 +'px'
    negm.style.fontSize= value + 'px'
    if(scrollY >= 65){
        negm.style.fontSize= 65 + 'px'
        negm.style.position='fixed'
        if(scrollY >= 487){
            negm.style.display='none'
        }else{
            negm.style.display='block'
            
        }
        if(scrollY >= 127){
            main.style.background='linear-gradient(#376281,#10001f)'
        }else{
            main.style.background='linear-gradient(#200016,#10001f)'
        }
    }
}

bar.onclick=function(){
    if(items.style.display === 'flex'){
        items.style.display='none'
        // items.classList.toggle('hide')
        console.log("ffff")
    }else{
        items.style.display="flex"
        // items.classList.toggle('hide')
        console.log("ggg")
    }
}
let hr=document.querySelector(".hr")
let min=document.querySelector(".min")
let sec=document.querySelector(".sec")
let am=document.querySelector(".am")

setInterval(()=>{
    let d=new Date()
    hr.innerHTML=d.getHours()
    min.innerHTML=d.getMinutes()
    sec.innerHTML=d.getSeconds()
    // let hours=d.getHours()
    if(hr>12){
        am.innerHTML="PM"
    }
    else{
        am.innerHTML="AM"
    }
},100)



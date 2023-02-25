//js for navbar scroll effect
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>10) 
}) //a class called window scroll is called by executing the above function when scrollY > 0.

//js to display selected FAQ paragraph
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        //change icon
        const icon =faq.querySelector('.faq__icon i');
        if(icon.className==='fa-solid fa-plus'){
            icon.className='fa-solid fa-minus';
        }
        else{
            icon.className='fa-solid fa-plus';
        }
    })
})
//nav menu toggle button show/hide 
const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");

openBtn.addEventListener('click',()=>{
    menu.style.display ="flex";
    closeBtn.style.display="inline-block"
    openBtn.style.display="none";
})


const closeNav=() => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click',closeNav );

const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon')
const hbmenu = document.querySelector('#hb-menu')
const navItems = document.querySelectorAll("nav-item")

navToggle.addEventListener(
    "click", () => {
        nav.classList.toggle('open');
        navIcon.forEach(icon => {
            icon.classList.toggle('hidden');
        }
        )
    }
)

nav.addEventListener("mouseup", function(event){
    if(event.target && document.body.clientWidth <= 720){
        nav.classList.toggle('open');
        navIcon.forEach(icon => {
            icon.classList.toggle('hidden');
        }
        )
    }
})

window.addEventListener("resize", () => {
    if(document.body.clientWidth > 720){
        nav.classList.remove('open');
        navIcon.forEach(icon => {
            icon.classList.add('hidden')
        })
        hbmenu.classList.remove('hidden')
    }
})
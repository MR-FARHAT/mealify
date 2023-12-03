
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll('.nav-links li a')
    let secton = document.querySelectorAll(".section")
    console.log(secton)
    function Activlink() {
        secton.forEach(function (sec, i) {
            let rect = sec.getBoundingClientRect();
            if (rect.top <= 50 && rect.bottom >= 50) {
                links.forEach(function (link) {
                    link.classList.remove('active')
                })
                links[i].classList.add('active')
            }
        })
    }
    window.addEventListener('scroll', Activlink)
    Activlink()
})

let sun = document.getElementById('sun');
var moon = document.getElementById('moon');
let menu = document.getElementById('menu1');
let menu_list = document.getElementById('menu-list');
let xmenu = document.getElementById('xmenu');
console.log(menu_list)

moon.addEventListener('click', function () {
    document.body.classList.toggle("night-mode");
})
moon.onclick = function () {
    document.body.classList.toggle(".night-mode");
    sun.style.display = "block";
    sun.style.color = "#fff";
    this.style.display = "none";

    if (sun.style.display = "block") {
        sun.onclick = function () {
            sun.style.display = "none"
            moon.style.display = "block"
            if (document.body.classList = ".night-mode") {
                document.body.classList.remove(".night-mode")
            }

        }
    }
}
menu.onclick = function () {
    menu_list.classList.toggle("show");
}
xmenu.onclick = function () {
    menu_list.classList.remove("show");
}
let links = document.querySelectorAll('.nav-links li a')
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        menu_list.classList.remove("show");
    }
}





// let nav = document.getElementById('nav-bg');


// window.onload = function () {
//     sun.style.display = "none"
// }
// if (moon.style.display = "block") {
//     moon.onclick = function () {
//         sun.style.display = "block"
//         sun.style.color = "white"
//         moon.style.display = "none"
//         nav.style.backgroundColor = "black"
//         for (let i = 0; i <= btn.length; i++) {
//             btn[i].style.backgroundColor = '#c17e1f'
//             btn[i].style.color = '#000'
//         }
//     }
//     if (sun.style.display = "block") {
//         sun.onclick = function () {
//             sun.style.display = "none"
//             moon.style.display = "block"
//             nav.style.backgroundColor = "white"

//         }
//     }


// else {
//     sun.style.display = "none"
//     moon.style.display = "block"
// }







// Toggle
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () =>  {
    navbarNav.classList.toggle('active');
}

// Toggle Out Sidebar
const menu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

//Transalate 
let bahasa = 'id';

function ubahBahasa() {
    const text = document.getElementById('about-text');

    if (bahasa === 'en') {
        text.innerHTML = 'reinn. dev adalah seorang pelajar yang masih baru terjun ke dunia perkodingan.<br>Saat ini, saya sedang mempelajari HTML, CSS, JavaScript, Node.JS, Python, C#, C++, dan Lua.<br><br>Saya memiliki ketertarikan dalam pengembangan web, game development, dan AI.<br>Saya juga aktif di platform WhatsApp dengan channel yang saya buat sendiri.';
        bahasa = 'id';
    } else {
        text.innerHTML = 'reinn. dev is a high school student who is new to the world of coding.<br>Currently. Im still learning HTML, CSS, JavaScript, Node.JS, Python, C#, C++, and Lua.<br><br>I have an interest in web development, game development, and AI.<br>I also active on my WhatsApp channel that i created myself.';
            bahasa = 'en';
    }
}
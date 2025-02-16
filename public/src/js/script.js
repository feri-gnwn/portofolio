//Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//audio button
const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        audio.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
});

// Alert pesan
const kirimBtn = document.getElementById('kirimBtn');
const alertBox = document.getElementById('alert');
const closeAlert = document.getElementById('closeAlert');

// Tampilkan alert saat tombol kirim diklik
kirimBtn.addEventListener('click', () => {
    alertBox.classList.remove('hidden');
    alertBox.classList.add('block');
});

// Tutup alert saat tombol close diklik
closeAlert.addEventListener('click', () => {
    alertBox.classList.remove('block');
    alertBox.classList.add('hidden');
});

// Mencegah scroll ke atas
kirimBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    alertBox.classList.remove('hidden');
    alertBox.classList.add('flex');
  });
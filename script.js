document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Tribute Ki Hajar Dewantara siap digunakan!");
    
    // Opsional: Tambahkan animasi scroll sederhana
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            if (top >= offset) {
                sec.style.opacity = '1';
                sec.style.transition = '1s';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    let currentIndex = 0;
    const totalSections = sections.length;

    // Fungsi untuk scroll ke section tertentu
    function scrollToSection(index) {
        if (index < 0 || index >= totalSections) return;  // Membatasi scroll agar tidak keluar dari index
        const section = sections[index];
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',  // Scroll dengan smooth
        });
    }

    // Event listener untuk scroll
    let isScrolling = false;  // Menghindari scroll terlalu cepat
    window.addEventListener('wheel', function (e) {
        if (isScrolling) return;  // Menghindari scroll berulang

        isScrolling = true;

        if (e.deltaY > 0 && currentIndex < totalSections - 1) {
            currentIndex++;  // Scroll ke bawah
        } else if (e.deltaY < 0 && currentIndex > 0) {
            currentIndex--;  // Scroll ke atas
        }

        // Scroll ke section yang sesuai
        scrollToSection(currentIndex);

        // Matikan status scrolling setelah animasi selesai
        setTimeout(() => {
            isScrolling = false;
        }, 1000);  // Durasi animasi sekitar 1 detik
    });

    // Fungsi untuk animasi muncul setiap section
    function animateSections() {
        sections.forEach((section) => {
            section.style.transform = 'translateY(0)';
            section.style.opacity = '1';  // Membuat tampilan terlihat
        });
    }

    // Animasi muncul untuk setiap section saat pertama kali dimuat
    animateSections();
});

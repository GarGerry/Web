document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.5,  // Menambahkan threshold untuk membuat bagian lebih terlihat
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

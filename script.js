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
            threshold: 0.5,  // Membuat animasi lebih mulus saat 50% bagian masuk viewport
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// Initialize AOS
        document.addEventListener('DOMContentLoaded', () => {
            AOS.init({
                duration: 800,
                once: true,
            });

            // Carousel Functionality
            const slides = document.querySelectorAll('.carousel-slide');
            let index = 0;
            setInterval(() => {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
                index = (index + 1) % slides.length;
            }, 4000);
        });
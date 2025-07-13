 document.addEventListener('DOMContentLoaded', () => {
            AOS.init({
                duration: 800,
                once: true,
            });

            // Form submission handling
            const form = document.getElementById('newsletter-form');
            const status = document.getElementById('form-status');

            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                const formData = new FormData(form);
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.textContent = 'Thanks for subscribing!';
                    status.style.color = 'white';
                    form.reset();
                } else {
                    status.textContent = 'Oops! There was a problem with your subscription. Please try again.';
                    status.style.color = '#ff4d4d';
                }
            });

            // Blog post expand/collapse
            const readMoreButtons = document.querySelectorAll('.read-more');
            readMoreButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const blogPost = button.closest('.blog-post');
                    const isActive = blogPost.classList.contains('active');
                    blogPost.classList.toggle('active');
                    button.textContent = isActive ? 'Read More' : 'Read Less';
                });
            });
        });
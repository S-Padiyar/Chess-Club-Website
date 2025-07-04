const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
e.preventDefault();
const data = new FormData(form);
const action = form.action;

try {
    const response = await fetch(action, {
    method: 'POST',
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    });

    if (response.ok) {
    status.textContent = 'Thanks! Your message has been sent.';
    form.reset();
    } else {
    status.textContent = 'Oops! Something went wrong.';
    }
} catch (error) {
    status.textContent = 'Network error. Try again later.';
}
  });

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
    });
});
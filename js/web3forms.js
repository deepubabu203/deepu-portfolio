/* ==========================================================================
   WEB3FORMS.JS - Real Web3Forms Integration
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (!contactForm) return;

    // Email Validation Helper
    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Status Display Helper
    const setStatus = (state, message = '') => {

        formStatus.className = 'form-status';
        formStatus.innerHTML = '';

        if (state === 'idle') {
            formStatus.style.display = 'none';
        }

        else if (state === 'loading') {
            formStatus.style.display = 'flex';
            formStatus.classList.add('loading');

            formStatus.innerHTML = `
                <span class="spinner"></span>
                <span>${message}</span>
            `;
        }

        else if (state === 'success') {
            formStatus.style.display = 'flex';
            formStatus.classList.add('success');

            formStatus.innerHTML = `
                <span>✔</span>
                <span>${message}</span>
            `;
        }

        else if (state === 'error') {
            formStatus.style.display = 'flex';
            formStatus.classList.add('error');

            formStatus.innerHTML = `
                <span>✖</span>
                <span>${message}</span>
            `;
        }
    };

    // Real Web3Forms Submission
    contactForm.addEventListener('submit', async (e) => {

        e.preventDefault();

        const nameField = document.getElementById('form-name');
        const emailField = document.getElementById('form-email');
        const subjectField = document.getElementById('form-subject');
        const messageField = document.getElementById('form-message');

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const subject = subjectField.value.trim();
        const message = messageField.value.trim();

        // Validation
        if (!name || !email || !subject || !message) {
            setStatus('error', 'Please fill in all fields.');
            return;
        }

        if (!isValidEmail(email)) {
            setStatus('error', 'Please enter a valid email address.');
            emailField.focus();
            return;
        }

        // Loading State
        setStatus('loading', 'Sending message...');
        submitBtn.disabled = true;

        try {

            const formData = new FormData(contactForm);

            const response = await fetch(
                'https://api.web3forms.com/submit',
                {
                    method: 'POST',
                    body: formData
                }
            );

            const data = await response.json();

            if (data.success) {

                setStatus(
                    'success',
                    'Message sent successfully! 🚀'
                );

                contactForm.reset();

            } else {

                setStatus(
                    'error',
                    data.message || 'Something went wrong.'
                );
            }

        } catch (error) {

            setStatus(
                'error',
                'Network error. Please try again later.'
            );

        } finally {

            submitBtn.disabled = false;

            // Auto hide success/error after 5 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        }

    });

});
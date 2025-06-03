document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            const username = loginForm.username.value;
            const password = loginForm.password.value;

            // Mock validation: Replace with actual validation logic later
            if (username === 'user' && password === 'password') {
                // Trigger confetti animation
                if (typeof confetti === 'function') {
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                } else {
                    console.error('Confetti function not found. Ensure library is loaded.');
                    alert('Login successful! (Confetti library not loaded)');
                }
            } else {
                alert('Invalid username or password.');
            }
        });
    } else {
        console.error('Login form not found');
    }
});

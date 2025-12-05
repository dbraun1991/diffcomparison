document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');

    // Password hash (SHA-256 of "your-password")
    // Change this to your desired password hash
    // To generate: use an online SHA-256 generator with your password
    // Example: "demo" = "2a97516c354b68848cdbd8f54a226a0a55b21ed138e207ad6c5cbb9c00aa5aea"
    const PASSWORD_HASH = "f3fc8e6073e9b7192af88c4f79344a105096314926be4a9f4638b8c039ede75f";

    // Check if already authenticated
    if (sessionStorage.getItem('authenticated') === 'true') {
        window.location.href = 'main.html';
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const password = passwordInput.value;
        const hash = await hashPassword(password);
        
        if (hash === PASSWORD_HASH) {
            sessionStorage.setItem('authenticated', 'true');
            window.location.href = 'main.html';
        } else {
            showError();
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    function showError() {
        errorMessage.classList.add('show');
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 3000);
    }

    // Focus password input on load
    passwordInput.focus();
});
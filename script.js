document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMe');
    const message = document.getElementById('message');
    let clickCount = 0;

    button.addEventListener('click', function() {
        clickCount++;
        message.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
        
        // Add a little animation
        message.style.transform = 'scale(1.1)';
        setTimeout(() => {
            message.style.transform = 'scale(1)';
        }, 200);
    });
});
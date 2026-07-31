document.addEventListener('DOMContentLoaded', () => {
    const emailTrigger = document.getElementById('emailTrigger');
    const obfuscatedText = document.getElementById('obfuscatedText');
    
    // Rotated/Split safe display to prevent basic crawlers while keeping user interaction smooth
    const user = 's.sivakumar';
    const domain = 'proton.me';

    let revealed = false;

    emailTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        if (!revealed) {
            const fullEmail = `${user}@${domain}`;
            obfuscatedText.textContent = fullEmail;
            emailTrigger.href = `mailto:${fullEmail}`;
            revealed = true;
        } else {
            window.location.href = emailTrigger.href;
        }
    });
});

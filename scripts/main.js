window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    preloader.style.display = 'none';
    mainContent.classList.remove('hidden');

    const terminalOutput = document.querySelector('.terminal-output');
    const lines = [
        '> npm run deploy',
        '✔ Building...',
        '✔ Deploying...',
        '✔ Live at modbox.dev'
    ];
    let index = 0;
    let charIndex = 0;
    let currentLine = '';
    let typingSpeed = 60;

    function type() {
        if(index >= lines.length) {
            index = 0;
            terminalOutput.textContent = '';
        }
        if(charIndex < lines[index].length) {
            currentLine += lines[index][charIndex];
            terminalOutput.textContent = currentLine;
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            currentLine += '\n';
            index++;
            charIndex = 0;
            setTimeout(type, typingSpeed * 3);
        }
    }

    type();
});

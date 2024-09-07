document.addEventListener('DOMContentLoaded', () => {
    const gifContainer = document.getElementById('gif-container');
    const backgroundContainer = document.getElementById('background-container');
    const circleReveal = document.getElementById('circle-reveal');
    const content = document.getElementById('content');

    // Show GIF for 2 seconds
    setTimeout(() => {
        // Hide GIF container

        // Show background container

        // Start circle reveal animation


        // Show content behind the background
        content.classList.remove('hidden');
        setTimeout(() => {
            content.style.opacity = '1';
        }, 50);

        // Bring content to front after 6 seconds
        setTimeout(() => {
            content.classList.add('visible');
        }, 6000);
    }, 2000);
});
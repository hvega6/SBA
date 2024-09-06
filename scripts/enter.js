document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('click-button');
    const clickCount = document.getElementById('click-count');
    const mainLink = document.getElementById('main-link');
    const loader = document.getElementById('loader');
    const backgroundMusic = document.getElementById('background-music');
    let count = 0;

    clickButton.addEventListener('click', function() {
        count++;
        clickCount.textContent = `Clicks: ${count} / 100`;

        if (count === 1) {
            // Start playing background music on first click
            backgroundMusic.play();
        }

        if (count >= 100) {
            clickButton.style.pointerEvents = 'none';
            clickButton.textContent = 'Unlocked!';
            clickButton.classList.remove('hover-effect');
            clickCount.textContent = 'Challenge completed!';
            mainLink.style.display = 'inline-block';
            
            // Wait 5 seconds, then show loader and redirect
            setTimeout(() => {
                loader.classList.remove('hidden');
                setTimeout(() => {
                    window.location.href = mainLink.href;
                }, 3000); // Show loader for 3 seconds before redirecting
            }, 5000);
        }
    });
});
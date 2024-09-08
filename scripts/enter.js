setTimeout(() => {
    // Check if we're already on the index page
    if (window.location.pathname.endsWith('SBA/') || window.location.pathname.endsWith('SBA/index.html')) {
        window.location.href = 'opening.html';
    } else {
        // If we're on another page, go back to the index
        window.location.href = 'index.html';
    }
}, 6000);
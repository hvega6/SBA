const audio = document.getElementById('background-music');

// Playlist of songs
const songs = [
    "/assets/ambient-celestial-dreamy-meditation-drone-healing-yoga-music-20846.mp3",
    "/assets/cosmic-space-138116.mp3",
    "/assets/mother-gaia-166025.mp3"
    // Add more songs here if needed
];

// Initialize the current song index
let currentSongIndex = 0;

// Load the saved time from localStorage
window.onload = function() {
    // Check if the user is on index.html
    if (window.location.pathname.endsWith("index.html")) {
        // Reset the playlist
        currentSongIndex = 0; // Start from the first song
        audio.src = songs[currentSongIndex]; // Set the current song
        audio.currentTime = 0; // Start from the beginning
    } else {
        // Resume from saved time for other pages
        const savedTime = localStorage.getItem('audioTime');
        const savedSongIndex = localStorage.getItem('currentSongIndex');

        if (savedTime) {
            audio.currentTime = parseFloat(savedTime); // Resume from saved time
        }
        if (savedSongIndex) {
            currentSongIndex = parseInt(savedSongIndex);
            audio.src = songs[currentSongIndex]; // Set the current song
        }
    }
    audio.play(); // Start playing the audio
};

// Save the current time and song index to localStorage when the user leaves the page
window.onbeforeunload = function() {
    localStorage.setItem('audioTime', audio.currentTime);
    localStorage.setItem('currentSongIndex', currentSongIndex); // Save the current song index
};

// Play the next song when the current one ends
audio.addEventListener('ended', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the first song
    audio.src = songs[currentSongIndex];
    audio.play();
});
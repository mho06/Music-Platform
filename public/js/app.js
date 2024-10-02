document.getElementById('happyBtn').addEventListener('click', () => {
    displaySongs(['Happy Song 1', 'Happy Song 2', 'Happy Song 3']);
});

document.getElementById('sadBtn').addEventListener('click', () => {
    displaySongs(['Sad Song 1', 'Sad Song 2', 'Sad Song 3']);
});

document.getElementById('relaxedBtn').addEventListener('click', () => {
    displaySongs(['Relaxed Song 1', 'Relaxed Song 2', 'Relaxed Song 3']);
});

document.getElementById('excitedBtn').addEventListener('click', () => {
    displaySongs(['Excited Song 1', 'Excited Song 2', 'Excited Song 3']);
});

function displaySongs(songs) {
    const songList = document.getElementById('songList');
    songList.innerHTML = '';
    songs.forEach(song => {
        const li = document.createElement('li');
        li.textContent = song;
        songList.appendChild(li);
    });
}

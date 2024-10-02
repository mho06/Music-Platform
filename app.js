document.getElementById('happyBtn').addEventListener('click', () => {
    displaySongs(['Song 1', 'Song 2', 'Song 3']);
});

document.getElementById('sadBtn').addEventListener('click', () => {
    displaySongs(['Song 4', 'Song 5', 'Song 6']);
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

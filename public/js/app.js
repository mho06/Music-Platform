document.getElementById('happyBtn').addEventListener('click', () => {
    displaySongs([
        { title: 'Happy Song 1', url: 'audio/happy-song1.mp3' },
        { title: 'Happy Song 2', url: 'audio/happy-song2.mp3' }
    ]);
});

document.getElementById('sadBtn').addEventListener('click', () => {
    displaySongs([
        { title: 'Sad Song 1', url: 'audio/sad-song1.mp3' },
        { title: 'Sad Song 2', url: 'audio/sad-song2.mp3' }
    ]);
});

document.getElementById('relaxedBtn').addEventListener('click', () => {
    displaySongs([
        { title: 'Relaxed Song 1', url: 'audio/relaxed-song1.mp3' },
        { title: 'Relaxed Song 2', url: 'audio/relaxed-song2.mp3' }
    ]);
});

document.getElementById('excitedBtn').addEventListener('click', () => {
    displaySongs([
        { title: 'Excited Song 1', url: 'audio/excited-song1.mp3' },
        { title: 'Excited Song 2', url: 'audio/excited-song2.mp3' }
    ]);
});

function displaySongs(songs) {
    const songList = document.getElementById('songList');
    songList.innerHTML = '';
    songs.forEach(song => {
        const li = document.createElement('li');
        li.innerHTML = `${song.title} <br> <audio controls>
            <source src="${song.url}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>`;
        songList.appendChild(li);
    });
}

const songs = [
    {
        src: 'Memories(PagalNew.Com.Se).mp3',
        cover: 'Screenshot 2024-08-07 213732.png'
    },
    {
        src: 'August(Pagal-World.Com.In).mp3',
        cover: 'august.png'
    }
];

let currentSongIndex = 0;

const audioPlayer = document.getElementById('audio-player');
const coverImage = document.getElementById('cover-image');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');

function loadSong(song) {
    audioPlayer.src = song.src;
    coverImage.src = song.cover;
    progressBar.value = 0;
}

function playSong() {
    audioPlayer.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
}

function pauseSong() {
    audioPlayer.pause();
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function updateProgress() {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progressPercent;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', playSong);
pauseBtn.addEventListener('click', pauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audioPlayer.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', setProgress);

// Load the first song initially
loadSong(songs[currentSongIndex]);

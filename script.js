console.log("Welcome to Music Streaming Website");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Keshi - 2 soon", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Keshi - Beside You", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "I Wanna Be Yours - Arctic Monkeys", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "GADISKU - lucidrari, FITTO, Gard", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Greedy - Tate McRae", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Keshi - Less of you", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Keshi - LIMBO", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "My Love Mine All Mine - Mitski", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "One Of The Girls - The Weeknd, JENNIE, Lily-Rose Depp", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Penjaga Hati - Nadhif Basalamah", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Somebody's Pleasure - Aziz Hedra", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Pujaanku (feat. Aisyah Aziz) - Masdo, Aisyah Aziz", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Sinar Pelangi - Projector Band", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "UMT Cita Warisan", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Keshi - UNDERSTAND", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

function toggleSidebar() {
    var sidebar = document.querySelector('aside');
    var mainContent = document.querySelector('main');
    var sidebarWidth = sidebar.offsetWidth;

    if (sidebar.style.left === '0px') {
      sidebar.style.left = `-${sidebarWidth}px`;
      mainContent.style.marginLeft = '0';
    } else {
      sidebar.style.left = '0';
      mainContent.style.marginLeft = `${sidebarWidth}px`;
    }
  }

  // Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the logo and profile links
    const logoLink = document.querySelector('.logo-button a');
    const profileLink = document.querySelector('.profile-button a');
  
    // Add click event listeners to the logo and profile links
    if (logoLink) {
      logoLink.addEventListener('click', function() {
        // Navigate to home.html when the logo is clicked
        window.location.href = 'home.html';
      });
    }
  
    if (profileLink) {
      profileLink.addEventListener('click', function() {
        // Navigate to profile.html when the profile is clicked
        window.location.href = 'profile.html';
      });
    }
  });
  
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

    function playNext(nextAudioId) {
        var nextAudio = document.getElementById(nextAudioId);
        if (nextAudio) {
            nextAudio.play();
        }
    }




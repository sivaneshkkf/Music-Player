import data from '/public/data.json';


const album = new Albums();
// Use the imported JSON data directly
//console.log("Imported Data:", data);
data.forEach(item => {
  //console.log(`Name: ${item.name}, Artist: ${item.artist}`);
  const song = new Song(item.songId,item.name,item.artist,item.album,item.img,item.movieName,item.duration,item.song)
  album.pushSong(song)
});

localStorage.setItem("songId",1);

const popularUl=document.getElementById("pupularUl")
const topPlayedUl=document.getElementById("topPlayed")

renderSongs()
function renderSongs() {
  //const popularAlbumData = album.getAlbumSongs("popular")

  getAlbum("popular",popularUl,"popular")
  getAlbum("topPlayed",topPlayedUl,"topPlayed")

}




// catergory click action
const categoryEl =document.getElementById("categoryEl")

categoryEl.addEventListener("click", (e) => {
  
  if(e.target.tagName === "LI"){
    [...categoryEl.children].forEach(el => {
    
      if(el.classList.contains("active-li")){
        el.classList.remove("active-li")
      }
      
    })
    e.target.closest("li").classList.add("active-li")
  }
 
  if(e.target.textContent === "Overview"){
    getAlbum("popular",popularUl,"popular")
  }else if(e.target.textContent === "Album"){
    getAlbum("topPlayed",popularUl,"popular")
  }else if(e.target.textContent === "Songs"){
    getAlbum("popular",popularUl,"popular")
  }else{
    getAlbum("topPlayed",popularUl,"popular")
  }
  
})


// get Albums
function getAlbum(AlbumName,element,ui){

  const fragment = document.createDocumentFragment();

  if(element.id === "pupularUl"){
    popularUl.innerHTML = ""
  }else if(element.id === "topPlayed"){
    topPlayedUl.innerHTML =""
  }

  album.getAlbumSongs(AlbumName).forEach((d,index) => {
  
    const liEl = document.createElement("li");

    liEl.innerHTML += UI(ui)

    function UI(uiName){
      if(uiName === "popular"){
        return popularUI(d.getId(),d.getImg(),d.getName(),d.getArtist(),d.getPlay())
      }else if(uiName === "topPlayed"){
        return topPlayedUi(d.getId(),d.getImg(),d.getName(),d.getArtist(),d.getDuration(),d.getPlay())
      }
    }

    liEl.addEventListener("click", (e) => songPlayonClick(d.getId(),index))
    
    fragment.appendChild(liEl)
  })

  element.appendChild(fragment);
}



const sliderEl = document.getElementById("sliderEl");
const song = document.getElementById("song");
const durationtxt = document.getElementById("duration")

let playState = false;
// play funcition
function songPlayonClick(id){

  const preSongId= localStorage.getItem("songId")

  const playsongObj = album.getSongByID(id)[0];
  
  if(preSongId != id){
    album.setAllFalse()
    playState = false;
    loadSong(playsongObj.getSong())
  }
  
 
  song.onloadedmetadata = function() {
    sliderEl.max = song.duration; // Set max to the audio duration
    sliderEl.value = song.currentTime; // Initialize the slider value
  };

  sliderEl.max = song.duration;
  sliderEl.value = song.currentTime;
  // Update the slider as the audio plays
  song.ontimeupdate = function() {
    sliderEl.value = song.currentTime;
    calcValue();
    durationtxt.textContent = formatTime(song.currentTime);
  };
  
  // Optional: Sync audio playback with slider when slider is moved manually
  sliderEl.addEventListener("input", () => {
    song.currentTime = sliderEl.value;
    calcValue()
  });
  
  //loadSong(playsongObj.getSong())
  // Play/Pause functionality
  if (playState) {
    album.pauseSong(id);
    song.pause();
    console.log(playState)
  } else {
    album.playSong(id);
    song.play();
    console.log(playState)
  }
  
  footerUI(id, playState);
  
  playState = !playState;
  

  renderSongs()
}

// slider color change
function calcValue() {
  let valuePercentage = (sliderEl.value / sliderEl.max) * 100;

  sliderEl.style.background = `-webkit-gradient(linear, left top, right top, color-stop(${valuePercentage}%, #8758ff), color-stop(${valuePercentage}%, #ebe9e7))`;
  sliderEl.style.background = `linear-gradient(to right, #be123c ${valuePercentage}%, #ebe9e7 ${valuePercentage}%)`;
}

sliderEl.addEventListener("input", () => {
  calcValue()
});


function loadSong(src) {
  song.src = src;
  song.load(); // Load the new audio source
  song.play(); // Start playing the song
}

// time format
function formatTime(seconds) {
  // Calculate minutes
  const minutes = Math.floor(seconds / 60);
  
  // Calculate remaining seconds
  const remainingSeconds = Math.floor(seconds % 60);

  // Return formatted time with zero-padded seconds
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}



// footer play pause
function footerUI(id,state){
  const psImg = document.getElementById("psImg")
  const psName = document.getElementById("psName")
  const psArtist = document.getElementById("psArtist")
  const duration = document.getElementById("duration")

  const playsongObj = album.getSongByID(id)[0];

  if(playsongObj){
    psImg.setAttribute("src",playsongObj.getImg())
    psName.textContent = playsongObj.getName()
    psArtist.textContent = playsongObj.getArtist()
    duration.textContent = playsongObj.getDuration()
  }

  if(!state){
    footerplayIcon.classList.add("block");
    footerplayIcon.classList.remove("hidden");
    footerpauseIcon.classList.add("hidden");
    playImg.classList.add("animate-spinSlow")
  }else{
    footerplayIcon.classList.add("hidden");
    footerpauseIcon.classList.remove("hidden");
    playImg.classList.remove("animate-spinSlow")
  }
}


// const iconWrapper = document.getElementById("iconWrapper");
// const footerplayIcon = document.getElementById("footerplayIcon");
// const footerpauseIcon = document.getElementById("footerpauseIcon");
// const playImg =document.getElementById("playImg")
// // console.log(footerpauseIcon,footerplayIcon)

iconWrapper.addEventListener("click", () => {
  const id= localStorage.getItem("songId")

  songPlayonClick(parseInt(id))
  
});






// create Ui
function popularUI(id,img,name,artist,play){
 let playIconStyle = play ? "block":"hidden"
  let pauseIconStyle = play ? "hidden":"block"
  return  `
  <li class="li-popular relative group">
                <img
                  src="${img}"
                  alt="img"
                  class="img-popular"
                />
                <div class="disc-popular-blur">
                  <div>
                    <p class="line-clamp-1">${name}</p>
                    <p class="text-gray-300 line-clamp-1">${artist}</p>
                  </div>
                  <div class="flex">
                   <div class="${playIconStyle}">
                     <dotlottie-player src="https://lottie.host/31c605e2-16f2-44a6-8f22-b187a85c6197/OQvgg4IPQn.json" background="transparent" speed="1" style="width: 25px; height: 25px;" loop autoplay></dotlottie-player>
                   </div>
                   <span class="${pauseIconStyle}">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2.5q3.125 0 5.312-2.188Q19.5 15.125 19.5 12q0-3.125-2.188-5.312Q15.125 4.5 12 4.5q-3.125 0-5.312 2.188Q4.5 8.875 4.5 12q0 3.125 2.188 5.312Q8.875 19.5 12 19.5Zm0-1.5q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm-2-2.5l5.5-3.5L10 8.5Z"
                      />
                    </svg>
                  </span>
                  </div>
                  
                </div>
              </li>
  `
}

function topPlayedUi(id,img,name,artist,duration,play){
  let playIconStyle = play ? "block":"hidden"
  let pauseIconStyle = play ? "hidden":"block"
  let lottifile = play? "block":"invisible"
  return `
   <li class="li-topplayed">
                    <div
                      class="overflow-hidden w-14 h-14 flex justify-center items-center rounded-full"
                    >
                      <img
                        src="${img}"
                        alt="singer1"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="li-topplayed-disc">
                      <p class="text-white text-xs font-semibold line-clamp-1">
                        ${name}
                      </p>
                      <p class="text-gray-500 text-xs font-medium line-clamp-1">
                        ${artist}
                      </p>
                       
                    </div>
                   <div class="${lottifile}">
                     <dotlottie-player src="https://lottie.host/31c605e2-16f2-44a6-8f22-b187a85c6197/OQvgg4IPQn.json" background="transparent" speed="1" style="width: 25px; height: 25px;" loop autoplay></dotlottie-player>
                   </div>
                     <p class="text-xs text-gray-500">${duration}</p>

                    <div class="text-gray-500 flex items-center gap-3">
                     
                      <div>
                        <span id="pauseIcon" class="text-white ${[pauseIconStyle]}">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                            />
                          </svg>
                        </span>
                        <span id="playIcon" class="text-white ${playIconStyle}">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M9 16h2V8H9zm4 0h2V8h-2zm-1 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </li>
  `
}


{/* <p class="text-xs text-gray-500">${duration}</p> */}
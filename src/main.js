import data from '/public/data.json';


const album = new Albums();
// Use the imported JSON data directly
//console.log("Imported Data:", data);
data.forEach(item => {
  //console.log(`Name: ${item.name}, Artist: ${item.artist}`);
  const song = new Song(item.songId,item.name,item.artist,item.album,item.img,item.movieName,item.duration)
  album.pushSong(song)
});

renderSongs()

function renderSongs() {
  const popularUl=document.getElementById("pupularUl")
  const topPlayed=document.getElementById("topPlayed")


  //const popularAlbumData = album.getAlbumSongs("popular")

  getAlbum("popular",popularUl)
  getAlbum("topPlayed",topPlayed)

}





// get Albums
function getAlbum(AlbumName,element){
  const fragment = document.createDocumentFragment();

  album.getAlbumSongs(AlbumName).forEach((d,index) => {
  
    const liEl = document.createElement("li");

    liEl.innerHTML += UI(AlbumName)

    function UI(uiName){
      if(uiName === "popular"){
        return popularUI(d.getId(),d.getImg(),d.getName(),d.getArtist())
      }else if(uiName === "topPlayed"){
        return topPlayedUi(d.getId(),d.getImg(),d.getName(),d.getArtist(),d.getDuration())
      }
    }

    liEl.addEventListener("click", (e) => songPlayonClick(d.getId()))
    
    fragment.appendChild(liEl)
  })

  element.appendChild(fragment);
}





// play funcition
function songPlayonClick(id){
  const psImg = document.getElementById("psImg")
  const psName = document.getElementById("psName")
  const psArtist = document.getElementById("psArtist")

  const playsongObj = album.setPlayTrue(id)[0]

  psImg.setAttribute("src",playsongObj.getImg())
  psName.textContent = playsongObj.getName()
  psArtist.textContent = playsongObj.getArtist()

}



// create Ui
function popularUI(id,img,name,artist){
  return  `
  <li class="li-popular relative group">
                <img
                  src="${img}"
                  alt="img"
                  class="img-popular"
                />
                <div class="disc-popular-blur">
                  <div>
                    <p>${name}</p>
                    <p class="text-gray-300">${artist}</p>
                  </div>
                  <span>
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
              </li>
  `
}

function topPlayedUi(id,img,name,artist,duration){
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
                      <p class="text-gray-500 text-xs font-medium">
                        ${artist}
                      </p>
                    </div>
                    <div class="text-gray-500 flex items-center gap-3">
                      <p class="text-xs">${duration}</p>
                      <div>
                        <span class="text-white">
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
                        <span class="hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
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
(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const v=[{songId:1,name:"YongBlood",artist:"Sos",album:"popular",img:"/Music-Player/img/image.png",movieName:"",duration:"3:15"},{songId:2,name:"Shape of You",artist:"Ed Sheeran",album:"popular",img:"/Music-Player/img/singer1.jpg",movieName:"",duration:"3:20"},{songId:3,name:"Let me Love You",artist:"Dj Snake",album:"popular",img:"/Music-Player/img/singer2.jpg",movieName:"",duration:"3:10"},{songId:4,name:"Despacito",artist:"Luis Fonsi, Daddy Yankee",album:"popular",img:"/Music-Player/img/singer3.jpg",movieName:"",duration:"3:05"},{songId:5,name:"Thinking out Loud",artist:"Ed Sheeran",album:"popular",img:"/Music-Player/img/singer4.jpg",movieName:"",duration:"3:40"},{songId:6,name:"Lose Control",artist:"Teddy Swims",album:"popular",img:"/Music-Player/img/song1.PNG",movieName:"",duration:"2:30"},{songId:7,name:"Baby",artist:"Justine biper",album:"topPlayed",img:"/Music-Player/img/singer2.jpg",movieName:"",duration:"2:20"},{songId:8,name:"Rap God",artist:"Eminam",album:"topPlayed",img:"/Music-Player/img/singer3.jpg",movieName:"",duration:"2:10"},{songId:9,name:"Paradise",artist:"Coldplay",album:"topPlayed",img:"/Music-Player/img/singer4.jpg",movieName:"",duration:"2:15"},{songId:10,name:"Young blood",artist:"Sos",album:"topPlayed",img:"/Music-Player/img/image.png",movieName:"",duration:"2:45"},{songId:11,name:"Yong Blood",artist:"Sos",album:"topPlayed",img:"/Music-Player/img/song1.PNG",movieName:"",duration:"3:00"},{songId:12,name:"Shape of You",artist:"Ed Sheeran",album:"topPlayed",img:"/Music-Player/img/song2.PNG",movieName:"",duration:"2:40"},{songId:13,name:"Let me Love You",artist:"Dj Snake",album:"topPlayed",img:"/Music-Player/img/singer2.jpg",movieName:"",duration:"2:20"},{songId:14,name:"Despacito",artist:"Luis Fonsi, Daddy Yankee",album:"topPlayed",img:"/Music-Player/img/singer3.jpg",movieName:"",duration:"2:00"},{songId:15,name:"Thinking out Loud",artist:"Ed Sheeran",album:"topPlayed",img:"/Music-Player/img/singer4.jpg",movieName:"",duration:"3:12"},{songId:16,name:"Lose Control",artist:"Teddy Swims",album:"topPlayed",img:"/Music-Player/img/song1.PNG",movieName:"",duration:"3:18"}],d=new Albums;v.forEach(t=>{const a=new Song(t.songId,t.name,t.artist,t.album,t.img,t.movieName,t.duration);d.pushSong(a)});localStorage.setItem("songId",1);const l=document.getElementById("pupularUl"),u=document.getElementById("topPlayed");y();function y(){r("popular",l,"popular"),r("topPlayed",u,"topPlayed")}const p=document.getElementById("categoryEl");p.addEventListener("click",t=>{t.target.tagName==="LI"&&([...p.children].forEach(a=>{a.classList.contains("active-li")&&a.classList.remove("active-li")}),t.target.closest("li").classList.add("active-li")),t.target.textContent==="Overview"?r("popular",l,"popular"):t.target.textContent==="Album"?r("topPlayed",l,"popular"):t.target.textContent==="Songs"?r("popular",l,"popular"):r("topPlayed",l,"popular")});function r(t,a,n){const o=document.createDocumentFragment();a.id==="pupularUl"?l.innerHTML="":a.id==="topPlayed"&&(u.innerHTML=""),d.getAlbumSongs(t).forEach((e,i)=>{const s=document.createElement("li");s.innerHTML+=c(n);function c(m){if(m==="popular")return h(e.getId(),e.getImg(),e.getName(),e.getArtist(),e.getPlay());if(m==="topPlayed")return P(e.getId(),e.getImg(),e.getName(),e.getArtist(),e.getDuration(),e.getPlay())}s.addEventListener("click",m=>f(e.getId())),o.appendChild(s)}),a.appendChild(o)}let g=!1;function f(t){localStorage.getItem("songId")!=t&&(d.setAllFalse(),g=!1);const n=document.getElementById("sliderEl"),o=document.getElementById("song");o.onloadedmetadata=function(){n.max=o.duration,n.value=o.currentTime},o.ontimeupdate=function(){n.value=o.currentTime},n.addEventListener("input",()=>{o.currentTime=n.value}),g?(d.pauseSong(t),o.pause()):(d.playSong(t),o.play()),I(t,g),g=!g,y()}function I(t,a){const n=document.getElementById("psImg"),o=document.getElementById("psName"),e=document.getElementById("psArtist"),i=document.getElementById("duration"),s=d.getSongByID(t)[0];s&&(n.setAttribute("src",s.getImg()),o.textContent=s.getName(),e.textContent=s.getArtist(),i.textContent=s.getDuration()),a?(footerplayIcon.classList.add("hidden"),footerpauseIcon.classList.remove("hidden"),playImg.classList.remove("animate-spinSlow")):(footerplayIcon.classList.add("block"),footerplayIcon.classList.remove("hidden"),footerpauseIcon.classList.add("hidden"),playImg.classList.add("animate-spinSlow"))}iconWrapper.addEventListener("click",()=>{const t=localStorage.getItem("songId");f(t)});function h(t,a,n,o,e){return`
  <li class="li-popular relative group">
                <img
                  src="${a}"
                  alt="img"
                  class="img-popular"
                />
                <div class="disc-popular-blur">
                  <div>
                    <p class="line-clamp-1">${n}</p>
                    <p class="text-gray-300 line-clamp-1">${o}</p>
                  </div>
                  <div class="flex">
                   <div class="${e?"block":"hidden"}">
                     <dotlottie-player src="https://lottie.host/31c605e2-16f2-44a6-8f22-b187a85c6197/OQvgg4IPQn.json" background="transparent" speed="1" style="width: 25px; height: 25px;" loop autoplay></dotlottie-player>
                   </div>
                   <span class="${e?"hidden":"block"}">
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
  `}function P(t,a,n,o,e,i){return`
   <li class="li-topplayed">
                    <div
                      class="overflow-hidden w-14 h-14 flex justify-center items-center rounded-full"
                    >
                      <img
                        src="${a}"
                        alt="singer1"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="li-topplayed-disc">
                      <p class="text-white text-xs font-semibold line-clamp-1">
                        ${n}
                      </p>
                      <p class="text-gray-500 text-xs font-medium line-clamp-1">
                        ${o}
                      </p>
                       
                    </div>
                   <div class="${i?"block":"invisible"}">
                     <dotlottie-player src="https://lottie.host/31c605e2-16f2-44a6-8f22-b187a85c6197/OQvgg4IPQn.json" background="transparent" speed="1" style="width: 25px; height: 25px;" loop autoplay></dotlottie-player>
                   </div>
                     <p class="text-xs text-gray-500">${e}</p>

                    <div class="text-gray-500 flex items-center gap-3">
                     
                      <div>
                        <span id="pauseIcon" class="text-white ${[i?"hidden":"block"]}">
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
                        <span id="playIcon" class="text-white ${i?"block":"hidden"}">
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
  `}

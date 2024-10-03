(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const b=[{songId:1,name:"YongBlood",artist:"Sos",album:"popular",img:"/Music-Player/img/image.png",movieName:"",duration:"3:15"},{songId:2,name:"Shape of You",artist:"Ed Sheeran",album:"popular",img:"/Music-Player/img/singer1.jpg",movieName:"",duration:"3:20"},{songId:3,name:"Let me Love You",artist:"Dj Snake",album:"popular",img:"/Music-Player/img/singer2.jpg",movieName:"",duration:"3:10"},{songId:4,name:"Despacito",artist:"Luis Fonsi, Daddy Yankee",album:"popular",img:"/Music-Player/img/singer3.jpg",movieName:"",duration:"3:05"},{songId:5,name:"Thinking out Loud",artist:"Ed Sheeran",album:"popular",img:"/Music-Player/img/singer4.jpg",movieName:"",duration:"3:40"},{songId:6,name:"Lose Control",artist:"Teddy Swims",album:"popular",img:"/Music-Player/img/song1.PNG",movieName:"",duration:"2:30"},{songId:7,name:"Baby",artist:"Justine biper",album:"topPlayed",img:"/Music-Player/img/singer2.jpg",movieName:"",duration:"2:20"},{songId:8,name:"Rap God",artist:"Eminam",album:"topPlayed",img:"/Music-Player/img/singer3.jpg",movieName:"",duration:"2:10"},{songId:9,name:"Paradise",artist:"Coldplay",album:"topPlayed",img:"/Music-Player/img/singer4.jpg",movieName:"",duration:"2:15"},{songId:10,name:"Young blood",artist:"Sos",album:"topPlayed",img:"/Music-Player/img/image.png",movieName:"",duration:"2:45"},{songId:11,name:"Yong Blood",artist:"Sos",album:"topPlayed",img:"/Music-Player/img/song1.PNG",movieName:"",duration:"3:00"},{songId:12,name:"Shape of You",artist:"Ed Sheeran",album:"topPlayed",img:"/Music-Player/img/song2.PNG",movieName:"",duration:"2:40"},{songId:13,name:"Let me Love You",artist:"Dj Snake",album:"topPlayed",img:"/Music-Player/img/singer2.jpg",movieName:"",duration:"2:20"},{songId:14,name:"Despacito",artist:"Luis Fonsi, Daddy Yankee",album:"topPlayed",img:"/Music-Player/img/singer3.jpg",movieName:"",duration:"2:00"},{songId:15,name:"Thinking out Loud",artist:"Ed Sheeran",album:"topPlayed",img:"/Music-Player/img/singer4.jpg",movieName:"",duration:"3:12"},{songId:16,name:"Lose Control",artist:"Teddy Swims",album:"topPlayed",img:"/Music-Player/img/song1.PNG",movieName:"",duration:"3:18"}],g=new Albums;b.forEach(e=>{const o=new Song(e.songId,e.name,e.artist,e.album,e.img,e.movieName,e.duration);g.pushSong(o)});localStorage.setItem("songId",1);const d=document.getElementById("pupularUl"),v=document.getElementById("topPlayed");h();function h(){c("popular",d,"popular"),c("topPlayed",v,"topPlayed")}const f=document.getElementById("categoryEl");f.addEventListener("click",e=>{e.target.tagName==="LI"&&([...f.children].forEach(o=>{o.classList.contains("active-li")&&o.classList.remove("active-li")}),e.target.closest("li").classList.add("active-li")),e.target.textContent==="Overview"?c("popular",d,"popular"):e.target.textContent==="Album"?c("topPlayed",d,"popular"):e.target.textContent==="Songs"?c("popular",d,"popular"):c("topPlayed",d,"popular")});function c(e,o,s){const r=document.createDocumentFragment();o.id==="pupularUl"?d.innerHTML="":o.id==="topPlayed"&&(v.innerHTML=""),g.getAlbumSongs(e).forEach((t,a)=>{const i=document.createElement("li");i.innerHTML+=y(s);function y(u){if(u==="popular")return w(t.getId(),t.getImg(),t.getName(),t.getArtist(),t.getPlay());if(u==="topPlayed")return L(t.getId(),t.getImg(),t.getName(),t.getArtist(),t.getDuration(),t.getPlay())}i.addEventListener("click",u=>I(t.getId())),r.appendChild(i)}),o.appendChild(r)}const l=document.getElementById("sliderEl"),n=document.getElementById("song"),P=document.getElementById("duration");let m=!1;function I(e){localStorage.getItem("songId")!=e&&(g.setAllFalse(),m=!1),n.onloadedmetadata=function(){l.max=n.duration,l.value=n.currentTime,console.log(n.duration)},l.max=n.duration,l.value=n.currentTime,console.log(n.duration,l.max),n.ontimeupdate=function(){l.value=n.currentTime,p(),P.textContent=S(n.currentTime)},l.addEventListener("input",()=>{n.currentTime=l.value,p()}),m?(g.pauseSong(e),n.pause()):(g.playSong(e),n.play()),x(e,m),m=!m,h()}function p(){let e=l.value/l.max*100;l.style.background=`-webkit-gradient(linear, left top, right top, color-stop(${e}%, #8758ff), color-stop(${e}%, #ebe9e7))`,l.style.background=`linear-gradient(to right, #be123c ${e}%, #ebe9e7 ${e}%)`}l.addEventListener("input",()=>{p()});function S(e){const o=Math.floor(e/60),s=Math.floor(e%60);return`${o}:${s.toString().padStart(2,"0")}`}function x(e,o){const s=document.getElementById("psImg"),r=document.getElementById("psName"),t=document.getElementById("psArtist"),a=document.getElementById("duration"),i=g.getSongByID(e)[0];i&&(s.setAttribute("src",i.getImg()),r.textContent=i.getName(),t.textContent=i.getArtist(),a.textContent=i.getDuration()),o?(footerplayIcon.classList.add("hidden"),footerpauseIcon.classList.remove("hidden"),playImg.classList.remove("animate-spinSlow")):(footerplayIcon.classList.add("block"),footerplayIcon.classList.remove("hidden"),footerpauseIcon.classList.add("hidden"),playImg.classList.add("animate-spinSlow"))}iconWrapper.addEventListener("click",()=>{const e=localStorage.getItem("songId");I(e)});function w(e,o,s,r,t){return`
  <li class="li-popular relative group">
                <img
                  src="${o}"
                  alt="img"
                  class="img-popular"
                />
                <div class="disc-popular-blur">
                  <div>
                    <p class="line-clamp-1">${s}</p>
                    <p class="text-gray-300 line-clamp-1">${r}</p>
                  </div>
                  <div class="flex">
                   <div class="${t?"block":"hidden"}">
                     <dotlottie-player src="https://lottie.host/31c605e2-16f2-44a6-8f22-b187a85c6197/OQvgg4IPQn.json" background="transparent" speed="1" style="width: 25px; height: 25px;" loop autoplay></dotlottie-player>
                   </div>
                   <span class="${t?"hidden":"block"}">
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
  `}function L(e,o,s,r,t,a){return`
   <li class="li-topplayed">
                    <div
                      class="overflow-hidden w-14 h-14 flex justify-center items-center rounded-full"
                    >
                      <img
                        src="${o}"
                        alt="singer1"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="li-topplayed-disc">
                      <p class="text-white text-xs font-semibold line-clamp-1">
                        ${s}
                      </p>
                      <p class="text-gray-500 text-xs font-medium line-clamp-1">
                        ${r}
                      </p>
                       
                    </div>
                   <div class="${a?"block":"invisible"}">
                     <dotlottie-player src="https://lottie.host/31c605e2-16f2-44a6-8f22-b187a85c6197/OQvgg4IPQn.json" background="transparent" speed="1" style="width: 25px; height: 25px;" loop autoplay></dotlottie-player>
                   </div>
                     <p class="text-xs text-gray-500">${t}</p>

                    <div class="text-gray-500 flex items-center gap-3">
                     
                      <div>
                        <span id="pauseIcon" class="text-white ${[a?"hidden":"block"]}">
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
                        <span id="playIcon" class="text-white ${a?"block":"hidden"}">
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

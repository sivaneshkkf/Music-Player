(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const g=[{songId:1,name:"YongBlood",artist:"Sos",album:"popular",img:"/Music-Player/img/image.png",movieName:"",duration:"3:30"},{songId:2,name:"Shape of You",artist:"Ed Sheeran",album:"popular",img:"/Music-Player/img/singer1.jpg",movieName:"",duration:"3:30"},{songId:3,name:"Let me Love You",artist:"Dj Snake",album:"popular",img:"/Music-Player/img/singer2.jpg",movieName:"",duration:"3:30"},{songId:4,name:"Despacito",artist:"Luis Fonsi, Daddy Yankee",album:"popular",img:"/Music-Player/img/singer3.jpg",movieName:"",duration:"3:30"},{songId:5,name:"Thinking out Loud",artist:"Ed Sheeran",album:"popular",img:"/Music-Player/img/singer4.jpg",movieName:"",duration:"3:30"},{songId:6,name:"Lose Control",artist:"Teddy Swims",album:"popular",img:"/Music-Player/img/song1.png",movieName:"",duration:"3:30"},{songId:7,name:"Baby",artist:"Justine biper",album:"topPlayed",img:"/Music-Player/img/singer2.jpg",movieName:"",duration:"3:30"},{songId:8,name:"Rap God",artist:"Eminam",album:"topPlayed",img:"/Music-Player/img/singer3.jpg",movieName:"",duration:"3:30"},{songId:9,name:"Paradise",artist:"Coldplay",album:"topPlayed",img:"/Music-Player/img/singer4.jpg",movieName:"",duration:"3:30"},{songId:10,name:"Youngblood",artist:"Sos",album:"topPlayed",img:"/Music-Player/img/image.png",movieName:"",duration:"3:30"},{songId:11,name:"YongBlood",artist:"Sos",album:"topPlayed",img:"/Music-Player/img/song1.png",movieName:"",duration:"3:30"},{songId:12,name:"Shape of You",artist:"Ed Sheeran",album:"topPlayed",img:"/Music-Player/img/song2.png",movieName:"",duration:"3:30"},{songId:13,name:"Let me Love You",artist:"Dj Snake",album:"topPlayed",img:"/Music-Player/img/singer2.jpg",movieName:"",duration:"3:30"},{songId:14,name:"Despacito",artist:"Luis Fonsi, Daddy Yankee",album:"topPlayed",img:"/Music-Player/img/singer3.jpg",movieName:"",duration:"3:30"},{songId:15,name:"Thinking out Loud",artist:"Ed Sheeran",album:"topPlayed",img:"/Music-Player/img/singer4.jpg",movieName:"",duration:"3:30"},{songId:16,name:"Lose Control",artist:"Teddy Swims",album:"topPlayed",img:"/Music-Player/img/song1.png",movieName:"",duration:"3:30"}],l=new Albums;g.forEach(i=>{const o=new Song(i.songId,i.name,i.artist,i.album,i.img,i.movieName,i.duration);l.pushSong(o)});d();function d(){const i=document.getElementById("pupularUl"),o=document.getElementById("topPlayed");m("popular",i),m("topPlayed",o)}function m(i,o){const n=document.createDocumentFragment();l.getAlbumSongs(i).forEach((t,e)=>{const a=document.createElement("li");a.innerHTML+=s(i);function s(r){if(r==="popular")return p(t.getId(),t.getImg(),t.getName(),t.getArtist());if(r==="topPlayed")return c(t.getId(),t.getImg(),t.getName(),t.getArtist(),t.getDuration())}a.addEventListener("click",r=>u(t.getId())),n.appendChild(a)}),o.appendChild(n)}function u(i){const o=document.getElementById("psImg"),n=document.getElementById("psName"),t=document.getElementById("psArtist"),e=l.setPlayTrue(i)[0];o.setAttribute("src",e.getImg()),n.textContent=e.getName(),t.textContent=e.getArtist()}function p(i,o,n,t){return`
  <li class="li-popular relative group">
                <img
                  src="${o}"
                  alt="img"
                  class="img-popular"
                />
                <div class="disc-popular-blur">
                  <div>
                    <p>${n}</p>
                    <p class="text-gray-300">${t}</p>
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
  `}function c(i,o,n,t,e){return`
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
                        ${n}
                      </p>
                      <p class="text-gray-500 text-xs font-medium">
                        ${t}
                      </p>
                    </div>
                    <div class="text-gray-500 flex items-center gap-3">
                      <p class="text-xs">${e}</p>
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
  `}

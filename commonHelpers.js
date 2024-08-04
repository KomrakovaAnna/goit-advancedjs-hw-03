import{S as u,i as c}from"./assets/vendor-403a0c46.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();document.querySelector(".gallery");const m=a=>a.map(({webformatURL:s,largeImageURL:t,tags:i,likes:e,views:r,comments:o,downloads:l})=>`<li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
  src="${s}"
  data-source="${t}"
  data-tags="${i}"
  data-likes="${e}"
  data-views="${r}"
  data-comments="${o}"
  data-downloads="${l}"
  alt="Image description"
    />
  </a>
  <div >
  <ul class="stats">
    <li class="stat-item">
    <div class="stat-header">Likes</div>
    <div class="stat-value">${e}</div>
    </li>
    <li class="stat-item">
    <div class="stat-header">Views</div>
    <div class="stat-value">${r}</div>
    </li>
    <li class="stat-item">
    <div class="stat-header">Comments</div>
    <div class="stat-value">${o}</div>
    </li>
    <li class="stat-item">
    <div class="stat-header">Downloads</div>
    <div class="stat-value">${l}</div>
    </li>
  </ul>
</div>
</li>`).join(""),f="45172524-3969727cd49dc0a3e64f2f5a7",h=a=>{const s=new URLSearchParams({key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{throw console.error(t),t})},y=document.querySelector(".search__form"),n=document.querySelector(".js__loader"),d=document.querySelector(".gallery"),g=a=>{a.preventDefault();const s=a.target.elements.user_query.value.trim();if(s===""){c.error({message:"Input something to search!",position:"topRight"});return}n.classList.remove("is-hidden"),h(s).finally(()=>{n.classList.add("is-hidden")}).then(({hits:t})=>{if(!t||t.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.target.reset();return}p();const i=m(t);d.innerHTML=i,v.refresh()})};function p(){d.innerHTML=""}y.addEventListener("submit",g);const v=new u(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map

System.register(["./index-legacy-DuUMURFy.js"],(function(e,t){"use strict";var o,n;return{setters:[e=>{o=e.d,n=e.p}],execute:function(){e("startTapClick",(e=>{if(void 0===o)return;let d,l,u,f=0;const v=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),p=new WeakMap,m=()=>{u&&clearTimeout(u),u=void 0,d&&(g(!1),d=void 0)},L=(e,t)=>{if(e&&e===d)return;u&&clearTimeout(u),u=void 0;const{x:o,y:s}=n(t);if(d){if(p.has(d))throw new Error("internal error");d.classList.contains(r)||h(d,o,s),g(!0)}if(e){const t=p.get(e);t&&(clearTimeout(t),p.delete(e)),e.classList.remove(r);const n=()=>{h(e,o,s),u=void 0};i(e)?n():u=setTimeout(n,a)}d=e},h=(e,t,o)=>{if(f=Date.now(),e.classList.add(r),!v)return;const n=s(e);null!==n&&(w(),l=n.addRipple(t,o))},w=()=>{void 0!==l&&(l.then((e=>e())),l=void 0)},g=e=>{w();const t=d;if(!t)return;const o=c-Date.now()+f;if(e&&o>0&&!i(t)){const e=setTimeout((()=>{t.classList.remove(r),p.delete(t)}),c);p.set(t,e)}else t.classList.remove(r)};o.addEventListener("ionGestureCaptured",m),o.addEventListener("pointerdown",(e=>{d||2===e.button||L(t(e),e)}),!0),o.addEventListener("pointerup",(e=>{L(void 0,e)}),!0),o.addEventListener("pointercancel",m,!0)}));
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
const t=e=>{if(void 0===e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},i=e=>e.classList.contains("ion-activatable-instant"),s=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},r="ion-activated",a=100,c=150}}}));

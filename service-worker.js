if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let c={};const o=e=>i(e,l),u={module:{uri:l},exports:c,require:o};n[l]=Promise.all(r.map((e=>u[e]||o(e)))).then((e=>(s(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"finance"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/finance/css/app.c0bd3f10.css",revision:null},{url:"/finance/img/github.f2364342.png",revision:null},{url:"/finance/img/home.d3ef1598.png",revision:null},{url:"/finance/img/instagram.a35eda2b.png",revision:null},{url:"/finance/img/me.5dd10d97.png",revision:null},{url:"/finance/img/telegram.5eb37479.png",revision:null},{url:"/finance/index.html",revision:"c08567f9e6722f5a24b33b70789a5ca6"},{url:"/finance/js/app.d2f17180.js",revision:null},{url:"/finance/js/chunk-vendors.a8a259ee.js",revision:null},{url:"/finance/manifest.json",revision:"7f3de38bccde709587d0ac48c4d38c2b"},{url:"/finance/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

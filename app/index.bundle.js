webpackJsonp([0],[,,,,,function(e,s,t){e.exports=t(6)},function(e,s,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var s=0,t=Array(e.length);s<e.length;s++)t[s]=e[s];return t}return Array.from(e)}t(1),t(7);var r=t(2),o=i(r),a=t(8),p=i(a);(0,o.default)(),function(e){e.keys().forEach(e)}(t(9));var c=function(){var e=window.matchMedia("(max-width: 768px)");"#login"===window.location.hash?u.autorizate():u.initWelcome(),(0,p.default)()||e.matches||l.handler()},l=function(){var e=document.body.querySelector("#parallax"),s=[].concat(n(e.children)),t=function(){var t=s[s.length-1].dataset.speed,i=window.innerHeight/2*t,n=window.innerWidth/2*t,r=e.style;r.top="-"+i+"px",r.bottom="-"+i+"px",r.left="-"+n+"px",r.right="-"+n+"px"},i=function(e){var t=window.innerWidth/2-e.pageX,i=window.innerHeight/2-e.pageY;s.forEach(function(e){var s=e.dataset.speed,n=t*s,r=i*s,o=e.style;o.transform="translate("+n+"px, "+r+"px)",o.WebkitTransform="translate("+n+"px, "+r+"px)"})};return{handler:function(){t(),window.addEventListener("resize",t,!1),window.addEventListener("mousemove",i,!1)}}}(),u=function(){var e=document.body,s=e.querySelector(".l-welcome"),t=e.querySelector(".c-button#targetLogin"),i=e.querySelector(".l-login__button"),n=e.querySelector("#faceBl"),r=e.querySelector("#backFaceBl"),o=e.querySelector(".l-face-container"),a=e.querySelector(".l-backface-container"),p=function(e){e.preventDefault(),s.classList.contains("flip")?s.classList.remove("flip"):s.classList.add("flip"),setTimeout(function(){i.classList.toggle("visually-hidden"),i.classList.contains("visually-hidden")||t.addEventListener("click",c,!1)},500)},c=function n(r){r.preventDefault(),s.classList.contains("flip")?s.classList.remove("flip"):s.classList.add("flip"),setTimeout(function(){i.classList.toggle("visually-hidden"),i.classList.contains("visually-hidden")?e.querySelector(".c-form__nav-link#targetMain").addEventListener("click",p,!1):t.addEventListener("click",n,!1)},500)},l=function(){o.innerHTML=r.innerHTML,r.innerHTML="",a.innerHTML=n.innerHTML,n.innerHTML="",i.classList.add("visually-hidden"),e.querySelector(".c-form__nav-link#targetMain").addEventListener("click",p,!1)};return{initWelcome:function(){o.innerHTML=n.innerHTML,n.innerHTML="",a.innerHTML=r.innerHTML,r.innerHTML="",i.classList.contains("visually-hidden")||t.addEventListener("click",c,!1)},autorizate:l}}();window.onload=c,console.log("It` work %%%!")},function(e,s){},function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=function(){var e=new RegExp("Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile","i");return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")||e.test(navigator.userAgent)};s.default=i},function(e,s,t){function i(e){return t(n(e))}function n(e){var s=r[e];if(!(s+1))throw new Error("Cannot find module '"+e+"'.");return s}var r={"./about_header.svg":10,"./arrow_down.svg":11,"./bg.svg":12,"./blog_header.svg":13,"./dash.svg":14,"./edge_two_color.svg":15,"./github.svg":16,"./hamburger.svg":17,"./in.svg":18,"./link.svg":19,"./login.svg":20,"./mail.svg":21,"./map_marker.svg":22,"./password.svg":23,"./phone.svg":24,"./portf_arrow_down.svg":25,"./portf_arrow_up.svg":26,"./portfolio_header.svg":27,"./skype.svg":28,"./vk.svg":29,"./works_header.svg":30};i.keys=function(){return Object.keys(r)},i.resolve=n,e.exports=i,i.id=9},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/about_header.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/arrow_down.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/bg.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/blog_header.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/dash.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/edge_two_color.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/github.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/hamburger.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/in.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/link.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/login.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/mail.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/map_marker.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/password.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/phone.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/portf_arrow_down.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/portf_arrow_up.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/portfolio_header.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/skype.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/vk.svg"},function(e,s,t){e.exports=t.p+"assets/images/sprites/to_sprite/works_header.svg"}],[5]);
//# sourceMappingURL=index.bundle.js.map
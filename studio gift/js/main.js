$(document).ready(function(){var e=document.querySelectorAll(".goods__list-tab"),t=document.querySelector(".modal-form"),l=document.querySelector(".overlay"),o=document.querySelectorAll(".openModal"),a=document.querySelector(".close-modal"),n=document.querySelector(".modal-form-order"),r=document.querySelector(".close-modal-Order"),s={},i=document.querySelectorAll(".header__images > img"),c=document.querySelector(".basket__wrap"),d=document.querySelector(".basket"),u=document.querySelector(".basket__close"),m=document.querySelector(".basket__open"),y=document.querySelector(".basket__overlay"),p=document.querySelectorAll(".goods__item-btn"),_=document.querySelectorAll(".goods__item"),f=document.querySelector(".basket__counter"),g=document.querySelector(".basket__total-cost"),v=document.querySelector(".basket__sbm");function b(){d.style.display="none",document.body.style.overflow=""}function h(e){var t=c.querySelectorAll(".goods__item");f.textContent=t.length+e}function k(){var e=document.querySelector(".basket__empty");0==+f.textContent?(e.style.display="block",c.style.display="block",v.style.display=""):(e.style.display="none",c.style.display="grid",v.style.display="block")}function L(){var e=document.querySelectorAll(".basket__wrap > .goods__item > .goods__item-cost > span"),t=0;e.forEach(function(e){t+=+e.textContent.replace(/\s+/g,"")}),g.textContent=t}function q(){var e=this.getAttribute("data-id");1===s[e]?delete s[e]:s[e]--,this.parentElement.remove(),h(0),L(),k()}function S(e){return 1<e.length&&-1==e.search(/\d/)||(alert("Некорректное Имя!"),!1)}function w(e){return 0==e.search(/\d/)&&-1==e.search(/[A-Z]/i)||(alert("Некорректный телефон!"),!1)}m.addEventListener("click",function(){d.style.display="block",document.body.style.overflow="hidden"}),u.addEventListener("click",b),y.addEventListener("click",b),v.addEventListener("click",function(){l.style.display="block",n.style.display="block",r.style.display="block",l.classList.toggle("overlay-active")}),p.forEach(function(a,n){a.addEventListener("click",function(){var e=_[n].cloneNode(!0),t=e.querySelector("button"),l=document.createElement("div"),o=a.getAttribute("data-id");l.setAttribute("data-id",o),l.addEventListener("click",q),t.remove(),h(1),l.classList.add("goods__item-remove"),l.innerHTML='<i class="far fa-times-circle"></i>',e.appendChild(l),e.style="",e.classList.remove("wow"),e.classList.remove("fadeInLeftBig"),c.appendChild(e),void 0===s[o]?s[o]=1:s[o]++,m.classList.toggle("basket-pulse"),setTimeout(function(){m.classList.toggle("basket-pulse")},600),k(),L()})}),$(".feedback__carousel").owlCarousel({loop:!0,margin:30,items:3,smartSpeed:1500,dots:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},992:{items:3}}}),$(".header__carousel").owlCarousel({loop:!0,margin:30,items:3,smartSpeed:500,dots:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,dotsContainer:"#owl-custom-dots",responsive:{0:{items:1}}}),i.forEach(function(e){setTimeout(function(){e.classList.remove("wow"),e.style=""},3e3)}),new WOW({offset:100,mobile:!1}).init(),$.fn.parallax=function(e,t){$el=$(this),TweenLite.to($el,.2,{x:-(t.clientX-window.innerWidth/2)/e,y:-(t.clientY-window.innerHeight/2)/e})},$.fn.parallaxY=function(e,t){$el=$(this),TweenLite.to($el,.2,{y:-(t.clientY-window.innerHeight/2)/e})},$("body").mousemove(function(e){$(".bg__bear_red").parallaxY(-10,e),$(".bg__bear_violet").parallax(10,e),$(".header__images-bouquet").parallax(-50,e),$(".header__images-bouquet-shadow").parallax(-50,e),$(".header__images-blur-flower").parallax(40,e),$(".header__images-left-leaf").parallax(-20,e),$(".header__images-left-fl").parallax(30,e),$(".header__images-right-fl").parallax(-20,e),$(".header__images-blur-leaf").parallax(10,e),$(".header__images-right-leaf").parallax(-20,e)}),e.forEach(function(e){e.addEventListener("click",function(){var e,t,l,o=this.getAttribute("data-id");for(t=document.getElementsByClassName("goods__item-wrap"),e=0;e<t.length;e++)t[e].style.display="none";for(l=document.getElementsByClassName("goods__list-tab"),e=0;e<l.length;e++)l[e].className=l[e].className.replace(" goods__list-tab-active","");document.getElementById(o).style.display="grid",this.className+=" goods__list-tab-active"})}),document.getElementById("defaultOpen").click(),$(".main__menu-link").on("click",function(){var e=$(this).attr("href"),t=$(e).offset().top;$("body,html").animate({scrollTop:t})}),o.forEach(function(e){e.addEventListener("click",function(){l.style.display="block",t.style.display="block",l.classList.toggle("overlay-active")})}),a.addEventListener("click",function(){overlayCall.style.display="none",t.style.display="none",t.classList.toggle("modal-active"),overlayCall.classList.toggle("overlay-active")}),l.addEventListener("click",function(){l.style.display="none",n.style.display="none",t.style.display="none",l.classList.toggle("overlay-active")}),document.querySelector(".form__sbm").addEventListener("click",function(){var e,t;e=$("#name-input").val(),t=$("#tel-input").val(),S(e)&&w(t)&&$.post("mail.php",{name:e,tel:t},function(){alert("Мы вам перезвоним!"),$(this).find("input").val(""),$(".order-form").trigger("reset")})}),document.querySelector(".form__sbm-order").addEventListener("click",function(){var e,t;e=$("#name-input").val(),t=$("#tel-input").val(),S(e)&&w(t)&&(function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(s)?alert("Корзина пуста!"):$.post("order.php",{name:e,tel:t,basket:s},function(){alert("Мы вам перезвоним!"),$(this).find("input").val(""),$(".order-form").trigger("reset")}))})});
//# sourceMappingURL=main.js.map

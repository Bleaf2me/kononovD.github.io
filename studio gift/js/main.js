$(document).ready(function(){var e=document.querySelectorAll(".goods__list-tab"),t=document.querySelector(".modal-form"),l=document.querySelector(".overlay"),o=document.querySelectorAll(".openModal"),a=document.querySelector(".close-modal"),n={},s=document.querySelectorAll(".header__images > img"),i=document.querySelector(".basket__wrap"),r=document.querySelector(".basket"),c=document.querySelector(".basket__close"),d=document.querySelector(".basket__open"),u=document.querySelector(".basket__overlay"),m=document.querySelectorAll(".goods__item-btn"),y=document.querySelectorAll(".goods__item"),_=document.querySelector(".basket__counter"),g=document.querySelector(".basket__total-cost"),p=document.querySelector(".basket__sbm");function f(){r.style.display="none",document.body.style.overflow=""}function v(e){var t=i.querySelectorAll(".goods__item");_.textContent=t.length+e}function b(){var e=document.querySelector(".basket__empty");0==+_.textContent?(e.style.display="block",i.style.display="block",p.style.display=""):(e.style.display="none",i.style.display="grid",p.style.display="flex")}function h(){var e=document.querySelectorAll(".basket__wrap > .goods__item > .goods__item-cost > span"),t=0;e.forEach(function(e){t+=+e.textContent.replace(/\s+/g,"")}),g.textContent=t}function k(){var e,t,l=$("#name-input").val(),o=$("#tel-input").val();(1<(t=l).length&&-1==t.search(/\d/)||(alert("Некорректное Имя!"),0))&&(0==(e=o).search(/\d/)&&-1==e.search(/[A-Z]/i)||(alert("Некорректный телефон!"),0))&&$.post("mail.php",{name:l,tel:o},function(){alert("Мы вам перезвоним!"),$(this).find("input").val(""),$(".order-form").trigger("reset")})}d.addEventListener("click",function(){r.style.display="block",document.body.style.overflow="hidden"}),c.addEventListener("click",f),u.addEventListener("click",f),m.forEach(function(a,s){a.addEventListener("click",function(){var e=y[s].cloneNode(!0),t=e.querySelector("button"),l=document.createElement("div"),o=a.getAttribute("data-id");l.setAttribute("data-id",o),t.remove(),v(1),l.classList.add("goods__item-remove"),l.innerHTML='<i class="far fa-times-circle"></i>',e.appendChild(l),e.style="",e.classList.remove("wow"),e.classList.remove("fadeInLeftBig"),i.appendChild(e),void 0===n[o]?n[o]=1:n[o]++,console.log(n),d.classList.toggle("basket-pulse"),setTimeout(function(){d.classList.toggle("basket-pulse")},600),b(),h(),i.querySelectorAll(".goods__item-remove").forEach(function(t){t.addEventListener("click",function(){var e=t.getAttribute("data-id");1===n[e]?delete n[e]:n[e]--,console.log(n),t.parentElement.remove(),v(0),h(),b()})})})}),$(".feedback__carousel").owlCarousel({loop:!0,margin:30,items:3,smartSpeed:1500,dots:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},992:{items:3}}}),$(".header__carousel").owlCarousel({loop:!0,margin:30,items:3,smartSpeed:500,dots:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,dotsContainer:"#owl-custom-dots",responsive:{0:{items:1}}}),s.forEach(function(e){setTimeout(function(){e.classList.remove("wow"),e.style=""},3e3)}),new WOW({}).init({offset:30}),$.fn.parallax=function(e,t){$el=$(this),TweenLite.to($el,.2,{x:-(t.clientX-window.innerWidth/2)/e,y:-(t.clientY-window.innerHeight/2)/e})},$.fn.parallaxY=function(e,t){$el=$(this),TweenLite.to($el,.2,{y:-(t.clientY-window.innerHeight/2)/e})},$("body").mousemove(function(e){$(".bg__bear_red").parallaxY(-10,e),$(".bg__bear_violet").parallax(10,e),$(".header__images-bouquet").parallax(-50,e),$(".header__images-bouquet-shadow").parallax(-50,e),$(".header__images-blur-flower").parallax(40,e),$(".header__images-left-leaf").parallax(-20,e),$(".header__images-left-fl").parallax(30,e),$(".header__images-right-fl").parallax(-20,e),$(".header__images-blur-leaf").parallax(10,e),$(".header__images-right-leaf").parallax(-20,e)}),e.forEach(function(e){e.addEventListener("click",function(){var e,t,l,o=this.getAttribute("data-id");for(t=document.getElementsByClassName("goods__item-wrap"),e=0;e<t.length;e++)t[e].style.display="none";for(l=document.getElementsByClassName("goods__list-tab"),e=0;e<l.length;e++)l[e].className=l[e].className.replace(" goods__list-tab-active","");document.getElementById(o).style.display="grid",this.className+=" goods__list-tab-active"})}),document.getElementById("defaultOpen").click(),$(".main__menu-link").on("click",function(){var e=$(this).attr("href"),t=$(e).offset().top;$("body,html").animate({scrollTop:t})}),o.forEach(function(e){e.addEventListener("click",function(){l.style.display="block",t.style.display="block",t.classList.toggle("modal-active"),l.classList.toggle("overlay-active")})}),a.addEventListener("click",function(){l.style.display="none",t.style.display="none",t.classList.toggle("modal-active"),l.classList.toggle("overlay-active")}),l.addEventListener("click",function(){l.style.display="none",t.style.display="none",t.classList.toggle("modal-active"),l.classList.toggle("overlay-active")}),document.querySelector(".form__sbm").addEventListener("click",function(){k()})});
//# sourceMappingURL=main.js.map

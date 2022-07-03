const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sliderMain = $(".slider-main ")
const barSliderItem = $$(".bar-slider-item")
const imgSliderItems = $$(".slide-beaches-item")
const openSideBarBtn = $('.header-menu__img')
const closeSideBarBtn = $('.side-bar-package__close')
const sidebar = $(".side-bar-wrap")
const overlayMain = $(".overlay-main")
var i = 0
var arr = []
// Xu ly slider
function handelSlider(){
        barSliderItem.forEach((elem, index) => {
            const imgItem = imgSliderItems[index]
            arr.push(
                elem.onclick = function(){
                    $(".bar-slider-item.active").classList.remove("active")
                    elem.classList.add("active")
                    $(".slide-beaches-item.active").classList.remove("active")
                    imgItem.classList.add("active")
                    i = index
                }
            )
        })  
        setInterval(function() {
            arr[i]();
            i++;
            if(i > arr.length-1) i=0;
        },5000) 
}
// Su ly dong/ mo side bar
function handelSideBar(){
    openSideBarBtn.addEventListener("click", () => {
        sidebar.classList.add("show")
        sidebar.style.animation = "RightToLeft linear 0.5s "
        overlayMain.style.display = "block"

    })
    closeSideBarBtn.addEventListener("click", () => {
        sidebar.classList.remove("show")
        sidebar.style.animation = "LeftToRight linear 0.5s "
        overlayMain.style.display = "none"
    })
    overlayMain.addEventListener("click", () => {
        sidebar.classList.remove("show")
        sidebar.style.animation = "LeftToRight linear 0.5s "
        overlayMain.style.display = "none"
    })
    
}
function start(){
    handelSlider()
    handelSideBar()
}
start()

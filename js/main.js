/*const video = document.querySelector(".video-container video");
//const hoverText = document.querySelector(".video-container .hover-text");

video.addEventListener("click", () => {
    video.play();
    //hoverText.classList.remove("active");
});

video.addEventListener("click", () => {
    video.pause();
    //hoverText.classList.add("active");
});


const observer= new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if ( entry.isIntersecting) {
            entry.target.classList.add('show');
        }   else{
            entry.target.classList.remove('show');
        }
    });

});
hiddenElements.forEach((el) => observer.observe(el));


const hiddenElements = document.querySelectorAll('.hidden');

*/
function createPopup(id){
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector(".overlay");
    let closeBtn = popupNode.querySelector(".close-btn");
    function openPopup(){
        popupNode.classList.add('active');
    }
    function closePopup(){
        popupNode.classList.remove('active');
    }
    overlay.addEventListener('click', closePopup);
    closeBtn.addEventListener('click', closePopup);
    return openPopup;
}
let popup = createPopup('#popup');
document.querySelector('#open-popup').addEventListener('click',popup);


function gotoLink(link){
    
    location.href='page2.html';
  }
  
// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

// const modal = document.querySelector('.modal');
// const toggleButton = document.querySelector('.toggle__pic');
// const closeButton = document.querySelector('.close__button');

// function toggleModal() {
//     modal.classList.toggle('show__modal');
// }

// function clickWindow(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// toggleButton.addEventListener('click', toggleModal);
// closeButton.addEventListener('click', toggleModal);
// window.addEventListener('click', clickWindow);

// var GWmodal = document.querySelector(".modal-display-box-GW");
// var GWtrigger = document.querySelector(".GWbutton");
// var CBmodal = document.querySelector(".modal-display-box-CB");
// var CBtrigger = document.querySelector(".CBbutton");
// var KRmodal = document.querySelector(".modal-display-box-KR");
// var KRtrigger = document.querySelector(".KRbutton");
// var MSmodal = document.querySelector(".modal-display-box-MS");
// var MStrigger = document.querySelector(".MSbutton");
// var closeButton = document.querySelector(".close-button");
// const modalDisplayBoxGw = document.querySelector('.modal-display-box-GW')
// const modalDisplayBoxCb = document.querySelector('.modal-display-box-CB')
// const modalDisplayBoxKr = document.querySelector('.modal-display-box-KR')
// const modalDisplayBoxMs = document.querySelector('.modal-display-box-MS')

// function toggleModalGW() {
//     GWmodal.classList.toggle("show-GWmodal");
// }
// function toggleModalCB() { 
//     CBmodal.classList.toggle("show-CBmodal");
// }   
// function toggleModalKR() {
//     KRmodal.classList.toggle("show-KRmodal");
// }
// function toggleModalMS() {
//     MSmodal.classList.toggle("show-MSmodal");
// }

// function windowOnClick(event) {
//     if (event.target === GWmodal) {
//        toggleModalGW()
//     } else if 
//         (event.target === CBmodal) {
//         toggleModalCB();
//     } else if
//         (event.target === KRmodal) {
//         toggleModalKR();
//     } else {
//         toggleModalMS();    
//     }   
//     }

// GWtrigger.addEventListener("click", toggleModalGW);
// modalDisplayBoxGw.addEventListener('click', toggleModalGW)

// CBtrigger.addEventListener("click", toggleModalCB);
// modalDisplayBoxCb.addEventListener('click', toggleModalCB)

// KRtrigger.addEventListener("click", toggleModalKR);
// modalDisplayBoxKr.addEventListener('click', toggleModalKR)

// MStrigger.addEventListener("click", toggleModalMS);
// modalDisplayBoxMs.addEventListener('click', toggleModalMS)
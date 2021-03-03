const tabsBtn = document.querySelectorAll(".tabs_btn");
const tabsItems = document.querySelectorAll(".tabs_content");


tabsBtn.forEach(function(item){
  item.addEventListener("click", function(){
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      console.log(tabId);

      tabsBtn.forEach(function(item) {
          item.classList.remove('active');
      })
      tabsItems.forEach(function(item) {
        item.classList.remove('active_content');

      currentBtn.classList.add('active');
      currentTab.classList.add('active_content');
    })
})
})


const authButton = document.getElementsByClassName("auth-button")[0];
const modalBackground = document.getElementsByClassName("modal-bg-js")[0];
const modal = document.getElementsByClassName("modal-js")[0];
console.log(modal);

authButton.addEventListener("click", function() {
  modal.classList.add("active_modal");
  modalBackground.classList.add("background_modal--active");
})


modalBackground.addEventListener("click", function() {
  modalBackground.classList.remove("background_modal--active");
  modal.classList.remove("active_modal");
})

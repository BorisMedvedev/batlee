// const hourEl = document.getElementById("hour");
// const minuteEl = document.getElementById("minutes");
// const secondEl = document.getElementById("seconds");
// const ampmEl = document.getElementById("ampm");

// function updateClock() {
//   let h = new Date().getHours();
//   let m = new Date().getMinutes();
//   let s = new Date().getSeconds();
//   let ampm = "AM";

//   if (h > 12) {
//     h = h - 12;
//     ampm = "PM";
//   }

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   hourEl.innerText = h;
//   minuteEl.innerText = m;
//   secondEl.innerText = s;
//   ampmEl, (innerText = ampm);
//   setTimeout(() => {
//     updateClock();
//   }, 1000);
// }

// updateClock();

function tabsContent() {
  let tabsBtn = document.querySelectorAll(".player__tabs-btn");
  let tabsItem = document.querySelectorAll(".tabs-content");

  tabsBtn.forEach(function (el) {
    el.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) {
        btn.classList.remove("player__tabs-btn--active");
        e.currentTarget.classList.add("player__tabs-btn--active");

        tabsItem.forEach(function (el) {
          el.classList.remove("tabs-content--active");
          document
            .querySelector(`[data-target='${path}']`)
            .classList.add("tabs-content--active");
        });
      });
    });
  });
}
tabsContent();

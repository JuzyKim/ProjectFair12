function toggleDarkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
}

// Function to open the sidebar
function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementsByClassName("content")[0].style.marginLeft = "250px";
}
function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";

  document.getElementsByClassName("content")[0].style.marginLeft = "0";
}
const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");
const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);

$.fn.tabbing = function (options) {
  var opts = { delayTime: 300 };
  options = options || {};
  opts = $.extend(opts, options);
  return this.each(function () {
    $(this).on("click", function (event) {
      event.preventDefault();
      var sum = 0;
      $(this)
        .prevAll()
        .each(function () {
          sum += $(this).width();
        });
      var get = document.getElementById("tabs").scrollWidth;
      var dist = sum - ($(this).parent().width() - $(this).width()) / 2;
      if (dist < 0) {
        dist = 0;
      }
      /* else if(dist+sum > get){
            dist = get-sum+dist+dist;
          } */
      $(this).parent().animate(
        {
          scrollLeft: dist,
        },
        opts["delayTime"]
      );
    });
  });
};
$("#tabs li").tabbing();

$("#tabs li").click(function () {
  var hashit = $(this).find("a").attr("href");
  var autoHeight = $(hashit).height() + 30;
  $(".tab-content").animate({ height: autoHeight }, 100);
});
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
const sidebar = document.querySelector(".sidebar");
const navLink = document.querySelector(".nav_link");
sidebar.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

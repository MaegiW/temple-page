import $ from "jquery"
import 'slick-carousel'

window.addEventListener('DOMContentLoaded', () => {
    $(".navbar-list-item").on('click', (e) => {
        e.preventDefault();
        console.log("test");
    });

    $(".tutorial-box").on('click', (e) => {
        e.preventDefault();
    });

    $(".season-pic").on('click', (e) => {
        e.preventDefault();
    });

    $(".widget").on('click', (e) => {
        e.preventDefault();
    });

    $(".secondary-btn").on('click', (e) => {
        e.preventDefault();
    });

    $(".footer-nav-wrapper").on('click', (e) => {
        e.preventDefault();
    });

    $(".slick-wrapper").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        speed: 500,
        dots: false,
        cssEase: 'linear',
        arrows: false
    })
})


// hamburger bar///
const hamburger_bar = document.querySelector(".hamburger-bar");
const navbar_list = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

hamburger_bar.addEventListener("click", () => {
    toggleOverlay();
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    toggleOverlay();
}));

function toggleOverlay() {
    hamburger_bar.classList.toggle("active");
    navbar_list.classList.toggle("active");


    // 如果 overlay 是隱藏的，則顯示；如果是顯示的，則隱藏
    if (overlay.style.display === "" || overlay.style.display === "none") {
        overlay.style.display = "block";
    } else {
        overlay.style.display = "none";
    }
}


// Date
const dateUI = document.querySelector(".date");
function callDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let shortYear = year.toString();

    shortYear = shortYear.slice(-2);

    dateUI.textContent = `${day}/${month}/${shortYear}`;
    setTimeout(callDate, 10000);
}

callDate();

// Time
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("clockDisplay").innerText = time;


    setTimeout(showTime, 1000);
}

showTime();

/*  RWD footer accordion */
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click',
            { el: this.el, multiple: this.multiple },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
    }

    var accordion = new Accordion($('.accordion-menu'), false);
});


// event area

document.addEventListener('DOMContentLoaded', function () {
    // 獲取所有的 accordion-header 元素
    var headers = document.querySelectorAll('.accordion-header');

    // 為每個 header 添加點擊事件監聽器
    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            // 檢查當前 header 是否已經是 active
            var isActive = header.classList.contains('active');

            // 移除所有 accordion-header 的 active 類
            headers.forEach(function (h) {
                h.classList.remove('active');
                h.querySelector('.icon').textContent = '+';
                // 重置所有 accordion 的可見性
                var accordion = h.querySelector('.event-accordion');
                accordion.style.maxHeight = null;
            });

            if (!isActive) {
                // 如果當前 header 不是 active，則添加 active 類
                header.classList.add('active');

                // 獲取當前 header 下的 event-accordion 元素
                var accordion = header.querySelector('.event-accordion');

                // 切換 accordion 的可見性
                accordion.style.maxHeight = accordion.scrollHeight + 'px';

                // 切換 +/- 符號
                var icon = header.querySelector('.icon');
                icon.textContent = '-';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            const eventItem = header.querySelector('.event-item');

            const isClicked = eventItem.classList.contains('clicked');

            document.querySelectorAll('.event-item').forEach(function (item) {
                item.classList.remove('clicked');
            });
            if (!isClicked) {
                eventItem.classList.add('clicked');
            }
        });
    });
});


////////////////聯絡我們////////////
// 意見類型
$(".relate").click(function () {
    $(".relate-option").show();
});
$(".relate-option li").click(function () {
    var _text = $(this).text();
    $(".relate").val(_text);
    $(".relate-option").hide();
});

// 定義切換彈跳視窗顯示的函數


document.addEventListener("DOMContentLoaded", function () {
    // 獲取元素
    const openPopupButtons = document.querySelectorAll(".openpopup");
    const containerPopup = document.querySelector(".container-popup");
    const popup = document.querySelector(".popup");

    // 對所有 openpopup 按鈕添加點擊事件監聽器
    openPopupButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            // Prevent the default behavior of the anchor tag
            event.preventDefault();

            // Show the container-popup
            containerPopup.style.display = "flex";

            // Use a timeout to ensure the transition starts after the display property change
            setTimeout(function () {
                // Slide up the popup
                popup.style.transform = "translateY(0)";
            }, 0);
        });
    });

    // Add click event listener to the close button
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", function () {
        // Slide down the popup
        popup.style.transform = "translateY(-100%)";

        // Use a timeout to ensure the transition completes before hiding the container-popup
        setTimeout(function () {
            // Hide the container-popup
            containerPopup.style.display = "none";
        }, 300); // 0.3s, NONE
    });
});

//清除按鈕
document.getElementById('clear-form').addEventListener('click', function (event) {
    event.preventDefault();
    const formElements = document.querySelectorAll('.contact-form input, .contact-form textarea');

    // Loop through each element and set its value to an empty string
    formElements.forEach(function (element) {
        element.value = '';
    });

});

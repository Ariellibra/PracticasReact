import { useEffect } from "react";


const stickystickyHeader = () => {
    const header = document.querySelector("header");
    const stickyHeader = header?.querySelector(".sticky-header");

    if (stickyHeader) {
        window.addEventListener("scroll", () => {
            const stickyHeaderHeight = stickyHeader.offsetHeight;
            const scrollCount = window.scrollY;

            // if (scrollCount - headerHeight < 0 && scrollCount - headerHeight > -5) {

            // }
            if (scrollCount < 300) {
                if (scrollCount > 200) {
                    stickyHeader.setAttribute(
                        "style",
                        `position: fixed;top: -${stickyHeaderHeight}px;left:0;right:0
        `
                    );
                    stickyHeader.classList.remove("active");
                } else {
                    stickyHeader.removeAttribute("style");
                    stickyHeader.classList.remove("active");
                }
            }
            if (scrollCount > 300) {
                stickyHeader.setAttribute(
                    "style",
                    " position: fixed;top: 0px; left:0;right:0 "
                );
                stickyHeader.classList.add("active");
            }
        });
    }
};

const showDropdown = (navItems, currentIndex) => {
    navItems.forEach((navItem, idx) => {
        const dropdown = navItem.querySelector(".dropdown");
        const dropdownClasses = dropdown?.classList;

        if (currentIndex === idx && dropdownClasses) {
            // dropdown.style.transition = ".3s";
            dropdown.style.display = "block";
            setTimeout(() => {
                dropdown.style.opacity = "1";
                dropdown.style.transform = "translate(0)";
            }, 150);
        }
    });
};

const hideDropdown = (navItems, currentIndex) => {
    navItems.forEach((navItem, idx) => {
        const dropdown = navItem.querySelector(".dropdown");
        const dropdownClasses = dropdown?.classList;

        if (currentIndex === idx && dropdownClasses) {
            // dropdown.style.transition = ".3s";
            dropdown.style.opacity = "0";
            dropdown.style.transform = "translateY(20px)";
            setTimeout(() => {
                dropdown.style.display = "none";
            }, 150);
        }
    });
};

const handleMouseEnter = (navItems) => {
    navItems.forEach((navItem, idx) => {
        navItem.addEventListener("mouseenter", () => showDropdown(navItems, idx));
    });
};

const handleMouseOut = (navItems) => {
    navItems.forEach((navItem, idx) => {
        navItem.addEventListener("mouseleave", () => hideDropdown(navItems, idx));
    });
};

const dropdownController = () => {
    const navLists = document.querySelectorAll(".nav-list");

    navLists.forEach((navList) => {
        const nodeListOfNavItems = navList.children;
        const navItems = [...nodeListOfNavItems];
        handleMouseEnter(navItems);
        handleMouseOut(navItems);
    });
};

const handleCurrentTabLinkStyle = (tabLinks, currentIndex) => {
    tabLinks.forEach((tabLink, idx) => {
        const currentTabLink = tabLinks[currentIndex];
        const tabLinkClasses = tabLink.classList;
        const currentTabLinkClasses = currentTabLink.classList;
        const spanClasses = tabLink.querySelector("span")?.classList;

        const currentSpanClasses = currentTabLink.querySelector("span")?.classList;

        if (spanClasses) {
            // button default style
            tabLinkClasses.remove("bg-white", "shadow-bottom");
            tabLinkClasses.add(
                "bg-lightGrey7",
                "dark:bg-lightGrey7-dark",
                "inActive"
            );
            spanClasses.replace("w-full", "w-0");
            tabLink.disabled = false;
            // current button style
            if (currentIndex === idx) {
                currentTabLink.disabled = true;
                currentTabLinkClasses.remove(
                    "bg-lightGrey7",
                    "dark:bg-lightGrey7-dark",
                    "inActive"
                );
                currentTabLinkClasses.add(
                    "bg-white",
                    "dark:bg-whiteColor-dark",
                    "shadow-bottom"
                );
                currentSpanClasses.replace("w-0", "w-full");
            }
        } else {
            tabLinkClasses.remove("before:w-full", "active");
            if (currentIndex === idx) {
                tabLinkClasses.add("before:w-full", "active");
            }
        }
    });
};

const handleTabContents = (tab, currentIndex) => {
    const nodeListOftabContents = tab.querySelector(".tab-contents").children;
    const tabContents = [...nodeListOftabContents];
    const currentTabContentClasses = tabContents[currentIndex].classList;
    tabContents.forEach((tabContent, idx) => {
        const tabContentClasses = tabContent.classList;

        // tab contents default style
        tabContentClasses.remove("block");
        tabContentClasses.add("hidden");

        if (currentIndex === idx) {
            currentTabContentClasses.add("block", "opacity-0");
            currentTabContentClasses.remove("hidden", "opacity-100");

            // add accordion style
            const accordion = tab.querySelector(".accordion.active");
            if (accordion) {
                const contents = accordion.querySelector(".accordion-content");
                const contentHeight = contents.children[idx]?.offsetHeight;
                if (contentHeight) {
                    contents.style.height = `${contentHeight}px`;
                }
            }
            setTimeout(() => {
                currentTabContentClasses.remove("opacity-0");
                currentTabContentClasses.add("opacity-100");
            }, 150);
        }
    });
};

const handleOpen = (mobileMenu, closeMobileMenu) => {
    const openMobileMenu = document.querySelector(".open-mobile-menu");

    openMobileMenu.addEventListener("click", () => {
        closeMobileMenu.style.display = "block";
        mobileMenu.style.right = "0";
    });
};

const handleClose = (mobileMenu, closeMobileMenu) => {
    closeMobileMenu.addEventListener("click", () => {
        const currentScreenSize = innerWidth;
        mobileMenu.style = "right:-280px;";
        mobileMenu.style = "@media screen and (min-width:768px){right:-330px;}";

        setTimeout(() => {
            closeMobileMenu.style.display = "none";
        }, 1000);
    });
};

const mobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMobileMenu = document.querySelector(".close-mobile-menu");
    if (mobileMenu) {
        handleOpen(mobileMenu, closeMobileMenu);
        handleClose(mobileMenu, closeMobileMenu);
    }
};

const handleTabLinks = (tab) => {
    const nodeListOfTabLinks = tab.querySelector(".tab-links").children;
    const tabLinks = [...nodeListOfTabLinks];

    tabLinks.forEach((tabLink, idx) => {
        tabLink.addEventListener("click", () => {
            handleCurrentTabLinkStyle(tabLinks, idx);
            handleTabContents(tab, idx);
        });
    });
};

const tabsController = () => {
    const nodeListOfTabs = document.querySelectorAll(".tab");
    const tabs = [...nodeListOfTabs];
    tabs.forEach((tab) => handleTabLinks(tab));
};

const controllerStyle = (accordionController, isActive) => {
    const rotateAbleLine = accordionController.querySelectorAll("span")[1];

    if (rotateAbleLine) {
        rotateAbleLine.style.transform = !isActive
            ? "rotate(0deg)"
            : "rotate(90deg)";
    }
};

const toggleAccordion = (accordion, isActive, currentIndex, index) => {
    const parentContent = accordion.closest(".accordion-content");
    const content = accordion.querySelector(".accordion-content");
    const contentWrapper = accordion.querySelector(".content-wrapper");
    const contentHeight = contentWrapper.offsetHeight;

    let contenStyleHeight = content.style.height;
    if (contenStyleHeight === "auto") {
        content.style.height = `${contentHeight}px`;
    }

    setTimeout(() => {
        content.style.height = !isActive ? `${contentHeight}px` : 0;
    }, 1);
    if (!isActive) {
        setTimeout(() => {
            if (!parentContent) {
                content.style.height = `auto`;
            }
        }, 500);
    }
};

const accordionController = (accordionContainer) => {
    const groupOfAccordion = [...accordionContainer.children];

    groupOfAccordion.forEach((accordion, idx) => {
        const accordionController = accordion.querySelector(
            ".accordion-controller"
        );
        const isInitialyActive = accordion.classList.contains("active");

        if (isInitialyActive) {
            const contents = accordion.querySelector(".accordion-content");
            const contentHeight = contents.children[idx].offsetHeight;
            if (contentHeight) {
                contents.style.height = `${contentHeight}px`;
            }
        }

        if (accordionController) {
            accordionController.addEventListener("click", function () {
                const currentAccordion = this.closest(".accordion");

                const isActive = currentAccordion.classList.contains("active");
                let waitForDblClick = setTimeout(() => {
                    groupOfAccordion.forEach((accordion, idx1) => {
                        const isAccordionController = accordion.querySelector(
                            ".accordion-controller"
                        );

                        if (isAccordionController) {
                            accordion.classList.remove("active");
                            const accordionController = accordion.querySelector(
                                ".accordion-controller"
                            );
                            controllerStyle(accordionController, true);
                            toggleAccordion(accordion, true, idx, idx1);
                        }
                    });
                    if (!isActive) {
                        currentAccordion.classList.add("active");
                        controllerStyle(accordionController, false);
                        toggleAccordion(currentAccordion, false);
                    }
                }, 10);
                accordionController.addEventListener("dblclick", function () {
                    clearTimeout(waitForDblClick);
                });
            });
        }
    });
};

const filter = () => {
    //isotop
    var grid = document.querySelector(".filter-contents");
    if (grid) {
        var iso = new Isotope(grid, {
            // options...
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {
                columnWidth: ".grid-item",
            },
        });
        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function (itemElem) {
                var number = itemElem.querySelector(".number").textContent;
                return parseInt(number, 10) > 50;
            },
            // show if name ends with -ium
            ium: function (itemElem) {
                var name = itemElem.querySelector(".name").textContent;
                return name.match(/ium$/);
            },
        };

        // bind filter button click
        var filtersElem = document.querySelector(".filters-button-group");
        filtersElem.addEventListener("click", function (event) {
            // only work with buttons
            if (!matchesSelector(event.target, "button")) {
                return;
            }
            var filterValue = event.target.getAttribute("data-filter");
            // use matching filter function
            filterValue = filterFns[filterValue] || filterValue;
            iso.arrange({ filter: filterValue });
        });

        // change is-checked class on buttons
        var buttonGroups = document.querySelectorAll(".button-group");
        for (var i = 0, len = buttonGroups.length; i < len; i++) {
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }

        function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener("click", function (event) {
                // only work with buttons
                if (!matchesSelector(event.target, "button")) {
                    return;
                }
                buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
                event.target.classList.add("is-checked");
            });
        }
    }
};





class countUp {
    constructor(el) {
        this.el = el;
        this.setVars();
        this.init();
    }

    setVars() {
        this.number = this.el.querySelectorAll("[data-countup-number]");
        this.observerOptions = { root: null, rootMargin: "0px 0px", threshold: 0 };
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const end = parseFloat(
                    entry.target.dataset.countupNumber.replace(/,/g, "")
                );
                const decimals = this.countDecimals(end);
                if (entry.isIntersecting) {
                    this.iterateValue(entry.target, end, decimals);
                }
            });
        }, this.observerOptions);
    }

    init() {
        if (this.number.length > 0) {
            this.number.forEach((el) => {
                this.observer.observe(el);
            });
        }
    }

    iterateValue(el, end, decimals) {
        const start = 0;
        const duration = 2500;
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsedPercent = (timestamp - startTimestamp) / duration;
            const easedProgress = Math.min(this.easeOutQuint(elapsedPercent), 1);
            let interimNumber = Math.abs(easedProgress * (end - start) + start);
            el.innerHTML = this.formatNumber(interimNumber, decimals);
            if (easedProgress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        // requestAnimationFrame returns DOMHighResTimeStamp as a callback (used as timestamp)
        window.requestAnimationFrame(step);
    }

    easeOutQuad(x) {
        return 1 - Math.pow(1 - x, 3);
    }

    easeOutQuint(x) {
        return 1 - Math.pow(1 - x, 5);
    }

    countDecimals(val) {
        if (Math.floor(val) === val) return 0;
        return val.toString().split(".")[1].length || 0;
    }

    formatNumber(val, decimals) {
        return val.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        });
    }
}

// Simplifed version of Viget dynamic modules to attach instances for this demo
// https://www.viget.com/articles/how-does-viget-javascript/
// You CAN use this pattern, but it's single purpose right now
const dataModules = [...document.querySelectorAll('[data-module="countup"]')];

dataModules.forEach((element) => {
    element.dataset.module.split(" ").forEach(function () {
        new countUp(element);
    });
});


const modalProductDetails = () => {
    const modalContainers = document.querySelectorAll(".modal-container");

    if (!modalContainers.length) {
        return;
    }
    console.log(modalContainers.length)
    modalContainers.forEach((modalContainer) => {
        const body = document.body;
        const bodyStyle = body.style;
        const modalOpens = modalContainer.querySelectorAll(".modal-open");
        const modalCloses = modalContainer.querySelectorAll(".modal-close");
        const modal = modalContainer.querySelector(".modal");
        const modalContent = modalContainer.querySelector(".modal-content");

        modalOpens.forEach((modalOpen) => {
            modalOpen.addEventListener("click", () => {
                modal.style.display = "block";
                bodyStyle.overflow = "hidden";
                bodyStyle.paddingRight = "17px";

                setTimeout(() => {
                    window.scroll({ top: window.scrollY - 100, behavior: "smooth" });
                    modal.style.opacity = 100;
                    modal.style.visibility = "visible";
                    modal.scrollTop = 0;
                    modalContent.style.transform = "translateY(0px)";
                }, 10);
            });
        });

        modalCloses.forEach((modalClose) => {
            modalClose.addEventListener("click", function () {
                modal.style.opacity = 0;
                modal.style.visibility = "hidden";
                modalContent.style.transform = `translateY(-${80}px)`;

                setTimeout(() => {
                    modal.style.display = "none";
                    bodyStyle.overflow = "auto";
                    bodyStyle.paddingRight = 0;
                }, 500);
            });
        });
    });
}

const videoModal = () => {
    document
        .querySelectorAll(".lvideo")
        .forEach((d) => d.addEventListener("click", playVideos));
    const body = document.body;

    function playVideos(e) {
        lvideo(e.currentTarget.dataset.url);

        body.classList.add("lvideo-active");

        var lvideoWrap = document.createElement("DIV");
        lvideoWrap.setAttribute("id", "lvideo-wrap");
        document.body.appendChild(lvideoWrap);

        const wrapper = document.getElementById("lvideo-wrap");
        wrapper.classList.add("active");

        const url = this.dataset.url;

        const startModal = `<span  class="lvideo-overlay"></span> <div class="lvideo-container">`;
        const finishModal = `<button  class="lvideo-close"><i class="icofont-close-line"></i></button></div>`;

        // if (url.indexOf("youtube") !== -1) {
        if (url.indexOf("youtube") !== -1 || url.indexOf("youtu") !== -1) {
            const ytUrl = [this.dataset.url];

            var i,
                r,
                regExp =
                    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

            for (i = 0; i < ytUrl.length; ++i) {
                r = ytUrl[i].match(regExp);

                document.getElementById(
                    "lvideo-wrap"
                ).innerHTML = `${startModal} <iframe width="560" height="315" title="YouTube Video" src='https://www.youtube.com/embed/${r[1]}?rel=0&autoplay=1&mute=1&loop=1&playlist=${r[1]}' frameborder="0" allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>${finishModal}`;
            }
            const modalOverlay = wrapper.querySelector(".lvideo-overlay");
            const modalClose = wrapper.querySelector(".lvideo-close");

            modalOverlay.addEventListener("click", lvideoClose);
            modalClose.addEventListener("click", lvideoClose);
        } else if (url.indexOf("vimeo") !== -1) {
            const vimeoURL = this.dataset.url;
            const regExp = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;

            const match = vimeoURL.match(regExp);

            if (match) {
                document.getElementById(
                    "lvideo-wrap"
                ).innerHTML = `${startModal}<iframe title="Vimeo" src="https://player.vimeo.com/video/${match[2]}?autoplay=1&loop=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>${finishModal}`;
            } else {
                alert("Not a Vimeo!  URL example:\n https://vimeo.com/120206922");
            }
        } else if (url.indexOf("mp4") !== -1 || url.indexOf("m4v") !== -1) {
            document.getElementById(
                "lvideo-wrap"
            ).innerHTML = `${startModal}<video controls loop playsinline autoplay><source src='${this.dataset.url}' type="video/mp4"></video>${finishModal}`;
        } else {
            alert("No video link found.");
        }
    }

    // LAUNCH
    function lvideo() { }
    const lvideoClose = () => {
        body.classList.remove("lvideo-active");

        const wrapper = document.getElementById("lvideo-wrap");
        wrapper.parentNode.removeChild(wrapper);
    };
};


const preloader = () => {
    const preloaderElemet = document.querySelector(".preloader");
    setTimeout(() => {
        preloaderElemet.style = "opacity:0; visibility:hidden;";
        setTimeout(() => {
            preloaderElemet.style.display = "none";
        }, 400);
    }, 1000);
};

const scrollUp = () => {
    const scrollUpElement = document.querySelector(".scroll-up");
    if (scrollUpElement) {
        scrollUpElement.addEventListener("click", () => {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
        });

        window.addEventListener("scroll", () => {
            const scrollCount = window.scrollY;

            if (scrollCount < 300) {
                scrollUpElement.style.display = "none";
            }
            if (scrollCount > 300) {
                scrollUpElement.style.display = "block";
            }
        });
    }
};

const slider = () => {
    const swiperElement = document.querySelector(".swiper");
    if (swiperElement) {
        // swiper slider
        var swiper = new Swiper(".ecommerce-slider", {
            slidesPerView: 1,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        const productDetailsSliders = document.querySelectorAll(".product-details");
        const productDetailsSliderThumbs = document.querySelectorAll(
            ".product-details-thumb"
        );
        if (productDetailsSliders.length) {
            productDetailsSliders.forEach((productDetailsSlider, idx) => {
                // add class
                productDetailsSlider.classList.add(`product-details-${idx}`);
                productDetailsSliderThumbs[idx].classList.add(
                    `product-details-thumb-${idx}`
                );

                //product details
                var swiper = new Swiper(`.product-details-thumb-${idx}`, {
                    spaceBetween: 10,
                    slidesPerView: 5,
                    freeMode: true,
                    watchSlidesProgress: true,
                });
                var swiper2 = new Swiper(`.product-details-${idx}`, {
                    spaceBetween: 10,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    thumbs: {
                        swiper: swiper,
                    },
                });
            });
        }

        var swiper = new Swiper(".university__slider__thumb", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });
        // swiper slider
        var swiper2 = new Swiper(".ecommerce-slider2", {
            slidesPerView: 1,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
        var swiper = new Swiper(".card-slider", {
            effect: "cards",
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        // swiper slider
        var swiper = new Swiper(".featured-courses", {
            slidesPerView: 1,
            grabCursor: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1500: {
                    slidesPerView: 4,
                },
            },
        });
        // swiper slider
        var swiper = new Swiper(".other-courses", {
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,
            breakpoints: {
                500: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
            },
        });
        // swiper slider
        var swiper = new Swiper(".featured-courses1", {
            slidesPerView: 1,
            grabCursor: true,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
        // swiper slider
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
            },
        });
        // swiper slider
        var swiper = new Swiper(".testimonial-2", {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
};



const accordions = () => {
    const accordionContainers = document.querySelectorAll(".accordion-container");

    if (!accordionContainers.length) {
        return;
    }
    accordionContainers.forEach((accordionContainer) => {
        accordionController(accordionContainer);
    });
};


const popup = () => {

    const gallaryContainers = document.querySelectorAll(".gallary-container");

    gallaryContainers.forEach(function (gallaryContainer) {
        const imageWrappers = gallaryContainer.querySelectorAll(".image-wrapper");
        const images = gallaryContainer.querySelectorAll(".gallery-image");
        const popup = gallaryContainer.querySelector(".popup");
        const sliderContainer = gallaryContainer.querySelector(
            ".slider-container-wrapper"
        );
        const closeBtn = gallaryContainer.querySelector(".close-btn");
        const prevBtn = gallaryContainer.querySelector(".prev-btn");
        const nextBtn = gallaryContainer.querySelector(".next-btn");
        let currentIndex = 0;

        imageWrappers.forEach(function (imageWrapper, index) {
            const modalOpen = imageWrapper.querySelector(".popup-open");
            modalOpen.addEventListener("click", function () {
                currentIndex = index;
                showImage(index);
                popup.style.display = "block";
            });
        });

        function showImage(index) {
            const imgSrc = images[index].getAttribute("src");
            const imgAlt = images[index].getAttribute("alt");
            const imgElement = `<img src="${imgSrc}" alt="${imgAlt}" class="slider-image">`;
            const slideCounter = `<span class="slide-counter">${index + 1} of ${images.length
                }</span>`;
            sliderContainer.innerHTML = imgElement + slideCounter;
        }

        closeBtn.addEventListener("click", function () {
            popup.style.display = "none";
        });

        popup.addEventListener("click", function (event) {
            if (event.target === this) {
                popup.style.display = "none";
            }
        });

        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    });

};

const countDown = () => {
    // Set the target date for the countdown (change it to your desired end date)
    const coundownContainers = document.querySelectorAll("[data-countdown]");
    if (coundownContainers?.length) {
        let countdownInterval;
        coundownContainers.forEach((coundownContainer) => {
            const countDownFields = [...coundownContainer.children];

            const targetDateArray = coundownContainer
                .getAttribute("data-countdown")
                .split("/");

            const targetDate = new Date(
                `${targetDateArray[0]}-${targetDateArray[1]}-${targetDateArray[2]}T00:00:00`
            ).getTime();

            // Update the countdown every second
            countdownInterval = setInterval(
                () => updateCountdown(targetDate, countDownFields),
                1000
            );
        });

        function updateCountdown(targetDate, countDownFields) {
            // Get the current date and time
            const currentDate = new Date().getTime();

            // Calculate the remaining time
            const timeDifference = targetDate - currentDate;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Display the countdown
            countDownFields.forEach((countDownField, ind) => {
                countDownField.querySelector(".count").innerHTML =
                    ind === 0
                        ? days > 9
                            ? days
                            : `0${days}`
                        : ind === 1
                            ? hours > 9
                                ? hours
                                : `0${hours}`
                            : ind === 2
                                ? minutes > 9
                                    ? minutes
                                    : `0${minutes}`
                                : seconds > 9
                                    ? seconds
                                    : `0${seconds}`;
            });

            // If the countdown is finished, clear the interval
            if (timeDifference < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "Countdown expired!";
            }
        }
    }
};


//line chart
function lineChart() {
    const ctx = document.getElementById("lineChart");
    if (!ctx) return;

    const myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "Jan",
                "Feb",
                "Marc",
                "April",
                "May",
                "Jun",
                "July",
                "Agust",
                "Sept",
                "Oct",
                "Now",
                "Dec",
            ],
            datasets: [
                {
                    label: "#",
                    data: [148, 100, 205, 110, 165, 145, 180, 156, 148, 220, 180, 245],
                    tension: 0.4,
                    backgroundColor: "#5F2DED",
                    borderColor: "#5F2DED",
                    borderWidth: 2,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    min: 0,
                    max: 300,
                    ticks: {
                        stepSize: 50,
                    },
                },
            },
        },
    });
}

//Pie Chart
function pieChart() {
    const ctx = document.getElementById("pieChart");
    if (!ctx) return;

    const myChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Direct", "Referal", "Organic"],
            datasets: [
                {
                    label: "#",
                    data: [40, 28, 32],
                },
            ],
        },
        options: {
            cutout: "75%",
            plugins: {
                legend: {
                    position: "left",
                },
            },
            elements: {
                arc: {
                    backgroundColor: "#5F2DED",
                    hoverBackgroundColor: "#5F2DED",
                },
            },
        },
    });

    const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        let listContainer = legendContainer.querySelector("ul");

        if (!listContainer) {
            listContainer = document.createElement("ul");
            listContainer.style.display = "flex";
            listContainer.style.flexDirection = "row";
            listContainer.style.margin = 0;
            listContainer.style.padding = 0;

            legendContainer.appendChild(listContainer);
        }

        return listContainer;
    };

    const htmlLegendPlugin = {
        id: "htmlLegend",
        afterUpdate(chart, args, options) {
            const ul = getOrCreateLegendList(chart, options.containerID);

            // Remove old legend items
            while (ul.firstChild) {
                ul.firstChild.remove();
            }

            // Reuse the built-in legendItems generator
            const items = chart.options.plugins.legend.labels.generateLabels(chart);

            items.forEach((item) => {
                const li = document.createElement("li");
                li.style.alignItems = "center";
                li.style.cursor = "pointer";
                li.style.display = "flex";
                li.style.flexDirection = "row";
                li.style.marginLeft = "10px";

                li.onclick = () => {
                    const { type } = chart.config;
                    if (type === "pie" || type === "doughnut") {
                        // Pie and doughnut charts only have a single dataset and visibility is per item
                        chart.toggleDataVisibility(item.index);
                    } else {
                        chart.setDatasetVisibility(
                            item.datasetIndex,
                            !chart.isDatasetVisible(item.datasetIndex)
                        );
                    }
                    chart.update();
                };

                // Color box
                const boxSpan = document.createElement("span");
                boxSpan.style.background = item.fillStyle;
                boxSpan.style.borderColor = item.strokeStyle;
                boxSpan.style.borderWidth = item.lineWidth + "px";
                boxSpan.style.display = "inline-block";
                boxSpan.style.height = "20px";
                boxSpan.style.marginRight = "10px";
                boxSpan.style.width = "20px";

                // Text
                const textContainer = document.createElement("p");
                textContainer.style.color = item.fontColor;
                textContainer.style.margin = 0;
                textContainer.style.padding = 0;
                textContainer.style.textDecoration = item.hidden ? "line-through" : "";

                const text = document.createTextNode(item.text);
                textContainer.appendChild(text);

                li.appendChild(boxSpan);
                li.appendChild(textContainer);
                ul.appendChild(li);
            });
        },
    };
}
const count = () => {
    const countContainers = document.querySelectorAll(".count-container");
    if (!count) {
        return;
    }

    countContainers.forEach((countContainer) => {
        const countIput = countContainer.querySelector("input");
        const minCount = countContainer.querySelector(".mincount");
        const maxCount = countContainer.querySelector(".maxcount");

        minCount.addEventListener("click", () => {
            let currentValue = parseInt(countIput.value);
            if (currentValue === 0 || currentValue < 0) {
                if (currentValue === 0) {
                    currentValue = 1;
                } else {
                    currentValue = 0;
                }
            } else {
                currentValue--;
            }
            countIput.value = currentValue;
        });
        maxCount.addEventListener("click", () => {
            let currentValue = parseInt(countIput.value);
            currentValue++;
            countIput.value = currentValue;
        });
    });
};

const smoothScroll = () => {
    var links = document.querySelectorAll('a[href^="#"]');
    if (!links.length) {
        return;
    }
    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            var targetId = this.getAttribute("href").substring(1);

            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            } else {
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }
        });
    });
};


const theme = () => {
    const html = document.querySelector("html");
    const currentMode = localStorage.getItem("theme");

    // Establece el tema según el valor almacenado en localStorage
    if (currentMode === "dark") {
        html.classList.add("dark");
    } else if (currentMode === "light") {
        html.classList.remove("dark");
    }

    // Verifica si el controlador de tema existe en el DOM
    const themeController = document.querySelector(".theme-controller");

    if (themeController) {
        themeController.addEventListener("click", function () {
            // Alterna la clase 'dark' en el HTML y guarda el estado en localStorage
            html.classList.toggle("dark");
            const isDarkMode = html.classList.contains("dark");

            if (isDarkMode) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }
};



export const useMainJs = () => {
    useEffect(() => {
        // sticky header related funtionality
        stickystickyHeader();

        // dropdown functionalities
        dropdownController();

        // tab related functionalities
        tabsController();

        // mobile menu related funtionality
        mobileMenu();

        // accordion related functionality
        accordions();

        // project filter related functionality
        filter();

        // hover effect parallax
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            perspective: 2000,
        });

        // counter up
        const counters = document.querySelectorAll(".counter");
        counters.forEach((counter) => {
            new countUp(counter);
        });

        // quick view modal
        modalProductDetails();

        // video modal
        videoModal();

        // theme mode controller
        theme();

        // preloader
        preloader();

        // scroll up
        scrollUp();

        // swiper slider
        slider();


        AOS.init({
            offset: 0,
            duration: 1000,
            once: true,
            easing: "ease",
        });
        // images popup
        popup();

        // count down
        countDown();

        // charts
        lineChart();
        pieChart();

        // click count
        count();

        // smooth scroll
        smoothScroll();
    }, []);
};

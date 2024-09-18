import Menu from "./Menu";
import { useMainJs } from "./Nativos/Controles";


export default function Header({ className = '', auth, ...props }) {
    useMainJs();
    return (
        <>
            {/* preloader */}
            <div className="preloader flex fixed top-0 left-0 h-screen w-full items-center justify-center z-xxl bg-whiteColor opacity-100 visible transition-all duration-700">
                {/* spinner */}
                <div className="w-90px h-90px border-5px border-t-blue border-r-blue border-b-blue-light border-l-blue-light rounded-full animate-spin-infinit" />
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <img
                        src="./assets/images/pre.png"
                        alt="Preloader"
                        className="h-10 w-10 block"
                    />
                </div>
            </div>
            {/* theme fixed shadow */}
            <div>
                <div className="fixed-shadow left-[-250px]" />
                <div className="fixed-shadow right-[-250px]" />
            </div>
            {/* theme controller */}
            <div className="fixed top-[100px] 2xl:top-[300px] transition-all duration-300 right-[-50px] hover:right-0 z-xl">
                <button className="theme-controller w-90px h-10 bg-primaryColor dark:bg-whiteColor-dark rounded-l-lg2 text-whiteColor px-10px flex items-center dark:shadow-theme-controller">
                    {/* dark */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-10px w-5 block dark:hidden"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                        />
                    </svg>
                    <span className="text-base block dark:hidden">Dark</span>
                    {/* light */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden mr-10px w-5 dark:block"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                            strokeWidth={32}
                            d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
                        />
                        <circle
                            cx={256}
                            cy={256}
                            r={80}
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                            strokeWidth={32}
                        />
                    </svg>
                    <span className="text-base hidden dark:block">Light</span>
                </button>
            </div>
            {/* scroll up button */}
            <div>
                <button className="scroll-up w-50px h-50px leading-50px text-center text-primaryColor bg-white hover:text-whiteColor hover:bg-primaryColor rounded-full fixed right-5 bottom-[60px] shadow-scroll-up z-medium text-xl dark:text-whiteColor dark:bg-primaryColor dark:hover:text-whiteColor-dark hidden">
                    <i className="icofont-rounded-up" />
                </button>
            </div>
            {/*======= Header area start =======*/}
            <header>
                {/* header top start */}
                <div className="bg-blackColor2 dark:bg-lightGrey10-dark hidden lg:block">
                    <div className="container 3xl:container2-lg 4xl:container mx-auto text-whiteColor text-size-12 xl:text-sm py-5px xl:py-9px">
                        <div className="flex justify-between items-center">
                            <div>
                                <p>Call Us: +1 800 123 456 789 - Mail Us: Itcroc@mail.com</p>
                            </div>
                            <div className="flex gap-37px items-center">
                                <div>
                                    <p>
                                        <i className="icofont-location-pin text-primaryColor text-size-15 mr-5px" />
                                        <span>684 West College St. Sun City, USA</span>
                                    </p>
                                </div>
                                <div>
                                    {/* header social list */}
                                    <ul className="flex gap-13px text-size-15">
                                        <li>
                                            <a className="hover:text-primaryColor" href="#">
                                                <i className="icofont-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="hover:text-primaryColor" href="#">
                                                <i className="icofont-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="hover:text-primaryColor" href="#">
                                                <i className="icofont-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="hover:text-primaryColor" href="#">
                                                <i className="icofont-youtube-play" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header top end */}
                {/* navbar start */}
                <Menu auth={auth} />

                {/* navbar end */}
                {/* mobile menu */}
                <div className="mobile-menu w-mobile-menu-sm md:w-mobile-menu-lg fixed top-0 -right-[280px] md:-right-[330px] transition-all duration-500 w-mobile-menu h-full shadow-dropdown-secodary bg-whiteColor dark:bg-whiteColor-dark z-high block lg:hidden">
                    <button className="close-mobile-menu text-lg bg-darkdeep1 hover:bg-secondaryColor text-white px-[11px] py-[6px] absolute top-0 right-full hidden">
                        <i className="icofont icofont-close-line" />
                    </button>
                    {/* mobile menu wrapper */}
                    <div className="px-5 md:px-30px pt-5 md:pt-10 pb-50px h-full overflow-y-auto">
                        {/* search input  */}
                        <div className="pb-10 border-b border-borderColor dark:border-borderColor-dark">
                            <form className="flex justify-between items-center w-full bg-whitegrey2 dark:bg-whitegrey2-dark px-15px py-[11px]">
                                <input
                                    type="text"
                                    placeholder="Search entire store..."
                                    className="bg-transparent w-4/5 focus:outline-none text-sm text-darkdeep1 dark:text-blackColor-dark"
                                />
                                <button className="block text-lg text-darkdeep1 hover:text-secondaryColor dark:text-blackColor-dark dark:hover:text-secondaryColor">
                                    <i className="icofont icofont-search-2" />
                                </button>
                            </form>
                        </div>
                        {/* mobile menu accordions */}
                        <div className="pt-8 pb-6 border-b border-borderColor dark:border-borderColor-dark">
                            <ul className="accordion-container">
                                <li className="accordion">
                                    {/* accordion header */}
                                    <div className="flex items-center justify-between">
                                        <a
                                            className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="index.html"
                                        >
                                            Home
                                        </a>
                                        <button className="accordion-controller px-3 py-4">
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500" />
                                        </button>
                                    </div>
                                    {/* accordion content */}
                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                        <div className="content-wrapper">
                                            <ul className="accordion-container">
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="index.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Home Light
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="index.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Home (Default)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-2.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Elegant
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-3.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Classic
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-4.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Classic LMS
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-5.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Online Course
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-6.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Marketplace
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-7.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        University
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-8.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        ECommerce
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-9.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Kindergarten
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-10.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Machine Learning
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-11.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Single Course
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="index-dark.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Home Dark
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="index-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Home Default (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-2-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Elegant (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-3-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Classic (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-4-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Classic LMS (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-5-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Online Course (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-6-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Marketplace (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-7-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        University (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-8-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        ECommerce (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-9-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Kindergarten (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-10-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Machine Learning (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="home-11-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Single Course (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion">
                                    {/* accordion header */}
                                    <div className="flex items-center justify-between">
                                        <a
                                            className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="#"
                                        >
                                            Pages
                                        </a>
                                        <button className="accordion-controller px-3 py-4">
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500" />
                                        </button>
                                    </div>
                                    {/* accordion content */}
                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                        <div className="content-wrapper">
                                            <ul className="accordion-container">
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 1
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="about.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        About
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="about-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        About (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Block
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Block (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog-details.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Block Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="blog-details-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Block Details (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 2
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="error.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Error 404
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="error-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Error (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="event-details.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Event Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meetings.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Zoom
                                                                        <span className="px-15px py-5px text-primaryColor bg-whitegrey3 text-xs rounded ml-5px">
                                                                            Online Call
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meetings-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Zoom Meeting (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meeting-details.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Zoom Meeting Details
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 3
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/zoom/zoom-meeting-details-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Meeting Details (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="login.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Login
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="login-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Login (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="maintenance.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Maintenance
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="maintenance-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Maintenance (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Term &amp; Condition
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 4
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Term &amp; Condition (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Privacy Policy
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Privacy Policy (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Success Stories
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Success Stories (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Work Policy
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#" className="pl-15px pt-3 pb-7px">
                                                        <img
                                                            className="w-full"
                                                            src="./assets/images/mega/mega_menu_2.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion">
                                    {/* accordion header */}
                                    <div className="flex items-center justify-between">
                                        <a
                                            className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="course.html"
                                        >
                                            Courses
                                        </a>
                                        <button className="accordion-controller px-3 py-4">
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500" />
                                        </button>
                                    </div>
                                    {/* accordion content */}
                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                        <div className="content-wrapper">
                                            <ul className="accordion-container">
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 1
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="course.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Grid
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course Grid (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course Grid
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-grid-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course Grid (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-list.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course List
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-list-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course List (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 2
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="course-details.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course Details (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-2.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course Details 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-2-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Details 2 (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-3.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course Details 3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="course-details-3-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Details 3 (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Get Started 3
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/become-an-instructor.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Become An Instructor
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/create-course.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Create Course
                                                                        <span className="px-15px py-5px text-primaryColor bg-whitegrey3 text-xs rounded ml-5px">
                                                                            Career
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="instructor.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Instructor
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="instructor-dark.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Instructor (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="instructor-details.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Instructor Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="lesson.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Course Lesson
                                                                        <span className="px-15px py-5px text-secondaryColor bg-whitegrey3 text-xs rounded ml-5px">
                                                                            New
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#" className="pl-15px pt-3 pb-7px">
                                                        <img
                                                            className="w-full"
                                                            src="./assets/images/mega/mega_menu_1.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion">
                                    {/* accordion header */}
                                    <div className="flex items-center justify-between">
                                        <a
                                            className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="./pages/dashboards/instructor-dashboard.html"
                                        >
                                            Dashboard
                                        </a>
                                        <button className="accordion-controller px-3 py-4">
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500" />
                                        </button>
                                    </div>
                                    {/* accordion content */}
                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                        <div className="content-wrapper">
                                            <ul className="accordion-container">
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/dashboards/admin-dashboard.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Admin
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-dashboard.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Admin Dashboard
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-profile.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Admin Profile
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-message.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Message
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-course.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Courses
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-reviews.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Review
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-quiz-attempts.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Admin Quiz
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/admin-settings.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Settings
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/dashboards/instructor-dashboard.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Instructor
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-dashboard.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Inst. Dashboard
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-profile.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Inst. Profile
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-message.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Message
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-wishlist.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Wishlist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-reviews.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Review
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-my-quiz-attempts.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        My Quiz
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-order-history.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Order History
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-course.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        My Courses
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-announcments.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Announcements
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-quiz-attempts.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Quiz Attempts
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-assignments.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Assignments
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/instructor-settings.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Settings
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="accordion">
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/dashboards/student-dashboard.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Student
                                                        </a>
                                                        <button className="accordion-controller px-3 py-4">
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300" />
                                                        </button>
                                                    </div>
                                                    {/* accordion content */}
                                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
                                                        <div className="content-wrapper">
                                                            {/* Dropdown */}
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-dashboard.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Dashboard
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-profile.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Profile
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-message.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Message
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-enrolled-courses.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Enrolled Courses
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-wishlist.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Wishlist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-reviews.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Review
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-my-quiz-attempts.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        My Quiz
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-assignments.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Assignment
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="./pages/dashboards/student-settings.html"
                                                                        className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                                    >
                                                                        Settings
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion">
                                    {/* accordion header */}
                                    <div className="flex items-center justify-between">
                                        <a
                                            className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="./pages/ecommerce/shop.html"
                                        >
                                            ECommerce
                                        </a>
                                        <button className="accordion-controller px-3 py-4">
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor" />
                                            <span className="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500" />
                                        </button>
                                    </div>
                                    {/* accordion content */}
                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500">
                                        <div className="content-wrapper">
                                            <ul>
                                                <li>
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/ecommerce/shop.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Shop
                                                            <span className="px-15px py-5px text-primaryColor bg-whitegrey3 text-xs rounded ml-5px">
                                                                Online Store
                                                            </span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/ecommerce/product-details.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Product Details
                                                        </a>
                                                    </div>
                                                    {/* accordion content */}
                                                </li>
                                                <li>
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/ecommerce/cart.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Cart
                                                        </a>
                                                    </div>
                                                    {/* accordion content */}
                                                </li>
                                                <li>
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/ecommerce/checkout.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Checkout
                                                        </a>
                                                    </div>
                                                    {/* accordion content */}
                                                </li>
                                                <li>
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="./pages/ecommerce/wishlist.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Wishlist
                                                        </a>
                                                    </div>
                                                    {/* accordion content */}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* my account accordion */}
                        <div>
                            <ul className="accordion-container mt-9 mb-30px pb-9 border-b border-borderColor dark:border-borderColor-dark">
                                <li className="accordion group">
                                    {/* accordion header */}
                                    <div className="accordion-controller flex items-center justify-between">
                                        <a
                                            className="leading-1 text-darkdeep1 font-medium group-hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                            href="#"
                                        >
                                            My Account
                                        </a>
                                        <button className="px-3 py-1">
                                            <i className="icofont-thin-down text-size-15 text-darkdeep1 group-hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor" />
                                        </button>
                                    </div>
                                    {/* accordion content */}
                                    <div className="accordion-content h-0 overflow-hidden transition-all duration-500 shadow-standard">
                                        <div className="content-wrapper">
                                            <ul>
                                                <li>
                                                    {/* accordion header */}
                                                    <div className="flex items-center gap-1">
                                                        <a
                                                            href="login.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-30px pt-7 pb-3 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            Login
                                                        </a>
                                                        <a
                                                            href="login.html"
                                                            className="leading-1 text-darkdeep1 text-sm pr-30px pt-7 pb-4 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            <span>/</span> Create Account
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    {/* accordion header */}
                                                    <div className="flex items-center justify-between">
                                                        <a
                                                            href="login.html"
                                                            className="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                                        >
                                                            My Account
                                                        </a>
                                                    </div>
                                                    {/* accordion content */}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Mobile menu social area */}
                        <div>
                            <ul className="flex gap-6 items-center mb-5">
                                <li>
                                    <a className="facebook" href="#">
                                        <i className="icofont icofont-facebook text-fb-color dark:text-whiteColor dark:hover:text-secondaryColor" />
                                    </a>
                                </li>
                                <li>
                                    <a className="twitter" href="#">
                                        <i className="icofont icofont-twitter text-twiter-color dark:text-whiteColor dark:hover:text-secondaryColor" />
                                    </a>
                                </li>
                                <li>
                                    <a className="pinterest" href="#">
                                        <i className="icofont icofont-pinterest dark:text-whiteColor dark:hover:text-secondaryColor" />
                                    </a>
                                </li>
                                <li>
                                    <a className="instagram" href="#">
                                        <i className="icofont icofont-instagram dark:text-whiteColor dark:hover:text-secondaryColor" />
                                    </a>
                                </li>
                                <li>
                                    <a className="google" href="#">
                                        <i className="icofont icofont-youtube-play dark:text-whiteColor dark:hover:text-secondaryColor" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

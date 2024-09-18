import React, { useEffect, useState, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"; // Importa los íconos necesarios
import Boton from '@/Components/Boton';
import ThemeToggle from "@/Pages/ThemeToggle";

const Menu = ({ auth }) => {
    const [logo, setLogo] = useState('/img/logo.png');
    const [openMenu, setOpenMenu] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const updateLogo = (theme) => {
        setLogo(theme === 'dark' ? '/img/logolight.png' : '/img/logo.png');
    };

    const { menu, welcome } = usePage().props;

    const toggleMenu = (menuName) => {
        setOpenMenu(openMenu === menuName ? '' : menuName);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpenMenu('');
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        setLogo(savedTheme === 'dark' ? '/img/logolight.png' : '/img/logo.png');

        // Añadir el event listener para clicks fuera del menú
        document.addEventListener("mousedown", handleClickOutside);

        // Limpiar el event listener al desmontar el componente
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="transition-all duration-500 sticky-header z-medium dark:bg-whiteColor-dark">
                <nav>
                    <div className="py-15px lg:py-0 px-15px lg:container 3xl:container2-lg 4xl:container mx-auto relative">
                        <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-15px">
                            {/* navbar left */}
                            <div className="lg:col-start-1 lg:col-span-2">
                                <a href="index.html" className="block">
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className="w-logo-sm lg:w-auto py-2"
                                    />
                                </a>
                            </div>
                            {/* Main menu */}


                            <div className="hidden lg:block lg:col-start-3 lg:col-span-7">
                                <ul className="nav-list flex justify-center">
                                    <li className="nav-item group">
                                        <a
                                            href="#"
                                            className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                                        >
                                            {menu.inicio}
                                        </a>
                                    </li>
                                    <li className="nav-item group">
                                        <a
                                            href="#"
                                            className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                                        >
                                            {menu.recursos}
                                            <i className="icofont-rounded-down" />
                                        </a>
                                        {/* dropdown menu */}
                                        <div
                                            className="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                                            style={{ transition: "0.3s" }}
                                        >
                                            <div className="container 3xl:container2-lg 4xl:container w-2000 shadow-dropdown px-30px mx-auto xl:px-30px py-30px rounded-standard bg-white dark:bg-whiteColor-dark">
                                                <div className="grid grid-cols-4 gap-x-30px">
                                                    <div>
                                                        <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                            {menu.blog}
                                                        </h3>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="about.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    About
                                                                    <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                                                        Sale Everything
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="about-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    About (Dark)
                                                                    <span className="text-size-12 font-semibold text-secondaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                                                        New
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="blog-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Blog (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="blog-details.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Blog Details
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="blog-details-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Blog Details (Dark)
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                            {menu.caracteristicas}
                                                        </h3>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="error.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Error
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="error-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Error (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="event-details.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Event Details
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="./pages/zoom/zoom-meetings.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Zoom
                                                                    <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                                                        Online Call
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="./pages/zoom/zoom-meetings-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Zoom Meeting (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="./pages/zoom/zoom-meeting-details.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Zoom Meeting Details
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                            {menu.planes}
                                                        </h3>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="./pages/zoom/zoom-meeting-details-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Meeting Details (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="login.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Login
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="login-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Login (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="maintenance.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Maintenance
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="maintenance-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Maintenance (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Terms &amp; Condition
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                            {menu.brokers}
                                                        </h3>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Terms &amp; Condition (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="contact.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Contact
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="contact-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Contact (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Success Stories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Success Stories (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Work Policy
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* dropdown banner */}
                                                <div className="pt-30px">
                                                    <img
                                                        src="./assets/images/mega/mega_menu_2.png"
                                                        alt="Mega Menu"
                                                        className="w-full rounded-standard"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item group">
                                        <a
                                            href="#"
                                            className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                                        >
                                            {menu.cursos}
                                            <i className="icofont-rounded-down" />
                                        </a>
                                        {/* dropdown menu */}
                                        <div
                                            className="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                                            style={{ transition: "0.3s" }}
                                        >
                                            <div className="container 3xl:container2-lg 4xl:container w-2000 shadow-dropdown px-30px mx-auto xl:px-30px py-30px rounded-standard bg-white dark:bg-whiteColor-dark">
                                                <div className="grid grid-cols-4 gap-x-30px">
                                                    <div>
                                                        <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                            Get Started 1
                                                        </h3>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="course.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Grid
                                                                    <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                                                        All Courses
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="course-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Course Grid (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="course-grid.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Course Grid
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="course-grid-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Course Grid (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="course-list.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Course List
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="course-list-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Course List (Dark)
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                            Get Started 2
                                                        </h3>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="course-details.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Course Details
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="course-details-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Course Details (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="course-details-2.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Course Details 2
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="course-details-2-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Details 2 (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="course-details-3.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Coures Details 3
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="course-details-3-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Details 3 (Dark)
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                                                            Get Started 3
                                                        </h3>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="./pages/dashboards/become-an-instructor.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Become An Instructor
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="./pages/dashboards/create-course.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Careate Course
                                                                    <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px rounded">
                                                                        Career
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="instructor.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Instructor
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="instructor-dark.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Instructor (Dark)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="instructor-details.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Instructor Details
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="lesson.html"
                                                                    className="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                                                >
                                                                    Course Lesson
                                                                    <span className="text-size-12 font-semibold text-secondaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                                                        New
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* dropdown banner */}
                                                    <div>
                                                        <img
                                                            src="./assets/images/mega/mega_menu_1.png"
                                                            alt="Mega Menu"
                                                            className="w-full rounded-standard"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item group">
                                        <a
                                            href="#"
                                            className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                                        >
                                            {menu.contacto}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* navbar right */}
                            <div className="lg:col-start-10 lg:col-span-3">
                                <ul className="relative nav-list flex justify-end items-center">
                                    <li className="hidden lg:block">
                                        <a
                                            href="login.html"
                                            className="text-size-12 2xl:text-size-15 px-15px py-2 text-blackColor hover:text-whiteColor bg-whiteColor block hover:bg-primaryColor border border-borderColor1 rounded-standard font-semibold mr-[7px] 2xl:mr-15px dark:text-blackColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor dark:hover:border-primaryColor"
                                        >
                                            <i className="icofont-user-alt-5" />
                                        </a>
                                    </li>
                                    <li className="hidden lg:block">
                                        <a
                                            href="#"
                                            className="text-size-12 2xl:text-size-15 text-whiteColor bg-primaryColor block border-primaryColor border hover:text-primaryColor hover:bg-white px-15px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor"
                                        >
                                            {menu.comienza}
                                        </a>
                                    </li>
                                    <li className="block lg:hidden">
                                        <button className="open-mobile-menu text-3xl text-darkdeep1 hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor">
                                            <i className="icofont-navigation-menu" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

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
        </>
    );
}

export default Menu;

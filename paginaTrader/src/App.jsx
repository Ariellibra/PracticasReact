import Footer from './Components/Footer';
import Header from './Components/Header';
import Nosotros from './Components/Nosotros';
import Pricing from './Components/TablaPrecio';
import AuthenticatedLayout from './Components/AuthenticatedLayout';

export default function App({ auth }) {

    const plans = [
        {
            titulo: 'Free',
            precio: '0',
            descripcion: 'Perfect for startup',
            imagen: './assets/images/icon/price__1.png',
            btnTexto: 'Get Started',
            btnColor: 'bg-blue-500',  // Puedes cambiar el color del botón aquí
            link: '#',
            caracteristicas: [
                { text: '2 user', available: true },
                { text: 'Learning Scope', available: true },
                { text: 'Team collaboration', available: false },
                { text: 'Export HTML code', available: true },
                { text: 'Upload Your Logo', available: true },
            ]
        },
        {
            titulo: 'Free',
            precio: '0',
            descripcion: 'Perfect for startup',
            imagen: './assets/images/icon/price__1.png',
            btnTexto: 'Get Started',
            btnColor: 'bg-blue-500',  // Puedes cambiar el color del botón aquí
            link: '#',
            caracteristicas: [
                { text: '2 user', available: true },
                { text: 'Learning Scope', available: true },
                { text: 'Team collaboration', available: false },
                { text: 'Export HTML code', available: true },
                { text: 'Upload Your Logo', available: true },
            ]
        },
        {
            titulo: 'Free',
            precio: '0',
            descripcion: 'Perfect for startup',
            imagen: './assets/images/icon/price__1.png',
            btnTexto: 'Get Started',
            btnColor: 'bg-blue-500',  // Puedes cambiar el color del botón aquí
            link: '#',
            caracteristicas: [
                { text: '2 user', available: true },
                { text: 'Learning Scope', available: true },
                { text: 'Team collaboration', available: false },
                { text: 'Export HTML code', available: true },
                { text: 'Upload Your Logo', available: true },
            ]
        },
        {
            titulo: 'Free',
            precio: '0',
            descripcion: 'Perfect for startup',
            imagen: './assets/images/icon/price__1.png',
            btnTexto: 'Get Started',
            btnColor: 'bg-blue-500',  // Puedes cambiar el color del botón aquí
            link: '#',
            caracteristicas: [
                { text: '2 user', available: true },
                { text: 'Learning Scope', available: true },
                { text: 'Team collaboration', available: false },
                { text: 'Export HTML code', available: true },
                { text: 'Upload Your Logo', available: true },
            ]
        },
        {
            titulo: 'BASIC',
            precio: '29',
            descripcion: 'Perfect for startup',
            imagen: './assets/images/icon/price__2.png',
            btnTexto: 'Get Started',
            btnColor: 'bg-green-500',  // Cambia el color del botón aquí
            link: '#',
            caracteristicas: [
                { text: '5 user', available: true },
                { text: 'Learning Scope', available: true },
                { text: 'Team collaboration', available: false },
                { text: 'Export HTML code', available: true },
                { text: 'Upload Your Logo', available: true },
            ]
        },
        {
            titulo: 'PRO',
            precio: '59',
            descripcion: 'Perfect for startup',
            imagen: './assets/images/icon/price__3.png',
            btnTexto: 'Get Started',
            btnColor: 'bg-red-500',  // Cambia el color del botón aquí
            link: '#',
            caracteristicas: [
                { text: '10 user', available: true },
                { text: 'Learning Scope', available: true },
                { text: 'Team collaboration', available: true },
                { text: 'Export HTML code', available: true },
                { text: 'Upload Your Logo', available: true },
            ]
        },
        // Agrega más planes si lo necesitas
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Header />

            <main className="bg-transparent">
                <section>
                    {/* bannaer section */}
                    <div className="container2-xl bg-darkdeep1 pt-50px md:pt-20 pb-205px md:pb-35 rounded-2xl relative overflow-hidden shadow-brand">
                        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
                            {/* banner Left */}
                            <div data-aos="fade-up">
                                <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
                                    EDUCATION SOLUTION
                                </h3>
                                <h1 className="text-3xl text-whiteColor md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
                                    Cloud-based LMS <br className="hidden md:block" />
                                    Trusted by 1000+
                                </h1>
                                <p className="text-size-15md:text-lg text-white font-medium mb-45px">
                                    Lorem Ipsum is simply dummy text of the printing typesetting
                                    industry. Lorem Ipsum has been
                                </p>
                                <div>
                                    <a
                                        href="course.html"
                                        className="text-sm md:text-size-15 font-semibold text-darkdeep2 bg-whiteColor border border-whiteColor px-5 md:px-30px py-3 md:py-4 hover:text-whiteColor hover:bg-darkblack rounded inline-block mr-6px md:mr-30px shadow-hero-action dark:bg-whiteColor-dark dark:hover:bg-whiteColor dark:text-whiteColor dark:hover:text-whiteColor-dark dark:border-none"
                                    >
                                        View Courses
                                    </a>
                                    <a
                                        href="#"
                                        className="text-sm md:text-size-15 font-semibold text-whiteColor py-3 md:py-4 hover:text-secondaryColor inline-block"
                                    >
                                        Find out more <i className="icofont-long-arrow-right" />
                                    </a>
                                </div>
                            </div>
                            {/* banner right */}
                            <div data-aos="fade-up">
                                <div className="tilt relative">
                                    <img
                                        className="w-full"
                                        src="./assets/images/about/about_8.png"
                                        alt=""
                                    />
                                    <img
                                        className="absolute left-0 top-0 lg:top-4 right-0 mx-auto"
                                        src="./assets/images/about/about_1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                className="absolute left-1/2 bottom-[15%] animate-spin-slow"
                                src="./assets/images/register/register__2.png"
                                alt=""
                            />
                            <img
                                className="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
                                src="./assets/images/herobanner/herobanner__6.png"
                                alt=""
                            />
                            <img
                                className="absolute right-[5%] bottom-[15%]"
                                src="./assets/images/herobanner/herobanner__7.png"
                                alt=""
                            />
                            <img
                                className="absolute top-[5%] left-[45%]"
                                src="./assets/images/herobanner/herobanner__7.png"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
                {/*  brand section */}
                <div data-aos="fade-up">
                    <div className="container2-md flex flex-wrap items-center justify-center bg-white dark:bg-whiteColor-dark rounded-md mx-auto md:-translate-y-1/2 w-full shadow-brand">
                        <div className="basis-1/2 md:basis-1/4 lg:basis-1/5 flex justify-center py-5 lg:py-35px 2xl:py-45px">
                            <a href="#">
                                <img src="./assets/images/brand/brand_1.png" alt="" />
                            </a>
                        </div>
                        <div className="basis-1/2 md:basis-1/4 lg:basis-1/5 flex justify-center py-5 lg:py-35px 2xl:py-45px">
                            <a href="#">
                                <img src="./assets/images/brand/brand_2.png" alt="" />
                            </a>
                        </div>
                        <div className="basis-1/2 md:basis-1/4 lg:basis-1/5 flex justify-center py-5 lg:py-35px 2xl:py-45px">
                            <a href="#">
                                <img src="./assets/images/brand/brand_3.png" alt="" />
                            </a>
                        </div>
                        <div className="basis-1/2 md:basis-1/4 lg:basis-1/5 flex justify-center py-5 lg:py-35px 2xl:py-45px">
                            <a href="#">
                                <img src="./assets/images/brand/brand_4.png" alt="" />
                            </a>
                        </div>
                        <div className="basis-1/2 md:basis-1/4 lg:basis-1/5 flex justify-center py-5 lg:py-35px 2xl:py-45px">
                            <a href="#">
                                <img src="./assets/images/brand/brand_5.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <Nosotros />
                {/* Popular Subject Sectoion*/}
                <section className="bg-lightGrey10 dark:bg-lightGrey10-dark pt-50px pb-110px">
                    <div className="container">
                        {/* about section  */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-x-30px">
                            {/* about left */}
                            <div
                                className="mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0"
                                data-aos="fade-up"
                            >
                                <div className="relative">
                                    <div>
                                        <img
                                            className="absolute bottom-9 lg:bottom-[-50px] right-[50px] animate-move-hor"
                                            src="./assets/images/service/service__shape__1.png"
                                            alt=""
                                        />
                                    </div>
                                    <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                                        Populer Subject
                                    </span>
                                    <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 leading-10 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                                        Provide It &amp; Technol Subject For You
                                    </h3>
                                    <p className="text-sm md:text-base text-contentColor dark:text-contentColor-dark mb-10px 2xl:mb-50px">
                                        Construction is a general term meaning the art and science to
                                        form systems organizations, and comes from Latin Construction is
                                    </p>
                                    <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-10 pl-3 border-l-[3px] border-secondaryColor">
                                        Construction is a general term meaning the art and science to
                                        form systems organizations, and comes from Latin Construction is
                                        a organizations, and comes from Latin construction and Old
                                    </p>
                                    <div>
                                        <a
                                            className="text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                                            href="#"
                                        >
                                            Explore More <i className="icofont-long-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* sbject right */}
                            <div className="relative z-0 overflow-visible">
                                {/* animted area */}
                                <div data-aos="fade-up">
                                    <img
                                        className="absolute sm:block xl:left-1/4 z-[-1] top-6 animate-move-var"
                                        src="./assets/images/service/service__shape__bg__1.png"
                                        alt=""
                                    />
                                </div>
                                {/* subject card */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-30px">
                                    {/* card 1 */}
                                    <div data-aos="fade-up">
                                        <div className="p-35px group bg-whiteColor rounded-xl transition-all duration-300 shadow-dropdown-secodary hover:bg-primaryColor hover:-translate-y-5px hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor">
                                            {/* card svg */}
                                            <div className="-translate-y-2 flex justify-between overflow-hidden mb-10px">
                                                <div className="relative w-20 h-[60px]">
                                                    <svg
                                                        className="absolute inline-block translate-y-3 translate-x-2 w-20 h-[60px]"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M6.30281 28.9536H8.45394C9.05625 28.9536 9.48648 29.5426 9.48648 30.2495V36.8465C9.48648 37.6711 9.05625 38.2602 8.45394 38.2602H6.30281C5.78654 38.2602 5.27026 37.6711 5.27026 36.8465V30.2495C5.27026 29.5426 5.78654 28.9536 6.30281 28.9536Z"
                                                            fill="#5F2DED"
                                                        />
                                                        <path
                                                            className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M13.7027 23.7833H15.8987C16.4257 23.7833 16.8649 24.4239 16.8649 25.3207V36.7228C16.8649 37.6196 16.4257 38.2602 15.8987 38.2602H13.7027C13.0879 38.2602 12.6487 37.6196 12.6487 36.7228V25.3207C12.6487 24.4239 13.0879 23.7833 13.7027 23.7833Z"
                                                            fill="#5F2DED"
                                                        />
                                                        <path
                                                            className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M21.0596 19.6471H23.2108C23.727 19.6471 24.2433 20.412 24.2433 21.1769V36.7303C24.2433 37.6227 23.727 38.2602 23.2108 38.2602H21.0596C20.4573 38.2602 20.0271 37.6227 20.0271 36.7303V21.1769C20.0271 20.412 20.4573 19.6471 21.0596 19.6471Z"
                                                            fill="#5F2DED"
                                                        />
                                                        <path
                                                            className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M28.4381 15.5109H30.5892C31.1055 15.5109 31.6217 16.1499 31.6217 17.0445V36.7265C31.6217 37.6212 31.1055 38.2602 30.5892 38.2602H28.4381C27.8357 38.2602 27.4055 37.6212 27.4055 36.7265V17.0445C27.4055 16.1499 27.8357 15.5109 28.4381 15.5109Z"
                                                            fill="#5F2DED"
                                                        />
                                                        <path
                                                            className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M26.9989 7.6293L23.05 18.137L20.3744 15.4678C15.622 19.6266 9.96272 22.5976 3.63238 24.2568C1.36694 24.9297 0.353173 21.6176 2.74495 21.0505C8.47735 19.533 13.5443 16.8156 17.8363 13.1279L15.5453 10.8879L26.9989 7.6293Z"
                                                            fill="#FFB31F"
                                                        />
                                                    </svg>
                                                    <div className="service__bg__img w-20 h-[60px]">
                                                        <svg
                                                            className="w-20 h-[60px]"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                                                fill="#5F2DED"
                                                                fillOpacity="0.05"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="service__small__img w-7 h-[60px]">
                                                    <svg
                                                        className="icon__hover__img w-7 h-[60px] opacity-0 group-hover:opacity-100"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                                            stroke="#FFB31F"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            {/* card content */}
                                            <div>
                                                <a
                                                    href="#"
                                                    className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                                                >
                                                    Business Studies
                                                </a>
                                                <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                                                    Construction is a general term the art and science to form
                                                </p>
                                                <div>
                                                    <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                                                        <a
                                                            href="#"
                                                            className="text-sm font-medium hover:text-secondaryColor transition-none"
                                                        >
                                                            View Subject
                                                            <i className="icofont-long-arrow-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card 2 */}
                                    <div data-aos="fade-up">
                                        <div className="md:translate-y-[30px]">
                                            <div className="p-35px group bg-whiteColor rounded-xl transition-all duration-300 shadow-dropdown-secodary hover:bg-primaryColor hover:-translate-y-5px hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor ">
                                                {/* card svg */}
                                                <div className="-translate-y-2 flex justify-between overflow-hidden mb-10px">
                                                    <div className="relative w-20 h-[60px]">
                                                        <svg
                                                            className="absolute inline-block translate-y-3 translate-x-2 w-20 h-[60px]"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                d="M28.525 44.0499H20.4753C18.7037 44.0499 17.2625 42.7046 17.2625 41.0509C17.2625 36.723 15.7895 32.4935 13.115 29.1417C11.2743 26.835 10.3045 24.0912 10.3103 21.2067C10.3172 17.7711 11.7888 14.4906 14.4541 11.9697C17.1201 9.44796 20.6146 8.03229 24.2939 7.98346C28.1232 7.9323 31.7312 9.28502 34.4566 11.7915C37.1864 14.302 38.6898 17.6547 38.6898 21.2322C38.6898 24.0423 37.7594 26.7272 35.9993 28.9965C33.2113 32.5912 31.7377 36.7597 31.7377 41.0511C31.7377 42.7046 30.2964 44.0499 28.525 44.0499ZM24.5008 10.6603C24.4454 10.6603 24.3904 10.6607 24.3349 10.6614C18.3004 10.7416 13.1927 15.5731 13.1814 21.2117C13.1767 23.5138 13.9501 25.7029 15.418 27.5424C18.4589 31.3533 20.1335 36.1507 20.1335 41.0509C20.1335 41.2278 20.2869 41.3716 20.4752 41.3716H28.5249C28.7133 41.3716 28.8665 41.2278 28.8665 41.051C28.8665 36.1921 30.5286 31.4809 33.6733 27.4265C35.0768 25.6168 35.8187 23.4749 35.8187 21.2321C35.8187 18.3773 34.6191 15.7019 32.4409 13.6987C30.3067 11.7359 27.4925 10.6603 24.5008 10.6603Z"
                                                                fill="#5F2DED"
                                                            />
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                d="M34.5884 35.3186H14.4117V37.9969H34.5884V35.3186Z"
                                                                fill="#5F2DED"
                                                            />
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                d="M23.8501 30.4466L21.4301 29.0054L24.8268 24.0417H21.5536C21.0311 24.0417 20.5498 23.7768 20.297 23.3501C20.0444 22.9235 20.0602 22.4024 20.3384 21.9897L25.0805 14.9543L27.5109 16.38L24.1519 21.3634H27.4464C27.9708 21.3634 28.4533 21.63 28.7053 22.059C28.9573 22.4879 28.9385 23.0109 28.6564 23.4232L23.8501 30.4466Z"
                                                                fill="#FFB31F"
                                                            />
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                d="M25.9355 2.17908H23.0645V6.19654H25.9355V2.17908Z"
                                                                fill="#5F2DED"
                                                            />
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                d="M10.6816 6.93133L8.65027 8.8241L11.6922 11.6649L13.7235 9.77218L10.6816 6.93133Z"
                                                                fill="#5F2DED"
                                                            />
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                d="M38.3173 6.93027L35.2754 9.77112L37.3067 11.6639L40.3486 8.82304L38.3173 6.93027Z"
                                                                fill="#5F2DED"
                                                            />
                                                        </svg>
                                                        <div className="service__bg__img w-20 h-[60px]">
                                                            <svg
                                                                className="w-20 h-[60px]"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                                                    fill="#5F2DED"
                                                                    fillOpacity="0.05"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="service__small__img w-7 h-[60px]">
                                                        <svg
                                                            className="icon__hover__img w-7 h-[60px] opacity-0 group-hover:opacity-100"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                                                stroke="#FFB31F"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                {/* card content */}
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                                                    >
                                                        Artist &amp; Design
                                                    </a>
                                                    <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                                                        Construction is a general term the art and science to
                                                        form
                                                    </p>
                                                    <div>
                                                        <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                                                            <a
                                                                href="#"
                                                                className="text-sm font-medium hover:text-secondaryColor transition-all duration-300"
                                                            >
                                                                View Subject
                                                                <i className="icofont-long-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card 3 */}
                                    <div data-aos="fade-up">
                                        <div className="p-35px group bg-whiteColor rounded-xl transition-all duration-300 shadow-dropdown-secodary hover:bg-primaryColor hover:-translate-y-5px hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor">
                                            {/* card svg */}
                                            <div className="-translate-y-2 flex justify-between overflow-hidden mb-10px">
                                                <div className="relative w-20 h-[60px]">
                                                    <svg
                                                        className="absolute inline-block translate-y-3 translate-x-2 w-20 h-[60px]"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                            d="M45.8483 26.6935C45.3965 26.2639 44.7953 26.0262 44.1558 26.0262C43.5164 26.0262 42.9166 26.2639 42.4634 26.6935L33.7409 34.9886C33.7306 34.9886 33.7183 34.9867 33.708 34.9867H25.1438C25.1438 34.9541 25.1458 34.9229 25.1458 34.8898C25.1458 34.2537 25.0301 33.6443 24.8165 33.0772H29.4735C29.7924 33.6951 30.4593 34.1214 31.2316 34.1214C32.314 34.1214 33.193 33.2873 33.193 32.258C33.193 31.2287 32.314 30.3946 31.2316 30.3946C30.4593 30.3946 29.7924 30.821 29.4735 31.4389H23.8321C22.7928 30.2507 21.2243 29.4949 19.4716 29.4949C17.9393 29.4949 16.5502 30.0736 15.53 31.0111L15.5281 31.0092L2.44995 43.5669H15.5486L19.0217 40.2842H33.708C34.1956 40.2842 34.6542 40.1645 35.0526 39.9548C35.325 39.8434 35.5749 39.6827 35.79 39.4776L45.8488 29.9124C46.3015 29.4832 46.5499 28.911 46.5499 28.3029C46.5499 27.6949 46.3015 27.1231 45.8483 26.6935ZM19.4716 37.1422C18.1633 37.1422 17.1034 36.1325 17.1034 34.8902C17.1034 33.6461 18.1633 32.6369 19.4716 32.6369C20.7799 32.6369 21.8397 33.6466 21.8397 34.8902C21.8397 36.1325 20.7799 37.1422 19.4716 37.1422ZM33.6664 38.9106C32.9255 38.9106 32.3253 38.3402 32.3253 37.6352C32.3253 36.9321 32.925 36.3599 33.6664 36.3599C34.4077 36.3599 35.0075 36.9321 35.0075 37.6352C35.0075 38.3402 34.4077 38.9106 33.6664 38.9106ZM36.3001 36.6749C36.133 36.2634 35.8606 35.9028 35.5127 35.6209L42.0537 29.4026C42.2727 29.7814 42.602 30.096 43.0019 30.3024L36.3001 36.6749ZM36.231 9.4762H28.4753V8.49301H36.231V9.4762ZM36.231 12.0986H28.4753V11.1155H36.231V12.0986ZM23.3048 9.4762H15.5486V8.49301H23.3044L23.3048 9.4762ZM23.3048 12.0986H15.5486V11.1155H23.3044L23.3048 12.0986ZM41.057 5.87011H39.3308V4.23132H28.589C27.7295 4.23132 26.9215 4.55004 26.3139 5.1283C26.1517 5.28253 26.0106 5.45121 25.8886 5.63014C25.7666 5.45121 25.6255 5.28253 25.4633 5.1283C24.8557 4.55004 24.0477 4.23132 23.1882 4.23132H12.4464V5.87011H10.7231V23.8991H24.0217C24.2677 24.6582 25.011 25.2103 25.8901 25.2103C26.7691 25.2103 27.5125 24.6586 27.7585 23.8991H41.057V5.87011ZM27.0455 5.82305C27.4576 5.43071 28.0059 5.2145 28.589 5.2145H38.2964L38.2797 20.6211H30.4471C29.0344 20.6211 27.6364 20.9873 26.4237 21.6644L26.407 7.29176C26.4065 6.73727 26.6329 6.21586 27.0455 5.82305ZM13.4803 5.21497H23.1877C23.7708 5.21497 24.3191 5.43118 24.7312 5.82352C25.1433 6.21586 25.3702 6.73773 25.3697 7.29223L25.353 21.6653C24.1388 20.9878 22.7413 20.6215 21.3296 20.6215H13.4803V5.21497Z"
                                                            fill="#5F2DED"
                                                        />
                                                        <rect
                                                            x={15}
                                                            y="8.54175"
                                                            width={8}
                                                            height="0.993317"
                                                            fill="#FFB31F"
                                                        />
                                                        <rect
                                                            x={28}
                                                            y="8.54175"
                                                            width={8}
                                                            height="0.993317"
                                                            fill="#FFB31F"
                                                        />
                                                        <rect
                                                            x={15}
                                                            y="11.5198"
                                                            width={8}
                                                            height="0.993319"
                                                            fill="#FFB31F"
                                                        />
                                                        <rect
                                                            x={28}
                                                            y="11.5198"
                                                            width={8}
                                                            height="0.993319"
                                                            fill="#FFB31F"
                                                        />
                                                    </svg>
                                                    <div className="service__bg__img w-20 h-[60px]">
                                                        <svg
                                                            className="w-20 h-[60px]"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                                                fill="#5F2DED"
                                                                fillOpacity="0.05"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="service__small__img w-7 h-[60px]">
                                                    <svg
                                                        className="icon__hover__img w-7 h-[60px] opacity-0 group-hover:opacity-100"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                                            stroke="#FFB31F"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            {/* card content */}
                                            <div>
                                                <a
                                                    href="#"
                                                    className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                                                >
                                                    Machine Learning
                                                </a>
                                                <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                                                    Construction is a general term the art and science to form
                                                </p>
                                                <div>
                                                    <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                                                        <a
                                                            href="#"
                                                            className="text-sm font-medium hover:text-secondaryColor transition-none"
                                                        >
                                                            View Subject
                                                            <i className="icofont-long-arrow-right" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card 4 */}
                                    <div data-aos="fade-up">
                                        <div className="md:translate-y-[30px]">
                                            <div className="p-35px group bg-whiteColor rounded-xl transition-all  duration-300 shadow-dropdown-secodary hover:bg-primaryColor hover:-translate-y-5px hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor ">
                                                {/* card svg */}
                                                <div className="-translate-y-2 flex justify-between overflow-hidden mb-10px">
                                                    <div className="relative w-20 h-[60px]">
                                                        <svg
                                                            className="absolute inline-block translate-y-3 translate-x-2 w-20 h-[60px]"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M6.30281 28.9536H8.45394C9.05625 28.9536 9.48648 29.5426 9.48648 30.2495V36.8465C9.48648 37.6711 9.05625 38.2602 8.45394 38.2602H6.30281C5.78654 38.2602 5.27026 37.6711 5.27026 36.8465V30.2495C5.27026 29.5426 5.78654 28.9536 6.30281 28.9536Z"
                                                                fill="#5F2DED"
                                                            />
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M13.7027 23.7833H15.8987C16.4257 23.7833 16.8649 24.4239 16.8649 25.3207V36.7228C16.8649 37.6196 16.4257 38.2602 15.8987 38.2602H13.7027C13.0879 38.2602 12.6487 37.6196 12.6487 36.7228V25.3207C12.6487 24.4239 13.0879 23.7833 13.7027 23.7833Z"
                                                                fill="#5F2DED"
                                                            />
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M21.0596 19.6471H23.2108C23.727 19.6471 24.2433 20.412 24.2433 21.1769V36.7303C24.2433 37.6227 23.727 38.2602 23.2108 38.2602H21.0596C20.4573 38.2602 20.0271 37.6227 20.0271 36.7303V21.1769C20.0271 20.412 20.4573 19.6471 21.0596 19.6471Z"
                                                                fill="#5F2DED"
                                                            />
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M28.4381 15.5109H30.5892C31.1055 15.5109 31.6217 16.1499 31.6217 17.0445V36.7265C31.6217 37.6212 31.1055 38.2602 30.5892 38.2602H28.4381C27.8357 38.2602 27.4055 37.6212 27.4055 36.7265V17.0445C27.4055 16.1499 27.8357 15.5109 28.4381 15.5109Z"
                                                                fill="#5F2DED"
                                                            />
                                                            <path
                                                                className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M26.9989 7.6293L23.05 18.137L20.3744 15.4678C15.622 19.6266 9.96272 22.5976 3.63238 24.2568C1.36694 24.9297 0.353173 21.6176 2.74495 21.0505C8.47735 19.533 13.5443 16.8156 17.8363 13.1279L15.5453 10.8879L26.9989 7.6293Z"
                                                                fill="#FFB31F"
                                                            />
                                                        </svg>
                                                        <div className="service__bg__img w-20 h-[60px]">
                                                            <svg
                                                                className="w-20 h-[60px]"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                                                    fill="#5F2DED"
                                                                    fillOpacity="0.05"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="service__small__img w-7 h-[60px]">
                                                        <svg
                                                            className="icon__hover__img w-7 h-[60px] opacity-0 group-hover:opacity-100"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                                                stroke="#FFB31F"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                {/* card content */}
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                                                    >
                                                        Artist &amp; Design
                                                    </a>
                                                    <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                                                        Construction is a general term the art and science to
                                                        form
                                                    </p>
                                                    <div>
                                                        <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                                                            <a
                                                                href="#"
                                                                className="text-sm font-medium hover:text-secondaryColor transition-all duration-300"
                                                            >
                                                                View Subject
                                                                <i className="icofont-long-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* courses section */}
                <section>
                    <div className="pt-50px pb-10 md:pt-70px md:pb-50px lg:pt-20 2xl:pt-100px 2xl:pb-70px bg-whiteColor dark:bg-whiteColor-dark">
                        <div className="filter-container container">
                            <div className="flex gap-15px lg:gap-30px flex-wrap lg:flex-nowrap items-center">
                                {/* courses Left */}
                                <div className="basis-full lg:basis-[500px]" data-aos="fade-up">
                                    <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                                        Course List
                                    </span>
                                    <h3
                                        className="text-3xl md:text-[35px] lg:text-size-42 leading-[45px] 2xl:leading-[45px] md:leading-[50px] font-bold text-blackColor dark:text-blackColor-dark"
                                        data-aos="fade-up"
                                    >
                                        Perfect Online Course Your Carrer
                                    </h3>
                                </div>
                                {/* courses right */}
                                <div className="basis-full lg:basis-[700px]">
                                    <ul
                                        className="filter-controllers flex flex-wrap sm:flex-nowrap justify-start lg:justify-end button-group filters-button-group"
                                        data-aos="fade-up"
                                    >
                                        <li>
                                            <button
                                                data-filter="*"
                                                className="is-checked dark:is-checked pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                            >
                                                See All
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                data-filter=".filter1"
                                                className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                            >
                                                Data science
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                data-filter=".filter2"
                                                className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                            >
                                                Engineering
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                data-filter=".filter3"
                                                className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                            >
                                                Featured
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                data-filter=".filter4"
                                                className="text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                            >
                                                Architecture
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* course cards */}
                            <div
                                className="container p-0 filter-contents flex flex-wrap sm:-mx-15px mt-7 lg:mt-10"
                                data-aos="fade-up"
                            >
                                {/* card 1 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item filter1 filter3">
                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                            {/* card image */}
                                            <div className="relative mb-4">
                                                <a
                                                    href="course-details.html"
                                                    className="w-full overflow-hidden rounded"
                                                >
                                                    <img
                                                        src="./assets/images/grid/grid_1.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold">
                                                            Data &amp; Tech
                                                        </p>
                                                    </div>
                                                    <a
                                                        className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                                        href="#"
                                                    >
                                                        <i className="icofont-heart-alt text-base py-1 px-2" />
                                                    </a>
                                                </div>
                                            </div>
                                            {/* card content */}
                                            <div>
                                                <div className="grid grid-cols-2 mb-15px">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                23 Lesson
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                1 hr 30 min
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="course-details.html"
                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                >
                                                    Foundation course to under stand about softwere
                                                </a>
                                                {/* price */}
                                                <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                                    $32.00
                                                    <del className="text-sm text-lightGrey4 font-semibold">
                                                        / $67.00
                                                    </del>
                                                    <span className="ml-6">
                                                        <del className="text-base font-semibold text-secondaryColor3">
                                                            Free
                                                        </del>
                                                    </span>
                                                </div>
                                                {/* author and rating*/}
                                                <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                                                    <div>
                                                        <a
                                                            href="instructor-details.html"
                                                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                        >
                                                            <img
                                                                className="w-[30px] h-[30px] rounded-full mr-15px"
                                                                src="./assets/images/grid/grid_small_1.jpg"
                                                                alt=""
                                                            />
                                                            <span className="flex">Micle john</span>
                                                        </a>
                                                    </div>
                                                    <div className="text-start md:text-end">
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <span className="text-xs text-lightGrey6">(44)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 2 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item filter2 filter3">
                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                            {/* card image */}
                                            <div className="relative mb-4">
                                                <a
                                                    href="course-details.html"
                                                    className="w-full overflow-hidden rounded"
                                                >
                                                    <img
                                                        src="./assets/images/grid/grid_2.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold">
                                                            Mechanical
                                                        </p>
                                                    </div>
                                                    <a
                                                        className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                                        href="#"
                                                    >
                                                        <i className="icofont-heart-alt text-base py-1 px-2" />
                                                    </a>
                                                </div>
                                            </div>
                                            {/* card content */}
                                            <div>
                                                <div className="grid grid-cols-2 mb-15px">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                29 Lesson
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                2 hr 10 min
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="course-details.html"
                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                >
                                                    Nidnies course to under stand about softwere
                                                </a>
                                                {/* price */}
                                                <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                                    $32.00
                                                    <del className="text-sm text-lightGrey4 font-semibold">
                                                        / $67.00
                                                    </del>
                                                    <span className="ml-6">
                                                        <del className="text-base font-semibold text-greencolor">
                                                            Free
                                                        </del>
                                                    </span>
                                                </div>
                                                {/* author and rating*/}
                                                <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                                                    <div>
                                                        <a
                                                            href="instructor-details.html"
                                                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                        >
                                                            <img
                                                                className="w-[30px] h-[30px] rounded-full mr-15px"
                                                                src="./assets/images/grid/grid_small_2.jpg"
                                                                alt=""
                                                            />
                                                            Rinis Jhon
                                                        </a>
                                                    </div>
                                                    <div className="text-start md:text-end">
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <span className="text-xs text-lightGrey6">(44)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 3 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item filter4 filter5">
                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                            {/* card image */}
                                            <div className="relative mb-4">
                                                <a
                                                    href="course-details.html"
                                                    className="w-full overflow-hidden rounded"
                                                >
                                                    <img
                                                        src="./assets/images/grid/grid_3.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor2 rounded font-semibold">
                                                            Development
                                                        </p>
                                                    </div>
                                                    <a
                                                        className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                                        href="#"
                                                    >
                                                        <i className="icofont-heart-alt text-base py-1 px-2" />
                                                    </a>
                                                </div>
                                            </div>
                                            {/* card content */}
                                            <div>
                                                <div className="grid grid-cols-2 mb-15px">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                25 Lesson
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                1 hr 40 min
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="course-details.html"
                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                >
                                                    Minws course to under stand about solution
                                                </a>
                                                {/* price */}
                                                <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                                    $40.00
                                                    <del className="text-sm text-lightGrey4 font-semibold">
                                                        / $67.00
                                                    </del>
                                                    <span className="ml-6">
                                                        <del className="text-base font-semibold text-secondaryColor3">
                                                            Free
                                                        </del>
                                                    </span>
                                                </div>
                                                {/* author and rating*/}
                                                <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                                                    <div>
                                                        <a
                                                            href="instructor-details.html"
                                                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                        >
                                                            <img
                                                                className="w-[30px] h-[30px] rounded-full mr-15px"
                                                                src="./assets/images/grid/grid_small_3.jpg"
                                                                alt=""
                                                            />
                                                            Micle John
                                                        </a>
                                                    </div>
                                                    <div className="text-start md:text-end">
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <span className="text-xs text-lightGrey6">(44)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 4 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item filter4">
                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                            {/* card image */}
                                            <div className="relative mb-4">
                                                <a
                                                    href="course-details.html"
                                                    className="w-full overflow-hidden rounded"
                                                >
                                                    <img
                                                        src="./assets/images/grid/grid_4.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-greencolor2 rounded font-semibold">
                                                            Ui &amp; UX Design
                                                        </p>
                                                    </div>
                                                    <a
                                                        className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                                        href="#"
                                                    >
                                                        <i className="icofont-heart-alt text-base py-1 px-2" />
                                                    </a>
                                                </div>
                                            </div>
                                            {/* card content */}
                                            <div>
                                                <div className="grid grid-cols-2 mb-15px">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                36 Lesson
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                3 hr 40 min
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="course-details.html"
                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                >
                                                    Design course to under stand about solution
                                                </a>
                                                {/* price */}
                                                <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                                    $40.00
                                                    <del className="text-sm text-lightGrey4 font-semibold">
                                                        / $67.00
                                                    </del>
                                                    <span className="ml-6">
                                                        <del className="text-base font-semibold text-secondaryColor3">
                                                            Free
                                                        </del>
                                                    </span>
                                                </div>
                                                {/* author and rating*/}
                                                <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                                                    <div>
                                                        <a
                                                            href="instructor-details.html"
                                                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                        >
                                                            <img
                                                                className="w-[30px] h-[30px] rounded-full mr-15px"
                                                                src="./assets/images/grid/grid_small_4.jpg"
                                                                alt=""
                                                            />
                                                            <span className="flex flex-shrink-0">
                                                                Micle Robin
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="text-start md:text-end">
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <span className="text-xs text-lightGrey6">(44)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 5 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 group group grid-item filter1 filter3">
                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                            {/* card image */}
                                            <div className="relative mb-4">
                                                <a
                                                    href="course-details.html"
                                                    className="w-full overflow-hidden rounded"
                                                >
                                                    <img
                                                        src="./assets/images/grid/grid_5.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-orange rounded font-semibold">
                                                            Data &amp; Tech
                                                        </p>
                                                    </div>
                                                    <a
                                                        className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                                        href="#"
                                                    >
                                                        <i className="icofont-heart-alt text-base py-1 px-2" />
                                                    </a>
                                                </div>
                                            </div>
                                            {/* card content */}
                                            <div>
                                                <div className="grid grid-cols-2 mb-15px">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                36 Lesson
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                3 hr 40 min
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="course-details.html"
                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                >
                                                    Data course to under stand about solution
                                                </a>
                                                {/* price */}
                                                <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                                    $40.00
                                                    <del className="text-sm text-lightGrey4 font-semibold">
                                                        / $67.00
                                                    </del>
                                                    <span className="ml-6">
                                                        <del className="text-base font-semibold text-secondaryColor3">
                                                            Free
                                                        </del>
                                                    </span>
                                                </div>
                                                {/* author and rating*/}
                                                <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                                                    <div>
                                                        <a
                                                            href="instructor-details.html"
                                                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                        >
                                                            <img
                                                                className="w-[30px] h-[30px] rounded-full mr-15px"
                                                                src="./assets/images/grid/grid_small_1.jpg"
                                                                alt=""
                                                            />
                                                            <span className="flex flex-shrink-0">
                                                                Micle Robin
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="text-start md:text-end">
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <span className="text-xs text-lightGrey6">(44)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 6 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item filter2 filter5">
                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                            {/* card image */}
                                            <div className="relative mb-4">
                                                <a
                                                    href="course-details.html"
                                                    className="w-full overflow-hidden rounded"
                                                >
                                                    <img
                                                        src="./assets/images/grid/grid_6.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-yellow rounded font-semibold">
                                                            Big Data
                                                        </p>
                                                    </div>
                                                    <a
                                                        className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                                        href="#"
                                                    >
                                                        <i className="icofont-heart-alt text-base py-1 px-2" />
                                                    </a>
                                                </div>
                                            </div>
                                            {/* card content */}
                                            <div>
                                                <div className="grid grid-cols-2 mb-15px">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                30 Lesson
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                3 hr 40 min
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="course-details.html"
                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                >
                                                    Big data to under stand about solution pacage
                                                </a>
                                                {/* price */}
                                                <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                                    $40.00
                                                    <del className="text-sm text-lightGrey4 font-semibold">
                                                        / $67.00
                                                    </del>
                                                    <span className="ml-6">
                                                        <del className="text-base font-semibold text-secondaryColor3">
                                                            Free
                                                        </del>
                                                    </span>
                                                </div>
                                                {/* author and rating*/}
                                                <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                                                    <div>
                                                        <a
                                                            href="instructor-details.html"
                                                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                        >
                                                            <img
                                                                className="w-[30px] h-[30px] rounded-full mr-15px"
                                                                src="./assets/images/grid/grid_small_1.jpg"
                                                                alt=""
                                                            />
                                                            <span className="flex flex-shrink-0">
                                                                Micle Robin
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="text-start md:text-end">
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <i className="icofont-star text-size-15 text-yellow" />
                                                        <span className="text-xs text-lightGrey6">(44)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Registration Sectoion*/}
                <section className="bg-register bg-cover bg-center bg-no-repeat lg:mb-150px">
                    {/* registration overlay */}
                    <div className="overlay bg-blueDark bg-opacity-90 py-20 lg:pt-[90px] lg:pb-0 relative z-0">
                        {/* animate icons */}
                        <div>
                            <img
                                className="absolute top-0 left-0 lg:left-[8%] 2xl:top-10 animate-move-hor block z--1"
                                src="./assets/images/register/register__1.png"
                                alt=""
                            />
                            <img
                                className="absolute top-1/2 left-3/4 md:left-2/3 lg:left-1/2 2xl:left-[8%] md:top animate-spin-slow block z--1"
                                src="./assets/images/register/register__2.png"
                                alt=""
                            />
                            <img
                                className="absolute top-20 lg:top-3/4 md:top-14 right-20 md:right-20 lg:right-[90%] animate-move-var block z--1"
                                src="./assets/images/register/register__3.png"
                                alt=""
                            />
                        </div>
                        <div className="container">
                            {/* about section  */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 pt-30px gap-x-30px">
                                {/* about left */}
                                <div
                                    className="mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 lg:col-start-1 lg:col-span-7"
                                    data-aos="fade-up"
                                >
                                    <div className="relative">
                                        <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                                            Registration
                                        </span>
                                        <h3 className="text-3xl md:text-[35px] 2xl:text-size-42 leading-[45px] 2xl:leading-2xl font-bold text-whiteColor pb-25px">
                                            Register Your
                                            <span className="relative after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-2 md:after:bottom-4 z-0 after:z-[-1]">
                                                Account
                                            </span>
                                            Get free access to
                                            <span className="text-yellow1">60000 </span> online course
                                        </h3>
                                        <div className="flex gap-x-5 items-center">
                                            <div>
                                                <button
                                                    data-url="https://www.youtube.com/watch?v=vHdclsdkp28"
                                                    className="lvideo relative w-15 h-15 md:h-20 md:w-20 lg:w-15 lg:h-15 2xl:h-70px 2xl:w-70px 3xl:h-20 3xl:w-20 bg-secondaryColor rounded-full flex items-center justify-center"
                                                >
                                                    <span className="animate-buble absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[180px] h-[180px] border-secondaryColor rounded-full" />
                                                    <span className="animate-buble2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[180px] h-[180px] border-secondaryColor rounded-full" />
                                                    <img src="./assets/images/icon/video.png" alt="" />
                                                </button>
                                            </div>
                                            <div>
                                                <p className="text-size-15 md:text-[22px] lg:text-lg 2xl:text-[22px] leading-6 md:leading-9 lg:leading-8 2xl:leading-9 font-semibold text-white">
                                                    Learn Something new &amp; Build Your Career From Anywhere
                                                    In The World
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* sbject right */}
                                <div className="overflow-visible lg:col-start-8 lg:col-span-5 relative z-1 lg:-mb-150px">
                                    <form
                                        className="p-35px pt-10 bg-lightGrey10 dark:bg-lightGrey10-dark rounded shadow-experience"
                                        data-aos="fade-up"
                                    >
                                        <h3 className="text-xl text-blackColor dark:text-blackColor-dark font-semibold mb-5 font-inter">
                                            Fill Your Registration
                                        </h3>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-15px py-3 bg-lightGrey8 text-base mb-25px focus:outline-none"
                                        />
                                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-30px">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full px-15px py-3 bg-lightGrey8 text-base mb-25px focus:outline-none"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Phone"
                                                className="w-full px-15px py-3 bg-lightGrey8 text-base mb-25px focus:outline-none"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Address"
                                            className="w-full px-15px py-3 bg-lightGrey8 text-base mb-25px focus:outline-none"
                                        />
                                        <textarea
                                            placeholder="Comment"
                                            className="w-full px-15px pb-3 pt-5 bg-lightGrey8 text-base mb-25px h-[155px] placeholder:text-blackColor"
                                            cols={30}
                                            rows={10}
                                            defaultValue={""}
                                        />
                                        <div>
                                            <button
                                                type="submit"
                                                className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                                            >
                                                Sign Up
                                                <i className="icofont-long-arrow-right group-hover:text-primaryColor" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* pricing plan section */}
                <Pricing plans={plans} columns={4} />
                {/* About Instructor Section*/}


                {/* News and blog section */}
                <section>
                    <div className="container pt-100px pb-70px">
                        {/* heading */}
                        <div className="mb-5 md:mb-10" data-aos="fade-up">
                            <div className="relative">
                                <div>
                                    <div className="text-center">
                                        <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                                            News &amp; Blogs
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor text-center dark:text-blackColor-dark">
                                    Leatest News &amp; Blog
                                </h3>
                            </div>
                        </div>
                        {/* blogs */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
                            {/* blog 1 */}
                            <div
                                className="lg:col-start-1 lg:col-span-8 group shadow-blog"
                                data-aos="fade-up"
                            >
                                {/* blog thumbnail */}
                                <div className="overflow-hidden relative">
                                    <img
                                        src="./assets/images/blog/blog_1.png"
                                        alt=""
                                        className="w-full group-hover:scale-110 transition-all duration-300"
                                    />
                                    <div className="text-base md:text-3xl leading-5 md:leading-9 font-semibold text-white px-15px py-5px md:px-6 md:py-2 bg-primaryColor rounded text-center absolute top-5 left-5">
                                        20 <br />
                                        Oct
                                    </div>
                                </div>
                                {/* blog content */}
                                <div className="p-5 md:p-35px md:pt-10">
                                    <h3 className="text-2xl md:text-4xl leading-30px md:leading-45px font-bold text-blackColor hover:text-primaryColor pb-25px dark:text-blackColor-dark dark:hover:text-primaryColor">
                                        <a href="blog-details.html">
                                            It is a long established fact that a reader will be Standard
                                            Part
                                        </a>
                                    </h3>
                                    <p className="text-base text-contentColor dark:text-contentColor-dark mb-30px">
                                        A wonderful serenity has taken possssion of my entire souing
                                        like these sweet morning spring whch enjoy with my whole heart I
                                        am alone, and feel the charm of existenceths spot whch was
                                        create For the bliss of souls like mineing am so happy my dear
                                        frend so absori bed in the exquste sens of mere. A wonderful
                                        serenity has taken posseson of my entire soung like these sweet
                                        mornngs spring whch enjoy …
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <img
                                                    src="./assets/images/blog/blog_2.png"
                                                    alt=""
                                                    className="w-11 h-11 rounded-full"
                                                />
                                            </div>
                                            <div className="text-sm md:text-lg text-darkdeep5 dark:text-darkdeep5-dark">
                                                By:
                                                <span className="text-blackColor dark:text-blackColor-dark">
                                                    Mirnsdo Jons
                                                </span>
                                            </div>
                                        </div>
                                        {/* social */}
                                        <div>
                                            <ul className="flex gap-1">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-sm md:text-size-15 w-5 h-5 md:w-[39px] md:h-[39px] flex items-center justify-center border border-borderColor text-darkdeep4 hover:text-primaryColor dark:border-borderColor-dark rounded"
                                                    >
                                                        <i className="icofont-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-sm md:text-size-15 w-5 h-5 md:w-[39px] md:h-[39px] flex items-center justify-center border border-borderColor text-darkdeep4 hover:text-primaryColor dark:border-borderColor-dark rounded"
                                                    >
                                                        <i className="icofont-youtube-play" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-sm md:text-size-15 w-5 h-5 md:w-[39px] md:h-[39px] flex items-center justify-center border border-borderColor text-darkdeep4 hover:text-primaryColor dark:border-borderColor-dark rounded"
                                                    >
                                                        <i className="icofont-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-sm md:text-size-15 w-5 h-5 md:w-[39px] md:h-[39px] flex items-center justify-center border border-borderColor text-darkdeep4 hover:text-primaryColor dark:border-borderColor-dark rounded"
                                                    >
                                                        <i className="icofont-twitter" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* blog 2 & 3 */}
                            <div className="lg:col-start-9 lg:col-span-4">
                                <div className="flex flex-col gap-y-30px">
                                    {/* blog 2 */}
                                    <div className="group shadow-blog" data-aos="fade-up">
                                        {/* blog thumbnail */}
                                        <div className="overflow-hidden relative">
                                            <img
                                                src="./assets/images/blog/blog_3.png"
                                                alt=""
                                                className="w-full group-hover:scale-110 transition-all duration-300"
                                            />
                                            <div className="text-base md:text-2xl leading-5 md:leading-30px font-semibold text-white px-15px py-5px md:px-22px md:py-7px bg-primaryColor rounded text-center absolute top-5 left-5">
                                                20 <br />
                                                Oct
                                            </div>
                                        </div>
                                        {/* blog content */}
                                        <div className="px-5 py-25px">
                                            <h3 className="text-2xl md:text-size-28 leading-30px md:leading-35px font-bold text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor">
                                                <a href="blog-details.html">
                                                    It is a long established fact that a reader will be
                                                    Standard Part
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                    {/* blog 3 */}
                                    <div className="group shadow-blog" data-aos="fade-up">
                                        {/* blog thumbnail */}
                                        <div className="overflow-hidden relative">
                                            <img
                                                src="./assets/images/blog/blog_4.png"
                                                alt=""
                                                className="w-full group-hover:scale-110 transition-all duration-300"
                                            />
                                            <div className="text-base md:text-2xl leading-5 md:leading-30px font-semibold text-white px-15px py-5px md:px-22px md:py-7px bg-primaryColor rounded text-center absolute top-5 left-5">
                                                20 <br />
                                                Oct
                                            </div>
                                        </div>
                                        {/* blog content */}
                                        <div className="px-5 py-25px">
                                            <h3 className="text-2xl md:text-size-28 leading-30px md:leading-35px font-bold text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor">
                                                <a href="blog-details.html">
                                                    It is a long established fact that a reader will be
                                                    Standard Part
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />




        </AuthenticatedLayout>
    );
}

import React from 'react';

const Plan = ({ titulo, precio, caracteristicas, imagen, descripcion, btnTexto, link, btnColor }) => {
    return (
        <div
            className="p-10 pt-50px bg-lightGrey10 hover:bg-whiteColor hover:shadow-plan transition-all duration-300 rounded-lg dark:bg-lightGrey10-dark dark:hover:bg-whiteColor-dark"
            data-aos="fade-up"
        >
            <div className="relative mb-55px">
                <h3 className="text-size-28 font-semibold text-blackColor leading-45px mb-15px uppercase dark:text-blackColor-dark">
                    {titulo}
                </h3>
                <h6 className="text-5xl text-blackColor font-medium mb-15px dark:text-blackColor-dark">
                    <span className="text-size-58 pr-1">$</span>{precio}
                    <span className="text-size-22 text-contentColor dark:text-contentColor-dark">/ month</span>
                </h6>
                <p className="text-blackColor dark:text-blackColor-dark">{descripcion}</p>
                {imagen && (
                    <img
                        className="absolute top-0 right-0 -translate-y-30px"
                        src={imagen}
                        alt=""
                    />
                )}
            </div>
            <div>
                <ul className="flex flex-col gap-y-30px">
                    {caracteristicas && caracteristicas.map((feature, index) => (
                        <li key={index}>
                            <i className={`icofont-${feature.available ? 'check' : 'close'} text-whiteColor ${feature.available ? 'bg-secondaryColor' : 'bg-lightGrey6'} px-1 py-3px mr-15px rounded-full text-xs`} />
                            <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <a
                    href={link}
                    className={`w-full py-10px px-25px text-size-15 text-center text-whiteColor ${btnColor} border hover:bg-whiteColor hover:text-primaryColor mb-25px mt-30px rounded dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark`}
                >
                    {btnTexto}
                </a>
                <p className="text-size-15 text-contentColor dark:text-contentColor-dark">
                    No credit card required
                </p>
            </div>
        </div>
    );
};

const Pricing = ({ plans = [], columns = 3 }) => {
    if (!plans.length) {
        return <p>No hay planes disponibles en este momento.</p>;
    }

    return (
        <section>
            <div className="container pt-90px pb-100px">
                <div className="mb-5 md:mb-10">
                    <div className="relative" data-aos="fade-up">
                        <div className="text-center">
                            <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                                Planes
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark text-center">
                            Choose The Best Package <br />
                            For your Learning
                        </h3>
                    </div>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-30px`}>
                    {plans.map((plan, index) => (
                        <Plan
                            key={index}
                            titulo={plan.titulo}
                            precio={plan.precio}
                            caracteristicas={plan.caracteristicas}
                            imagen={plan.imagen}
                            descripcion={plan.descripcion}
                            btnTexto={plan.btnTexto}
                            btnColor={plan.btnColor}
                            link={plan.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

import React from "react";
import {Helmet} from "react-helmet";

import {
    HomeHeader,
    FiltersObject,
    HomeServices,
    HomeSecurity,
    HomeCorporate,
    HomeEmail,
} from "../components";

import MainBg from "../assets/images/main-bg.jpg";

const Home: React.FC = () => {
    const title = "отдыха мечты";

    const [writeTitle, setWriteTitle] = React.useState<string>("");

    React.useEffect(() => {
        window.scrollTo(0, 0);

        const titleSplit = title.split("");

        let writeTitle = "";
        let letterIndex = 0;

        setInterval(() => {
            if (letterIndex !== titleSplit.length) {
                writeTitle += titleSplit[letterIndex];

                setWriteTitle(writeTitle);

                letterIndex++;
            } else {
                clearInterval();
            }
        }, 200);
    }, []);

    return (
        <>
            <Helmet>
                <title>Vhosty | Главная</title>
            </Helmet>

            <section
                className="home"
                style={{backgroundImage: `url('${MainBg}')`}}
            >
                <div className="container">
                    <div className="home-main-wrapper">
                        <HomeHeader />

                        <div className="home-main-text">
                            <h1 className="home-main-text__title">
                                Несколько кликов до <span>{writeTitle}</span>
                                <span id="blink">|</span>
                            </h1>

                            <p className="description home-main-text__description">
                                Бронирование жилья и отелей, которые впечатляют.
                            </p>
                        </div>

                        <div className="home-main-form">
                            <FiltersObject />
                        </div>
                    </div>
                </div>
            </section>

            <HomeServices />

            <HomeSecurity />

            <HomeCorporate />

            <HomeEmail />
        </>
    );
};

export default Home;

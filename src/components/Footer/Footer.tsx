import React from "react";
import {Link} from "react-router-dom";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import LogoBlack from "../../assets/images/logo-black.svg";
import UserIcon from "../../assets/images/user-icon.svg";

const Footer: React.FC = () => {
    const {isLoadedUser} = useTypedSelector(({user}) => user);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-block-wrapper">
                        <div className="footer-block-content">
                            <Link to="/" className="footer-block-logo">
                                <img
                                    src={LogoBlack}
                                    alt="Vhosty"
                                    className="footer-block-logo__image"
                                />
                                <span className="footer-block-logo__subtitle">
                                    Бронирование отелей и жилья в России
                                </span>
                            </Link>
                            <div className="footer-block-social">
                                <Link
                                    to=""
                                    className="footer-block-social__item"
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.125 0H1.875C0.84375 0 0 0.84375 0 1.875V18.125C0 19.1562 0.84375 20 1.875 20H18.125C19.1562 20 20 19.1562 20 18.125V1.875C20 0.84375 19.1562 0 18.125 0ZM16.1987 14L14.37 14.0275C14.37 14.0275 13.975 14.1062 13.46 13.75C12.7762 13.2812 12.1313 12.0587 11.6275 12.2188C11.12 12.3787 11.135 13.4762 11.135 13.4762C11.135 13.4762 11.1388 13.7112 11.0213 13.835C10.8963 13.9712 10.6462 13.9988 10.6462 13.9988H9.83C9.83 13.9988 8.025 14.1088 6.435 12.4513C4.7 10.6463 3.17 7.065 3.17 7.065C3.17 7.065 3.08 6.83 3.1775 6.7175C3.28625 6.58875 3.58 6.58125 3.58 6.58125L5.5375 6.57C5.5375 6.57 5.72125 6.60125 5.85375 6.69875C5.96375 6.7775 6.02125 6.92875 6.02125 6.92875C6.02125 6.92875 6.3375 7.73 6.75625 8.4525C7.5725 9.8625 7.955 10.1712 8.2325 10.0225C8.635 9.80375 8.51375 8.02625 8.51375 8.02625C8.51375 8.02625 8.52125 7.38125 8.31125 7.09625C8.1475 6.87375 7.83875 6.8075 7.70625 6.79125C7.59625 6.775 7.77625 6.52125 8.01125 6.405C8.3625 6.2325 8.98375 6.22125 9.71875 6.22875C10.2887 6.2325 10.4575 6.27125 10.68 6.3225C11.3562 6.48625 11.125 7.115 11.125 8.62375C11.125 9.10875 11.0388 9.7875 11.3863 10.01C11.535 10.1075 11.9012 10.025 12.82 8.4675C13.2537 7.72875 13.5812 6.8625 13.5812 6.8625C13.5812 6.8625 13.6512 6.70625 13.7612 6.64C13.875 6.57375 14.0275 6.59375 14.0275 6.59375L16.0863 6.5825C16.0863 6.5825 16.7038 6.50875 16.805 6.79C16.91 7.0825 16.575 7.76625 15.735 8.8875C14.3563 10.7275 14.2 10.555 15.3488 11.6175C16.4425 12.6337 16.6687 13.1288 16.7087 13.1913C17.1537 13.9413 16.2013 14 16.2013 14H16.1987Z"
                                            fill="#253021"
                                        />
                                    </svg>
                                </Link>

                                <Link
                                    to=""
                                    className="footer-block-social__item"
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.125 0H1.875C0.84375 0 0 0.84375 0 1.875V18.125C0 19.1562 0.84375 20 1.875 20H18.125C19.1562 20 20 19.1562 20 18.125V1.875C20 0.84375 19.1562 0 18.125 0ZM16.1988 14L14.37 14.0275C14.37 14.0275 14.515 16.3563 14 16C13.3163 15.5313 11.9323 15.84 11.4286 16C10.9211 16.16 10.2381 13.9988 10.2381 13.9988C10.2381 13.9988 9.04687 15.7108 9.83 14.8571V13.9988C9.83 13.9988 4.7675 13.275 3.1775 11.6175C1.4425 9.8125 3.17 7.065 3.17 7.065C3.17 7.065 3.08 6.83 3.1775 6.7175C3.28625 6.58875 3.58 6.58125 3.58 6.58125L5.5375 6.57C5.5375 6.57 4.72464 4.18821 4.85714 4.28571C4.96714 4.36446 6.02125 6.92875 6.02125 6.92875C6.02125 6.92875 6.3375 7.73 6.75625 8.4525C7.5725 9.8625 6.47875 6.71875 6.75625 6.57C7.15875 6.35125 8.51375 8.02625 8.51375 8.02625C8.51375 8.02625 8.52125 7.38125 8.31125 7.09625C8.1475 6.87375 7.83875 6.8075 7.70625 6.79125C7.59625 6.775 7.77625 6.52125 8.01125 6.405C8.3625 6.2325 8.98375 6.22125 9.71875 6.22875C10.2888 6.2325 10.4575 6.27125 10.68 6.3225C11.3562 6.48625 12 2.49125 12 4C12 4.485 22.2811 6.59179 17.1429 8.8875C13.4629 2.59179 11.9384 5.5575 12.8571 4C13.2909 3.26125 13.46 4.28571 13.46 4.28571C14.0688 2.08758 14.8571 5.10878 14.8571 5.10878L16.0863 6.5825C16.0863 6.5825 16.7038 6.50875 16.805 6.79C16.91 7.0825 16.575 7.76625 15.735 8.8875C14.3563 10.7275 14.2 10.555 15.3488 11.6175C16.4425 12.6337 16.6688 13.1288 16.7088 13.1913C17.1538 13.9413 16.2013 14 16.2013 14H16.1988Z"
                                            fill="#253021"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M20 10C20 15.5225 15.5225 20 10 20C4.4775 20 0 15.5225 0 10C0 4.4775 4.4775 0 10 0C15.5225 0 20 4.4775 20 10ZM10.3583 7.3825C9.38583 7.78667 7.44167 8.62417 4.52667 9.89417C4.05333 10.0825 3.805 10.2667 3.7825 10.4467C3.74417 10.7517 4.12583 10.8717 4.64417 11.0342C4.715 11.0567 4.78833 11.0792 4.86333 11.1042C5.37417 11.27 6.06083 11.4642 6.4175 11.4717C6.74167 11.4783 7.10333 11.345 7.5025 11.0717C10.2258 9.2325 11.6317 8.30333 11.72 8.28333C11.7825 8.26917 11.8692 8.25083 11.9275 8.30333C11.9858 8.355 11.98 8.45333 11.9742 8.48C11.9358 8.64083 10.4408 10.0317 9.66583 10.7517C9.42417 10.9758 9.25333 11.135 9.21833 11.1717C9.14 11.2525 9.06 11.33 8.98333 11.4042C8.50833 11.8608 8.15333 12.2042 9.00333 12.7642C9.41167 13.0333 9.73833 13.2558 10.0642 13.4775C10.42 13.72 10.775 13.9617 11.235 14.2633C11.3517 14.34 11.4633 14.4192 11.5725 14.4967C11.9867 14.7925 12.3592 15.0575 12.8192 15.0158C13.0858 14.9908 13.3625 14.74 13.5025 13.9908C13.8333 12.2192 14.485 8.3825 14.6358 6.80083C14.645 6.66951 14.6394 6.53757 14.6192 6.4075C14.607 6.30244 14.5559 6.20578 14.4758 6.13667C14.3567 6.03917 14.1717 6.01833 14.0883 6.02C13.7125 6.02667 13.1358 6.2275 10.3583 7.3825Z"
                                            fill="#253021"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="footer-block-menu">
                            <nav className="footer-block-menu-item">
                                <p className="footer-block-menu-item__subtitle">
                                    О нас
                                </p>

                                <Link
                                    to=""
                                    className="footer-block-menu-item__link"
                                >
                                    О компании
                                </Link>

                                <Link
                                    to=""
                                    className="footer-block-menu-item__link"
                                >
                                    Вакансии
                                </Link>
                            </nav>

                            <nav className="footer-block-menu-item">
                                <p className="footer-block-menu-item__subtitle">
                                    Клиентам
                                </p>

                                <Link
                                    to=""
                                    className="footer-block-menu-item__link"
                                >
                                    База знаний
                                </Link>

                                <Link
                                    to=""
                                    className="footer-block-menu-item__link"
                                >
                                    Служба поддержки
                                </Link>

                                <Link
                                    to=""
                                    className="footer-block-menu-item__link"
                                >
                                    Программа лояльности
                                </Link>
                            </nav>

                            <nav className="footer-block-menu-item">
                                <p className="footer-block-menu-item__subtitle">
                                    Партнерам
                                </p>

                                <Link
                                    to=""
                                    className="footer-block-menu-item__link"
                                >
                                    Объектам размещения
                                </Link>

                                <Link
                                    to=""
                                    className="footer-block-menu-item__link"
                                >
                                    Разместить свой объект
                                </Link>

                                <Link
                                    to=""
                                    className="footer-block-menu-item__link"
                                >
                                    Центр помощи партнерам
                                </Link>
                            </nav>
                        </div>
                    </div>

                    {isLoadedUser ? null : (
                        <div className="footer-block-wrapper">
                            <div className="footer-block-reglog">
                                <img
                                    src={UserIcon}
                                    alt=""
                                    className="footer-block-reglog__image"
                                />

                                <p className="footer-block-reglog__title">
                                    <Link to="#register">
                                        Зарегистрироваться
                                    </Link>{" "}
                                    или <Link to="#login">Войти</Link>
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="footer-block-wrapper">
                        <Link to="/" className="footer-block__link">
                            Политика хранения и обработки персональных данных
                        </Link>
                        <Link to="/" className="footer-block__link">
                            Правила и условия
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

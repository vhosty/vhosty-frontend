import React from "react";

import {FiltersGuestRoomItem} from "../../../redux/types/filters/IFiltersGuestRoom";

import {checkDeclension} from "../../../functions/checkDeclension";

import {Popup, GuestRoomSelectItemKids} from "../../";

interface GuestRoomSelectItem extends FiltersGuestRoomItem {
    itemIndex: number;
    isLast: boolean;
    isOne: boolean;

    plusFiltersGuestRoomAdultsCountOnClick: (index: number) => void;
    minusFiltersGuestRoomAdultsCountOnClick: (index: number) => void;
    deleteGuestRoomOnClick: (index: number) => void;
    addFiltersGuestRoomKidsOnClick: (index: number, age: number) => void;
    deleteFiltersGuestRoomKidsOnClick: (
        itemIndex: number,
        kidsItemIndex: number
    ) => void;
}

const GuestRoomSelectItem: React.FC<GuestRoomSelectItem> = ({
    itemIndex,
    adultsCount,
    kids,
    isLast,
    isOne,
    plusFiltersGuestRoomAdultsCountOnClick,
    minusFiltersGuestRoomAdultsCountOnClick,
    deleteGuestRoomOnClick,
    addFiltersGuestRoomKidsOnClick,
    deleteFiltersGuestRoomKidsOnClick,
}) => {
    const [activeKidsSelect, setActiveKidsSelect] =
        React.useState<boolean>(false);
    const [activeKidsSelectAnimation, setActiveKidsSelectAnimation] =
        React.useState<boolean>(false);

    const PopupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener("mousedown", toggleKidsSelect);
        document.addEventListener("touchstart", toggleKidsSelect);

        return () => {
            document.removeEventListener("mousedown", toggleKidsSelect);
            document.removeEventListener("touchstart", toggleKidsSelect);
        };
    }, [PopupRef]);

    const openKidsSelect = () => {
        setActiveKidsSelect(true);
    };

    const closeKidsSelect = () => {
        setActiveKidsSelectAnimation(true);

        setTimeout(() => {
            setActiveKidsSelectAnimation(false);
            setActiveKidsSelect(false);
        }, 180);
    };

    const toggleKidsSelect = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            closeKidsSelect();
        }
    };

    return (
        <div className="guest-room-select-item">
            <div className="guest-room-select-item-title">
                <p className="guest-room-select-item-title__title">
                    Номер {itemIndex + 1}
                </p>

                {itemIndex ? (
                    <div
                        className="guest-room-select-item-title-delete"
                        onClick={() => deleteGuestRoomOnClick(itemIndex)}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 10C19 5.03125 14.9688 1 10 1C5.03125 1 1 5.03125 1 10C1 14.9688 5.03125 19 10 19C14.9688 19 19 14.9688 19 10Z"
                                stroke="#8D938B"
                                strokeMiterlimit="10"
                            />
                            <path
                                d="M7 13L13 7M13 13L7 7L13 13Z"
                                stroke="#8D938B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                ) : null}
            </div>

            <div className="guest-room-select-item-block-wrapper">
                <div className="guest-room-select-item-adults">
                    <p className="guest-room-select-item-adults__subtitle">
                        Взрослые
                    </p>

                    <div className="guest-room-select-item-adults-change">
                        <div
                            className={`guest-room-select-item-adults-change-block minus ${
                                adultsCount === 1 ? "disabled" : ""
                            }`}
                            onClick={() =>
                                minusFiltersGuestRoomAdultsCountOnClick(
                                    itemIndex
                                )
                            }
                        >
                            <svg
                                width="14"
                                height="2"
                                viewBox="0 0 14 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.625 1H1.375"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <span className="guest-room-select-item-adults-change__count">
                            {adultsCount}
                        </span>
                        <div
                            className="guest-room-select-item-adults-change-block plus"
                            onClick={() =>
                                plusFiltersGuestRoomAdultsCountOnClick(
                                    itemIndex
                                )
                            }
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.625 7H1.375M7 1.375V12.625V1.375Z"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="guest-room-select-item-kids">
                    <p className="guest-room-select-item-kids__subtitle">
                        Дети
                    </p>
                    <div
                        className="guest-room-select-item-kids-wrapper"
                        style={
                            isOne
                                ? {position: "static"}
                                : {position: "relative"}
                        }
                    >
                        {kids.length ? (
                            <div className="guest-room-select-item-kids-items-wrapper-wrapper">
                                <div className="guest-room-select-item-kids-items-wrapper">
                                    {kids.map((item, index) => (
                                        <div
                                            className="guest-room-select-item-kids-item"
                                            key={`guest-room-select-item-${itemIndex}-kids-item-${index}`}
                                        >
                                            <span className="guest-room-select-item-kids-item__title">
                                                {
                                                    checkDeclension(item.age, [
                                                        "год",
                                                        "года",
                                                        "лет",
                                                    ]).title
                                                }
                                            </span>

                                            <div
                                                className="guest-room-select-item-kids-item-delete"
                                                onClick={() =>
                                                    deleteFiltersGuestRoomKidsOnClick(
                                                        itemIndex,
                                                        index
                                                    )
                                                }
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M19 10C19 5.03125 14.9688 1 10 1C5.03125 1 1 5.03125 1 10C1 14.9688 5.03125 19 10 19C14.9688 19 19 14.9688 19 10Z"
                                                        stroke="#8D938B"
                                                        strokeMiterlimit="10"
                                                    />
                                                    <path
                                                        d="M7 13L13 7M13 13L7 7L13 13Z"
                                                        stroke="#8D938B"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="guest-room-select-item-kids-null">
                                <p className="guest-room-select-item-kids-null__title">
                                    Без детей
                                </p>
                            </div>
                        )}

                        <div
                            className="guest-room-select-item-kids-plus"
                            onClick={openKidsSelect}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.625 7H1.375M7 1.375V12.625V1.375Z"
                                    stroke="#00A0A0"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <Popup
                            active={activeKidsSelect}
                            activeAnimation={activeKidsSelectAnimation}
                            addClassWrapper="guest-room-select-item-kids-select-wrapper"
                            refPopup={PopupRef}
                            style={
                                isOne
                                    ? {top: "85px", right: "30px"}
                                    : isLast
                                    ? {bottom: "-30px", right: "10px"}
                                    : {top: "-50px", right: "10px"}
                            }
                        >
                            <GuestRoomSelectItemKids
                                itemIndex={itemIndex}
                                onChange={(age: number) => {
                                    addFiltersGuestRoomKidsOnClick(
                                        itemIndex,
                                        age
                                    );
                                    closeKidsSelect();
                                }}
                            />
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuestRoomSelectItem;

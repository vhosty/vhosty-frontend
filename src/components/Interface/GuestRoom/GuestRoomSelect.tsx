import React from "react";
import {useDispatch} from "react-redux";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import {
    addFiltersGuestRoom,
    deleteFiltersGuestRoom,
    plusFiltersGuestRoomAdultsCount,
    minusFiltersGuestRoomAdultsCount,
    addFiltersGuestRoomKids,
    deleteFiltersGuestRoomKids,
} from "../../../redux/actions/filtersGuestRoom";

import {GuestRoomSelectItem} from "../../";

const GuestRoomSelect: React.FC = () => {
    const dispatch = useDispatch();

    const {guestRoom} = useTypedSelector(
        ({filtersGuestRoom}) => filtersGuestRoom
    );

    const addGuestRoomOnClick = () => {
        dispatch(addFiltersGuestRoom({adultsCount: 1, kids: []}));
    };

    const deleteGuestRoomOnClick = (index: number) => {
        dispatch(deleteFiltersGuestRoom(index));
    };

    const plusFiltersGuestRoomAdultsCountOnClick = (index: number) => {
        dispatch(plusFiltersGuestRoomAdultsCount(index));
    };

    const minusFiltersGuestRoomAdultsCountOnClick = (index: number) => {
        dispatch(minusFiltersGuestRoomAdultsCount(index));
    };

    const addFiltersGuestRoomKidsOnClick = (index: number, age: number) => {
        dispatch(addFiltersGuestRoomKids(index, {age}));
    };

    const deleteFiltersGuestRoomKidsOnClick = (
        itemIndex: number,
        kidsItemIndex: number
    ) => {
        dispatch(deleteFiltersGuestRoomKids(itemIndex, kidsItemIndex));
    };

    return (
        <div className="guest-room-select">
            {guestRoom.map((item, index) => (
                <GuestRoomSelectItem
                    {...item}
                    key={`guest-room-select-item-${index}`}
                    itemIndex={index}
                    isLast={index + 1 === guestRoom.length}
                    isOne={guestRoom.length === 1}
                    plusFiltersGuestRoomAdultsCountOnClick={
                        plusFiltersGuestRoomAdultsCountOnClick
                    }
                    minusFiltersGuestRoomAdultsCountOnClick={
                        minusFiltersGuestRoomAdultsCountOnClick
                    }
                    deleteGuestRoomOnClick={deleteGuestRoomOnClick}
                    addFiltersGuestRoomKidsOnClick={
                        addFiltersGuestRoomKidsOnClick
                    }
                    deleteFiltersGuestRoomKidsOnClick={
                        deleteFiltersGuestRoomKidsOnClick
                    }
                />
            ))}

            <p className="guest-room-select__add" onClick={addGuestRoomOnClick}>
                Добавить номер
            </p>
        </div>
    );
};

export default GuestRoomSelect;

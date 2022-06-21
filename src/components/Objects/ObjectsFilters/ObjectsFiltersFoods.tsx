import React from "react";

import {ObjectsFiltersBlockWrapper, TitleIcon, Checkbox} from "../../";

const ObjectsFiltersFoods: React.FC = () => {
    const foods = [
        "Все включено",
        "Завтрак включен",
        "Обед включен",
        "Ужин включен",
        "Не включено",
    ];

    return (
        <ObjectsFiltersBlockWrapper>
            <div className="objects-filters-block-title">
                <TitleIcon title="Питание" marginBottom>
                    <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 11V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20C13.4696 20 12.9609 19.7893 12.5858 19.4142C12.2107 19.0391 12 18.5304 12 18V13H10V3C10 2.20435 10.3161 1.44129 10.8787 0.87868C11.4413 0.31607 12.2044 0 13 0L16 0V11ZM2 10C1.46957 10 0.960859 9.78929 0.585786 9.41421C0.210714 9.03914 0 8.53043 0 8V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0C1.26522 0 1.51957 0.105357 1.70711 0.292893C1.89464 0.48043 2 0.734784 2 1V5H3V1C3 0.734784 3.10536 0.48043 3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0C4.26522 0 4.51957 0.105357 4.70711 0.292893C4.89464 0.48043 5 0.734784 5 1V5H6V1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1V8C8 8.53043 7.78929 9.03914 7.41421 9.41421C7.03914 9.78929 6.53043 10 6 10V18C6 18.5304 5.78929 19.0391 5.41421 19.4142C5.03914 19.7893 4.53043 20 4 20C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V10Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>
            </div>

            <div className="objects-filters-block-checkboxes">
                {foods.map((food, index) => (
                    <div
                        className="objects-filters-block-checkbox"
                        key={`objects-filters-block-checkbox-foods-${index}`}
                    >
                        <Checkbox small>{food}</Checkbox>
                    </div>
                ))}
            </div>
        </ObjectsFiltersBlockWrapper>
    );
};

export default ObjectsFiltersFoods;

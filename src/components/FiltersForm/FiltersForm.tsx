import React from "react";

import {TitleIcon, Input, Calendar} from "../";

const FiltersForm: React.FC = () => {
    return (
        <div className="filters-form">
            <div className="filters-form-block">
                <TitleIcon
                    title="Страна, город путешествия"
                    marginBottom={true}
                >
                    <svg
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 0.25C3.54961 0.25 0.75 2.76992 0.75 5.875C0.75 10.875 7 17.75 7 17.75C7 17.75 13.25 10.875 13.25 5.875C13.25 2.76992 10.4504 0.25 7 0.25ZM7 9C6.50555 9 6.0222 8.85338 5.61107 8.57867C5.19995 8.30397 4.87952 7.91352 4.6903 7.45671C4.50108 6.99989 4.45157 6.49723 4.54804 6.01227C4.6445 5.52732 4.8826 5.08186 5.23223 4.73223C5.58186 4.3826 6.02732 4.1445 6.51227 4.04804C6.99723 3.95157 7.49989 4.00108 7.95671 4.1903C8.41352 4.37952 8.80397 4.69995 9.07867 5.11107C9.35338 5.5222 9.5 6.00555 9.5 6.5C9.49928 7.16282 9.23565 7.79828 8.76697 8.26697C8.29828 8.73565 7.66282 8.99928 7 9Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>
                <Input label="Например, Дубай" />
            </div>

            <Calendar />
        </div>
    );
};

export default FiltersForm;

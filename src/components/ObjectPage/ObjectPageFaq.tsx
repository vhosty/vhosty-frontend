import React from "react";

import {Tab} from "../";

const ObjectPageFaq: React.FC = () => {
    const faqs = [
        {
            title: "Какие есть детские программы в отеле для большой группы детей?",
            description:
                "С 31 января 2021 года все пассажиры, прибывающие в Дубай из любого пункта отправления, должны иметь отрицательный теста на COVID-19, проведённого не более чем за 72 часа до вылета.Обратите внимание, что с резидентов ОАЭ при заезде может потребоваться дополнительный сбор. В отелях ОАЭ возможны обязательные сборы за праздничный ужин. За более подробной информацией гостям нужно обратиться непосредственно в отель.",
        },
        {
            title: "Какие есть детские программы в отеле для большой группы детей?",
            description:
                "С 31 января 2021 года все пассажиры, прибывающие в Дубай из любого пункта отправления, должны иметь отрицательный теста на COVID-19, проведённого не более чем за 72 часа до вылета.Обратите внимание, что с резидентов ОАЭ при заезде может потребоваться дополнительный сбор. В отелях ОАЭ возможны обязательные сборы за праздничный ужин. За более подробной информацией гостям нужно обратиться непосредственно в отель.",
        },
        {
            title: "Какие есть детские программы в отеле для большой группы детей?",
            description:
                "С 31 января 2021 года все пассажиры, прибывающие в Дубай из любого пункта отправления, должны иметь отрицательный теста на COVID-19, проведённого не более чем за 72 часа до вылета.Обратите внимание, что с резидентов ОАЭ при заезде может потребоваться дополнительный сбор. В отелях ОАЭ возможны обязательные сборы за праздничный ужин. За более подробной информацией гостям нужно обратиться непосредственно в отель.",
        },
        {
            title: "Какие есть детские программы в отеле для большой группы детей?",
            description:
                "С 31 января 2021 года все пассажиры, прибывающие в Дубай из любого пункта отправления, должны иметь отрицательный теста на COVID-19, проведённого не более чем за 72 часа до вылета.Обратите внимание, что с резидентов ОАЭ при заезде может потребоваться дополнительный сбор. В отелях ОАЭ возможны обязательные сборы за праздничный ужин. За более подробной информацией гостям нужно обратиться непосредственно в отель.",
        },
    ];

    return (
        <div className="object-page-section object-page-section-faq">
            <div className="object-page-section-padding">
                <h2 className="object-page-section__title marginBottom">
                    Часто задаваемые вопросы
                </h2>

                <div className="object-page-section-faq-tabs-wrapper">
                    {faqs.map((faq, index) => (
                        <Tab
                            {...faq}
                            key={`object-page-section-faq-tab-${index}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ObjectPageFaq;

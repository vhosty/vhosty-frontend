import React from "react";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {validate} from "./validate";

import {RenderInput} from "../";

interface RecoveryPasswordFormProps {}

const RecoveryPasswordForm: React.FC<
    RecoveryPasswordFormProps & InjectedFormProps<{}, RecoveryPasswordFormProps>
> = ({handleSubmit}) => {
    return (
        <div className="reglog-content-padding">
            <form className="reglog-form" onSubmit={handleSubmit}>
                <div className="reglog-form-text">
                    <p className="reglog-form-text__subtitle">
                        Гость №{localStorage.getItem("userNumber")}
                    </p>
                    <p className="reglog-form-text__title">
                        Восстановить пароль
                    </p>
                </div>

                <div className="reglog-form-block">
                    <div className="reglog-form-block-input">
                        <Field
                            component={RenderInput}
                            type="email"
                            name="email"
                            label="examplemyemail@mail.ru"
                            title="Электронная почта"
                        />
                    </div>

                    <div className="reglog-form-block-btn">
                        <p className="reglog-form-block-btn__description">
                            Укажите адрес электронной почты, и мы отправим вам
                            ссылку для восстановления пароля
                        </p>

                        <button className="btn reglog-form-block-btn__btn">
                            Восстановить
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default reduxForm<{}, RecoveryPasswordFormProps>({
    form: "recovery-password-form",
    validate,
})(RecoveryPasswordForm);

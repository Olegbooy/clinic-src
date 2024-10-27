import classes from "./Form.module.scss";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { manrope } from "@/fonts/fonts";
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ className }) => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: {
            name: "",
            phone: "",
            description: "",
        },
    });

    const onSubmit = async (data) => {
        try {
            await axios.post('https://dev.dr-isaenko.com/api/form-handler.php', data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
        } catch (error) {

        } finally {
            alert(t('form:successSend'));
            window.dataLayer.push({event: 'form_contact'})
        }
    };



    const handleCaptchaChange = (value) => {
        setValue("recaptcha", value);
    };

    return (
        <div className={clsx(classes.form, className)}>
            <div className={classes.container}>
                <div className={classes.lines}></div>
                <div className={classes.left}>
                    <div className={classes.leftTop}>
                        <p dangerouslySetInnerHTML={{ __html: t('form:title') }} className={classes.leftTopTitle}></p>
                        <p dangerouslySetInnerHTML={{ __html: t('form:subtitle') }} className={classes.leftTopDescription}></p>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: t('form:warning') }} className={classes.leftBottom}></p>
                </div>
                <div className={classes.right}>
                    <form action="#" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder={t('form:inputs:0')}
                            {...register("name", {
                                maxLength: { value: 120, message: t('form:maxLength:0') },
                                required: t('form:required'),
                            })}
                        />
                        {errors.name && (
                            <p className={classes.error} style={{ color: "red", fontSize: "20px" }}>
                                {errors.name.message}
                            </p>
                        )}
                        <input
                            type="text"
                            placeholder={t('form:inputs:1')}
                            {...register("phone", {
                                minLength: {
                                    value: 10,
                                    message: `${t('form:format')} 09XXXXXXXXX`,
                                },
                                maxLength: {
                                    value: 10,
                                    message: `${t('form:format')} 09XXXXXXXXX`,
                                },
                                required: t('form:required'),
                            })}
                        />
                        {errors.phone && (
                            <p className={classes.error} style={{ color: "red", fontSize: "20px" }}>
                                {errors.phone.message}
                            </p>
                        )}
                        <textarea
                            type="text"
                            placeholder={t('form:inputs:2')}
                            {...register("description", {
                                maxLength: { value: 300, message: t('form:maxmaxLength:1') },
                                required: t('form:required'),
                            })}
                            className={manrope.className}
                        />
                        {errors.description && (
                            <p className={classes.error} style={{ color: "red", fontSize: "20px" }}>
                                {errors.description.message}
                            </p>
                        )}
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                            onChange={handleCaptchaChange}
                            className={classes.recaptcha}
                        />
                        <button dangerouslySetInnerHTML={{ __html: t('form:inputs:3') }} className={classes.submit} type="submit"></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;

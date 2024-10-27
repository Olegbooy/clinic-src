import { useTranslation } from 'react-i18next';
import classes from './Appointment.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { manrope } from '@/fonts/fonts';
import { useState } from 'react';

const AppointmentButton = ({ className, activeButton }) => {
    const { t } = useTranslation();
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };



    return (
        <div className={clsx(classes.appoinmentButtonWrapper, manrope.className, { [classes.active]: activeButton })}>
            <Link className={clsx(classes.link, { [classes.disabled]: !isChecked })} href={isChecked ? "https://cbox.mobi/go/isaenko" : "#"} passHref legacyBehavior>
                <a className={clsx(classes.link, { [classes.disabled]: !isChecked })} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: t('appoinment:0') }}>

                </a>
            </Link>

            <div className={classes.offerAgreement}>

                <label className={classes.checkboxContainer}>
                    <input className={classes.checkbox} type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
                    <span className={classes.checkmark}>
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.4995 0.440554C11.8085 0.716427 11.8353 1.19054 11.5595 1.49952L4.4166 9.49952C4.27431 9.65889 4.0708 9.75001 3.85715 9.75001C3.6435 9.75001 3.43999 9.65889 3.2977 9.49952L0.440554 6.29952C0.164681 5.99054 0.191518 5.51643 0.500496 5.24055C0.809473 4.96468 1.28359 4.99152 1.55946 5.3005L3.85715 7.87391L10.4406 0.500496C10.7164 0.191518 11.1905 0.164681 11.4995 0.440554Z"
                                fill="#363853"
                            />
                        </svg>

                    </span>
                </label>

                <div className={classes.text}>
                    <span dangerouslySetInnerHTML={{ __html: t('offerAgreement:0') }}></span> <a href='/offer-agreement.pdf' target="_blank" rel="noopener noreferrer"><span dangerouslySetInnerHTML={{ __html: t('offerAgreement:1') }}></span></a>
                </div>

            </div>

            <p dangerouslySetInnerHTML={{ __html: t('offerAgreementLicense:0') }} className={classes.license}>

            </p>


        </div>
    );
};

export default AppointmentButton;
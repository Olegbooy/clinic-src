import Image from "next/image";
import classes from "./DoctorCart.module.scss";
import { Trans, useTranslation } from "react-i18next";
import Link from "next/link";
import clsx from "clsx";
import logo from '@/public/images/view/logo(black).svg';
import logoNative from '@/public/images/view/logoFull.png'

const DoctorCard = ({ doctor }) => {
    const { t } = useTranslation();
    const translatedName = t(doctor.name);
    const nameParts = translatedName.split(" ");



    return (
        <article
            className={classes.doctor_cart}
        >
            <div className={classes.doctor_cart__box_up}>

                <div className={clsx(classes.hoverContent, { [classes.noHover]: !doctor.aboutDoctor })}>
                    <Image
                        src={logo}
                        className={classes.logo}
                        alt='logo'
                    />


                    <Image
                        src={logoNative}
                        className={classes.logoNative}
                        alt='logoNative'
                    />

                    <div className={classes.doctorInfo}>
                        <p>{nameParts[0]}</p>
                        <p>{nameParts[1]}</p>
                        <p>{nameParts[2]}</p>
                        <p className={classes.about}>{t(doctor.aboutDoctor)}</p>
                    </div>


                </div>



                <div className={classes.doctor_cart__box_up__experience}>
                    <p>
                        {doctor.experience.value}{doctor.experience.modifier}
                    </p>
                    <span><Trans>general:isaenkoSection:0</Trans></span>
                </div>
                <div className={classes.doctor_cart__box_up__img}>
                    <Image
                        src={doctor.imageUrl}
                        alt={doctor.name}
                        width={380}
                        height={553}
                        loading="eager"
                        quality={100}
                    />

                </div>
                <div className={classes.doctor_cart__box_up__info}>
                    <p>{nameParts[0]}</p>
                    <p>{nameParts[1]}</p>
                    <p>{nameParts[2]}</p>
                    <span>{t(doctor.speciality)}</span>
                </div>
            </div>


            <Link
                href={doctor.reels}
                target="_blank"
                className={clsx(classes.doctor_cart__button, { [classes.disabled]: !doctor.reels })}
                onClick={(e) => !doctor.reels && e.preventDefault()}
            >
                <span><Trans>team:reels</Trans></span>
                <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="svg">
                        <path
                            id="Vector"
                            d="M11.9698 11.0532C11.7301 11.2917 11.3419 11.2889 11.1056 11.0472C10.872 10.8083 10.8749 10.4257 11.1119 10.1902L12.413 8.89802C12.8858 8.42843 12.5571 7.62149 11.8907 7.61591L1.64293 7.53009C1.29663 7.52724 1.01832 7.2441 1.0212 6.89786C1.02409 6.55159 1.30715 6.27323 1.65343 6.27612L11.9033 6.36196C12.5694 6.36753 12.9116 5.56681 12.4473 5.08919L11.1652 3.77031C10.9325 3.53096 10.9368 3.14864 11.1747 2.91455C11.4147 2.67848 11.801 2.6828 12.0356 2.92416L15.5038 6.49183C15.7902 6.78641 15.7863 7.2566 15.4951 7.54637L11.9698 11.0532Z"
                            fill="#5A6DB4"
                        />
                    </g>
                </svg>
            </Link>


            <div className={classes.doctor_cart__services}>
                <p className={classes.doctor_cart__services__title}>
                    <Trans>team:value</Trans>
                </p>
                {doctor.services.map((service, index) => (
                    <div key={index} className={classes.doctor_cart__services__line}>
                        <div className={classes.doctor_cart__services__line__left}>
                            <p>
                                {t(service.name)} <br /> {t(service.modifier)} {service.duration} {t(service.durationUnit)}
                            </p>

                        </div>
                        <div className={classes.doctor_cart__services__line__right}>
                            <p>{service.price} {t(service.currency)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    );
};

export default DoctorCard;
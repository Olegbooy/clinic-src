import React from "react";
import Container from "../Container";
import classes from './styles.module.scss';
import { Trans, useTranslation } from "react-i18next";
import clsx from 'clsx';
import { manrope } from '@/fonts/fonts';

const HighCall = React.forwardRef((props, ref) => {
    const { t } = useTranslation();

    return (
        <section ref={ref} className={classes.highcall}>
            <Container className={clsx(classes.container, manrope.className)}>
                <p className={classes.left}>
                    <Trans>highcall:0</Trans> <br />
                    <Trans>highcall:1</Trans>
                </p>
                <div className={`${classes.right} flex justify-center align-center`}>
                    <p>
                        <Trans>highcall:2</Trans>
                    </p>
                    <a className="flex justify-center align-center" href="tel:+380978888911">
                        <span className="flex justify-center align-center">
                            {t('highcall:3')}
                        </span>
                    </a>
                </div>
            </Container>
        </section>
    );
});

export default HighCall;
import { useState } from 'react';
import useIsVisible from '@/hooks/useIsVisible';
import classes from './styles.module.scss';
import { Trans } from 'react-i18next';
import Arrow from './Arrow';
import { routes } from '@/constans/routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const Routes = ({ setActiveMenu }) => {
    const [active, setActive] = useState(false);
    const isVisible = useIsVisible();
    const router = useRouter();


    const handleCloseMenu = () => {
        setActive(!active)
        setActiveMenu(false)
    }


    return (
        <>
            <button
                className={`${classes.mobBtns} ${classes.appliBtn}`}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <div className={classes.btnWrapper}>
                    {isVisible && (
                        <div className={classes.squares}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )}
                    <span className={classes.name}>
                        <Trans>
                            header:menu:0
                        </Trans>
                    </span>
                    {!isVisible && (
                        <Arrow className={`${classes.arrow} ${active ? classes.active : ''}`} />
                    )}
                </div>


                <nav className={`${classes.routes} ${active ? classes.active : ''}`}>
                    {routes.map((route, index) => (
                        <Link onClick={handleCloseMenu} key={index} href={route.link}>
                            <span className={clsx({ [classes.active]: router.asPath === `/${route.link}` })}>
                                <Trans>{route.title}</Trans>
                            </span>
                        </Link>

                    ))}
                </nav>
            </button>


            <button
                className={`${classes.mobBtns} ${classes.appliBtn} ${classes.appliBtnMobile}`}
                onClick={() => setActive(!active)}
            >
                <div className={classes.btnWrapper}>
                    {isVisible && (
                        <div className={classes.squares}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )}
                    <span className={classes.name}>
                        <Trans>
                            header:menu:0
                        </Trans>
                    </span>
                    {!isVisible && (
                        <Arrow className={`${classes.arrow} ${active ? classes.active : ''}`} />
                    )}
                </div>


                <nav className={`${classes.routes} ${active ? classes.active : ''}`}>
                    {routes.map((route, index) => (
                        <Link onClick={handleCloseMenu} key={index} href={route.link}>
                            <span className={clsx({ [classes.active]: router.asPath === `/${route.link}` })}>
                                <Trans>{route.title}</Trans>
                            </span>
                        </Link>
                    ))}
                </nav>
            </button>
        </>
    );
};

export default Routes;
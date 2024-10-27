import clsx from 'clsx';
import classes from './styles.module.scss';
import { useCityEventEmitter } from '@/hooks/useCityEventEmitter';
import { manrope } from '@/fonts/fonts';

const Mobile = () => {

    const [selectedCity] = useCityEventEmitter();

    const cityNumbers = {
        kharkiv: { number: '+38 066 37-77-908', href: '+380663777908' },
        kyiv: { number: '+38 097 88-88-911', href: '+380978888911' }
    };

    const cityInfo = cityNumbers[selectedCity];

    return (
        <div className={`${classes.col} flex direction-column align-start`}>
            <a href={`tel:${cityInfo.href}`} className={classes.appointment}>
                <span className={clsx(classes.appointment, manrope.className)} style={{ marginRight: 0 }}>
                    {cityInfo.number}
                </span>
            </a>
        </div>
    );
};

export default Mobile;

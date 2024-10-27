import { routes } from '@/constans/routes';
import classes from '../OurCompany.module.scss';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const Directions = ({ isDropdownOpen, className, handleDirectionClick }) => {
    const { t } = useTranslation();
    return (
        <ul className={clsx(classes.dropdown, className, { [classes.showDropdown]: isDropdownOpen })}>
            {routes.map((route, idx) => (
                <li
                    key={idx}
                    className={classes.dropdownItem}
                    onClick={() => handleDirectionClick(route.link)}
                >
                    <span>
                        {t(route.title)}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default Directions;
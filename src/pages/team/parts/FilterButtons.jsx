import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import classes from "../OurCompany.module.scss";
import Arrow from '@/components/Header/Arrow';
import Directions from './Directions';

const filterItems = [
    { key: 'all', label: 'nav:0' },
    { key: 'kyiv', label: 'nav:1' },
    { key: 'kharkiv', label: 'nav:2' },
    { key: 'online', label: 'nav:3' },
];

const FilterButtons = ({ setCityFilter, onlineFilter, setOnlineFilter, setDirectionFilter, isDropdownOpen, setIsDropdownOpen, activeSort, setActiveSort }) => {
    const { t } = useTranslation();
    const dropdownRef = useRef(null);



    const handleDirectionClick = (direction) => {
        setDirectionFilter(direction);
        setCityFilter('all');
        setOnlineFilter(false);
        setIsDropdownOpen(false);
        setActiveSort(4);
    };

    const handleClickOutside = (event) => {
        if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);


    return (
        <div className={classes.ButtonsFilter}>
            {filterItems.map((item, index) => (
                <button
                    key={index}
                    onClick={() => {
                        setActiveSort(index);
                        index === 0
                            ? (setCityFilter('all'), setOnlineFilter(false), setDirectionFilter('all'))
                            : index === 1
                                ? (setCityFilter('kyiv'), setOnlineFilter(false), setDirectionFilter('all'))
                                : index === 2
                                    ? (setCityFilter('kharkiv'), setOnlineFilter(false), setDirectionFilter('all'))
                                    : index === 3
                                        ? (setOnlineFilter(!onlineFilter), setCityFilter('all'), setDirectionFilter('all'))
                                        : null;
                    }}
                    className={clsx({
                        [classes.active]: index === activeSort,
                    })}
                >
                    {t(item.label)}
                </button>
            ))}

            <button
                className={clsx(classes.btnDirection, classes.btnDirectionDesktop, {
                    [classes.active]: activeSort === 4,
                })}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
            >
                {t('nav:4')}
                <Arrow className={clsx(classes.arrow, { [classes.arrowActive]: isDropdownOpen })} />
                <Directions className={classes.dropdownDesktop} isDropdownOpen={isDropdownOpen} handleDirectionClick={handleDirectionClick} />
            </button>

            <button
                className={clsx(classes.btnDirection, classes.btnDirectionMobile, {
                    [classes.active]: activeSort === 4,
                })}
                ref={dropdownRef}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                {t('nav:4')}
                <Arrow className={clsx(classes.arrow, { [classes.arrowActive]: isDropdownOpen })} />

            </button>
        </div>
    );
};

export default FilterButtons;
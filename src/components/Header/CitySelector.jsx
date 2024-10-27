import Dropdown from './Dropdown';
import { useTranslation } from 'react-i18next';
import classes from './styles.module.scss';
import { useCityEventEmitter } from '@/hooks/useCityEventEmitter';

const CitySelector = () => {
    const [selectedCity, setSelectedCity] = useCityEventEmitter();
    const { t } = useTranslation('header');

    const handleCityChange = (cityId) => {
        setSelectedCity(cityId);
    };

    const cities = [
        { id: 'kyiv', label: t('header:kyiv') },
        { id: 'kharkiv', label: t('header:kharkiv') },
    ];

    const selectedCityLabel = cities.find(city => city.id === selectedCity)?.label || '';

    return (
        <Dropdown
            items={cities}
            onSelect={handleCityChange}
            selectedItem={selectedCityLabel}
            isUpperCase={false}
            className={classes.setCity}
            isVisible
        />
    );
};

export default CitySelector;

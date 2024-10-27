import Dropdown from './Dropdown';
import { useI18n } from '../../contexts/i18nContext';
import classes from './styles.module.scss';
import useIsVisible from '@/hooks/useIsVisible';

const languages = [
    { id: 'en', label: 'English' },
    { id: 'uk', label: 'Українська' },
    { id: 'ru', label: 'Русский' },
];

const languagesMob = [
    { id: 'en', label: 'EN' },
    { id: 'uk', label: 'UK' },
    { id: 'ru', label: 'RU' },
];

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useI18n();
    const isVisible = useIsVisible();

    const currentItems = isVisible ? languages : languagesMob;

    return (
        <Dropdown
            items={currentItems}
            onSelect={changeLanguage}
            selectedItem={language}
            isUpperCase={true}
            className={classes.setLanguage}
            isVisible={isVisible}
        />
    );
};

export default LanguageSwitcher;
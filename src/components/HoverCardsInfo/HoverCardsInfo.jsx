import { useTranslation } from 'react-i18next';
import ButtonLink from '../Button/Button';
import Container from '../Container';
import classes from './styles.module.scss';
import clsx from 'clsx';
import { books } from '@/constans/routes';

const HoverCardsInfo = ({ info, className }) => {
    const { t } = useTranslation();
    return (
        <section className={clsx(classes.cardsInfoSection, className)}>
            <Container className={classes.container}>
                <div className={classes.cardsWrapper}>
                    {info.map((item, index) => (
                        <article key={index}>
                            <p dangerouslySetInnerHTML={{ __html: t(item.title) }}>
                            </p>
                            <p dangerouslySetInnerHTML={{ __html: t(item.subtitle) }}>
                            </p>
                        </article>
                    ))}
                </div>
                <ButtonLink href={books.treatment}>
                    <p dangerouslySetInnerHTML={{ __html: t('home:cardsInfoSection:5') }}>
                    </p>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4698 11.0532C11.2301 11.2917 10.8419 11.2889 10.6056 11.0472C10.372 10.8083 10.3749 10.4257 10.6119 10.1902L11.913 8.89802C12.3858 8.42843 12.0571 7.62149 11.3907 7.61591L1.14293 7.53009C0.796625 7.52724 0.518321 7.2441 0.521195 6.89786C0.524093 6.55159 0.807153 6.27323 1.15343 6.27612L11.4033 6.36196C12.0694 6.36753 12.4116 5.56681 11.9473 5.08919L10.6652 3.77031C10.4325 3.53096 10.4368 3.14864 10.6747 2.91455C10.9147 2.67848 11.301 2.6828 11.5356 2.92416L15.0038 6.49183C15.2902 6.78641 15.2863 7.2566 14.9951 7.54637L11.4698 11.0532Z" fill="#5A6DB4" />
                    </svg>
                </ButtonLink>
            </Container>
        </section>
    );
};

export default HoverCardsInfo;
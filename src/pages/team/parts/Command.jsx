import Container from '@/components/Container';
import classes from '../OurCompany.module.scss';
import { useTranslation } from 'react-i18next';
import team from '@/public/images/view/team.jpg';
import Image from 'next/image';
import clsx from 'clsx';

const Command = ({ className }) => {
    const { t } = useTranslation();
    return (
        <section className={clsx(classes.OurTeam, className)}>
            <Container className={classes.container}>
                <h2 dangerouslySetInnerHTML={{ __html: t('team:teamTitle') }}>
                </h2>
                <Image
                    src={team}
                    objectFit="cover"
                    layout='responsive'
                    alt='team'
                    quality={100}
                />
            </Container>
        </section>
    );
};

export default Command;
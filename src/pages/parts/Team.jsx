import Image from 'next/image';
import classes from '../styles.module.scss';
import teamImage from '@/public/images/view/team.jpg';
const Team = () => {
    return (
        <section className={classes.team}>
            <Image
                src={teamImage}
                objectFit="cover"
                layout='responsive'
                alt='team'
                quality={100}
            />
        </section>
    );
};

export default Team;
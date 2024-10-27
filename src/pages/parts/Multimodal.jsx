import { Trans, useTranslation } from 'react-i18next';
import classes from '../styles.module.scss';
import Container from '@/components/Container';

import logoNative from '@/public/images/view/logoFull.svg';
import Image from 'next/image';
import { books } from '@/constans/routes';
import ButtonLink from '@/components/Button/Button';


const Multimodal = () => {

  const { t } = useTranslation()

  return (
    <section className={classes.multimodal}>
      <Container className={classes.container}>
        <div className={classes.lines}></div>

        <div className={classes.left}>
          <h2 dangerouslySetInnerHTML={{ __html: t('home:multimodal:left:0') }}>

          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('home:multimodal:left:1') }}>

          </p>
          <ButtonLink href={books.multimodal}>
            <span dangerouslySetInnerHTML={{ __html: t('home:multimodal:left:2') }}>

            </span>
          </ButtonLink>
        </div>

        <div className={classes.circleContainer}>
          <div className={classes.centralCircle}>
            <Image
              src={logoNative}
              alt='native'
            />
          </div>

          <div className={`${classes.item} ${classes.item1}`}><Trans>home:multimodal:directions:0</Trans></div>
          <div className={`${classes.item} ${classes.item2}`}><Trans>home:multimodal:directions:1</Trans></div>
          <div className={`${classes.item} ${classes.item3}`}><Trans>home:multimodal:directions:2</Trans></div>
          <div className={`${classes.item} ${classes.item4}`}><Trans>home:multimodal:directions:3</Trans></div>
          <div className={`${classes.item} ${classes.item5}`}><Trans>home:multimodal:directions:4</Trans></div>
          <div className={`${classes.item} ${classes.item6}`}><Trans>home:multimodal:directions:5</Trans></div>
          <div className={`${classes.item} ${classes.item7}`}><Trans>home:multimodal:directions:6</Trans></div>
          <div className={`${classes.item} ${classes.item8}`}><Trans>home:multimodal:directions:7</Trans></div>
          <div className={`${classes.item} ${classes.item9}`}><Trans>home:multimodal:directions:8</Trans></div>
          <div className={`${classes.item} ${classes.item10}`}><Trans>home:multimodal:directions:9</Trans></div>
        </div>
      </Container>
    </section>
  );
};

export default Multimodal;
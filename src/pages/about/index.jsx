import Container from '@/components/Container';
import classes from './About.module.scss';
import { Trans, useTranslation } from 'react-i18next';
import Image from 'next/image';
import drIsaenko from '@/public/images/view/about_clinic.png';
import InfoSection from '@/components/InfoSection/InfoSection';
import IsaenkoSection from '@/components/IsaenkoSection/IsaenkoSection';
import Command from '../team/parts/Command';
import HoverCardsInfo from '@/components/HoverCardsInfo/HoverCardsInfo';
import ButtonLink from '@/components/Button/Button';
import logoNative from '@/public/images/view/logoFull.svg';
import TabsQa from '@/components/TabsQA/TabsQa';
import { books } from '@/constans/routes';
import { NextSeo } from 'next-seo';


const images = [
  { src: '/images/view/slider/homePage/image1.png', alt: 'slide1' },
  { src: '/images/view/slider/homePage/image2.png', alt: 'slide2' },
  { src: '/images/view/slider/homePage/image3.png', alt: 'slide3' },
  { src: '/images/view/slider/homePage/image4.png', alt: 'slide4' },
  { src: '/images/view/slider/homePage/image5.png', alt: 'slide5' },
  { src: '/images/view/slider/homePage/image6.png', alt: 'slide6' },
  { src: '/images/view/slider/homePage/image7.png', alt: 'slide7' },
  { src: '/images/view/slider/homePage/image8.png', alt: 'slide8' },
  { src: '/images/view/slider/homePage/image9.png', alt: 'slide9' },
  { src: '/images/view/slider/homePage/image10.png', alt: 'slide10' },
  { src: '/images/view/slider/homePage/image11.png', alt: 'slide11' },
  { src: '/images/view/slider/homePage/image12.png', alt: 'slide12' }
]

const info = [
  { title: '30 000+', subtitle: 'home:cardsInfoSection:0' },
  { title: '53', subtitle: 'home:cardsInfoSection:1' },
  { title: 'home:cardsInfoSection:2', subtitle: 'home:cardsInfoSection:3' },
  { title: '1', subtitle: 'home:cardsInfoSection:4' }
]

const infoLicensing = [
  { title: 'home:certificate:0', subtitle: 'home:certificate:3' },
  { title: 'home:certificate:1', subtitle: 'home:certificate:4' },
  { title: 'home:certificate:2', subtitle: 'home:certificate:5' },
  { title: '1', subtitle: 'home:certificate:6' }
]

const index = () => {
  const { t } = useTranslation();


  return (
    <>
      <NextSeo
        title={t('head:pages:2')}
        description={t('head:main:2')}
        openGraph={{
          url: 'https://dr-isaenko.com',
          title: t('head:main:0'),
          description: t('head:main:2'),
          images: [
            {
              url: '/baghe_ua.jpg',
              width: 1680,
              height: 960,
              alt: 'business card',
            },
          ],
          site_name: t('head:main:0'),
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon32.png',
            sizes: '32x32'
          },
          {
            rel: 'icon',
            href: '/favicon150.png',
            sizes: '150x150',
          },
        ]}
      />
      <main className={classes.aboutMain}>
        <main style={{ background: '#FBF2EF' }}>
          <section className={classes.aboutClinic}>
            <Container className={classes.container}>
              <div className={classes.left}>
                <h2 dangerouslySetInnerHTML={{ __html: t('aboutClinicPage:intro:0') }}></h2>
                <p dangerouslySetInnerHTML={{ __html: t('aboutClinicPage:intro:1') }} className={classes.intoText}></p>
                <p dangerouslySetInnerHTML={{ __html: t('aboutClinicPage:intro:2') }} className={classes.intoTextSubtitle}></p>
              </div>

            </Container>
            <div className={classes.imageWrapper}>
              <Image
                src={drIsaenko}
                alt='Dr.Isaenko'
                quality={100}
                priority
                sizes='100vw'
              />
            </div>
          </section>
          <InfoSection className={classes.infoSection} images={images} title={{ __html: t('aboutClinicPage:principles:0') }}>
            <span dangerouslySetInnerHTML={{ __html: t('aboutClinicPage:principles:1') }}></span>
            <span dangerouslySetInnerHTML={{ __html: t('aboutClinicPage:principles:2') }}></span>
            <span dangerouslySetInnerHTML={{ __html: t('aboutClinicPage:principles:3') }}></span>
            <span dangerouslySetInnerHTML={{ __html: t('aboutClinicPage:principles:4') }}></span>
          </InfoSection>

          <IsaenkoSection
            title={{ __html: t('aboutClinicPage:isaenkoTitle') }}
            className={classes.isaenko}
          />
          <Command />
        </main>

        <HoverCardsInfo info={info} className={classes.cardsInfo} />

        <section className={classes.multimodal}>
          <Container className={classes.container}>
            <div className={classes.lines}></div>

            <div className={classes.left}>
              <h2 dangerouslySetInnerHTML={{ __html: t('aboutClinicPage:multimodal:0') }}>

              </h2>
              <p dangerouslySetInnerHTML={{ __html: t('aboutClinicPage:multimodal:1') }}>

              </p>
              <ButtonLink href={books.multimodal}>
                <span dangerouslySetInnerHTML={{ __html: t('home:multimodal:left:2') }}></span>
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

        <HoverCardsInfo className={classes.licensing} info={infoLicensing} />

        <TabsQa className={classes.tabs} />
      </main>
    </>
  );
};

export default index;
import Container from '../Container';
import Slider from '../Slider/Slider';
import classes from './styles.module.scss';
import planetImage from '../../../public/images/view/planet.svg';
import Image from 'next/image';
import clsx from 'clsx';
import { SwiperSlide } from 'swiper/react';

const InfoSection = ({ images, className, title, children }) => {
    return (
        <section className={clsx(classes.infoSection, className)}>
            <Container className={classes.container}>
                <div className={classes.lines}></div>
                <div className={classes.planetOne}>
                    <Image
                        src={planetImage}
                        alt='planet'
                        loading="eager"
                    />
                </div>
                <div className={classes.planetTwo}>
                    <Image
                        src={planetImage}
                        alt='planet'
                        loading="eager"
                    />
                </div>
                <Slider className='sliderInfo'>
                    {images.map((image, index) => (
                        <SwiperSlide className='swiperSlide' key={index}>
                            <div className='swiperImageWrapper'>
                                <Image
                                    src={image.src}
                                    alt='clinic'
                                    fill
                                    objectFit='cover'
                                    loading="eager"
                                    quality={100}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Slider>
                <div className={classes.right}>
                    <h2 dangerouslySetInnerHTML={title}>
                    </h2>
                    <p>
                        {children}
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default InfoSection;
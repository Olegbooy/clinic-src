import { useTranslation } from 'react-i18next';
import Container from '../Container';
import classes from './styles.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { manrope } from '@/fonts/fonts';

const faq = [
    { question: 'faq:questions:0', answer: 'faq:answers:0' },
    { question: 'faq:questions:1', answer: 'faq:answers:1' },
    { question: 'faq:questions:2', answer: 'faq:answers:2' },
    { question: 'faq:questions:3', answer: 'faq:answers:3' },
    { question: 'faq:questions:4', answer: 'faq:answers:4' },
    { question: 'faq:questions:5', answer: 'faq:answers:5' },
    { question: 'faq:questions:6', answer: 'faq:answers:6' },
    { question: 'faq:questions:7', answer: 'faq:answers:7' }
];

const TabsQa = ({ style, className }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const { t } = useTranslation();


    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section style={style} className={clsx(classes.TabsQa, className)}>
            <Container className={classes.container}>
                <h3 className={manrope.className} dangerouslySetInnerHTML={{ __html: t('faq:title') }}>

                </h3>
                <div className={classes.tabsSection}>
                    {faq.map((item, index) => (
                        <div onClick={() => toggleAnswer(index)} key={index} className={`${classes.faqItem} ${openIndex === index ? `${classes.open}` : ''}`}>

                            <button className={clsx(classes.faqQuestion, manrope.className)} >
                                <span dangerouslySetInnerHTML={{ __html: t(item.question) }}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.9964 3.23235L16.9372 3.29187L16.7144 11.0001L9.00622 11.2229L8.94671 13.2821L16.6549 13.0593L16.4321 20.7675L18.4914 20.708L18.7141 12.9998L26.4224 12.777L26.4819 10.7178L18.7737 10.9406L18.9964 3.23235Z" fill="#5A6DB4" />
                                </svg>
                            </button>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <p dangerouslySetInnerHTML={{ __html: t(item.answer) }} className={classes.faqAnswer}></p>
                            </motion.div>

                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TabsQa;
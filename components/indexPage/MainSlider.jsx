'use client'
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classNames from 'classnames';
import styles from '@/styles/MainSlider.module.scss';
import picture1 from '../../public/intro_slider_1_compress.webp';
import picture2 from '../../public/intro_slider2_compress.webp';
import picture3 from '../../public/intro_slider3_compress.webp';


const MainSlider = () => {

    const handleSlideChange = (swiper) => {
        swiper.slides.map((item) => {
            item.querySelector('.slideContent').classList.add('slideTranslated');
        })
        swiper.slides[swiper.activeIndex].querySelector('.slideContent').classList.remove('slideTranslated')
    }

    return (
        <Swiper
            className={styles.slider}
            spaceBetween={0}
            // slidesPerView={3}
            modules={[Navigation, Pagination, Autoplay ]}
            speed={1500}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            onSwiper={(swiper) => swiper.slides[swiper.activeIndex].querySelector('.slideContent').classList.remove('slideTranslated')}
            >
            <SwiperSlide>
                <Box className={styles.slideWrapper}>
                    <Box className={classNames(styles.slideContent, 'slideContent slideTranslated')}>
                        <Container maxWidth="lg">
                            <Grid container spacing={0}>
                                <Grid item xs={12} md={8} lg={6} xl={6}>
                                    <Typography className={styles.title} component="h2">Бизнес-тревел нового поколения</Typography>
                                    <Typography>Несмотря на весь наш интерес и привязанность к технологиям, в душе мы остаемся романтиками.</Typography>
                                    <Typography>Мы ищем возможности, боремся с сомнениями и тестируем идеи, которые кажутся безумными.</Typography>
                                    <Typography>Для того, чтобы еще на шаг приблизиться к совершенству.</Typography>
                                    <Link href="#TryStarlinerFree">
                                        <Button variant="contained" className={styles.button}>Получить тестовый доступ</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Image 
                        className={styles.image}
                        placeholder="blur" 
                        blurDataURL="../public/blur-large.jpg" 
                        src={picture1}
                        alt="" 
                        sizes="100vw"
                    />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className={styles.slideWrapper}>
                    <Box className={classNames(styles.slideContent, 'slideContent slideTranslated')}>
                        <Container maxWidth="lg">
                            <Grid container spacing={0}>
                                <Grid item xs={12} md={8} lg={6} xl={6}>
                                    <Typography className={styles.title} component="h2">Бизнес-тревел нового поколения</Typography>
                                    <Typography>Мы считаем, что бизнес-тревел – это важно. Важно в командировке заниматься делом, не отвлекаясь на организационные вопросы. Важно знать, что планы безошибочны, пути их реализации оптимальны, а затраты оправданны.</Typography>
                                    <Typography>Важно быть уверенным, что деловые поездки действительно развивают бизнес.</Typography>
                                    <Link href="#TryStarlinerFree">
                                        <Button variant="contained" className={styles.button}>Получить тестовый доступ</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Image 
                        className={styles.image}
                        placeholder="blur" 
                        blurDataURL="../public/blur-large.jpg" 
                        src={picture2}
                        alt="" 
                        sizes="100vw"
                    />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className={styles.slideWrapper}>
                    <Box className={classNames(styles.slideContent, 'slideContent slideTranslated')}>
                        <Container maxWidth="lg">
                            <Grid container spacing={0}>
                                <Grid item xs={12} md={8} lg={6} xl={6}>
                                    <Typography className={styles.title} component="h2">Бизнес-тревел нового поколения</Typography>
                                    <Typography>Все ваши деловые поездки в одном месте</Typography>
                                    <Typography>Бронируйте, отчитывайтесь и управляйте всеми командировками с помощью всего одного инструмента</Typography>
                                    <Typography><Typography component="strong">Добро пожаловать на борт!</Typography></Typography>
                                    <Link href="#TryStarlinerFree">
                                        <Button variant="contained" className={styles.button}>Получить тестовый доступ</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Image 
                        className={styles.image}
                        placeholder="blur" 
                        blurDataURL="../public/blur-large.jpg" 
                        src={picture3}
                        alt="" 
                        sizes="100vw"
                    />
                </Box>
            </SwiperSlide>
        </Swiper>
    );
}

export default MainSlider;

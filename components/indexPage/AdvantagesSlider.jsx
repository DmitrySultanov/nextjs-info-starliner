'use client'
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SwiperCore, {Autoplay} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '@/styles/AdvantagesSlider.module.scss';


const AdvantagesSlider = () => {
    return (
        <Box component="section" className={styles.advantages}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component="h2" className='section-title' sx={{mb: 5}}>Starliner в цифрах</Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Swiper
                                className={styles.slider}
                                spaceBetween={20}
                                slidesPerView={3}
                                speed={1000}
                                loop={true}
                                // autoplay={true}
                                >
                                <SwiperSlide>
                                    <Box className={styles.box}>
                                        <Typography component="h3" className={styles.title}>15 лет</Typography>
                                        <Typography className={styles.text}>На рынке бизнес-тревел</Typography>
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box className={styles.box}>
                                        <Typography component="h3" className={styles.title}>10 лет</Typography>
                                        <Typography className={styles.text}>Работы в собственной онлайн платформе</Typography>
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box className={styles.box}>
                                        <Typography component="h3" className={styles.title}>2 млрд.руб</Typography>
                                        <Typography className={styles.text}>Сэкономили нашим клиентам на организации бизнес мероприятий</Typography>
                                    </Box>
                                </SwiperSlide>
                            </Swiper>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            
        </Box>
    );
}

export default AdvantagesSlider;

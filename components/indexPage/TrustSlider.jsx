'use client'
import React, { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import styles from '@/styles/TrustSlider.module.scss';
import picture1 from '../../public/trust_ico1.png.webp';
import picture2 from '../../public/trust_ico2.png.webp';
import picture3 from '../../public/trust_ico3.png.webp';
import picture4 from '../../public/trust_ico4.png.webp';
import picture5 from '../../public/trust_ico5.png.webp';
import picture6 from '../../public/trust_ico6.png.webp';
import Modal from '../Modal';
import InviteTenderModal from '../modals/InviteTender';


const TrustSlider = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleModalClick = () => {
        setOpenModal(true)
    }  

    return (
        <Box component="section" className={styles.trustSlider}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component="h2" className='section-title' sx={{mb: 5}}>Нам доверяют</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Swiper
                            className={styles.slider}
                            spaceBetween={20}
                            slidesPerView={5}
                            speed={1000}
                            loop={true}
                            pagination={{
                                clickable: true,
                                // modifierClass: `trust-slider-pagination`,
                            }}
                            modules={[ Autoplay ]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            >
                            <SwiperSlide>
                                <Box className={styles.box}>
                                    <Image
                                        src={picture1}
                                        alt="" 
                                        sizes="100vw"
                                    />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className={styles.box}>
                                    <Image
                                        src={picture2}
                                        alt="" 
                                        sizes="100vw"
                                    />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className={styles.box}>
                                    <Image
                                        src={picture3}
                                        alt="" 
                                        sizes="100vw"
                                    />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className={styles.box}>
                                    <Image
                                        src={picture4}
                                        alt="" 
                                        sizes="100vw"
                                    />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className={styles.box}>
                                    <Image
                                        src={picture5}
                                        alt="" 
                                        sizes="100vw"
                                    />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className={styles.box}>
                                    <Image
                                        src={picture6}
                                        alt="" 
                                        sizes="100vw"
                                    />
                                </Box>
                            </SwiperSlide>
                        </Swiper>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs="auto">
                        <Button onClick={handleModalClick} variant="contained" sx={{mt: 10}}>Пригласить на тендер</Button>
                        <Modal openModal={openModal} setOpenModal={setOpenModal} title="Пригласить к участию в тендере" data={<InviteTenderModal />} size="sm"/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default TrustSlider;

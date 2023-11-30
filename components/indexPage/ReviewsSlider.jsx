'use client';
import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from "../Modal";
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '@/styles/ReviewsSlider.module.scss';
import GetProposalModal from '../modals/GetProposal';


const ReviewsSlider = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleModalClick = () => {
        setOpenModal(true)
    }  

    return (
        <Box component="section" className={styles.reviewsSlider}>
            <Container maxWidth="lg">
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Typography component="h2" className="section-title">Отзывы</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={10} xl={8}>
                        <Swiper
                            className={styles.slider}
                            spaceBetween={0}
                            slidesPerView={1}
                            speed={1000}
                            modules={[ Pagination ]}
                            loop={true}
                            pagination={{ clickable: true }}
                            autoplay={true}
                            >
                            <SwiperSlide>
                                <Box className={styles.box}>
                                    <Typography>Технологии Starliner позволяют нам эффективно управлять тревел-рисками, настраивать и оптимизировать тревел-полиси компании, а также без задержек получать бухгалтерскую и управленческую отчетность.</Typography>
                                    <Box className={styles.caption}>
                                        <Typography>
                                            <Typography component="strong">Галаницкая Е.В.</Typography>
                                        </Typography>
                                        <Typography>Административный директор, АО &quot;Амур&quot;</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className={styles.box}>
                                    <Typography>Наибольшую экономию мы получили от использования функции отслеживания поиска наименьших тарифов. Вообще в Starliner, бесспорно, работают одни из лучших сотрудников в этой отрасли.</Typography>
                                    <Box className={styles.caption}>
                                        <Typography>
                                            <Typography component="strong">С.А. Болт</Typography>
                                        </Typography>
                                        <Typography>ООО &quot;ОЭС Спецпоставка&quot;</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className={styles.box}>
                                    <Typography>What we appreciate most about working with Starliner is its innovative technologies and fast adaptability to our global travel program. Being a part of the global corporation we have technologically advanced global travel program and very high expectations for Travel Management Company&lsquo;s processes. Starliner is one of the few Russian TMC that could show such a high level of professional competence, high technologies and online adoption.</Typography>
                                    <Box className={styles.caption}>
                                        <Typography>
                                            <Typography component="strong">Elena Zadonskikh</Typography>
                                        </Typography>
                                        <Typography>Head of HR Department, AGCO Machinery</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className={styles.box}>
                                    <Typography>Сотрудничество на базе онлайн-платформы Starliner позволило нам автоматизировать процесс разнесения заказов по центрам финансовой ответственности, а также осуществлять постоянный мониторинг затрат на командировки сотрудников. Благодаря активной позиции Starliner мы заключили трехсторонние корпоративные договоры с авиакомпаниями, позволяющие получать дополнительные скидки и премиальные билеты по востребованным направлениям.</Typography>
                                    <Box className={styles.caption}>
                                        <Typography>
                                            <Typography component="strong">Плещёва Е.В.</Typography>
                                        </Typography>
                                        <Typography>Руководитель административного отдела, ООО &quot;АЛИДИ-Норд&quot;</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className={styles.box}>
                                    <Typography>Мы сотрудничаем со Starliner уже более 5-ти лет и очень довольны. Его свежий взгляд на бизнес-тревел и солидная технологическая экспертиза не раз нас выручали. С помощью онлайн-системы Starliner мы получаем не только актуальную информацию по стоимости и наличию услуг, но и ведем учет всех расходов на командировки сотрудников.</Typography>
                                    <Box className={styles.caption}>
                                        <Typography>
                                            <Typography component="strong">А.В. Писаренко</Typography>
                                        </Typography>
                                        <Typography>Генеральный директор, ООО &quot;Элемент Лизинг&quot;</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        </Swiper>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs="auto">
                        <Button onClick={handleModalClick} variant="contained" sx={{mt: 10}}>Получить предложение</Button>
                        <Modal openModal={openModal} setOpenModal={setOpenModal} data={<GetProposalModal />}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ReviewsSlider;

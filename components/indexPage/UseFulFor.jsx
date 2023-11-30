'use client'
import { Box, Button, Container, Grid, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/UseFulFor.module.scss';
import picture1 from '../../public/usefulfor_ico1.svg';
import picture2 from '../../public/usefulfor_ico2.svg';
import picture3 from '../../public/usefulfor_ico3.svg';
import picture4 from '../../public/usefulfor_ico4.svg';


const UseFulFor = () => {
    return (
        <Box component="section" className={styles.useFulSection}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component="h2" className='section-title' style={{color: '#fff'}}>Кому полезен Starliner</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className={styles.cards}>
                    <Grid item xs={12} md={6} lg={3} className={styles.gridItem}>
                        <Box className={styles.card}>
                            <Box className={styles.cardPicture}>
                                <Image
                                    src={picture1}
                                    alt=""
                                    sizes="100vw"
                                />
                            </Box>
                            <Typography component="h3" className={styles.cardTitle}>Руководителю</Typography>
                            <Box className={styles.cardContent}>
                                <List className={styles.list}>
                                    <ListItem>Прозрачная аналитика</ListItem>
                                    <ListItem>Быстрые отчеты</ListItem>
                                    <ListItem>Согласование поездки сотрудников в один клик</ListItem>
                                    <ListItem>Четкость в формировании бюджета</ListItem>
                                    <ListItem>Информационная безопасность</ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className={styles.gridItem}>
                        <Box className={styles.card}>
                            <Box className={styles.cardPicture}>
                                <Image
                                    src={picture2}
                                    alt=""
                                    sizes="100vw"
                                />
                            </Box>
                            <Typography component="h3" className={styles.cardTitle}>Тревел-менеджеру</Typography>
                            <Box className={styles.cardContent}>
                                <List className={styles.list}>
                                    <ListItem>Безопасное хранение данных сотрудников</ListItem>
                                    <ListItem>Настройка тревел-политики</ListItem>
                                    <ListItem>Разделение доступов разным отделам/сотрудникам</ListItem>
                                    <ListItem>Онлайн оптимизация бронирований</ListItem>
                                    <ListItem>Автоматизированное применение корпоративных привилегий</ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className={styles.gridItem}>
                        <Box className={styles.card}>
                            <Box className={styles.cardPicture}>
                                <Image
                                    src={picture3}
                                    alt=""
                                    sizes="100vw"
                                />
                            </Box>
                            <Typography component="h3" className={styles.cardTitle}>Бухгалтеру</Typography>
                            <Box className={styles.cardContent}>
                                <List className={styles.list}>
                                    <ListItem>Настройка документооборота</ListItem>
                                    <ListItem>Удобная отчетность</ListItem>
                                    <ListItem>Финансовый контроль</ListItem>
                                    <ListItem>Все отчеты в одном окне</ListItem>
                                    <ListItem>Планирование бюджета</ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className={styles.gridItem}>
                        <Box className={styles.card}>
                            <Box className={styles.cardPicture}>
                                <Image
                                    src={picture4}
                                    alt=""
                                    sizes="100vw"
                                />
                            </Box>
                            <Typography component="h3" className={styles.cardTitle}>Сотруднику</Typography>
                            <Box className={styles.cardContent}>
                                <List className={styles.list}>
                                    <ListItem>Понятный интерфейс</ListItem>
                                    <ListItem>Оперативная помощь внутри заказа</ListItem>
                                    <ListItem>Удобные индикаторы системы</ListItem>
                                    <ListItem>Быстрое согласование поездки</ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default UseFulFor;

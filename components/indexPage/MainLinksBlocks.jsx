'use client';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import Link from 'next/link';
import styles from '@/styles/MainLinksBlocks.module.scss';


const MainLinksBlocks = () => {
    return (
        <Box component="section" className={styles.boxes}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box className={styles.box}>
                            <Typography className={styles.boxTitle} sx={{mb: 3}}>Alerts</Typography>
                            <Typography className={styles.text}>узнайте, что ждет вас в пункте назначения</Typography>
                            <Link href="https://alert.starliner.ru/" target="_blank" className={styles.link}></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className={styles.box}>
                            <Typography className={styles.boxTitle} sx={{mb: 3}}>Новости</Typography>
                            <Typography className={styles.text}>узнайте, чем живет мир business-travel</Typography>
                            <Link href="/category/blog/" className={styles.link}></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className={styles.box}>
                            <Typography className={styles.boxTitle} sx={{mb: 3}}>Блог</Typography>
                            <Typography className={styles.text}>подробно о самом важном</Typography>
                            <Link href="/category/blog/" className={styles.link}></Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default MainLinksBlocks;

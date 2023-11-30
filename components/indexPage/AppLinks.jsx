'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import picture from '../../public/starliner_iphone1.png.webp'
import googlePic from '../../public/google.svg'
import styles from '@/styles/AppLinks.module.scss'


const AppLinks = () => {
    return (
        <Box component="section" className={styles.applinks}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Image
                            src={picture}
                            alt="" 
                            sizes="100vw"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{mt: 6}}>
                            <Typography component="h2" className='section-title' style={{textAlign: 'left'}}>Starliner всегда под рукой</Typography>
                            <Typography sx={{mb: 3}}>Плюсы нашего приложения</Typography>
                            <Link href="/">
                                <Image
                                    src={googlePic}
                                    alt="" 
                                    sizes="100vw"
                                />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AppLinks;

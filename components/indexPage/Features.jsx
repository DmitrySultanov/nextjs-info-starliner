'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Modal from "../Modal";
import picture from '../../public/strl_screen1.jpg.webp'
import styles from '@/styles/Features.module.scss'
import GetDemoModal from '../modals/GetDemoModal';


const Features = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleModalClick = () => {
        setOpenModal(true)
    }  

    return (
        <Box component="section" className={styles.features}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box className={styles.picture}>
                            <Image
                                src={picture}
                                alt="" 
                                sizes="100vw"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{mt: 4}}>
                            <Typography className='section-title' component="h2" style={{textAlign: 'left'}}>Все ваши деловые поездки в одном месте</Typography>
                            <Typography>Бронируйте, управляйте, отчитывайтесь и управляйте всеми командировками с помощью всего одного инструмента.</Typography>
                            <Button onClick={handleModalClick} variant='contained' sx={{mt: 4}}>Получить демо доступ</Button>
                            <Modal openModal={openModal} setOpenModal={setOpenModal} title="Получить демо" data={<GetDemoModal />}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Features;

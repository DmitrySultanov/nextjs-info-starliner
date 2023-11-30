'use client'
import { Box, Typography } from '@mui/material';
import styles from '@/styles/Modals.module.scss';


const InviteTenderModal = () => {

    return (
        <Box className={styles.WhiteModal}>
            <Typography variant="body1">Пожалуйста, отправьте документацию на project@starliner.ru. С удовольствием примем участие в конкурсе и поможем вам реализовать успешный тендерный проект. </Typography>
        </Box>
    );
}

export default InviteTenderModal;

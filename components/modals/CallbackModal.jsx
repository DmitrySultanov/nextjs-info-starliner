'use client'
import { Box } from '@mui/material';
import styles from '@/styles/Modals.module.scss';
import CallbackForm from '../forms/CallbackForm';


const CallbackModal = () => {

    return (
        <Box className={styles.WhiteModal}>
           <CallbackForm />
        </Box>
    );
}

export default CallbackModal;

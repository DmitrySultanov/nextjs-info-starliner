'use client'
import { Box } from '@mui/material';
import styles from '@/styles/Modals.module.scss';
import GetDemoForm from '../forms/GetDemoForm';


const GetProposalModal = () => {

    return (
        <Box className={styles.WhiteModal}>
           <GetDemoForm />
        </Box>
    );
}

export default GetProposalModal;

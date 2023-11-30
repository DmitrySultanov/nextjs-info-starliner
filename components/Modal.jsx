'use client'
import { Button, Alert, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';
import styles from '@/styles/Modals.module.scss'


const Modal = ({openModal, setOpenModal, title = "Информация", data, size = 'xs'}) => {

    const handleModalClose = () => {
        setOpenModal(false);
    }

    return (
        <Dialog
            open={openModal}
            onClose={handleModalClose}
            maxWidth={size}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={styles.Modal}
        >
            <DialogTitle className={styles.title} sx={{fontWeight: 'bold'}}>
                {title}
            </DialogTitle>
            <DialogContent>
                {data}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleModalClose}>Закрыть</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Modal;

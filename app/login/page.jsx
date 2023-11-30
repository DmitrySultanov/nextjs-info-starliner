import LoginForm from "@/components/forms/LoginForm";
import LoginSlider from "@/components/login/LoginSlider";
import { Box, Container, Grid, Typography } from "@mui/material";
import styles from '@/styles/Pages.module.scss'


export default function Page() {

    return (
        <>
            <LoginSlider />
            <Box component="section" className={styles.loginSection}>
                <Container maxWidth="lg">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={8} lg={6} xl={5}>
                            <Box className={styles.loginBox}>
                                <Typography variant="h5" component="h1" sx={{fontWeight: 'bold', mb: 4}}>Вход в систему</Typography>
                                <LoginForm />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
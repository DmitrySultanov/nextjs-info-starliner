'use client'
import { Box, Button, Grid, Typography, TextField, Checkbox } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import classNames from 'classnames';
import Link from 'next/link';
import InputMask from "react-input-mask";
import styles from '@/styles/Forms.module.scss'


const LoginForm = () => {

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: '',
            password: '',
        }
    })

    const phoneValidate = (value) => {
        if(value.includes('_')) {
            return false
        } else {
            return true
        }
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Box component="form" className={classNames(styles.loginForm, 'form')} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ 
                            required: true, 
                            minLength: 3
                        }}
                        render={({ field }) => 
                        <TextField 
                            {...field} 
                            className={styles.input}
                            fullWidth
                            label="Логин*"
                            type="text"
                        />}
                    />
                    {errors.name?.type === 'required' && <span className='field-error'>Поле обязательное</span>}
                    {errors.name?.type === 'minLength' && <span className='field-error'>Поле должно содержать не менее 3 букв</span>}
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ 
                            required: true, 
                            minLength: 3
                        }}
                        render={({ field }) => 
                        <TextField
                            {...field} 
                            className={styles.input}
                            fullWidth
                            label="Пароль*"
                            type="password"
                        />}
                    />
                    {errors.password?.type === 'required' && <span className='field-error'>Поле обязательное</span>}
                    {errors.password?.type === 'minLength' && <span className='field-error'>Пароль не может быть меньше 3 символов</span>}
                </Grid>
                <Grid item xs={12}>
                    <Button type={'submit'} fullWidth variant="contained" size="large" color="primary" className={styles.button}>Войти</Button>
                </Grid>
                <Grid item xs={12}>
                    <Link href="/">
                        <Button type={'button'} fullWidth variant="outlined" size="large" color="secondary" className={styles.button}>Забыли пароль?</Button>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link href="/" sx={{mt: 3}}>
                        <Button sx={{textTransform: 'none'}} type={'button'} fullWidth size="large" color="secondary" className={styles.button}>Получить демо-доступ</Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LoginForm;

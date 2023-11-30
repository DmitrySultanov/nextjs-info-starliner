'use client'
import { Box, Button, Grid, Typography, TextField, Checkbox } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import classNames from 'classnames';
import Link from 'next/link';
import InputMask from "react-input-mask";
import styles from '@/styles/Forms.module.scss'


const GetDemoForm = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: '',
            phone: '',
            company: '',
            email: '',
            accept: true
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
        <Box component="form" className={classNames(styles.feedbackForm, 'form')} onSubmit={handleSubmit(onSubmit)}>
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
                            label="Имя и фамилия*"
                            type="text"
                        />}
                    />
                    {errors.name?.type === 'required' && <span className='field-error'>Поле обязательное</span>}
                    {errors.name?.type === 'minLength' && <span className='field-error'>Поле должно содержать не менее 3 букв</span>}
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{ 
                            required: true, 
                            validate: value => phoneValidate(value)
                        }}
                        render={({ field }) => 
                        <InputMask
                            {...field} 
                            mask="+7(999)-999-99-99"
                        >
                            {() => <TextField
                                {...field} 
                                className={styles.input}
                                fullWidth
                                label="Телефон*"
                                type="tel"
                            />}
                        </InputMask>}
                    />
                    {errors.phone?.type === 'required' && <span className='field-error'>Поле обязательное</span>}
                    {errors.phone?.type === 'validate' && <span className='field-error'>Введите корректный номер телефона</span>}
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="company"
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
                            label="Компания*"
                            type="text"
                        />}
                    />
                    {errors.company?.type === 'required' && <span className='field-error'>Поле обязательное</span>}
                    {errors.company?.type === 'minLength' && <span className='field-error'>Поле должно содержать не менее 3 букв</span>}
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ 
                            required: true,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Введите корректную email почту",
                            },
                        }}
                        render={({ field }) => 
                            <TextField 
                                {...field} 
                                className={styles.input}
                                fullWidth
                                label="Email*"
                                type="email"
                            />
                        }
                    />
                    {errors.email?.type === 'required' && <span className='field-error'>Поле обязательное</span>}
                    {errors.email && <span className='field-error'>{errors.email.message}</span>}
                </Grid>
                <Grid item xs={12}>
                    <Box component="label">
                        <Controller
                            name="accept"
                            control={control}
                            rules={{ 
                                required: true,
                            }}
                            render={({ field }) => 
                                <Checkbox {...field} defaultChecked />
                            }
                        />
                        <Typography component="span">Принять <Link href='/'>оферту</Link> и получить доступ к личному кабинету</Typography>
                        {errors.accept?.type === 'required' && <p className='field-error' style={{marginTop: 0}}>Поле обязательное</p>}
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button type={'submit'} fullWidth variant="contained" size="large" color="primary" className={styles.button}>Отправить</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GetDemoForm;

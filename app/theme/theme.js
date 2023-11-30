"use client"
import { createTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

// useRouter.events.on('routeChangeStart', () => NProgress.start())
// useRouter.events.on('routeChangeComplete', () => NProgress.done())
// useRouter.events.on('routeChangeError', () => NProgress.done())

// NProgress.configure({
//   minimum: 0.3,
//   easing: 'ease',
//   speed: 800,
//   showSpinner: false,
// });

export const theme = createTheme({
    typography: {
      fontFamily: [
        'Gilroy',
        'Raleway',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
});
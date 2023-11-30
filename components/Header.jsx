'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Grid, Box, Container, AppBar, Slide, useScrollTrigger, List, ListItem, SwipeableDrawer, Button, Skeleton } from '@mui/material';
import styles from '../styles/Header.module.scss';
import logo from '../public/starliner_logo_white.png.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faPhone } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import { getPrimaryMenu } from '@/lib/api'
import { usePathname } from "next/navigation";
import { useFetching } from '@/lib/useFetching';
import Modal from './Modal';
import CallbackModal from './modals/CallbackModal';


const Header = (props) => {
    const pathname = usePathname()
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)
    const [menu, setMenu] = useState([])
    const [openModal, setOpenModal] = useState(false)

    const handleModalClick = () => {
        setOpenModal(true)
    }  

    const [fetchMenu, isMenuLoading, menuError] = useFetching( async() => {
        const response = await getPrimaryMenu()
        const data = await response?.nodes;
        setMenu(data)
    })

    useEffect(() => {
        fetchMenu()
    }, [])

    // console.log(menu)

    const [stateDrawer, setStateDrawer] = useState(false)

    const toggleDrawer = (state) => (event) => {
        if (
          event &&
          event.type === 'keydown' 
        ) {
          return;
        }
        setStateDrawer(state);
    }

    const toggleDrawerKeyboard = (state) => (event) => {
        if (
          event &&
          event.type === 'keydown' 
          && (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
        setStateDrawer(state);
    }

    function HideOnScroll(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
          target: window ? window() : undefined,
        });
      
        return (
          <Slide appear={false} direction="down" in={!trigger}>
            {children}
          </Slide>
        );
    }

    return (
        <>
            <HideOnScroll {...props}>
                <AppBar color="inherit" className={styles.header}>
                    <Container maxWidth="lg">
                        <Grid container spacing={0} className={styles.headerRow} alignItems="center" justifyContent="space-between">
                            <Grid item xs="auto">
                                <Link href="/" passHref>
                                    <Image
                                        priority
                                        src={logo}
                                        width={160}
                                        height={40}
                                        alt="Picture of the author"
                                    />
                                </Link>
                            </Grid>
                            <Grid item xs="auto">
                                <Grid container spacing={0} alignItems="center">
                                    <Grid item xs="auto">
                                        <Link href="tel:88003027717" className={styles.phone}>
                                            <FontAwesomeIcon style={{marginRight: '.5rem'}} icon={faPhone} />8 800 302 77 17
                                        </Link>
                                    </Grid>
                                    <Grid item xs="auto">
                                        <Button onClick={handleModalClick} variant="text" className={styles.callback}>Заказать звонок</Button>
                                    </Grid>
                                    <Grid item xs="auto">
                                        <Link href="/login">
                                            <Button variant="outlined" className={styles.entrance}>Войти</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={0} className={styles.headerRow} justifyContent="center" alignItems="center">
                            {isMenuLoading
                                ?   <Grid container spacing={3}>
                                        <Grid item xs={12} md={6} lg={4} xl={3}>
                                            <Skeleton className={styles.skeleton} variant="text"/>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4} xl={3}>
                                            <Skeleton className={styles.skeleton} variant="text"/>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4} xl={3}>
                                            <Skeleton className={styles.skeleton} variant="text"/>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4} xl={3}>
                                            <Skeleton className={styles.skeleton} variant="text"/>
                                        </Grid>
                                    </Grid>
                                :   <Grid item sx={{ display: { xs: 'none', lg: 'block' } }}>
                                        <List className={styles.navbar}>
                                            {menu.map((menuItem, idx) => (
                                                <ListItem key={idx} className={
                                                        classNames(pathname+'/' === `${menuItem.uri}` ? styles.active : "",
                                                        menuItem.childItems?.nodes?.length ? styles.hasChildren : '')
                                                    }>
                                                    <Link href={menuItem?.uri} className={styles.link}>
                                                        {menuItem.label}
                                                        {menuItem.childItems?.nodes?.length
                                                            ?   <FontAwesomeIcon style={{marginLeft: '.5rem', top: '.1rem', position: 'relative'}} icon={faAngleDown} size="lg" />
                                                            :   null
                                                        }
                                                    </Link>
                                                    {menuItem.childItems?.nodes?.length
                                                        ?   <List className={styles.dropdownList}>
                                                                {menuItem.childItems.nodes.map((childItem, idx) => (
                                                                    <ListItem key={idx}>
                                                                        <Link href={childItem.uri}>{childItem.label}</Link>
                                                                    </ListItem>
                                                                ))}
                                                            </List>
                                                        :   null
                                                    }
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                            }
                        </Grid>
                    </Container>
                </AppBar>
            </HideOnScroll>

            <SwipeableDrawer
                anchor="right"
                open={stateDrawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Box className={styles.mobileMenu}>
                    <List className={styles.navbar}>
                        <ListItem className={pathname == "/" ? styles.active : ""}>
                            <Link href="/">Главная</Link>
                        </ListItem>
                        <ListItem className={pathname == "/about" ? styles.active : ""}>
                            <Link href="/about">О нас</Link>
                        </ListItem>
                        <ListItem className={pathname == "/information" ? styles.active : ""}>
                            <Link  href="/information">Информация</Link>
                        </ListItem>
                    </List>
                </Box>
            </SwipeableDrawer>
            
            <Modal openModal={openModal} setOpenModal={setOpenModal} title="Обратный звонок" data={<CallbackModal />} />
        </>
    );
}

export default Header;

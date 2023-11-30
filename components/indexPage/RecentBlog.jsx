'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import styles from '@/styles/RecentBlog.module.scss';
import Link from 'next/link';
import { getRecentPosts } from '@/lib/api'
import { useFetching } from '@/lib/useFetching';
import RecentPost from '../blog/RecentPost';


const RecentBlog = () => {
    const [recentPosts, setRecentPosts] = useState([])

    const [fetchRecentPosts, isRecentPostsLoading, recentPostsError] = useFetching( async() => {
        const response = await getRecentPosts()
        setRecentPosts(response)
    })

    useEffect(() => {
        fetchRecentPosts()
    }, [])

    return (
        <Box component="section" className={styles.recentBlog}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component="h2" className='section-title'>Популярное в блоге</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    {/* <Grid item xs={12} md={4} lg={4}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum esse debitis, nulla est perspiciatis sunt omnis consequuntur. Accusantium consequuntur labore distinctio praesentium vero cumque deserunt natus. Facilis dolorum at non.
                    </Grid> */}
                    <Grid item xs={12}>
                        <Grid container spacing={0} rowSpacing={0} columnSpacing={0}>
                            {recentPosts.map((post, idx) => (
                                <Grid item xs={12} md={6} lg={4} key={idx}>
                                    <RecentPost post={post} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs="auto">
                        <Link href="/category/blog">
                            <Button variant="contained" sx={{mt: 6}}>Перейти в блог</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default RecentBlog;

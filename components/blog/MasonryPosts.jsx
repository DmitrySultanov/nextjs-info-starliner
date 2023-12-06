'use client'
import { useState, useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Masonry from '@mui/lab/Masonry';
import styles from '@/styles/MasonryPosts.module.scss';
import Post from './Post';
import Loader from '../Loader';
import LoadMoreAllPostsButton from '@/components/blog/LoadMoreAllPostsButton'
import LoadMoreCategoryPostsButton from '@/components/blog/LoadMoreCategoryPostsButton'


export default function MasonryPosts({ FirstPosts, type, categoryId, categoryName }) {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(FirstPosts)
    const haveMorePosts = Boolean(posts?.pageInfo?.hasNextPage)

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <>
            {loading
                ?   <Loader />
                :   <>
                        <Masonry columns={{ xs: 1, sm: 2, lg: 3 }} spacing={3} className={styles.masonry}>
                            {posts?.edges?.map((post, idx) => (
                                <Post post={post} key={idx} />
                            ))}
                        </Masonry>
                        {haveMorePosts
                            ? type === 'allPosts'
                                ? <LoadMoreAllPostsButton posts={posts} setPosts={setPosts} />
                                : <LoadMoreCategoryPostsButton posts={posts} setPosts={setPosts} categoryId={categoryId} categoryName={categoryName} />
                            : <Typography>✅ Все посты загружены</Typography>
                        }
                    </>
            }
        </>
    );
}

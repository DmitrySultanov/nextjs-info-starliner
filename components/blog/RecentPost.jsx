'use client'
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import 'moment/locale/ru';
import { Box, Chip, Card, Skeleton, CardContent, Typography, Button } from '@mui/material';
import styles from '@/styles/MasonryPosts.module.scss';


const RecentPost = ({post}) => {
    moment.locale('ru')

    return (
        <Card className={styles.recentPost}>
            {post ? (
                <Link href={`/category/blog/${post?.node?.slug}`} className={styles.link}>
                    {post?.node?.featuredImage
                        ?   <Button variant="text">
                                <Image
                                    src={post?.node?.featuredImage?.node?.mediaItemUrl}
                                    alt=""
                                    fill
                                    sizes="100%"
                                />
                            </Button>
                        :   <Skeleton variant="rectangular" width="100%" height="100%" />
                    }
                </Link>
            ) : (
                <Skeleton variant="rectangular" width="100%" height="100%" />
            )}
            {post?.node?.categories
                ?   <Box className={styles.categories}>
                        {post?.node?.categories?.edges.map((category, idx) => (
                            <Chip className={styles.category} key={idx} label={category?.node?.name} size="small" />
                        ))}
                    </Box>
                :   null
            }
            <CardContent className={styles.cardContent}>
                <Box className={styles.date}>
                    <Chip label={moment(post?.node?.date).format('LL')} size="small" />
                </Box>
                <Typography variant="h6" component="h2" className={styles.title}>
                    <Link href={`/category/blog/${post?.node?.slug}`} >
                        {post?.node?.title}
                    </Link>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default RecentPost;

'use client'
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import 'moment/locale/ru';
import { Box, Chip, Grid, Card, Skeleton, CardContent, Typography, Button } from '@mui/material';
import styles from '@/styles/MasonryPosts.module.scss';


const Post = ({post}) => {
    moment.locale('ru')

    return (
        <Card>
            <Box component="div" className={styles.CardMedia}>
                <Link href={`/category/blog/${post?.node?.slug}`}>
                    {post?.node?.featuredImage?.node?.mediaItemUrl
                        ?   <Button variant="text">
                                <Image
                                    src={post?.node?.featuredImage?.node?.mediaItemUrl}
                                    alt=""
                                    fill
                                    sizes="100%"
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,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M0lQvJUbSe9QPJVCsSPJUDy1HJLUEktMViR5aheWoJJqgeai4WLDS1C01VnnqFp/encVi209MM9UWuPemG4z3pk2L5n96PtHvWabn3pv2n3p3FY5RZKlWWs8Te9SLN71z2Ok00m96sxz+9ZCTe9TJP70WA24rjHerkVz71gR3HvVmO596LAdFDde9Xobv3rmYrrHerkV370rAdPFee9W4r33rmIrz3q3Fee9TYZ00d771Ot771zcd571YS896Vh3OhF570v2z3rBF570/wC2e9KwXNk3ee9Ma796yDd+9NN3707CNVrr3qNrn3rMN1nvTDdc9aqwjTNzz1ppuM96zTc570n2j3p2A0/P96UT1mi496cJ/eqsBpCal873rPE/vT/O96YF3zvemmWqnm0hm96QFhpageWoml96heWmFiSSWq0k1MkmqrJN707isSSTVVknqKWb3qrLP70xE7z1Xe4qrJP71Xe496BFxrn3qJrnnrVB7j3qJrn3piNE3PHWm/afesw3PvTPtPvVCMcTU8TVQEtPEtZ2KuaCze9SrPWaJakEtOwXNRJ/ep0uPeshZqlWenYVzajuferUd1jvWElxViO496Vh3N+O696sx3fvXPx3PvVmO596Vh3OgS796nS796wEuvepkufepsO5vLd+9PF371hrdcdakF170rDubP2ukN1nvWSLr3o+1e9FhXNU3XvTftPvWUbn3o+01VhXNX7T70ouPesoXHvThcZ707Bc1hcVIs/vWSs/vUqT+9OwXNVZ6kE1Ziz1Ks1Firl/zqQy1TEtKZKkCw0tQvLUTS1C8tADpJaqyzUkktVJZaaAJZqpyzUk0tUpZqYmPkn96qyT+9RSzVUkmpk3J3n96ha496qvNULT00iS4bim/aM96oNPTPOpgVRJTxJRRQA8SU8SUUUAPWWpFlooqrCuSpLU6TUUUWC5Ok1TpPRRUjJ0uKmW496KKkdyVbj3p4uPeiilYocLjHel+00UUCYv2g0faDRRVJEiienrPRRTAlSb3qZJqKKAJ0lqZJaKKllEgkpfNoopMtDWkqF5KKKlagVpZKpyyUUVQMpTSdaozS0UU0QUpZaqSS9aKKokrSS1A0tFFAmRNLTPNooqrCuf/9k="
                                />
                            </Button>
                        :   <Skeleton variant="rectangular" width="100%" height="100%" />
                    }
                </Link>
                {post?.node?.categories
                    ?   <Box className={styles.categories}>
                            {post?.node?.categories?.edges.map((category, idx) => (
                                <Chip className={styles.category} key={idx} label={category?.node?.name} size="small" />
                            ))}
                        </Box>
                    :   null
                }
            </Box>
            <CardContent>
                <Box className={styles.date}>
                    <Chip label={moment(post?.node?.date).format('LL')} size="small" />
                </Box>
                <Typography variant="h6" component="h2" className={styles.title}>
                    <Link href={`/category/blog/${post?.node?.slug}`} >
                        {post?.node?.title}
                    </Link>
                </Typography>
                <Typography>
                    {post?.node?.excerpt}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Post;

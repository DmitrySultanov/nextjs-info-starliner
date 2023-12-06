import { Box, Container, Grid, Typography } from "@mui/material"
import styles from '@/styles/Post.module.scss'
import { getPost } from "@/lib/api"
import Image from "next/image"
import PostContent from "@/components/blog/PostContent"
import Link from "next/link"


async function getPostData(slug) {
  const res = getPost(slug)
  return res
}

export default async function Page({ params }) {
  const post = await getPostData(params.slug)

  return (
    <Box component="section" className={styles.postPage}>
      <Box className={styles.hero}>
        <Image
          src={post?.featuredImage?.node?.mediaItemUrl}
          alt=""
          fill
          sizes="100%"
        />
        <Container maxWidth="lg">
          <Grid container justifyContent="center" className={styles.heroContent}>
            <Grid item xs={12} md={10} lg={9} xl={8}>
              <Link className={styles.categoryLink} href={`/category/blog/category/${post?.categories?.nodes[0]?.slug}`}>{post?.categories?.nodes[0]?.name}</Link>
              <Typography className={styles.title} variant="h3" component="h1">{post.title}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <PostContent content={post.content} />
      </Container>
    </Box>
  )
}

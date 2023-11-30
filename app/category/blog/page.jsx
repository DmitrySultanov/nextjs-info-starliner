import { getPosts, getPostsCaterories } from '@/lib/api'
import { Box, Container, Typography } from '@mui/material'
import MasonryPosts from '@/components/blog/MasonryPosts'
import PostsCategories from '@/components/blog/PostsCategories'
import { revalidateTag } from 'next/cache'
import { Suspense } from 'react'
// import LoadMorePostsButton from '@/components/blog/LoadMorePostsButton'

// let posts = await getPosts(9, '')
// let count = 1

// async function onSubmit(data) {
//   'use server'
//   count++
//   const endCursor = data?.get('endCursor') ? data.get('endCursor') : '';
//   posts = await getPosts(9*count, endCursor);
//   revalidateTag('posts');
// }

export default async function Page() {
  let FirstPosts = await getPosts(12, '')
  const categories = await getPostsCaterories(18);
  // const haveMorePosts = Boolean(posts?.pageInfo?.hasNextPage)

  return (
    <Box sx={{pb: 5}}>
      <Container maxWidth="lg">
        <PostsCategories categories={categories} />
        <Suspense fallback={<p>Loading posts...</p>}>
          <MasonryPosts FirstPosts={FirstPosts} type="allPosts" />
        </Suspense>

        {/* {haveMorePosts
          ? <Box component="form" action={onSubmit}>
              <input type="hidden" name="endCursor" value={posts?.pageInfo?.startCursor} />
              <LoadMorePostsButton />
            </Box>
          : <Typography>✅ Все посты загружены</Typography>
        } */}
        {/* {haveMorePosts
          ? <LoadMorePostsButton posts={posts} />
          : <Typography>✅ Все посты загружены</Typography>
        } */}
      </Container>
    </Box>
  )
}
import { Box, Container, Typography } from "@mui/material"
import { Suspense } from 'react'
import { getPostsByCategoryId, getPostsCaterories } from '@/lib/api'
import { revalidateTag } from 'next/cache'
import MasonryPosts from "@/components/blog/MasonryPosts"
import PostsCategories from "@/components/blog/PostsCategories"
import LoadMorePostsButton from "@/components/blog/LoadMoreAllPostsButton"

// let posts = []
// let count = 1

async function fetchData(id) {
    const res = getPostsByCategoryId(id, 6, '')
    return res
}


// async function onSubmit(data) {
//     'use server'
//     count++
//     const endCursor = data?.get('endCursor') ? data.get('endCursor') : '';
//     const categoryId = data?.get('categoryId') ? data.get('categoryId') : '';
//     posts = await getPostsByCategoryId(Number(categoryId), 3*count, endCursor);
//     revalidateTag('categoryPosts');
// }

export default async function Page({ params }) {
    const categoryId = Number(params.id)

    // if(count === 1) {
    //     posts = await fetchData(categoryId)
    // }
    const FirstPosts = await fetchData(categoryId)
    const categories = await getPostsCaterories(18)
    // const haveMorePosts = Boolean(posts?.pageInfo?.hasNextPage)

    return (
        <Box sx={{pb: 5}}>
            <Container maxWidth="lg">
                <PostsCategories categories={categories} />
                <MasonryPosts FirstPosts={FirstPosts} type="categoryPosts" categoryId={categoryId} />

                {/* {haveMorePosts
                    ? <Box component="form" action={onSubmit}>
                        <input type="hidden" name="categoryId" value={categoryId} />
                        <input type="hidden" name="endCursor" value={posts?.pageInfo?.startCursor} />
                        <LoadMorePostsButton />
                        </Box>
                    : <Typography>✅ Все посты загружены</Typography>
                } */}
            </Container>
        </Box>
    )
}
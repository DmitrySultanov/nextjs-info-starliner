import { Box, Container, Typography } from "@mui/material"
import { getCategoryBySlug, getPostsByCategoryName, getPostsCaterories } from '@/lib/api'
import { revalidateTag } from 'next/cache'
import MasonryPosts from "@/components/blog/MasonryPosts"
import PostsCategories from "@/components/blog/PostsCategories"
import LoadMorePostsButton from "@/components/blog/LoadMoreAllPostsButton"
import NextBreadcrumbs from "@/components/NextBreadcrumbs"
import HomeIcon from '@mui/icons-material/Home';


export default async function Page({ params }) {
    const categoryName = params.slug
    const FirstPosts = await getPostsByCategoryName(categoryName, 6, '')
    const categories = await getPostsCaterories(18)
    const currentCategory = await getCategoryBySlug(categoryName)

    return (
        <>
            <NextBreadcrumbs 
                items={[
                    {
                        label: (<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />),
                        path: "/",
                    },
                    {
                        label: "Блог",
                        path: "/category/blog"
                    },
                    {
                        label: currentCategory.name,
                        path: currentCategory.uri
                    }
                ]} 
            />
            <Box sx={{pb: 5}}>
                <Container maxWidth="lg">
                    <PostsCategories categories={categories} />
                    <MasonryPosts FirstPosts={FirstPosts} type="categoryPosts" categoryName={categoryName} />
                </Container>
            </Box>
        </>
    )
}
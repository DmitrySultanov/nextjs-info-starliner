import { Box } from '@mui/material';
import { getPosts } from "@/lib/api";
import { revalidateTag } from 'next/cache'
import LoadMorePostsButton from './LoadMoreAllPostsButton';


export default function LoadMorePosts({ onSuccess, posts }) {

    async function onSubmit(data) {
        'use server'
        let posts = data?.get('posts')
        const endCursor = data?.get('endCursor') ? data.get('endCursor') : '';
        posts = await getPosts(9, endCursor);
        revalidateTag('posts');
    }

    return (
        <Box component="form" action={onSubmit} method="POST">
            <input type="hidden" name="posts" value={posts} />
            <input type="hidden" name="endCursor" value={posts?.pageInfo?.endCursor} />
            <LoadMorePostsButton />
        </Box>
    );
}
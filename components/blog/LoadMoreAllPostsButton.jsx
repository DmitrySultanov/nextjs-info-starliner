'use client'
import { useState } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Button} from '@mui/material';
import { getPosts } from '@/lib/api';


const LoadMorePostsButton = ({posts, setPosts}) => {
    // const { pending } = useFormStatus()
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true)
        const morePosts = await getPosts(12, posts.pageInfo.endCursor)

        let updatedPosts = {
            edges: [],
            pageInfo: {

            }
        }

        updatedPosts.pageInfo = morePosts.pageInfo

        posts.edges.map((node) => {
            updatedPosts.edges.push(node)
        })

        morePosts.edges.map((node) => {
            updatedPosts.edges.push(node)
        })

        setPosts(updatedPosts)
        setLoading(false)
    }

    return (
        <Button type="button" 
                disabled={loading} 
                variant="contained" 
                onClick={handleClick}
                sx={{width: '100%'}}>
            {loading
                ?   'Загрузка...'
                :   'Загрузить посты'
            }
            
        </Button>
    );
}

export default LoadMorePostsButton;

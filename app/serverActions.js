'use server'
import { getPosts } from "@/lib/api";
import { revalidatePath, revalidateTag } from 'next/cache'


// export async function onSubmit(data) {
//     const endCursor = data?.get('endCursor') ? data.get('endCursor') : '';
//     let BATCH_SIZE = 9;
//     const posts = await getPosts(BATCH_SIZE, endCursor);
//     console.log('1', posts)
//     // revalidateTag('posts');
//     // revalidatePath('/blog')
//     return posts
//   }
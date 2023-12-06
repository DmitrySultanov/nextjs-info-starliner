'use client'
import { getPostsByCategoryId } from '@/lib/api'
import React, { useState } from 'react'
import { Box, Typography } from '@mui/material';
import styles from '@/styles/postsCategories.module.scss'
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from "next/navigation";


const PostsCategories = ({ categories }) => {
    const pathname = usePathname()
    // const [postsByCategory, setPostsByCategory] = useState([])

    // console.log(categories, pathname)
    
    // async function fetchData(termId) {
    //   try {
    //     setPostsByCategory(await getPostsByCategoryId(termId))
    //   } catch (err) {
    //     console.log('error: ', err)
    //   }
    // }


    // const handleFilterByCategory = (slug, termId, e) => {
    //     for (const element of e.currentTarget.parentElement.childNodes) {
    //         element.classList.remove(styles.active);
    //     }
    //     e.currentTarget.classList.add(styles.active);

    //     console.log(fetchData(termId))
    // }

    return (
        <>

            <Box className={styles.categoriesList}>
                <Link className={classNames(pathname == "/category/blog" ? styles.active : "", styles.link)} href="/category/blog">Все</Link>
                {/* <Typography className={classNames(styles.link, styles.active)} component="span" onClick={(e) => handleFilterByCategory('all', '', e)}>Все</Typography> */}
                {categories.map((category, idx) => (
                    // <Typography className={styles.link} onClick={(e) => handleFilterByCategory(category?.node?.slug, category?.node?.termTaxonomyId,
                    //     e)} component="span" key={idx}>{category?.node?.name}</Typography>
                    <Link className={classNames(pathname == `/category/blog/category/${category?.node?.slug}` ? styles.active : "", styles.link)} href={`/category/blog/category/${category?.node?.slug}`} key={idx}>{category?.node?.name}</Link>
                ))}
            </Box>
        </>
    );
}

export default PostsCategories;

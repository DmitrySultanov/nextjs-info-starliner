'use client'
import { Parser } from 'html-to-react'
import React, {useState, useEffect} from 'react';


const PostContent = ({content}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <>
            {mounted && Parser().parse(content)}
        </>
    );
}

export default PostContent;

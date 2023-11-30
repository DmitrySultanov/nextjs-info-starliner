import { Box, Container, Grid, Typography } from "@mui/material"
import { getSinglePageBySlug } from "@/lib/api"
import { Parser } from 'html-to-react'


export default async function Page({ params }) {
    console.log(params.slug, params.slug.at(-1))
    const page = await getSinglePageBySlug(params.slug.at(-1))

    return (
        <Box component="section">
            <Container maxWidth="lg">
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>{page.title}</Typography>
                {Parser().parse(page.content)}
            </Container>
        </Box>
    )
}
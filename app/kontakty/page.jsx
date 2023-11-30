import { Box, Container, Grid, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import Link from "next/link"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GetDemoForm from "@/components/forms/GetDemoForm";


export default async function Page() {
    return (
        <Box component="section" className="" sx={{mt: 10}}>
            <Container maxWidth="lg">
                <Typography sx={{textAlign: 'center'}} variant="h4" component="h1">Бесплатный звонок по всей России (24 часа)</Typography>
                <Grid container spacing={4} justifyContent="center" sx={{mt: 1}}>
                    <Grid item><Link href="tel:88003027717"></Link>8 800 302 77 17</Grid>
                    <Grid item><Link href="mailto:service@starliner.ru">service@starliner.ru</Link></Grid>
                </Grid>
                <Grid container justifyContent="center" sx={{pt: 5, pb: 5}}>
                    <Grid item xs={12} md={8} xl={6}>
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography component="h2" variant="h6" sx={{fontWeight: 'bold'}}>Записаться на демо</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{mb: 3}}>
                                    Пожалуйста, оставьте заявку или позвоните нам по телефону: 8 800 350 44 54.
                                    Мы настроим для вас личный кабинет и проведем увлекательную экскурсию по возможностям онлайн-платформы Starliner.
                                </Typography>
                                <GetDemoForm />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography component="h2" variant="h6" sx={{fontWeight: 'bold'}}>Получить коммерческое предложение</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{mb: 3}}>
                                    Пожалуйста, оставьте заявку или позвоните нам по телефону: 8 800 350 44 54.
                                    Мы настроим для вас личный кабинет и проведем увлекательную экскурсию по возможностям онлайн-платформы Starliner.
                                </Typography>
                                <GetDemoForm />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography component="h2" variant="h6" sx={{fontWeight: 'bold'}}>Для действующих клиентов </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{mb: 3}}>
                                    Пожалуйста, оставьте заявку или позвоните нам по телефону: 8 800 350 44 54.
                                    Мы настроим для вас личный кабинет и проведем увлекательную экскурсию по возможностям онлайн-платформы Starliner.
                                </Typography>
                                <GetDemoForm />
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
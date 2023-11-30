'use client'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
 

export default function ButtonRouterBack() {
  const router = useRouter()
 
  return (
    <Button sx={{mt: 4, mb: 4}} variant="contained" color="secondary" onClick={() => router.back()}>
      <FontAwesomeIcon style={{marginRight: '.5rem'}} icon={faArrowLeft} /> Back
    </Button>
  )
}
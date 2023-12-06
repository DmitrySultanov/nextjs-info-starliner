'use client'
import React from 'react';
import { Breadcrumbs, Typography, Box, Container, List, ListItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function NextBreadcrumbs({items}) {
  // console.log(items)
  const router = useRouter();

  return (
    <>
      {items.length 
        ? <Container maxWidth="lg" sx={{mt: 2}}>
            <List className="breadcrumbs" aria-label="breadcrumb">
              {items.map((crumb, i) => {
                const isLastItem = i === items.length - 1;
                if (!isLastItem) {
                  return (
                    <ListItem key={crumb.label}>
                      <Link
                        href={crumb.path}
                        
                      >
                        {crumb.label}
                      </Link>
                      {/* separator */}
                      <NavigateNextIcon fontSize="small" />
                    </ListItem>
                  );
                } else {
                  return (
                    <ListItem key={crumb.label}>
                      <Typography variant="body1" component="span">{crumb.label}</Typography>
                    </ListItem>
                  )
                }
              })}
            </List>
          </Container>
        : null
      }
    </>
    
  );
}

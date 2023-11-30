"use client";
import { Box, Typography } from "@mui/material";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 4 }}>
            <Typography>Идёт загрузка...</Typography>
        </Box>
    )
  }

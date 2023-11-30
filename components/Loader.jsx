"use client";
import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 4, mb: 4 }}>
            <CircularProgress />
        </Box>
    )
  }

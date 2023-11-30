"use client";
import { Box, LinearProgress } from '@mui/material';


export default function Loading() {
    return (
        <Box className="loader loader-linear">
            <LinearProgress />
        </Box>
    );
}
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

export default function Home() {
    return (
        <Box className="section" sx={{ display: 'flex', justifyContent: 'center', mt: 1, px: 1 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://i.ibb.co/ZBzmJnL/icon-4873054-1280.webp"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Home
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            This is the hompage of the website...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}

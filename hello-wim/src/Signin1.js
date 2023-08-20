import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';




export default function Signin(){
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />

             <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >


             <Typography component="h1" variant="h2" sx={{mb: 10}}>
            WIM
          </Typography>

          <Card sx={{ maxWidth: 345, height: 400 }}>
            <Typography component="h1" varient="h5">
                Sign in
            </Typography>
            <TextField 
            margin="normal"
            label="Email Address" 
            required 
            fyllWidth 
            name="email" 
            autoComplete='email'
            autofocus />
            <TextField 
            label="Password" 
            type="password" 
            required fyllWidth
            name="password" 
            autoComplete='current-password'/>
            <FormControlLabel control={<Checkbox 
            value="remember" 
            color="primary" />} label="Remember me" />
        
            <Button type="submit" fullWidth varient="contained" sx={{mt:3, mb: 3}}>Sign in</Button>

            <Grid container>
                <Grid item xs>
            <Link>Forgot password?</Link> 
            </Grid>
            <Grid item>
            <Link> Sign up</Link>
            </Grid>
            </Grid>

            </Card>

            </Box>
        </Container>
    );
}
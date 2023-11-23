'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';


export default function Page() {



    /*
    This function does the actual work
    calling the fetch to get things from the database.
    */
    async function runDBCallAsync(url) {


        const res = await fetch(url);
        const data = await res.json();


        if(data.data== "valid"){
            console.log("Register is valid!")


        } else {

            console.log("not valid  ")
        }
    }


    /*

    When the button is clicked, this is the event that is fired.
    The first thing we need to do is prevent the default refresh of the page.
    */
    const handleSubmit = (event) => {

        console.log("handling submit");


        event.preventDefault();

        const data = new FormData(event.currentTarget);


        let email = data.get('email')
        let firstname = data.get('firstname')
        let phonenum = data.get('phonenum')
        let address = data.get('address')
        let lastname = data.get('lastname')
        let pass = data.get('pass')
        let dob = data.get('dob')


        console.log("Sent email:" + email)
        console.log("Sent firstname:" + firstname)
        console.log("Sent phonenum:" + phonenum)
        console.log("Sent address:" + address)
        console.log("Sent pass:" + pass)
        console.log("Sent lastname:" + lastname)
        console.log("Sent dob:" + dob)


        runDBCallAsync(`http://localhost:3000/api/register?email=${email}&pass=${pass}&lastname=${lastname}&phonenum=${phonenum}&address=${address}&firstname=${firstname}&dob=${dob}`)




    }; // end handler





    const theme = createTheme({
        palette: {

            secondary: {
                main: green[500],
            },
        },
    });





    return (
        <ThemeProvider theme={theme}>
            <Container component="main"  maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="EmailAddress"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="firstname"
                            label="firstname"
                            type="firstname"
                            id="firstname"
                            autoComplete="firstname"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="pass"
                            label="Pass"
                            type="pass"
                            id="pass"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="lastname"
                            label="lastname"
                            type="lastname"
                            id="lastname"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="phonenum"
                            label="phonenum"
                            type="phonenum"
                            id="phonenum"
                            autoComplete="phone num"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="address"
                            label="address"
                            type="address"
                            id="address"
                            autoComplete="address"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="dob"
                            label="dob"
                            type="text"
                            id="dob"
                            autoComplete=""
                        />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>




                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"have an account? Sign in"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>

        </ThemeProvider>

    );
}
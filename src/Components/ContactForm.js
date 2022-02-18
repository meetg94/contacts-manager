import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'

export default function BasicTextFields() {

    const [info, setInfo] = useState({
        name: "",
        email: ""
    })

    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name]:(e.target.value)
        })
     }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        value={info.name}
        name="name"
        onChange={handleChange}
        />
        <p>{info.name}</p>
      <TextField 
        id="filled-basic" 
        label="Email" 
        variant="filled" 
        value={info.email}
        name="email"
        onChange={handleChange}
        />
        <p>{info.email}</p>
    </Box>
  );
}
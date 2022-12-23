import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleNote = () => {
  return (
      <Card className='notesCard' sx={{boxShadow: 0, maxHeight: 300, cursor: 'default', border: '1.5px solid #afafaf'}}>
        <CardContent>
          <Typography sx={{ fontWeight: 600 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: 15 }}>
            MSDMU'ACRSYSACRPRDCT1025
            KTNX4-VQPPY-RYVMM-G4RYH-T3BMP
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
  )
}

export default SingleNote
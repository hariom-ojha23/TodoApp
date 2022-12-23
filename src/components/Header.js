import React, {useEffect, useRef, useState} from "react";
import { Box, IconButton, Stack } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';


const Header = () => {
  const [open, setOpen] = useState(false)

  const titleInput = useRef(null)

  useEffect(() => {
    if (open) {
      titleInput.current.focus()
    }
  }, [open])

  const toggleCardOpen = () => {
    if (!open) {
      setOpen(true)
      
    }
  }

  return (
    <Box sx={{
      width: '100%',
      maxWidth: 650,
      p: 0
    }}>
      <Card sx={{p: 0, boxShadow: 4, borderRadius: 2}}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', rowGap: 1.5, p: 1, py: !open ? 0.5 : 1}}>
          <Stack sx={{display: open ? 'flex' : 'none'}} direction="row" columnGap={2}>
            <input ref={titleInput} placeholder="Title" className="titleInput" type="text" />
            <IconButton>
              <PushPinOutlinedIcon sx={{fontSize: 26}} />
            </IconButton>
          </Stack>
          <Stack onClick={toggleCardOpen} direction="row" columnGap={2}>
            <input placeholder="Take a note..." className="noteInput" type="text" />
            <IconButton sx={{display: !open ? '' : 'none', p: 1}}>
              <CreateOutlinedIcon />
            </IconButton>
          </Stack>
        </CardContent>
        <CardActions sx={{display: open ? 'flex' : 'none', justifyContent: 'space-between', columnGap: 2, pt: 1}}>
          <Stack direction="row" columnGap={2}>
            <IconButton>
              <ColorLensOutlinedIcon />
            </IconButton>
            <IconButton>
              <SystemUpdateAltOutlinedIcon />
            </IconButton>
          </Stack>
          <Box>
            <Button sx={{color: '#666'}} size="small" onClick={() => setOpen(false)}>Close</Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Header
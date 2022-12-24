import React, {useEffect, useRef, useState} from "react";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useDispatch } from "react-redux";
import {v4 as uuid} from 'uuid'
import { createNote } from "../redux/notes";


const Header = () => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [pinned, setPinned] = useState(false);
  const [archived, setArchived] = useState(false);
  const [bgColor, setbgColor] = useState('#fff');

  const titleInput = useRef(null)
  const dispatch = useDispatch()

  const bgColorArr = ['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed']
  const bgNameArr = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'dark blue', 'purple', 'pink', 'brown', 'gray']

  useEffect(() => {
    if (open) {
      titleInput.current.focus()
    } else {
      if (title != '' || note != '') {
        const body = {
          id: uuid(),
          title,
          note,
        }

        dispatch(createNote(body))
        setTitle('')
        setNote('')
      }
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
      maxWidth: 600,
      p: 0,
      pt: 3
    }}>
      <Card sx={{p: 0, boxShadow: 4, borderRadius: 2, backgroundColor: bgColor}}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', rowGap: 1.5, p: 1, py: !open ? 0.5 : 1}}>
          <Stack sx={{display: open ? 'flex' : 'none'}} direction="row" columnGap={2}>
            <input value={title} onChange={e => setTitle(e.target.value)} ref={titleInput} placeholder="Title" className="titleInput" type="text" />
            <IconButton onClick={() => setPinned(!pinned)}>
              { pinned ? <PushPinIcon sx={{fontSize: 26}} /> : <PushPinOutlinedIcon sx={{fontSize: 26}} /> }
            </IconButton>
          </Stack>
          <Stack onClick={toggleCardOpen} direction="row" columnGap={2}>
            <TextField
              fullWidth
              sx={{p: '5px'}}
              placeholder="Take a note..."
              multiline
              maxRows={20}
              variant="standard"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <IconButton sx={{display: !open ? '' : 'none', p: 1}}>
              <CreateOutlinedIcon />
            </IconButton>
          </Stack>
        </CardContent>
        <CardActions sx={{display: open ? 'flex' : 'none', justifyContent: 'space-between', columnGap: 2, pt: 1}}>
          <Stack direction="row" columnGap={2}>
            <PopupState variant="popper">
              {(popupState) => (
                <div>
                  <IconButton {...bindToggle(popupState)}>
                    <ColorLensOutlinedIcon />
                  </IconButton>
                  <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                          <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>
            
            <IconButton onClick={() => setArchived(!archived)}>
              {archived ? <ArchiveIcon /> : <ArchiveOutlinedIcon />}
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
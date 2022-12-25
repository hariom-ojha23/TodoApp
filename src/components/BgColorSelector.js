import React from "react";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";

const bgColorArr = [
  "#fff",
  "#f28b82",
  "#fbbc04",
  "#fff475",
  "#ccff90",
  "#a7ffeb",
  "#cbf0f8",
  "#aecbfa",
  "#d7aefb",
  "#fdcfe8",
  "#e6c9a8",
  "#e8eaed",
];
const bgNameArr = [
  "default",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "dark blue",
  "purple",
  "pink",
  "brown",
  "gray",
];

const BgColorSelector = (props) => {
  const { setbgColor } = props;
  return (
    <PopupState variant="popper">
      {(popupState) => (
        <div>
          <IconButton {...bindToggle(popupState)}>
            <ColorLensOutlinedIcon />
          </IconButton>
          <Popper sx={{ zIndex: 10000 }} {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper
                  sx={{
                    display: "flex",
                    columnGap: "3px",
                    p: 1,
                    boxShadow: 4,
                    borderRadius: 3,
                  }}
                >
                  {bgColorArr.map((color, index) => (
                    <Tooltip
                      key={color}
                      title={bgNameArr[index]}
                      placement="bottom"
                    >
                      <div
                        style={{ backgroundColor: color }}
                        className="colorCircle"
                        onClick={() => {
                          setbgColor(color);
                          popupState.close();
                        }}
                      ></div>
                    </Tooltip>
                  ))}
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
};

export default BgColorSelector;

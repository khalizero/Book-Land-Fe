import React, { useState } from "react";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";

import {
  HighlightOff,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";

const TextInput = (
  {
    label,
    value,
    setValue,
    name,
    sx,
    className,
    eye = false,
    visibleInitial = true,
  }
) => {
  const [visible, setVisible] = useState(visibleInitial);
  const valueHandler = (e) => {
    const { value } = e.target;
    if (setValue) {
      setValue((pre) => ({ ...pre, [name]: value }));
    }
  };

  // Emtyinh the input
  const EmptyInputHandler = () => {
      setValue((pre) => ({ ...pre, [name]: "" }));
  };
// setting passwrod vivibility 
  const changeVisibiltyHandler = () => {
    setVisible(!visible);
  };

  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={sx}
      className={"flex-row-center " + className}
    >
      <div className={'w-100'}>
        <InputLabel htmlFor={name}>
          <Typography variant="h5" color={"info.500"}>
            {label}
          </Typography>
        </InputLabel>
        <OutlinedInput
          className="bordergray w-100"
          type={visible ? "text" : "password"}
          value={value}
          id={name}
          name={name}
          onChange={valueHandler}
          endAdornment={
            value !== "" && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Empty the field"
                  onClick={EmptyInputHandler}
                  edge="end"
                  color="info.500"
                >
                  <HighlightOff />
                </IconButton>
              </InputAdornment>
            )
          }
          label={label}
        />
      </div>
      {eye &&
        (visible ? (
          <IconButton
            onClick={changeVisibiltyHandler}
            className={'right_neg50 absolute'}
          >
            <VisibilityOutlined/>
          </IconButton>
        ) : (
          <IconButton
            onClick={changeVisibiltyHandler}
            className={'right_neg50 absolute'}
          >
            <VisibilityOffOutlined />
          </IconButton>
        ))}
    </FormControl>
  );
};

export default TextInput;

const textFieldStyle = (theme) => ({
  label: {
    color: "white",
    fontSize: "14px",
    position: "relative",
    marginBottom: "4px",
    "& span": {
      color: "#FF4B4B"
    }
  },
  textField: {
    "& .MuiInputBase-root": {
      color: "white",
      fontSize: "14px",
      "& fieldset": {
        border: "0"
      }
    }
  },
  dateField: {
    "& .MuiFormLabel-root": {
      color: 'white',
      position: "relative",
      fontSize: "14px",
      marginBottom: "4px",
      "& span": {
        color: "#FF4B4B"
      }
    },
    "& .MuiFormControl-root": {
      marginTop: "0"
    },
    "& .MuiInputBase-root": {
      height: "53px",
      color: "white"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0 !important"
    },
    "& .MuiButtonBase-root": {
      color: "white"
    }
  },
  labelRootError: {
    color: "red"
  }
})

export default textFieldStyle

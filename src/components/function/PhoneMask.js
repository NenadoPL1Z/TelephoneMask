import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
export default function PhoneMask() {
  const [value, setValue] = useState("");

  function mask(e) {
    let inputNumbersValue = e.target.value.replace(/\D/g, "");

    let formattedInputValue = "";

    //! Если пустая строка
    if (!inputNumbersValue) {
      setValue("");
      return;
    }

    if (inputNumbersValue[0].match(/[1-6, 9]/)) inputNumbersValue = "7" + inputNumbersValue;
    formattedInputValue = "+7 ";
    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
    }

    if (e.target.value.length >= 0 && e.target.value.length <= 18) {
      setValue(formattedInputValue);
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "500px" }}>
      <div style={{ backgroundColor: "white", width: "400px", height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TextField
          type="tel"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={value}
          onChange={(e) => mask(e)}
          onKeyDown={(e) => {
            if (e.key == "Backspace" && e.target.value.length === 3) {
              console.log(e.key);
              setValue("");
            }
          }}
        />
      </div>
    </div>
  );
}

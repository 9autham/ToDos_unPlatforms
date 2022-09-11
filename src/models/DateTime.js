import React from "react";
import dayjs from "dayjs";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Stack } from "@mui/material";

export default function DateTimeValidation(props) {
  const [value, setValue] = React.useState(dayjs());
  const printf = (x) => {
    let rettt =
      "Date: " +
      x.$D +
      "/" +
      (x.$M + 1) +
      "/" +
      x.$y +
      " Time: " +
      x.$H +
      ":" +
      x.$m +
      " Hrs";
    props.updateUserInfo(rettt);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form>
        <Stack spacing={3}>
          <DateTimePicker
            renderInput={(params) => <TextField {...params} />}
            label="DeadLine"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            minDateTime={dayjs()}
          />
          {printf(value)}
          <button className="btn btn-primary" onClick={printf(value)}>
            Submit DeadLine
          </button>
        </Stack>
      </form>
    </LocalizationProvider>
  );
}

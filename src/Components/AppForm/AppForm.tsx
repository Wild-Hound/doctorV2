import React, { useState } from "react";
import styles from "./AppForm.module.scss";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

interface Props {
  bookBtn: Function;
}

export const AppForm: React.FC<Props> = (Props) => {
  const [age, setAge] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date("2021-08-18T21:11:54")
  );

  const handleChange = (event: object) => {
    //@ts-ignore
    setAge(event.target.value);
  };
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <div className={styles.appForm}>
      <h2>Book an appointment</h2>
      <TextField id="Name" label="Full Name" className={styles.textInputs} />
      <div className={styles.inputWrapper}>
        <FormControl className={styles.item}>
          <InputLabel id="demo-simple-select-label">Select Doctor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Jon Doe</MenuItem>
            <MenuItem value={20}>James Tyler</MenuItem>
            <MenuItem value={30}>Harris White</MenuItem>
          </Select>
        </FormControl>
        <div className={styles.itemText}>M.B.B.S, Dentist</div>
      </div>
      <div className={styles.inputWrapper}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="app-date"
            label="Appointment Date"
            format="MM/dd/yyyy"
            value={selectedDate}
            //@ts-ignore
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "Selecte date",
            }}
            className={styles.dateItem}
          />
          <KeyboardTimePicker
            margin="normal"
            id="app-time"
            label="Appointment Time"
            value={selectedDate}
            //@ts-ignore
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
            className={styles.dateItem}
          />
        </MuiPickersUtilsProvider>
      </div>
      <button
        className={styles.bookBtn}
        // @ts-ignore
        onClick={Props.bookBtn}
      >
        Book Now
      </button>
    </div>
  );
};

export default AppForm;

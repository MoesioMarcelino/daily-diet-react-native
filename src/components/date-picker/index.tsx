import DateTimePicker from "@react-native-community/datetimepicker";
import { parseDate } from "@utils";
import { useState } from "react";
import { Keyboard } from "react-native";
import { Container, Label, Value, ValueContainer } from "./styles";

type DateTimePickerType = "date" | "time";

type DatePickerProps = {
  label: string;
  valueFormatted: string;
  mode: DateTimePickerType;
  value?: string;
  onChange?: (date?: Date) => void;
  edittable?: boolean;
};

export function DatePicker({
  label,
  onChange,
  mode = "date",
  value = new Date().toISOString(),
  valueFormatted,
  edittable = true,
  ...rest
}: DatePickerProps) {
  const [show, setShow] = useState(false);

  function transformDate() {
    try {
      return parseDate(value);
    } catch (error) {
      console.log(error);
      return new Date();
    }
  }

  function handleChange(selectedDate?: Date) {
    onChange && onChange(selectedDate);
    setShow(false);
  }

  function handlePressInput() {
    Keyboard.dismiss();
    setShow(true);
  }

  const dateValue = transformDate();

  return (
    <Container>
      {label && <Label>{label}</Label>}

      {show && (
        <DateTimePicker
          value={dateValue}
          mode={mode}
          is24Hour={true}
          onChange={(_, date) => handleChange(date)}
          {...rest}
        />
      )}

      <ValueContainer onPress={edittable ? handlePressInput : undefined}>
        <Value>{valueFormatted}</Value>
      </ValueContainer>
    </Container>
  );
}

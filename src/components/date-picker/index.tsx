import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Keyboard } from "react-native";
import { Container, Label, Value, ValueContainer } from "./styles";

type DateTimePickerType = "date" | "time";

type DatePickerProps = {
  label: string;
  valueFormatted: string;
  mode: DateTimePickerType;
  onChange: (date?: Date) => void;
};

export function DatePicker({
  label,
  onChange,
  mode = "date",
  valueFormatted,
  ...rest
}: DatePickerProps) {
  const [show, setShow] = useState(false);

  function handleChange(selectedDate?: Date) {
    onChange && onChange(selectedDate);
    setShow(false);
  }

  function handlePressInput() {
    Keyboard.dismiss();
    setShow(true);
  }

  return (
    <Container>
      {label && <Label>{label}</Label>}

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={mode}
          is24Hour={true}
          onChange={(_, date) => handleChange(date)}
          {...rest}
        />
      )}

      <ValueContainer onPress={handlePressInput}>
        <Value>{valueFormatted}</Value>
      </ValueContainer>
    </Container>
  );
}

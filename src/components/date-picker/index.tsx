import DateTimePicker, {
  DatePickerOptions,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Container, Label, Value, ValueContainer } from "./styles";

type DateTimePickerType = "date" | "time";

type DatePickerProps = DatePickerOptions & {
  label: string;
  valueFormatted: string;
  mode: DateTimePickerType;
};

export function DatePicker({
  label,
  value = new Date(),
  onChange,
  mode = "date",
  valueFormatted,
  ...rest
}: DatePickerProps) {
  const [show, setShow] = useState(false);

  function handleChange(event: DateTimePickerEvent, selectedDate?: Date) {
    onChange && onChange(event, selectedDate);
    setShow(false);
  }

  return (
    <Container>
      {label && <Label>{label}</Label>}

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={mode}
          is24Hour={true}
          onChange={handleChange}
          {...rest}
        />
      )}

      <ValueContainer onPress={() => setShow(true)}>
        <Value>{valueFormatted}</Value>
      </ValueContainer>
    </Container>
  );
}

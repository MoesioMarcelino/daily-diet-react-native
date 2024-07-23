import { ViewProps } from "react-native";
import {
  Container,
  EmptyContainer,
  GoBackIcon,
  GoBackTouchableArea,
  Title,
} from "./styles";

export type Variant = "success" | "failure" | "default" | "hidden";

type HeaderProps = {
  title?: string;
  variant: Variant;
  onGoBack?: () => void;
} & ViewProps;

export function Header(props: HeaderProps) {
  if (props.variant === "hidden") {
    return <EmptyContainer />;
  }
  return (
    <Container {...props}>
      <GoBackTouchableArea onPress={props.onGoBack}>
        <GoBackIcon variant={props.variant} />
      </GoBackTouchableArea>
      <Title>{props.title}</Title>
    </Container>
  );
}

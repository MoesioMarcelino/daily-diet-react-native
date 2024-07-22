import { ViewProps } from "react-native";
import { Container, Subtitle, Title } from "./styles";

type Variant = "primary" | "secondary" | "tertiary";

export type ReportCardProps = {
  title: number;
  subtitle: string;
  variant?: Variant;
} & ViewProps;

export function ReportCard({ title, subtitle, ...rest }: ReportCardProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}

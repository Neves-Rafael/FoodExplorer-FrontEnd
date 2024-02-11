import { Container } from "./style";
// eslint-disable-next-line react/prop-types
export function Input({ placeholder, ...rest }) {
  console.log(placeholder);
  return <Container placeholder={placeholder} {...rest}></Container>;
}

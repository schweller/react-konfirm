import * as React from "react";
import { forwardRef } from "./base";

interface Props {}

export const Button = forwardRef<Props, "button">(function Button(props, ref) {
  const { children } = props;
  return <button>{children}</button>;
});

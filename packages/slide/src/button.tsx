import * as React from "react";
import { forwardRef } from "./base";

export interface Props {}

export const Button = forwardRef<Props, "button">(function Button(props, ref) {
  const { children } = props;
  return <button>{children}</button>;
});

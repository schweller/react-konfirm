import * as React from "react";
import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { forwardRef } from "./base";

export interface Props {
  children?: React.ReactNode;
}

const DragCircleIcon = ({ x }: { x: MotionValue }) => (
  <svg
    viewBox="0 0 5 8"
    style={{
      fill: "#fff",
      stroke: "none",
      width: "10px",
      height: "16px",
      ...x,
    }}
  >
    <motion.polygon points="1.02941176 8 0 6.96296296 2.94117647 4 0 1.03703704 1.02941176 0 5 4" />
  </svg>
);

export const Button = forwardRef<Props, "button">(function Button(
  props: Props
) {
  const { children } = props;
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  );

  return (
    <motion.div
      style={{
        background,
        display: "table",
        width: "136px",
        height: "60px",
        borderRadius: "6px",
        cursor: "-webkit-grab",
        padding: "6px 8px",
      }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{
          x,
        }}
      >
        <DragCircleIcon x={x} />
      </motion.div>
    </motion.div>
  );
});

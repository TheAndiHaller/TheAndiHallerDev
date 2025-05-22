import React from "react";
import { IconName } from "boxicons";

interface IconProps {
  name: IconName;
  size?: String;
  color?: String;
}

const Icon: React.FC<IconProps> = ({ name, size = "24px", color = "" }) => {
  return <i className={`bx ${name}`} style={{ fontSize: size, color }} />;
};

export default Icon;
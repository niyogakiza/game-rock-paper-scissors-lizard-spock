import React from "react";
import RNText, { IRNTextProps } from "@freakycoder/react-native-custom-text";

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = "Helvetica",
  color = "#00008B",
  children,
  ...rest
}) => {
  return (
    <RNText fontFamily={fontFamily} color={color} bold {...rest}>
      {children}
    </RNText>
  );
};

export default TextWrapper;

import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";

export default interface Props {
  left: boolean;
  img: JSX.Element;
  subTitle: string;
  titleOne: string;
  titleTwo: string;
  titleThree: string;
  type: "underline" | "box" | "circle" | "highlight";
  width: Breakpoint;
}

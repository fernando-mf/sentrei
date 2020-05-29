export default interface Props {
  animate?: boolean;
  animationDelay?: number;
  animationDuration?: number;
  children: JSX.Element;
  color: "primary" | "secondary";
  initial?: boolean;
  type:
    | "underline"
    | "box"
    | "circle"
    | "highlight"
    | "strike-through"
    | "crossed-off";
}

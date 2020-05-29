export default interface Props {
  animate?: boolean;
  animationDelay?: number;
  animationDuration?: number;
  children: JSX.Element;
  color: "primary" | "secondary";
  type:
    | "underline"
    | "box"
    | "circle"
    | "highlight"
    | "strike-through"
    | "crossed-off";
}

import Space from "@sentrei/common/models/Space";

export default interface Props {
  space: Space.Get;
  userId: string;
  img: JSX.Element;
}

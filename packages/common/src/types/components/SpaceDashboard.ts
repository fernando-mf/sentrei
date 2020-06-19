import Space from "@sentrei/common/models/Space";

export default interface Props {
  data: Space.Snapshot[] | undefined;
  error: Error;
  userId: string;
  placeholderImg: JSX.Element;
}

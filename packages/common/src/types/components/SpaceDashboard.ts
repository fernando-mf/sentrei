import Space from "@sentrei/common/models/Space";

export default interface Props {
  data: Space.Snapshot[] | undefined;
  error: string;
  userId: string;
}

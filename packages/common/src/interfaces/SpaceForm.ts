import Space from "@sentrei/common/models/Space";

export default interface Props {
  data?: Space.Get;
  onSubmit: (data: Space.EditableFields) => void;
}

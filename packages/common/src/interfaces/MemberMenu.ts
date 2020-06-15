import Member from "@sentrei/common/models/Member";

export default interface Props {
  anchorEl?: Element | ((element: Element) => Element) | null | undefined;
  open: boolean;
  onClose?:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
  collection: Member.Collections;
  id: string;
  userId: string;
}

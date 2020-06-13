/* eslint-disable @typescript-eslint/no-explicit-any */

import Space from "@sentrei/common/models/Space";

export default interface Props {
  data?: Space.Get;
  onSubmit: (data: Record<string, any>) => void;
}

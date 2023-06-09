import { GenIcon, type IconBaseProps } from "../deps.ts";

export function MdDragHandle(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 9H4v2h16V9zM4 15h16v-2H4v2z"}}]})(props);
}
export default MdDragHandle;

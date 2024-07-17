import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function MdPadding(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 3v18h18V3H3zm16 16H5V5h14v14zM11 7h2v2h-2zM7 7h2v2H7zm8 0h2v2h-2z"},child:[]}]})(props);
}
export default MdPadding;

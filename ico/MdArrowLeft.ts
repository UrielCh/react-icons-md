import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function MdArrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m14 7-5 5 5 5V7z"}},{tag:"path",attr:{fill:"none",d:"M24 0v24H0V0h24z"},child:[]}]})(props);
}
export default MdArrowLeft;

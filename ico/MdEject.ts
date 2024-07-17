import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function MdEject(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 24V0h24v24H0z"}},{tag:"path",attr:{d:"M5 17h14v2H5zm7-12L5.33 15h13.34z"},child:[]}]})(props);
}
export default MdEject;

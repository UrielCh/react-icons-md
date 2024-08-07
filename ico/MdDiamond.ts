import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Diamond icon from Material Design icons
 * @module
 */
export function MdDiamond(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12.16 3h-.32L9.21 8.25h5.58zM16.46 8.25h5.16L19 3h-5.16zM21.38 9.75h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25 10.16 3H5L2.38 8.25z"},child:[]}]})(props);
}
export default MdDiamond;

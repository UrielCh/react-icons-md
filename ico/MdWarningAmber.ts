import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * WarningAmber icon from Material Design icons
 * @module
 */
export function MdWarningAmber(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z"},child:[]},{tag:"path",attr:{d:"M13 16h-2v2h2zM13 10h-2v5h2z"},child:[]}]})(props);
}
export default MdWarningAmber;

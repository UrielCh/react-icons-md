import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SignalCellular3Bar icon from Material Design icons
 * @module
 */
export function MdSignalCellular3Bar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{"fillOpacity":".3",d:"M2 22h20V2L2 22z"},child:[]},{tag:"path",attr:{d:"M17 7 2 22h15V7z"},child:[]}]})(props);
}
export default MdSignalCellular3Bar;

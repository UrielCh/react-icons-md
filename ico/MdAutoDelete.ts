import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AutoDelete icon from Material Design icons
 * @module
 */
export function MdAutoDelete(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15 2h-3.5l-1-1h-5l-1 1H1v2h14zM16 9c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},child:[]},{tag:"path",attr:{d:"M16.5 12H15v5l3.6 2.1.8-1.2-2.9-1.7z"},child:[]}]})(props);
}
export default MdAutoDelete;

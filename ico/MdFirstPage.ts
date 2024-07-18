import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FirstPage icon from Material Design icons
 * @module
 */
export function MdFirstPage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}},{tag:"path",attr:{fill:"none",d:"M24 24H0V0h24v24z"},child:[]}]})(props);
}
export default MdFirstPage;

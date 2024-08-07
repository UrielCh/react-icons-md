import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileUpload icon from Material Design icons
 * @module
 */
export function MdFileUpload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"},child:[]}]})(props);
}
export default MdFileUpload;

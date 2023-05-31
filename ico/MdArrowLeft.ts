import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function MdArrowLeft(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14 7l-5 5 5 5V7z"}},{tag:"path",attr:{fill:"none",d:"M24 0v24H0V0h24z"}}]})(props);
}
export default MdArrowLeft;
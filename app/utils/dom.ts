import { gsap } from "gsap";
import { MorphSVGPlugin, ScrollTrigger, SplitText } from "gsap/all";

export function transformH1ToH2(html: string): string {
  return html
    .replace(/<h1(\s[^>]*)?>/gi, "<h2$1>")
    .replace(/<\/h1>/gi, "</h2>");
}

export function stripStyleAttr(html: string): string {
  const styleRegex = /\s+style\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi;
  return html.replace(styleRegex, "");
}

export function registerGSAPPlugin() {
  gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger, SplitText);
}

export const splitText = (
  callback: (s: typeof SplitText) => void,
  ctx?: gsap.Context,
) => {
  document.fonts.ready.then(() => {
    ctx ? ctx.add(() => callback(SplitText)) : callback(SplitText);
  });
};

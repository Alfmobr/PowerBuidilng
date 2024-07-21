import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot } from './astro/server_DavV_YwI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://github.com/Alfmobr/PowerBuidilng.git");
const $$Btnlink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Btnlink;
  const { href, title, body, hoverStyle, widthMax } = Astro2.props;
  console.log("hoverStyle:", hoverStyle);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`link-card  ${widthMax}`, "class")} data-astro-cid-o5e7afhw> <h2 style="color: #333;  font-size: 20px; " data-astro-cid-o5e7afhw> ${title} </h2> <div class="container-btn-group" data-astro-cid-o5e7afhw> <a${addAttribute(`btn-add-product  ${hoverStyle} `, "class")}${addAttribute(href, "href")} data-astro-cid-o5e7afhw> ${body} ${renderSlot($$result, $$slots["default"])} </a> </div> </div> `;
}, "C:/Users/frede/Desktop/PortableGit/Gym/src/components/btnlink.astro", void 0);

export { $$Btnlink as $ };

import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DavV_YwI.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://github.com/Alfmobr/PowerBuidilng.git");
const $$500 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$500;
  const { error } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div>${error instanceof Error ? error.message : "Unknown error"}</div>`;
}, "C:/Users/frede/Desktop/PortableGit/Gym/src/pages/500.astro", void 0);

const $$file = "C:/Users/frede/Desktop/PortableGit/Gym/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$500,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

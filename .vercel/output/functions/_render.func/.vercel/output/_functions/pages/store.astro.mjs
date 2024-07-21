import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from '../chunks/astro/server_DavV_YwI.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Clw9_bYv.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://github.com/Alfmobr/PowerBuidilng.git");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { src, hrefW, href, title, body, price } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="link-card" data-astro-cid-dohjnao5> <div class="container-img" data-astro-cid-dohjnao5> <img${addAttribute(src, "src")} alt="" data-astro-cid-dohjnao5> </div> <h2 data-astro-cid-dohjnao5> ${title} </h2> <p data-astro-cid-dohjnao5> ${body} </p> <span data-astro-cid-dohjnao5> Price ${price} <span class="red" data-astro-cid-dohjnao5>No Undefined</span> </span> <div class="container-btn-group" data-astro-cid-dohjnao5> <a style="pointer-events: none;" class="btn-add-product"${addAttribute(href, "href")} data-astro-cid-dohjnao5>
Añadir
<svg class="icon icon-tabler icon-tabler-shopping-bag-plus" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-dohjnao5> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-dohjnao5></path> <path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708" data-astro-cid-dohjnao5></path> <path d="M16 19h6" data-astro-cid-dohjnao5></path> <path d="M19 16v6" data-astro-cid-dohjnao5></path> <path d="M9 11v-5a3 3 0 0 1 6 0v5" data-astro-cid-dohjnao5></path> </svg> </a> <a class="whatsapp-button"${addAttribute(hrefW, "href")} data-astro-cid-dohjnao5>
WahatsApp
<svg class="icon icon-tabler icon-tabler-brand-whatsapp" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-dohjnao5> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-dohjnao5></path> <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" data-astro-cid-dohjnao5></path> <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" data-astro-cid-dohjnao5></path> </svg> </a> </div> </div> `;
}, "C:/Users/frede/Desktop/PortableGit/Gym/src/components/Card.astro", void 0);

const $$Astro = createAstro("https://github.com/Alfmobr/PowerBuidilng.git");
const $$Carrusel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carrusel;
  const { src, src1, src2, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carrusel" data-astro-cid-ugqtgxbr> <div class="conteiner-all" data-astro-cid-ugqtgxbr> <input type="radio" id="1Car" name="slideImg" hidden data-astro-cid-ugqtgxbr> <input type="radio" id="2Car" name="slideImg" hidden data-astro-cid-ugqtgxbr> <input type="radio" id="3Car" name="slideImg" hidden data-astro-cid-ugqtgxbr> <div class="slide" data-astro-cid-ugqtgxbr> <div class="SlideItem" data-astro-cid-ugqtgxbr> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")} data-astro-cid-ugqtgxbr> <img${addAttribute(src1, "src")}${addAttribute(alt, "alt")} data-astro-cid-ugqtgxbr> <img${addAttribute(src2, "src")}${addAttribute(alt, "alt")} data-astro-cid-ugqtgxbr> <img${addAttribute(src2, "src")}${addAttribute(alt, "alt")} data-astro-cid-ugqtgxbr> <img${addAttribute(src2, "src")}${addAttribute(alt, "alt")} data-astro-cid-ugqtgxbr> </div> </div> </div>  </div>`;
}, "C:/Users/frede/Desktop/PortableGit/Gym/src/components/carrusel.astro", void 0);

const $$BtnShopCart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="#" class="shopping-cart" target="_blank" data-astro-cid-tysgl5ku> <svg class="icon icon-tabler icon-tabler-shopping-cart" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-tysgl5ku> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-tysgl5ku></path> <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" data-astro-cid-tysgl5ku></path> <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" data-astro-cid-tysgl5ku></path> <path d="M17 17h-11v-14h-2" data-astro-cid-tysgl5ku></path> <path d="M6 5l14 1l-1 7h-13" data-astro-cid-tysgl5ku></path> </svg> </a>  `;
}, "C:/Users/frede/Desktop/PortableGit/Gym/src/components/btnShopCart.astro", void 0);

const $$Store = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tienda Power Buildign ", "data-astro-cid-gw3zcr6g": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BtnShoppingCart", $$BtnShopCart, { "data-astro-cid-gw3zcr6g": true })} ${maybeRenderHead()}<section class="degradado-black-white" data-astro-cid-gw3zcr6g> <div class="container-b-t" data-astro-cid-gw3zcr6g> <div class="banner-destok" data-astro-cid-gw3zcr6g> ${renderComponent($$result2, "Carrusel", $$Carrusel, { "src": "/public/img/banner-store.webp", "src1": "/public/img/banner-store.webp", "src2": "/public/img/banner-store.webp", "src2": "/public/img/banner-store.webp", "src2": "/public/img/banner-store.webp", "alt": "banner", "data-astro-cid-gw3zcr6g": true })} </div> </div> <div class="tittle" data-astro-cid-gw3zcr6g> <h1 data-astro-cid-gw3zcr6g>Power Building STORE</h1> </div> </section> <section class="container-card" data-astro-cid-gw3zcr6g> <div class="item-group" data-astro-cid-gw3zcr6g> ${renderComponent($$result2, "Card", $$Card, { "src": "/public/img/catalogo/Gold-STANDARD-WHEY.webp", "href": "", "hrefW": "https://wa.me/50589600977", "title": "GOLD STANDARD WHEY 100%", "body": " 'Gold Standardd Whey' contiene 2lb de Proteina - 24 gramos de prote\xEDna por servicio\xB3 - 5.5 gramos de BCAA\xB4s ", "price": "", "data-astro-cid-gw3zcr6g": true })} ${renderComponent($$result2, "Card", $$Card, { "src": "/public/img/catalogo/bpi-SPORT-WHEY-HD.webp", "href": "", "hrefW": "https://wa.me/50589600977", "title": "BPI SPORT WHEY HD", "body": "Ayuda a la recuperacion muscular. Previene el catabolismo. Mejora la construccion muscular. 25g de proteinas.", "price": "", "data-astro-cid-gw3zcr6g": true })} ${renderComponent($$result2, "Card", $$Card, { "src": "/public/img/catalogo/ISO-100.webp", "href": "", "hrefW": "https://wa.me/50589600977", "title": "ISO 100 HYDROLIZED", "body": "Powder whey protein insolate, 25g de pronteina de 1.34lb/610g", "price": "", "data-astro-cid-gw3zcr6g": true })} ${renderComponent($$result2, "Card", $$Card, { "src": "/public/img/catalogo/ISO-PHORM.webp", "href": "", "hrefW": "https://wa.me/50589600977", "title": "ISO PHORM", "body": " Es una prote\xEDna de suero de leche hidrolizada de alta calidad. Cada porci\xF3n contiene 25g de prote\xEDna y ayudar a alcanzar las necesidades diarias de prote\xEDnas.", "price": "", "data-astro-cid-gw3zcr6g": true })} ${renderComponent($$result2, "Card", $$Card, { "src": "/public/img/catalogo/METANDROSTENOLONA.webp", "href": "", "hrefW": "https://wa.me/50589600977", "title": "METANDROSTENLONA", "body": " se caracteriza por poseer propiedades anabolizantes y androg\xE9nicas, contiene 100 tab de 10 mg,  ayuda a la ganancias muscular rapidamente ", "price": "", "data-astro-cid-gw3zcr6g": true })} ${renderComponent($$result2, "Card", $$Card, { "src": "/public/img/catalogo/OXANDROPLEX.webp", "href": "", "hrefW": "https://wa.me/50589600977", "title": "OXANDROPLEX", "body": "Aumento de la masa muscular: 60 tab de 10 mg  lo que conduce a un mayor crecimiento muscular , p\xE9rdida de grasa y mejora del rendimiento f\xEDsico.", "price": "", "data-astro-cid-gw3zcr6g": true })} ${renderComponent($$result2, "Card", $$Card, { "src": "/public/img/catalogo/PERFECT-BODY.webp", "href": "", "hrefW": "https://wa.me/50589600977", "title": "PERFECT BOOtY", "body": "Ideal para el incremento de masa muscular en mujeres, no provoca viralizaci\xF3n, ocupado por muchas atletas para incrementar la zona del Gl\xFAteo y de tus piernas", "price": "", "data-astro-cid-gw3zcr6g": true })} ${renderComponent($$result2, "Card", $$Card, { "src": "/public/img/catalogo/TESTEX-Depot-250.webp", "href": "", "hrefW": "https://wa.me/50589600977", "title": "TESTEX DEPOT 250", "body": "Solucion inyectable 2ml: Mejorar el rendimiento en disciplinas de fuerza y potencia, gracias a su efecto positivo sobre las ganancias en fuerza, hipertrofia, '", "price": "", "data-astro-cid-gw3zcr6g": true })} </div> </section>  ` })}`;
}, "C:/Users/frede/Desktop/PortableGit/Gym/src/pages/store.astro", void 0);

const $$file = "C:/Users/frede/Desktop/PortableGit/Gym/src/pages/store.astro";
const $$url = "/store";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Store,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

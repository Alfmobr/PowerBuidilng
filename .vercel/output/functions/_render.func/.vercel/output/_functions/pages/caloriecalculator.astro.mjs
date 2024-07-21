import { a as createComponent, r as renderTemplate, m as maybeRenderHead, c as createAstro, e as renderComponent } from '../chunks/astro/server_DavV_YwI.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Clw9_bYv.mjs';
import 'clsx';
/* empty css                                             */
export { renderers } from '../renderers.mjs';

const $$Calculador = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<body data-astro-cid-c4udnvvi> <div class="container-all" data-astro-cid-c4udnvvi> <div class="container" data-astro-cid-c4udnvvi> <h1 data-astro-cid-c4udnvvi>Calculadora de Calorías Diarias</h1> <form id="calorieForm" data-astro-cid-c4udnvvi> <div class="form-group" data-astro-cid-c4udnvvi> <label for="age" data-astro-cid-c4udnvvi>Edad:</label> <input type="number" id="age" required data-astro-cid-c4udnvvi> </div> <div class="form-group" data-astro-cid-c4udnvvi> <label for="gender" data-astro-cid-c4udnvvi>Sexo:</label> <select id="gender" required data-astro-cid-c4udnvvi> <option value="male" data-astro-cid-c4udnvvi>Hombre</option> <option value="female" data-astro-cid-c4udnvvi>Mujer</option> </select> </div> <div class="form-group" data-astro-cid-c4udnvvi> <label for="weight" data-astro-cid-c4udnvvi>Peso (kg):</label> <input placeholder="P.ej: 70" type="number" id="weight" required data-astro-cid-c4udnvvi> </div> <div class="form-group" data-astro-cid-c4udnvvi> <label for="height" data-astro-cid-c4udnvvi>Altura (cm):</label> <input placeholder="P.ej.: 150" type="number" id="height" required data-astro-cid-c4udnvvi> </div> <div class="form-group" data-astro-cid-c4udnvvi> <label for="activity" data-astro-cid-c4udnvvi>Nivel de actividad:</label> <select id="activity" required data-astro-cid-c4udnvvi> <option value="sedentary" data-astro-cid-c4udnvvi>Sedentario</option> <option value="light" data-astro-cid-c4udnvvi>Ligero</option> <option value="moderate" data-astro-cid-c4udnvvi>Moderado</option> <option value="active" data-astro-cid-c4udnvvi>Activo</option> <option value="very_active" data-astro-cid-c4udnvvi>Muy activo</option> </select> </div> <button type="submit" data-astro-cid-c4udnvvi>Calcular</button> </form> <div id="result" class="result-container" data-astro-cid-c4udnvvi> <p id="maintain-weight" data-astro-cid-c4udnvvi></p> <p id="lose-weight" data-astro-cid-c4udnvvi></p> <p id="gain-weight" data-astro-cid-c4udnvvi></p> </div> </div> </div>  </body>`;
}, "C:/Users/frede/Desktop/PortableGit/Gym/src/components/calculador.astro", void 0);

const $$Astro = createAstro("https://github.com/Alfmobr/PowerBuidilng.git");
const $$CalorieCalculator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CalorieCalculator;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculdora de calorias", "data-astro-cid-daxr43lb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-daxr43lb> <div class="div" data-astro-cid-daxr43lb> ${renderComponent($$result2, "Calculadora", $$Calculador, { "data-astro-cid-daxr43lb": true })} </div> </section> ` })} `;
}, "C:/Users/frede/Desktop/PortableGit/Gym/src/pages/CalorieCalculator.astro", void 0);

const $$file = "C:/Users/frede/Desktop/PortableGit/Gym/src/pages/CalorieCalculator.astro";
const $$url = "/CalorieCalculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CalorieCalculator,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

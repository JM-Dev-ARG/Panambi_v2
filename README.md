# 🌐 Dalotto Asesores – Sitio Web

Sitio web institucional desarrollado para **Dalotto Asesores**, un equipo especializado en seguros y asesoría financiera. Este proyecto fue creado con [Astro](https://astro.build) y desplegado en [Netlify](https://netlify.com), con foco en velocidad, accesibilidad y animaciones modernas.

![Captura del sitio](https://dalotto-preview.netlify.app/img/captura.png) <!-- Podés reemplazar esto por una captura real o quitarlo -->

---

## 🚀 Tecnologías utilizadas

- [Astro 5](https://docs.astro.build) – Framework para generar sitios rápidos y modernos
- [Tailwind CSS](https://tailwindcss.com/) – Utilidades para estilos rápidos y responsivos
- [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/) – Animaciones al hacer scroll
- [SweetAlert2](https://sweetalert2.github.io/) – Alertas visuales y personalizadas
- [Netlify](https://netlify.com) – Plataforma de hosting y CI/CD
- Deploy adaptado vía [`@astrojs/netlify`](https://docs.astro.build/en/guides/integrations-guide/netlify/)

---

## 📁 Estructura del proyecto

```text
/
├── public/ # Recursos estáticos
├── src/
│ ├── components/ # Componentes reutilizables
│ ├── layouts/ # Plantillas base
│ ├── pages/ # Páginas principales (routes)
│ └── styles/ # Estilos globales
├── astro.config.mjs # Configuración de Astro
├── tailwind.config.js # Configuración de Tailwind
├── package.json # Dependencias y scripts
└── netlify.toml # Configuración de Netlify
```

---

## 🛠️ Comandos de desarrollo

Desde la raíz del proyecto, podés usar los siguientes scripts:

| Comando           | Acción                                              |
| ----------------- | --------------------------------------------------- |
| `npm install`     | Instala las dependencias del proyecto               |
| `npm run dev`     | Inicia el servidor de desarrollo (`localhost:4321`) |
| `npm run build`   | Genera el sitio listo para producción en `/dist`    |
| `npm run preview` | Previsualiza el sitio generado en local             |
| `npm run astro`   | Ejecuta comandos específicos de Astro               |

---

## 🌍 Deploy

El sitio está desplegado automáticamente con [Netlify](https://netlify.com), usando la integración oficial de Astro.
Aunque paralelamente se desplego en el dominio y servidor particular del cliente haciendo que la pagina sea todo client side, debido a que su servidor no soporta acciones de server side rendering.  
La configuración del build está definida en `netlify.toml`.

---

## 📸 Demo

🔗 [Ver sitio en producción](https://dalottoasesores.com)

---

## 📄 Licencia

Este proyecto es privado y fue desarrollado por [Juan Manuel Martínez Togni](https://github.com/JM-Dev-ARG) para **Dalotto Asesores**.

<!-- Si querés agregar una licencia MIT u otra, avisame y lo adaptamos -->

---

## 🙌 Agradecimientos

- A [Astro](https://astro.build) por hacer el desarrollo web más simple y rápido.
- A la comunidad de [Tailwind CSS](https://tailwindcss.com) por su enfoque moderno de estilos.

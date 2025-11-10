# 🚀 Panambi - Sitio Web Institucional

Este es el repositorio del sitio web institucional de **Panambi**, una agencia de marketing digital especializada en desarrollo web, diseño audiovisual y consultoría. El proyecto fue construido con [Astro](https://astro.build) y desplegado en [Netlify](https://www.netlify.com/), enfocado en ofrecer una experiencia de usuario veloz, accesible y con un diseño moderno.

![Captura del sitio](https://panambi.net/public/img/panambiCaptura.png)

---

## ✨ Tecnologías Utilizadas

- **[Astro](https://astro.build/):** Framework web para construir sitios rápidos y optimizados.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de CSS para un diseño rápido y responsivo.
- **[AOS (Animate on Scroll)](https://michalsnik.github.io/aos/):** Para animaciones sutiles al hacer scroll.
- **[SweetAlert2](https://sweetalert2.github.io/):** Alertas personalizadas para mejorar la interacción del usuario.
- **[Netlify](https://www.netlify.com/):** Plataforma de hosting y despliegue continuo (CI/CD).

---

## 📁 Estructura del Proyecto

La estructura del proyecto sigue las convenciones de Astro para una organización clara y mantenible.

```
/
├── public/              # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── fuentes/
│   └── img/
├── src/
│   ├── components/      # Componentes reutilizables de Astro.
│   ├── data/            # Archivos JSON con datos para componentes y páginas.
│   ├── layouts/         # Plantillas de página.
│   ├── pages/           # Rutas y páginas del sitio.
│   └── styles/          # Estilos globales.
├── astro.config.mjs     # Configuración principal de Astro.
├── tailwind.config.cjs  # Configuración de Tailwind CSS.
├── package.json         # Dependencias y scripts del proyecto.
└── tsconfig.json        # Configuración de TypeScript.
```

---

## 🛠️ Comandos Disponibles

Para trabajar con el proyecto, utiliza los siguientes comandos desde la raíz:

| Comando        | Acción                                                  |
| -------------- | ------------------------------------------------------- |
| `pnpm install` | Instala todas las dependencias del proyecto.            |
| `pnpm dev`     | Inicia el servidor de desarrollo en `localhost:4321`.   |
| `pnpm build`   | Compila el sitio para producción en la carpeta `dist/`. |
| `pnpm preview` | Previsualiza la compilación de producción localmente.   |

---

## 🌍 Despliegue

El sitio se despliega automáticamente en [Netlify](https://www.netlify.com/) cada vez que se realiza un push a la rama `main`. La configuración de despliegue está gestionada a través de la integración de Astro con Netlify.

---

## 🔗 Demo

Puedes ver el sitio en producción en el siguiente enlace:

[**Ver sitio en vivo**](https://panambi.net/)

---

## 📄 Licencia

Este proyecto es de código cerrado y fue desarrollado por [Juan Manuel Martínez Togni](https://github.com/JM-Dev-ARG) para **Panambi**.

import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import formData from "form-data";
import Mailgun from "mailgun.js";

export const server = {
  sendMail: defineAction({
    input: z.object({
      nombre: z.string(),
      motivo: z.string(),
      email: z.string().email(),
      telefono: z.string().optional(),
      nombreNegocio: z.string().optional(),
      mensaje: z.string().optional(),
      presupuesto: z.string().optional(),
    }),
    async handler(input) {
      const mailgun = new Mailgun(formData);

      const client = mailgun.client({
        username: "api",
        key: import.meta.env.MAILGUN_API_KEY, // API Key desde Mailgun
      });

      try {
        const result = await client.messages.create(
          import.meta.env.MAILGUN_DOMAIN,
          {
            from: `Contacto Web <noreply@${import.meta.env.MAILGUN_DOMAIN}>`,
            to: `${import.meta.env.MAILGUN_EMAIL_DESTINO}`,
            subject: `Nuevo contacto desde la pagina web`,
            text: `Los datos del formulario son:
        Nombre: ${input.nombre}
        Motivo del contacto: ${input.motivo}
        Email: ${input.email}
        Telefono: ${input.telefono}
        Nombre del Negocio: ${input.nombreNegocio}
        Mensaje: ${input.mensaje}
        Presupuesto: ${input.presupuesto}`,
          },
        );

        return { result, success: true };
      } catch (error) {
        console.error("Error al enviar el correo:", error);
        return error;
      }
    },
  }),
};

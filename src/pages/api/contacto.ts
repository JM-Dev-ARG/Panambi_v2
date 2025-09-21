import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  try {
    // Aquí podrías enviar los datos a Mailgun, Nodemailer, o lo que uses

    return new Response(JSON.stringify({ message: "Formulario recibido ✅" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error interno del servidor ❌" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};

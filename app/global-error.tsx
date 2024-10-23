"use client";

import NextError from "next/error";

export default function GlobalError() {
  // Si necesitas hacer algo con el error, puedes hacerlo aquí.

  return (
    <html>
      <body>
        {/* `NextError` es el componente de error predeterminado de Next.js. Su definición de tipo
        requiere una prop `statusCode`. Sin embargo, como el enrutador de la app
        no expone códigos de estado para errores, simplemente pasamos 0 para renderizar un
        mensaje de error genérico. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}

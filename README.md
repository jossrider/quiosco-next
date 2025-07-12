## Getting Started

Primero, para arrancar el servidor:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pasos para la sincronizacion de tablas y datos de prueba
1. Verificar las credenciales el archivo .env
2. Ejecutar `npx prisma db push` para sincronizar el esquema de prisma con la BD
3. Ejecutar `npx prisma db seed` para cargar datos de prueba

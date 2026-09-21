# Para Eelin, con amor 💛

Una experiencia interactiva hecha con React y Vite para el Día de las Flores Amarillas.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre la dirección que muestra Vite (normalmente `http://localhost:5173`). Para una comprobación de producción:

```bash
npm run build
npm run preview
```

## Desplegar en Vercel

Importa este repositorio en Vercel y deja los valores detectados por defecto: framework **Vite**, comando de build `npm run build`, y directorio de salida `dist`. No se necesitan variables de entorno.

El texto de la carta está aislado en `src/content/letter.js` para poder modificarlo sin tocar la experiencia visual.

# Alertas por Telegram · Guía de instalación

Este Worker de Cloudflare hace que Flick Super Intelligence avise por Telegram **aunque la página esté cerrada**:

- recibe los mensajes del bot (`/start`, `/list`, `/stop`, `/help`);
- guarda la watchlist de cada usuario conectado en una base de datos D1;
- cada 5 minutos revisa precios y riesgos y manda las alertas: precio, caída de liquidez, ventas masivas y chequeos de contrato que empeoran.

Todo entra en el **plan gratis** de Cloudflare: Workers, D1 y tareas programadas.

---

## Lo que necesitás

- Tu cuenta de **Telegram**.
- Tu cuenta de **Cloudflare**, la misma de la página.
- **Node.js** instalado. Para comprobarlo, en la terminal de VS Code ejecutá `node -v`; si no aparece un número de versión, instalalo desde nodejs.org.

## Paso 1 · Crear el bot en Telegram

1. En Telegram, buscá **@BotFather** y abrí el chat.
2. Mandá `/newbot`.
3. Elegí un nombre (por ejemplo `Flick Super Intelligence`).
4. Elegí un usuario que termine en `bot` (por ejemplo `FlickSIbot`).
5. BotFather te da un **token** del tipo `123456789:AAH...`. Guardalo.

> ⚠️ El token es secreto: no lo compartas ni lo subas a GitHub.

## Paso 2 · Iniciar sesión en Cloudflare desde la terminal

En VS Code, abrí la terminal dentro de la carpeta del proyecto y ejecutá:

```bash
cd worker
npx wrangler login
```

Se abre el navegador para que autorices el acceso a tu cuenta de Cloudflare.

## Paso 3 · Crear la base de datos

```bash
npx wrangler d1 create flick-alerts
```

El comando muestra un `database_id`. Copialo y pegalo en `wrangler.toml`, en la línea:

```toml
database_id = "REPLACE_WITH_YOUR_DATABASE_ID"
```

Después creá las tablas:

```bash
npx wrangler d1 execute flick-alerts --remote --file=schema.sql
```

## Paso 4 · Cargar los secretos

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
```

Cuando lo pida, pegá el token de BotFather.

```bash
npx wrangler secret put TELEGRAM_WEBHOOK_SECRET
```

Cuando lo pida, inventá una contraseña larga: solo letras, números, `-` y `_`, sin espacios. Por ejemplo `flick-hook-8f3k2m9q7x`. Guardala, la usás en el paso 6.

## Paso 5 · Publicar el Worker

```bash
npx wrangler deploy
```

Al final aparece la dirección del Worker, por ejemplo:

```
https://flick-alerts.TU-SUBDOMINIO.workers.dev
```

## Paso 6 · Conectar el bot con el Worker

Abrí en el navegador esta dirección, cambiando las dos partes:

```
https://flick-alerts.TU-SUBDOMINIO.workers.dev/setup?key=TU_TELEGRAM_WEBHOOK_SECRET
```

Tiene que responder algo como `{"webhook":{"ok":true,...},"bot":"FlickSIbot"}`.

## Paso 7 · Activarlo en la página

En `index.html` completá estas dos líneas:

```html
<meta name="flick-alerts-api" content="https://flick-alerts.TU-SUBDOMINIO.workers.dev">
<meta name="flick-telegram-bot" content="FlickSIbot">
```

Usá el usuario del bot **sin @**. Después subí el cambio a `main`. A partir de ahí, en la pestaña **Watchlist** aparece el botón **"Conectar Telegram"**.

---

## Cómo se usa

1. En Flick, seguí tokens con ☆ Seguir.
2. Abrí la pestaña **Watchlist** y tocá **Conectar Telegram**.
3. Se abre el bot: tocá **Iniciar**. La página muestra "Telegram conectado".
4. Desde ese momento, cada cambio en la watchlist se sincroniza solo.

Comandos del bot:
- `/list`: tokens que seguís.
- `/stop`: apaga las alertas y borra tus datos.
- `/help`: explica cómo funcionan las alertas.

## Si la página no es flick-app.pages.dev

En `wrangler.toml` cambiá `SITE_URL` y `ALLOWED_ORIGINS`. Si son varias direcciones, separalas con comas en `ALLOWED_ORIGINS`. Después ejecutá de nuevo `npx wrangler deploy`.

## Límites del plan gratis

- Cada revisión hace como máximo 45 consultas externas:
  - DexScreener, hasta 30 tokens por consulta;
  - GoPlus, hasta 5 tokens por revisión, cada uno cada 30 minutos;
  - un mensaje de Telegram por usuario con alertas.
- Alcanza para cientos de usuarios. Si crece mucho, el plan pago de Workers (USD 5/mes) sube los límites.
- Los navegadores que empiezan la conexión y nunca tocan "Iniciar" se borran solos después de 1 día.
- Si un usuario bloquea el bot, sus datos se borran en la siguiente revisión.

## Ver qué está pasando

```bash
npx wrangler tail
```

Muestra en vivo los registros del Worker: alertas, errores y consultas.

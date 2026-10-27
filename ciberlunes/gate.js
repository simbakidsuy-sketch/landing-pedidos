// Ventana de la landing Ciberlunes (hora de Uruguay, UTC-3):
//   abre:  domingo 01/11/2026 a las 20:00
//   cierra: domingo 08/11/2026 a las 23:59:59
// Para revisarla antes de que abra (o después de que cierre), agregar ?preview=1 al link.
const CIBER_START = new Date("2026-11-01T20:00:00-03:00");
const CIBER_END = new Date("2026-11-09T00:00:00-03:00");

const CIBER_PREVIEW = new URLSearchParams(location.search).has("preview");

// Usa la hora del servidor (header Date) para no depender del reloj del celular del cliente.
async function ciberStatus() {
  if (CIBER_PREVIEW) return "open";
  let now = new Date();
  try {
    const r = await fetch(location.pathname, { method: "HEAD", cache: "no-store" });
    const serverDate = r.headers.get("Date");
    if (serverDate) now = new Date(serverDate);
  } catch (e) {}
  if (now < CIBER_START) return "before";
  if (now >= CIBER_END) return "after";
  return "open";
}

function ciberClosedHTML(status) {
  if (status === "before") {
    return `<div class="hero"><h1>🔥 Ciberlunes SIMBA</h1><p>El Ciberlunes todavía no comenzó. ¡Volvé muy pronto, te esperan descuentos increíbles!</p></div>`;
  }
  return `<div class="hero"><h1>Ciberlunes finalizado</h1><p>El Ciberlunes ya terminó — ¡gracias por la increíble respuesta! Seguinos en Instagram para enterarte de las próximas promos.</p></div>`;
}

// Para que, en modo preview, los links entre páginas conserven el parámetro.
function ciberLink(url) {
  if (!CIBER_PREVIEW) return url;
  return url + (url.includes("?") ? "&" : "?") + "preview=1";
}

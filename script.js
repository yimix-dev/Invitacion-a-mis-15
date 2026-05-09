const btn = document.getElementById("playBtn");
const audio = document.getElementById("audio");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "Pausar música ";
  } else {
    audio.pause();
    btn.textContent = "Escucha la magia de mis 15 ";
  }
});

const fechaObjetivo = new Date(2026, 10, 4, 0, 0, 0);

function actualizarContador() {
  const ahora = Date.now();
  const diferencia = fechaObjetivo.getTime() - ahora;

  if (diferencia <= 0) {
    document.getElementById("contador").innerHTML = "Llegó el día";
    return;
  }

  const dias = Math.floor(diferencia / 86400000);
  const horas = Math.floor((diferencia / 3600000) % 24);
  const minutos = Math.floor((diferencia / 60000) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// Datos del evento
const titulo = "15 años de Ruby";
const descripcion = "XV de Ruby, acompáñanos en este día tan especial";
const ubicacion = "Mi casa";

const inicio = new Date(2026, 10, 4, 18, 0); // Mes 10 = noviembre
const fin = new Date(2026, 10, 4, 19, 0);

// Función para formatear fechas tipo Google Calendar y .ics
function formatear(fecha) {
  const yyyy = fecha.getFullYear();
  const mm = String(fecha.getMonth() + 1).padStart(2, "0");
  const dd = String(fecha.getDate()).padStart(2, "0");
  const hh = String(fecha.getHours()).padStart(2, "0");
  const min = String(fecha.getMinutes()).padStart(2, "0");
  const ss = "00";
  return `${yyyy}${mm}${dd}T${hh}${min}${ss}`;
}

// Google Calendar
document.getElementById("googleBtn").addEventListener("click", () => {
  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    titulo
  )}&dates=${formatear(inicio)}/${formatear(fin)}&details=${encodeURIComponent(
    descripcion
  )}&location=${encodeURIComponent(ubicacion)}`;
  window.open(url, "_blank");
});

// Archivo .ics para iPhone/Outlook
document.getElementById("icsLink").addEventListener("click", (e) => {
  e.preventDefault();

  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Mi Evento//15 años de Ruby//ES
BEGIN:VEVENT
UID:${Date.now()}@misitio.com
DTSTAMP:${formatear(new Date())}
DTSTART:${formatear(inicio)}
DTEND:${formatear(fin)}
SUMMARY:${titulo}
DESCRIPTION:${descripcion}
LOCATION:${ubicacion}
END:VEVENT
END:VCALENDAR
  `.trim();

  const blob = new Blob([icsContent], { type: "text/calendar" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "evento.ics";
  link.click();
});

const boton = document.getElementById("boton-confirmacion");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.classList.add("activo");

  setTimeout(() => {
    mensaje.classList.remove("activo");
  }, 3000); // 3 segundos
});
// aqui
// Ubicación
const btnUbicacion = document.getElementById("btnUbicacion");
const menuUbicacion = document.getElementById("opciones-mapas");
let autoCloseTimer = null;

btnUbicacion.addEventListener("click", (e) => {
  e.stopPropagation();
  const estaAbierto = menuUbicacion.classList.contains("abierto");

  if (estaAbierto) {
    cerrarMenu();
  } else {
    abrirMenu();
  }
});

document.addEventListener("click", () => {
  if (menuUbicacion.classList.contains("abierto")) cerrarMenu();
});

menuUbicacion.addEventListener("click", (e) => e.stopPropagation());

function abrirMenu() {
  menuUbicacion.classList.add("abierto");
  clearTimeout(autoCloseTimer);
  autoCloseTimer = setTimeout(() => {
    cerrarMenu();
  }, 5000);
}

function cerrarMenu() {
  menuUbicacion.classList.remove("abierto");
  clearTimeout(autoCloseTimer);
}
// aqui;

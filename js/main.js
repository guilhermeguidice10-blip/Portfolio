const raiz = document.documentElement;
const botaoTema = document.getElementById("tema");

function aplicarTema(tema) {
  raiz.setAttribute("data-tema", tema);
  botaoTema.textContent = tema === "escuro" ? "☀️" : "🌙";
}

function temaSalvo() {
  try {
    return localStorage.getItem("tema");
  } catch (e) {
    return null;
  }
}

const preferenciaDoSistema = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "escuro"
  : "claro";

aplicarTema(temaSalvo() || preferenciaDoSistema);

botaoTema.addEventListener("click", () => {
  const novo = raiz.getAttribute("data-tema") === "escuro" ? "claro" : "escuro";
  aplicarTema(novo);
  try {
    localStorage.setItem("tema", novo);
  } catch (e) {
    /* armazenamento indisponível: ignora */
  }
});

document.getElementById("ano").textContent = new Date().getFullYear();

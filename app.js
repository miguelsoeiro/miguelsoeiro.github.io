(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (t) =>
    String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Hero
  $("h-titulo").textContent = S.titulo;
  $("h-nome").textContent = S.nome;
  $("h-resumo").textContent = S.resumo;
  $("h-ordem").textContent = S.ordem || "";
  $("h-links").innerHTML = [
    S.links.linkedin && `<a class="btn primary" href="${esc(S.links.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
    S.links.empresa && `<a class="btn" href="${esc(S.links.empresa)}" target="_blank" rel="noopener">Transparent Reasons</a>`,
    S.links.email && `<a class="btn" href="${esc(S.links.email)}">Contacto</a>`,
  ].filter(Boolean).join("");

  // Linhas temporais
  const timeline = (el, items) => {
    $(el).innerHTML = items.map((i) => `
      <li>
        <div class="tl-periodo">${esc(i.periodo)}</div>
        <div class="tl-titulo">${esc(i.titulo)}</div>
        <div class="tl-local">${esc(i.local)}</div>
        ${i.texto ? `<p class="tl-texto">${esc(i.texto)}</p>` : ""}
      </li>`).join("");
  };
  timeline("tl-carreira", window.CARREIRA);
  timeline("tl-academico", window.ACADEMICO);

  const fmt = (iso) => {
    const d = new Date(iso);
    return isNaN(d) ? "" : d.toLocaleDateString("pt-PT", { year: "numeric", month: "short" });
  };
  const byDate = (a, b) => new Date(b.data) - new Date(a.data);

  // Opinião com filtros
  const opiniao = [...window.OPINIAO].sort(byDate);
  const tipos = ["Todos", ...new Set(opiniao.map((o) => o.tipo).filter(Boolean))];
  let filtro = "Todos";
  const renderOpiniao = () => {
    $("f-opiniao").innerHTML = tipos.map((t) =>
      `<button class="chip" aria-pressed="${t === filtro}" data-t="${esc(t)}">${esc(t)}</button>`).join("");
    $("l-opiniao").innerHTML = opiniao
      .filter((o) => filtro === "Todos" || o.tipo === filtro)
      .map((o) => `
        <li><a href="${esc(o.url)}" target="_blank" rel="noopener">
          <span class="l-data">${fmt(o.data)}</span>
          <span class="l-titulo">${esc(o.titulo)}<span class="l-meta">${esc(o.meio)}</span></span>
          <span class="l-tag">${esc(o.tipo)}</span>
        </a></li>`).join("");
  };
  $("f-opiniao").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) { filtro = b.dataset.t; renderOpiniao(); }
  });
  renderOpiniao();

  // Vídeos
  $("l-videos").innerHTML = [...window.VIDEOS].sort(byDate).map((v) => `
    <a class="card" href="${esc(v.url)}" target="_blank" rel="noopener">
      <div class="thumb">${v.youtube
        ? `<img loading="lazy" alt="" src="https://i.ytimg.com/vi/${esc(v.youtube)}/hqdefault.jpg">`
        : "▶"}</div>
      <div class="card-body"><strong>${esc(v.titulo)}</strong><span>${fmt(v.data)} · ${esc(v.contexto)}</span></div>
    </a>`).join("");

  // Publicações académicas
  $("l-academicos").innerHTML = [...window.ACADEMICOS].sort((a, b) => b.ano - a.ano).map((p) => `
    <li><a href="${esc(p.url)}" target="_blank" rel="noopener">
      <span class="l-data">${esc(p.ano)}</span>
      <span class="l-titulo">${esc(p.titulo)}<span class="l-meta">${esc(p.autores)} · ${esc(p.local)}</span></span>
      <span></span>
    </a></li>`).join("");

  // Tema claro/escuro
  const root = document.documentElement;
  const guardado = localStorage.getItem("tema");
  if (guardado) root.dataset.theme = guardado;
  $("tema").addEventListener("click", () => {
    const escuro = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = escuro ? "light" : "dark";
    localStorage.setItem("tema", root.dataset.theme);
  });

  $("ano").textContent = "© " + new Date().getFullYear();
})();

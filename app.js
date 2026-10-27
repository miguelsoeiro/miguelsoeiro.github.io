(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (t) =>
    String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Hero
  $("h-titulo").textContent = S.titulo;
  $("h-nome").textContent = S.nome;
  $("h-area").textContent = S.area || "";
  $("h-resumo").textContent = S.resumo;
  $("h-ordem").textContent = S.ordem || "";
  $("h-links").innerHTML = [
    S.links.linkedin && `<a class="btn primary" href="${esc(S.links.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
    S.links.empresa && `<a class="btn" href="${esc(S.links.empresa)}" target="_blank" rel="noopener">Transparent Reasons</a>`,
    S.links.emailB64 && `<a class="btn" id="b-contacto" href="#contacto" rel="nofollow">Contacto</a>`,
  ].filter(Boolean).join("");

  // Contacto: o endereço só é montado quando alguém interage com o botão
  const contacto = $("b-contacto");
  if (contacto) {
    const montar = () => { contacto.href = "mailto:" + atob(S.links.emailB64); };
    ["mouseenter", "focus", "touchstart", "click"].forEach((ev) => contacto.addEventListener(ev, montar, { once: false }));
  }

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
  timeline("tl-certificacoes", window.CERTIFICACOES);

  const MESES = ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."];
  const fmt = (iso) => {
    const m = /^(\d{4})-(\d{2})/.exec(iso || "");
    return m ? `${MESES[+m[2] - 1]} ${m[1]}` : "";
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
        <li><a href="${esc(o.url)}" target="_blank" rel="noopener" class="${[fmt(o.data) ? "" : "sem-data", o.imagem ? "com-imagem" : ""].join(" ").trim()}">
          ${fmt(o.data) ? `<span class="l-data">${fmt(o.data)}</span>` : ""}
          ${o.imagem ? `<img class="l-img" loading="lazy" alt="" src="${esc(o.imagem)}">` : ""}
          <span class="l-titulo">${esc(o.titulo)}<span class="l-meta">${esc(o.meio)}</span>${o.resumo ? `<span class="l-resumo">${esc(o.resumo)}</span>` : ""}</span>
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
      <div class="card-body"><strong>${esc(v.titulo)}</strong><span>${[fmt(v.data), esc(v.contexto)].filter(Boolean).join(" · ")}</span>${v.resumo ? `<p class="card-resumo">${esc(v.resumo)}</p>` : ""}</div>
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

  // Destaca no menu a secção visível
  const links = [...document.querySelectorAll(".nav nav a")];
  const secoes = links.map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) links.forEach((l) => l.classList.toggle("ativo", l.getAttribute("href") === "#" + e.target.id));
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    secoes.forEach((s) => obs.observe(s));
  }

  $("ano").textContent = "© " + new Date().getFullYear();
})();

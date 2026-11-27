(function () {
  "use strict";

  const C = window.COURSES, G = window.GRADES, H = window.HOMES;
  const app = document.getElementById("app");
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------------- Icons ----------------
  const I = {
    dashboard: '<svg viewBox="0 0 32 32"><path d="M4 22a12 12 0 1 1 24 0"/><path d="M16 22l5-7"/><circle cx="16" cy="22" r="1.6"/><path d="M8 16l1.5 1M24 16l-1.5 1M16 10v2"/></svg>',
    courses: '<svg viewBox="0 0 32 32"><rect x="7" y="4" width="18" height="21" rx="1"/><path d="M11 9h10M11 13h10M11 17h10M5 28h22"/></svg>',
    groups: '<svg viewBox="0 0 32 32"><circle cx="11" cy="11" r="4"/><circle cx="22" cy="10" r="3.5"/><path d="M3 25c0-5 4-8 8-8s8 3 8 8z"/><path d="M17 17c1.5-1.2 3.2-1.8 5-1.8 4 0 7 3 7 7.8h-9"/></svg>',
    calendar: '<svg viewBox="0 0 32 32"><rect x="5" y="6" width="22" height="22" rx="1"/><path d="M5 11h22M10 3v5M22 3v5"/><path d="M9 15h3v3H9zM14.5 15h3v3h-3zM20 15h3v3h-3zM9 20.5h3v3H9zM14.5 20.5h3v3h-3zM20 20.5h3v3h-3z"/></svg>',
    inbox: '<svg viewBox="0 0 32 32"><path d="M4 18h7l2 3h6l2-3h7v9H4z"/><path d="M8 14V5h16v9M11 9h10M11 12h10"/></svg>',
    support: '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M12.5 12.5a3.5 3.5 0 1 1 5 3.2c-1 .5-1.5 1.3-1.5 2.3v1"/><circle cx="16" cy="23" r=".8"/></svg>',
    media: '<svg viewBox="0 0 32 32"><path d="M4 8h9l2 3h13v16H4z"/><path d="M4 8V5h8l2 3"/><path d="M14 15v8l6-4z"/></svg>',
    history: '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M16 9v7l5 3"/></svg>',
    library: '<svg viewBox="0 0 32 32"><path d="M3 7c4-1.5 9-1.5 12 1v18c-3-2.5-8-2.5-12-1zM29 7c-4-1.5-9-1.5-12 1v18c3-2.5 8-2.5 12-1z" fill="#fff"/></svg>',
    collapse: '<svg viewBox="0 0 32 32"><path d="M5 6v20M25 16H10M15 11l-5 5 5 5"/></svg>',
    announcements: '<svg viewBox="0 0 32 32"><path d="M5 13h5l12-7v20l-12-7H5z"/><path d="M9 19l2 7h3l-2-7"/><path d="M25 12c2 1.5 2 6.5 0 8"/></svg>',
    assignments: '<svg viewBox="0 0 32 32"><path d="M23 18v10H5V5h12"/><path d="M9 11h7M9 15h6M9 19h4M9 23h10"/><path d="M27 6l-9 9-3 1 1-3 9-9z"/></svg>',
    discussions: '<svg viewBox="0 0 32 32"><path d="M4 6h16v11H11l-4 4v-4H4z"/><path d="M20 11h8v11h-3v4l-4-4h-8v-5"/><path d="M8 10h8M8 13h6"/></svg>',
    files: '<svg viewBox="0 0 32 32"><path d="M3 8h10l2 3h14v15H3z"/></svg>',
    announcement: '<svg viewBox="0 0 32 32"><path d="M5 13h5l12-7v20l-12-7H5z"/><path d="M9 19l2 7h3l-2-7"/><path d="M25 12c2 1.5 2 6.5 0 8"/></svg>',
    assignment: '<svg viewBox="0 0 32 32"><path d="M23 18v10H5V5h12"/><path d="M9 11h7M9 15h6M9 19h4M9 23h10"/><path d="M27 6l-9 9-3 1 1-3 9-9z"/></svg>',
    stream: '<svg viewBox="0 0 24 24"><path d="M4 20V10M9 20V4M14 20v-8M19 20V7M2 21h20" stroke-width="3"/></svg>',
    cal: '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="16"/><path d="M4 9h16M8 3v4M16 3v4"/><text x="9.5" y="18" font-size="7" stroke="none" fill="#2d3b45">3</text></svg>',
    bell: '<svg viewBox="0 0 24 24"><path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4z"/><path d="M10 21h4"/></svg>',
    page: '<svg viewBox="0 0 24 24"><path d="M5 3h10l4 4v14H5z"/><path d="M8 9h8M8 12h8M8 15h8M8 18h5"/></svg>',
    clip: '<svg viewBox="0 0 24 24"><path d="M16 7l-7.5 7.5a2 2 0 0 0 3 3L19 10a4 4 0 0 0-6-6l-8 8a6 6 0 0 0 8.5 8.5L20 14"/></svg>',
    whatif: '<svg viewBox="0 0 24 24"><path d="M4 7h3M4 7v13h15V12"/><path d="M8 13l3 3 9-10"/><path d="M14 3v4M12 5h4"/></svg>',
    comment: '<svg viewBox="0 0 24 24"><path d="M3 5h12v9H8l-3 3v-3H3z"/><path d="M15 9h6v9h-2v3l-3-3h-6v-4"/></svg>',
    rubric: '<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17"/><path d="M9 3h6v3H9zM8 10h2M12 10h4M8 14h2M12 14h4M8 18h2M12 18h4"/></svg>',
    eye: '<svg class="sicon" viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M3 21L21 3"/></svg>',
    doc: '<svg class="sicon" viewBox="0 0 24 24"><path d="M5 3h10l4 4v14H5z"/><path d="M15 3v4h4M8 11h8M8 14h8M8 17h5"/></svg>',
    text: '<svg class="sicon" viewBox="0 0 24 24"><path d="M5 5h14M12 5v15M9 20h6" stroke-width="2"/></svg>',
    pending: '<svg class="sicon" viewBox="0 0 24 24"><path d="M3 21l6-6M14 4l6 6-7 7-6-6z"/><path d="M5 13l6 6"/><circle cx="15" cy="9" r="1.2"/></svg>',
    print: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2d3b45" stroke-width="1.7"><path d="M7 9V3h10v6M7 17H4V9h16v8h-3"/><rect x="7" y="14" width="10" height="7"/></svg>',
  };

  // ---------------- Helpers ----------------
  const num = (n) => String(parseFloat(Number(n).toFixed(2)));
  const pct = (n) => num(n * 100) + "%";
  const two = (n) => Number(n).toFixed(2);
  function letter(p) {
    p *= 100;
    if (p >= 90) return "A+"; if (p >= 85) return "A"; if (p >= 80) return "A−";
    if (p >= 77) return "B+"; if (p >= 73) return "B"; if (p >= 70) return "B−";
    if (p >= 67) return "C+"; if (p >= 60) return "C"; if (p >= 50) return "D"; return "F";
  }
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2200);
  }
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  };
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  // ---------------- Global nav ----------------
  const NAV = [
    { id: "account", label: "Account", tray: true },
    { id: "dashboard", label: "Dashboard", href: "#/" },
    { id: "courses", label: "Courses", tray: true },
    { id: "groups", label: "Groups", tray: true },
    { id: "calendar", label: "Calendar", tray: true },
    { id: "inbox", label: "Inbox", tray: true, badge: 1 },
    { id: "support", label: "24/7<br>SUPPORT", tray: true, badge: 10 },
    { id: "media", label: "My Media", tray: true },
    { id: "history", label: "History", tray: true },
    { id: "library", label: "Library", tray: true },
  ];
  function renderGlobalNav(active) {
    const g = $("#global-nav");
    g.innerHTML =
      '<a class="gn-logo" href="#/" title="Dashboard"><div class="mono">DS</div></a>' +
      NAV.map((n) => {
        const icon = n.id === "account"
          ? '<div class="gn-avatar"><img src="assets/avatar.png" alt=""></div>'
          : I[n.id];
        const badge = n.badge ? `<span class="badge">${n.badge}</span>` : "";
        const tag = n.href ? `a href="${n.href}"` : `button type="button" data-tray="${n.id}"`;
        const close = n.href ? "a" : "button";
        return `<${tag} class="gn-item ${n.id === "account" ? "account" : ""} ${active === n.id ? "active" : ""}">${icon}${badge}<span class="label">${n.label}</span></${close}>`;
      }).join("") +
      `<button type="button" class="gn-item gn-collapse" id="gn-collapse" title="Collapse">${I.collapse}</button>`;
    g.querySelectorAll("[data-tray]").forEach((b) => b.addEventListener("click", () => openTray(b.dataset.tray)));
    $("#gn-collapse").addEventListener("click", () => document.body.classList.toggle("nav-narrow"));
  }

  function openTray(id) {
    const t = $("#tray");
    if (t.classList.contains("open") && t.dataset.id === id) { closeTray(); return; }
    t.dataset.id = id;
    let html = '<button class="close" aria-label="Close">&times;</button>';
    if (id === "account") {
      html += `<div class="acct-head"><div class="gn-avatar"><img src="assets/avatar.png" alt=""></div><h2>${esc(STUDENT.name)}</h2></div><hr>
        <ul><li><a href="#/">Notifications</a></li><li><a href="#/">Profile</a></li><li><a href="#/">Files</a></li><li><a href="#/">Settings</a></li><li><a href="#/">ePortfolios</a></li><li><a href="#/">Global Announcements</a></li></ul>`;
    } else if (id === "courses") {
      html += "<h2>Courses</h2><hr><ul>" +
        DASHBOARD_ORDER.map((cid) => `<li><a href="#/courses/${cid}">${esc(C[cid].name)}</a>${C[cid].term ? `<div class="term">Term: ${C[cid].term}</div>` : ""}</li>`).join("") +
        '</ul><hr><a href="#/">All Courses</a>';
    } else if (id === "groups") {
      html += "<h2>Groups</h2><hr><ul>" +
        ["Lab CRN 44428 Group 5", "Group 9", "Project (5) 14", "Lab (CRN 43525) 19"].map((g) => `<li><a href="#/">${g}</a></li>`).join("") + "</ul>";
    } else {
      const titles = { calendar: "Calendar", inbox: "Inbox", support: "24/7 Support", media: "My Media", history: "Recent History", library: "Library" };
      html += `<h2>${titles[id]}</h2><hr><p class="empty">Nothing to show here.</p>`;
    }
    t.innerHTML = html;
    t.classList.add("open");
    $(".close", t).addEventListener("click", closeTray);
  }
  function closeTray() { $("#tray").classList.remove("open"); }

  // ---------------- Dashboard ----------------
  function renderDashboard() {
    renderGlobalNav("dashboard");
    const dismissed = store.get("todoDismissed", []);
    const cards = DASHBOARD_ORDER.map((cid) => {
      const c = C[cid];
      const hero = c.image
        ? `style="background-image:url('${c.image}')" class="card-hero has-img"`
        : `style="background:${c.color}" class="card-hero"`;
      const icons = c.cardIcons.map(([k, n]) =>
        `<a href="#/courses/${cid}/${k}" title="${k}">${n ? `<span class="cbadge">${n}</span>` : ""}${I[k]}</a>`).join("");
      return `<div class="card">
        <a href="#/courses/${cid}" ${hero}><span class="kebab-w" title="Choose a color or course nickname"><i></i><i></i><i></i></span></a>
        <div class="card-body">
          <a class="card-title" href="#/courses/${cid}" style="color:${c.titleColor || "#2d3b45"}">${esc(c.code)}</a>
          <div class="card-sub">${esc(c.short.startsWith("202") || c.short.startsWith("FEAS") ? c.short : c.short)}</div>
          <div class="card-term">${c.term || ""}</div>
        </div>
        <div class="card-icons">${icons}</div>
      </div>`;
    }).join("");
    const todo = TODO.map((t, i) => dismissed.includes(i) ? "" : `
      <div class="todo-item">${I[t.icon]}<div class="t"><a href="#/courses/${t.cid}">${esc(t.title)}</a>
      <div class="meta">${esc(t.course)}<br>${esc(t.when)}</div></div>
      <button class="x" data-i="${i}" title="Ignore">&times;</button></div>`).join("");
    app.innerHTML = `<div class="dash-wrap">
      <div class="dash-main">
        <div class="dash-header"><h1>Dashboard</h1>
          <div class="right"><button class="btn" id="newdash">Switch to new dashboard view</button>
          <button class="kebab" title="Dashboard Options"><svg width="6" height="22" viewBox="0 0 6 22"><circle cx="3" cy="3" r="2.4" fill="#2d3b45"/><circle cx="3" cy="11" r="2.4" fill="#2d3b45"/><circle cx="3" cy="19" r="2.4" fill="#2d3b45"/></svg></button></div>
        </div>
        <div class="cards">${cards}</div>
      </div>
      <aside class="rside" style="padding-top:110px"><h3>To Do</h3>${todo || '<p class="empty">Nothing for now</p>'}</aside>
    </div>`;
    $("#newdash").addEventListener("click", () => toast("Only the classic view is available here."));
    app.querySelectorAll(".todo-item .x").forEach((b) => b.addEventListener("click", () => {
      const d = store.get("todoDismissed", []); d.push(+b.dataset.i); store.set("todoDismissed", d); renderDashboard();
    }));
    app.querySelectorAll(".kebab-w").forEach((k) => k.addEventListener("click", (e) => { e.preventDefault(); toast("Card options are not available here."); }));
  }

  // ---------------- Course shell ----------------
  function courseShell(cid, pageSlug, crumbs, inner) {
    const c = C[cid];
    const nav = c.nav.map((n) => {
      const s = slug(n) === "home" ? "" : slug(n);
      const isActive = (pageSlug || "") === s || (pageSlug === "modules" && s === "" && false);
      const nb = n === "Grades" && c.gradesBadge ? `<span class="nb">${c.gradesBadge}</span>` : "";
      return `<a href="#/courses/${cid}${s ? "/" + s : ""}" class="${isActive ? "active" : ""}">${n}${nb}</a>`;
    }).join("");
    const crumbHtml = [`<a href="#/courses/${cid}">${esc(c.name)}</a>`]
      .concat(crumbs.map((cr, i) => i === crumbs.length - 1 ? `<span class="cur">${esc(cr.t)}</span>` : `<a href="${cr.h}">${esc(cr.t)}</a>`))
      .join('<span class="sep">&gt;</span>');
    return `<div class="course-head"><button class="hamburger" id="hamb" title="Toggle course navigation"><span></span><span></span><span></span></button>
      <div class="crumbs">${crumbHtml}</div></div>
      <div class="course-body"><nav class="course-nav"><div class="term">${c.term || ""}</div>${nav}</nav>${inner}</div>`;
  }
  function wireShell() {
    const h = $("#hamb"); if (h) h.addEventListener("click", () => document.body.classList.toggle("cnav-hidden"));
  }

  function renderHome(cid, pageSlug) {
    renderGlobalNav(null);
    const home = H[cid];
    let main;
    if (home) {
      const mods = home.modules.map((m) => `<div class="module"><div class="module-h"><span class="tri">&#9660;</span>${esc(m.title)}</div>
        <div class="module-items">${m.items.map((it) => {
          const ic = it.type === "file" ? I.clip : it.type === "assignment" ? I.assignment : I.page;
          return `<div class="module-item">${ic}<div><div class="nm">${esc(it.name)}</div>${it.meta ? `<div class="mt">${it.meta}</div>` : ""}</div></div>`;
        }).join("")}</div></div>`).join("");
      main = `<div class="course-main"><div class="mod-top"><button class="btn" id="collapse-all">Collapse All</button></div>${mods}</div>`;
    } else {
      main = `<div class="course-main"><div class="empty-page"><h1>${esc(C[cid].name)}</h1>No modules to show.</div></div>`;
    }
    const side = home ? `<aside class="rside">
      <button class="side-btn">${I.stream}View Course Stream</button>
      <button class="side-btn">${I.cal}View Course Calendar</button>
      <button class="side-btn">${I.bell}View Course Notifications</button>
      ${home.todo.length ? `<div class="side-section"><h3>To Do</h3>${home.todo.map((t) => `<div class="todo-item">${I.announcement}<div class="t"><a href="#/courses/${cid}/announcements">${esc(t.title)}</a><div class="meta">${esc(t.course)}<br>${esc(t.when)}</div></div><button class="x">&times;</button></div>`).join("")}</div>` : ""}
      <div class="side-section"><h3>Course Groups</h3>${home.groups.map((g) => `<a class="group-link" href="#/">${esc(g)}</a>`).join("")}</div>
      <div class="side-section"><h3>Recent Feedback</h3>${home.feedback.map((f) => `<div class="fb-item"><span class="check">&#10003;</span><div>
        <a class="n" href="#/courses/${cid}/grades">${esc(f.name)}</a><div class="c">${esc(f.course)}</div>
        ${f.score ? `<div class="s">${esc(f.score)}</div>` : ""}${f.comment ? `<div class="q">"${esc(f.comment)}"</div>` : ""}</div></div>`).join("")}
        ${home.moreFeedback ? `<a href="#/courses/${cid}/grades" style="font-size:14px">${home.moreFeedback} more ...</a>` : ""}</div>
    </aside>` : "";
    const crumbs = pageSlug === "modules" ? [{ t: "Modules" }] : [];
    app.innerHTML = courseShell(cid, pageSlug || "", crumbs, main + side);
    wireShell();
    app.querySelectorAll(".module-h").forEach((h) => h.addEventListener("click", () => h.parentElement.classList.toggle("closed")));
    const ca = $("#collapse-all");
    if (ca) ca.addEventListener("click", () => {
      const all = app.querySelectorAll(".module"); const anyOpen = [...all].some((m) => !m.classList.contains("closed"));
      all.forEach((m) => m.classList.toggle("closed", anyOpen)); ca.textContent = anyOpen ? "Expand All" : "Collapse All";
    });
    app.querySelectorAll(".side-btn").forEach((b) => b.addEventListener("click", () => toast("Not available here.")));
    app.querySelectorAll(".rside .x").forEach((b) => b.addEventListener("click", () => b.parentElement.remove()));
  }

  function renderEmpty(cid, pageSlug) {
    renderGlobalNav(null);
    const label = C[cid].nav.find((n) => slug(n) === pageSlug) || pageSlug;
    app.innerHTML = courseShell(cid, pageSlug, [{ t: label }],
      `<div class="course-main"><div class="empty-page"><h1>${esc(label)}</h1>Nothing to show here yet.</div></div>`);
    wireShell();
  }

  // ---------------- Grades ----------------
  const state = { whatif: {}, arrange: "due", details: false, open: {} };

  function effScore(cid, i, it) {
    const w = state.whatif[cid] && state.whatif[cid][i];
    return w !== undefined ? w : it.score;
  }
  function countable(cid, i, it) {
    const w = state.whatif[cid] && state.whatif[cid][i] !== undefined;
    if (w) return it.possible !== null;
    return it.score !== null && it.state !== "hidden" && it.possible !== null;
  }
  function computeTotals(cid) {
    const g = G[cid]; const groups = {};
    g.groups.forEach((n) => (groups[n] = { s: 0, p: 0, n: 0, changed: false }));
    g.items.forEach((it, i) => {
      if (!countable(cid, i, it)) return;
      const gr = groups[it.group]; gr.s += effScore(cid, i, it); gr.p += it.possible; gr.n++;
      if (state.whatif[cid] && state.whatif[cid][i] !== undefined) gr.changed = true;
    });
    let S = 0, P = 0, changed = false;
    Object.values(groups).forEach((gr) => { S += gr.s; P += gr.p; changed = changed || gr.changed; });
    return { groups, S, P, changed };
  }

  function scoreCell(cid, i, it) {
    const w = state.whatif[cid] && state.whatif[cid][i];
    if (w !== undefined) return `<span class="val whatif-val">${num(w)}</span> / ${num(it.possible)}`;
    const poss = it.possible === null ? "" : ` / ${num(it.possible)}`;
    if (it.state === "none") return "-";
    if (it.state === "hidden") return `<span class="val">${I.eye}</span>${poss}`;
    if (it.state === "submitted") return `<span class="val">${I.doc}</span>${poss}`;
    if (it.state === "text") return `<span class="val">${I.text}</span>${poss}`;
    if (it.state === "pending") return `<span class="val">${I.pending}</span>${poss}`;
    if (it.score === null) return `<span class="val">-</span>${poss}`;
    return `<span class="val">${num(it.score)}</span>${poss}`;
  }

  function order(cid) {
    const g = G[cid];
    const idx = g.items.map((_, i) => i);
    if (state.arrange === "title") idx.sort((a, b) => g.items[a].name.localeCompare(g.items[b].name, undefined, { sensitivity: "base" }));
    if (state.arrange === "group") idx.sort((a, b) => g.groups.indexOf(g.items[a].group) - g.groups.indexOf(g.items[b].group) || a - b);
    return idx;
  }

  function renderGrades(cid) {
    renderGlobalNav(null);
    const g = G[cid];
    const gradeCourses = DASHBOARD_ORDER.filter((id) => C[id].nav.includes("Grades"));
    const selOpts = gradeCourses.map((id) => `<option value="${id}" ${id === cid ? "selected" : ""}>${esc(C[id].name)}</option>`).join("");
    const arrOpts = [["due", "Due Date"], ["title", "Title"], ["module", "Module"], ["group", "Assignment Group"]]
      .map(([v, t]) => `<option value="${v}" ${state.arrange === v ? "selected" : ""}>${t}</option>`).join("");

    let table = "";
    if (!g) {
      table = `<table class="gtable"><thead><tr><th>Name</th><th>Due</th><th>Submitted</th><th>Status</th><th style="text-align:center">Score</th><th></th></tr></thead>
        <tbody><tr><td colspan="6" class="empty">No grades to show yet.</td></tr></tbody></table>`;
    } else {
      const T = computeTotals(cid);
      const rows = order(cid).map((i) => {
        const it = g.items[i];
        const hasWI = state.whatif[cid] && state.whatif[cid][i] !== undefined;
        const icons =
          (it.whatif || hasWI ? `<button class="ibtn" data-revert="${i}" title="${hasWI ? "Revert to actual score" : "This is a What-If score"}">${hasWI ? "&#8634;" : I.whatif}</button>` : "") +
          (it.rubric ? `<button class="ibtn" data-detail="${i}" title="See rubric results">${I.rubric}</button>` : "") +
          (it.comments ? `<button class="ibtn" data-detail="${i}" title="Read comments">${I.comment}${it.comments}${it.unread ? '<span class="dot"></span>' : ""}</button>` : "");
        const status = it.status ? `<span class="pill ${it.status}">${it.status}</span>` : "";
        const showDetail = (state.details || state.open[cid + ":" + i]) && (it.comments || it.rubric);
        const detail = showDetail ? `<tr class="detail-row"><td colspan="6">
          ${it.commentText ? it.commentText.map((c) => `<div class="cm">${esc(c)}</div>`).join("") : it.comments ? '<div class="cm">Comment text was not captured.</div>' : ""}
          ${it.rubric ? '<div class="cm">Rubric details were not captured.</div>' : ""}</td></tr>` : "";
        return `<tr><td class="nm"><a href="#/courses/${cid}/assignments">${esc(it.name)}</a><div class="grp">${esc(it.group)}</div></td>
          <td>${esc(it.due)}</td><td>${esc(it.submitted).replace(" at ", " at<br>")}</td><td>${status}</td>
          <td class="score editable" data-i="${i}" title="Click to test a What-If score">${scoreCell(cid, i, it)}</td>
          <td class="icons">${icons}</td></tr>${detail}`;
      }).join("");
      const groupRows = g.groups.map((n) => {
        const gr = T.groups[n];
        if (!g.totalsEnabled) return `<tr class="total-grp"><td colspan="4">${esc(n)}</td><td class="pc">${I.eye}</td><td></td></tr>`;
        const pc = gr.p > 0 ? pct(gr.s / gr.p) : "N/A";
        return `<tr class="total-grp ${gr.changed ? "changed" : ""}"><td colspan="4">${esc(n)}</td><td class="pc">${pc}</td><td class="pts">${two(gr.s)} / ${two(gr.p)}</td></tr>`;
      }).join("");
      const finalRow = g.totalsEnabled
        ? `<tr class="final total-grp ${T.changed ? "changed" : ""}"><td colspan="4">Total</td><td class="pc">${pct(T.S / T.P)}</td><td class="pts">${two(T.S)} / ${two(T.P)}</td></tr>` : "";
      table = `<table class="gtable"><thead><tr><th>Name</th><th>Due</th><th>Submitted</th><th>Status</th><th style="text-align:center">Score</th><th></th></tr></thead>
        <tbody>${rows}${groupRows}${finalRow}</tbody></table>
        <div class="hidden-note">${I.eye}Your instructor has not posted the grade. While your instructor has not posted the grade, grade and comment information is unavailable.</div>`;
    }

    let side;
    const saved = store.get("whatif:" + cid, null);
    const anyWI = state.whatif[cid] && Object.keys(state.whatif[cid]).length;
    if (g && g.totalsEnabled) {
      const T = computeTotals(cid); const p = T.S / T.P;
      side = `<aside class="gside"><div class="total">Total: ${pct(p)} (${letter(p)})</div>
        <button class="side-btn" id="show-saved" style="font-size:16px">${I.whatif}Show Saved "What-If" Scores</button>
        ${anyWI ? '<button class="side-btn" id="revert-all" style="font-size:16px">&#8634; Revert to Actual Score</button>' : ""}
        <div class="msg" id="wi-msg">${anyWI ? "Showing What-If scores. Click a score to change it." : ""}</div></aside>`;
    } else {
      side = `<aside class="gside"><div class="big">Calculation of totals has been disabled</div>
        <button class="side-btn" id="show-saved" style="font-size:16px">${I.whatif}Show Saved "What-If" Scores</button>
        ${g ? `<button class="btn" id="show-details" style="margin:6px 0 12px;font-size:17px">${state.details ? "Hide All Details" : "Show All Details"}</button>
        <div class="bold">Course assignments are not weighted.</div>
        <label><input type="checkbox" checked id="only-graded"> Calculate based only on graded assignments</label>
        <div class="note">You can view your grades based on What-If scores so that you know how grades will be affected by upcoming or resubmitted assignments. You can test scores for an assignment that already includes a score, or an assignment that has yet to be graded.</div>` : ""}
        ${anyWI ? '<button class="side-btn" id="revert-all" style="font-size:16px;margin-top:12px">&#8634; Revert to Actual Score</button>' : ""}
        <div class="msg" id="wi-msg"></div></aside>`;
    }

    const main = `<div class="course-main">
      <div class="grades-top"><h1>Grades for ${esc(STUDENT.name)}</h1><button class="btn" id="print" style="display:flex;gap:8px;align-items:center">${I.print}Print Grades</button></div>
      <div class="filters">
        <div><label for="sel-course">Course</label><select id="sel-course">${selOpts}</select></div>
        <div><label for="sel-arr">Arrange By</label><select id="sel-arr">${arrOpts}</select></div>
        <button class="btn primary dim" id="apply" style="height:44px;font-size:18px">Apply</button>
      </div>${table}</div>`;

    app.innerHTML = courseShell(cid, "grades", [{ t: "Grades", h: `#/courses/${cid}/grades` }, { t: STUDENT.name }], main + side);
    wireShell();

    const selC = $("#sel-course"), selA = $("#sel-arr"), ap = $("#apply");
    const dirty = () => ap.classList.toggle("dim", selC.value === cid && selA.value === state.arrange);
    selC.addEventListener("change", dirty); selA.addEventListener("change", dirty);
    ap.addEventListener("click", () => {
      state.arrange = selA.value;
      if (selC.value !== cid) location.hash = `#/courses/${selC.value}/grades`; else renderGrades(cid);
    });
    $("#print").addEventListener("click", () => window.print());
    const sd = $("#show-details"); if (sd) sd.addEventListener("click", () => { state.details = !state.details; renderGrades(cid); });
    $("#show-saved").addEventListener("click", () => {
      const s = store.get("whatif:" + cid, null);
      if (s && Object.keys(s).length) { state.whatif[cid] = s; renderGrades(cid); toast("Showing saved What-If scores"); }
      else toast("No saved What-If scores yet. Click any score to try one.");
    });
    const ra = $("#revert-all"); if (ra) ra.addEventListener("click", () => { delete state.whatif[cid]; renderGrades(cid); });

    if (!g) return;
    app.querySelectorAll("[data-detail]").forEach((b) => b.addEventListener("click", () => {
      const k = cid + ":" + b.dataset.detail; state.open[k] = !state.open[k]; renderGrades(cid);
    }));
    app.querySelectorAll("[data-revert]").forEach((b) => b.addEventListener("click", () => {
      const i = b.dataset.revert;
      if (state.whatif[cid] && state.whatif[cid][i] !== undefined) {
        delete state.whatif[cid][i]; store.set("whatif:" + cid, state.whatif[cid]); renderGrades(cid);
      } else toast("Click the score to enter a What-If score.");
    }));
    app.querySelectorAll("td.score.editable").forEach((td) => td.addEventListener("click", () => {
      if (td.querySelector("input")) return;
      const i = +td.dataset.i, it = g.items[i];
      if (it.possible === null) { toast("This item has no points possible."); return; }
      const cur = effScore(cid, i, it);
      td.innerHTML = `<input type="number" step="any" min="0" value="${cur === null ? "" : cur}"> / ${num(it.possible)}`;
      const inp = td.querySelector("input"); inp.focus(); inp.select();
      const commit = () => {
        const v = inp.value.trim();
        if (v !== "" && !isNaN(+v)) {
          if (+v === it.score && it.state !== "hidden") { if (state.whatif[cid]) delete state.whatif[cid][i]; }
          else { state.whatif[cid] = state.whatif[cid] || {}; state.whatif[cid][i] = +v; }
          store.set("whatif:" + cid, state.whatif[cid] || {});
        }
        renderGrades(cid);
      };
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") commit(); if (e.key === "Escape") renderGrades(cid); });
      inp.addEventListener("blur", commit);
    }));
  }

  // ---------------- Router ----------------
  function route() {
    closeTray();
    const h = location.hash.replace(/^#\/?/, "");
    const parts = h.split("/").filter(Boolean);
    window.scrollTo(0, 0);
    if (parts[0] === "courses" && C[parts[1]]) {
      const cid = parts[1], page = parts[2] || "";
      document.title = page ? `${page.charAt(0).toUpperCase() + page.slice(1)}: ${C[cid].name}` : C[cid].name;
      if (page === "grades") return renderGrades(cid);
      if (page === "" || page === "modules") return renderHome(cid, page);
      return renderEmpty(cid, page);
    }
    document.title = "Dashboard";
    renderDashboard();
  }
  window.addEventListener("hashchange", route);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeTray(); });
  document.addEventListener("click", (e) => {
    const t = $("#tray");
    if (t.classList.contains("open") && !t.contains(e.target) && !e.target.closest("[data-tray]")) closeTray();
  });
  route();
})();

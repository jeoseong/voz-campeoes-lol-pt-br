const BASE = "audios/lux/cosmos-negro/";
const app = document.getElementById("app");

function esc(value) {
  return String(value).replace(/[&<>\"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));
}

function card(text, path, file) {
  const src = `${BASE}${path}/${file}`;
  const missingNote = /^(Lux (ri|exala|grunhe)\.)$/.test(text) ? "" : `<span class="missing">${esc(file)}</span>`;
  return `<article class="voice-card">
    <p class="voice-text">“${esc(text)}”</p>
    <div class="audio-wrap">
      <audio controls preload="none" src="${src}"></audio>
    </div>
    ${missingNote}
  </article>`;
}

function renderFiles(group) {
  return `<div class="subsection">
    <h3>${esc(group.title)}</h3>
    ${group.cooldown ? `<p class="cooldown">${esc(group.cooldown)}</p>` : ""}
    <div class="voice-list">${group.files.map(([text, file]) => card(text, group.path, file)).join("")}</div>
    ${group.subgroups ? group.subgroups.map(renderFiles).join("") : ""}
  </div>`;
}

function renderSection(section) {
  const groups = section.groups ? section.groups.map(renderFiles).join("") : renderFiles(section);
  return `<section class="section"><h2>${esc(section.title)}</h2>${groups}</section><hr class="divider">`;
}

app.innerHTML = LUX_COSMOS_NEGRO.sections.map(renderSection).join("");

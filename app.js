const colours = [
  { name: "Affidea Blue", hex: "#418FDE", role: "Primary", text: "#FFFFFF" },
  { name: "Friendly Green", hex: "#04B64F", role: "CTA / highlight", text: "#FFFFFF" },
  { name: "Dark Blue", hex: "#2D69B3", role: "Structure", text: "#FFFFFF" },
  { name: "Light Blue", hex: "#98BFE6", role: "Support", text: "#294074" },
  { name: "Dark Grey", hex: "#353A40", role: "Body / background", text: "#FFFFFF" },
  { name: "Cool Grey", hex: "#B1B1B1", role: "Structure", text: "#353A40" },
  { name: "Light Grey", hex: "#F1EFED", role: "Background", text: "#353A40" },
  { name: "Navy", hex: "#294074", role: "Data visualisation", text: "#FFFFFF" },
];

const assets = [
  {
    title: "Affidea · Parent brand",
    type: "parent",
    tag: "Core",
    status: "Provided artwork",
    description: "Logo orizontal pentru aplicațiile Affidea la nivel de grup și țară.",
    preview: "public/assets/logos/web/affidea-parent.jpeg",
    source: "https://drive.google.com/file/d/1N7sm9f5GUoC7mAr86Fv6XG1eqe0kPfuJ/view",
    web: "public/assets/logos/web/affidea-parent.jpeg",
  },
  {
    title: "Clinicile Affidea · Blue",
    type: "clinical",
    tag: "Clinical",
    status: "Web PNG",
    description: "Lockup local pentru fundal alb sau foarte deschis.",
    preview: "public/assets/logos/web/affidea-clinicile-blue.png",
    source: "https://drive.google.com/file/d/1Dr9IOGc0F0GbyFcTDlxzi70FSxFYT1yn/view",
    web: "public/assets/logos/web/affidea-clinicile-blue.png",
  },
  {
    title: "Clinicile Affidea · White",
    type: "clinical",
    tag: "Clinical",
    status: "Web PNG",
    description: "Lockup alb pe Affidea Blue; folosește artwork-ul complet, fără recolorare.",
    preview: "public/assets/logos/web/affidea-clinicile-white-on-blue.png",
    source: "https://drive.google.com/file/d/1rLVYpeWvdzNem_xWeUQRO_JtF3CkJz9S/view",
    web: "public/assets/logos/web/affidea-clinicile-white-on-blue.png",
    previewClass: "blue",
  },
  {
    title: "Clinicile Affidea · Vector",
    type: "clinical",
    tag: "Clinical",
    status: "SVG + EPS",
    description: "Artwork vectorial pentru producție, semnalistică și exporturi high-resolution.",
    preview: "public/assets/logos/web/affidea-clinicile.svg",
    source: "https://drive.google.com/file/d/1E-g9ilqnX-OGOZJ_b7X0Q9HJhivpaXsy/view",
    web: "public/assets/logos/web/affidea-clinicile.svg",
  },
  {
    title: "Clinicile Affidea · Biomed Scan",
    type: "acquisition",
    tag: "Integrated",
    status: "SVG + PDF",
    description: "Lockup tranzitoriu Affidea + Biomed Scan, păstrat ca asset furnizat.",
    preview: "public/assets/logos/web/biomed-scan.svg",
    source: "https://drive.google.com/file/d/1x4PvznR6PD9cbdLXh7gfWYQv9X3NTXDf/view",
    web: "public/assets/logos/web/biomed-scan.svg",
  },
];

const swatches = document.querySelector("#swatches");
const grid = document.querySelector("#assetGrid");
const filters = document.querySelector("#filters");
const search = document.querySelector("#assetSearch");
const empty = document.querySelector("#emptyState");
const toast = document.querySelector("#toast");
let activeFilter = "all";

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

colours.forEach((colour) => {
  const button = document.createElement("button");
  button.className = "swatch";
  button.style.background = colour.hex;
  button.style.color = colour.text;
  button.innerHTML = `<span class="role">${colour.role}</span><span><strong>${colour.name}</strong><code>${colour.hex}</code></span>`;
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(colour.hex);
    showToast(`${colour.hex} copiat`);
  });
  swatches.append(button);
});

const filterNames = { all: "Toate", parent: "Parent", clinical: "Clinical", acquisition: "Integrated" };
Object.entries(filterNames).forEach(([value, label]) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `filter${value === "all" ? " active" : ""}`;
  button.dataset.filter = value;
  button.textContent = label;
  button.addEventListener("click", () => {
    activeFilter = value;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
    renderAssets();
  });
  filters.append(button);
});

function renderAssets() {
  const query = search.value.trim().toLocaleLowerCase("ro");
  const visibleAssets = assets.filter((asset) => {
    const matchesType = activeFilter === "all" || asset.type === activeFilter;
    const matchesQuery = `${asset.title} ${asset.description} ${asset.tag}`.toLocaleLowerCase("ro").includes(query);
    return matchesType && matchesQuery;
  });

  grid.innerHTML = visibleAssets.map((asset) => `
    <article class="asset-card">
      <div class="asset-preview ${asset.previewClass || ""}"><img src="${asset.preview}" alt="Preview ${asset.title}" /></div>
      <div class="asset-meta">
        <div class="asset-tags"><span>${asset.tag}</span><span>${asset.status}</span></div>
        <h3>${asset.title}</h3>
        <p>${asset.description}</p>
        <div class="asset-actions">
          <a class="download" href="${asset.source}" target="_blank" rel="noreferrer">Source · Drive</a>
          <a class="download alt" href="${asset.web}" download>Web</a>
        </div>
      </div>
    </article>`).join("");
  empty.hidden = visibleAssets.length > 0;
}

search.addEventListener("input", renderAssets);
renderAssets();

const menuButton = document.querySelector("#menuButton");
const sidebar = document.querySelector("#sidebar");
menuButton.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: "-25% 0px -68%" });
sections.forEach((section) => observer.observe(section));

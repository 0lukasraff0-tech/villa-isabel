/* =========================================================
   Villa Isabel — JavaScript
   Zentrale Konfiguration: hier später die echten Daten eintragen.
   ========================================================= */

const CONFIG = {
  // WhatsApp-Nummer im internationalen Format OHNE +, OHNE Leerzeichen.
  // Beispiel Kroatien: "385912345678"  (385 = Ländervorwahl Kroatien)
  whatsapp: "385955555512",

  // Externe Buchungslinks – hier die echten Inserate-URLs eintragen:
  booking: "https://www.booking.com/Share-Dvdyu0",            // Booking.com-Eintrag Villa Isabel
  airbnb:  "https://www.airbnb.de/users/profile/1653586678513409867", // Airbnb-Profil Silvana (alle 3 Wohnungen)
  // Weitere Airbnb-Inserate (für spätere eigene Buttons je Apartment):
  airbnb_terra: "https://www.airbnb.de/rooms/1662258844641272704",
  airbnb_azure: "https://www.airbnb.de/rooms/1665322451414168972",

  // Google Maps (Standort) + Adresse:
  maps: "https://maps.app.goo.gl/yAWsFmLdsYBAAMqj7",
  address: "Ivana i Matka Baštijana 2B, 51211 Matulji, Kroatien",

  // E-Mail für das Kontaktformular (Fallback ohne Server):
  email: "info@villa-isabel.example",
};

/* ---------- Mobile-Navigation ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  /* ---------- Sprache erkennen (Browser-Sprache) ----------
     Steuert den vorausgefüllten WhatsApp-/Formulartext.
     Standard = Englisch (international); Deutsch & Kroatisch werden erkannt. */
  const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
  const T = {
    en: { intro: "Hi! I'm interested in a stay at Villa Isabel and would love to check availability. Could you tell me more?",
          head: "Enquiry — Villa Isabel", name: "Name", apt: "Apartment", arr: "Arrival", dep: "Departure", guests: "Guests", msg: "Message", subj: "Enquiry Villa Isabel – " },
    de: { intro: "Hallo, ich interessiere mich für einen Aufenthalt in der Villa Isabel und hätte eine Anfrage.",
          head: "Anfrage — Villa Isabel", name: "Name", apt: "Apartment", arr: "Anreise", dep: "Abreise", guests: "Gäste", msg: "Nachricht", subj: "Anfrage Villa Isabel – " },
    hr: { intro: "Pozdrav, zainteresiran/a sam za boravak u Villi Isabel i želim poslati upit.",
          head: "Upit — Villa Isabel", name: "Ime", apt: "Apartman", arr: "Dolazak", dep: "Odlazak", guests: "Gosti", msg: "Poruka", subj: "Upit Villa Isabel – " },
  };
  // Standard: immer Englisch (international). Für sprachabhängig: T[browserLang] || T.en
  const L = T.en;

  /* ---------- WhatsApp-Links mit Nummer füllen ---------- */
  const waText = encodeURIComponent(L.intro);
  document.querySelectorAll("[data-whatsapp]").forEach(el => {
    el.setAttribute("href", `https://wa.me/${CONFIG.whatsapp}?text=${waText}`);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* ---------- Externe Buchungslinks setzen ---------- */
  document.querySelectorAll("[data-booking]").forEach(el => {
    el.setAttribute("href", CONFIG.booking); el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener");
  });
  document.querySelectorAll("[data-airbnb]").forEach(el => {
    el.setAttribute("href", CONFIG.airbnb); el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener");
  });
  document.querySelectorAll("[data-maps]").forEach(el => {
    el.setAttribute("href", CONFIG.maps); el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener");
  });

  /* ---------- WhatsApp-Float: sauberes Icon statt Emoji ---------- */
  const waSvg = '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.04 4C9.96 4 5.02 8.94 5.02 15.02c0 2.05.56 4.04 1.62 5.79L5 27l6.34-1.62a11 11 0 0 0 4.7 1.05h.01c6.08 0 11.02-4.94 11.02-11.02C27.07 8.94 22.12 4 16.04 4zm0 19.84h-.01a9.2 9.2 0 0 1-4.68-1.28l-.34-.2-3.48.89.93-3.39-.22-.35a9.16 9.16 0 0 1-1.4-4.88c0-5.06 4.12-9.18 9.19-9.18 2.45 0 4.76.96 6.49 2.69a9.13 9.13 0 0 1 2.69 6.5c0 5.06-4.12 9.18-9.18 9.18zm5.04-6.88c-.28-.14-1.63-.8-1.88-.9-.25-.09-.43-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.3s.98 2.66 1.12 2.85c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.63-.67 1.86-1.31.23-.64.23-1.2.16-1.31-.07-.11-.25-.18-.53-.32z"/></svg>';
  const waFloat = document.querySelector(".wa-float");
  if (waFloat) waFloat.innerHTML = waSvg;

  /* ---------- WhatsApp-CTA-Blase: sanfte, unaufdringliche Einladung ---------- */
  const ctaGet = () => { try { return sessionStorage.getItem("waCtaClosed"); } catch (e) { return null; } };
  const ctaMark = () => { try { sessionStorage.setItem("waCtaClosed", "1"); } catch (e) {} };
  if (waFloat && !ctaGet()) {
    const cta = document.createElement("div");
    cta.className = "wa-cta";
    cta.innerHTML =
      '<button class="wa-cta__close" aria-label="Schließen">×</button>' +
      '<a class="wa-cta__link" target="_blank" rel="noopener">' +
      '<span class="wa-cta__title">Dein Adria-Traum wartet</span>' +
      '<span class="wa-cta__sub">Schreib uns — ganz unverbindlich. Antwort meist in Minuten.</span></a>';
    document.body.appendChild(cta);
    cta.querySelector(".wa-cta__link").setAttribute("href", `https://wa.me/${CONFIG.whatsapp}?text=${waText}`);
    const closeCta = () => { cta.classList.remove("show"); ctaMark(); };
    cta.querySelector(".wa-cta__close").addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); closeCta(); });
    cta.querySelector(".wa-cta__link").addEventListener("click", ctaMark);
    setTimeout(() => cta.classList.add("show"), 9000);
    setTimeout(() => { if (cta.classList.contains("show")) closeCta(); }, 30000);
  }

  /* ---------- Foto-Platzhalter: echte Bilder erkennen ---------- */
  document.querySelectorAll(".photo").forEach(p => {
    const bg = p.style.backgroundImage;
    if (bg && bg !== "none" && !bg.includes("gradient")) p.classList.add("has-image");
  });

  /* ---------- Kontaktformular: sendet vorausgefüllte WhatsApp/E-Mail-Anfrage ---------- */
  const form = document.querySelector("#anfrage-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      // Backup-Erfassung: speichert die Anfrage zusätzlich (aktiv, sobald die Seite auf Netlify läuft).
      try {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(new FormData(form)).toString()
        }).catch(() => {});
      } catch (e2) {}
      const d = new FormData(form);
      const name     = (d.get("name") || "").trim();
      let apt        = d.get("apartment") || "—";
      if (/^Egal/.test(apt)) apt = "No preference";
      const arrival  = d.get("anreise") || "—";
      const depart   = d.get("abreise") || "—";
      const guests   = d.get("gaeste") || "—";
      const msg      = (d.get("nachricht") || "").trim();

      const text =
`Hi! My name is ${name || "a guest"} and I'm interested in staying at Villa Isabel. I'd love to check availability:

• Apartment: ${apt}
• Arrival: ${arrival}
• Departure: ${depart}
• Guests: ${guests}` +
(msg ? `\n• Message: ${msg}` : ``) +
`\n\nThank you very much — looking forward to your reply!`;

      const channel = form.dataset.channel || "whatsapp";
      if (channel === "email") {
        window.location.href =
          `mailto:${CONFIG.email}?subject=${encodeURIComponent(L.subj + name)}&body=${encodeURIComponent(text)}`;
      } else {
        window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      }

      const ok = document.querySelector("#form-success");
      if (ok) ok.style.display = "block";
      form.reset();
    });
  }

  /* ---------- Lightbox für Foto-Galerien ---------- */
  const tourImgs = Array.from(document.querySelectorAll(".room-featured, .tour-grid img"));
  if (tourImgs.length) {
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML =
      '<button class="lb-close" aria-label="Schließen">✕</button>' +
      '<button class="lb-nav lb-prev" aria-label="Zurück">‹</button>' +
      '<img alt="" />' +
      '<button class="lb-nav lb-next" aria-label="Weiter">›</button>' +
      '<div class="lb-counter"></div>';
    document.body.appendChild(lb);
    const lbImg = lb.querySelector("img");
    const lbCounter = lb.querySelector(".lb-counter");
    let idx = 0;

    const show = i => {
      idx = (i + tourImgs.length) % tourImgs.length;
      lbImg.src = tourImgs[idx].src;
      lbCounter.textContent = `${idx + 1} / ${tourImgs.length}`;
    };
    const open = i => { show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; };
    const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };

    tourImgs.forEach((img, i) => img.addEventListener("click", () => open(i)));
    lb.querySelector(".lb-close").addEventListener("click", close);
    lb.querySelector(".lb-prev").addEventListener("click", e => { e.stopPropagation(); show(idx - 1); });
    lb.querySelector(".lb-next").addEventListener("click", e => { e.stopPropagation(); show(idx + 1); });
    lb.addEventListener("click", e => { if (e.target === lb) close(); });
    document.addEventListener("keydown", e => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(idx - 1);
      else if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  /* ---------- „Jetzt anfragen" (#anfrage): Formular mittig zentrieren + Cursor rein ---------- */
  function centerAnfrage() {
    const card = document.querySelector("#anfrage");
    if (!card) return;
    setTimeout(() => {
      card.scrollIntoView({ block: "center", behavior: "smooth" });
      const nameField = document.querySelector("#anfrage-form [name='name']");
      if (nameField) setTimeout(() => nameField.focus({ preventScroll: true }), 450);
    }, 60);
  }
  if (location.hash === "#anfrage") centerAnfrage();
  window.addEventListener("hashchange", () => { if (location.hash === "#anfrage") centerAnfrage(); });

  /* ---------- Cinematic Video-Band: Drohnenshots sanft überblenden ---------- */
  const cineVids = document.querySelectorAll(".cine__video");
  // Auf kleinen Screens (Handy) nur das erste Video abspielen — spart Mobilfunk-Daten.
  var cineMobile = window.matchMedia && window.matchMedia("(max-width: 700px)").matches;
  if (cineVids.length && cineMobile) {
    cineVids[0].play && cineVids[0].play().catch(() => {});
  } else if (cineVids.length > 1) {
    cineVids[0].play && cineVids[0].play().catch(() => {});
    let ci = 0;
    setInterval(() => {
      const prev = cineVids[ci];
      ci = (ci + 1) % cineVids.length;
      const next = cineVids[ci];
      try { next.currentTime = 0; next.play && next.play().catch(() => {}); } catch (e) {}
      next.classList.add("is-active");
      prev.classList.remove("is-active");
      setTimeout(() => { try { prev.pause(); } catch (e) {} }, 1700);
    }, 7000);
  }

  /* ---------- Scroll-Reveal: sanftes Einfaden beim Scrollen ---------- */
  if ("IntersectionObserver" in window) {
    const revealEls = document.querySelectorAll(
      ".feature, .apt-card, .exp-card, .split__media, .split__body, .place-card, .contact-card, .form-card, .gallery-specs, .room-block"
    );
    revealEls.forEach(el => el.classList.add("reveal-init"));
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.remove("reveal-init");
          en.target.classList.add("reveal-in");
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(el => io.observe(el));
  }

  /* ---------- Aktiven Navigationspunkt markieren ---------- */
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });
});

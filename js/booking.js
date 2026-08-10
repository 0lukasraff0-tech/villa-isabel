/* =========================================================
   Villa Isabel — Buchungs-Modal mit visuellem Kalender
   Öffnet sich zentriert beim Klick auf einen [data-book]-Button
   (z. B. „Terra anfragen"). Schließen per X, Overlay-Klick oder Esc.
   „Anfragen" öffnet eine vorausgefüllte WhatsApp-Nachricht.
   Platzhalter bis zum echten Channel-Manager-Widget.
   ========================================================= */
(function () {
  var MONATE = ["Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"];
  var DOW = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  function fmt(d) {
    return ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear();
  }
  function sameDay(a, b) { return a && b && a.toDateString() === b.toDateString(); }

  function initCalendar(card) {
    var view = new Date(); view.setDate(1); view.setHours(0, 0, 0, 0);
    var start = null, end = null;
    var grid = card.querySelector(".cal__grid");
    var titleEl = card.querySelector(".cal__title");
    var rangeEl = card.querySelector(".booking-card__range");

    function updateRange() {
      if (start && end) rangeEl.textContent = fmt(start) + " – " + fmt(end);
      else if (start) rangeEl.textContent = "Anreise " + fmt(start) + " · jetzt Abreise wählen";
      else rangeEl.textContent = "Zeitraum wählen";
    }

    function render() {
      titleEl.textContent = MONATE[view.getMonth()] + " " + view.getFullYear();
      grid.innerHTML = "";
      DOW.forEach(function (d) {
        var el = document.createElement("div"); el.className = "cal__dow"; el.textContent = d; grid.appendChild(el);
      });
      var startDow = (view.getDay() + 6) % 7;
      var days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
      var today = new Date(); today.setHours(0, 0, 0, 0);
      for (var i = 0; i < startDow; i++) {
        var e = document.createElement("div"); e.className = "cal__day is-empty"; grid.appendChild(e);
      }
      for (var d = 1; d <= days; d++) {
        var date = new Date(view.getFullYear(), view.getMonth(), d);
        var btn = document.createElement("button");
        btn.type = "button"; btn.className = "cal__day"; btn.textContent = d;
        if (date < today) btn.disabled = true;
        if (sameDay(date, start)) btn.classList.add("range-start");
        if (sameDay(date, end)) btn.classList.add("range-end");
        if (start && !end && sameDay(date, start)) btn.classList.add("range-end");
        if (start && end && date > start && date < end) btn.classList.add("in-range");
        (function (dt) {
          btn.addEventListener("click", function () {
            if (!start || (start && end)) { start = dt; end = null; }
            else if (dt > start) { end = dt; }
            else { start = dt; end = null; }
            updateRange(); render();
          });
        })(date);
        grid.appendChild(btn);
      }
    }

    card.querySelector(".cal__prev").addEventListener("click", function () {
      view.setMonth(view.getMonth() - 1); render();
    });
    card.querySelector(".cal__next").addEventListener("click", function () {
      view.setMonth(view.getMonth() + 1); render();
    });
    card.querySelector(".booking-card__submit").addEventListener("click", function () {
      var apt = card.getAttribute("data-apartment") || "";
      var wa = card.getAttribute("data-whatsapp") || "";
      var guests = card.querySelector(".booking-card__guests select").value;
      var wofuer = apt ? ("Apartment " + apt) : "die Villa Isabel";
      var text = "Hi! Ich interessiere mich für " + wofuer + ":\n\n" +
        "• Anreise: " + (start ? fmt(start) : "—") + "\n" +
        "• Abreise: " + (end ? fmt(end) : "—") + "\n" +
        "• Gäste: " + guests + "\n\n" +
        "Ist der Zeitraum frei?";
      window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    });

    updateRange(); render();
  }

  /* Modal-Markup einmalig erzeugen (falls nicht schon im HTML vorhanden) */
  function ensureModal() {
    var existing = document.getElementById("booking-modal");
    if (existing) return existing;
    var wrap = document.createElement("div");
    wrap.className = "modal"; wrap.id = "booking-modal"; wrap.hidden = true;
    wrap.innerHTML =
      '<div class="modal__overlay" data-close></div>' +
      '<div class="modal__dialog" role="dialog" aria-modal="true" aria-label="Verfügbarkeit anfragen">' +
      '  <button class="modal__x" type="button" data-close aria-label="Schließen">×</button>' +
      '  <div class="booking-card" data-apartment="" data-whatsapp="385955555512">' +
      '    <p class="eyebrow">Verfügbarkeit</p>' +
      '    <h3>Verfügbarkeit anfragen</h3>' +
      '    <p class="booking-card__sub">Zeitraum wählen und unverbindlich anfragen — wir antworten meist in Minuten.</p>' +
      '    <div class="cal__head">' +
      '      <span class="cal__title">Monat</span>' +
      '      <span class="cal__nav">' +
      '        <button type="button" class="cal__prev" aria-label="Vorheriger Monat">‹</button>' +
      '        <button type="button" class="cal__next" aria-label="Nächster Monat">›</button>' +
      '      </span>' +
      '    </div>' +
      '    <div class="cal__grid"></div>' +
      '    <div class="booking-card__foot">' +
      '      <span class="booking-card__range">Zeitraum wählen</span>' +
      '      <span class="booking-card__guests">' +
      '        <label for="bc-guests">Gäste</label>' +
      '        <select id="bc-guests"><option>1</option><option selected>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select>' +
      '      </span>' +
      '    </div>' +
      '    <button type="button" class="btn btn--primary booking-card__submit">Anfragen</button>' +
      '  </div>' +
      '</div>';
    document.body.appendChild(wrap);
    return wrap;
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!document.querySelector("[data-book]")) return;
    var modal = ensureModal();
    var card = modal.querySelector(".booking-card");
    var heading = card.querySelector("h3");
    initCalendar(card);

    function open(apt) {
      card.setAttribute("data-apartment", apt || "");
      heading.textContent = apt ? ("Apartment " + apt + " buchen") : "Verfügbarkeit anfragen";
      modal.hidden = false;
      document.body.style.overflow = "hidden";
    }
    function close() {
      modal.hidden = true;
      document.body.style.overflow = "";
    }

    Array.prototype.forEach.call(document.querySelectorAll("[data-book]"), function (btn) {
      btn.addEventListener("click", function (e) { e.preventDefault(); open(btn.getAttribute("data-book")); });
    });
    Array.prototype.forEach.call(modal.querySelectorAll("[data-close]"), function (el) {
      el.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) close();
    });
  });
})();

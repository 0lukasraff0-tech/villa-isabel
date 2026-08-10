/* =========================================================
   Villa Isabel — Buchungs-Kalender
   1) Modal: öffnet sich zentriert über [data-book]-Buttons
   2) Kontaktformular: Kalenderblatt statt Datumsfelder
   „Anfragen" öffnet eine vorausgefüllte WhatsApp-Nachricht.
   Mindestaufenthalt: 3 Nächte.
   ========================================================= */
(function () {
  var MONATE = ["Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"];
  var DOW = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  var MIN_NAECHTE = 3;

  function fmt(d) {
    return ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear();
  }
  function sameDay(a, b) { return a && b && a.toDateString() === b.toDateString(); }

  /* Wiederverwendbarer Kalender: root braucht .cal__grid, .cal__title,
     .cal__prev, .cal__next. onChange(start, end, naechte) bei jeder Auswahl. */
  function createCalendar(root, onChange) {
    var view = new Date(); view.setDate(1); view.setHours(0, 0, 0, 0);
    var start = null, end = null;
    var grid = root.querySelector(".cal__grid");
    var titleEl = root.querySelector(".cal__title");

    function nights() {
      return (start && end) ? Math.round((end - start) / 86400000) : 0;
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
            onChange(start, end, nights()); render();
          });
        })(date);
        grid.appendChild(btn);
      }
    }

    root.querySelector(".cal__prev").addEventListener("click", function () {
      view.setMonth(view.getMonth() - 1); render();
    });
    root.querySelector(".cal__next").addEventListener("click", function () {
      view.setMonth(view.getMonth() + 1); render();
    });

    render();
    onChange(start, end, 0);
    return { getStart: function () { return start; }, getEnd: function () { return end; }, getNights: nights };
  }

  /* ---------- 1) Buchungs-Modal ---------- */
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

  function initModal() {
    if (!document.querySelector("[data-book]")) return;
    var modal = ensureModal();
    var card = modal.querySelector(".booking-card");
    var heading = card.querySelector("h3");
    var rangeEl = card.querySelector(".booking-card__range");
    var submitEl = card.querySelector(".booking-card__submit");

    var cal = createCalendar(card, function (start, end, n) {
      var ok = n >= MIN_NAECHTE;
      if (start && end && ok) rangeEl.textContent = fmt(start) + " – " + fmt(end) + " · " + n + " Nächte";
      else if (start && end) rangeEl.textContent = fmt(start) + " – " + fmt(end) + " · Mindestaufenthalt " + MIN_NAECHTE + " Nächte";
      else if (start) rangeEl.textContent = "Anreise " + fmt(start) + " · jetzt Abreise wählen";
      else rangeEl.textContent = "Zeitraum wählen · ab " + MIN_NAECHTE + " Nächten";
      submitEl.disabled = !ok;
    });

    submitEl.addEventListener("click", function () {
      if (cal.getNights() < MIN_NAECHTE) return;
      var apt = card.getAttribute("data-apartment") || "";
      var wa = card.getAttribute("data-whatsapp") || "";
      var guests = card.querySelector(".booking-card__guests select").value;
      var wofuer = apt ? ("Apartment " + apt) : "die Villa Isabel";
      var text = "Hi! Ich interessiere mich für " + wofuer + ":\n\n" +
        "• Anreise: " + fmt(cal.getStart()) + "\n" +
        "• Abreise: " + fmt(cal.getEnd()) + " (" + cal.getNights() + " Nächte)\n" +
        "• Gäste: " + guests + "\n\n" +
        "Ist der Zeitraum frei?";
      window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    });

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
  }

  /* ---------- 2) Kontaktformular: Kalenderblatt + Apartment-Chips ---------- */
  function initForm() {
    var form = document.getElementById("anfrage-form");
    if (!form) return;
    var calRoot = form.querySelector(".form-cal");

    if (calRoot) {
      var inA = form.querySelector('input[name="anreise"]');
      var inB = form.querySelector('input[name="abreise"]');
      var rangeEl = calRoot.querySelector(".form-cal__range");
      var submitBtn = form.querySelector('button[type="submit"]');

      createCalendar(calRoot, function (start, end, n) {
        inA.value = start ? fmt(start) : "";
        inB.value = end ? fmt(end) : "";
        var invalid = !!start && (!end || n < MIN_NAECHTE);
        if (start && end && n >= MIN_NAECHTE) rangeEl.textContent = fmt(start) + " – " + fmt(end) + " · " + n + " Nächte";
        else if (start && end) rangeEl.textContent = "Mindestaufenthalt " + MIN_NAECHTE + " Nächte";
        else if (start) rangeEl.textContent = "Anreise " + fmt(start) + " · jetzt Abreise wählen";
        else rangeEl.textContent = "Zeitraum wählen · ab " + MIN_NAECHTE + " Nächten";
        /* Ohne Auswahl darf man senden (allgemeine Anfrage); eine angefangene
           oder zu kurze Auswahl blockiert, bis sie gültig ist. */
        submitBtn.disabled = invalid;
      });
    }

    var chipWrap = form.querySelector(".apt-chips");
    if (chipWrap) {
      var hidden = form.querySelector('input[name="apartment"]');
      Array.prototype.forEach.call(chipWrap.querySelectorAll(".apt-chip"), function (chip) {
        chip.addEventListener("click", function () {
          var wasActive = chip.classList.contains("active");
          Array.prototype.forEach.call(chipWrap.querySelectorAll(".apt-chip"), function (c) { c.classList.remove("active"); });
          if (wasActive) { hidden.value = ""; return; }
          chip.classList.add("active");
          hidden.value = chip.getAttribute("data-value");
        });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initModal();
    initForm();
  });
})();

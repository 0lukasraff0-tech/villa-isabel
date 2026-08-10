/* =========================================================
   Villa Isabel — Buchungs-Kalender (dreisprachig DE/EN/HR)
   1) Modal: öffnet sich zentriert über [data-book]-Buttons,
      mit Apartment-Chips (Sophia/Terra/Azure/Gesamte Villa)
   2) Kontaktformular: Kalenderblatt statt Datumsfelder
   „Anfragen" öffnet eine vorausgefüllte WhatsApp-Nachricht
   (immer Englisch — die Gastgeberin spricht EN/HR).
   Mindestaufenthalt: 3 Nächte.
   ========================================================= */
(function () {
  var MIN_NAECHTE = 3;
  var WA_NUMMER = "385955555512";

  var STR = {
    de: {
      months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
      dow: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
      avail: "Verfügbarkeit anfragen",
      bookApt: function (a) { return a === "Gesamte Villa" ? "Gesamte Villa buchen" : "Apartment " + a + " buchen"; },
      pick: "Zeitraum wählen · ab " + MIN_NAECHTE + " Nächten",
      minStay: "Mindestaufenthalt " + MIN_NAECHTE + " Nächte",
      arrival: function (d) { return "Anreise " + d + " · jetzt Abreise wählen"; },
      nights: function (n) { return n + " Nächte"; }
    },
    en: {
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      dow: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      avail: "Check availability",
      bookApt: function (a) { return a === "Gesamte Villa" ? "Book the entire villa" : "Book Apartment " + a; },
      pick: "Select dates · " + MIN_NAECHTE + " nights minimum",
      minStay: "Minimum stay: " + MIN_NAECHTE + " nights",
      arrival: function (d) { return "Arrival " + d + " · now select departure"; },
      nights: function (n) { return n + " nights"; }
    },
    hr: {
      months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
      dow: ["Po", "Ut", "Sr", "Če", "Pe", "Su", "Ne"],
      avail: "Provjeri dostupnost",
      bookApt: function (a) { return a === "Gesamte Villa" ? "Rezerviraj cijelu vilu" : "Rezerviraj apartman " + a; },
      pick: "Odaberite razdoblje · min. " + MIN_NAECHTE + " noćenja",
      minStay: "Minimalni boravak: " + MIN_NAECHTE + " noćenja",
      arrival: function (d) { return "Dolazak " + d + " · odaberite odlazak"; },
      nights: function (n) { return n + " noćenja"; }
    }
  };

  function lang() {
    try { var s = localStorage.getItem("villaLang"); if (s && STR[s]) return s; } catch (e) {}
    var l = (document.documentElement.lang || navigator.language || "en").slice(0, 2).toLowerCase();
    return STR[l] ? l : "en";
  }
  function T() { return STR[lang()]; }

  function fmt(d) {
    return ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear();
  }
  function sameDay(a, b) { return a && b && a.toDateString() === b.toDateString(); }

  /* Maximale Gaestezahl: Sophia (2 SZ) 4, Terra/Azure (3 SZ) 6, Villa/offen 16. */
  function maxGuests(apt) {
    if (apt === "Sophia") return 4;
    if (apt === "Terra" || apt === "Azure") return 6;
    return 16;
  }
  function fillGuestSelect(select, max) {
    var prev = parseInt(select.value, 10) || 2;
    select.innerHTML = "";
    for (var i = 1; i <= max; i++) {
      var o = document.createElement("option");
      o.textContent = i;
      select.appendChild(o);
    }
    select.value = String(Math.min(prev, max));
  }

  /* Wiederverwendbarer Kalender; onChange(start, end, naechte) bei Auswahl. */
  var alleKalender = [];
  function createCalendar(root, onChange) {
    var view = new Date(); view.setDate(1); view.setHours(0, 0, 0, 0);
    var start = null, end = null;
    var grid = root.querySelector(".cal__grid");
    var titleEl = root.querySelector(".cal__title");

    function nights() {
      return (start && end) ? Math.round((end - start) / 86400000) : 0;
    }

    function render() {
      var t = T();
      titleEl.textContent = t.months[view.getMonth()] + " " + view.getFullYear();
      grid.innerHTML = "";
      t.dow.forEach(function (d) {
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
    var api = {
      getStart: function () { return start; },
      getEnd: function () { return end; },
      getNights: nights,
      refresh: function () { render(); onChange(start, end, nights()); }
    };
    alleKalender.push(api);
    return api;
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
      '  <div class="booking-card" data-apartment="">' +
      '    <p class="eyebrow">Verfügbarkeit</p>' +
      '    <h3>Verfügbarkeit anfragen</h3>' +
      '    <p class="booking-card__sub">Zeitraum wählen und unverbindlich anfragen — wir antworten meist in Minuten.</p>' +
      '    <div class="apt-chips">' +
      '      <button type="button" class="apt-chip" data-value="Sophia">Sophia</button>' +
      '      <button type="button" class="apt-chip" data-value="Terra">Terra</button>' +
      '      <button type="button" class="apt-chip" data-value="Azure">Azure</button>' +
      '      <button type="button" class="apt-chip" data-value="Gesamte Villa">Gesamte Villa</button>' +
      '    </div>' +
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
    var guestSel = card.querySelector(".booking-card__guests select");
    var chips = card.querySelectorAll(".apt-chip");

    function setHeading() {
      var apt = card.getAttribute("data-apartment");
      heading.textContent = apt ? T().bookApt(apt) : T().avail;
    }
    function setApartment(apt) {
      card.setAttribute("data-apartment", apt || "");
      Array.prototype.forEach.call(chips, function (c) {
        c.classList.toggle("active", c.getAttribute("data-value") === apt);
      });
      fillGuestSelect(guestSel, maxGuests(apt));
      setHeading();
    }
    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener("click", function () {
        var val = chip.getAttribute("data-value");
        setApartment(card.getAttribute("data-apartment") === val ? "" : val);
      });
    });

    var cal = createCalendar(card, function (start, end, n) {
      var t = T();
      var ok = n >= MIN_NAECHTE;
      if (start && end && ok) rangeEl.textContent = fmt(start) + " – " + fmt(end) + " · " + t.nights(n);
      else if (start && end) rangeEl.textContent = fmt(start) + " – " + fmt(end) + " · " + t.minStay;
      else if (start) rangeEl.textContent = t.arrival(fmt(start));
      else rangeEl.textContent = t.pick;
      submitEl.disabled = !ok;
    });

    submitEl.addEventListener("click", function () {
      if (cal.getNights() < MIN_NAECHTE) return;
      var apt = card.getAttribute("data-apartment") || "";
      var wofuer = apt === "Gesamte Villa" ? "the entire Villa Isabel" : apt ? ("Apartment " + apt) : "Villa Isabel";
      var text = "Hi! I'm interested in staying at " + wofuer + ":\n\n" +
        "• Arrival: " + fmt(cal.getStart()) + "\n" +
        "• Departure: " + fmt(cal.getEnd()) + " (" + cal.getNights() + " nights)\n" +
        "• Guests: " + guestSel.value + "\n\n" +
        "Is this period available? Thank you!";
      window.open("https://wa.me/" + WA_NUMMER + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    });

    function open(apt) {
      setApartment(apt || "");
      cal.refresh();
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

    /* Sprachwechsel: Kopfzeile des Modals live nachziehen */
    document.addEventListener("click", function (e) {
      var b = e.target && e.target.closest ? e.target.closest(".lang-switch button") : null;
      if (b) setTimeout(setHeading, 0);
    });
  }

  /* ---------- 2) Kontaktformular ---------- */
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
        var t = T();
        inA.value = start ? fmt(start) : "";
        inB.value = end ? fmt(end) : "";
        var invalid = !!start && (!end || n < MIN_NAECHTE);
        if (start && end && n >= MIN_NAECHTE) rangeEl.textContent = fmt(start) + " – " + fmt(end) + " · " + t.nights(n);
        else if (start && end) rangeEl.textContent = t.minStay;
        else if (start) rangeEl.textContent = t.arrival(fmt(start));
        else rangeEl.textContent = t.pick;
        submitBtn.disabled = invalid;
      });
    }

    var chipWrap = form.querySelector(".apt-chips");
    if (chipWrap) {
      var hidden = form.querySelector('input[name="apartment"]');
      var guestSel = form.querySelector('select[name="gaeste"]');
      if (guestSel) fillGuestSelect(guestSel, maxGuests(hidden.value));
      Array.prototype.forEach.call(chipWrap.querySelectorAll(".apt-chip"), function (chip) {
        chip.addEventListener("click", function () {
          var wasActive = chip.classList.contains("active");
          Array.prototype.forEach.call(chipWrap.querySelectorAll(".apt-chip"), function (c) { c.classList.remove("active"); });
          if (wasActive) { hidden.value = ""; }
          else { chip.classList.add("active"); hidden.value = chip.getAttribute("data-value"); }
          if (guestSel) fillGuestSelect(guestSel, maxGuests(hidden.value));
        });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initModal();
    initForm();
    /* Sprachwechsel: alle Kalender (Monat, Wochentage, Hinweistexte) neu zeichnen */
    document.addEventListener("click", function (e) {
      var b = e.target && e.target.closest ? e.target.closest(".lang-switch button") : null;
      if (b) setTimeout(function () { alleKalender.forEach(function (c) { c.refresh(); }); }, 0);
    });
  });
})();

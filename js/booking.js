/* =========================================================
   Villa Isabel — Buchungs-Panel mit visuellem Kalender
   Ruhiges Monatsblatt mit Zeitraum-Auswahl; „Anfragen" öffnet
   eine vorausgefüllte WhatsApp-Nachricht. Platzhalter bis zum
   echten Channel-Manager-Widget.
   ========================================================= */
(function () {
  var MONATE = ["Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"];
  var DOW = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  function fmt(d) {
    return ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear();
  }
  function sameDay(a, b) { return a && b && a.toDateString() === b.toDateString(); }

  function init(card) {
    var apt = card.getAttribute("data-apartment") || "";
    var wa = card.getAttribute("data-whatsapp") || "";
    var view = new Date(); view.setDate(1); view.setHours(0, 0, 0, 0);
    var start = null, end = null;

    var grid = card.querySelector(".cal__grid");
    var title = card.querySelector(".cal__title");
    var rangeEl = card.querySelector(".booking-card__range");

    function updateRange() {
      if (start && end) rangeEl.textContent = fmt(start) + " – " + fmt(end);
      else if (start) rangeEl.textContent = "Anreise " + fmt(start) + " · jetzt Abreise wählen";
      else rangeEl.textContent = "Zeitraum wählen";
    }

    function render() {
      title.textContent = MONATE[view.getMonth()] + " " + view.getFullYear();
      grid.innerHTML = "";
      DOW.forEach(function (d) {
        var el = document.createElement("div"); el.className = "cal__dow"; el.textContent = d; grid.appendChild(el);
      });
      var startDow = (view.getDay() + 6) % 7; // Montag = 0
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
      var guests = card.querySelector(".booking-card__guests select").value;
      var text = "Hi! Ich interessiere mich für Apartment " + apt + " in der Villa Isabel:\n\n" +
        "• Anreise: " + (start ? fmt(start) : "—") + "\n" +
        "• Abreise: " + (end ? fmt(end) : "—") + "\n" +
        "• Gäste: " + guests + "\n\n" +
        "Ist der Zeitraum frei?";
      window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    });

    updateRange(); render();
  }

  document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(document.querySelectorAll(".booking-card"), init);
  });
})();

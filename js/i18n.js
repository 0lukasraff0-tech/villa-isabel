/* =========================================================
   Villa Isabel — Mehrsprachigkeit (EN · DE · HR)
   Quelle im HTML = Deutsch. Engine ersetzt Texte nach Wörterbuch.
   Auto-Erkennung der Browsersprache (Fallback Englisch), Umschalter oben.
   Nicht übersetzte Strings bleiben einfach Deutsch (wird Schritt für Schritt ergänzt).
   HR-Übersetzungen bitte von Muttersprachler:in prüfen lassen.
   ========================================================= */
(function () {
  var STORE = "villaLang";

  // Deutscher Quelltext -> { en, hr }
  var DICT = {
    // ---- Navigation / Footer ----
    "Start": { en: "Home", hr: "Početna" },
    "Apartments": { en: "Apartments", hr: "Apartmani" },
    "Galerie": { en: "Gallery", hr: "Galerija" },
    "Erlebnisse": { en: "Experiences", hr: "Doživljaji" },
    "Lage & Umgebung": { en: "Location & Surroundings", hr: "Lokacija i okolica" },
    "Kontakt": { en: "Contact", hr: "Kontakt" },
    "Jetzt anfragen": { en: "Enquire now", hr: "Pošalji upit" },
    "Matulji · Kvarner Bucht": { en: "Matulji · Kvarner Bay", hr: "Matulji · Kvarnerski zaljev" },
    "Seiten": { en: "Pages", hr: "Stranice" },
    "Direkt buchen": { en: "Book direct", hr: "Rezerviraj izravno" },
    "Drei Apartments, ein Gemeinschaftspool und der Charme der kroatischen Riviera — bei Opatija an der Kvarner Bucht.": { en: "Three apartments, a shared pool and the charm of the Croatian Riviera — near Opatija on the Kvarner Bay.", hr: "Tri apartmana, zajednički bazen i šarm hrvatske rivijere — kraj Opatije na Kvarnerskom zaljevu." },
    "© 2026 Villa Isabel · Matulji, Kroatien": { en: "© 2026 Villa Isabel · Matulji, Croatia", hr: "© 2026 Villa Isabel · Matulji, Hrvatska" },
    "An der Kvarner Bucht · Kroatien": { en: "On the Kvarner Bay · Croatia", hr: "Na Kvarnerskom zaljevu · Hrvatska" },

    // ---- Hero ----
    "Kvarner Bucht · Kroatien": { en: "Kvarner Bay · Croatia", hr: "Kvarnerski zaljev · Hrvatska" },
    "Eine Villa.<br>Drei Apartments.<br>Ein Sommer zum Bleiben.": { en: "One villa.<br>Three apartments.<br>A summer to remember.", hr: "Jedna vila.<br>Tri apartmana.<br>Ljeto za pamćenje." },
    "Neu, modern und mit Blick auf die ganze Kvarner Bucht aus jedem Zimmer — mit Pool, Aufzug und Opatija nur Minuten entfernt.": { en: "New, modern and with views over the entire Kvarner Bay from every room — with pool, elevator and Opatija just minutes away.", hr: "Novo, moderno i s pogledom na cijeli Kvarnerski zaljev iz svake sobe — s bazenom, liftom i Opatijom udaljenom tek nekoliko minuta." },
    "Apartments ansehen": { en: "View apartments", hr: "Pogledaj apartmane" },
    "Verfügbarkeit anfragen": { en: "Check availability", hr: "Provjeri dostupnost" },

    // ---- Highlights ----
    "Willkommen": { en: "Welcome", hr: "Dobrodošli" },
    "Alles unter einem Dach": { en: "Everything under one roof", hr: "Sve pod jednim krovom" },
    "Drei stilvolle Apartments in einer Villa am Meer — ein ruhiger Rückzugsort zum Wohlfühlen, mit Pool und Blick über die Kvarner Bucht, und doch ganz nah an Opatija.": { en: "Three stylish apartments in one seaside villa — a calm retreat to feel at home, with a pool and views over the Kvarner Bay, yet just minutes from Opatija.", hr: "Tri elegantna apartmana u vili uz more — miran kutak za opuštanje, s bazenom i pogledom na Kvarnerski zaljev, a ipak nadomak Opatije." },
    "Gemeinschaftspool": { en: "Shared pool", hr: "Zajednički bazen" },
    "Großzügiger Pool mit Sonnenterrasse und Liegen — zum Entspannen mit Blick über die Bucht.": { en: "A generous pool with sun terrace and loungers — to relax with a view over the bay.", hr: "Prostran bazen sa sunčalištem i ležaljkama — za opuštanje uz pogled na zaljev." },
    "Grill & Outdoor-Lounge": { en: "Grill & outdoor lounge", hr: "Roštilj i vanjski salon" },
    "Überdachter Grill- und Loungebereich für entspannte Abende unter freiem Himmel.": { en: "A covered grill and lounge area for relaxed evenings under the open sky.", hr: "Natkriveni prostor za roštilj i druženje za opuštene večeri pod vedrim nebom." },
    "Blick über die Bucht": { en: "Views over the bay", hr: "Pogled na zaljev" },
    "Panorama auf die Kvarner Bucht und die Adria — von Terrasse und Balkonen aus.": { en: "Panoramic views over the Kvarner Bay and the Adriatic — from terrace and balconies.", hr: "Panorama Kvarnerskog zaljeva i Jadrana — s terase i balkona." },

    // ---- Die Villa ----
    "Die Villa": { en: "The villa", hr: "Vila" },
    "Mediterranes Lebensgefühl auf drei Etagen": { en: "Mediterranean living across three floors", hr: "Mediteranski ugođaj na tri etaže" },
    "Die Villa Isabel ist ein neues, modern eingerichtetes Haus mit mehreren eigenständigen Apartments. Jede Einheit ist komplett ausgestattet und privat — den Pool und die Außenbereiche teilen sich alle Gäste. Das Beste: der Blick auf die ganze Kvarner Bucht aus jedem Zimmer.": { en: "Villa Isabel is a new, modern home with several independent apartments. Each unit is fully equipped and private — the pool and outdoor areas are shared by all guests. Best of all: views over the entire Kvarner Bay from every room.", hr: "Villa Isabel novi je, moderno uređeni objekt s nekoliko samostalnih apartmana. Svaka je jedinica potpuno opremljena i privatna — bazen i vanjske prostore dijele svi gosti. Najbolje od svega: pogled na cijeli Kvarnerski zaljev iz svake sobe." },
    "Neubau, modern möbliert & voll ausgestattet": { en: "Newly built, modern furnishings & fully equipped", hr: "Novogradnja, moderno namještena i potpuno opremljena" },
    "Meerblick auf die Kvarner Bucht aus jedem Zimmer": { en: "Sea views over the Kvarner Bay from every room", hr: "Pogled na more i Kvarnerski zaljev iz svake sobe" },
    "Aufzug & kostenlose Privatparkplätze": { en: "Elevator & free private parking", hr: "Lift i besplatni privatni parking" },
    "WLAN, Klimaanlage & Smart-TV in allen Wohnungen": { en: "Wi-Fi, air conditioning & smart TV in every apartment", hr: "Wi-Fi, klima-uređaj i pametni TV u svim apartmanima" },
    "E-Auto-Ladestation am Haus (gegen Aufpreis)": { en: "EV charging station on site (surcharge)", hr: "Punionica za električne automobile (uz doplatu)" },
    "Die Apartments entdecken": { en: "Discover the apartments", hr: "Otkrij apartmane" },

    // ---- Pool ----
    "Draußen": { en: "Outdoors", hr: "Vani" },
    "Pool, Grill und endlose Sommerabende": { en: "Pool, grill and endless summer evenings", hr: "Bazen, roštilj i beskrajne ljetne večeri" },
    "Das Herz der Villa liegt im Freien: Ein gemeinsamer Pool lädt zum Abkühlen ein, die überdachte Grillarea zum gemeinsamen Kochen, und von der Terrasse aus genießt man den Sonnenuntergang über der Adria.": { en: "The heart of the villa is outdoors: a shared pool to cool off, a covered grill area for cooking together, and a terrace to enjoy the sunset over the Adriatic.", hr: "Srce vile je vani: zajednički bazen za osvježenje, natkriveni roštilj za zajedničko kuhanje i terasa s koje se uživa u zalasku sunca nad Jadranom." },
    "Pool mit Liegen & Sonnenschirmen": { en: "Pool with loungers & parasols", hr: "Bazen s ležaljkama i suncobranima" },
    "Überdachte Grill- und Essbereich": { en: "Covered grill and dining area", hr: "Natkriveni prostor za roštilj i objedovanje" },
    "Lounge-Ecke für den Abend": { en: "Lounge corner for the evening", hr: "Kutak za opuštanje navečer" },
    "Zur Bildergalerie": { en: "To the photo gallery", hr: "Na galeriju fotografija" },

    // ---- Cinematic Band ----
    "Die Kvarner Bucht": { en: "The Kvarner Bay", hr: "Kvarnerski zaljev" },
    "Wo die Berge das Meer küssen": { en: "Where the mountains meet the sea", hr: "Gdje planine ljube more" },
    "Türkises Wasser, mediterrane Küstenstädtchen und die Učka im Rücken — willkommen an einem der schönsten Flecken der Adria.": { en: "Turquoise water, charming coastal towns and the Učka mountains behind you — welcome to one of the most beautiful corners of the Adriatic.", hr: "Tirkizno more, šarmantni priobalni gradići i Učka iza vas — dobrodošli u jedan od najljepših kutaka Jadrana." },
    "Erlebnisse entdecken": { en: "Discover experiences", hr: "Otkrij doživljaje" },

    // ---- Apartments-Vorschau ----
    "Wohnen": { en: "Stay", hr: "Smještaj" },
    "Drei Apartments, ein Zuhause": { en: "Three apartments, one home", hr: "Tri apartmana, jedan dom" },
    "Jede Einheit hat ihren eigenen Charakter — wähle die passende für deinen Aufenthalt.": { en: "Each unit has its own character — choose the right one for your stay.", hr: "Svaka jedinica ima svoj karakter — odaberite onu pravu za svoj boravak." },
    "2 Schlafzimmer": { en: "2 bedrooms", hr: "2 spavaće sobe" },
    "3 Schlafzimmer": { en: "3 bedrooms", hr: "3 spavaće sobe" },
    "4 Gäste": { en: "4 guests", hr: "4 gosta" },
    "6 Gäste": { en: "6 guests", hr: "6 gostiju" },
    "3 Bäder": { en: "3 bathrooms", hr: "3 kupaonice" },
    "Schön, modern, voll ausgestattete Küche — Blick auf die Kvarner Bucht aus jedem Zimmer.": { en: "Beautiful, modern, fully equipped kitchen — views over the Kvarner Bay from every room.", hr: "Lijep, moderan, potpuno opremljena kuhinja — pogled na Kvarnerski zaljev iz svake sobe." },
    "Modern und lichtdurchflutet mit voll ausgestatteter Küche und großen Terrassen.": { en: "Modern and light-filled with a fully equipped kitchen and large terraces.", hr: "Moderan i pun svjetla, s potpuno opremljenom kuhinjom i velikim terasama." },
    "Geräumig und voll möbliert mit Blick auf die Bucht und die Stadt Opatija.": { en: "Spacious and fully furnished with views over the bay and the town of Opatija.", hr: "Prostran i potpuno namješten, s pogledom na zaljev i grad Opatiju." },
    "Details ansehen": { en: "View details", hr: "Pogledaj detalje" },

    // ---- Gastgeberin ----
    "Ihre Gastgeberin": { en: "Your host", hr: "Vaša domaćica" },
    "Willkommen — ich bin Silvana": { en: "Welcome — I'm Silvana", hr: "Dobrodošli — ja sam Silvana" },
    "Die Villa Isabel ist mein Herzensprojekt. Mir ist wichtig, dass ihr euch vom ersten Moment an wohlfühlt: ein blitzsauberes, modernes Zuhause am Meer, eine schnelle Antwort, wenn ihr etwas braucht — und gern auch meine persönlichen Tipps für die schönsten Restaurants und Buchten der Gegend.": { en: "Villa Isabel is my passion project. It matters to me that you feel at home from the very first moment: a spotless, modern home by the sea, a quick reply whenever you need something — and gladly my personal tips for the loveliest restaurants and coves in the area.", hr: "Villa Isabel moj je projekt iz srca. Važno mi je da se osjećate ugodno od prvog trenutka: besprijekorno čist, moderan dom uz more, brz odgovor kad nešto trebate — i rado moji osobni savjeti za najljepše restorane i uvale u okolici." },
    "Ich freue mich darauf, euch an der Kvarner Bucht begrüßen zu dürfen.": { en: "I look forward to welcoming you to the Kvarner Bay.", hr: "Veselim se što ću vas ugostiti na Kvarnerskom zaljevu." },
    "Sag Hallo": { en: "Say hello", hr: "Javite se" },

    // ---- Gästestimmen ----
    "Gästestimmen": { en: "Guest voices", hr: "Dojmovi gostiju" },
    "Was Gäste erwartet": { en: "What guests can expect", hr: "Što gosti mogu očekivati" },
    "Modern, ruhig, mit Meerblick aus jedem Zimmer — und eine Gastgeberin, die sich kümmert.": { en: "Modern, peaceful, with sea views from every room — and a host who cares.", hr: "Moderno, mirno, s pogledom na more iz svake sobe — i domaćica koja brine." },
    "„Der Blick auf die Bucht aus jedem Zimmer ist unbeschreiblich — wir sind morgens nur wegen des Meeres aufgewacht. Alles blitzsauber und modern.“": { en: "“The view over the bay from every room is indescribable — we woke up early just for the sea. Everything spotless and modern.”", hr: "„Pogled na zaljev iz svake sobe je neopisiv — budili smo se rano samo zbog mora. Sve besprijekorno čisto i moderno.“" },
    "— Anna & Markus, Deutschland": { en: "— Anna & Markus, Germany", hr: "— Anna i Markus, Njemačka" },
    "„Ruhig, elegant und doch nur Minuten von Opatija. Pool und Terrasse am Abend waren unser absoluter Lieblingsplatz.“": { en: "“Quiet, elegant and yet just minutes from Opatija. The pool and terrace in the evening were our absolute favorite spot.”", hr: "„Mirno, elegantno, a ipak tek nekoliko minuta od Opatije. Bazen i terasa navečer bili su naše najdraže mjesto.“" },
    "— Sofia, Italien": { en: "— Sofia, Italy", hr: "— Sofia, Italija" },
    "„Silvana war eine wunderbare Gastgeberin — schnelle Antworten und persönliche Tipps für die besten Restaurants. Wir kommen wieder.“": { en: "“Silvana was a wonderful host — quick replies and personal tips for the best restaurants. We'll be back.”", hr: "„Silvana je bila divna domaćica — brzi odgovori i osobni savjeti za najbolje restorane. Vraćamo se.“" },
    "— James & Claire, Großbritannien": { en: "— James & Claire, United Kingdom", hr: "— James i Claire, Velika Britanija" },

    // ---- CTA ----
    "Bereit für deinen Aufenthalt?": { en: "Ready for your stay?", hr: "Spremni za svoj boravak?" },
    "Frag jetzt deine Wunschtermine an": { en: "Enquire about your preferred dates now", hr: "Pošaljite upit za željene datume" },
    "Direkt und unkompliziert — per WhatsApp, Formular oder über deine bevorzugte Buchungsplattform.": { en: "Direct and easy — via WhatsApp, the form, or your preferred booking platform.", hr: "Izravno i jednostavno — putem WhatsAppa, obrasca ili omiljene platforme za rezervacije." },
    "Per WhatsApp anfragen": { en: "Enquire via WhatsApp", hr: "Upit putem WhatsAppa" },
    "Zum Kontaktformular": { en: "To the contact form", hr: "Na obrazac za upit" },
    "WhatsApp": { en: "WhatsApp", hr: "WhatsApp" },
    "Booking.com": { en: "Booking.com", hr: "Booking.com" },
    "Airbnb": { en: "Airbnb", hr: "Airbnb" },

    // ---- Apartments-Seite ----
    "Die Apartments": { en: "The apartments", hr: "Apartmani" },
    "Drei Wohnungen, drei Charaktere": { en: "Three apartments, three characters", hr: "Tri apartmana, tri karaktera" },
    "Jedes Apartment ist privat und voll ausgestattet. Pool, Grillterrasse und Garten teilen sich alle Gäste der Villa.": { en: "Each apartment is private and fully equipped. The pool, grill terrace and garden are shared by all guests.", hr: "Svaki je apartman privatan i potpuno opremljen. Bazen, terasu s roštiljem i vrt dijele svi gosti." },
    "2 Schlafzimmer · Meerblick aus jedem Zimmer": { en: "2 bedrooms · sea view from every room", hr: "2 spavaće sobe · pogled na more iz svake sobe" },
    "3 Schlafzimmer · große Terrassen": { en: "3 bedrooms · large terraces", hr: "3 spavaće sobe · velike terase" },
    "3 Schlafzimmer · Blick auf Opatija": { en: "3 bedrooms · view of Opatija", hr: "3 spavaće sobe · pogled na Opatiju" },
    "bis 4 Gäste": { en: "up to 4 guests", hr: "do 4 gosta" },
    "bis 6 Gäste": { en: "up to 6 guests", hr: "do 6 gostiju" },
    "2 Betten": { en: "2 beds", hr: "2 kreveta" },
    "3 Betten": { en: "3 beds", hr: "3 kreveta" },
    "Apartment Sophia ist schön, modern und mit einer voll ausgestatteten Küche samt allem für einen entspannten Urlaub eingerichtet. Das Highlight: der Blick auf die gesamte Kvarner Bucht aus jedem Zimmer. Aufzug, Pool, kostenlose Privatparkplätze und Self-Check-in inklusive.": { en: "Apartment Sophia is beautiful, modern and fitted with a fully equipped kitchen and everything for a relaxed holiday. The highlight: views over the entire Kvarner Bay from every room. Elevator, pool, free private parking and self check-in included.", hr: "Apartman Sophia lijep je, moderan i opremljen potpuno opremljenom kuhinjom te svime za opušten odmor. Vrhunac: pogled na cijeli Kvarnerski zaljev iz svake sobe. Lift, bazen, besplatni privatni parking i samostalna prijava uključeni." },
    "Apartment Terra ist hell und einladend, in warmen Naturtönen gehalten. Drei komfortable Schlafzimmer, eine voll ausgestattete Küche zum gemeinsamen Kochen und großzügige Terrassen, auf denen sich der Morgenkaffee mit Blick über die Kvarner Bucht am schönsten genießen lässt. Aufzug, Pool, kostenlose Parkplätze und E-Auto-Ladestation gehören selbstverständlich dazu.": { en: "Apartment Terra is bright and inviting, in warm natural tones. Three comfortable bedrooms, a fully equipped kitchen for cooking together, and generous terraces where the morning coffee is best enjoyed with a view over the Kvarner Bay. Elevator, pool, free parking and EV charging are all part of it.", hr: "Apartman Terra svijetao je i ugodan, u toplim prirodnim tonovima. Tri udobne spavaće sobe, potpuno opremljena kuhinja za zajedničko kuhanje i prostrane terase na kojima se jutarnja kava najbolje uživa uz pogled na Kvarnerski zaljev. Lift, bazen, besplatni parking i punionica za električne automobile podrazumijevaju se." },
    "Apartment Azure ist geräumig, licht und elegant möbliert — mit dem wohl schönsten Ausblick im Haus: über die glitzernde Kvarner Bucht bis hinüber zu den Lichtern von Opatija. Perfekt für alle, die Ruhe und Stil suchen und doch in Minuten an Stränden, Promenade und den besten Restaurants sein möchten. Aufzug, Pool, Privatparkplatz und E-Ladestation inklusive.": { en: "Apartment Azure is spacious, light and elegantly furnished — with arguably the finest view in the house: over the glittering Kvarner Bay across to the lights of Opatija. Perfect for those seeking calm and style yet wanting beaches, the promenade and the best restaurants within minutes. Elevator, pool, private parking and EV charging included.", hr: "Apartman Azure prostran je, svijetao i elegantno namješten — s vjerojatno najljepšim pogledom u kući: na svjetlucavi Kvarnerski zaljev sve do svjetala Opatije. Savršen za one koji traže mir i stil, a ipak žele plaže, šetnicu i najbolje restorane na nekoliko minuta. Lift, bazen, privatni parking i punionica uključeni." },
    "Klimaanlage": { en: "Air conditioning", hr: "Klima-uređaj" },
    "Vollküche": { en: "Full kitchen", hr: "Potpuna kuhinja" },
    "Geschirrspüler": { en: "Dishwasher", hr: "Perilica posuđa" },
    "Backofen & Herd": { en: "Oven & stove", hr: "Pećnica i štednjak" },
    "Kaffeemaschine": { en: "Coffee machine", hr: "Aparat za kavu" },
    "Smart-TV": { en: "Smart TV", hr: "Smart TV" },
    "Balkon/Terrasse": { en: "Balcony / terrace", hr: "Balkon / terasa" },
    "Meerblick": { en: "Sea view", hr: "Pogled na more" },
    "Poolzugang": { en: "Pool access", hr: "Pristup bazenu" },
    "Aufzug": { en: "Elevator", hr: "Lift" },
    "Außendusche": { en: "Outdoor shower", hr: "Vanjski tuš" },
    "Safe": { en: "Safe", hr: "Sef" },
    "Arbeitsplatz": { en: "Workspace", hr: "Radni prostor" },
    "Parkplatz": { en: "Parking", hr: "Parking" },
    "Self-Check-in": { en: "Self check-in", hr: "Samostalna prijava" },
    "Große Terrassen": { en: "Large terraces", hr: "Velike terase" },
    "Balkon mit Meerblick": { en: "Balcony with sea view", hr: "Balkon s pogledom na more" },
    "Blick auf Opatija": { en: "View of Opatija", hr: "Pogled na Opatiju" },
    "Alle Fotos ansehen": { en: "View all photos", hr: "Pogledaj sve fotografije" },
    "Sophia anfragen": { en: "Enquire about Sophia", hr: "Upit za Sophiu" },
    "Terra anfragen": { en: "Enquire about Terra", hr: "Upit za Terru" },
    "Azure anfragen": { en: "Enquire about Azure", hr: "Upit za Azure" },
    "Die ganze Villa für euch": { en: "The whole villa for you", hr: "Cijela vila za vas" },
    "Alle drei Apartments exklusiv": { en: "All three apartments, exclusively", hr: "Sva tri apartmana, ekskluzivno" },
    "Ein ruhiger Rückzugsort am Meer für Familie und enge Freunde — die komplette Villa mit Pool und Außenbereichen, ganz für euch, mit Blick über die Kvarner Bucht.": { en: "A peaceful retreat by the sea for family and close friends — the entire villa with pool and outdoor areas, all to yourselves, with views over the Kvarner Bay.", hr: "Mirno utočište uz more za obitelj i bliske prijatelje — cijela vila s bazenom i vanjskim prostorima, samo za vas, s pogledom na Kvarnerski zaljev." },
    "Gesamte Villa anfragen": { en: "Enquire about the whole villa", hr: "Upit za cijelu vilu" },

    // ---- Galerie ----
    "Einblicke in die Villa Isabel": { en: "A look inside Villa Isabel", hr: "Pogled u Villu Isabel" },
    "Ein erster Überblick — und für jedes Apartment gibt es einen kompletten Foto-Rundgang, nach Räumen sortiert.": { en: "A first overview — and for each apartment there's a full photo tour, sorted by room.", hr: "Prvi pregled — a za svaki apartman tu je potpuni foto-obilazak, razvrstan po prostorijama." },
    "Überblick": { en: "Overview", hr: "Pregled" },
    "Gefällt dir, was du siehst?": { en: "Like what you see?", hr: "Sviđa vam se što vidite?" },
    "Sichere dir deine Wunschtermine": { en: "Secure your preferred dates", hr: "Osigurajte željene datume" },
    "Fotorundgang": { en: "Photo tour", hr: "Foto-obilazak" },
    "Jetzt Termine anfragen": { en: "Enquire about dates now", hr: "Upit za datume" },
    "Apartment Sophia ist schön und gemütlich, modern eingerichtet und mit voll ausgestatteter Küche samt allem für einen entspannten Urlaub. Das Highlight: der Blick auf die gesamte Kvarner Bucht aus jedem Zimmer. Aufzug, Pool, kostenlose Privatparkplätze und Self-Check-in inklusive.": { en: "Apartment Sophia is beautiful and cosy, modern and fitted with a fully equipped kitchen and everything for a relaxed holiday. The highlight: views over the entire Kvarner Bay from every room. Elevator, pool, free private parking and self check-in included.", hr: "Apartman Sophia lijep je i ugodan, moderno uređen i s potpuno opremljenom kuhinjom te svime za opušten odmor. Vrhunac: pogled na cijeli Kvarnerski zaljev iz svake sobe. Lift, bazen, besplatni privatni parking i samostalna prijava uključeni." },
    "Das moderne Apartment Terra besticht durch viel Licht, eine voll ausgestattete Küche, komfortable Schlafzimmer und großzügige Terrassen mit schönem Blick auf die Kvarner Bucht. Kostenlose Parkplätze, Aufzug, Pool und E-Auto-Ladestation inklusive.": { en: "Modern Apartment Terra impresses with plenty of light, a fully equipped kitchen, comfortable bedrooms and generous terraces with a lovely view over the Kvarner Bay. Free parking, elevator, pool and EV charging included.", hr: "Moderni apartman Terra oduševljava obiljem svjetla, potpuno opremljenom kuhinjom, udobnim spavaćim sobama i prostranim terasama s lijepim pogledom na Kvarnerski zaljev. Besplatni parking, lift, bazen i punionica uključeni." },
    "Apartment Azure bietet einen herrlichen Blick auf die Kvarner Bucht und die Stadt Opatija. Geräumig und voll möbliert — perfekt für einen hochwertigen, entspannten Urlaub, nah an Stränden, Top-Restaurants und Opatija. Mit kostenlosem Privatparkplatz, Aufzug, Pool und E-Ladestation.": { en: "Apartment Azure offers a wonderful view over the Kvarner Bay and the town of Opatija. Spacious and fully furnished — perfect for a refined, relaxed holiday, close to beaches, top restaurants and Opatija. With free private parking, elevator, pool and EV charging.", hr: "Apartman Azure pruža prekrasan pogled na Kvarnerski zaljev i grad Opatiju. Prostran i potpuno namješten — savršen za profinjen, opušten odmor, blizu plaža, vrhunskih restorana i Opatije. S besplatnim privatnim parkingom, liftom, bazenom i punionicom." },
    "Wohnzimmer": { en: "Living room", hr: "Dnevni boravak" },
    "Voll ausgestattete Küche": { en: "Fully equipped kitchen", hr: "Potpuno opremljena kuhinja" },
    "Kochnische": { en: "Kitchenette", hr: "Čajna kuhinja" },
    "Essbereich": { en: "Dining area", hr: "Blagovaonica" },
    "Schlafzimmer 1": { en: "Bedroom 1", hr: "Spavaća soba 1" },
    "Schlafzimmer 2": { en: "Bedroom 2", hr: "Spavaća soba 2" },
    "Schlafzimmer 3": { en: "Bedroom 3", hr: "Spavaća soba 3" },
    "Badezimmer 1": { en: "Bathroom 1", hr: "Kupaonica 1" },
    "Badezimmer 2": { en: "Bathroom 2", hr: "Kupaonica 2" },
    "Badezimmer 3": { en: "Bathroom 3", hr: "Kupaonica 3" },
    "Terrasse": { en: "Terrace", hr: "Terasa" },
    "Außenbereich": { en: "Outdoor area", hr: "Vanjski prostor" },
    "Pool": { en: "Pool", hr: "Bazen" },
    "Zusätzliche Fotos": { en: "Additional photos", hr: "Dodatne fotografije" },
    "Weitere Fotos": { en: "More photos", hr: "Više fotografija" },

    // ---- Lage & Umgebung ----
    "Mitten in der Kvarner Bucht": { en: "In the heart of the Kvarner Bay", hr: "U srcu Kvarnerskog zaljeva" },
    "Zwischen den Bergen des Učka und dem türkisen Wasser der Adria — die Villa Isabel liegt ideal, um die kroatische Riviera zu entdecken.": { en: "Between the Učka mountains and the turquoise waters of the Adriatic — Villa Isabel is ideally placed to discover the Croatian Riviera.", hr: "Između planine Učke i tirkiznog Jadrana — Villa Isabel idealno je smještena za otkrivanje hrvatske rivijere." },
    "So findest du uns": { en: "How to find us", hr: "Kako nas pronaći" },
    "Ruhig gelegen, alles in Reichweite": { en: "Quietly located, everything within reach", hr: "Mirno smještena, sve nadohvat ruke" },
    "Die Villa Isabel liegt in der Ivana i Matka Baštijana 2B in Matulji, in ruhiger Lage oberhalb der Küste — und doch nur wenige Minuten von der Lungomare-Promenade, Stränden, Restaurants und dem Stadtleben von Opatija entfernt.": { en: "Villa Isabel sits at Ivana i Matka Baštijana 2B in Matulji, in a quiet location above the coast — yet just minutes from the Lungomare promenade, beaches, restaurants and the buzz of Opatija.", hr: "Villa Isabel nalazi se u Ivana i Matka Baštijana 2B u Matuljima, na mirnoj lokaciji iznad obale — a ipak tek nekoliko minuta od šetnice Lungomare, plaža, restorana i gradskog života Opatije." },
    "Nur Minuten zum nächsten Strand & Meer": { en: "Just minutes to the nearest beach & sea", hr: "Tek nekoliko minuta do najbliže plaže i mora" },
    "Wenige Minuten ins Zentrum von Opatija": { en: "A few minutes to the centre of Opatija", hr: "Nekoliko minuta do centra Opatije" },
    "ca. 20 Minuten nach Rijeka": { en: "approx. 20 minutes to Rijeka", hr: "oko 20 minuta do Rijeke" },
    "ca. 1,5 Std. zum Flughafen Rijeka / 2 Std. nach Triest": { en: "approx. 1.5 hrs to Rijeka Airport / 2 hrs to Trieste", hr: "oko 1,5 h do zračne luke Rijeka / 2 h do Trsta" },
    "Auf Google Maps öffnen": { en: "Open in Google Maps", hr: "Otvori u Google kartama" },
    "Anreise erfragen": { en: "Ask about directions", hr: "Upit o dolasku" },
    "Entdecken": { en: "Discover", hr: "Otkrijte" },
    "Das erwartet dich in der Umgebung": { en: "What awaits you nearby", hr: "Što vas očekuje u okolici" },
    "Von mondäner Belle-Époque bis zu versteckten Badebuchten — die Region rund um die Villa hat für jeden etwas.": { en: "From elegant belle-époque to hidden swimming coves — the region around the villa has something for everyone.", hr: "Od otmjene belle époque do skrivenih uvala za kupanje — kraj oko vile nudi nešto za svakoga." },
    "ca. 10 Min": { en: "approx. 10 min", hr: "oko 10 min" },
    "ca. 20 Min": { en: "approx. 20 min", hr: "oko 20 min" },
    "ab 5 Min": { en: "from 5 min", hr: "od 5 min" },
    "ca. 25 Min": { en: "approx. 25 min", hr: "oko 25 min" },
    "ca. 15 Min": { en: "approx. 15 min", hr: "oko 15 min" },
    "ca. 45 Min": { en: "approx. 45 min", hr: "oko 45 min" },
    "Die elegante Kaiserstadt der Adria mit Belle-Époque-Villen, Parks und der 12 km langen Lungomare-Küstenpromenade.": { en: "The elegant imperial town of the Adriatic, with belle-époque villas, parks and the 12 km Lungomare coastal promenade.", hr: "Elegantni carski grad Jadrana s belle-époque vilama, parkovima i 12 km dugom obalnom šetnicom Lungomare." },
    "Kroatiens lebendige Hafenstadt und Kulturhauptstadt 2020 — mit Korzo-Promenade, Märkten und der Burg Trsat.": { en: "Croatia's vibrant port city and 2020 Capital of Culture — with the Korzo promenade, markets and Trsat Castle.", hr: "Hrvatski živahni lučki grad i Europska prijestolnica kulture 2020. — s Korzom, tržnicama i Trsatskom gradinom." },
    "Strände & Buchten": { en: "Beaches & coves", hr: "Plaže i uvale" },
    "Kristallklares Wasser an den Kies- und Felsstränden von Lovran, Ičići und Mošćenička Draga.": { en: "Crystal-clear water on the pebble and rocky beaches of Lovran, Ičići and Mošćenička Draga.", hr: "Kristalno čisto more na šljunčanim i stjenovitim plažama Lovrana, Ičića i Mošćeničke Drage." },
    "Naturpark Učka": { en: "Učka Nature Park", hr: "Park prirode Učka" },
    "Wanderwege mit Panoramablick über die Bucht bis nach Istrien — ideal für aktive Tage in der Natur.": { en: "Hiking trails with panoramic views over the bay to Istria — ideal for active days in nature.", hr: "Planinarske staze s panoramskim pogledom na zaljev sve do Istre — idealne za aktivne dane u prirodi." },
    "Charmantes Küstenstädtchen, bekannt für Kastanien, Kirschen und mediterranes Flair an der Riviera.": { en: "A charming coastal town, known for chestnuts, cherries and Mediterranean flair on the Riviera.", hr: "Šarmantni priobalni gradić poznat po kestenima, trešnjama i mediteranskom ugođaju na rivijeri." },
    "Inseln der Kvarner Bucht": { en: "Islands of the Kvarner Bay", hr: "Otoci Kvarnerskog zaljeva" },
    "Tagesausflüge nach Krk, Cres oder Rab — per Auto oder Boot zu den schönsten Inseln der Adria.": { en: "Day trips to Krk, Cres or Rab — by car or boat to the most beautiful islands of the Adriatic.", hr: "Jednodnevni izleti na Krk, Cres ili Rab — autom ili brodom do najljepših jadranskih otoka." },
    "Fragen zur Anreise?": { en: "Questions about getting here?", hr: "Pitanja o dolasku?" },
    "Wir helfen gerne weiter": { en: "We're happy to help", hr: "Rado pomažemo" },
    "Per WhatsApp fragen": { en: "Ask via WhatsApp", hr: "Pitajte putem WhatsAppa" },

    // ---- Kontakt ----
    "Kontakt & Buchung": { en: "Contact & booking", hr: "Kontakt i rezervacija" },
    "Per WhatsApp, über das Anfrageformular oder direkt über Booking & Airbnb — wähle einfach den Weg, der dir am liebsten ist.": { en: "Via WhatsApp, the enquiry form, or directly through Booking & Airbnb — simply choose whichever you prefer.", hr: "Putem WhatsAppa, obrasca za upit ili izravno preko Bookinga i Airbnba — odaberite što vam najviše odgovara." },
    "Direkter Draht": { en: "Direct line", hr: "Izravna linija" },
    "Am schnellsten per WhatsApp — meist antworten wir innerhalb weniger Stunden.": { en: "Fastest via WhatsApp — we usually reply within a few hours.", hr: "Najbrže putem WhatsAppa — obično odgovaramo unutar nekoliko sati." },
    "WhatsApp öffnen": { en: "Open WhatsApp", hr: "Otvori WhatsApp" },
    "Bequem über die Plattform deines Vertrauens — geprüfte Bewertungen, sichere Zahlung.": { en: "Conveniently via the platform you trust — verified reviews, secure payment.", hr: "Udobno preko platforme kojoj vjerujete — provjerene recenzije, sigurno plaćanje." },
    "Adresse & Anfahrt": { en: "Address & directions", hr: "Adresa i dolazak" },
    "Gut zu wissen": { en: "Good to know", hr: "Dobro je znati" },
    "Das Wichtigste auf einen Blick": { en: "The essentials at a glance", hr: "Najvažnije na prvi pogled" },
    "Anfrage": { en: "Enquiry", hr: "Upit" },
    "Wunschtermine eintragen — die Anfrage öffnet sich vorausgefüllt in WhatsApp.": { en: "Enter your preferred dates — the enquiry opens pre-filled in WhatsApp.", hr: "Unesite željene datume — upit se otvara unaprijed ispunjen u WhatsAppu." },
    "Name *": { en: "Name *", hr: "Ime *" },
    "Apartment": { en: "Apartment", hr: "Apartman" },
    "Egal / Beratung erwünscht": { en: "No preference / advice welcome", hr: "Svejedno / molim savjet" },
    "Sophia (2 Schlafzimmer, bis 4 Gäste)": { en: "Sophia (2 bedrooms, up to 4 guests)", hr: "Sophia (2 spavaće sobe, do 4 gosta)" },
    "Terra (3 Schlafzimmer, bis 6 Gäste)": { en: "Terra (3 bedrooms, up to 6 guests)", hr: "Terra (3 spavaće sobe, do 6 gostiju)" },
    "Azure (3 Schlafzimmer, bis 6 Gäste)": { en: "Azure (3 bedrooms, up to 6 guests)", hr: "Azure (3 spavaće sobe, do 6 gostiju)" },
    "Gesamte Villa (bis 16 Gäste)": { en: "Whole villa (up to 16 guests)", hr: "Cijela vila (do 16 gostiju)" },
    "Anreise": { en: "Arrival", hr: "Dolazak" },
    "Abreise": { en: "Departure", hr: "Odlazak" },
    "Anzahl Gäste": { en: "Number of guests", hr: "Broj gostiju" },
    "Nachricht": { en: "Message", hr: "Poruka" },
    "Anfrage über WhatsApp senden": { en: "Send enquiry via WhatsApp", hr: "Pošalji upit putem WhatsAppa" },
    "* Pflichtfeld. Es werden keine Daten gespeichert — die Anfrage wird direkt an die Vermieterin übermittelt.": { en: "* Required field. No data is stored — the enquiry goes directly to the host.", hr: "* Obavezno polje. Podaci se ne pohranjuju — upit ide izravno domaćici." },
    "Dein Name": { en: "Your name", hr: "Vaše ime" },
    "z. B. 4": { en: "e.g. 4", hr: "npr. 4" },
    "Besondere Wünsche, Fragen zur Anreise, Haustiere …": { en: "Special requests, questions about arrival, pets …", hr: "Posebne želje, pitanja o dolasku, kućni ljubimci …" },

    // ---- Erlebnisse ----
    "Mediterraner Luxus,<br>direkt vor der Tür": { en: "Mediterranean luxury,<br>right on your doorstep", hr: "Mediteranski luksuz,<br>nadohvat ruke" },
    "Von der Sterneküche in Volosko über private Yachttörns bis zu versteckten Buchten und Belle-Époque-Eleganz — die schönsten Seiten der Kvarner Bucht, sorgfältig für dich ausgewählt.": { en: "From Michelin dining in Volosko to private yacht trips, hidden coves and belle-époque elegance — the finest sides of the Kvarner Bay, carefully chosen for you.", hr: "Od vrhunske kuhinje u Voloskom preko privatnih izleta jahtom do skrivenih uvala i belle-époque elegancije — najljepše strane Kvarnerskog zaljeva, pažljivo odabrane za vas." },
    "Genuss": { en: "Indulgence", hr: "Užitak" },
    "Sterneküche & besondere Tafeln": { en: "Michelin dining & special tables", hr: "Vrhunska kuhinja i posebni stolovi" },
    "Die Kvarner Bucht ist eine der spannendsten Gourmet-Regionen Kroatiens — frische Scampi, istrische Trüffel und Terrassen direkt am Wasser.": { en: "The Kvarner Bay is one of Croatia's most exciting gourmet regions — fresh scampi, Istrian truffles and terraces right by the water.", hr: "Kvarnerski zaljev jedna je od najuzbudljivijih gurmanskih regija Hrvatske — svježi škampi, istarski tartufi i terase tik uz more." },
    "Volosko · ca. 2 km": { en: "Volosko · approx. 2 km", hr: "Volosko · cca. 2 km" },
    "Rijeka · ca. 12 km": { en: "Rijeka · approx. 12 km", hr: "Rijeka · cca. 12 km" },
    "über Lovran · ca. 6 km": { en: "above Lovran · approx. 6 km", hr: "iznad Lovrana · cca. 6 km" },
    "Opatija · ca. 1,5 km": { en: "Opatija · approx. 1.5 km", hr: "Opatija · cca. 1,5 km" },
    "Opatija · zentral": { en: "Opatija · central", hr: "Opatija · središte" },
    "Die grande dame von Volosko — frische Kvarner-Scampi und istrische Trüffel, begleitet von einem der berühmtesten Weinkeller Kroatiens.": { en: "The grande dame of Volosko — fresh Kvarner scampi and Istrian truffles, paired with one of Croatia's most celebrated wine cellars.", hr: "Grande dame Voloskog — svježi kvarnerski škampi i istarski tartufi, uz jedan od najpoznatijih vinskih podruma Hrvatske." },
    "Ein Michelin-Stern im fünften Stock über Rijeka — poetische Kvarner-Küche zu bodentiefen Adria-Sonnenuntergängen.": { en: "A Michelin star on the fifth floor above Rijeka — poetic Kvarner cuisine with floor-to-ceiling Adriatic sunsets.", hr: "Michelinova zvjezdica na petom katu iznad Rijeke — poetska kvarnerska kuhinja uz zalaske sunca nad Jadranom od poda do stropa." },
    "Verfeinerte istrisch-kvarnerische Küche hoch in den Wäldern der Učka — mit einem der spektakulärsten Panoramen der ganzen Riviera.": { en: "Refined Istrian-Kvarner cuisine high in the forests of Učka — with one of the most spectacular panoramas on the whole Riviera.", hr: "Profinjena istarsko-kvarnerska kuhinja visoko u šumama Učke — s jednom od najspektakularnijih panorama cijele rivijere." },
    "Feine Meeresküche in einer romantischen Villa aus dem 19. Jahrhundert, deren Gartenterrasse direkt bis ans Wasser reicht.": { en: "Fine seafood in a romantic 19th-century villa whose garden terrace runs right down to the water.", hr: "Fina riblja kuhinja u romantičnoj vili iz 19. stoljeća, čija vrtna terasa seže do samog mora." },
    "Eine winzige Steinkonoba in einer Gasse über dem Hafen — fangfrischer Fisch von der Tafel, ein seelenvoller, intimer Raum.": { en: "A tiny stone konoba in a lane above the harbour — blackboard-fresh fish, a soulful, intimate room.", hr: "Sićušna kamena konoba u uličici iznad luke — svježa riba s ploče, produhovljen, intiman prostor." },
    "Das Restaurant eines Fünf-Sterne-Boutiquehotels am Meer — mediterrane Teller und über 600 Weine mit Blick auf Cres und Krk.": { en: "The restaurant of a five-star seafront boutique hotel — Mediterranean plates and over 600 wines facing Cres and Krk.", hr: "Restoran petzvjezdičnog boutique hotela uz more — mediteranski tanjuri i preko 600 vina s pogledom na Cres i Krk." },
    "Auf dem Wasser": { en: "On the water", hr: "Na vodi" },
    "Boot & Yacht": { en: "Boat & yacht", hr: "Brod i jahta" },
    "Die Bucht zeigt sich vom Wasser aus am schönsten — ob zum Sonnenuntergang oder auf einem ganzen Inseltag.": { en: "The bay is at its most beautiful from the water — whether at sunset or on a full island day.", hr: "Zaljev je najljepši s mora — bilo na zalasku sunca ili tijekom cjelodnevnog izleta na otoke." },
    "ab Ičići · privat": { en: "from Ičići · private", hr: "iz Ičića · privatno" },
    "ab Opatija · Tagestour": { en: "from Opatija · day trip", hr: "iz Opatije · jednodnevni izlet" },
    "ab Opatija · mehrtägig": { en: "from Opatija · multi-day", hr: "iz Opatije · višednevno" },
    "Vorbei an Volosko und Lovran, ein stiller Badestopp, dann vor Anker im goldenen Licht — der perfekte Adria-Sonnenuntergang.": { en: "Past Volosko and Lovran, a quiet swim stop, then anchored in golden light — the perfect Adriatic sunset.", hr: "Pokraj Voloskog i Lovrana, tihi predah za kupanje, zatim sidrenje u zlatnom svjetlu — savršen jadranski zalazak sunca." },
    "Eine feine Flotte aus Tagesbooten, Kabinenkreuzern und Luxusyachten mit Skipper — maßgeschneiderte Inseltage über die Kvarner Bucht.": { en: "A fine fleet of day boats, cabin cruisers and luxury yachts with skipper — bespoke island days across the Kvarner Bay.", hr: "Fina flota dnevnih brodova, kabinskih krstaša i luksuznih jahti sa skiperom — krojeni izleti na otoke Kvarnerskog zaljeva." },
    "Ein temporeicher Tag nach Krk und Cres, vorbei an den Brseč-Klippen zu versteckten Buchten mit Badestopps und Mittagessen in Beli.": { en: "A fast-paced day to Krk and Cres, past the Brseč cliffs to hidden coves with swim stops and lunch in Beli.", hr: "Dinamičan dan do Krka i Cresa, pokraj brsečkih litica do skrivenih uvala s predasima za kupanje i ručkom u Belom." },
    "Eine intime Schiffsreise von Opatija durch Krk, Cres und Rab — Deluxe-Kabinen und geführte Besuche der schönsten Inselstädte.": { en: "An intimate cruise from Opatija through Krk, Cres and Rab — deluxe cabins and guided visits to the loveliest island towns.", hr: "Intimno krstarenje iz Opatije kroz Krk, Cres i Rab — deluxe kabine i vođeni posjeti najljepšim otočnim gradovima." },
    "Baden": { en: "Swimming", hr: "Kupanje" },
    "Kristallklares Wasser, feiner Kies und elegante Beachclubs — die schönsten Badeplätze der Riviera.": { en: "Crystal-clear water, fine pebbles and elegant beach clubs — the loveliest swimming spots on the Riviera.", hr: "Kristalno čisto more, sitni šljunak i elegantni beach clubovi — najljepša kupališta rivijere." },
    "Medveja · ca. 8 km": { en: "Medveja · approx. 8 km", hr: "Medveja · cca. 8 km" },
    "Mošćenička Draga · ca. 13 km": { en: "Mošćenička Draga · approx. 13 km", hr: "Mošćenička Draga · cca. 13 km" },
    "Ičići · ca. 4 km": { en: "Ičići · approx. 4 km", hr: "Ičići · cca. 4 km" },
    "Lovran · ca. 6 km": { en: "Lovran · approx. 6 km", hr: "Lovran · cca. 6 km" },
    "Eine weite Kieselbucht zwischen pinienbewachsenen Hängen mit auffallend klarem Wasser — der begehrteste Strand der Riviera.": { en: "A wide pebble bay between pine-clad slopes with strikingly clear water — the Riviera's most sought-after beach.", hr: "Široka šljunčana uvala između borovih padina s upadljivo bistrim morem — najtraženija plaža rivijere." },
    "Die schönste von sieben verbundenen Buchten — feinster Kies, glasklares Wasser und eine wild-grüne Kulisse, fernab vom Trubel.": { en: "The loveliest of seven connected coves — finest pebbles, glass-clear water and a wild-green backdrop, far from the bustle.", hr: "Najljepša od sedam povezanih uvala — najsitniji šljunak, kristalno more i divlje zelena kulisa, daleko od gužve." },
    "Ein eleganter Blue-Flag-Strand an einer feinen Yachtmarina, gesäumt von Jugendstilvillen — direkt an der Lungomare.": { en: "An elegant Blue Flag beach by a fine yacht marina, lined with art-nouveau villas — right on the Lungomare.", hr: "Elegantna plaža s Plavom zastavom uz finu marinu, okružena secesijskim vilama — uz samu Lungomare." },
    "Lovrans Blue-Flag-Juwel aus Sand und hellen Terrassen, von außergewöhnlich sauberem Wasser umspült — ruhig und elegant.": { en: "Lovran's Blue Flag gem of sand and pale terraces, lapped by exceptionally clean water — quiet and elegant.", hr: "Lovranov dragulj s Plavom zastavom od pijeska i svijetlih terasa, okružen iznimno čistim morem — miran i elegantan." },
    "Designer-Liegen, ein VIP-Poolbereich, à-la-carte-Restaurant und eine Cocktailbar, die nach Einbruch der Dunkelheit zum Club wird.": { en: "Designer loungers, a VIP pool area, an à-la-carte restaurant and a cocktail bar that turns into a club after dark.", hr: "Dizajnerske ležaljke, VIP zona uz bazen, à-la-carte restoran i koktel bar koji nakon mraka postaje klub." },
    "Natur & Aktiv": { en: "Nature & active", hr: "Priroda i aktivnosti" },
    "Zwischen den Gipfeln der Učka und der Küstenpromenade — Panoramen, die man nicht vergisst.": { en: "Between the peaks of Učka and the coastal promenade — panoramas you won't forget.", hr: "Između vrhova Učke i obalne šetnice — panorame koje se ne zaboravljaju." },
    "Opatija · vor der Tür": { en: "Opatija · on your doorstep", hr: "Opatija · pred vratima" },
    "Učka · ca. 15 km": { en: "Učka · approx. 15 km", hr: "Učka · cca. 15 km" },
    "Naturpark Učka · ca. 16 km": { en: "Učka Nature Park · approx. 16 km", hr: "Park prirode Učka · cca. 16 km" },
    "über der Učka": { en: "above the Učka", hr: "iznad Učke" },
    "Kroatiens längste Strandpromenade — 12 elegante Kilometer von Volosko nach Lovran, vorbei an Belle-Époque-Villen und Gärten.": { en: "Croatia's longest seafront promenade — 12 elegant kilometres from Volosko to Lovran, past belle-époque villas and gardens.", hr: "Najdulja obalna šetnica u Hrvatskoj — 12 elegantnih kilometara od Voloskog do Lovrana, pokraj belle-époque vila i vrtova." },
    "Der höchste Punkt Istriens (1.401 m) mit 360°-Blick über die Kvarner Inseln, die Alpen und — an klaren Tagen — bis nach Venedig.": { en: "The highest point in Istria (1,401 m) with 360° views over the Kvarner islands, the Alps and — on clear days — as far as Venice.", hr: "Najviša točka Istre (1.401 m) s pogledom od 360° na kvarnerske otoke, Alpe i — za vedrih dana — sve do Venecije." },
    "Eine dramatische Karstschlucht aus aufragenden Kalksteinsäulen, von einem Panorama-Aussichtspunkt aus bestaunt.": { en: "A dramatic karst canyon of towering limestone pillars, admired from a panoramic viewpoint.", hr: "Dramatičan krški kanjon s uzdignutim vapnenačkim stupovima, kojem se divite s panoramskog vidikovca." },
    "Vom Bergrücken der Učka abheben — Istrien auf der einen, die glitzernde Kvarner Bucht auf der anderen Seite.": { en: "Take off from the Učka ridge — Istria on one side, the glittering Kvarner Bay on the other.", hr: "Polijetanje s grebena Učke — Istra s jedne, svjetlucavi Kvarnerski zaljev s druge strane." },
    "Kultur": { en: "Culture", hr: "Kultura" },
    "Belle Époque & Geschichte": { en: "Belle époque & history", hr: "Belle époque i povijest" },
    "Opatija war das mondäne Seebad der k.u.k.-Monarchie — und trägt diesen Glanz bis heute.": { en: "Opatija was the elegant seaside resort of the Habsburg monarchy — and carries that glamour to this day.", hr: "Opatija je bila otmjeno morsko ljetovalište Austro-Ugarske — i taj sjaj nosi do danas." },
    "Lungomare · zentral": { en: "Lungomare · central", hr: "Lungomare · središte" },
    "Rijeka · ca. 14 km": { en: "Rijeka · approx. 14 km", hr: "Rijeka · cca. 14 km" },
    "Kastav · ca. 7 km": { en: "Kastav · approx. 7 km", hr: "Kastav · cca. 7 km" },
    "Eine anmutige Seevilla von 1844, Wiege des kroatischen Tourismus, in einem botanischen Park mit über 150 exotischen Arten.": { en: "A graceful 1844 seaside villa, the cradle of Croatian tourism, in a botanical park with over 150 exotic species.", hr: "Ljupka morska vila iz 1844., kolijevka hrvatskog turizma, u botaničkom parku s preko 150 egzotičnih vrsta." },
    "Opatijas ergreifendes Wahrzeichen von 1956 — eine bronzene Maid mit ausgestreckter Möwe auf einem Felsen über dem Meer.": { en: "Opatija's moving 1956 landmark — a bronze maiden with an outstretched seagull on a rock above the sea.", hr: "Dirljiv simbol Opatije iz 1956. — brončana djevojka s ispruženim galebom na stijeni iznad mora." },
    "Das älteste Grandhotel der Adria (1884), dessen Kristallsaal einst Franz Joseph und Isadora Duncan empfing.": { en: "The Adriatic's oldest grand hotel (1884), whose Crystal Hall once welcomed Franz Joseph and Isadora Duncan.", hr: "Najstariji grand hotel Jadrana (1884.), čija je Kristalna dvorana nekoć ugostila Franju Josipa i Isadoru Duncan." },
    "Eine mittelalterliche Frankopan-Festung auf einem Felsen über der Schlucht — mit weitem Blick über die Kvarner Bucht.": { en: "A medieval Frankopan fortress on a clifftop above the gorge — with sweeping views over the Kvarner Bay.", hr: "Srednjovjekovna frankopanska utvrda na stijeni iznad klanca — sa širokim pogledom na Kvarnerski zaljev." },
    "Ein romantisches Hügelstädtchen aus Kopfsteinpflaster-Gassen und Panoramaterrassen, bekannt für sein Weinfest Bela Nedeja.": { en: "A romantic hilltop town of cobbled lanes and panoramic terraces, known for its young-wine festival Bela Nedeja.", hr: "Romantičan brežuljkasti gradić s popločanim uličicama i panoramskim terasama, poznat po festivalu mladog vina Bela Nedeja." },
    "Verwöhnen": { en: "Pampering", hr: "Maženje" },
    "Wellness & Feinschmecker-Ausflüge": { en: "Wellness & gourmet outings", hr: "Wellness i gurmanski izleti" },
    "Habsburger Spa-Rituale am Meer und die Gourmet-Schätze des nahen Istrien.": { en: "Habsburg spa rituals by the sea and the gourmet treasures of nearby Istria.", hr: "Habsburški spa rituali uz more i gurmanska blaga obližnje Istre." },
    "Ika · ca. 3 km": { en: "Ika · approx. 3 km", hr: "Ika · cca. 3 km" },
    "Istrien · Tagesausflug": { en: "Istria · day trip", hr: "Istra · jednodnevni izlet" },
    "Livade · Tagesausflug": { en: "Livade · day trip", hr: "Livade · jednodnevni izlet" },
    "Die Rituale der Kaiserin Sisi in einem 650 m² großen Habsburg-Refugium aus türkischen und finnischen Bädern, mit Blick über den Park.": { en: "Empress Sisi's rituals in a 650 m² Habsburg sanctuary of Turkish and Finnish baths, overlooking the park.", hr: "Rituali carice Sisi u 650 m² velikom habsburškom utočištu s turskim i finskim kupkama, s pogledom na park." },
    "Ein intimer Wellness-Tempel im obersten Stock mit Rasul-Kammer, Float-Raum und Bio-Anwendungen vor ununterbrochenem Adria-Blick.": { en: "An intimate top-floor wellness temple with rasul chamber, float room and organic treatments before uninterrupted Adriatic views.", hr: "Intiman wellness hram na najvišem katu s rasul komorom, float sobom i organskim tretmanima pred neprekinutim pogledom na Jadran." },
    "Verkostung in Istriens preisgekröntem Olivenöl-Gut — geführt durch Haine und Museum (Best Olive Oil Hospitality 2024).": { en: "A tasting at Istria's award-winning olive oil estate — guided through groves and museum (Best Olive Oil Hospitality 2024).", hr: "Kušanje na istarskom nagrađivanom maslinarskom imanju — vođeno kroz nasade i muzej (Best Olive Oil Hospitality 2024.)." },
    "Eine private Trüffeljagd durch den Wald von Motovun, gefolgt von einem Festmahl, bei dem frische istrische Trüffel die Hauptrolle spielen.": { en: "A private truffle hunt through the Motovun forest, followed by a feast where fresh Istrian truffles take centre stage.", hr: "Privatni lov na tartufe kroz motovunsku šumu, nakon čega slijedi gozba u kojoj svježi istarski tartufi imaju glavnu ulogu." },
    "Dein Sommer an der Adria": { en: "Your summer on the Adriatic", hr: "Vaše ljeto na Jadranu" },
    "Wir helfen dir, das Beste daraus zu machen": { en: "We'll help you make the most of it", hr: "Pomoći ćemo vam izvući najviše" },
    "Sag uns, worauf du Lust hast — wir geben gern persönliche Empfehlungen und helfen bei Reservierungen vor Ort.": { en: "Tell us what you're in the mood for — we're glad to give personal recommendations and help with local reservations.", hr: "Recite nam što vas zanima — rado dajemo osobne preporuke i pomažemo s lokalnim rezervacijama." },

    // ---- Misch-Elemente (Hero-Statistik, Trust-Leiste, „Gut zu wissen") ----
    "<strong>3</strong>Apartments": { en: "<strong>3</strong>Apartments", hr: "<strong>3</strong>Apartmana" },
    "<strong>Pool</strong>für alle Gäste": { en: "<strong>Pool</strong>for all guests", hr: "<strong>Bazen</strong>za sve goste" },
    "<strong>Aufzug</strong>&amp; Parkplatz": { en: "<strong>Elevator</strong>&amp; parking", hr: "<strong>Lift</strong> i parking" },
    "<strong>Meerblick</strong>aus jedem Zimmer": { en: "<strong>Sea view</strong>from every room", hr: "<strong>Pogled na more</strong>iz svake sobe" },
    "<strong>Direkt</strong> vom Eigentümer": { en: "<strong>Direct</strong> from the owner", hr: "<strong>Izravno</strong> od vlasnice" },
    "<strong>Auch auf</strong> Booking &amp; Airbnb": { en: "<strong>Also on</strong> Booking &amp; Airbnb", hr: "<strong>Također na</strong> Bookingu i Airbnbu" },
    "<strong>Antwort</strong> meist in Stunden": { en: "<strong>Reply</strong> usually within hours", hr: "<strong>Odgovor</strong> obično unutar sati" },
    "<strong>Sichere</strong> Anfrage, keine Gebühren": { en: "<strong>Secure</strong> enquiry, no fees", hr: "<strong>Siguran</strong> upit, bez naknada" },
    "<strong>Check-in</strong> 15:00–22:00": { en: "<strong>Check-in</strong> 15:00–22:00", hr: "<strong>Prijava</strong> 15:00–22:00" },
    "<strong>Check-out</strong> bis 10:00": { en: "<strong>Check-out</strong> until 10:00", hr: "<strong>Odjava</strong> do 10:00" },
    "<strong>Self-Check-in</strong> · 24h-Personal": { en: "<strong>Self check-in</strong> · 24h staff", hr: "<strong>Samostalna prijava</strong> · osoblje 0–24" },
    "<strong>Kostenlose</strong> Privatparkplätze": { en: "<strong>Free</strong> private parking", hr: "<strong>Besplatni</strong> privatni parking" },
    "<strong>Aufzug</strong> im Haus": { en: "<strong>Elevator</strong> in the building", hr: "<strong>Lift</strong> u zgradi" },
    "<strong>WLAN</strong> &amp; Klimaanlage": { en: "<strong>Wi-Fi</strong> &amp; air conditioning", hr: "<strong>Wi-Fi</strong> i klima-uređaj" },
    "<strong>E-Auto-Ladestation</strong> (Aufpreis)": { en: "<strong>EV charging</strong> (surcharge)", hr: "<strong>Punionica za e-aute</strong> (uz doplatu)" },
    "<strong>Bis 16 Gäste</strong> (ganze Villa)": { en: "<strong>Up to 16 guests</strong> (whole villa)", hr: "<strong>Do 16 gostiju</strong> (cijela vila)" },
    "Dein Adria-Traum wartet": { en: "Your Adriatic dream awaits", hr: "Vaš jadranski san čeka" },
    "Schreib uns — ganz unverbindlich. Antwort meist in Minuten.": { en: "Write to us — no obligation. Reply usually within minutes.", hr: "Pišite nam — bez obveze. Odgovor obično u nekoliko minuta." },

    // ---- Nachträge: Galerie-Tabs & -CTA ----
    "Küche": { en: "Kitchen", hr: "Kuhinja" },
    "Mehr": { en: "More", hr: "Više" },
    "Apartment Sophia gefällt dir?": { en: "Like Apartment Sophia?", hr: "Sviđa vam se apartman Sophia?" },
    "Apartment Terra gefällt dir?": { en: "Like Apartment Terra?", hr: "Sviđa vam se apartman Terra?" },
    "Apartment Azure gefällt dir?": { en: "Like Apartment Azure?", hr: "Sviđa vam se apartman Azure?" },

    // ---- Nachträge: Kontakt ----
    "So erreichst du uns": { en: "How to reach us", hr: "Kako nas kontaktirati" },
    "Villa Isabel<br>Ivana i Matka Baštijana 2B<br>51211 Matulji, Kroatien": { en: "Villa Isabel<br>Ivana i Matka Baštijana 2B<br>51211 Matulji, Croatia", hr: "Villa Isabel<br>Ivana i Matka Baštijana 2B<br>51211 Matulji, Hrvatska" },
    "✓ Super! Deine Anfrage wurde vorbereitet — bitte im geöffneten Fenster nur noch absenden.": { en: "✓ Great! Your enquiry is ready — just send it in the window that opened.", hr: "✓ Odlično! Vaš upit je pripremljen — samo ga pošaljite u prozoru koji se otvorio." },

    // ---- Nachträge: Ausstattung ----
    "WLAN": { en: "Wi-Fi", hr: "Wi-Fi" },

    // ---- Nachträge: Bildnachweis ----
    "Umgebungsfotos via Wikimedia Commons (CC BY / BY-SA): Hotel Kvarner © Bolson75 · Trsat © Dirk Heldmaier · Mošćenička Draga © Silverije · Učka © Wolfgang Glock · Lovran © Christian Baltrusch · Krk © Falk2.": { en: "Surrounding photos via Wikimedia Commons (CC BY / BY-SA): Hotel Kvarner © Bolson75 · Trsat © Dirk Heldmaier · Mošćenička Draga © Silverije · Učka © Wolfgang Glock · Lovran © Christian Baltrusch · Krk © Falk2.", hr: "Fotografije okolice putem Wikimedia Commons (CC BY / BY-SA): Hotel Kvarner © Bolson75 · Trsat © Dirk Heldmaier · Mošćenička Draga © Silverije · Učka © Wolfgang Glock · Lovran © Christian Baltrusch · Krk © Falk2." },

    // ---- Nachträge: Erlebnis-Titel (POI) ----
    "Private Sunset-Cruise": { en: "Private sunset cruise", hr: "Privatno krstarenje uz zalazak sunca" },
    "Speedboot-Inselhopping": { en: "Speedboat island-hopping", hr: "Otočni obilazak gliserom" },
    "Kvarner Small-Ship Cruise": { en: "Kvarner small-ship cruise", hr: "Krstarenje malim brodom Kvarnerom" },
    "Lungomare-Promenade": { en: "Lungomare promenade", hr: "Šetnica Lungomare" },
    "Vojak-Gipfel & Steinturm": { en: "Vojak peak & stone tower", hr: "Vrh Vojak i kameni toranj" },
    "Vela-Draga-Canyon": { en: "Vela Draga canyon", hr: "Kanjon Vela Draga" },
    "Tandem-Paragliding": { en: "Tandem paragliding", hr: "Tandemski paragliding" },
    "Mädchen mit der Möwe": { en: "Maiden with the Seagull", hr: "Djevojka s galebom" },
    "Burg Trsat": { en: "Trsat Castle", hr: "Trsatska gradina" },
    "Altstadt von Kastav": { en: "Kastav old town", hr: "Stari grad Kastav" },
    "Chiavalon Olivenöl": { en: "Chiavalon olive oil", hr: "Chiavalon maslinovo ulje" },
    "Zigante Trüffel": { en: "Zigante truffles", hr: "Zigante tartufi" }
  };

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }
  // Schlüssel-Normalisierung: typografische Anführungszeichen/Gedankenstriche vereinheitlichen,
  // damit kleine Zeichen-Unterschiede zwischen HTML und Wörterbuch keinen Treffer verhindern.
  function normKey(s) { return norm(s).replace(/[„“”‟«»]/g, '"').replace(/[‚‘’‛]/g, "'").replace(/[—–]/g, "-"); }
  var NDICT = {};
  for (var _k in DICT) { if (DICT.hasOwnProperty(_k)) NDICT[normKey(_k)] = DICT[_k]; }

  function detect() {
    try { var s = localStorage.getItem(STORE); if (s) return s; } catch (e) {}
    var b = (navigator.language || "en").slice(0, 2).toLowerCase();
    return (b === "de" || b === "hr") ? b : "en";
  }

  function srcOf(el) {
    if (el.dataset.i18nMode) return el.dataset.i18nSrc;
    var kids = el.children, key, mode;
    if (kids.length === 0) { key = norm(el.textContent); mode = "text"; }
    else {
      var inline = { BR: 1, STRONG: 1, EM: 1, B: 1, I: 1 };
      var allInline = true;
      for (var i = 0; i < kids.length; i++) { if (!inline[kids[i].tagName]) { allInline = false; break; } }
      if (allInline) { key = norm(el.innerHTML.replace(/<br\s*\/?>/gi, "<br>")); mode = "html"; }
      else { key = ""; mode = "skip"; }
    }
    el.dataset.i18nSrc = key;
    el.dataset.i18nMode = mode;
    return key;
  }

  function applyLang(lang) {
    var els = document.querySelectorAll("h1,h2,h3,h4,p,a,li,button,label,option,blockquote,cite,small,span,div");
    Array.prototype.forEach.call(els, function (el) {
      var src = srcOf(el);
      var mode = el.dataset.i18nMode;
      if (mode === "skip" || !src) return;
      var out;
      if (lang === "de") out = src;
      else { var e = NDICT[normKey(src)]; out = (e && e[lang]) ? e[lang] : src; }
      if (out === src && lang !== "de") { var mc = src.match(/^(\d+)\s+Fotos$/); if (mc) out = mc[1] + (lang === "en" ? " photos" : " fotografija"); }
      if (mode === "html") { if (norm(el.innerHTML.replace(/<br\s*\/?>/gi, "<br>")) !== out) el.innerHTML = out; }
      else { if (el.textContent !== out) el.textContent = out; }
    });
    Array.prototype.forEach.call(document.querySelectorAll("input[placeholder],textarea[placeholder]"), function (el) {
      var p = (el.dataset.i18nPh !== undefined) ? el.dataset.i18nPh : (el.dataset.i18nPh = el.getAttribute("placeholder"));
      if (!p) return;
      var o = (lang === "de") ? p : (function () { var d = NDICT[normKey(p)]; return (d && d[lang]) ? d[lang] : p; })();
      el.setAttribute("placeholder", o);
    });
    document.documentElement.lang = lang;
    try { localStorage.setItem(STORE, lang); } catch (e) {}
    Array.prototype.forEach.call(document.querySelectorAll(".lang-switch button"), function (b) {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }
  window.setVillaLang = applyLang;

  function buildSwitch() {
    var nav = document.querySelector(".nav-links");
    if (!nav || nav.querySelector(".lang-switch")) return;
    var li = document.createElement("li");
    li.className = "lang-switch";
    ["en", "de", "hr"].forEach(function (l, i) {
      var b = document.createElement("button");
      b.type = "button"; b.dataset.lang = l; b.textContent = l.toUpperCase();
      b.addEventListener("click", function () { applyLang(l); });
      li.appendChild(b);
      if (i < 2) { var s = document.createElement("span"); s.className = "lang-sep"; s.textContent = "·"; li.appendChild(s); }
    });
    nav.appendChild(li);
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildSwitch();
    applyLang(detect());
  });
})();

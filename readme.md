🧩 Task Manager Minimal Pro — Coding Challenge
🎯 Obiettivo
Realizzare una piccola applicazione web che permetta all’utente di aggiungere attività a una lista.
L’interfaccia deve essere più elaborata rispetto a una semplice pagina HTML, includendo una card centrale, una barra superiore colorata, uno stile moderno, e una gestione degli errori tramite manipolazione del DOM.
Il challenge è pensato per essere completato in circa 30 minuti da chi sta studiando:
- HTML
- CSS
- Variabili
- Stringhe
- Numeri
- Booleani
- Condizionali if/else
- Ciclo for
- Funzioni
- Manipolazione del DOM di base

📋 Requisiti
Struttura della pagina
La pagina deve contenere:
- Una card centrale con:
- Barra superiore colorata con il titolo “TASK MANAGER”
- Una sezione con:
- Etichetta sopra l’input
- Input testuale con icona (puoi usare un’emoji come 🔍)
- Pulsante “Aggiungi”
- Messaggio di errore (inizialmente nascosto)
- Lista delle attività (inizialmente vuota)
Funzionalità richieste
- L’utente inserisce un testo nell’input.
- Cliccando su “Aggiungi”:
- Se l’input è vuoto → mostra un messaggio di errore in rosso.
- Se l’input contiene testo → aggiungi un nuovo elemento alla lista.
- Ogni elemento della lista deve essere numerato automaticamente.
- Usa almeno:
- Una funzione dedicata all’aggiunta dell’attività
- Una variabile che tiene traccia del numero di elementi
- Un ciclo for per rigenerare la lista o per un controllo semplice
- Condizionali if/else
- La lista deve avere uno stile personalizzato (pallini, margini, font).

🎨 Mockup testuale (da replicare con HTML e CSS)
──────────────────────────────────────────────
                 (sfondo grigio chiaro)

                ┌───────────────────────────┐
                │  █ TASK MANAGER           │
                │    (barra superiore)      │
                ├───────────────────────────┤
                │                           │
                │   Inserisci una attività  │
                │   ┌────────────────────┐  │
                │   │ 🔍  [___________ ] │  │
                │   └────────────────────┘  │
                │                           │
                │        [ Aggiungi ]       │
                │                           │
                │   (messaggio errore)      │
                │                           │
                │   • Lista attività vuota  │
                │                           │
                └───────────────────────────┘
──────────────────────────────────────────────



🧱 Linee guida per lo stile (CSS)
- Card centrale
- max-width ~400px
- centrata verticalmente e orizzontalmente
- bordo arrotondato
- ombra leggera
- sfondo bianco
- Barra superiore
- altezza ~60px
- colore a tua scelta
- testo bianco, centrato verticalmente
- font grande e bold
- Input
- larghezza quasi totale
- icona a sinistra (emoji o pseudo-elemento)
- padding interno
- bordo arrotondato
- Pulsante
- colore coerente con la barra superiore
- testo bianco
- hover con colore più scuro
- bordo arrotondato
- Messaggio di errore
- colore rosso
- nascosto all’inizio
- Lista
- margine superiore
- pallini personalizzati
- font leggermente più grande

📚 Risorse utili (W3Schools)
- HTML Forms: https://www.w3schools.com/html/html_forms.asp
- CSS Box Model: https://www.w3schools.com/css/css_boxmodel.asp
- CSS Shadows: https://www.w3schools.com/css/css3_shadows.asp
- JS Input Value: https://www.w3schools.com/jsref/prop_text_value.asp
- Condizionali JS: https://www.w3schools.com/js/js_if_else.asp
- Ciclo for: https://www.w3schools.com/js/js_loop_for.asp
- Funzioni JS: https://www.w3schools.com/js/js_functions.asp
- DOM: https://www.w3schools.com/js/js_htmldom.asp

# Aggregazioni Multiple

> Un'applicazione web per visualizzare e aggregare eventi da un'API.

## 📜 Descrizione Generale

Questo progetto è un'applicazione frontend costruita con Vue.js che interagisce con un'API per recuperare e mostrare dati di eventi. L'applicazione consente agli utenti di visualizzare gli eventi in una tabella e di aggregarli dinamicamente in base a diversi campi come progetti, dipendenti e date. L'interfaccia è progettata per essere reattiva e fornisce feedback visivo durante il caricamento dei dati o in caso di errori.

## ✨ Funzionalità Principali

  * **Visualizzazione Dati Tabellare:** Mostra i dati degli eventi in una tabella paginata e facile da navigare.
  * **Aggregazione Dinamica:** Permette agli utenti di raggruppare i dati selezionando criteri di aggregazione come "Progetti", "Dipendenti" e "Date".
  * **Interfaccia Reattiva:** L'interfaccia utente si aggiorna automaticamente in base alle selezioni dell'utente e mostra stati di caricamento ed errore.
  * **Comunicazione API:** Utilizza Axios per effettuare chiamate a un'API REST per recuperare i dati degli eventi.
  * **Componenti Riutilizzabili:** La struttura del progetto utilizza componenti Vue per separare la logica e la visualizzazione, come `tableViewer` per la tabella.

## 🚀 Prerequisiti

  * **Linguaggio di programmazione:** Node.js `^20.19.0` o `>=22.12.0`.
  * **Package Manager:** `npm` o `yarn`.
  * **Variabili d'ambiente:**
      * `VITE_API_URI`: L'URL base dell'API da cui l'applicazione recupera i dati.

## ⚙️ Installazione

1.  **Clona il repository:**
    ```bash
    git clone https://github.com/federicoferrulli/aggregazioni-multiple.git
    cd aggregazioni-multiple
    ```
2.  **Installa le dipendenze:**
    ```bash
    npm install
    ```
3.  **Configurazione dell'ambiente:**
    Non è presente un file `.env.example`, ma è necessario creare un file `.env` nella root del progetto e aggiungere la seguente variabile:
    ```
    VITE_API_URI=https://tuo-endpoint-api.com
    ```
    Sostituisci `https://tuo-endpoint-api.com` con l'URL dell'API a cui vuoi connetterti.

## ▶️ Esecuzione e Utilizzo

  * **Avviare l'applicazione in modalità sviluppo:**
    ```bash
    npm run dev
    ```
  * **Compilare per la produzione:**
    ```bash
    npm run build
    ```
  * **Avviare in anteprima (dopo la compilazione):**
    ```bash
    npm run preview
    ```

## 📂 Struttura del Progetto

```
aggregazioni-multiple/
├── public/           # File statici come favicon.ico
├── src/              # Codice sorgente principale
│   ├── assets/       # File CSS e altre risorse statiche
│   ├── components/   # Componenti Vue riutilizzabili
│   ├── layouts/      # Layout di base dell'applicazione
│   ├── libs/         # Funzioni di utilità e configurazione di Axios
│   ├── router/       # Configurazione del routing di Vue Router
│   ├── services/     # Servizi per la comunicazione con le API
│   ├── views/        # Componenti Vue che rappresentano le pagine
│   ├── App.vue       # Componente radice dell'applicazione
│   └── main.js       # File di ingresso principale dell'applicazione
├── .gitignore        # File e cartelle ignorati da Git
├── index.html        # Template HTML principale
├── package.json      # Metadati e dipendenze del progetto
└── vite.config.js    # Configurazione di Vite
```
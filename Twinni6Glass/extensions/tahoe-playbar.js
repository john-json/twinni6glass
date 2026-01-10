(function () {
  "use strict";

  function createTahoePlaybarButtons() {
    // Mini Queue button (macOS Music style)
    const queueBtn = new Spicetify.Playbar.Button(
      "Queue",
      `<svg viewBox="0 0 16 16" fill="currentColor">
        <path d="M2 3h12v1.5H2V3zm0 3h8v1.5H2V6zm0 3h8V10.5H2V9zm9.5 0 3.5 2-3.5 2V9z"/>
      </svg>`,
      () => {
        Spicetify.showNotification("Queue opened");
        Spicetify.Platform.History.push(
          Spicetify.URI.from(Spicetify.Player.queueUri)
        );
      }
    );

    // Lyrics button
    const lyricsBtn = new Spicetify.Playbar.Button(
      "Lyrics",
      `<svg viewBox="0 0 16 16" fill="currentColor">
        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11zM3 3.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
      </svg>`,
      () => {
        Spicetify.showNotification("Lyrics");
        // Add lyrics toggle logic here
      }
    );

    // Style both buttons like macOS Music
    [queueBtn, lyricsBtn].forEach((btn) => {
      btn.element.classList.add("tahoe-playbar-button");
      btn.element.style.padding = "6px";
      btn.element.style.borderRadius = "12px";
      btn.register();
    });
  }

  // Wait for Spicetify to load
  if (Spicetify?.Playbar) {
    createTahoePlaybarButtons();
  } else {
    document.addEventListener("spicetify:loaded", createTahoePlaybarButtons);
  }
})();

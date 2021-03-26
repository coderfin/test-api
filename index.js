if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registeredWorker = await navigator.serviceWorker.register(
        "service-worker.js"
      );
      console.log("Worker Registered", registeredWorker);

      new Array(10).fill().forEach(() => {
        console.log("here");

        fetch("https://coderfin.github.io/test-api/", { method: "POST" })
          .then((response) => response.text())
          .then(console.log);
      });
    } catch (error) {
      console.error("Error", error);
    }
  });
}

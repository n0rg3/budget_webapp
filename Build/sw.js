self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("budget-cache").then((cache) => {
      return cache.addAll(["./", "./index.html", "./Build/budget.loader.js"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

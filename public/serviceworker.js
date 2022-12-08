const assets = ["/"];

self.addEventListener("install", async () => {
  try {
    const assetCache = await caches.open("assets");
    await assetCache.addAll(assets);
  } catch (error) {
    console.error("Error adding assets to service worker ", error);
  }
});

// Stale while revalidate strategy
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      try {
        const cachedResponse = await caches.match(event.request);
        const networkResponse = await fetch(event.request);
        const cache = await caches.open("assets");
        await cache.put(event.request, networkResponse.clone());

        return cachedResponse || networkResponse;
      } catch (error) {
        console.error(
          "Error either sending cached response or getting and sending a response in service worker ",
          error
        );
      }
    })()
  );
});

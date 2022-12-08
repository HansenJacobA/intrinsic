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
self.addEventListener("fetch", async (event) => {
  try {
    const cachedResponse = await caches.match(event.request);
    const networkResponse = await fetch(event.request);
    const cache = await caches.open("assets");
    await cache.put(event.request, networkResponse.clone());

    event.respondWith(cachedResponse || networkResponse);
  } catch (error) {
    console.error(
      "Error either sending cached response to getting and sending a response in service worker ",
      error
    );
  }
});

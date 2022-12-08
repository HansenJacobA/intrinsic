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
        const cleanedNetworkResponse = cleanResponse(networkResponse);
        const cache = await caches.open("assets");
        await cache.put(event.request, cleanedNetworkResponse.clone());

        return cachedResponse || cleanedNetworkResponse;
      } catch (error) {
        console.error(
          "Error either sending cached response or getting and sending a response in service worker ",
          error
        );
      }
    })()
  );
});

// Consider using this function to remove redirects from response
async function cleanResponse(response) {
  const clonedResponse = response.clone();

  // Not all browsers support the Response.body stream, so fall back to reading
  // the entire body into memory as a blob.
  const bodyPromise =
    "body" in clonedResponse
      ? Promise.resolve(clonedResponse.body)
      : clonedResponse.blob();

  const body = await bodyPromise;

  return new Response(body, {
    headers: clonedResponse.headers,
    status: clonedResponse.status,
    statusText: clonedResponse.statusText,
  });

  // return bodyPromise.then((body) => {
  //   // new Response() is happy when passed either a stream or a Blob.
  //   return new Response(body, {
  //     headers: clonedResponse.headers,
  //     status: clonedResponse.status,
  //     statusText: clonedResponse.statusText,
  //   });
  // });
}

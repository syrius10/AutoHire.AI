import { cache } from "react";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("auto-hire-cache").then((cache) => {
            return cache.addAll(["/", "/offline.html"]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match("/offline.html"))
    );
});
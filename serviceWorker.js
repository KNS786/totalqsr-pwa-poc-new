const CACHE_NAME = "version-1"
const urlsToCache = ["firebase-messaging-sw.js","index.html"];

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log("Opened Cache");
            return cache.addAll(urlsToCache);
        })
    )
})

this.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((res)=>{
            console.log("event response :: ", res);
            return fetch(event.request);
        })
    )
})

this.addEventListener("activate",(event)=>{
    console.log("activated event : ",event);
    
})
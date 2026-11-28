const C = 'ww-695f2a634b';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(C).then(c => c.addAll(['./', 'icon-192.png']))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const keep = res => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); } return res; };
  if (r.mode === 'navigate') { e.respondWith(fetch(r, { cache: 'no-cache' }).then(keep).catch(() => caches.match(r).then(m => m || caches.match('./')))); return; }
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(keep)));
});

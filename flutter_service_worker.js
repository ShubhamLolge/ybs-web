'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bc77264cad2641a83ffd7d32425688a7",
"version.json": "a35a2adbbbd11c70acdfcc919c60f5e4",
"index.html": "0aec76cf01686c5cac7a975a93229bab",
"/": "0aec76cf01686c5cac7a975a93229bab",
"main.dart.js": "a519b39eb9c6251687e81d25b5e69534",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "31ca89cc7fd6d802bac38c5ae964baa6",
"assets/AssetManifest.json": "07b5c8f7ed6c507bea7b760bd8b44e8a",
"assets/NOTICES": "df0032c1c9fd97a1f28642ffb2db6f2d",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/AssetManifest.bin.json": "ba9244b5b83d0da8b8d29f443f4cf345",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c55e590d533de089f74c8ad383cc4441",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "38677c06c7ad90e79a5c79c1373cb423",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a8e63cdda91f1b1799316c077ae303cb",
"assets/fonts/MaterialIcons-Regular.otf": "f577ff2455fcb6f582510d275ebde99f",
"assets/assets/images/ybs_dd_5.jpeg": "0bce3ad8cf5a18e932ca3d58ad461413",
"assets/assets/images/ybs_model_3.jpg": "9b94a6a99ba153bb2aeace47d4be9eae",
"assets/assets/images/ybs_model_2.jpg": "49cd1bc9b06a04b32e54a57650fc76b4",
"assets/assets/images/ybs_model_1.jpg": "daf6efaded64405600d418d70b4c10bc",
"assets/assets/images/ybs_dd_3.jpg": "d08fa402c27af8ee409b684a7f29bd24",
"assets/assets/images/ybs_dd_2.jpg": "f217d409399e5412972b211c7ea39efc",
"assets/assets/images/ybs_dd_1.jpg": "0cce6fce92bbeebe753fa8d9c47e27f9",
"assets/assets/images/ybs_dd_4.jpg": "4d5e3151a8a216c17f1eda2bf1890792",
"assets/assets/images/ybs-nobg.png": "bdf75c3c161f67b840cbc0f83f52a2b1",
"assets/assets/images/ybs_presentation_4.jpg": "b4c46c9b17900635f41402c468ef7918",
"assets/assets/images/ybs_presentation_5.jpg": "678e1d5f367a7ae0f48070a6b60867ad",
"assets/assets/images/ybs_dd_8.jpg": "7420f72f57448f6f1cfc2fef160d4bac",
"assets/assets/images/ybs_presentation_2.jpg": "4c418c706ef1ec8db663183b1651bf3b",
"assets/assets/images/ybs_presentation_3.jpg": "fe25e75f73cdabbc4171d798c5485120",
"assets/assets/images/ybs_presentation_1.png": "9d0c6ea5f9f5c6fbfae4afb2e228e7b5",
"assets/assets/images/ybs_sd_5.jpg": "99c4381767d687b31b7cb6ac01f4bb69",
"assets/assets/images/ybs_sd_4.jpg": "6355e2dea2838c7ce56eaf4d198bf57a",
"assets/assets/images/ybs_sd_6.jpg": "31aa42aafd2f16498c40a996d28ef2fc",
"assets/assets/images/ybs_dd_7.jpeg": "051a94544056c4465f901b6b0ba259f5",
"assets/assets/images/ybs_sd_7.jpg": "d1130b930f4d4fcde28c879144325cde",
"assets/assets/images/ybs_sd_3.png": "e9d364f2b76342954d28800c413cd59b",
"assets/assets/images/ybs_dd_6.jpeg": "7f68c1c92c657a6fe061024ca9826c15",
"assets/assets/images/ybs_sd_2.jpg": "7fc42e2bd0f175ee2bcc8562bfdc1d7a",
"assets/assets/images/ybs_sd_1.jpg": "edf9241ebf90c990ddc3d9953f66ce7f",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

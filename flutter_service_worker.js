'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "58c013f4d04b0b859eff07db7937f076",
"assets/AssetManifest.bin.json": "93014ea4de57aa59d90b49df4e638de6",
"assets/AssetManifest.json": "d561b6fdd772b399426c78b9b9eda833",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/mglogo.png": "b202c5df7569d73e58219a435512fb0a",
"assets/assets/icons/mknmhss.png": "15af2ede1ed54088e1089acef2705ea4",
"assets/assets/icons/mobileappdev.png": "af59c808ad37ba12f05f3c2dd15bce86",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/whatsapp.png": "9b9905c526d6f3083db17979a846db69",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/9xtechnology.jpg": "0a0648fbc8140eb50c2be4bc37f5882e",
"assets/assets/images/9xtechnology.png": "138e242a7217c161322b1728870bbabe",
"assets/assets/images/android.png": "f9b99117d528d7fb3008af200dc66214",
"assets/assets/images/apple.png": "710620c3c9674a63bf3472a46a3458df",
"assets/assets/images/freelancer.png": "31bcd2ae665e2771c6786ef708ca5162",
"assets/assets/images/gggpt.png": "85ed8ae8cfa8808691fe088aaa6ee879",
"assets/assets/images/hardware.png": "b6157fc2633ed307bbf5b39eeae86068",
"assets/assets/images/hindugpt.png": "3912e6662a7dffafc6326060377967e8",
"assets/assets/images/logo.png": "af882f2403b29a2e37a5afb9f1f400a4",
"assets/assets/images/password.png": "766a61b0dc93c13ea161329a52824fab",
"assets/assets/images/quran.png": "e7fbfb5dd0b261902ad25e7f9b1443c8",
"assets/assets/images/uvionics.png": "ddd6b5f738ae4910407f951cf9e84ddc",
"assets/assets/json/loading.json": "6869bbdffc3f6c6c180c5cd29137ef67",
"assets/assets/pdf/resume.pdf": "d0a104e4996cb7e8edff52db3263a046",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dc382db0120d2034be4ae237d2370b21",
"assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/icons/mglogo.png": "b202c5df7569d73e58219a435512fb0a",
"assets/icons/mknmhss.png": "15af2ede1ed54088e1089acef2705ea4",
"assets/icons/mobileappdev.png": "af59c808ad37ba12f05f3c2dd15bce86",
"assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/icons/whatsapp.png": "9b9905c526d6f3083db17979a846db69",
"assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/images/9xtechnology.jpg": "0a0648fbc8140eb50c2be4bc37f5882e",
"assets/images/9xtechnology.png": "138e242a7217c161322b1728870bbabe",
"assets/images/android.png": "f9b99117d528d7fb3008af200dc66214",
"assets/images/apple.png": "710620c3c9674a63bf3472a46a3458df",
"assets/images/freelancer.png": "31bcd2ae665e2771c6786ef708ca5162",
"assets/images/gggpt.png": "85ed8ae8cfa8808691fe088aaa6ee879",
"assets/images/hardware.png": "b6157fc2633ed307bbf5b39eeae86068",
"assets/images/hindugpt.png": "3912e6662a7dffafc6326060377967e8",
"assets/images/logo.png": "af882f2403b29a2e37a5afb9f1f400a4",
"assets/images/password.png": "766a61b0dc93c13ea161329a52824fab",
"assets/images/quran.png": "e7fbfb5dd0b261902ad25e7f9b1443c8",
"assets/images/uvionics.png": "ddd6b5f738ae4910407f951cf9e84ddc",
"assets/json/loading.json": "6869bbdffc3f6c6c180c5cd29137ef67",
"assets/NOTICES": "5ee7f5baf63c088a4aa278132da0a777",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/pdf/resume.pdf": "d0a104e4996cb7e8edff52db3263a046",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "8777a3ea5077881a777f124e3cce1614",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "af882f2403b29a2e37a5afb9f1f400a4",
"index.html": "549ee616fd2faec232ca2e9b0de9cead",
"/": "549ee616fd2faec232ca2e9b0de9cead",
"main.dart.js": "61c619f39250589513c5e7ed693c20c0",
"manifest.json": "d2952bd585acbfeb4997c0e40375e1a2",
"trail.json": "402c003d81255c11b459c570d23f590c",
"version.json": "c9ac859d9cd8b5050a7cc19555e746a5"};
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

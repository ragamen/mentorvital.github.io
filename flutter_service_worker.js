'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f1a39ee778eaad654af5c790efcb504c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "30f1a51c4f8317462ed76070b0d7a967",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ddf99092cfa8b18beb56509bce6ee851",
".git/logs/refs/heads/main": "c1b480fde4b407675909f6227fa7840f",
".git/logs/refs/remotes/origin/main": "79ca2172fcbebd2d8be41a3df77735dd",
".git/objects/00/840a4a9df09cbaa927cd232a63401391cf4d3e": "fbd451143aa658ac71f82650623294fd",
".git/objects/00/9a79c3f7e186ee0ded5ed728b18ff4e954c827": "cff07b4a78aa1e0ecca5fabc9f2bb70c",
".git/objects/03/5bf14ea9deca2f0a73ecf67e3c9516a4ed5e6e": "e0adf5858e3692c98fc26dd1f68c554f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/4c29ad5912d80ea3982cf4c04420526a36b071": "5593f7b40d2691dc03916b999f1b22bc",
".git/objects/09/e7756f3e4b0efd26fd2b07f686d7ff9bbac930": "5bfc854c844cd445cd47b464d22d4a22",
".git/objects/0a/1ad3a11e057224151c855fa32b42488e1c108a": "d858ab6bdf7e6a77654d4cc8cb9ea7c5",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/e061d6e04c37f94b9e9bd4667af2cf948de3db": "07a0224d91d8c5ed9b124398c168f4fa",
".git/objects/16/dfc2749f50f8fe47abbc76a5c54c0e21a9ac7a": "70ed8d048dda15feb6f934319d16fb90",
".git/objects/17/f755337e9780e1ae792b382655bf8069882888": "84a66f9df1f6234ab2254cd52f9b7a28",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/51c44dbe1d81edfef80b0ecd9a931b22935a84": "1218fdc449ade7191f45c305a5735484",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/f5e2e261a35b33b93e50eed6d8e262a2101587": "9ba7e524c630d8d04957fdcef4cfdf82",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/32/003b7902ad346953723e518b9de4b0b3dc14ff": "4f5b6764b8eba6474b17f24c73c76d21",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3f/48f5014d910d98fbf853ce9022012cb0a3f296": "f5a88de7cd36bcb250423ef644956315",
".git/objects/3f/7bc30b5450adcc07d1bddcc3c12ff666367055": "5680f226a0a550b1dc1f417655429740",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/2bb92c6ef07917d104c3a116dabab96fec23c8": "8b3d71d7d2179b7adea8ad21c98a356e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5d/9d1e19854fb9eec0fe3ce2034f6589a39e3e09": "a789c31167e8f96a41c607982d8cdea5",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/4263555e7bcf1549025d7268aaed8e541fffb3": "5b8494a8ab8ab071a83daa3916f59991",
".git/objects/72/6daf4341eab8210c0a234ef2f4849ec9e60ba5": "de769332631a900a494c5aca6ec7ee96",
".git/objects/72/77797edd8d15dad826513be2d707c00fb98801": "f5b07c7d1ef106fb5e52b8ea2ce43906",
".git/objects/75/782e6be0835028195240556b0ef58534119e7c": "06d2c582db7092a661ea1c9292ea1ba5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/207336b61d554202b9ce7e0fc025c47588e092": "3aa59d1100bdd9d55c5bb6381fd5f1be",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/703a40cf223c4784be2f91e35195d1da22340a": "179fd0cbca960a814543780b2f579352",
".git/objects/9a/0918919deffd53d59bda93751751926bcbb7d0": "b1eb6b026a0622103ffd90233f8545a9",
".git/objects/9f/b1961a061d0c0b3e6ced5804d1ef5d0b561ed1": "644cdb9153af949c0056417933470887",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ac/f83659a237a1797de8df73c380218ce42bb071": "c4ee6e0157bae63a54270c3a759ae24a",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/8ebd405d5b4aeb9f4c994200e3f467e49c7232": "30af6a085462515de2c8f1e64c451ae7",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/a7a5c0651e57e70107a046394ecebc2c3e2734": "c2f9a42e180ddd3fa78f5dec0af5cbd2",
".git/objects/c4/ef6f47715d470bb443d2eb7912a7f4c53b1255": "89d55d32a125ac684d0955689705a226",
".git/objects/c7/e15e6b16238ab81765610a264db275980ffbaf": "2e78933629670bab6cb362066a165eb7",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6f025490519e08ad8ef45977f4e28c92d28e48": "1cfc9f3e7abe8474b3fdbc7afb22f240",
".git/objects/d8/a81db31907a0bef39c78d1c15129c93e44fb00": "fa1ee0da1da6e19ae4ef38ca80a62bae",
".git/objects/e8/e0008533e7ce70d0d7bfb31d584bbab8559e85": "99acbdcfb8203399fd8e596b630d635c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/6d123684b23f5e1f099729960f98aee644c35e": "bf282b92cd96d9471aa8cac71a50400b",
".git/objects/fd/e672e35116e83cf40d20ba015209ed4bc2fb1c": "65c4da8818075a9acfaa9a491615f854",
".git/objects/fe/c4ea68481dd03326b7a60bc79f712b924d6a3c": "0ddb5d015cf42efedfc2b5d6f42cf26d",
".git/objects/ff/cd21586dbb27347750cccd794d5da3621e54f8": "c36de4e6c2ffb70487893aa81ad32704",
".git/refs/heads/main": "3837b4e517cc7eddc9f2bc0417f2deac",
".git/refs/remotes/origin/main": "91b6129febe76cbaaf845aaa2f76d83a",
"assets/AssetManifest.bin": "9437d47026c65a58da430c94975470cf",
"assets/AssetManifest.json": "976c9d7998c31ab601cbba47558371c3",
"assets/assets/background1.jpg": "d9f491891eb9c667c03c5d0ee146f9a0",
"assets/assets/background2.jpg": "7a725452423d578778f7c0f8be3be770",
"assets/assets/song1.mp3": "059fade2cf7853b36f1d02738450abfb",
"assets/assets/song10.mp3": "57e09bea5bb448a6e426f2155a262f02",
"assets/assets/song11.mp3": "a91840f580848c5fff09ba876d914f2b",
"assets/assets/song13.mp3": "e7506df3cd1c779f413df9eaa85a5655",
"assets/assets/song14.mp3": "9c50da23cab9ab40087f17258fdf4063",
"assets/assets/song15.mp3": "1f1aeac8b6e433243ebc9a786fa819b5",
"assets/assets/song2.mp3": "62c107949f06071d9dd159b5a7f7e42e",
"assets/assets/song3.mp3": "198a56131c573fb823a2a82a7b361860",
"assets/assets/song4.mp3": "70f8ce148788bac40904c770bcce94e2",
"assets/assets/song5.mp3": "71d74f2f8711c11028f6d0f9059e7ed6",
"assets/assets/song6.mp3": "c2fbf2c46e73d4968f90e9dcf4ba2c1e",
"assets/assets/song7.mp3": "6c2e6dc511df5bc5880194043a4d6370",
"assets/assets/song8.mp3": "12861f0099bb2f2d402346e512dc5811",
"assets/assets/song9.mp3": "a67e13b00688127ccaf072cd9ef016ec",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "15f09b8e1b1d3c3b91f99e021412d167",
"assets/NOTICES": "0187d790944a4b4afcc9900f4ea1f0b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "76c0ee0d9e8e854d0e2c7f7edff4e9c4",
"/": "76c0ee0d9e8e854d0e2c7f7edff4e9c4",
"main.dart.js": "628af20f99a916103d81f66f5575da47",
"manifest.json": "2eab5bc136f50c1ecf13c319cdf876aa",
"version.json": "df22f608e26be3fce0ed500919e75b78"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

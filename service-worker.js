/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "de7af94069ca0739ca1b4d1b32b207ca"
  },
  {
    "url": "assets/css/0.styles.73a7af99.css",
    "revision": "ad147aa8c302baa7395a09e12e7eeabd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b91fb8ca.js",
    "revision": "9c0d17a159fb825d611d7e4b0cb377e3"
  },
  {
    "url": "assets/js/11.51e18a37.js",
    "revision": "b0ce8451725897f94ac689bc0aef18f4"
  },
  {
    "url": "assets/js/12.b42cfc25.js",
    "revision": "4215de9d61b7d56b24b5a68ca1d83514"
  },
  {
    "url": "assets/js/13.cec7db7b.js",
    "revision": "ccf3a44cac798a7f8ea589e71cdc6f14"
  },
  {
    "url": "assets/js/14.6056cfd9.js",
    "revision": "e9bfb316036a370dce70a4b1b5c69c75"
  },
  {
    "url": "assets/js/15.06aa771f.js",
    "revision": "d97a64ef90216028b826d3af4c6bc82b"
  },
  {
    "url": "assets/js/2.69ac7a3e.js",
    "revision": "82cde217b0380a633539ef10ed69ca1a"
  },
  {
    "url": "assets/js/3.ace7fa65.js",
    "revision": "243522c095bc4da0de8e1d55c6d6ba7d"
  },
  {
    "url": "assets/js/4.dabeb514.js",
    "revision": "ad6aa4d1240a360d5bfb0f05672a26d8"
  },
  {
    "url": "assets/js/5.581103e7.js",
    "revision": "d2f59e3bdf990a118d3f6ce18918e80b"
  },
  {
    "url": "assets/js/6.5932b28b.js",
    "revision": "02e1474d22817728415567934dc9f878"
  },
  {
    "url": "assets/js/7.54b21254.js",
    "revision": "e7ee11aad7791d50769ac76991ae448c"
  },
  {
    "url": "assets/js/8.ff41e16e.js",
    "revision": "d6959617b39cdde2288979fdae3b57ad"
  },
  {
    "url": "assets/js/9.3c5a7ac1.js",
    "revision": "fef65d3bf53663592486a927e5aa0bcd"
  },
  {
    "url": "assets/js/app.21353f11.js",
    "revision": "860413e02825e2b2d5e10cd6ff76794c"
  },
  {
    "url": "en/guide/first-steps.html",
    "revision": "b83272d24b9b4dd0f7032b58ebb9cd4c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "91aef82dccc61eda8f71e96872a47557"
  },
  {
    "url": "en/index.html",
    "revision": "6fb4bb87eb86729eec7f843a55340198"
  },
  {
    "url": "guide/first-steps.html",
    "revision": "4eb699b9e62633081aa3f241d9e312dd"
  },
  {
    "url": "guide/index.html",
    "revision": "8a526e24e663d26907dc4aba5c9e258b"
  },
  {
    "url": "icons/icon-1024x1024.png",
    "revision": "29f6d469b12a48e745ca438ce49ae452"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "d5a6125ccb0e1bc547507c9eedf60d4a"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "668d2e5f5345d5c8f265a98a9255e2ba"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "95e2d89adef8c0bd134c903588df1851"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "0aeb02d4257f1c4da10c55a102d0da96"
  },
  {
    "url": "images/aurora_saas_logo_ligth.svg",
    "revision": "d28a7f6d54d86e7d05a938b40f2a8e10"
  },
  {
    "url": "index.html",
    "revision": "6515f50bc7bad013623aedacc8e8ef58"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

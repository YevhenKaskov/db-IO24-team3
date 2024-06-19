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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "d648417f20dd34b9760ceb2896a22a3f"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f5bbac8e.css",
    "revision": "25630b5f990b2e3c15317ac57714e6e5"
  },
  {
    "url": "assets/img/add_request.672eb383.png",
    "revision": "672eb3835ab277bc38de3d6ba151d2e7"
  },
  {
    "url": "assets/img/add_user.345ad79c.png",
    "revision": "345ad79c6ce281ec2457397791c0c0fa"
  },
  {
    "url": "assets/img/delete_user.5749dfe9.png",
    "revision": "5749dfe9754d42f9357b1cdcdec00c22"
  },
  {
    "url": "assets/img/relayshema.e5a2192d.png",
    "revision": "e5a2192d15b9948462f4d71eea65120f"
  },
  {
    "url": "assets/img/request_by_id.dd9cff75.png",
    "revision": "dd9cff75a508f0cd3f95527cd18cb107"
  },
  {
    "url": "assets/img/requests.9afe74b3.png",
    "revision": "9afe74b3755c1ff298ddcb73fd8f6e8b"
  },
  {
    "url": "assets/img/requests2.6ce99a7c.png",
    "revision": "6ce99a7cbc0c6375d7034b6a30d6346c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update_user.5ad4bba4.png",
    "revision": "5ad4bba4ce87f89bac47ba6f7b694f85"
  },
  {
    "url": "assets/img/user_by_id.8adefee2.png",
    "revision": "8adefee2e2eeb3d3256586d4ce5d75fe"
  },
  {
    "url": "assets/img/users_upd.28ca4461.png",
    "revision": "28ca44617a5bf4f5bbfde5d50faa7708"
  },
  {
    "url": "assets/img/users.c343de34.png",
    "revision": "c343de34c33920d9f2f3a1246e5f888c"
  },
  {
    "url": "assets/img/users2.5562f3c7.png",
    "revision": "5562f3c784e3ba4f002ec954665ef7fd"
  },
  {
    "url": "assets/js/1.b04947fa.js",
    "revision": "0d3f11de302524555e38094a4e346c52"
  },
  {
    "url": "assets/js/10.452f80ae.js",
    "revision": "78be89402098926be772bab7751bd199"
  },
  {
    "url": "assets/js/13.0cb61c15.js",
    "revision": "ac4f3fe749811b8e7322af0ac02b07a5"
  },
  {
    "url": "assets/js/14.deb64674.js",
    "revision": "e850d0766babd121dd37b05ad50d49ef"
  },
  {
    "url": "assets/js/15.2ba23f20.js",
    "revision": "c2afd41be0087b2bfe2b1f97c72b4f1b"
  },
  {
    "url": "assets/js/16.2bc577d7.js",
    "revision": "18e9a7b58be1e7e5f75822bfa14c22e0"
  },
  {
    "url": "assets/js/17.2ded4c25.js",
    "revision": "7357aa4c64ee2c7f585ecc708d5dfbc7"
  },
  {
    "url": "assets/js/18.bbb3bd3c.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.9b8f087f.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.ae51da56.js",
    "revision": "4c851c71b19590274720132910fd86d5"
  },
  {
    "url": "assets/js/20.52890aef.js",
    "revision": "2cfa21d746ea1cba964bf4a4a06a44a3"
  },
  {
    "url": "assets/js/21.39425e04.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.89a6c97c.js",
    "revision": "30def599bebca437fd4da161c4fd2f82"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.590bbba7.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.419e4330.js",
    "revision": "1e2f9e99cd1e3925bf8b83a89b24c018"
  },
  {
    "url": "assets/js/28.e6da8f3d.js",
    "revision": "ca5cecc6e7f1fea233cf80003c6e48fd"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.ab756ddf.js",
    "revision": "891af28abfcea32c0a1e3a1f0be7d13a"
  },
  {
    "url": "assets/js/31.b15abac1.js",
    "revision": "8972e928c9741575777f36a5eb688b83"
  },
  {
    "url": "assets/js/32.ac58c9ee.js",
    "revision": "3f0eab7be518100c64e07c76bccb1844"
  },
  {
    "url": "assets/js/33.fc690502.js",
    "revision": "4fee86973b8ca140d814c69f059a88d6"
  },
  {
    "url": "assets/js/34.d3207739.js",
    "revision": "c7f74cb93e1553a2ff603362940cb460"
  },
  {
    "url": "assets/js/35.c2a4fe4b.js",
    "revision": "02da14af4fa3af4871b16f023973827d"
  },
  {
    "url": "assets/js/36.66896149.js",
    "revision": "850d18f0fc23bbc3b15018e55156dd06"
  },
  {
    "url": "assets/js/37.96b47068.js",
    "revision": "e6225e03e2830fb686c5db377673ae7d"
  },
  {
    "url": "assets/js/38.68dab21f.js",
    "revision": "7462528d2515792e584870ae5be97718"
  },
  {
    "url": "assets/js/39.4a90a49a.js",
    "revision": "14dab7de4b2929dd10ab061835799989"
  },
  {
    "url": "assets/js/4.6d59b340.js",
    "revision": "284066d1748cf2523f5d8e6501a587d5"
  },
  {
    "url": "assets/js/41.4e0ab024.js",
    "revision": "d02cbe52e2b448a182632ab16db7eb9d"
  },
  {
    "url": "assets/js/5.553ae5fa.js",
    "revision": "63fdb96489c9ac546787d308853ee26d"
  },
  {
    "url": "assets/js/6.4467f305.js",
    "revision": "423995706c72f25e02a8867336a25607"
  },
  {
    "url": "assets/js/7.9c49ddbd.js",
    "revision": "f5444807b829b69f3d6d220aea2efe44"
  },
  {
    "url": "assets/js/8.ca745063.js",
    "revision": "33cbfa245cc046de6678e415f1b9e34f"
  },
  {
    "url": "assets/js/9.9b5fd8ae.js",
    "revision": "2dbc793b0725314105e923cdfac9e223"
  },
  {
    "url": "assets/js/app.ace87fdc.js",
    "revision": "11735d63866586b9b204f6e3be9e2cb4"
  },
  {
    "url": "assets/js/vendors~docsearch.0c5eabf3.js",
    "revision": "5ad6dd201cf81df1e6040a4b4df3f99b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e5d9f07fedf8e093e4d1bbcfd747bba3"
  },
  {
    "url": "design/index.html",
    "revision": "23084baa752ab2977ea34df3a4aacb6d"
  },
  {
    "url": "index.html",
    "revision": "c8712063f30c1e65aacf00945767a530"
  },
  {
    "url": "intro/index.html",
    "revision": "83477d7eb942929e08dae009f535758d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "5b8115c89c8d881836ab6ffc2f1210ef"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "1504efbf52d939cead18120995370f0e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ce0361341873c6465ab6ff1baee5b603"
  },
  {
    "url": "software/index.html",
    "revision": "a899ea6d2d27d892169d3ddf3eafd990"
  },
  {
    "url": "test/index.html",
    "revision": "b95d7a89afd0c44fbfd0e75d585293b3"
  },
  {
    "url": "use cases/index.html",
    "revision": "8e88493c81eab39360fac2750c19efb9"
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

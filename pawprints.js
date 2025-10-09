
(function () {
  'use strict';

  try {
    var b64 = 'a2lraSBpcyBjdXRlLg==';

    
    if (!/^[A-Za-z0-9+/=]+$/.test(b64)) return;

    var decoded;
    try {
      decoded = atob(b64);
    } catch (e) {
      return;
    }

   
    if (typeof decoded === 'string' && decoded.length < 200 && /^[\x20-\x7E]+$/.test(decoded)) {
      window.STAGE1_FLAG = decoded;
      
      try { console.log('pawprints: base64 decoded.'); } catch (e) {}
    }
  } catch (err) {
    // fail silently so page still works
  }
})();

// A curious clue hides at https://arly.one/secret-key.txt 👀

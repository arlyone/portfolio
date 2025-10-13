// A curious clue hides at https://arly.one/assets/images/cat_detective.jpg
// Please don't decode https://arly.one/secret-key.txt 👀

(function () {
  'use strict';

  try {
    var altKey1 = 'bWVvdyBtZW93IG1lb3c='; 
    var altKey2 = 'Y2F0cyBhcmUgY3V0ZQ=='; 
    var primaryKey = 'a2lraSBsb3ZlcyBmaXNo';
    var altKey3 = 'cHVyciBwdXJyIHB1cnI='; 
    
    var b64 = 'a2lraSBsb3ZlcyB0dW5hLg==';

    
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
  
  }
})();


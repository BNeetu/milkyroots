const dict = [
  // Nav
  { sel: '.nav-links a[href="#products"]', hi: 'उत्पाद' },
  { sel: '.nav-links a[href="#trial"]', hi: 'मुफ्त ट्रायल' },
  { sel: '.nav-links a[href="#subscription"]', hi: 'सब्सक्राइब' },
  { sel: '.nav-links a[href="#health"]', hi: 'फायदे' },
  { sel: '.nav-links a[href="#about"]', hi: 'हमारे बारे में' },
  { sel: '.nav-links a[href="#faq"]', hi: 'सवाल-जवाब (FAQ)' },
  { sel: '.nav-links a[href="#team"]', hi: 'हमारी टीम' },
  { sel: '.nav-cta', hi: 'ऑर्डर करें' },

  // Mobile Nav
  { sel: '.mobile-menu a[href="#products"]', hi: 'उत्पाद' },
  { sel: '.mobile-menu a[href="#trial"]', hi: 'मुफ्त ट्रायल' },
  { sel: '.mobile-menu a[href="#subscription"]', hi: 'सब्सक्राइब' },
  { sel: '.mobile-menu a[href="#about"]', hi: 'हमारे बारे में' },
  { sel: '.mobile-menu a[href="#team"]', hi: 'हमारी टीम' },
  { sel: '.mobile-menu a[href="#order"]', hi: 'ऑर्डर करें' },

  // Banners
  { sel: '.promo-banner span:nth-child(2)', hi: 'पहले 100 ग्राहकों को दूध पर <span class="highlight">15% की छूट</span>' },
  { sel: '.promo-banner span:nth-child(3)', hi: '+ 2L छाछ और 100gm घी <span class="highlight">मुफ़्त!</span>' },
  { sel: '.loyalty-banner', hi: '🥛 नए ग्राहकों के लिए 2 दिन का मुफ्त ट्रायल!<span>अभी क्लेम करने के लिए हमें WhatsApp करें →</span>' },

  // Hero
  { sel: '.hero-badge', hi: '✨ ब्यावर की सबसे भरोसेमंद शुद्ध डेयरी' },
  { sel: '.hero h1', hi: '<em>शुद्ध देसी गाय</em> के दूध की शुद्धता का स्वाद लें' },
  { sel: '.hero-desc', hi: 'खेत का ताज़ा A2 दूध, प्रोबायोटिक दही और असली बिलोना घी। सख्त गुणवत्ता नियंत्रण और शून्य मिलावट के साथ ब्यावर में प्रतिदिन वितरित।' },
  { sel: '.hero-btns .btn-primary', hi: '🐄 अपना दूध ऑर्डर करें' },
  { sel: '.hero-btns .btn-outline', hi: '🎁 मुफ्त 2-दिन का ट्रायल पाएं' },
  { sel: '.hero-stat:nth-child(1) p', hi: 'खुशहाल परिवार' },
  { sel: '.hero-stat:nth-child(2) p', hi: 'शुद्ध A2 दूध' },
  { sel: '.hero-stat:nth-child(3) p', hi: 'दोहन सुबह 4 बजे शुरू होता है' },
  { sel: '.ft1', hi: '🐄 शुद्ध देसी गाय' },
  { sel: '.ft2', hi: '🥦 कृषि उत्पाद' },

  // Hero Slides
  { sel: '#heroSlide .slide:nth-child(1) .s-badge', hi: 'हमारा फार्म' },
  { sel: '#heroSlide .slide:nth-child(1) h4', hi: 'शुद्धता का अनुभव करें' },
  { sel: '#heroSlide .slide:nth-child(1) p', hi: 'मिल्कीरूट्स फार्म पर हमारी स्वस्थ गायों को देखें।' },
  { sel: '#heroSlide .slide:nth-child(2) .s-badge', hi: 'प्राकृतिक आहार' },
  { sel: '#heroSlide .slide:nth-child(2) h4', hi: 'खुले मैदान में चराई' },
  { sel: '#heroSlide .slide:nth-child(2) p', hi: 'हमारी गायें ताज़ा हरे चारे (हरा रंजका, हरा जानवर और हरा बाजरा) का आनंद लेती हैं, जिससे उच्चतम गुणवत्ता वाला दूध स्वाभाविक रूप से सुनिश्चित होता है।' },
  { sel: '#heroSlide .slide:nth-child(3) .s-badge', hi: 'परम शुद्धता' },
  { sel: '#heroSlide .slide:nth-child(3) h4', hi: 'फार्म का ताज़ा A2 दूध' },
  { sel: '#heroSlide .slide:nth-child(3) p', hi: 'सीधे हमारे खेत से आपके दरवाजे तक — बिना किसी मिलावट के और अच्छाई से भरपूर।' },
  { sel: '#heroSlide .slide:nth-child(4) .s-badge', hi: 'हमारा परिवार' },
  { sel: '#heroSlide .slide:nth-child(4) h4', hi: 'मिल्कीरूट्स का झुंड' },
  { sel: '#heroSlide .slide:nth-child(4) p', hi: 'स्वस्थ देसी गायें जिन्हें प्यार और पारंपरिक देखभाल के साथ पाला जाता है।' },
  { sel: '#heroSlide .slide:nth-child(5) .s-badge', hi: 'हमारा फार्म' },
  { sel: '#heroSlide .slide:nth-child(5) h4', hi: 'हरा-भरा पर्यावरण' },
  { sel: '#heroSlide .slide:nth-child(5) p', hi: 'हमारे टिकाऊ खेत की एक झलक जहाँ प्रकृति और परंपरा मिलती है।' },
  { sel: '#heroSlide .slide:nth-child(6) .s-badge', hi: 'सेवा' },
  { sel: '#heroSlide .slide:nth-child(6) h4', hi: 'समर्पित डिलीवरी' },
  { sel: '#heroSlide .slide:nth-child(6) p', hi: 'हमारे दूधवाले सुबह 7 बजे तक डिलीवरी का पूरा प्रयास करेंगे; प्राकृतिक या जलवायु जैसी दुर्लभ स्थितियों में थोड़ी देरी हो सकती है।' },

  // Products
  { sel: '#products .section-label', hi: 'हम क्या प्रदान करते हैं' },
  { sel: '#products .section-title', hi: 'हमारे शुद्ध डेयरी उत्पाद' },
  { sel: '#products .section-sub', hi: 'प्रत्येक उत्पाद हमारी अपनी देसी गायों के दूध से बनाया जाता है, जिन्हें स्वाभाविक रूप से हरे चारे (हरा रंजका, हरा जानवर और हरा बाजरा) पर पाला जाता है — कोई हार्मोनल तत्व नहीं, कोई प्रिजर्वेटिव नहीं, कोई शॉर्टकट नहीं।' },
  
  { sel: '.product-card:nth-child(1) h3', hi: 'ताजा गाय का दूध' },
  { sel: '.product-card:nth-child(1) p:nth-of-type(2)', hi: 'हमारी देसी गायों का शुद्ध A2 दूध — प्राकृतिक वसा, विटामिन और खनिजों से भरपूर। हमारे प्रशिक्षित ग्वालों द्वारा हर सुबह और शाम ताज़ा एकत्र किया जाता है।' },
  { sel: '.product-card:nth-child(1) .product-details', hi: '<strong>उत्पाद विवरण.</strong><br>वसा सामग्री: 4.0–4.5% प्राकृतिक वसा।<br>दोहन प्रतिदिन सुबह 4 बजे शुरू होता है।<br>डिलीवरी: हम सुबह 7 बजे तक डिलीवरी का पूरा प्रयास करेंगे; दुर्लभ स्थितियों में थोड़ी देरी हो सकती है।' },
  
  { sel: '.product-card:nth-child(2) h3', hi: 'घर का दही' },
  { sel: '.product-card:nth-child(2) p:nth-of-type(2)', hi: 'साबुत गाय के दूध से रात भर जमाया गया गाढ़ा, मलाईदार दही। प्राकृतिक प्रोबायोटिक्स से भरपूर — पाचन, प्रतिरक्षा और स्वाद के लिए बेहतरीन। बिल्कुल वैसा ही जैसा आपकी दादी बनाती थीं।' },
  { sel: '.product-card:nth-child(2) .product-details', hi: '<strong>उत्पाद विवरण.</strong><br>प्राकृतिक कल्चर का उपयोग करके रात भर सेट किया जाता है।<br>कोई प्रिजर्वेटिव या थिकनर नहीं।<br>उपलब्धता: दैनिक सुबह की डिलीवरी।<br>डिलीवरी से 2 दिन पहले तक सबसे अच्छा।' },

  { sel: '.product-card:nth-child(3) h3', hi: 'ताजा छाछ' },
  { sel: '.product-card:nth-child(3) p:nth-of-type(2)', hi: 'क्लासिक राजस्थानी छाछ — ठंडी, प्राकृतिक रूप से जीरा और ताजे पुदीने के साथ मसालेदार। सीधे मटके से सबसे अच्छा गर्मी का पेय, जैसा कि हमारे पूर्वजों ने आनंद लिया था।' },
  { sel: '.product-card:nth-child(3) .product-details', hi: '<strong>उत्पाद विवरण.</strong><br>रोजाना ताजे दही से बनाया जाता है।<br>जीरा और पुदीने के साथ मसालेदार।<br>उपलब्धता: सुबह और शाम।<br>उसी दिन सेवन करना सबसे अच्छा है।' },

  { sel: '.product-card:nth-child(4) h3', hi: 'शुद्ध बिलोना घी' },
  { sel: '.product-card:nth-child(4) p:nth-of-type(2)', hi: 'प्राचीन बिलोना विधि का उपयोग करके बनाया गया — दही को हाथ से मथ कर मक्खन बनाया जाता है, फिर लकड़ी की आग पर धीमी आंच पर पकाया जाता है। कोई शॉर्टकट नहीं, कभी नहीं।' },
  { sel: '.product-card:nth-child(4) .product-details', hi: '<strong>उत्पाद विवरण.</strong><br>पारंपरिक लकड़ी की आग बिलोना विधि।<br>25 लीटर दूध → 1 किलो घी।<br>शेल्फ जीवन: 12 महीने (रेफ्रिजरेशन की आवश्यकता नहीं)।' },

  // Trial
  { sel: '#trial .section-label', hi: 'सब्सक्राइब करने से पहले आज़माएं' },
  { sel: '#trial .section-title', hi: 'मुफ्त 2-दिन का ट्रायल' },
  { sel: '#trial .section-sub', hi: 'अभी भी सुनिश्चित नहीं हैं? हम समझते हैं। हमारे किसी भी उत्पाद को 2 दिनों के लिए पूरी तरह से मुफ्त आज़माएं — दूध/दही/छाछ के लिए 2 लीटर — और सदस्यता लेने से पहले खुद अंतर महसूस करें।' },
  { sel: '.trial-step:nth-child(1) h4', hi: 'चरण 1 — चुनें' },
  { sel: '.trial-step:nth-child(1) p', hi: 'कोई भी उत्पाद चुनें जिसे आप आज़माना चाहते हैं — दूध, दही, छाछ या घी (घी ट्रायल के लिए 50gm)।' },
  { sel: '.trial-step:nth-child(2) h4', hi: 'चरण 2 — हम पहुँचाएंगे' },
  { sel: '.trial-step:nth-child(2) p', hi: 'हम आपके चुने हुए उत्पाद के 2 लीटर (प्रति दिन 1 लीटर) ब्यावर में आपके दरवाजे पर पहुँचाएंगे — बिल्कुल मुफ़्त।' },
  { sel: '.trial-step:nth-child(3) h4', hi: 'चरण 3 — स्वाद लें' },
  { sel: '.trial-step:nth-child(3) p', hi: 'इसे अपनी रसोई में 2-3 दिनों तक उपयोग करें। इसके साथ पकाएं, इसे पिएं, और तुलना करें।' },
  { sel: '.trial-step:nth-child(4) h4', hi: 'चरण 4 — सब्सक्राइब करें' },
  { sel: '.trial-step:nth-child(4) p', hi: 'यदि आप इसे पसंद करते हैं (और आप करेंगे!), तो अपने परिवार की ज़रूरतों के अनुकूल सदस्यता योजना चुनें।' },
  
  { sel: '.trial-highlight .sub-label', hi: 'मुफ्त ट्रायल ऑफर' },
  { sel: '.trial-highlight .big-num', hi: '2 दिन' },
  { sel: '.trial-highlight p:nth-of-type(2)', hi: 'किसी भी उत्पाद का मुफ्त ट्रायल<br>आपके दरवाजे पर पहुँचाया गया<br>कोई भुगतान आवश्यक नहीं<br><br><strong style="color:var(--gold-light)">प्रति परिवार एक ट्रायल</strong><br><span style="font-size:.8rem;opacity:.6">केवल ब्यावर शहर में डिलीवरी</span>' },

  { sel: '#trial > div > p.section-label', hi: 'अपना ट्रायल उत्पाद चुनें' },
  { sel: '.trial-product-card:nth-child(1) h5', hi: 'ताजा गाय का दूध' },
  { sel: '.trial-product-card:nth-child(1) p', hi: 'शुद्ध A2 देसी गाय का दूध' },
  { sel: '.trial-product-card:nth-child(1) .tp-free', hi: '2 लीटर मुफ़्त' },
  { sel: '.trial-product-card:nth-child(2) h5', hi: 'घर का दही' },
  { sel: '.trial-product-card:nth-child(2) p', hi: 'गाढ़ा प्रोबायोटिक दही' },
  { sel: '.trial-product-card:nth-child(2) .tp-free', hi: '500gm मुफ़्त' },
  { sel: '.trial-product-card:nth-child(3) h5', hi: 'ताजा छाछ' },
  { sel: '.trial-product-card:nth-child(3) p', hi: 'मसालेदार राजस्थानी छाछ' },
  { sel: '.trial-product-card:nth-child(3) .tp-free', hi: '2 लीटर मुफ़्त' },
  { sel: '.trial-product-card:nth-child(4) h5', hi: 'बिलोना घी' },
  { sel: '.trial-product-card:nth-child(4) p', hi: 'शुद्ध लकड़ी की आग का घी' },
  { sel: '.trial-product-card:nth-child(4) .tp-free', hi: '50gm मुफ़्त' },

  { sel: '.trial-cta-box h3', hi: '🎁 अपना मुफ्त ट्रायल अभी क्लेम करें' },
  { sel: '.trial-cta-box p', hi: 'हमें अपना नाम, पता और कौन सा उत्पाद आप आज़माना चाहते हैं, WhatsApp करें।<br>हम 24 घंटों के भीतर आपका मुफ्त ट्रायल देंगे — कोई भुगतान नहीं, कोई प्रतिबद्धता नहीं।' },
  { sel: '.trial-cta-box a', hi: '💬 मुफ्त ट्रायल के लिए WhatsApp करें' },

  // Subscriptions
  { sel: '#subscription .section-label', hi: 'सदस्यता योजनाएं' },
  { sel: '#subscription .section-title', hi: 'अपनी योजना चुनें' },
  { sel: '#subscription .section-sub', hi: 'पैसे बचाएं, ताज़ा डेयरी उत्पादों की कभी कमी न होने दें। हमारी योजनाएं लचीली हैं — कभी भी रोकें, बदलें या रद्द करें। कोई बंधन नहीं।' },
  
  { sel: '.sub-card:nth-child(1) h3', hi: 'बेसिक (Basic)' },
  { sel: '.sub-card:nth-child(1) .sub-price span', hi: '/ महीना' },
  { sel: '.sub-card:nth-child(1) ul li:nth-child(1)', hi: 'रोजाना 1 लीटर ताजा दूध' },
  { sel: '.sub-card:nth-child(1) ul li:nth-child(2)', hi: 'सुबह 7 बजे से पहले दूध पहुंचाने का प्रयास' },
  { sel: '.sub-card:nth-child(1) ul li:nth-child(3)', hi: 'सप्ताह में दो बार 500gm दही' },
  { sel: '.sub-card:nth-child(1) ul li:nth-child(4)', hi: 'WhatsApp ऑर्डर प्रबंधन' },
  { sel: '.sub-card:nth-child(1) ul li:nth-child(5)', hi: 'महीने में 5 दिन तक रोकें (Pause)' },
  { sel: '.sub-card:nth-child(1) ul li:nth-child(6)', hi: 'कोई लॉक-इन अवधि नहीं' },
  { sel: '.sub-card:nth-child(1) a', hi: 'बेसिक प्लान लें' },

  { sel: '.sub-card.popular .sub-popular-badge', hi: 'सबसे लोकप्रिय' },
  { sel: '.sub-card.popular h3', hi: 'परिवार (Family)' },
  { sel: '.sub-card.popular .sub-price span', hi: '/ महीना' },
  { sel: '.sub-card.popular ul li:nth-child(1)', hi: 'रोजाना 2 लीटर ताजा दूध' },
  { sel: '.sub-card.popular ul li:nth-child(2)', hi: 'सुबह 7 बजे से पहले दूध पहुंचाने का प्रयास' },
  { sel: '.sub-card.popular ul li:nth-child(3)', hi: 'सप्ताह में तीन बार 1 किलो दही' },
  { sel: '.sub-card.popular ul li:nth-child(4)', hi: 'सप्ताह में दो बार 500ml छाछ' },
  { sel: '.sub-card.popular ul li:nth-child(5)', hi: 'हर महीने 100gm घी मुफ़्त' },
  { sel: '.sub-card.popular ul li:nth-child(6)', hi: 'प्राथमिकता वितरण + समर्थन' },
  { sel: '.sub-card.popular ul li:nth-child(7)', hi: 'महीने में 10 दिन तक रोकें (Pause)' },
  { sel: '.sub-card.popular a', hi: 'फ़ैमिली प्लान लें' },

  { sel: '.sub-card:nth-child(3) h3', hi: 'प्रीमियम (Premium)' },
  { sel: '.sub-card:nth-child(3) .sub-price span', hi: '/ महीना' },
  { sel: '.sub-card:nth-child(3) ul li:nth-child(1)', hi: 'रोजाना 3 लीटर ताजा दूध' },
  { sel: '.sub-card:nth-child(3) ul li:nth-child(2)', hi: 'सुबह + शाम की डिलीवरी' },
  { sel: '.sub-card:nth-child(3) ul li:nth-child(3)', hi: 'मांग पर असीमित दही' },
  { sel: '.sub-card:nth-child(3) ul li:nth-child(4)', hi: 'रोजाना 1 लीटर छाछ' },
  { sel: '.sub-card:nth-child(3) ul li:nth-child(5)', hi: 'हर महीने 50gm बिलोना घी मुफ़्त' },
  { sel: '.sub-card:nth-child(3) ul li:nth-child(6)', hi: 'समर्पित डिलीवरी व्यक्ति' },
  { sel: '.sub-card:nth-child(3) ul li:nth-child(7)', hi: 'कभी भी रोकें, कोई सीमा नहीं' },
  { sel: '.sub-card:nth-child(3) ul li:nth-child(8)', hi: 'त्योहार विशेष उपहार' },
  { sel: '.sub-card:nth-child(3) a', hi: 'प्रीमियम प्लान लें' },

  { sel: '.sub-policy h3', hi: '📋 सदस्यता नीति' },
  { sel: '.policy-item:nth-child(1) h5', hi: '🔄 रद्दीकरण (Cancel)' },
  { sel: '.policy-item:nth-child(1) p', hi: 'WhatsApp के माध्यम से 48 घंटे के नोटिस के साथ कभी भी रद्द करें। कोई रद्दीकरण शुल्क नहीं।' },
  { sel: '.policy-item:nth-child(2) h5', hi: '⏸️ रोकना (Pause) / छुट्टियाँ' },
  { sel: '.policy-item:nth-child(2) p', hi: 'शहर से बाहर जा रहे हैं? अपनी सदस्यता को प्रति वर्ष 30 दिनों तक के लिए रोकें। बस हमें 24 घंटे पहले WhatsApp करें।' },
  { sel: '.policy-item:nth-child(3) h5', hi: '💰 भुगतान' },
  { sel: '.policy-item:nth-child(3) p', hi: 'UPI या नकद के माध्यम से मासिक अग्रिम भुगतान। WhatsApp पर रसीद साझा की जाएगी।' },
  { sel: '.policy-item:nth-child(4) h5', hi: '🔁 प्लान बदलें' },
  { sel: '.policy-item:nth-child(4) p', hi: 'कभी भी अपनी योजना को अपग्रेड या डाउनग्रेड करें। परिवर्तन अगले बिलिंग चक्र से लागू होते हैं।' },
  { sel: '.policy-item:nth-child(5) h5', hi: '🚚 डिलीवरी मिस होना' },
  { sel: '.policy-item:nth-child(5) p', hi: 'हमारी गलती के कारण डिलीवरी मिस होने की दुर्लभ स्थिति में, हम आपकी अगली डिलीवरी में अतिरिक्त मात्रा के साथ सक्रिय रूप से भरपाई करेंगे।' },
  { sel: '.policy-item:nth-child(6) h5', hi: '✅ गुणवत्ता की गारंटी' },
  { sel: '.policy-item:nth-child(6) p', hi: 'मिल्कीरूट्स में, हम उच्चतम मानकों को सुनिश्चित करते हैं। यदि हमारा उत्पाद आपकी अपेक्षाओं पर खरा नहीं उतरता है, तो समीक्षा और समाधान के लिए हमारी टीम से संपर्क करें।' },

  // Why Us
  { sel: '#why .section-label', hi: 'हमारा वादा' },
  { sel: '#why .section-title', hi: 'मिल्कीरूट्स को क्यों चुनें?' },
  { sel: '#why .section-sub', hi: 'हम सिर्फ एक डेयरी नहीं हैं — हम राजस्थान के दिल से शुद्ध, नैतिक और स्वस्थ भोजन की एक पारिवारिक परंपरा हैं।' },
  { sel: '.why-item:nth-child(1) h4', hi: 'देसी गायें' },
  { sel: '.why-item:nth-child(1) p', hi: 'हमारी गायें शुद्ध भारतीय देसी नस्ल की हैं — बिना किसी कृत्रिम हार्मोनल तत्व या एंटीबायोटिक के प्राकृतिक चारे पर खुले में पाली जाती हैं।' },
  { sel: '.why-item:nth-child(2) h4', hi: 'शून्य मिलावट' },
  { sel: '.why-item:nth-child(2) p', hi: 'कोई पानी नहीं, कोई पाउडर नहीं, कोई रसायन नहीं। आपको वही मिलता है जो सीधे हमारी गाय से आता है।' },
  { sel: '.why-item:nth-child(3) h4', hi: 'दैनिक होम डिलीवरी' },
  { sel: '.why-item:nth-child(3) p', hi: 'ब्यावर भर में ताज़ा दूध वितरित किया जाता है (हम सुबह 7 बजे तक डिलीवरी का पूरा प्रयास करेंगे; दुर्लभ स्थितियों में थोड़ी देरी हो सकती है)।' },
  { sel: '.why-item:nth-child(4) h4', hi: 'नैतिक और मानवीय' },
  { sel: '.why-item:nth-child(4) p', hi: 'हमारी गायों के साथ कभी दुर्व्यवहार नहीं किया जाता। वे आज़ादी से चरती हैं और साफ आश्रयों में रहती हैं। खुश गायें = स्वास्थ्यप्रद दूध।' },
  { sel: '.why-item:nth-child(5) h4', hi: 'ब्यावर में विश्वसनीय' },
  { sel: '.why-item:nth-child(5) p', hi: 'ब्यावर में 300+ परिवार मिल्कीरूट्स से जुड़ चुके हैं। हमारी पुनरावृत्ति ग्राहक दर 95% से ऊपर है।' },
  { sel: '.why-item:nth-child(6) h4', hi: 'आसान WhatsApp ऑर्डर' },
  { sel: '.why-item:nth-child(6) p', hi: 'किसी ऐप की आवश्यकता नहीं। सीधे WhatsApp पर ऑर्डर, संशोधन या रद्दीकरण करें। सरल, तेज़ और व्यक्तिगत।' },

  // Process
  { sel: '#process .section-label', hi: 'खेत से मेज तक' },
  { sel: '#process .section-title', hi: 'हम यह कैसे करते हैं' },
  { sel: '#process .section-sub', hi: 'हमारी प्रक्रिया सरल, प्राचीन और पूरी तरह पारदर्शी है। कोई कारखाना नहीं। कोई शॉर्टकट नहीं। बस शुद्ध डेयरी, सही तरीके से।' },
  { sel: '.step:nth-child(1) h4', hi: 'सुबह 4 बजे दोहन' },
  { sel: '.step:nth-child(1) p', hi: 'हमारे अनुभवी ग्वालों द्वारा साफ हाथों और साफ बर्तनों के साथ स्वच्छ परिस्थितियों में रोजाना सुबह 4 बजे गायों का दूध निकाला जाता है।' },
  { sel: '.step:nth-child(2) h4', hi: 'गुणवत्ता जांच' },
  { sel: '.step:nth-child(2) p', hi: 'हर दिन के दूध की शुद्धता, वसा की मात्रा और ताजगी के लिए जांच की जाती है।' },
  { sel: '.step:nth-child(3) h4', hi: 'होम डिलीवरी' },
  { sel: '.step:nth-child(3) p', hi: 'हम सुबह 7 बजे तक डिलीवरी का पूरा प्रयास करेंगे; प्राकृतिक या जलवायु जैसी दुर्लभ स्थितियों में थोड़ी देरी हो सकती है।' },

  // About
  { sel: '#about .section-label', hi: 'हमारी कहानी' },
  { sel: '#about .section-title', hi: 'हमारी यात्रा और परिचालन मानक' },
  { sel: '#about .section-sub', hi: 'एक अत्यधिक सफल जलवायु-नियंत्रित पॉलीहाउस से लेकर एक प्रीमियम डेयरी फार्म तक — सख्त गुणवत्ता नियंत्रण, स्वच्छता और व्यावसायिक उत्कृष्टता पर निर्मित।' },
  { sel: '.about-text p:nth-child(1)', hi: '<strong>राजस्थान के ब्यावर का भाटी परिवार</strong> हमेशा से मानता रहा है कि सबसे अच्छा भोजन धरती से आता है — जिसे देखभाल के साथ उगाया जाता है, प्यार से पाला जाता है, और ईमानदारी के साथ पहुँचाया जाता है। उनकी यात्रा डेयरी से नहीं, बल्कि मिट्टी से शुरू हुई।' },
  { sel: '.about-text p:nth-child(2)', hi: 'सालों पहले, भाटी परिवार ने अपना <strong>पॉलीहाउस फार्म</strong> स्थापित किया था — एक जलवायु-नियंत्रित ग्रीनहाउस जहाँ वे ब्यावर के लोगों के लिए ताज़ा, जैविक कृषि उत्पादों की एक विस्तृत श्रृंखला उगाते थे। रसीले टमाटरों और पत्तेदार पालक से लेकर बैंगन, शिमला मिर्च और मौसमी साग तक — हर सब्जी <strong>बिना रसायनों या कीटनाशकों के</strong> उगाई जाती थी, जिसमें पीढ़ियों से चली आ रही पारंपरिक खेती की समझ और केवल प्राकृतिक खाद का उपयोग किया जाता था।' },
  { sel: '.about-text p:nth-child(3)', hi: 'पॉलीहाउस ब्यावर में एक भरोसेमंद नाम बन गया। जिन परिवारों ने भाटी फार्म के उत्पादों का स्वाद चखा, वे इस अंतर को जानते थे — वह स्वाद, वह ताज़गी, वह शुद्धता जो केवल उस ज़मीन से आती है जिसे प्यार और सम्मान दिया जाता है।' },
  
  

  { sel: '.about-chapter:nth-child(1) h3', hi: 'हमारा पॉलीहाउस — जहाँ यह सब शुरू हुआ' },
  { sel: '.about-chapter:nth-child(1) p', hi: 'भाटी परिवार का पॉलीहाउस एक आधुनिक ग्रीनहाउस फार्म है जहाँ कृषि उत्पाद एक नियंत्रित, रसायन-मुक्त वातावरण में उगाए जाते हैं।' },
  { sel: '.about-chapter:nth-child(1) ul li:nth-child(1)', hi: '100% जैविक — कोई कीटनाशक नहीं, कोई रसायन नहीं' },
  { sel: '.about-chapter:nth-child(1) ul li:nth-child(2)', hi: 'केवल प्राकृतिक खाद और पारंपरिक उर्वरक' },
  { sel: '.about-chapter:nth-child(1) ul li:nth-child(3)', hi: 'मौसमी कृषि उत्पादों की साल भर उपलब्धता' },
  { sel: '.about-chapter:nth-child(1) ul li:nth-child(4)', hi: 'टमाटर, पालक, बैंगन, शिमला मिर्च, मेथी, धनिया और बहुत कुछ' },
  { sel: '.about-chapter:nth-child(1) ul li:nth-child(5)', hi: 'ब्यावर में परिवारों को सीधे आपूर्ति' },

  { sel: '.about-chapter:nth-child(2) h3', hi: 'हमारी देसी गायें — मिल्कीरूट्स का दिल' },
  { sel: '.about-chapter:nth-child(2) p', hi: 'हमने शुद्ध <strong>देसी भारतीय गायों</strong> को चुना — जो भारत की सबसे बेशकीमती स्वदेशी नस्ल है। हमारी गायें स्वाभाविक रूप से <strong>A2 बीटा-कैसिइन दूध</strong> का उत्पादन करती हैं, जो पचने में बहुत आसान है।' },
  { sel: '.about-chapter:nth-child(2) ul li:nth-child(1)', hi: 'शुद्ध देसी भारतीय नस्ल' },
  { sel: '.about-chapter:nth-child(2) ul li:nth-child(2)', hi: 'प्राकृतिक हरे चारे पर खुले में पाली गईं' },
  { sel: '.about-chapter:nth-child(2) ul li:nth-child(3)', hi: 'कोई हार्मोनल तत्व या एंटीबायोटिक नहीं — कभी नहीं' },
  { sel: '.about-chapter:nth-child(2) ul li:nth-child(4)', hi: 'अनुभवी ग्वालों द्वारा रोजाना सुबह 4 बजे हाथ से दोहन' },
  { sel: '.about-chapter:nth-child(2) ul li:nth-child(5)', hi: 'खुश गायें, स्वस्थ बछड़े, शुद्ध दूध — हमेशा' },

  { sel: '.about-chapter:nth-child(3) h3', hi: 'दूध की शुद्धता — हमारा पूर्ण वादा' },
  { sel: '.about-chapter:nth-child(3) p', hi: 'मिल्कीरूट्स में, दूध की शुद्धता कोई मार्केटिंग दावा नहीं है — यह जीवन का एक तरीका है। दूध का हर बैच हमारे खेत से निकलने से पहले एक सख्त गुणवत्ता जांच से गुजरता है।' },
  { sel: '.about-chapter:nth-child(3) ul li:nth-child(1)', hi: 'वसा सामग्री: प्राकृतिक 4.0–4.5% — कभी पतला नहीं' },
  { sel: '.about-chapter:nth-child(3) ul li:nth-child(2)', hi: 'शून्य पानी मिलाने की मिलावट — कभी नहीं' },
  { sel: '.about-chapter:nth-child(3) ul li:nth-child(3)', hi: 'कोई दूध पाउडर नहीं, कोई प्रिजर्वेटिव नहीं' },
  { sel: '.about-chapter:nth-child(3) ul li:nth-child(4)', hi: 'कोई सिंथेटिक हार्मोन या ऑक्सीटोसिन इंजेक्शन नहीं' },
  { sel: '.about-chapter:nth-child(3) ul li:nth-child(5)', hi: 'दूध निकालने के 2 घंटे के भीतर ताजा — जितनी जल्दी हो सके वितरित किया जाता है।' },

  { sel: '.about-chapter:nth-child(4) h3', hi: 'हमारा खेत — एक जीवंत पारिस्थितिकी तंत्र' },
  { sel: '.about-chapter:nth-child(4) p', hi: 'मिल्कीरूट्स सिर्फ एक डेयरी नहीं है — यह एक संपूर्ण फार्म पारिस्थितिकी तंत्र है जहां गाय, बछड़े, कृषि उत्पाद और पृथ्वी एक साथ पनपते हैं।' },
  { sel: '.about-chapter:nth-child(4) ul li:nth-child(1)', hi: 'एकीकृत खेत — डेयरी + पॉलीहाउस एक साथ काम कर रहे हैं' },
  { sel: '.about-chapter:nth-child(4) ul li:nth-child(2)', hi: 'कृषि उत्पादों के लिए जैविक उर्वरक के रूप में उपयोग किया जाने वाला गाय का गोबर' },
  { sel: '.about-chapter:nth-child(4) ul li:nth-child(3)', hi: 'प्राकृतिक चारा — बाजरा, ज्वार, ताजी हरी घास' },
  { sel: '.about-chapter:nth-child(4) ul li:nth-child(4)', hi: 'स्वच्छ, विशाल गौशाला — कल्याण पहले' },
  { sel: '.about-chapter:nth-child(4) ul li:nth-child(5)', hi: 'ब्यावर, राजस्थान के पास उपजाऊ बेल्ट में स्थित' },

  { sel: '.about-highlight h3', hi: 'मिल्कीरूट्स नंबरों में' },
  { sel: '.ah-item:nth-child(1) p', hi: 'जैविक डेयरी उत्पाद' },
  { sel: '.ah-item:nth-child(2) p', hi: 'शुद्ध A2 देसी गाय का दूध' },
  { sel: '.ah-item:nth-child(3) p', hi: 'इस्तेमाल किए गए रसायन' },
  { sel: '.ah-item:nth-child(4) p', hi: 'सेवा प्राप्त परिवार' },
  { sel: '.ah-item:nth-child(5) p', hi: 'दोहन सुबह 4 बजे शुरू होता है' },
  { sel: '.ah-item:nth-child(6) p', hi: 'विश्वास और शुद्धता' },

  // Team
  { sel: '#team .section-label', hi: 'मिल्कीरूट्स के पीछे के लोग' },
  { sel: '#team .section-title', hi: 'नेतृत्व और संचालन' },
  { sel: '#team .section-sub', hi: 'हमारी टीम निर्बाध आपूर्ति श्रृंखला प्रबंधन, कृषि स्वच्छता और असाधारण ग्राहक सेवा के लिए प्रतिबद्ध है।' },
  { sel: '.team-card:nth-child(1) .team-badge', hi: '👑 निदेशक (Director)' },
  { sel: '.team-card:nth-child(1) h3', hi: 'अर्जुन सिंह भाटी' },
  { sel: '.team-card:nth-child(1) p', hi: 'समग्र व्यापार रणनीति, कृषि संचालन का संचालन करते हैं और हमारे असंबद्ध गुणवत्ता मानकों को लागू करते हैं।' },
  { sel: '.team-card:nth-child(2) .team-badge', hi: '🤝 संचालन प्रमुख' },
  { sel: '.team-card:nth-child(2) h3', hi: 'लक्ष्मण सिंह भाटी' },
  { sel: '.team-card:nth-child(2) p', hi: 'निर्बाध आपूर्ति श्रृंखला प्रबंधन, दैनिक रसद और सख्त सुबह की डिलीवरी समय-सीमा सुनिश्चित करते हैं।' },
  { sel: '.team-card:nth-child(3) .team-badge', hi: '🎓 रणनीतिक सलाहकार' },
  { sel: '.team-card:nth-child(3) h3', hi: 'डी एस भाटी' },
  { sel: '.team-card:nth-child(3) p', hi: 'ग्राहक संबंधों, स्केलेबल विकास रणनीतियों का मार्गदर्शन करते हैं और दीर्घकालिक व्यावसायिक उत्कृष्टता सुनिश्चित करते हैं।' },

  // Testimonials
  { sel: '#testimonials .section-label', hi: 'ग्राहक का प्यार' },
  { sel: '#testimonials .section-title', hi: 'ब्यावर क्या कहता है' },
  { sel: '#testimonials .section-sub', hi: 'ब्यावर में 300+ परिवार अपनी दैनिक डेयरी आवश्यकताओं के लिए हम पर भरोसा करते हैं।' },

  // Feedback
  { sel: '#feedback-column .section-label', hi: 'आपकी आवाज़' },
  { sel: '#feedback-column .section-title', hi: 'अपना अनुभव साझा करें' },
  { sel: '#feedback-column .section-sub', hi: 'अपनी ईमानदार प्रतिक्रिया साझा करके हमें बढ़ने में मदद करें।' },
  { sel: '.feedback-form label:nth-of-type(1)', hi: 'आपका नाम' },
  { sel: '.feedback-form label:nth-of-type(2)', hi: 'स्थान' },
  { sel: '.feedback-form label:nth-of-type(3)', hi: 'रेटिंग' },
  { sel: '.feedback-form label:nth-of-type(4)', hi: 'आपकी समीक्षा' },
  { sel: '#revName', attr: 'placeholder', hi: 'उदा., राजेश कुमार' },
  { sel: '#revLoc', attr: 'placeholder', hi: 'उदा., रानी बाज़ार' },
  { sel: '#revMsg', attr: 'placeholder', hi: 'दूध कैसा था? हमारी डिलीवरी कैसी थी?' },
  { sel: '#revRating option[value="5"]', hi: '★★★★★ (उत्कृष्ट)' },
  { sel: '#revRating option[value="4"]', hi: '★★★★☆ (बहुत अच्छा)' },
  { sel: '#revRating option[value="3"]', hi: '★★★☆☆ (अच्छा)' },
  { sel: '#revRating option[value="2"]', hi: '★★☆☆☆ (ठीक)' },
  { sel: '#revRating option[value="1"]', hi: '★☆☆☆☆ (खराब)' },
  { sel: '.feedback-form button', hi: 'अपने विचार प्रस्तुत करें' },

  // Health
  { sel: '#health .section-label', hi: 'शुद्ध A2 दूध क्यों?' },
  { sel: '#health .section-title', hi: 'हमारे दूध के स्वास्थ्य लाभ' },
  { sel: '#health .section-sub', hi: 'हमारी शुद्ध देसी गाय का दूध न केवल स्वादिष्ट है — बल्कि यह वैज्ञानिक रूप से आपके शरीर के लिए बेहतर है।' },
  { sel: '.compare-table th:nth-child(1)', hi: 'विशेषता' },
  { sel: '.compare-table th:nth-child(2)', hi: '🐄 मिल्कीरूट्स<br><small style="font-weight:400;font-size:.72rem">शुद्ध देसी दूध</small>' },
  { sel: '.compare-table tr:nth-child(1) td:nth-child(1)', hi: 'A2 बीटा-कैसिइन प्रोटीन' },
  { sel: '.compare-table tr:nth-child(2) td:nth-child(1)', hi: 'शून्य पानी मिलावट' },
  { sel: '.compare-table tr:nth-child(3) td:nth-child(1)', hi: 'कोई प्रिजर्वेटिव नहीं' },
  { sel: '.compare-table tr:nth-child(4) td:nth-child(1)', hi: 'कोई सिंथेटिक हार्मोन नहीं' },
  { sel: '.compare-table tr:nth-child(5) td:nth-child(1)', hi: 'प्राकृतिक वसा (4.0–4.5%)' },
  { sel: '.compare-table tr:nth-child(6) td:nth-child(1)', hi: 'उसी दिन ताजी डिलीवरी' },
  { sel: '.compare-table tr:nth-child(7) td:nth-child(1)', hi: 'पचने में आसान' },
  { sel: '.compare-table tr:nth-child(8) td:nth-child(1)', hi: 'देसी गायों से प्राप्त' },
  { sel: '.hp-item:nth-child(1) h5', hi: '💪 मजबूत प्रतिरक्षा' },
  { sel: '.hp-item:nth-child(1) p', hi: 'शुद्ध देसी गाय का दूध विटामिन A, D, E और K से भरपूर होता है — जो पूरे परिवार की मजबूत प्रतिरक्षा प्रणाली के लिए आवश्यक है।' },
  { sel: '.hp-item:nth-child(2) h5', hi: '🧠 बेहतर मस्तिष्क स्वास्थ्य' },
  { sel: '.hp-item:nth-child(2) p', hi: 'हमारे दूध में मौजूद ओमेगा-3 फैटी एसिड बच्चों में मस्तिष्क के विकास और वयस्कों में संज्ञानात्मक स्वास्थ्य का समर्थन करते हैं।' },
  { sel: '.hp-item:nth-child(3) h5', hi: '🦴 मजबूत हड्डियां' },
  { sel: '.hp-item:nth-child(3) p', hi: 'सही अनुपात में प्राकृतिक कैल्शियम और फास्फोरस — जो आपकी हड्डियों को जीवन भर की मजबूती के लिए चाहिए।' },
  { sel: '.hp-item:nth-child(4) h5', hi: '🌿 पचने में आसान' },
  { sel: '.hp-item:nth-child(4) p', hi: 'A2 प्रोटीन पेट के लिए हल्का होता है। कई लोग जिन्हें नियमित दूध से परेशानी होती है, वे हमारे दूध को आसानी से पचा लेते हैं।' },
  { sel: '.hp-item:nth-child(5) h5', hi: '👶 बच्चों के लिए सुरक्षित' },
  { sel: '.hp-item:nth-child(5) p', hi: 'कोई हार्मोनल तत्व नहीं, कोई रसायन नहीं। हमारा दूध हर दिन बढ़ते बच्चों के लिए सबसे सुरक्षित, सबसे प्राकृतिक विकल्प है।' },
  { sel: '.hp-item:nth-child(6) h5', hi: '🔥 ऊर्जा बढ़ाता है' },
  { sel: '.hp-item:nth-child(6) p', hi: 'फुल-फैट प्राकृतिक दूध पूरे दिन निरंतर ऊर्जा प्रदान करता है — कोई शुगर स्पाइक नहीं, बस शुद्ध पोषण।' },

  // FAQ
  { sel: '#faq .section-label', hi: 'कोई सवाल है?' },
  { sel: '#faq .section-title', hi: 'अक्सर पूछे जाने वाले प्रश्न' },
  { sel: '#faq .section-sub', hi: 'मिल्कीरूट्स के बारे में आप जो कुछ भी जानना चाहते हैं — ईमानदारी से उत्तर दिया गया।' },
  { sel: '.faq-col:nth-child(1) .faq-item:nth-child(1) .faq-q', hi: 'क्या आपका दूध वास्तव में शुद्ध है? मैं इस पर कैसे भरोसा कर सकता हूँ?' },
  { sel: '.faq-col:nth-child(1) .faq-item:nth-child(1) .faq-a', hi: 'हां — 100%। हमारी गायें ब्यावर में हमारे अपने खेत में पाली जाती हैं। दूध निकालने का काम सुबह 4 बजे शुरू होता है, वसा और शुद्धता की जांच की जाती है, और आपको डिलीवर किया जाता है (हम सुबह 7 बजे तक डिलीवरी का पूरा प्रयास करेंगे)। पानी मिलाने या मिलावट के लिए हमारी शून्य सहनशीलता है। आप कभी भी हमारे खेत आ सकते हैं — हम आपका स्वागत करते हैं!' },
  { sel: '.faq-col:nth-child(1) .faq-item:nth-child(2) .faq-q', hi: 'क्या मैं सदस्यता लेने से पहले आज़मा सकता हूँ?' },
  { sel: '.faq-col:nth-child(1) .faq-item:nth-child(2) .faq-a', hi: 'बिल्कुल! हम किसी भी उत्पाद — दूध, दही, छाछ या घी (50gm) का 2-दिन का निःशुल्क ट्रायल (2 लीटर) प्रदान करते हैं। कोई भुगतान आवश्यक नहीं है। बस हमें WhatsApp करें और हम 24 घंटे के भीतर आपका ट्रायल डिलीवर कर देंगे।' },
  { sel: '.faq-col:nth-child(1) .faq-item:nth-child(3) .faq-q', hi: 'आप कौन से भुगतान के तरीके स्वीकार करते हैं?' },
  { sel: '.faq-col:nth-child(1) .faq-item:nth-child(3) .faq-a', hi: 'हम कैश, GPay, PhonePe और Paytm स्वीकार करते हैं। मासिक सदस्यता भुगतान अग्रिम में किया जाता है। हम हर भुगतान के तुरंत बाद WhatsApp रसीद भेजते हैं।' },
  { sel: '.faq-col:nth-child(1) .faq-item:nth-child(4) .faq-q', hi: 'आपका घी बाज़ार के घी से महँगा क्यों है?' },
  { sel: '.faq-col:nth-child(1) .faq-item:nth-child(4) .faq-a', hi: 'हमारा बिलोना घी पारंपरिक तरीके से बनाया जाता है — सिर्फ 1 किलो घी बनाने में 25 लीटर शुद्ध देसी गाय का दूध लगता है। इसे हाथ से मथा जाता है, लकड़ी की आग पर धीमी आंच पर पकाया जाता है और इसमें कोई एडिटिव नहीं होता। बाज़ार का घी शॉर्टकट का उपयोग करके मलाई या भैंस के दूध से बनाया जाता है। आप असली, शुद्ध, प्राचीन विधि वाले घी के लिए भुगतान कर रहे हैं।' },
  { sel: '.faq-col:nth-child(2) .faq-item:nth-child(1) .faq-q', hi: 'मैं ऑर्डर कैसे दे सकता हूँ या सदस्यता कैसे शुरू कर सकता हूँ?' },
  { sel: '.faq-col:nth-child(2) .faq-item:nth-child(1) .faq-a', hi: 'बस हमें अपना नाम, पता और आपको क्या चाहिए, इसके साथ +91 89495 53581 पर WhatsApp करें। या इस पेज पर ऑर्डर फॉर्म का उपयोग करें। हमारी टीम आपके ऑर्डर की पुष्टि करने के लिए जल्द से जल्द आपसे संपर्क करेगी, और हम अगली सुबह डिलीवरी शुरू कर देंगे।' },
  { sel: '.faq-col:nth-child(2) .faq-item:nth-child(2) .faq-q', hi: 'क्या मैं यात्रा करते समय अपनी सदस्यता को रोक सकता हूँ?' },
  { sel: '.faq-col:nth-child(2) .faq-item:nth-child(2) .faq-a', hi: 'हाँ! बस हमें 24 घंटे पहले WhatsApp करें और हम आपकी डिलीवरी रोक देंगे। आप किसी भी योजना पर प्रति वर्ष 30 दिनों तक रोक सकते हैं। ठहराव अवधि के दौरान कोई शुल्क नहीं।' },
  { sel: '.faq-col:nth-child(2) .faq-item:nth-child(3) .faq-q', hi: 'क्या आप ब्यावर शहर के बाहर डिलीवरी करते हैं?' },
  { sel: '.faq-col:nth-child(2) .faq-item:nth-child(3) .faq-a', hi: 'संपूर्ण ब्यावर नगर परिषद क्षेत्र में मुफ्त होम डिलीवरी उपलब्ध है।' },

  { sel: '.offer-strip h3', hi: '🎁 विशेष लॉयल्टी ऑफर' },
  { sel: '.offer-strip p', hi: 'आज ही मिल्कीरूट्स से जुड़ें और हमारे वफादार ग्राहकों के लिए इन विशेष लाभों का आनंद लें' },
  { sel: '.offer-strip .offer-badge:nth-child(1)', hi: '🥛 20L दूध खरीदें और 1L मुफ़्त पाएं!' },
  { sel: '.offer-strip .offer-badge:nth-child(2)', hi: '🎉 पहले महीने 10% की छूट' },
  { sel: '.offer-strip .offer-badge:nth-child(3)', hi: '🏠 फ्री होम डिलीवरी' },
  { sel: '.offer-strip .offer-badge:nth-child(4)', hi: '🎁 फेस्टिवल स्पेशल गिफ्ट' },
  { sel: '.offer-strip .btn-white', hi: '💬 ऑफर क्लेम करने के लिए WhatsApp करें' },

  // Order
  { sel: '#order .section-label', hi: 'अपना ऑर्डर दें' },
  { sel: '#order .section-title', hi: 'आज ही ताज़ा डेयरी पाएं' },
  { sel: '#order .section-sub', hi: 'हमें कॉल करें, WhatsApp करें या फॉर्म भरें — और ताज़ा डेयरी कल सुबह आपके दरवाजे पर होगी।' },
  { sel: '.contact-item:nth-child(1) h5', hi: 'कॉल / WhatsApp' },
  { sel: '.contact-item:nth-child(1) p', hi: '+91 89495 53581<br>+91 8209756996<br><small style="opacity:.6">रोजाना सुबह 6 बजे से रात 9 बजे तक उपलब्ध</small>' },
  { sel: '.contact-item:nth-child(2) h5', hi: 'हमारा डेयरी फार्म' },
  { sel: '.contact-item:nth-child(2) p', hi: 'मिल्कीरूट्स,<br>ब्यावर – 305 901, राजस्थान' },
  { sel: '.contact-item:nth-child(3) h5', hi: 'डिलीवरी का समय' },
  { sel: '.contact-item:nth-child(3) p', hi: 'सुबह: हम सुबह 7 बजे तक डिलीवरी का पूरा प्रयास करेंगे; दुर्लभ स्थितियों में थोड़ी देरी हो सकती है।<br>शाम का दूध: शाम 5:30 से 7:00 बजे तक' },
  { sel: '.contact-item:nth-child(4) h5', hi: 'डिलीवरी क्षेत्र' },
  { sel: '.contact-item:nth-child(4) p', hi: 'संपूर्ण ब्यावर नगर परिषद क्षेत्र में मुफ्त होम डिलीवरी उपलब्ध है।' },
  { sel: '.contact-item:nth-child(5) h5', hi: 'भुगतान के तरीके' },
  { sel: '.contact-item:nth-child(5) p', hi: 'नकद · GPay · PhonePe · Paytm' },

  { sel: '#ord-name', attr: 'placeholder', hi: 'आपका पूरा नाम' },
  { sel: '#ord-phone', attr: 'placeholder', hi: 'आपका मोबाइल नंबर' },
  { sel: '#ord-addr', attr: 'placeholder', hi: 'ब्यावर में डिलीवरी का पता' },
  { sel: '#ord-msg', attr: 'placeholder', hi: 'कोई विशेष अनुरोध, समय प्राथमिकता या संदेश…' },
  
  { sel: '#ord-product option:nth-child(1)', hi: 'उत्पाद चुनें' },
  { sel: '#ord-product option:nth-child(2)', hi: 'ताजा गाय का दूध – ₹70/लीटर' },
  { sel: '#ord-product option:nth-child(3)', hi: 'घर का दही – ₹80/kg' },
  { sel: '#ord-product option:nth-child(4)', hi: 'ताजा छाछ – ₹30/500ml' },
  { sel: '#ord-product option:nth-child(5)', hi: 'शुद्ध बिलोना घी – ₹900/500g' },
  { sel: '#ord-product option:nth-child(6)', hi: '🎁 मुफ़्त ट्रायल – 2 लीटर (पहली बार)' },
  { sel: '#ord-product option:nth-child(7)', hi: 'बेसिक सदस्यता – ₹2,100/महीना' },
  { sel: '#ord-product option:nth-child(8)', hi: 'फैमिली सदस्यता – ₹3,800/महीना' },
  { sel: '#ord-product option:nth-child(9)', hi: 'प्रीमियम सदस्यता – ₹6,500/महीना' },

  { sel: '#ord-qty option:nth-child(1)', hi: 'मात्रा / योजना' },
  { sel: '#ord-qty option:nth-child(2)', hi: '300ml – एक बार' },
  { sel: '#ord-qty option:nth-child(3)', hi: '1 लीटर – एक बार' },
  { sel: '#ord-qty option:nth-child(4)', hi: '2 लीटर – एक बार' },
  { sel: '#ord-qty option:nth-child(5)', hi: '2 लीटर – मुफ्त ट्रायल' },
  { sel: '#ord-qty option:nth-child(6)', hi: '1 लीटर – दैनिक सदस्यता' },
  { sel: '#ord-qty option:nth-child(7)', hi: '2 लीटर – दैनिक सदस्यता' },
  { sel: '#ord-qty option:nth-child(8)', hi: '3 लीटर – दैनिक सदस्यता' },

  { sel: '.order-form button', hi: '🐄 WhatsApp पर ऑर्डर दें' },

  // Footer
  { sel: 'footer strong', hi: '🐄 मिल्कीरूट्स' },
  { sel: 'footer span', hi: 'ब्यावर में ❤️ के साथ निर्मित · © 2025 मिल्कीरूट्स। सर्वाधिकार सुरक्षित।' }
];

let currentLang = localStorage.getItem('milkyRootsLang') || 'en';
let englishCacheCaptured = false;

document.addEventListener('DOMContentLoaded', () => {
  captureEnglish();
  updateLanguage(currentLang);
});

function captureEnglish() {
  if (englishCacheCaptured) return;
  dict.forEach(item => {
    const el = document.querySelector(item.sel);
    if (el) {
      if (item.attr === 'placeholder') {
        item.en = el.getAttribute('placeholder') || '';
      } else {
        item.en = el.innerHTML;
      }
    }
  });
  englishCacheCaptured = true;
}

window.updateLanguage = function(lang) {
  currentLang = lang;
  
  if (!englishCacheCaptured && lang === 'hi') {
      captureEnglish();
  }

  dict.forEach(item => {
    const el = document.querySelector(item.sel);
    if (el && item[lang] !== undefined) {
      if (item.attr === 'placeholder') {
        el.setAttribute('placeholder', item[lang]);
      } else {
        el.innerHTML = item[lang];
      }
    }
  });
  
  document.documentElement.lang = lang;
  
  const langToggle = document.getElementById('langToggle');
  const langToggleMobile = document.getElementById('langToggleMobile');
  if (langToggle) langToggle.textContent = lang === 'en' ? 'हिन्दी / EN' : 'English / HI';
  if (langToggleMobile) langToggleMobile.textContent = lang === 'en' ? 'HI / EN' : 'HI / EN'; // Always show dual for compactness in header
}

window.toggleLanguage = function() {
  const newLang = currentLang === 'en' ? 'hi' : 'en';
  localStorage.setItem('milkyRootsLang', newLang);
  updateLanguage(newLang);
}

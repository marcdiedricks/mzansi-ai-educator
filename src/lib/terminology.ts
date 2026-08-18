export interface MultilingualTerm {
  id: string;
  term: string;
  category: 'Fundamentals' | 'Data & ML' | 'Ethics & Society' | 'Generative AI';
  english: {
    definition: string;
    example: string;
  };
  isizulu: {
    term: string;
    definition: string;
    example: string;
  };
  sesotho: {
    term: string;
    definition: string;
    example: string;
  };
  afrikaans: {
    term: string;
    definition: string;
    example: string;
  };
}

export const TERMINOLOGY_DATA: MultilingualTerm[] = [
  {
    id: 'algorithm',
    term: 'Algorithm',
    category: 'Fundamentals',
    english: {
      definition: 'A step-by-step set of rules or instructions given to a computer to solve a specific problem or perform a task.',
      example: 'A recipe for baking vetkoek or step-by-step directions to find a taxi rank is like an algorithm.',
    },
    isizulu: {
      term: 'I-Aligorithimu (Uhlelo Lweziyalezo)',
      definition: 'Uhlu lweziqondiso nezinyathelo ezilandelanayo ezinikezwa ikhompyutha ukuze ixazulule inkinga ethile.',
      example: 'Njengendlela yokupheka amagwinya isinyathelo ngesinyathelo.',
    },
    sesotho: {
      term: 'Aligoriamo (Taelo ya Mehato)',
      definition: 'Lenaneo la ditaelo tse latelanang le fuwang khomphutha ho rarolla bothata bo itseng.',
      example: 'Jwaloka recipe ya ho baka magwinya mohato ka mohato.',
    },
    afrikaans: {
      term: 'Algoritme',
      definition: "'n Stap-vir-stap stel reëls of instruksies wat aan 'n rekenaar gegee word om 'n spesifieke probleem op te los.",
      example: "Soos 'n resep om vetkoek te bak of aanwysings om by die taxirank te kom.",
    },
  },
  {
    id: 'artificial-intelligence',
    term: 'Artificial Intelligence (AI)',
    category: 'Fundamentals',
    english: {
      definition: 'Computer systems capable of performing tasks that typically require human intelligence, such as pattern recognition, language processing, and decision making.',
      example: 'Predictive typing on your smartphone or automatic photo tagging.',
    },
    isizulu: {
      term: 'Ubunhloli Bokwenziwa (AI)',
      definition: 'Amasistimu ekhompyutha akwazi ukwenza imisebenzi evamise ukudinga ukuhlakanipha komuntu, njengokubona izithombe noma ukuqonda ulimi.',
      example: 'Iselula yakho ekuqagelayo lokho ofuna ukukubhala kumilayezo.',
    },
    sesotho: {
      term: 'Bohlale ba Maiketsetso (AI)',
      definition: 'Sistimi ya khomphutha e kgonang ho etsa mesebetsi e neng e hloka kelello ya motho, jwaloka ho lemoha dipaterone le dipuo.',
      example: 'Founu ya hao e lemohang mantswe a hao ha o bua.',
    },
    afrikaans: {
      term: 'Kunsmatige Intelligensie (KI)',
      definition: 'Rekenaerstelsels wat take kan verrig wat gewoonlik menslike denke vereis, soos patroonherkenning, taalverwerking en besluitneming.',
      example: 'Voorspellende teks op jou foon wat raai watter woord jy volgende gaan tik.',
    },
  },
  {
    id: 'machine-learning',
    term: 'Machine Learning (ML)',
    category: 'Data & ML',
    english: {
      definition: 'A subset of AI where computers learn from data and improve their performance over time without being explicitly programmed for every scenario.',
      example: 'A music app learning your favorite Amapiano songs based on what you replay most often.',
    },
    isizulu: {
      term: 'Ukufunda Kwekhompyutha (ML)',
      definition: 'Indlela lapho ikhompyutha ifunda khona ngokuhlaziya idatha ngaphandle kokuhlelwa yonke into ngqo.',
      example: 'Uhlelo lomculo olubona izingoma ze-Amapiano ozithandayo luphinde lukuncomele ezifanayo.',
    },
    sesotho: {
      term: 'Thuto ya Motjhini (ML)',
      definition: 'Mokgwa oo khomphutha e ithutang ka datha le dipaterone ntle le ho laelwa ntho e nngwe le e nngwe ka ho otloloha.',
      example: 'App ya mmino e tsebang dipina tseo o di ratang ka ho sheba tseo o di mamelang haholo.',
    },
    afrikaans: {
      term: 'Masjienleer (ML)',
      definition: "'n Deel van KI waar rekenaars uit data leer en outomaties verbeter sonder dat elke reël vooraf geprogrammeer is.",
      example: "'n Musiektoepassing wat jou gunstelingliedjies aanleer op grond van wat jy gereeld luister.",
    },
  },
  {
    id: 'training-data',
    term: 'Training Data',
    category: 'Data & ML',
    english: {
      definition: 'The vast collection of text, images, or audio used to teach an AI model patterns before it is deployed.',
      example: 'Millions of photos of South African animals used to train an image identifier.',
    },
    isizulu: {
      term: 'Idatha Yokufundisa',
      definition: 'Iqoqo elikhulu lolwazi, imibhalo nezithombe ezisetshenziselwa ukufundisa uhlelo lwe-AI.',
      example: 'Izinkulungwane zezithombe zezilwane zaseNingizimu Afrika ezifundisa ikhompyutha ukubona ibhubesi.',
    },
    sesotho: {
      term: 'Datha ya ho Rusa',
      definition: 'Pokello e kgolo ya ditshwantsho, mantswe kapa dintlha tse sebediswang ho ruta sistimi ya AI.',
      example: 'Ditshwantsho tse ngata tsa diphoofolo ho ruta khomphutha ho lemoha tau kapa thutlwa.',
    },
    afrikaans: {
      term: 'Opleidingsdata',
      definition: 'Die groot versameling voorbeelde (teks, beelde, klank) wat gebruik word om die KI-model patrone te leer.',
      example: 'Duisende foto’s van Suid-Afrikaanse wildsbokke wat gebruik word om die rekenaar te leer hoe hulle lyk.',
    },
  },
  {
    id: 'bias',
    term: 'Algorithmic Bias',
    category: 'Ethics & Society',
    english: {
      definition: 'Systematic and unfair discrimination or inaccuracies in AI predictions, often caused by incomplete or biased training data.',
      example: 'A speech recognition system that only understands English with a US accent and fails with isiXhosa or Afrikaans accents.',
    },
    isizulu: {
      term: 'Uchembeleko Lwe-AI (Bias)',
      definition: 'Ukungalingani noma ubandlululo olungenhloso oluvela ku-AI ngenxa yokuthi idatha yokufunda yayingenabo bonke abantu.',
      example: 'Uhlelo lokubona amazwi olwehluleka ukuqonda abantu abakhuluma isiZulu noma isiXhosa.',
    },
    sesotho: {
      term: 'Kgethollo ya Sistimi (Bias)',
      definition: 'Ho se leka-lekane kapa ho se sebetse hantle ha AI ho batho ba itseng ka lebaka la datha e sa fellang.',
      example: 'Ha AI e sa utlwisise puo ya Sesotho kapa ya Sepedi hantle hobane ha e a rutwa ka tsona.',
    },
    afrikaans: {
      term: 'Algoritmiese Vooroordeel (Bias)',
      definition: 'Onregverdige sydigheid of foute in KI-uitsprake wat ontstaan omdat die opleidingsdata eensydig was.',
      example: "Spraakherkenning wat Amerikaanse aksente perfek verstaan maar sukkel met Suid-Afrikaanse aksente.",
    },
  },
  {
    id: 'ubuntu-tech',
    term: 'Ubuntu in Technology',
    category: 'Ethics & Society',
    english: {
      definition: 'Applying the African philosophy of "I am because we are" to ensure technology serves community well-being, dignity, and collective upliftment.',
      example: 'Designing AI healthcare tools accessible in rural clinics regardless of internet bandwidth.',
    },
    isizulu: {
      term: 'Ubuntu Kobuchwepheshe',
      definition: 'Umgomo wokuthi "umuntu ngumuntu ngabantu" usetshenziswa ekuqambeni ubuchwepheshe obusiza umphakathi wonke ngenhlonipho.',
      example: 'Ukwakha amathuluzi ezempilo e-AI asebenza ngisho nasezindaweni zasemakhaya ezingenayo i-inthanethi esheshayo.',
    },
    sesotho: {
      term: 'Botho ho tsa Thekenoloji',
      definition: 'Maikutlo a "motho ke motho ka batho" a tataisang thekenoloji ho tswela setjhaba molemo le ho hlompha seriti sa batho.',
      example: 'Ho etsa thekenoloji e thusang ditliliniking tsa mahaeng ntle le ho tura.',
    },
    afrikaans: {
      term: 'Ubuntu in Tegnologie',
      definition: "Die toepassing van die filosofie 'Ek is omdat ons is' om te verseker dat tegnologie die hele gemeenskap dien en menswaardigheid bevorder.",
      example: 'Om KI-stelsels te bou wat selfs in landelike gebiede sonder hoëspoedinternet praktiese waarde bied.',
    },
  },
  {
    id: 'generative-ai',
    term: 'Generative AI (GenAI)',
    category: 'Generative AI',
    english: {
      definition: 'AI models that create new content such as text, images, or code based on patterns learned from existing data.',
      example: 'Typing a prompt asking for a poem about Table Mountain and having the AI write a new poem.',
    },
    isizulu: {
      term: 'I-AI Ekhiqizayo (GenAI)',
      definition: 'I-AI ekwazi ukubhala imibhalo emisha, ukudweba izithombe noma ukwenza umculo ngokubheka amaphethini awafundile.',
      example: 'Ukucela uhlelo lubhale inkondlo entsha ngeTheku noma ngezintaba zoKhahlamba.',
    },
    sesotho: {
      term: 'AI e Hlahisang (GenAI)',
      definition: 'AI e kgonang ho hlahisa ditaba tse ntjha, ditshwantsho kapa mmino ho tswa ho seo e ithutileng sona.',
      example: 'Ho kopa AI ho ngola pale ka Thaba Bosiu mme e o ngolle yona ka metsotsoana.',
    },
    afrikaans: {
      term: 'Gegenereerde KI (GenAI)',
      definition: 'KI-stelsels wat nuwe inhoud (teks, kuns, musiek) kan skep op grond van patrone wat dit aangeleer het.',
      example: "Om 'n versoek in te tik om 'n storie oor die Karoo te skryf en dadelik 'n nuwe vertelling te kry.",
    },
  },
];

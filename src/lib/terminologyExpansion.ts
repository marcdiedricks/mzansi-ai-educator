export interface SourceBackedTerm {
  id: string;
  term: string;
  category: 'Fundamentals' | 'Data & ML' | 'Ethics & Society' | 'Generative AI';
  english: { definition: string; example: string };
  afrikaans: { term: string; definition: string };
  isixhosa: { term: string; definition: string };
  isizulu: { term: string; definition: string };
  source: 'Google + PanSALB AI Terminologies';
  sourceLicense: 'CC BY-SA 4.0' | 'CC BY 4.0';
}

export const SOURCE_BACKED_TERMS: SourceBackedTerm[] = [
  {
    id: 'accuracy',
    term: 'Accuracy',
    category: 'Data & ML',
    english: {
      definition: 'The proportion of all model outputs or classifications that are correct.',
      example: 'If an AI system correctly sorts 90 out of 100 messages into the right category, its accuracy on that test is 90%.',
    },
    afrikaans: { term: 'akkuraatheid', definition: 'Dit is die gedeelte van alle klassifikasies wat korrek was, ongeag of dit positief of negatief was.' },
    isixhosa: { term: 'Ukuchaneka', definition: 'Ngumlinganiselo wazo zonke iindidi zokuhlela ebezichanekile, nokuba bezilungile okanye zingalunganga.' },
    isizulu: { term: 'Ukunemba', definition: 'Kuyisilinganiso sakho konke ukuhlunga obekunembile, kungakhathaliseki ukuthi kuhle noma kubi.' },
    source: 'Google + PanSALB AI Terminologies', sourceLicense: 'CC BY 4.0',
  },
  {
    id: 'algorithmic-transparency',
    term: 'Algorithmic Transparency',
    category: 'Ethics & Society',
    english: {
      definition: 'The principle that important factors influencing an algorithmic decision should be visible or understandable to people who use, regulate, or are affected by the system.',
      example: 'If software helps rank applications for an opportunity, people should be able to understand which factors influenced the ranking.',
    },
    afrikaans: { term: 'algoritmedeursigtigheid', definition: 'Die beginsel dat die faktore wat besluite deur algoritmes beïnvloed, sigbaar of deursigtig moet wees vir mense wat die stelsels gebruik, reguleer of daardeur geraak word.' },
    isixhosa: { term: 'Ukubonakala kwealgorithm', definition: 'Umgaqo wokuba izinto ezichaphazela izigqibo ezenziwe ziialgorithm kufuneka zibonakale okanye zibe lubala kubantu abazisebenzisayo, abazilawulayo nabachaphazelekayo.' },
    isizulu: { term: 'Ukungafihlwa ngokwe-algorithmic', definition: 'Umthetho wokuthi izici ezinegalelo ezinqumweni ezenziwa ama-algorithm kufanele zibonakale kubantu abasebenzisa, baqondise noma bathintwe amasistimu.' },
    source: 'Google + PanSALB AI Terminologies', sourceLicense: 'CC BY-SA 4.0',
  },
  {
    id: 'chatbot',
    term: 'Chatbot',
    category: 'Fundamentals',
    english: {
      definition: 'A software application or web interface designed to simulate conversation through text or voice.',
      example: 'A learner types a question into a support chat window and receives an automated conversational response.',
    },
    afrikaans: { term: 'kletsbot', definition: '’n Toepassing of webkoppelvlak wat ontwerp is om menslike gesprek deur teks- of steminteraksies na te boots.' },
    isixhosa: { term: 'Ichatbot', definition: 'Ujongano lwewebhu eyilelwe ukulinganisa incoko yabantu ngokubhaliweyo okanye ukusetyenziswa kwelizwi.' },
    isizulu: { term: 'Ifuzelankulumo', definition: 'I-application yesofthiwe noma isixhumi esibonakalayo sewebhu esiklanyelwe ukulingisa ingxoxo yabantu ngombhalo noma ngokuxhumana ngezwi.' },
    source: 'Google + PanSALB AI Terminologies', sourceLicense: 'CC BY-SA 4.0',
  },
  {
    id: 'computer-vision',
    term: 'Computer Vision',
    category: 'Data & ML',
    english: {
      definition: 'A field of AI concerned with enabling computers to extract and use information from digital images or video.',
      example: 'A phone camera identifying a face or an app recognising an object in a photograph uses computer-vision techniques.',
    },
    afrikaans: { term: 'rekenaarvisie', definition: '’n Interdissiplinêre vakgebied wat daarop gemik is om rekenaars inligting uit digitale beelde of video te laat onttrek en gebruik.' },
    isixhosa: { term: 'Umbono wekhompyutha', definition: 'Inkalo yezifundo ezahlukeneyo ejongene nendlela iikhompyutha ezinokufumana ngayo ulwazi kwimifanekiso yedijithali okanye iividiyo.' },
    isizulu: { term: 'Umbono wekhompyutha', definition: 'Inkundla egxile endleleni amakhompyutha angathola ngayo ukuqonda nokwaziswa ngezithombe namavidiyo edijithali.' },
    source: 'Google + PanSALB AI Terminologies', sourceLicense: 'CC BY-SA 4.0',
  },
  {
    id: 'explainable-ai',
    term: 'Explainable AI (XAI)',
    category: 'Ethics & Society',
    english: {
      definition: 'AI systems or methods designed so that humans can understand, inspect, or retain meaningful oversight of how outputs or decisions are produced.',
      example: 'A system that rejects an application should be able to provide understandable reasons rather than only a score.',
    },
    afrikaans: { term: 'verklaarbare KI (VKI)', definition: 'Dit verwys na KI-stelsels of metodes waaroor mense betekenisvolle intellektuele toesig kan behou.' },
    isixhosa: { term: 'I-AI ecacisekayo (XAI)', definition: 'Ibhekisa kwinkqubo yeAI okanye kwiindlela apho kunokwenzeka ukuba abantu bagcine ukongamela nokuyiqonda indlela eziveliswa ngayo iziphumo.' },
    isizulu: { term: 'Ubuhlakani Obakhiwe Obuchazekayo', definition: 'Ibhekisela kusistimu ye-AI eyenza kwenzeke ukuthi abantu baqhubeke beqonda futhi beqondisa indlela izinqumo noma imiphumela ekhiqizwa ngayo.' },
    source: 'Google + PanSALB AI Terminologies', sourceLicense: 'CC BY-SA 4.0',
  },
  {
    id: 'fairness-in-ai',
    term: 'Fairness (in AI)',
    category: 'Ethics & Society',
    english: {
      definition: 'Efforts to identify and reduce unfair outcomes or algorithmic bias in automated decisions made with machine-learning systems.',
      example: 'A school-support system should not disadvantage a learner simply because its training data under-represented the learner’s language or community.',
    },
    afrikaans: { term: 'regverdigheid (in KI)', definition: 'Regverdigheid in masjienleer verwys na pogings om algoritmesydigheid in geoutomatiseerde besluitnemingprosesse reg te stel.' },
    isixhosa: { term: 'Ubulungisa (kwi-AI)', definition: 'Ibhekiselele kwiinzame zokulungisa ukuthatha icala kweealgorithm kwiinkqubo zezigqibo ezizenzekelayo ezisekelwe kwiimodeli zokufundwa koomatshini.' },
    isizulu: { term: 'Ukungachemi (ku-AI)', definition: 'Kubhekisela emizamweni yokulungisa ukuchema kwama-algorithm ezinqubweni zezinqumo ezizenzekelayo ezisekelwe kumamodeli okufunda komshini.' },
    source: 'Google + PanSALB AI Terminologies', sourceLicense: 'CC BY-SA 4.0',
  },
  {
    id: 'hallucination',
    term: 'Hallucination',
    category: 'Generative AI',
    english: {
      definition: 'An AI-generated response that contains false or misleading information presented as if it were factual.',
      example: 'A chatbot confidently invents a court case, school policy or statistic that does not exist.',
    },
    afrikaans: { term: 'hallusinasie', definition: '’n Antwoord gegenereer deur KI wat vals of misleidende inligting bevat, maar as ’n feit voorgehou word.' },
    isixhosa: { term: 'Ukubona izinto ezingekhoyo', definition: 'Impendulo eveliswa yiAI equlethe inkcazelo engeyonyani okanye elahlekisayo eboniswe njengenyaniso.' },
    isizulu: { term: 'Ukudideka', definition: 'Impendulo ekhiqizwa yi-AI equkethe imininingwane engamanga noma edukisayo enikezwa njengeyiqiniso.' },
    source: 'Google + PanSALB AI Terminologies', sourceLicense: 'CC BY-SA 4.0',
  },
  {
    id: 'human-in-the-loop',
    term: 'Human-in-the-Loop (HITL)',
    category: 'Ethics & Society',
    english: {
      definition: 'An approach in which people remain involved in helping, reviewing, correcting, or making important decisions alongside an AI or machine-learning system.',
      example: 'An AI system may flag unusual work, but a teacher or trained reviewer makes the final judgement.',
    },
    afrikaans: { term: 'mens-wat-ingesluit-word (MWIW)', definition: 'In masjienleer word dit gebruik in die sin van mense wat die rekenaar bystaan om korrekte besluite te neem wanneer ’n model gebou of gebruik word.' },
    isixhosa: { term: 'Ihuman-in-the-Loop (HITL)', definition: 'Ekufundeni koomatshini, iHITL isetyenziswa kwingqiqo yabantu encedisa ikhompyutha ekwenzeni izigqibo ezichanekileyo.' },
    isizulu: { term: 'Inxumano Yomuntu Nomshini', definition: 'Ekufundeni komshini, abantu basiza ikhompyutha ekwenzeni izinqumo ezinembile noma ekubuyekezeni imiphumela.' },
    source: 'Google + PanSALB AI Terminologies', sourceLicense: 'CC BY-SA 4.0',
  },
  {
    id: 'large-language-model',
    term: 'Large Language Model (LLM)',
    category: 'Generative AI',
    english: {
      definition: 'A computational language model trained on very large amounts of text so it can generate language and perform other natural-language tasks.',
      example: 'A connected AI tutor that can explain, summarise or generate text may be powered by a large language model.',
    },
    afrikaans: { term: 'groot taalmodel (GTM)', definition: '’n Rekenaarmodel wat taal kan genereer of ander take met natuurliketaalverwerking kan uitvoer en hierdie vermoëns uit groot hoeveelhede teks aanleer.' },
    isixhosa: { term: 'IModeli yoLwimi eNkulu (LLM)', definition: 'Imodeli yekhompyutha ekwaziyo ukuvelisa ulwimi okanye ukwenza eminye imisebenzi yokulungisa ulwimi lwendalo, ngokufunda kubuninzi bezibhalo.' },
    isizulu: { term: 'Insuselakuyo Yolimi Ngokubanzi', definition: 'Imodeli yekhompyutha ekwazi ukukhiqiza ulimi noma ukwenza eminye imisebenzi yokucubungula kolimi lwemvelo ngokufunda emananini amakhulu ombhalo.' },
    source: 'Google + PanSALB AI Terminologies', sourceLicense: 'CC BY-SA 4.0',
  },
  {
    id: 'natural-language-processing',
    term: 'Natural Language Processing (NLP)',
    category: 'Data & ML',
    english: {
      definition: 'A field of computer science and AI concerned with enabling computers to process, analyse, understand, or generate human language.',
      example: 'Speech recognition, text classification, translation and conversational assistants all use natural-language processing.',
    },
    afrikaans: { term: 'natuurliketaalverwerking (NTV)', definition: '’n Interdissiplinêre subvakgebied in rekenaarwetenskap en KI wat rekenaars die vermoë gee om data wat in natuurlike taal geënkodeer is, te verwerk.' },
    isixhosa: { term: 'UkuSetyenzwa koLwimi lweNdalo (NLP)', definition: 'Indawo engaphantsi kwezifundo zenzululwazi yekhompyutha nobungqondi bekhompyutha ejongene nokubonelela iikhompyutha ngesakhono sokucubungula ulwimi lwendalo.' },
    isizulu: { term: 'Ukucubungula Kolimi Lwemvelo (NLP)', definition: 'Inkundla yesayensi yekhompyutha nobuchwepheshe bokwakhiwe egxile ekunikezeni amakhompyutha ikhono lokucubungula ulimi lwemvelo.' },
    source: 'Google + PanSALB AI Terminologies', sourceLicense: 'CC BY-SA 4.0',
  },
];

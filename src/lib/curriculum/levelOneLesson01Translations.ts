import { Lesson } from './types';
import { LearnerLanguage } from '../storage';

type LessonTranslation = Pick<Lesson, 'title' | 'objectives' | 'blocks' | 'quiz'>;

const translations: Partial<Record<LearnerLanguage, LessonTranslation>> = {
  af: {
    title: 'KI is reeds rondom jou',
    objectives: ['Herken waar KI in die alledaagse lewe gebruik kan word en verstaan dat nie elke outomatiese masjien KI is nie.'],
    blocks: [
      {id:'o',type:'objective',variant:'standard',content:'Herken waar KI in die alledaagse lewe gebruik kan word en verstaan dat nie elke outomatiese masjien KI is nie.'},
      {id:'e',type:'explanation',variant:'standard',content:'KI-stelsels kan patrone herken, met taal werk, voorspel, aanbevelings maak of inhoud skep. Nie elke outomatiese masjien is KI nie.'},
      {id:'t',type:'activity',variant:'standard',content:'THINK — T: Probeer eers self. Noem drie digitale dienste wat jy onlangs gebruik het en besluit watter moontlik KI gebruik.'},
      {id:'h',type:'explanation',variant:'plain',content:'THINK — H: Vra om te verstaan. Vra watter taak die stelsel verrig en vra vir ’n verduideliking as iets nie duidelik is nie.'},
      {id:'i',type:'verification',variant:'standard',content:'THINK — I: Gaan die antwoord na. Skei wat jy werklik kan sien of bevestig van wat jy net aanneem.'},
      {id:'n',type:'application',variant:'standard',content:'THINK — N: Probeer weer op jou eie. Kies nog ’n toepassing en beskryf sonder hulp wat jy dink dit doen.'},
      {id:'k',type:'reflection',variant:'standard',content:'THINK — K: Sê wat jy geleer het. Verduidelik KI in jou eie woorde en noem een ding wat nie KI is nie.'},
      {id:'s',type:'summary',variant:'standard',content:'KI kan patrone herken, voorstelle maak of inhoud skep. Sommige masjiene volg net vaste instruksies en is nie KI nie.'}
    ],
    quiz: [
      {id:'q1',question:'Watter stelling is die akkuraatste?',options:['Elke outomatiese toestel is KI.','KI kan take verrig soos om patrone te herken, te voorspel of inhoud te skep.','KI dink altyd soos ’n mens.'],correctIndex:1,explanation:'KI beskryf bepaalde rekenaarvermoëns; dit beteken nie dat elke outomatiese toestel KI is nie.'},
      {id:'q2',question:'Watter een is die beste voorbeeld van KI eerder as ’n masjien wat vaste instruksies volg?',options:['’n Tydskakelaar wat ’n lig ná tien minute afskakel.','’n Stelsel wat patrone uit voorbeelde leer om nuwe boodskappe te sorteer.','’n Ketel wat afskakel wanneer die water kook.'],correctIndex:1,explanation:'Om patrone uit voorbeelde te leer en dit met iets nuuts te gebruik, is ’n algemene KI-vermoë.'},
      {id:'q3',question:'Wat moet jy doen as jy onseker is of ’n stelsel KI gebruik?',options:['Neem aan dit is KI omdat dit digitaal is.','Soek bewyse van wat die stelsel werklik doen.','Neem aan dit is nie KI nie.'],correctIndex:1,explanation:'Dit is beter om te ondersoek hoe ’n stelsel werk as om volgens sy voorkoms te raai.'}
    ]
  },
  xh: {
    title: 'I-AI sele ikungqongile',
    objectives: ['Qaphela apho i-AI inokusetyenziswa khona kubomi bemihla ngemihla, uze uqonde ukuba asingawo wonke umatshini ozenzekelayo osebenzisa i-AI.'],
    blocks: [
      {id:'o',type:'objective',variant:'standard',content:'Qaphela apho i-AI inokusetyenziswa khona kubomi bemihla ngemihla, uze uqonde ukuba asingawo wonke umatshini ozenzekelayo osebenzisa i-AI.'},
      {id:'e',type:'explanation',variant:'standard',content:'Iinkqubo ze-AI zinokuqaphela iipateni, zisebenze ngolwimi, ziqikelele, zenze iingcebiso okanye zenze umxholo. Asingawo wonke umatshini ozenzekelayo osebenzisa i-AI.'},
      {id:'t',type:'activity',variant:'standard',content:'THINK — T: Zama kuqala ngokwakho. Chaza iinkonzo ezintathu zedijithali ozisebenzisileyo kutshanje uze ucinge ukuba zeziphi ezinokusebenzisa i-AI.'},
      {id:'h',type:'explanation',variant:'plain',content:'THINK — H: Buza ukuze uqonde. Buza ukuba inkqubo yenza msebenzi mni, uze ucele ingcaciso xa kukho into ongayiqondiyo.'},
      {id:'i',type:'verification',variant:'standard',content:'THINK — I: Jonga impendulo. Yahlula into onokuyibona okanye uyiqinisekise kwinto ocinga nje ukuba iyinyani.'},
      {id:'n',type:'application',variant:'standard',content:'THINK — N: Zama kwakhona ngokwakho. Khetha enye i-app uze uchaze ngaphandle koncedo ukuba ucinga ukuba yenza ntoni.'},
      {id:'k',type:'reflection',variant:'standard',content:'THINK — K: Chaza into oyifundileyo. Cacisa i-AI ngamazwi akho uze uchaze into enye engeyiyo i-AI.'},
      {id:'s',type:'summary',variant:'standard',content:'I-AI inokuqaphela iipateni, yenze iingcebiso okanye yenze umxholo. Eminye imishini ilandela nje imiyalelo emiselweyo kwaye ayiyo AI.'}
    ],
    quiz: [
      {id:'q1',question:'Sesiphi isivakalisi esichaneke kakhulu?',options:['Sonke isixhobo esizenzekelayo yi-AI.','I-AI inokwenza imisebenzi efana nokuqaphela iipateni, ukuqikelela okanye ukwenza umxholo.','I-AI isoloko icinga njengomntu.'],correctIndex:1,explanation:'I-AI ichaza amandla athile ekhompyutha; ayithethi ukuba sonke isixhobo esizenzekelayo yi-AI.'},
      {id:'q2',question:'Sesiphi esona sibonelo silungileyo se-AI kunomatshini olandela imiyalelo emiselweyo?',options:['Isibali-xesha esicima isibane emva kwemizuzu elishumi.','Inkqubo efunda iipateni kwimizekelo ukuze ihlele imiyalezo emitsha.','Iketile ecimayo xa amanzi ebila.'],correctIndex:1,explanation:'Ukufunda iipateni kwimizekelo nokuzisebenzisa kwinto entsha yenye yezinto eziqhelekileyo ezinokwenziwa yi-AI.'},
      {id:'q3',question:'Kufuneka wenze ntoni xa ungaqinisekanga ukuba inkqubo isebenzisa i-AI?',options:['Cinga ukuba yi-AI kuba iyidijithali.','Khangela ubungqina bokuba inkqubo yenza ntoni kanye kanye.','Cinga ukuba ayiyo AI.'],correctIndex:1,explanation:'Kungcono ukuphanda ukuba inkqubo isebenza njani kunokuqikelela ngokujonga nje indlela ebonakala ngayo.'}
    ]
  }
};

export function translateLevelOneLesson01(lesson: Lesson, language: LearnerLanguage): Lesson {
  const translation = translations[language];
  if (!translation) return lesson;
  return { ...lesson, ...translation, locale: language === 'af' ? 'af-ZA' : 'xh-ZA' };
}

import { Lesson } from './types';
import { LearnerLanguage } from '../storage';
type T = Pick<Lesson,'title'|'objectives'|'blocks'|'quiz'>;
const translations: Partial<Record<LearnerLanguage,T>> = {
af:{title:'Stappe, patrone en voorspellings',objectives:['Verstaan hoe duidelike stappe en patrone gebruik kan word om dinge te sorteer of voorspellings te maak.'],blocks:[
{id:'o',type:'objective',variant:'standard',content:'Verstaan hoe duidelike stappe en patrone gebruik kan word om dinge te sorteer of voorspellings te maak.'},
{id:'e',type:'explanation',variant:'standard',content:'Baie rekenaartake volg ’n stel stappe of reëls. Dit word soms ’n algoritme genoem. KI kan ook patrone uit voorbeelde leer. Dit kan dié patrone gebruik om te voorspel wat moontlik sal gebeur of om iets in ’n groep te plaas.'},
{id:'t',type:'activity',variant:'standard',content:'THINK — T: Probeer eers self. Skryf vier stappe vir ’n bekende taak.'},
{id:'h',type:'explanation',variant:'plain',content:'THINK — H: Vra om te verstaan. Bepaal watter dele stappe, patrone, voorspellings of indelings in groepe is.'},
{id:'i',type:'verification',variant:'standard',content:'THINK — I: Gaan dit na. Toets of iemand anders jou stappe kan volg.'},
{id:'n',type:'application',variant:'standard',content:'THINK — N: Probeer weer op jou eie. Skep een nuwe voorbeeld van ’n voorspelling en een voorbeeld waar iets in ’n groep ingedeel word.'},
{id:'k',type:'reflection',variant:'standard',content:'THINK — K: Sê wat jy geleer het. Verduidelik voorspelling en indeling in groepe in jou eie woorde.'},
{id:'s',type:'summary',variant:'standard',content:'Algoritmes gee stappe. Patrone help met take soos voorspellings en om dinge in groepe in te deel.'}],quiz:[
{id:'q1',question:'Wat is ’n algoritme?',options:['’n Stel stappe of reëls.','’n Waarborg dat iets waar is.','’n Lukrake raaiskoot.'],correctIndex:0,explanation:'’n Algoritme is ’n metode of reeks stappe.'},
{id:'q2',question:'’n Stelsel plaas boodskappe in die groepe gemorspos of nie gemorspos nie. Watter soort taak is dit?',options:['Indeling in groepe.','Om ’n battery te laai.','Om ’n bladsy te druk.'],correctIndex:0,explanation:'Hier word nuwe inligting in ’n bepaalde groep geplaas. Dit word ook klassifikasie genoem.'},
{id:'q3',question:'Waarom kan voorspellings wat op patrone gebaseer is verkeerd wees?',options:['Patrone waarborg altyd die toekoms.','Nuwe gevalle kan verskil van die patrone wat die stelsel geleer het.','Rekenaars kan nie patrone gebruik nie.'],correctIndex:1,explanation:'’n Aangeleerde patroon verteenwoordig dalk nie elke nuwe situasie korrek nie.'}]},
xh:{title:'Amanyathelo, iipateni noqikelelo',objectives:['Qonda indlela amanyathelo acacileyo neepateni ezinokusetyenziswa ngayo ukuhlela izinto okanye ukwenza uqikelelo.'],blocks:[
{id:'o',type:'objective',variant:'standard',content:'Qonda indlela amanyathelo acacileyo neepateni ezinokusetyenziswa ngayo ukuhlela izinto okanye ukwenza uqikelelo.'},
{id:'e',type:'explanation',variant:'standard',content:'Imisebenzi emininzi yekhompyutha ilandela amanyathelo okanye imithetho ethile. Oku ngamanye amaxesha kubizwa ngokuba yi-algorithm. I-AI inokufunda neepateni kwimizekelo. Ingasebenzisa ezo pateni ukuqikelela into enokwenzeka okanye ukuhlela into kwiqela.'},
{id:'t',type:'activity',variant:'standard',content:'THINK — T: Zama kuqala ngokwakho. Bhala amanyathelo amane omsebenzi oqhelekileyo.'},
{id:'h',type:'explanation',variant:'plain',content:'THINK — H: Buza ukuze uqonde. Chonga ukuba zeziphi iindawo ezingamanyathelo, iipateni, uqikelelo okanye ukuhlela izinto ngokwamaqela.'},
{id:'i',type:'verification',variant:'standard',content:'THINK — I: Jonga ukuba ichanekile. Vavanya ukuba omnye umntu angakwazi na ukulandela amanyathelo akho.'},
{id:'n',type:'application',variant:'standard',content:'THINK — N: Zama kwakhona ngokwakho. Yenza umzekelo omtsha woqikelelo nomzekelo omtsha wokuhlela into kwiqela.'},
{id:'k',type:'reflection',variant:'standard',content:'THINK — K: Chaza into oyifundileyo. Cacisa uqikelelo nokuhlela izinto ngokwamaqela ngamazwi akho.'},
{id:'s',type:'summary',variant:'standard',content:'Ii-algorithm zinika amanyathelo. Iipateni zinceda kwimisebenzi efana noqikelelo nokuhlela izinto ngokwamaqela.'}],quiz:[
{id:'q1',question:'Yintoni i-algorithm?',options:['Luluhlu lwamanyathelo okanye imithetho.','Sisiqinisekiso sokuba into iyinyani.','Luqikelelo olungenasiseko.'],correctIndex:0,explanation:'I-algorithm yindlela okanye luluhlu lwamanyathelo.'},
{id:'q2',question:'Inkqubo yahlula imiyalezo ibe yi-spam okanye ingabi yi-spam. Luhlobo luni lomsebenzi olu?',options:['Ukuhlela izinto ngokwamaqela.','Ukutshaja ibhetri.','Ukuprinta iphepha.'],correctIndex:0,explanation:'Apha into entsha ibekwa kwiqela elithile. Oku kukwabizwa ngokuba yi-classification.'},
{id:'q3',question:'Kutheni uqikelelo olusekelwe kwiipateni lunokuphazama?',options:['Iipateni zihlala ziqinisekisa ikamva.','Iimeko ezintsha zinokwahluka kwiipateni ezifundwe yinkqubo.','Iikhompyutha azikwazi ukusebenzisa iipateni.'],correctIndex:1,explanation:'Ipateni efundiweyo isenokungamelani ngokuchanekileyo nayo yonke imeko entsha.'}]}
};
export function translateLevelOneLesson02(lesson:Lesson,language:LearnerLanguage):Lesson{const t=translations[language];return t?{...lesson,...t,locale:language==='af'?'af-ZA':'xh-ZA'}:lesson;}

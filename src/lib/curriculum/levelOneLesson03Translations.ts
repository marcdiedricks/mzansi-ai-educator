import { Lesson } from './types';
import { LearnerLanguage } from '../storage';
type T=Pick<Lesson,'title'|'objectives'|'blocks'|'quiz'>;
const translations:Partial<Record<LearnerLanguage,T>>={
af:{title:'Hoe KI uit inligting leer',objectives:['Verstaan hoe voorbeelde KI help om patrone te leer en dit met nuwe inligting te gebruik.'],blocks:[
{id:'o',type:'objective',variant:'standard',content:'Verstaan hoe voorbeelde KI help om patrone te leer en dit met nuwe inligting te gebruik.'},
{id:'e',type:'explanation',variant:'standard',content:'KI leer patrone uit voorbeelde. Hierdie voorbeelde word opleidingsdata genoem. Wat die KI leer, word in ’n model vasgelê. Wanneer jy iets nuuts gee, gebruik dit die geleerde patrone om te reageer. Hierdie laaste stap word soms inferensie genoem.'},
{id:'t',type:'activity',variant:'standard',content:'THINK — T: Probeer eers self. Noem vyf soorte data en kies watter een gebruik kan word om ’n eenvoudige taak aan te leer.'},
{id:'h',type:'explanation',variant:'plain',content:'THINK — H: Vra om te verstaan. Vra vir ’n verduideliking of wenk eerder as die finale antwoord.'},
{id:'i',type:'verification',variant:'standard',content:'THINK — I: Gaan dit na. Kies ’n belangrike bewering of aanname en besluit hoe jy dit kan kontroleer.'},
{id:'n',type:'application',variant:'standard',content:'THINK — N: Probeer weer op jou eie. Gebruik die idee met ’n ander voorbeeld sonder hulp.'},
{id:'k',type:'reflection',variant:'standard',content:'THINK — K: Sê wat jy geleer het. Verduidelik die verskil tussen KI wat uit voorbeelde leer en KI wat dit wat geleer is op iets nuuts gebruik.'},
{id:'s',type:'summary',variant:'standard',content:'KI kan patrone uit voorbeelde leer en dan daardie patrone gebruik wanneer dit iets nuuts ontvang.'}],quiz:[
{id:'q1',question:'Wat is opleidingsdata?',options:['Voorbeelde wat ’n model help om patrone te leer.','Slegs inligting wat gemaak word nadat ’n model antwoord.','’n Wagwoord vir ’n KI-stelsel.'],correctIndex:0,explanation:'Opleidingsdata gee voorbeelde waaruit ’n model patrone kan leer.'},
{id:'q2',question:'Wat gebeur wanneer KI dit wat dit geleer het op iets nuuts gebruik?',options:['’n Rekenaar word gebou.','Die KI gebruik geleerde patrone met nuwe inligting.','Al die leervoorbeelde word uitgevee.'],correctIndex:1,explanation:'KI kan patrone wat vroeër geleer is gebruik om op nuwe inligting te reageer. Dit word soms inferensie genoem.'},
{id:'q3',question:'Watter stelling beskryf leer en die gebruik van wat geleer is korrek?',options:['KI leer eers patrone uit voorbeelde; later kan dit daardie patrone op iets nuuts gebruik.','Dit is presies dieselfde proses.','KI moet geleerde patrone gebruik voordat dit hulle leer.'],correctIndex:0,explanation:'KI leer eers patrone uit voorbeelde en kan daarna die geleerde patrone met nuwe inligting gebruik.'}]},
xh:{title:'Indlela i-AI efunda ngayo kulwazi',objectives:['Qonda indlela imizekelo enceda ngayo i-AI ukuba ifunde iipateni ize izisebenzise kulwazi olutsha.'],blocks:[
{id:'o',type:'objective',variant:'standard',content:'Qonda indlela imizekelo enceda ngayo i-AI ukuba ifunde iipateni ize izisebenzise kulwazi olutsha.'},
{id:'e',type:'explanation',variant:'standard',content:'I-AI ifunda iipateni kwimizekelo. Le mizekelo ibizwa ngokuba yi-training data. Into efundwa yi-AI igcinwa kwimodeli. Xa uyinika into entsha, isebenzisa iipateni ezifundileyo ukuze iphendule. Eli nyathelo lokusebenzisa into efundiweyo kwinto entsha ngamanye amaxesha libizwa ngokuba yi-inference.'},
{id:'t',type:'activity',variant:'standard',content:'THINK — T: Zama kuqala ngokwakho. Dwelisa iintlobo ezintlanu zedatha uze ukhethe ukuba yeyiphi enokusetyenziswa ukufundisa umsebenzi olula.'},
{id:'h',type:'explanation',variant:'plain',content:'THINK — H: Buza ukuze uqonde. Cela ingcaciso okanye icebiso endaweni yokucela impendulo yokugqibela.'},
{id:'i',type:'verification',variant:'standard',content:'THINK — I: Jonga ukuba ichanekile. Chonga ibango okanye into ecingelwayo ebalulekileyo uze ugqibe ukuba ungayijonga njani.'},
{id:'n',type:'application',variant:'standard',content:'THINK — N: Zama kwakhona ngokwakho. Sebenzisa le ngcamango komnye umzekelo ngaphandle koncedo.'},
{id:'k',type:'reflection',variant:'standard',content:'THINK — K: Chaza into oyifundileyo. Cacisa umahluko phakathi kokufunda kwe-AI kwimizekelo nokusebenzisa oko ikufundileyo kwinto entsha.'},
{id:'s',type:'summary',variant:'standard',content:'I-AI inokufunda iipateni kwimizekelo ize kamva isebenzise ezo pateni xa ifumana into entsha.'}],quiz:[
{id:'q1',question:'Yintoni i-training data?',options:['Yimizekelo esetyenziswa ukunceda imodeli ifunde iipateni.','Lulwazi kuphela olwenziwa emva kokuba imodeli iphendule.','Ligama lokugqitha lenkqubo ye-AI.'],correctIndex:0,explanation:'I-training data inika imizekelo imodeli enokufunda kuyo iipateni.'},
{id:'q2',question:'Kwenzeka ntoni xa i-AI isebenzisa into eyifundileyo kwinto entsha?',options:['Kwakhiwa ikhompyutha.','I-AI isebenzisa iipateni ezifundileyo kulwazi olutsha.','Yonke imizekelo yokufunda iyacinywa.'],correctIndex:1,explanation:'I-AI inokusebenzisa iipateni eyazifunda ngaphambili ukuze iphendule kulwazi olutsha. Oku ngamanye amaxesha kubizwa ngokuba yi-inference.'},
{id:'q3',question:'Sesiphi isivakalisi esichaza ngokuchanekileyo ukufunda nokusebenzisa oko kufundiweyo?',options:['I-AI iqala ngokufunda iipateni kwimizekelo; kamva inokusebenzisa ezo pateni kwinto entsha.','Ziyinkqubo enye kanye.','I-AI kufuneka isebenzise iipateni phambi kokuba izifunde.'],correctIndex:0,explanation:'I-AI iqala ngokufunda iipateni kwimizekelo, ize emva koko isebenzise ezo pateni kulwazi olutsha.'}]}
};
export function translateLevelOneLesson03(lesson:Lesson,language:LearnerLanguage):Lesson{const t=translations[language];return t?{...lesson,...t,locale:language==='af'?'af-ZA':'xh-ZA'}:lesson;}

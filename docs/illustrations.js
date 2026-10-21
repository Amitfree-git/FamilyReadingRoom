/* FamilyReadingRoom · illustrations v1
   Offline, text-free vector watercolor storyboard. No remote assets or tracking.
   Historical costumes/architecture are schematic artistic reconstructions, not verified portraits. */
(function(){
"use strict";
const episodes={
c01:["duel","recommend","govern","assembly","teach"],
c02:["music","music","study"],
c03:["sun","debate","teach"],
c04:["temple","question","mentor"],
c05:["debate","mirror","family"],
c06:["gate","wood","trust"],
c07:["soldier","reconcile","bow"],
c08:["office","hourglass","plan"],
c09:["ox","compassion","village"],
c10:["mountain","bitter","field"],
c11:["flood","canal","farmland"],
c12:["palace","debate","people"],
c13:["desert","caravan","scrolls"],
c14:["court","strategy","team"],
c15:["water","canal","farmland"],
c16:["horse","horse","mountain"],
c17:["travel","scrolls","library"],
c18:["bamboo","read","learn"],
c19:["stars","invention","study"],
c20:["river","aqueduct","harvest"],
c21:["kitchen","chef","nature"],
c22:["bridge","fish","dialogue"],
c23:["well","sea","horizon"],
c24:["dry","fish","river"],
c25:["soldier","people","peach"],
c26:["field","dream","road"],
c27:["strategy","supply","team"],
c28:["palace","advice","camp"],
c29:["battle","advice","scroll"],
c30:["court","scholar","bow"]
};
const themes={
"论语":["#e6eee5","#d5e1d2","#6e8f75","#d49b75","#506b60"],
"孟子":["#f5ebd6","#e8d5b8","#ad8c60","#b66d50","#6a795e"],
"道德经":["#e5f1ec","#c5dfd8","#639b9a","#dba87e","#527882"],
"荀子":["#e6e7ee","#cdd8e3","#6b839b","#cf9c7a","#586c8f"],
"庄子":["#dfedee","#c7ddde","#648d9a","#d4a67c","#577d6b"],
"史记":["#f5e9db","#ead2bd","#b98b70","#bd6751","#827e69"]
};
const sceneTips={
duel:"两位公子争位与旧怨",recommend:"举荐人才",govern:"整顿政务",assembly:"诸侯会盟",teach:"师徒问答",
music:"习琴与反复体会",study:"静心求学",sun:"观察太阳",debate:"面对面讨论",temple:"古代礼仪场所",
question:"虚心请教",mentor:"师友交流",mirror:"设身处地",family:"家庭相处",gate:"城门告示",wood:"搬木履约",
trust:"守信建立信任",soldier:"将军与责任",reconcile:"化解误会",bow:"致歉与谦逊",office:"治理事务",
hourglass:"珍惜时机",plan:"审慎筹划",ox:"牛与恻隐之心",compassion:"推己及人",village:"百姓与乡里",
mountain:"路途与磨炼",bitter:"时刻自省",field:"耕作田地",flood:"洪水与治水",canal:"开凿水渠",
farmland:"灌溉农田",palace:"宫廷议事",people:"民生与百姓",desert:"长途西行",caravan:"旅途与驼队",
scrolls:"整理史料",court:"朝堂与人才",strategy:"谋略与筹划",team:"协力共事",water:"河川水流",
horse:"塞翁失马",travel:"寻访见闻",library:"编纂著述",bamboo:"古代竹简",read:"反复研读",
learn:"习学积累",stars:"天象研究",invention:"制作仪器",river:"河流与工程",aqueduct:"水利引水",
harvest:"农田丰收",kitchen:"庖丁解牛的寓言",chef:"熟能生巧",nature:"顺应事理",bridge:"濠梁之辩",
fish:"江河中的游鱼",dialogue:"思辨对话",well:"井底与眼界",sea:"大海与辽阔",horizon:"见识更广",
dry:"涸泽之鱼",peach:"桃李成蹊",dream:"志向与抱负",road:"漫长道路",supply:"后勤保障",
advice:"逆耳忠言",camp:"离宫归营",battle:"兵戈与胜负",scroll:"谦虚听取意见",scholar:"礼贤下士"
};
const pal=(l)=>themes[l.book]||themes["论语"];
const plant=(x,y,s,c)=>'<g transform="translate('+x+' '+y+') scale('+s+')" opacity=".8" stroke="'+c+'" stroke-width="2" stroke-linecap="round" fill="none"><path d="M0 18 Q-2 -8 3 -21"/><path d="M1 -3q-13 -12 -21 -6q5 14 21 13M2 -11q13 -15 19 -9q-5 13 -18 16"/><path d="M0 8q-11 -6 -16 1q9 8 16 5"/></g>';
function actor(x,y,scale,robe,gesture){
const hand=gesture==="point"?'M28 1L52 -14':gesture==="bow"?'M25 1L35 18':gesture==="read"?'M27 2L44 12':'M26 4L44 2';
return '<g transform="translate('+x+' '+y+') scale('+scale+')" stroke-linejoin="round" stroke-linecap="round">'+
'<ellipse cx="0" cy="67" rx="35" ry="7" fill="#424d4877" opacity=".15"/>'+
'<path d="M-28 18 Q-40 54 -33 63Q-12 68 4 65Q24 68 35 63Q36 40 20 17Z" fill="'+robe+'" stroke="#596b64" stroke-width="1.8"/>'+
'<path d="M-5 19l7 36 9-36" fill="#f1dfca" opacity=".94" stroke="#998675" stroke-width="1.5"/>'+
'<path d="M-23 15l-11 23 -6 12M26 4l5 35 14 12" fill="none" stroke="'+robe+'" stroke-width="11"/>'+
'<path d="'+hand+'" stroke="'+robe+'" stroke-width="10" fill="none"/>'+
'<circle cx="0" cy="-1" r="17" fill="#f3d3b0" stroke="#9f806b" stroke-width="1.8"/>'+
'<path d="M-16 -9Q-13 -25 4 -22Q16 -21 17 -7Q6 -13 -5 -13Q-12 -10 -16 -9" fill="#2c3436"/>'+
'<circle cx="-4" cy="-1" r="1.3" fill="#364344"/><circle cx="8" cy="-1" r="1.3" fill="#364344"/>'+
'<path d="M-1 7q5 3 9-1" fill="none" stroke="#926958" stroke-width="1.1"/>'+
'<path d="M-4 -19Q-4 -35 4 -32Q9 -30 7 -18" fill="#2b3334" stroke="#2b3334" stroke-width="4"/></g>';
}
function prop(kind,c){
const dark="#6d685e",edge="#715f50";
switch(kind){
case "horse":return '<g transform="translate(252 140)" fill="'+dark+'" stroke="#534f48" stroke-width="3" stroke-linecap="round"><ellipse cx="0" cy="23" rx="56" ry="24"/><path d="M31 12L48 -26 71 -25 82 -8 63 0 54 22Z"/><path d="M-37 39l-7 54m26-52l-1 55m41-53l4 55m19-50l13 51" fill="none"/><path d="M-51 18q-25-14-20 17" fill="none"/><circle cx="69" cy="-19" r="2" fill="#fdf1df"/></g>';
case "music":return '<g transform="translate(245 175)"><path d="M-75 15Q-40 -13 20 -10L76 15Q15 35 -70 23Z" fill="#966d50" stroke="'+edge+'" stroke-width="3"/>'+Array.from({length:7},(_,i)=>'<path d="M-62 '+(-1+i*3)+'L56 '+(11+i*1)+'" stroke="#e8d1a4" stroke-width="1.3"/>').join('')+'<circle cx="62" cy="14" r="9" fill="#d6b68a"/></g>';
case "bridge":return '<path d="M-10 206 Q130 88 326 203" fill="none" stroke="#7b7161" stroke-width="14"/><path d="M-10 211 Q130 100 326 208" fill="none" stroke="#dbbd94" stroke-width="11"/><path d="M-1 177q160 -105 325 0" fill="none" stroke="#8d7961" stroke-width="3"/>';
case "fish":return Array.from({length:4},(_,i)=>{let x=52+i*62,y=177+(i%2)*20;return '<g transform="translate('+x+' '+y+')" fill="'+(i%2? "#e0aa7c":"#85aead")+'" stroke="#667d78" stroke-width="2"><ellipse cx="0" cy="0" rx="24" ry="10"/><path d="M20 0L40-13V13Z"/><circle cx="-11" cy="-1" r="2" fill="#263f43"/></g>'}).join('');
case "scroll":case "scrolls":case "plan":case "strategy":case "read":case "study":case "library":case "scholar":return '<g transform="translate(250 166) rotate(-7)"><rect x="-83" y="-26" width="169" height="71" rx="8" fill="#ebd7a9" stroke="#a88a60" stroke-width="3"/><path d="M-72 -14h128m-128 15H62m-134 15H44m-116 14H49" stroke="#b7aa86" stroke-width="3" opacity=".8"/><ellipse cx="-82" cy="9" rx="10" ry="38" fill="#d4bd8c" stroke="#a48c67" stroke-width="3"/><ellipse cx="85" cy="9" rx="9" ry="38" fill="#d4bd8c" stroke="#a48c67" stroke-width="3"/></g>';
case "sun":case "stars":return '<circle cx="268" cy="86" r="53" fill="#f9c982" opacity=".82"/><circle cx="268" cy="86" r="76" fill="none" stroke="#eebc83" stroke-width="2" stroke-dasharray="4 11"/>';
case "wood":case "gate":case "temple":case "palace":case "court":case "office":return '<g transform="translate(248 142)" stroke="#836a59" stroke-width="3"><path d="M-125 -45L0 -94 131 -45 120 -29H-121Z" fill="#8f7770"/><path d="M-104 -22H105V78h-209Z" fill="#edddbb"/><path d="M-100 2h200" stroke="#d4bc9c"/><rect x="-15" y="0" width="44" height="78" fill="#78624f"/><rect x="-90" y="8" width="34" height="41" fill="#b7cfcc"/><rect x="57" y="8" width="33" height="41" fill="#b7cfcc"/><path d="M-137 -42L0 -99 142 -42" fill="none" stroke="#746c5b" stroke-width="7"/></g>';
case "field":case "farmland":case "harvest":case "village":case "people":case "compassion":case "family":return Array.from({length:12},(_,i)=>{let x=14+i*28;return '<path d="M'+x+' 236L'+(x+17)+' 198L'+(x+32)+' 236M'+(x+15)+' 203l9 -13" stroke="#af9c65" stroke-width="2" fill="none" opacity=".75"/>'}).join('');
case "flood":case "river":case "sea":case "water":case "canal":case "aqueduct":case "dry":case "horizon":return '<g stroke="#6199a2" fill="none" stroke-width="4" opacity=".7"><path d="M-10 158q35-20 70 0t70 0t70 0t70 0t70 0"/><path d="M-10 179q35-17 70 0t70 0t70 0t70 0t70 0"/><path d="M-10 205q30-16 70 0t70 0t70 0t70 0t70 0"/><path d="M-10 229q35-15 70 0t70 0t70 0t70 0t70 0"/></g>';
case "well":return '<g transform="translate(210 164)"><ellipse rx="78" ry="29" fill="#9f8e7f" stroke="#70655a" stroke-width="4"/><rect x="-78" y="0" width="156" height="42" fill="#b8ae97" stroke="#766c5d" stroke-width="3"/><ellipse rx="70" ry="17" fill="#538792"/><path d="M-76 16h153" stroke="#776c5d" stroke-width="4"/></g>';
case "desert":case "road":case "travel":case "caravan":case "mountain":return '<g fill="none" stroke="#b39973" stroke-width="4"><path d="M22 230q99-55 205-19T470 196"/><path d="M-10 253q150-63 246-18T490 230"/></g>';
case "peach":return '<g transform="translate(257 123)"><path d="M0 50V-33M0-11l-45-39m45 15L56-72" stroke="#796e56" stroke-width="11" fill="none"/>'+Array.from({length:8},(_,i)=>{const a=i*6.28/8,x=Math.round(Math.cos(a)*60),y=Math.round(Math.sin(a)*42-42);return '<circle cx="'+x+'" cy="'+y+'" r="28" fill="'+(i%2?"#caa2a0":"#aac3a4")+'" opacity=".9"/>'}).join('')+'</g>';
case "bamboo":case "learn":return Array.from({length:5},(_,i)=>{const x=170+i*24;return '<path d="M'+x+' 208V65m-3 13h7m-7 31h7m-7 35h7m-7 35h7" stroke="#699077" stroke-width="6"/>'}).join('');
case "invention":return '<g transform="translate(250 160)" fill="none" stroke="#9a866a" stroke-width="9"><circle r="66"/><ellipse rx="29" ry="67"/><ellipse rx="66" ry="29"/><path d="M-65 0h130M0-66v132"/></g>';
case "kitchen":case "chef":return '<g transform="translate(252 194)"><path d="M-97 -34Q0 -60 102 -32L80 0H-81Z" fill="#d3baa1" stroke="'+edge+'" stroke-width="3"/><path d="M-12 -35l20-60 8 60" stroke="'+edge+'" stroke-width="4" fill="#d7a777"/></g>';
case "bitter":return '<g transform="translate(247 164)"><ellipse rx="74" ry="28" fill="#b69d74" stroke="#796d55" stroke-width="4"/><path d="M-55 -1Q-5 -100 41 -9" stroke="#7d9b6d" stroke-width="5" fill="none"/></g>';
case "supply":return Array.from({length:4},(_,i)=>'<g transform="translate('+(140+i*43)+' '+(186-(i%2)*17)+')"><rect width="35" height="35" fill="#ae8f67" stroke="#74604d" stroke-width="3"/><path d="M0 0l17 8 18-8" fill="none" stroke="#d9c49e" stroke-width="2"/></g>').join('');
case "battle":case "soldier":case "duel":return '<g transform="translate(255 125)" stroke="#a06955" stroke-width="5"><path d="M-18 85V-53m-42 0H58" fill="none"/><path d="M-43 -44L-43 -11L-13 -26Z" fill="#b97b6b"/><path d="M46 -40L46 -8L12 -24Z" fill="#6d9a91"/></g>';
case "mirror":return '<g transform="translate(230 146)"><ellipse rx="58" ry="70" fill="#bdbeb0" stroke="#a9825e" stroke-width="9"/><ellipse rx="42" ry="54" fill="#e2ebe1"/><path d="M0 70v49" stroke="#a9825e" stroke-width="11"/></g>';
default:return '<g transform="translate(245 160)" stroke="#9a9f8d" stroke-width="3" fill="none"><circle r="60"/><path d="M-40 0h80M0-40v80"/></g>';
}
}
function scene(lesson,part=0,opts={}){
const scenes=episodes[lesson.id]||["study","dialogue","nature"];
const motif=scenes[Math.max(0,part)%scenes.length];
const [paper,mist,leaf,terracotta,deep]=pal(lesson);
const uid=lesson.id+'-'+part+(opts.cover?'-cover':'');
const people= /^(fish|sea|water|river|horizon|well|dry|flood|aqueduct|harvest|mountain|stars|sun|peach)$/.test(motif)?1: /^(duel|debate|recommend|reconcile|bow|dialogue|assembly|trust|family|team|battle)$/.test(motif)?3:2;
const figures=Array.from({length:people},(_,i)=>{
const x=people===1?102:people===2?75+i*310:54+i*165;
const y=people===1?157:people===2?152+(i%2)*10:166+(i%2)*12;
const robes=[leaf,terracotta,deep][(part+i)%3];
return actor(x,y,people===3?.83:1.0,robes,part%2?'point':'read');
}).join('');
const bg='<defs><linearGradient id="sky-'+uid+'" x2="0" y2="1"><stop stop-color="'+paper+'"/><stop offset="1" stop-color="'+mist+'"/></linearGradient><pattern id="texture-'+uid+'" width="24" height="23" patternUnits="userSpaceOnUse"><circle cx="4" cy="3" r="1.2" fill="#705e53" opacity=".075"/><circle cx="17" cy="18" r=".9" fill="#705e53" opacity=".08"/></pattern></defs>'+
'<rect width="480" height="270" fill="url(#sky-'+uid+')"/>'+
'<circle cx="'+(392-part%3*42)+'" cy="58" r="39" fill="#f8dfad" opacity=".78"/>'+
'<path d="M0 190Q90 76 193 158Q280 68 370 157Q423 119 480 153V270H0Z" fill="'+leaf+'" opacity=".24"/>'+
'<path d="M0 206Q140 139 235 207Q360 117 480 185V270H0Z" fill="'+deep+'" opacity=".15"/>'+
'<path d="M0 218Q120 185 242 217T480 211V270H0Z" fill="'+paper+'" opacity=".8"/>'+
'<rect width="480" height="270" fill="url(#texture-'+uid+')"/>';
const detail=prop(motif,pal(lesson));
const flora=plant(29,205,1.1,deep)+plant(452,211,.85,deep);
const foreground='<path d="M0 249Q102 237 221 250T480 247" stroke="'+leaf+'" stroke-width="4" fill="none" opacity=".3"/>';
return '<svg class="classic-scene" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+(sceneTips[motif]||"经典故事")+'" preserveAspectRatio="xMidYMid slice">'+bg+detail+flora+figures+foreground+'</svg>';
}
function artStrip(l){
if(!l||!l.story||!l.story.parts)return '';
const count=l.story.parts.length;
return '<section class="illustration-gallery" aria-label="本课故事插图"><div class="illustration-title"><span class="illustration-stamp" aria-hidden="true">画</span><div><h3>读图看故事</h3><p>历史场景为艺术想象，用于辅助理解，不代表真实肖像与服饰考证。</p></div></div><div class="illustration-grid">'+
l.story.parts.map(([heading],i)=>'<figure class="comic-frame"><div class="comic-art">'+scene(l,i)+'</div><figcaption><span class="comic-counter">'+String(i+1).padStart(2,"0")+'</span><span>'+heading.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</span></figcaption></figure>').join('')+
'</div></section>';
}
function cover(l){return '<div class="illustration-cover" aria-label="本课主题插画"><span class="art-watermark" aria-hidden="true">典籍与故事</span>'+scene(l,(l.story.parts.length>1?1:0),{cover:true})+'</div>';}
window.ClassicIllustrations={version:"1.0.0",episodes,scene,artStrip,cover};
})();
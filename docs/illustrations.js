/* FamilyReadingRoom: illustrated history, one original image per displayed scene.
   Complete book quotations and captions remain as selectable HTML text.
   The first lesson uses source-resolution WebP instead of magnified low-res atlas.
 */
(function(){
"use strict";
const paintedLessons=new Set(["c01"]);
const dialogues={
  c01:{
    hero:[["子路","管仲没有殉死，算仁吗？"],["孔子","也要看他对天下做了什么。"]],
    panels:[
      [["公子小白","我要尽快返回齐国！"]],
      [["鲍叔牙","管仲有治理国家的才能。"],["齐桓公","即使他曾是我的对手？"]],
      [["管仲","先把政务和生产治理好。"]],
      [["齐桓公","请各位诸侯共商大事。"]]
    ]
  }
};
const assets={
  c01:{
    hero:{src:"art/c01-hero-native.webp",width:1983,height:793},
    panels:[
      {src:"art/c01-scene-01-native.webp",width:456,height:197},
      {src:"art/c01-scene-02-native.webp",width:447,height:197},
      {src:"art/c01-scene-03-native.webp",width:457,height:197},
      {src:"art/c01-scene-04-native.webp",width:448,height:197}
    ]
  }
};
function clean(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function bubbleTalk(lines,kind){
  if(!lines || !lines.length)return "";
  return '<div class="story-dialogue story-dialogue-'+kind+'" aria-label="历史故事改编对白">'+
    lines.map(([speaker,speech])=>'<div class="story-dialogue-bubble"><span class="story-dialogue-speaker">'+clean(speaker)+'：</span>'+clean(speech)+'</div>').join('')+
    '</div>';
}
function cover(lesson){
  if(!lesson||!paintedLessons.has(lesson.id))return "";
  const a=assets[lesson.id].hero;
  return '<figure class="illustration-cover painting-cover" aria-label="本课人物历史水彩漫画封面">'+
    '<img class="painting-hero-img" src="'+a.src+'" width="'+a.width+'" height="'+a.height+
    '" loading="eager" decoding="async" fetchpriority="high" role="img" aria-label="孔子在树下与子路等弟子讨论管仲的历史功绩" alt="孔子与弟子在大树下研读和讨论经典，远处是山川和城郭">'+
    '<figcaption class="painting-cover-notes">'+
    '<span class="story-dialogue-heading">师生问答 · 故事演绎</span>'+
    bubbleTalk(dialogues[lesson.id]?.hero,'hero')+
    '<p class="painting-disclaimer">对白根据故事情节改编，并非古籍逐字原话；画面为艺术演绎。</p>'+
    '</figcaption></figure>';
}
function artStrip(lesson){
  if(!lesson||!paintedLessons.has(lesson.id)||!lesson.story)return "";
  const headings=lesson.story.parts.slice(0,4).map(part=>part[0]);
  const alt=["齐国公子争位与旧怨","鲍叔牙向齐桓公举荐管仲","管仲辅佐齐国推行治理","齐桓公主持诸侯会盟"];
  const img=assets[lesson.id].panels;
  return '<section class="illustration-gallery painted-gallery" aria-label="本课国风历史漫画">'+
    '<div class="illustration-title"><span class="illustration-stamp" aria-hidden="true">画</span>'+
    '<div><h3>读图看故事</h3><p>先完整看画面，再读画面下方的改编对白与故事标题。</p></div></div>'+
    '<div class="illustration-grid">'+
    headings.map((h,i)=>'<figure class="comic-frame"><div class="comic-art painting-panel">'+
      '<img class="painting-panel-img" src="'+img[i].src+'" width="'+img[i].width+'" height="'+img[i].height+
      '" loading="lazy" decoding="async" role="img" aria-label="'+clean(alt[i])+'" alt="'+clean(alt[i])+'"></div>'+
      '<figcaption class="painting-caption">'+
      '<div class="story-heading"><span class="comic-counter">'+String(i+1).padStart(2,"0")+'</span><strong>'+clean(h)+'</strong></div>'+
      bubbleTalk(dialogues[lesson.id]?.panels[i],'panel')+'</figcaption></figure>').join('')+
    '</div><p class="painting-disclaimer painting-footer">图片不叠加文字，以保留人物和情节；对白为艺术演绎，原文与注释由网页独立呈现。</p></section>';
}
window.ClassicIllustrations={version:"2.2.0",paintedLessons,cover,artStrip};
})();
/* FamilyReadingRoom: story-specific painted illustrations.
   Original lesson text and captions are rendered by the application, not baked into artwork.
   Only lessons with completed original art are shown; no repeated character templates. */
(function(){
"use strict";
const paintedLessons=new Set(["c01"]);
function clean(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function cover(lesson){
  if(!lesson||!paintedLessons.has(lesson.id))return "";
  return '<figure class="illustration-cover painting-cover" aria-label="本课人物历史水彩漫画封面">'+
    '<div class="painting-hero" role="img" aria-label="孔子在树下与子路等弟子讨论管仲的历史功绩"></div>'+
    '<figcaption class="painting-disclaimer">人物场景为艺术演绎，不代表史实肖像</figcaption></figure>';
}
function artStrip(lesson){
  if(!lesson||!paintedLessons.has(lesson.id)||!lesson.story)return "";
  const headings=lesson.story.parts.slice(0,4).map(part=>part[0]);
  const alt=["齐国公子争位与旧怨","鲍叔牙向齐桓公举荐管仲","管仲辅佐齐国推行治理","齐桓公主持诸侯会盟"];
  return '<section class="illustration-gallery painted-gallery" aria-label="本课国风历史漫画">'+
  '<div class="illustration-title"><span class="illustration-stamp" aria-hidden="true">画</span>'+
  '<div><h3>读图看故事</h3><p>四幕历史漫画，先看人物与情节，再读下方的史籍故事。</p></div></div>'+
  '<div class="illustration-grid">'+
  headings.map((h,i)=>'<figure class="comic-frame"><div class="comic-art painting-panel panel-'+(i+1)+'" role="img" aria-label="'+clean(alt[i])+'"></div>'+
   '<figcaption><span class="comic-counter">'+String(i+1).padStart(2,"0")+'</span><span>'+clean(h)+'</span></figcaption></figure>').join('')+
  '</div><p class="painting-disclaimer painting-footer">历史绘本为艺术演绎；画内不含自动生成的原文和注释。</p></section>';
}
window.ClassicIllustrations={version:"2.0.0",paintedLessons,cover,artStrip};
})();
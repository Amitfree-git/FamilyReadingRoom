/* FamilyReadingRoom · Complete illustrated lesson poster.
 * Entire poster (including Chinese captions and speech) is one source image.
 * Literal quotations and full story text remain selectable in the lesson below.
 */
(function(){
"use strict";
const POSTERS={
  c01:{
    src:"art/c01-full-lecture.webp",width:1774,height:887,title:"齐桓公与管仲",
    alt:"《论语·宪问》齐桓公与管仲：孔子与弟子对话、齐国争位、鲍叔牙举荐、齐国治理与诸侯会盟的历史漫画讲义"
  },
  c02:{
    src:"art/c02-full-lecture.webp",width:1882,height:836,title:"孔子学琴",
    alt:"《论语·学而》孔子学琴：古琴练习、反复体会、领悟琴意与学以致用的国风漫画讲义"
  }
};
const paintedLessons=new Set(Object.keys(POSTERS));
function clean(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function cover(lesson){
  if(!lesson||!paintedLessons.has(lesson.id))return "";
  const poster=POSTERS[lesson.id];
  return '<section class="picture-lesson" aria-label="'+clean(poster.title)+'图文漫画讲义">'+
    '<div class="picture-lesson-heading"><div><h2>漫画图文讲义 · '+clean(poster.title)+'</h2>'+
    '<p>整张画面包含人物对白、故事分镜与主题讲解；按原图比例展示，不重复叠加文字。</p></div>'+
    '<a class="picture-open-original" target="_blank" rel="noopener noreferrer" href="'+poster.src+'">查看原图 · 放大阅读 ↗</a></div>'+
    '<div class="picture-scroll" role="region" tabindex="0" aria-label="可左右滑动阅读完整图文漫画">'+
    '<img src="'+poster.src+'" width="'+poster.width+'" height="'+poster.height+'" loading="eager" decoding="async" fetchpriority="high" alt="'+clean(poster.alt)+'">'+
    '</div><p class="picture-mobile-hint">手机上可左右滑动阅读；点击“查看原图”可以放大细看文字。</p>'+
    '<p class="picture-text-note">漫画中的对白与故事说明为艺术演绎，可能有文字误差；经典原文、注释和史籍出处请以下方网页正文为准。</p>'+
    '</section>';
}
function artStrip(lesson){
  // A single finished poster already contains all four illustrated scenes.
  // Prevent duplicate small panels and second HTML speech bubble overlays.
  return "";
}
window.ClassicIllustrations={version:"3.1.0",paintedLessons,cover,artStrip};
})();
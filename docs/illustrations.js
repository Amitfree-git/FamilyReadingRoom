/* FamilyReadingRoom · Complete illustrated lesson poster.
 * Entire poster (including Chinese captions and speech) is one source image.
 * Literal quotations and full story text remain selectable in the lesson below.
 */
(function(){
"use strict";
const paintedLessons=new Set(["c01"]);
const POSTER="art/c01-full-lecture.webp";
function cover(lesson){
  if(!lesson||!paintedLessons.has(lesson.id))return "";
  return '<section class="picture-lesson" aria-label="齐桓公与管仲图文漫画讲义">'+
    '<div class="picture-lesson-heading"><div><h2>漫画图文讲义 · 齐桓公与管仲</h2>'+
    '<p>整张画面已包含标题、人物对白和四幕故事，文字不会再遮挡图片。</p></div>'+
    '<a class="picture-open-original" target="_blank" rel="noopener noreferrer" href="'+POSTER+'">查看原图 · 放大阅读 ↗</a></div>'+
    '<div class="picture-scroll" role="region" tabindex="0" aria-label="可左右滑动阅读完整图文漫画">'+
    '<img src="'+POSTER+'" width="1774" height="887" loading="eager" decoding="async" fetchpriority="high" alt="《论语·宪问》齐桓公与管仲：包含孔子与弟子对话、原文章句、齐国争位、鲍叔牙举荐管仲、改革与诸侯会盟的整张图文漫画讲义">'+
    '</div><p class="picture-mobile-hint">手机上可左右滑动阅读；点击“查看原图”可以放大细看文字。</p>'+
    '<p class="picture-text-note">漫画中的对白与故事说明为艺术演绎，可能有文字误差；经典原文、注释和史籍出处请以下方网页正文为准。</p>'+
    '</section>';
}
function artStrip(lesson){
  // A single finished poster already contains all four illustrated scenes.
  // Prevent duplicate small panels and second HTML speech bubble overlays.
  return "";
}
window.ClassicIllustrations={version:"3.0.0",paintedLessons,cover,artStrip};
})();
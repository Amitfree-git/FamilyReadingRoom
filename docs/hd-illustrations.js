/* Independent original high-definition artwork renderer.
 * No artwork is displayed without human approval and file-completeness checks.
 * Do not insert mockups, upscaled collages or stock illustrations here.
 */
(function(){
  "use strict";
  const APPROVED=Object.freeze({
    // c01: {coverDesktop:"art/hd/c01/cover-desktop.webp",
    //       coverMobile:"art/hd/c01/cover-mobile.webp",
    //       scenes:["art/hd/c01/scene-01.webp", ...]},
    // Add ONLY after source-art validation and individual visual review.
  });
  const escapeHTML=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  const sourcePath=s=>/^(?:art\/hd\/[a-z0-9-]+\/)[\w-]+\.webp$/.test(s)?s:null;
  function artFor(lesson){
    if(!lesson||!Object.prototype.hasOwnProperty.call(APPROVED,lesson.id))return null;
    const a=APPROVED[lesson.id];
    if(!a||!sourcePath(a.coverDesktop)||!sourcePath(a.coverMobile)||!Array.isArray(a.scenes))return null;
    if(a.scenes.length!==lesson.story.parts.length||!a.scenes.every(sourcePath))return null;
    return a;
  }
  function cover(l){
    const asset=artFor(l);if(!asset)return "";
    const alt=escapeHTML(l.title+"，"+l.book+"中的人物与故事高清绘本插图");
    return '<figure class="original-art-cover">'+
      '<picture><source media="(max-width: 599px)" srcset="'+asset.coverMobile+'" type="image/webp">'+
      '<img class="original-cover-img" src="'+asset.coverDesktop+'" width="2560" height="1120" loading="eager" decoding="async" fetchpriority="high" alt="'+alt+'"></picture>'+
      '<figcaption>本课原画为艺术演绎，非史实肖像；如涉及寓言，人物与场景也属于文学再现。</figcaption></figure>';
  }
  function artStrip(l){
    const a=artFor(l);if(!a)return "";
    return '<section class="original-art-gallery" aria-label="本课独立高清故事分镜">'+
      '<div class="illustration-title"><span class="illustration-stamp" aria-hidden="true">画</span><div><h3>读图看故事</h3><p>每幅分镜独立绘制；先看人物动作，再阅读历史背景。</p></div></div>'+
      '<div class="original-art-grid">'+l.story.parts.map(([heading],i)=>
        '<figure class="original-panel"><img src="'+a.scenes[i]+'" width="1600" height="1000" loading="lazy" decoding="async" alt="第'+(i+1)+'幕：'+escapeHTML(heading)+'">'+
        '<figcaption><span class="comic-counter">'+String(i+1).padStart(2,"0")+'</span>'+escapeHTML(heading)+'</figcaption></figure>'
      ).join('')+'</div></section>';
  }
  window.HDClassicArt={version:"1.0.0",approvedCount:Object.keys(APPROVED).length,cover,artStrip};
})();
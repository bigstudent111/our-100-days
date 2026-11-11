(() => {
  const video = document.querySelector('#movie');
  const entry = document.createElement('a');
  entry.href = 'heart.html';
  entry.textContent = '给兰兰的悄悄话 · 打开祝福爱心 →';
  entry.setAttribute('aria-label', '打开祝福爱心，随后查看我们的合照');
  entry.style.cssText = 'display:block;margin:18px 0;padding:16px 0;color:#9a4267;text-decoration:none;border-bottom:1px solid #dcc1cf;line-height:1.8;transition:background .5s,padding .5s';
  video.after(entry);
  const highlight = () => {
    const ending = video.ended || video.currentTime >= 176.866667;
    entry.style.background = ending ? '#f8e6ed' : 'transparent';
    entry.style.padding = ending ? '16px' : '16px 0';
    entry.textContent = ending ? '故事还在继续，点开我给你的祝福 →' : '给兰兰的悄悄话 · 打开祝福爱心 →';
    entry.dataset.ending = String(ending);
  };
  video.addEventListener('timeupdate', highlight);
  video.addEventListener('ended', highlight);
  highlight();
})();

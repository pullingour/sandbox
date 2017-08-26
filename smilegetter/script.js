// http://smile-cln57.nicovideo.jp/smile?m=27322846.9361low
// popup version
{const x=document.getElementById('MainVideoPlayer');const y=x.innerHTML;const z=y.toString();let url=z.substring(129);url=url.slice(0,-10);window.open(url,'_blank');}

// alert version
{const x=document.getElementById('MainVideoPlayer');const y=x.innerHTML;const z=y.toString();let url=z.substring(129);alert(url.slice(0,-10));}
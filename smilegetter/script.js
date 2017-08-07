// popup version
{const x = document.getElementById('MainVideoPlayer');const y = x.innerHTML;const z = y.toString();let url = z.substring(153);url = url.slice(0,-10);window.open(url, '_blank');}

// alert version
{const x = document.getElementById('MainVideoPlayer');const y = x.innerHTML;const z = y.toString();let url = z.substring(153);alert(url.slice(0,-10));}
const fs = require('fs');
const src = fs.readFileSync(process.argv[2], 'utf8');
const a = 'userHtml\\x22:\\x22';
const b = '\\x22,\\x22ncc\\x22';
const i = src.indexOf(a);
const j = src.indexOf(b, i);
if (i < 0 || j < 0) { console.error('anchors not found'); process.exit(1); }
const raw = src.slice(i + a.length, j);
const s1 = new Function('return "' + raw + '"')();
const html = JSON.parse('"' + s1 + '"');
if (!html.includes('Command Centre') || !html.includes('</html>')) { console.error('extract bad'); process.exit(1); }
fs.writeFileSync(process.argv[3], html);
console.log('OK bytes=' + Buffer.byteLength(html));

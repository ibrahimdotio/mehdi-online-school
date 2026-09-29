const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const root = path.join(__dirname, '..', 'docs');
function boot(email) {
  const dom = new JSDOM(fs.readFileSync(path.join(root,'index.html'),'utf8'), {url:'https://example.test/mehdi-online-school/',runScripts:'outside-only'});
  const { window:w }=dom;
  w.matchMedia=()=>({matches:false,addEventListener(){}});
  w.fetch=()=>{throw new Error('No network transmission permitted in preview');};
  w.eval(fs.readFileSync(path.join(root,'config.js'),'utf8'));
  if(email!==undefined)w.SCHOOL_CONFIG={recipientEmail:email};
  w.eval(fs.readFileSync(path.join(root,'app.js'),'utf8') + '\nwindow.__englishKeys = Object.keys(english);');
  return {dom,w,d:w.document};
}
function fill(d) {
 d.getElementById('parent-name').value='Test Parent';
 d.getElementById('parent-email').value='parent@example.com';
 d.getElementById('subject').value='maths';
 d.getElementById('learning-goal').value='<script>not executable</script> Fractions';
}
test('language switching translates every marked element and preserves form entries',()=>{
 const {dom,d,w}=boot();fill(d);
 d.getElementById('language').click();
 assert.equal(d.documentElement.lang,'en');
 for(const n of d.querySelectorAll('[data-i18n]'))assert.ok(w.__englishKeys.includes(n.dataset.i18n),n.dataset.i18n);
 assert.match(d.querySelector('h1').textContent,/Maths & science/);
 assert.equal(d.getElementById('parent-name').value,'Test Parent');
 d.getElementById('language').click();assert.equal(d.documentElement.lang,'ja');
 dom.window.close();
});
test('placeholder form makes a draft, never a sent confirmation or mailto',()=>{
 const {dom,d}=boot('hello@mehdionlineschool.example');fill(d);d.getElementById('language').click();
 d.getElementById('prepare-enquiry').click();
 assert.equal(d.getElementById('enquiry-result').hidden,false);
 assert.match(d.getElementById('enquiry-draft').value,/Test Parent/);
 assert.match(d.getElementById('enquiry-status').textContent,/Nothing has been sent/);
 assert.equal(d.getElementById('email-enquiry').getAttribute('href'),null);
 assert.equal(d.getElementById('email-enquiry').hidden,true);
 assert.equal(d.getElementById('preview-banner').hidden,false);
 assert.equal(d.querySelectorAll('#enquiry-result script').length,0);
 dom.window.close();
});
test('native validation prevents a draft with missing required fields',()=>{
 const {dom,d}=boot();d.getElementById('prepare-enquiry').click();
 assert.equal(d.getElementById('enquiry-result').hidden,true);dom.window.close();
});
test('a configured email creates only an explicitly activated email-app link',()=>{
 const {dom,d}=boot();fill(d);
 d.getElementById('language').click();d.getElementById('prepare-enquiry').click();
 assert.equal(d.getElementById('email-enquiry').hidden,false);
 assert.match(d.getElementById('email-enquiry').href,/^mailto:mehdi\.onlineschool@outlook\.com\?subject=/);
 assert.match(d.getElementById('delivery-note').textContent,/mehdi\.onlineschool@outlook\.com/);
 assert.match(d.getElementById('enquiry-status').textContent,/Nothing has been sent yet/);
 assert.equal(d.getElementById('preview-banner').hidden,true);dom.window.close();
});
test('math exercise feedback and reset work in both languages',()=>{
 const {dom,d}=boot();d.getElementById('language').click();
 d.querySelector('[data-answer="half"]').click();assert.match(d.getElementById('answer-feedback').textContent,/Look once more/);
 d.querySelector('[data-answer="threequarters"]').click();assert.match(d.getElementById('answer-feedback').textContent,/Exactly/);
 d.getElementById('language').click();assert.match(d.getElementById('answer-feedback').textContent,/その通り/);
 d.getElementById('reset-lesson').click();assert.equal(d.getElementById('reset-lesson').hidden,true);dom.window.close();
});
test('local links, assets and icon have valid targets',()=>{
 const {dom,d}=boot();const ids=[...d.querySelectorAll('[id]')].map(n=>n.id);assert.equal(ids.length,new Set(ids).size);
 for(const a of d.querySelectorAll('a[href^="#"]')){const v=a.getAttribute('href').slice(1);if(v)assert.ok(d.getElementById(v),v);}
 for(const n of d.querySelectorAll('img[src],script[src],link[href]')){const v=n.getAttribute('src')||n.getAttribute('href');if(/^(?:https?:|data:)/.test(v))continue;assert.ok(fs.existsSync(path.join(root,v)),v);}
 const icon=fs.readFileSync(path.join(root,'favicon.ico'));assert.equal(icon.readUInt16LE(2),1);assert.equal(icon.readUInt16LE(4),7);
 assert.ok(d.getElementById('teacher').compareDocumentPosition(d.getElementById('explore')) & 4);
 dom.window.close();
});

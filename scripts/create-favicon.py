from pathlib import Path
from PIL import Image, ImageDraw
ROOT = Path(__file__).resolve().parents[1] / 'docs'
scale = 4
im = Image.new('RGBA',(256*scale,256*scale),(0,0,0,0))
d = ImageDraw.Draw(im)
def box(v): return tuple(int(x*scale) for x in v)
d.rounded_rectangle(box((0,0,256,256)),radius=54*scale,fill='#154c41')
# An open-book M: the same clear silhouette at 16px and 256px.
d.line([box(p) for p in [(59,189),(59,78),(128,145),(197,78),(197,189)]],fill='#d7fa91',width=19*scale,joint='curve')
for x,y in [(59,189),(59,78),(197,78),(197,189)]:d.ellipse(box((x-9.5,y-9.5,x+9.5,y+9.5)),fill='#d7fa91')
d.ellipse(box((190,35,215,60)),fill='#d7fa91')
im=im.resize((256,256),Image.Resampling.LANCZOS)
im.save(ROOT/'favicon.ico',sizes=[(16,16),(24,24),(32,32),(48,48),(64,64),(128,128),(256,256)])
im.resize((180,180),Image.Resampling.LANCZOS).save(ROOT/'apple-touch-icon.png')
(ROOT/'favicon.svg').write_text('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="54" fill="#154c41"/><path d="M59 189V78l69 67 69-67v111" fill="none" stroke="#d7fa91" stroke-width="19" stroke-linecap="round" stroke-linejoin="round"/><circle cx="202.5" cy="47.5" r="12.5" fill="#d7fa91"/></svg>''')
print('Created favicon.ico with 7 sizes, SVG and Apple touch icon.')

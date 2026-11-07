const IMG={
 "wine": "img/wine.jpg",
 "lasagna": "img/lasagna.jpg",
 "steak": "img/steak.jpg",
 "chef": "img/chef.jpg",
 "panna": "img/panna.jpg",
 "basil": "img/basil.jpg",
 "cheese": "img/cheese.jpg",
 "mush": "img/mush.jpg",
 "salad": "img/salad.jpg",
 "fett": "img/fett.jpg",
 "garlic": "img/garlic.jpg",
 "pizza": "img/pizza.jpg",
 "int2": "img/int2.jpg",
 "int1": "img/int1.jpg",
 "caprese": "img/caprese.jpg",
 "spag": "img/spag.jpg",
 "tom": "img/tom.jpg",
 "drink": "img/drink.jpg",
 "tira": "img/tira.jpg"
};
const P={arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/>',phone:'<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z"/>',chef:'<path d="M6 14a4 4 0 012-7.5 4 4 0 018 0A4 4 0 0118 14v6H6z"/><path d="M6 17h12"/>',leaf:'<path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.500-4.800 10-10 10z"/><path d="M2 21c0-3 2-5.500 6-7"/>',wine:'<path d="M8 22h8M12 15v7M5 3h14l-1 7a6 6 0 01-12 0z"/>',insta:'<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.500 6.500h.01"/>',fb:'<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>',yt:'<path d="M2.500 17a24 24 0 010-10 2 2 0 011.400-1.400 49 49 0 0116.200 0A2 2 0 0121.500 7a24 24 0 010 10 2 2 0 01-1.400 1.400 49 49 0 01-16.200 0A2 2 0 012.500 17z"/><path d="M10 15l5-3-5-3z"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',x:'<path d="M18 6L6 18M6 6l12 12"/>',play:'<path d="M7 4l13 8-13 8z" fill="currentColor"/>'};
const ic=n=>`<svg class="ic" viewBox="0 0 24 24">${P[n]}</svg>`,bt=(b,c)=>b?`<a class="btn ${c||''}" style="margin-top:26px" href="#${b[1]}">${b[0]} ${ic('arrow')}</a>`:'';
const X={mq:(a,d)=>`<div class="mq"><div class="mt" data-d="${d||1}">${a.map(t=>`<span>${t}</span><em>✦</em>`).join('').repeat(5)}</div></div>`,
feat:(i,e,h,t,b,r)=>`<section class="s"><div class="w sp${r?' rev':''}"><div class="ph pz rv cl" style="aspect-ratio:4/5"><img src="${IMG[i]}" alt=""></div><div class="rv"><div class="ey">${e}</div><h2>${h}</h2><p>${t}</p>${bt(b)}</div></div></section>`,
story:(e,h,st)=>`<section class="s dk"><div class="w"><div style="margin-bottom:40px"><div class="ey">${e}</div><h2>${h}</h2></div><div class="sty"><div class="stk"><div class="ph">${st.map((x,i)=>`<img class="${i?'':'on'}" src="${IMG[x[2]]}" alt="">`).join('')}</div></div><div>${st.map((x,i)=>`<div class="stp${i?'':' on'}" data-k="${i}"><b>0${i+1}</b><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div></div></div></section>`,
faq:q=>`<section class="s"><div class="w" style="max-width:820px"><div style="text-align:center;margin-bottom:30px"><div class="ey">Good to know</div><h2>Questions, answered</h2></div>${q.map(x=>`<details class="rv"><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join('')}</div></section>`,
cards:(e,h,c)=>`<section class="s"><div class="w"><div style="text-align:center;margin-bottom:36px"><div class="ey">${e}</div><h2>${h}</h2></div><div class="g3">${c.map(x=>`<div class="cd rv">${ic(x[0])}<h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div></div></section>`,
tz:k=>`<section class="s"><div class="w"><div class="ey">Gallery</div><h2>A taste in pictures</h2><div class="tz">${k.map(x=>`<div class="ph cl rv"><img src="${IMG[x]}" alt=""></div>`).join('')}</div>${bt(['View More Photos','gallery'],'gh')}</div></section>`,
cta:t=>`<section class="s" style="padding-top:0"><div class="w"><div class="ban rv"><div><h2>${t}</h2></div><div><a class="btn cr" href="#reservation">Book a Table ${ic('arrow')}</a></div></div></div></section>`};
document.querySelectorAll('[data-x]').forEach(e=>{const a=JSON.parse(e.dataset.x);e.outerHTML=X[a[0]](...a.slice(1))});
document.querySelectorAll('[data-ic]').forEach(e=>e.outerHTML=`<svg class="ic" viewBox="0 0 24 24">${P[e.dataset.ic]}</svg>`);
document.querySelectorAll('[data-leaf]').forEach(e=>e.innerHTML='<svg viewBox="0 0 60 60"><path d="M6 54C4 24 24 4 54 6C56 36 36 56 6 54z" fill="#3f7d34"/><path d="M8 52L46 14" stroke="#9bd07f" stroke-width="2"/></svg>');
document.querySelectorAll('[data-colo]').forEach(e=>{let s='<svg viewBox="0 0 400 150" fill="none" stroke="#042C1E" stroke-width="1.5">';for(let r=0;r<3;r++){for(let i=0;i<10;i++){s+=`<path d="M${10+i*38} ${140-r*42}v-24a15 15 0 0130 0v24"/>`}s+=`<path d="M6 ${140-r*42}h388"/>`}e.innerHTML=s+'</svg>'});
document.querySelectorAll('img[data-i]').forEach(i=>i.src=IMG[i.dataset.i]);
const D=[['Margherita Pizza','pizza',650,'Tomato, fior di latte and fresh basil on a wood-fired base.','pizza','Vegetarian'],['Spaghetti Pomodoro','pasta',690,'Spaghetti, slow tomato sauce, basil and parmesan.','spag','Vegetarian'],['Alfredo Pasta','pasta',720,'Fettuccine in a silky parmesan cream.','fett','Vegetarian'],['Lasagna Classico','pasta',850,'Layers of pasta, ragù and béchamel, baked golden.','lasagna','Signature'],['Caesar Salad','salad',480,'Crisp leaves, parmesan shavings and house dressing.','salad',''],['Caprese Salad','salad',520,'Ripe tomato, mozzarella, basil and balsamic.','caprese','Vegetarian'],['Bistecca alla Griglia','main',1450,'Grilled steak with rosemary and roasted vegetables.','steak','Chef’s pick'],['Tiramisu','dessert',420,'Espresso-soaked layers with mascarpone and cocoa.','tira','Vegetarian'],['Panna Cotta','dessert',380,'Vanilla cream with a red berry sauce.','panna','Vegetarian'],['Berry Spritz','beverage',350,'Red berries, mint and ice, served long.','drink',''],['Rosso Wine Glass','beverage',600,'A glass of Italian red from our cellar.','wine','']];
const card=(d,i,sm)=>`<article class="dish" style="animation-delay:${i*.05}s"><div class="ph"><img src="${IMG[d[4]]}" alt="${d[0]}"></div><div class="tx"><div class="t"><span>${d[0]}</span><b>৳${d[2]}</b></div>${sm?'':`<p>${d[3]}</p>`}<small>${d[1]}</small>${d[5]?`<small style="color:var(--r)">${d[5]}</small>`:''}</div></article>`;
document.getElementById('pop').innerHTML=['Margherita Pizza','Alfredo Pasta','Lasagna Classico','Caesar Salad','Tiramisu'].map((n,i)=>card(D.find(d=>d[0]==n),i,1)).join('');
const cats=['all','pizza','pasta','salad','main','dessert','beverage'],tb=document.getElementById('tabs'),mg=document.getElementById('mg');
tb.innerHTML=cats.map((c,i)=>`<button class="tab${i?'':' on'}" data-c="${c}">${c=='all'?'All':c=='main'?'Main Course':c[0].toUpperCase()+c.slice(1)}</button>`).join('');
const show=c=>mg.innerHTML=D.filter(d=>c=='all'||d[1]==c).map(card).join('');show('all');
tb.onclick=e=>{const b=e.target.closest('.tab');if(!b)return;tb.querySelectorAll('.tab').forEach(t=>t.classList.toggle('on',t==b));show(b.dataset.c)};
const gl=['int2','spag','pizza','chef','tira','steak','wine','caprese','int1','drink','fett','tom','salad','garlic','mush','cheese','basil'];
document.getElementById('mas').innerHTML=gl.map(k=>`<div class="ph" data-k="${k}"><img src="${IMG[k]}" alt="The Italia gallery"></div>`).join('');
const lb=document.getElementById('lb');document.getElementById('mas').onclick=e=>{const p=e.target.closest('.ph');if(p){lb.firstElementChild.src=IMG[p.dataset.k];lb.classList.add('on')}};lb.onclick=()=>lb.classList.remove('on');addEventListener('keydown',e=>e.key=='Escape'&&lb.classList.remove('on'));
// forms
const gs=document.querySelector('[name=g]'),tm=document.getElementById('tm'),dt=document.getElementById('dt');
gs.innerHTML=[1,2,3,4,5,6,7,8].map(n=>`<option>${n} guest${n>1?'s':''}</option>`).join('')+'<option>9+ guests</option>';
for(let h=12;h<=22;h++)for(const m of['00','30']){if(h==22&&m=='30'&&0)continue;tm.add(new Option(`${h>12?h-12:h}:${m} ${h>=12?'PM':'AM'}`))}
dt.min=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);
for(const f of document.querySelectorAll('form'))f.onsubmit=e=>{e.preventDefault();const o=f.querySelector('.ok');
if(!f.checkValidity()){f.reportValidity();o.style.color='var(--r)';o.textContent='Please complete the highlighted fields.';return}
o.style.color='';o.textContent=f.id=='rf'?`Thank you! We’ve noted a table for ${f.g.value} on ${f.d.value} at ${f.t.value}.`:'Thank you! Your message has been noted.';f.reset()};
// router + effects
const V=[...document.querySelectorAll('.v')],nav=document.getElementById('nav');
function go(){const h=(location.hash||'#home').slice(1),id=V.some(v=>v.id==h)?h:'home';V.forEach(v=>v.classList.toggle('act',v.id==id));
document.querySelectorAll('#lk a').forEach(a=>a.classList.toggle('on',a.hash=='#'+id));nav.classList.remove('open');scrollTo(0,0);document.title=(id=='home'?'':id[0].toUpperCase()+id.slice(1)+' · ')+'The Italia';io.takeRecords();document.querySelectorAll('.v.act .rv').forEach(e=>{e.classList.remove('in');io.observe(e)});}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);e.target.querySelectorAll('[data-n]').forEach(cnt)}}),{threshold:.12});
function cnt(b){if(rm)return;const n=+b.dataset.n,f=+b.dataset.f||0,t0=performance.now(),st=t=>{const p=Math.min(1,(t-t0)/1400);b.textContent=(n*(1-Math.pow(1-p,3))).toFixed(f)+b.dataset.s;p<1&&requestAnimationFrame(st)};requestAnimationFrame(st)}
document.querySelectorAll('.g3,.g4,.strip,.stat').forEach(g=>[...g.children].forEach((c,i)=>{if(c.classList.contains('rv')&&!c.style.transitionDelay)c.style.transitionDelay=i*.1+'s'}));
document.querySelectorAll('.sp').forEach(p=>{const a=p.firstElementChild,b=p.lastElementChild;a.classList.add('rv',p.classList.contains('rev')?'rr':'rl');b.classList.add('rv',p.classList.contains('rev')?'rl':'rr')});
document.querySelectorAll('.mas .ph,.strip .ph').forEach(p=>p.classList.add('rv','cl'));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const w=e.target.closest('.sty');w.querySelectorAll('.stp').forEach(x=>x.classList.toggle('on',x==e.target));w.querySelectorAll('.stk img').forEach((m,i)=>m.classList.toggle('on',i==+e.target.dataset.k))}}),{rootMargin:'-45% 0px -45% 0px'});
document.querySelectorAll('.stp').forEach(x=>so.observe(x));
addEventListener('hashchange',go);go();
document.getElementById('hb').onclick=()=>nav.classList.toggle('open');
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
let tk=0;const pb=document.getElementById('pb');
function sc(){tk=0;const y=scrollY;nav.classList.toggle('sc2',y>20);pb.style.width=y/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100+'%';if(rm)return;
document.querySelectorAll('.v.act .mt').forEach(m=>{const r=m.parentElement.getBoundingClientRect();m.style.transform=`translateX(${(r.top-innerHeight/2)*.6*(m.dataset.d||1)}px)`});
document.querySelectorAll('.v.act .pz').forEach(p=>{const r=p.getBoundingClientRect();p.style.setProperty('--py',(r.top+r.height/2-innerHeight/2)*-.09+'px')});
document.querySelectorAll('.v.act [data-par]').forEach(e=>e.style.setProperty('--py',y*.05+'px'))}
addEventListener('scroll',()=>{tk||(tk=requestAnimationFrame(sc))},{passive:true});sc();
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!rm){const d=document.createElement('div'),r=document.createElement('div');d.id='cd';r.id='cr';document.body.append(d,r);document.body.classList.add('cur');
let x=-99,y=-99,rx=-99,ry=-99,lx=0,ly=0;
addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;d.style.translate=x+'px '+y+'px';
if(Math.hypot(x-lx,y-ly)>36){lx=x;ly=y;const s=document.createElement('i');s.className='sp';s.style.left=x+'px';s.style.top=y+'px';s.style.setProperty('--dx',(Math.random()*44-22)+'px');s.style.setProperty('--dy',(Math.random()*44-8)+'px');document.body.append(s);setTimeout(()=>s.remove(),900)}
const t=e.target;r.classList.toggle('hv',!!t.closest('a,button,summary,.tab,.ph,select'));r.classList.toggle('tx',!!t.closest('input,textarea'))});
addEventListener('mousedown',()=>r.classList.add('dn'));addEventListener('mouseup',()=>r.classList.remove('dn'));
document.addEventListener('mouseleave',()=>{d.style.opacity=r.style.opacity=0});document.addEventListener('mouseenter',()=>{d.style.opacity=r.style.opacity=1});
(function lp(){rx+=(x-rx)*.16;ry+=(y-ry)*.16;r.style.translate=rx+'px '+ry+'px';requestAnimationFrame(lp)})()}

if(!rm){const l=document.createElement('div');l.id='ld';l.innerHTML='<span>The Italia</span><s></s>';document.body.append(l);setTimeout(()=>l.remove(),2500);
document.querySelectorAll('h2').forEach(h=>{h.classList.add('h2l');if(getComputedStyle(h).textAlign=='center')h.classList.add('c')});
const ho=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ho.unobserve(e.target)}}),{threshold:.6});document.querySelectorAll('h2').forEach(h=>ho.observe(h));
addEventListener('click',e=>{const s=document.createElement('i');s.className='rp';s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';document.body.append(s);setTimeout(()=>s.remove(),700)});
addEventListener('scroll',()=>document.querySelectorAll('.fl').forEach((f,i)=>f.style.transform=`rotate(${scrollY*(i?-.2:.2)}deg)`),{passive:true});
if(matchMedia('(hover:hover)').matches){addEventListener('mousemove',e=>{const b=e.target.closest('.btn');document.querySelectorAll('.btn.mg').forEach(x=>{if(x!=b){x.classList.remove('mg');x.style.translate=''}});if(b){b.classList.add('mg');const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.18}px ${(e.clientY-r.top-r.height/2)*.28}px`}
const hp=document.querySelector('.hp'),x=(e.clientX/innerWidth-.5)*-24,y=(e.clientY/innerHeight-.5)*-24;if(hp){hp.style.translate=x+'px '+y+'px';document.querySelectorAll('.hero .fl').forEach((f,i)=>f.style.marginLeft=x*(i?-1.5:1.5)+'px')}})}}

document.querySelectorAll('.pg').forEach(p=>{const q=p.querySelector('.pi'),i=q&&q.querySelector('img');if(!i)return;p.style.backgroundImage=`linear-gradient(90deg,rgba(1,21,15,.93) 0%,rgba(1,21,15,.6) 55%,rgba(1,21,15,.3) 100%),url("${IMG[i.dataset.i]}")`;p.setAttribute('data-par','');q.remove()});
const bks=['tom','int1','wine','pizza','chef'];document.querySelectorAll('.ban').forEach((b,i)=>b.style.backgroundImage=`linear-gradient(90deg,rgba(4,44,30,.96) 20%,rgba(4,44,30,.6)),url("${IMG[bks[i%5]]}")`);

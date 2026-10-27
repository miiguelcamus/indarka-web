(function(){
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
var fine=matchMedia('(hover:hover) and (pointer:fine)').matches,RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var b=$('.burger'),m=$('.menu');b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var g={};new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Madrid',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date()).forEach(function(p){g[p.type]=p.value});
var d={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[g.weekday],t=(+g.hour%24)*60+ +g.minute;
var H={1:[960,1260],2:[420,1260],3:[480,1260],4:[420,1260],5:[480,1110]},h=H[d],open=!!h&&t>=h[0]&&t<h[1];
var lv=$('#live');if(lv){lv.textContent=open?'Abierto ahora · Sopela':'Ahora cerrado · escríbenos por WhatsApp';lv.style.setProperty('--c',open?'#2f9e44':'#e5412f')}
$$('[data-d="'+d+'"]').forEach(function(x){x.classList.add('today')});
if(fine&&!RM)$$('.mag').forEach(function(el){el.addEventListener('mousemove',function(e){var r=el.getBoundingClientRect();el.style.transform='translate('+(e.clientX-r.left-r.width/2)*.2+'px,'+(e.clientY-r.top-r.height/2)*.3+'px)'});el.addEventListener('mouseleave',function(){el.style.transform=''})});
function count(el){var to=+el.dataset.count,dec=+(el.dataset.dec||0),s=null;function f(ts){if(!s)s=ts;var k=Math.min((ts-s)/1300,1),v=to*(1-Math.pow(1-k,3));el.textContent=dec?v.toFixed(dec).replace('.',','):Math.round(v);if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');if(x.target.dataset.count)count(x.target);io.unobserve(x.target)}})},{threshold:.15});
$$('.q,.g,.srow,.pillars li,.soc,.finder').forEach(function(el,i){el.classList.add('reveal');el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)});$$('[data-count]').forEach(function(el){io.observe(el)})}
else $$('[data-count]').forEach(function(el){el.textContent=el.dataset.count});
var fcs=$$('.fc');fcs.forEach(function(c){c.addEventListener('click',function(){fcs.forEach(function(x){x.classList.toggle('on',x===c)});$$('.fp').forEach(function(p){p.hidden=p.dataset.k!==c.dataset.k});if(innerWidth<1021){var p=$('.fp[data-k="'+c.dataset.k+'"]');p.scrollIntoView({behavior:'smooth',block:'nearest'})}})});
var lb=$('.lb');if(lb){var im=$('img',lb);$$('.g').forEach(function(x){x.addEventListener('click',function(){im.src=x.dataset.src;lb.hidden=false})});lb.addEventListener('click',function(){lb.hidden=true});addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true})}
})();

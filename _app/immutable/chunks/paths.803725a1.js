import{n as b,s as p}from"./scheduler.7a274a43.js";const e=[];function d(o,l=b){let i;const n=new Set;function r(t){if(p(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(o))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(i=l(r,u)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_11x5ucy)==null?void 0:f.base)??"/portfolio-website";var a;const q=((a=globalThis.__sveltekit_11x5ucy)==null?void 0:a.assets)??h;export{q as a,h as b,d as w};

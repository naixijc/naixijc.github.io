const menuTrigger=document.querySelector('#navigation-toggle');
const navigation=document.querySelector('#site-navigation');
menuTrigger?.addEventListener('click',()=>{const open=menuTrigger.getAttribute('aria-expanded')!=='true';menuTrigger.setAttribute('aria-expanded',String(open));navigation.dataset.open=String(open);});
navigation?.addEventListener('click',event=>{if(event.target.closest('a')){menuTrigger.setAttribute('aria-expanded','false');delete navigation.dataset.open;}});
const panel=document.querySelector('#service-notice');
if(panel&&typeof panel.showModal==='function'){
 let seconds=Math.max(0,Number(panel.dataset.delay)||0);
 const dismissal=panel.querySelector('#notice-dismiss');
 const label=dismissal.querySelector('span');
 const allowed=()=>{dismissal.disabled=false;dismissal.textContent='关闭弹窗，继续阅读';};
 panel.addEventListener('cancel',event=>{if(seconds>0)event.preventDefault();});
 dismissal.addEventListener('click',()=>{if(seconds===0)panel.close();});
 panel.showModal();
 if(seconds===0)allowed();else{const ticker=setInterval(()=>{seconds=Math.max(0,seconds-1);label.textContent=String(seconds);if(seconds===0){clearInterval(ticker);allowed();}},1000);}
}
const animatedPanels=document.querySelectorAll('.task-board,.player-demo,.prompt-paper');
if('IntersectionObserver' in window){const motionObserver=new IntersectionObserver(entries=>{for(const entry of entries)entry.target.classList.toggle('page-hidden-animation',!entry.isIntersecting);});animatedPanels.forEach(element=>motionObserver.observe(element));}
document.addEventListener('visibilitychange',()=>{document.documentElement.classList.toggle('page-hidden-animation',document.hidden);});

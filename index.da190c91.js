var e=document.querySelector(".logo"),n=document.createElement("div"),t=document.createElement("div");n.innerHTML="Promise was resolved!",n.classList.toggle("message"),t.innerHTML="Promise was rejected!",t.classList="message error-message";var o=new Promise(function(n,t){e.addEventListener("click",function(){n()})}),c=new Promise(function(e,n){setTimeout(function(){n(Error())},3e3)}),i=function(){document.body.appendChild(n)},r=function(){document.body.appendChild(t)};o.then(i).catch(r),c.then(i).catch(r);
//# sourceMappingURL=index.da190c91.js.map

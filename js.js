javascript:(function(){
    for(let i=0;i<9999999999;i++){
        const c=document.createElement('canvas');
        c.width=c.height=1;
        document.body.appendChild(c);
        const ctx=c.getContext('2d');
        function loop(){ctx.fillRect(0,0,1,1);requestAnimationFrame(loop);}
        loop();
    }
})();   

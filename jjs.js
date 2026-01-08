javascript:(function(){
    const div = document.createElement('div');
    div.style.cssText = 'backdrop-filter: blur(1px);position:fixed;top:0;left:0;width:100%;height:100%;';
    for(let i=0;i<1000;i++)document.body.appendChild(div.cloneNode());
})();   

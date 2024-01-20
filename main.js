function resolveNetease(text){
    var template = "<iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86 src=\"https://music.163.com/outchain/player?type=2&id=#ID#&auto=1&height=66\"></iframe>"    
    if(text.startsWith("https://music.163.com/#/song?id=")){
        var songid = parseInt(text.slice(32));
    }else{
        return false
    }
    return template.replace("#ID#",songid)
}
function scrollToEnd(){
    window.scrollTo(0,document.body.scrollHeight);
}
function neteaseHook(...args){
    var rawel = args[0];
    var parsed=resolveNetease(rawel.innerHTML);
    if(!!parsed){
        rawel.innerHTML=parsed
    }
    setTimeout(scrollToEnd,200);
    return args
}


hook.register("after","pushmessage",neteaseHook)

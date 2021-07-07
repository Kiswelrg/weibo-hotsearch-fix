    console.log("here");

    window.onscroll = function(){
        chrome.storage.sync.get(['usage'], function(result) {
            usage = result.usage;
            console.log(usage);
            if(usage == 'true'){
                let a = getComputedStyle(document.documentElement).getPropertyValue('--weibo-top-nav-height');
                let b = getComputedStyle(document.documentElement).getPropertyValue('--frame-mod-gap-space');
                a = parseInt(a.substring(0,a.length-2));
                b = parseInt(b.substring(0,b.length-2));
                let c = document.getElementsByClassName("Side_sideBox_2G3FX");
                c[0].style.top = (a+b).toString(10).concat("px");
            }
        });
        
    }

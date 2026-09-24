/* =========================================
   META PIXEL CONFIGURATION
========================================= */

/*
    The Meta Pixel ID will be provided by
    the client's social media manager.

    Example:

    const META_PIXEL_ID = "123456789012345";

    Do NOT add a real ID until it is provided.
*/

const META_PIXEL_ID = "";


/* =========================================
   META PIXEL INITIALIZATION
========================================= */

if (META_PIXEL_ID) {

    !function(f,b,e,v,n,t,s)
    {
        if(f.fbq)return;

        n=f.fbq=function(){
            n.callMethod ?
            n.callMethod.apply(n,arguments) :
            n.queue.push(arguments)
        };

        if(!f._fbq)f._fbq=n;

        n.push=n;
        n.loaded=!0;
        n.version="2.0";
        n.queue=[];

        t=b.createElement(e);
        t.async=!0;
        t.src=v;

        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s);

    }(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
    );

    fbq("init", META_PIXEL_ID);
    fbq("track", "PageView");

}
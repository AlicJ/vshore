var textHome = "Home";
var textHelp = "Help"
var textAbout = "About Us"
var textJoin = "Join Us"
var textContact = "Contact Us"
var textAccount = "Your Account"
var textPrivacy = "Privacy"
var textAgreement = "Terms"

function appAlert(){
	alert("Sorry, the app is still under development, please stay tuned.");
}

var picCounter = 1;
var iPhonePic = window.setInterval(function(){
	if(picCounter == 5){
		picCounter = 1;
		$('.picSlide').fadeOut(1500);
	}else{
		$('.slide' + picCounter).fadeIn(1500);
		picCounter ++;
	}
},4000);

$(document).ready(function(){
    $('body').append('\
        <!-- Facebook like button -->\
        <div id="fb-root"></div>\
        <script>(function(d, s, id) {\
          var js, fjs = d.getElementsByTagName(s)[0];\
          if (d.getElementById(id)) return;\
          js = d.createElement(s); js.id = id;\
          js.src = "//connect.facebook.net/zh_CN/all.js#xfbml=1";\
          fjs.parentNode.insertBefore(js, fjs);\
        }(document, \'script\', \'facebook-jssdk\'));</script>\
        <!-- end of facebook -->\
		\
		<!-- Google Analytics -->\
			<script>\
				(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\
				})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\
				\
				ga(\'create\', \'UA-42112638-1\', \'vshore.com\');\
				ga(\'send\', \'pageview\');\
			</script>\
		<!-- End of Google Analytics -->\
    ');
    
    //output the header
    $('.header').append('\
    	<a class="logo" href="index.html" alt="Vshore logo"></a>\
        <div class="menu fr"></div>\
	');
    switch(currentPage){
        case 1:
            $('.header .menu').append('\
                    <span class="lk on"><a href="index.html">'+textHome+'</a></span>\
                    <span class="lk"><a href="aboutus.html">'+textAbout+'</a></span>\
                    <span class="lk"><a href="joinus.html">'+textJoin+'</a></span>\
                    <span class="lk last"><a href="contactus.html">'+textContact+'</a></span>\
            ');
            break;
        case 2:
            $('.header .menu').append('\
                    <span class="lk"><a href="index.html">'+textHome+'</a></span>\
                    <span class="lk on"><a href="aboutus.html">'+textAbout+'</a></span>\
                    <span class="lk"><a href="joinus.html">'+textJoin+'</a></span>\
                    <span class="lk last"><a href="contactus.html">'+textContact+'</a></span>\
            ');
            break;
        case 3:
            $('.header .menu').append('\
                    <span class="lk"><a href="index.html">'+textHome+'</a></span>\
                    <span class="lk"><a href="aboutus.html">'+textAbout+'</a></span>\
                    <span class="lk on"><a href="joinus.html">'+textJoin+'</a></span>\
                    <span class="lk last"><a href="contactus.html">'+textContact+'</a></span>\
            ');
            break;
        case 4:
            $('.header .menu').append('\
                    <span class="lk"><a href="index.html">'+textHome+'</a></span>\
                    <span class="lk"><a href="aboutus.html">'+textAbout+'</a></span>\
                    <span class="lk"><a href="joinus.html">'+textJoin+'</a></span>\
                    <span class="lk on last"><a href="contactus.html">'+textContact+'</a></span>\
            ');
            break;
        default:
            $('.header .menu').append('\
                    <span class="lk"><a href="index.html">'+textHome+'</a></span>\
                    <span class="lk"><a href="aboutus.html">'+textAbout+'</a></span>\
                    <span class="lk"><a href="joinus.html">'+textJoin+'</a></span>\
                    <span class="lk last"><a href="contactus.html">'+textContact+'</a></span>\
            ');
    }
	

	//output the footer
    $('.footerGrey').append('\
		<div class="footerContent">\
			<div class="like twitter">\
				<a href="https://twitter.com/vshoreLLC" class="twitter-follow-button" data-show-count="true" data-show-screen-name="false" data-lang="en">Follow</a>\
				<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>\
			</div>\
			<div class="like facebook">\
				<div class="fb-like" data-href="https://www.facebook.com/pages/VshoreLLC/640181539342469" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>\
			</div>\
		</div>\
	');
    switch (currentPage){
        case 5:
            $('.footerContent').append('\
                <div class="footerLinks">\
                    <span class="on"><a href="privacy.html">'+textPrivacy+'</a></span>\
                    <span><a href="useragreement.html">'+textAgreement+'</a></span>\
                </div>\
            ');
			console.log("case5")
            break;
        case 6:
            $('.footerContent').append('\
                <div class="footerLinks">\
                    <span><a href="privacy.html">'+textPrivacy+'</a></span>\
                    <span class="on"><a href="useragreement.html">'+textAgreement+'</a></span>\
                </div>\
            ');
			console.log("case6")
            break;
        default:
            $('.footerContent').append('\
                <div class="footerLinks">\
                    <span><a href="privacy.html">'+textPrivacy+'</a></span>\
                    <span><a href="useragreement.html">'+textAgreement+'</a></span>\
                </div>\
            ');
			console.log("This is default!")
    }
    
    $('.footerLinks').append('\
        <span><a href="">© 2013-2014 Vshore Tech</a></span>\
    ');

});



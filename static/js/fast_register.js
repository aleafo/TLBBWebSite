$('#cn,#securityPhone,#email').bind("click",function(){ 
	montiorAction(this.id); 
}); 
 
var triggerNum = 0; 
function montiorAction(id) { 
	triggerNum = triggerNum + 1; 
	if (triggerNum < 2) { 
		logWillingTime(id); 
	} 
} 

function logWillingTime(id) {
	$.ajaxSettings.async = false;
	$.getJSON("http://zhuce.changyou.com/baseReg/regQMBehavLog.act?gameType=" + $('#gametype').val() + "&id=" + id + '&callback=?',
    function(json) {
    	
    });
}

function asyncEmailSubmit(cn) {
	$.ajaxSettings.async = false;
	$.getJSON("http://zhuce.changyou.com/baseReg/regQMBehavSubLog.act?gameType=" + $('#gametype').val() + "&id=email" + "&cn=" + cn + '&callback=?',
    function(json) {
    	
    });
}
function asyncPersonSubmit(cn) {
	$.ajaxSettings.async = false;
	$.getJSON("http://zhuce.changyou.com/baseReg/regQMBehavSubLog.act?gameType=" + $('#gametype').val() + "&id=cn" + "&cn=" + cn + '@changyou.com' + '&callback=?',
    function(json) {
    	
    });
}
function asyncPhoneSubmit(cn) {
	$.ajaxSettings.async = false;
	$.getJSON("http://zhuce.changyou.com/baseReg/regQMBehavSubLog.act?gameType=" + $('#gametype').val() + "&id=securityPhone" + "&cn=" + cn + '&callback=?',
    function(json) {
    	
    });
}
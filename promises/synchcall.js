function notifyall(fnsms,fnemail)
{
	console.log("notifyall all called");
	fnsms();
	fnemail();
}
notifyall(
function(){ console.log("sms sent");},
function(){ console.log("email sent");}
);

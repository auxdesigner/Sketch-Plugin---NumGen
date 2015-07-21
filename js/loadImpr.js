var loadText = function(){
	for (var i = 0, l = [selection count]; i < l; i++) {
		var layer = selection[i];
		var randomNum = (Math.random() * (100000 - 800) + 800).toFixed(0);


		function numberWithCommas(randomNum) {
		    var parts = randomNum.toString().split(".");
		    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		    return parts.join(".");
		}


		[layer setStringValue: "" + numberWithCommas(randomNum)];
		[layer setName: "" + randomNum];
		[layer adjustFrameToFit];	
	}
	tools.checkPluginUpdate();
};
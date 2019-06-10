window.onload = function(){
	for(var i = 0; i < srr.length; i++) {
				var oSrc = srr[i].src;
				var oName = srr[i].name;
				var oInf = srr[i].inf;
				var path = 'img/koala/2.jpg';

				var str = `<div class="goods">
			  <img src="${oSrc}" class="gPic"/>
			   <div id="f1">
				<h3 class="gName">${oName}</h3>
				<p class="gInf">${oInf}</p>
			</div>
			</div>`;
				document.getElementById('gBox').innerHTML += str;
				console.log(str)
			}
	
}

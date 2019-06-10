window.onload = function(){
	for(var i = 0; i < srr.length; i++) {
				var oSrc = srr[i].src;
				var oName = srr[i].name;
				var oInf = srr[i].inf;
				var oPrice = srr[i].price;
				var path = 'img/koala/2.jpg';

				var str = `<div class="goods">
			<img src="${oSrc}" class="gPic"/>
			<h4 class="gName">${oName}</h4>
			<p class="gInf">${oInf}</p>
			<div class="bottom">
				<span class="price">${oPrice}</span>
				<div class="buy"><a href="gooddel.html">立即购买</a></div>
				</div>			
		</div>`;
				document.getElementById('gBox').innerHTML += str;
				console.log(str)
			}
}

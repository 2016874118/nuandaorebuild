window.onload = function(){
	console.log('1234rt5y')
	for(var i = 0; i < srr.length; i++) {
//		alert(1)
		console.log('1234rt5y')
		console.log(srr+'1234rt5y')
				var oSrc = srr[i].src;

				var oInf = srr[i].inf;
				var oPrice = srr[i].price;
				var path = 'img/warm/list1.jpg';
				var str = `<div class="goods">
								<img src="${oSrc}" class="gPic"/>
								<p class="gInf">${oInf}</p>
								<div class="bottom">
									<span class="price">${oPrice}</span>
									<span class="buy iconfont">4 &#xe608;</span>
									</div>			
							</div>`;
				document.getElementById('bBox').innerHTML += str;
//				$('#bBox').append(str)
				console.log(str)
	}
}

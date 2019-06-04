
	// https://www.crayola.com/explore-colors/
	var colors = document.querySelector('.colorsfilter .colors').querySelectorAll('ul > li');
	var resultHTML=[];
	var result=[];
	colors.forEach(function(color){
	  resultHTML.push(color.innerHTML.normalize());
	  color.classList.remove('color-box');
	  result.push({
	    colorClass: color.className,
	    colorId: color.dataset.id,
	    colorNmae: color.innerText,
	    colorValue:  color.style.backgroundColor,
	    colorTextColor:  color.style.color,
	    colorHtml: color.innerHTML.normalize(),
	  });

	  resultHTML.push(color.innerHTML.normalize());
	})
console.log(
	resultHTML.join("\n").normalize().split('\n').join('').normalize().split('  ').join("").split('><').join('>\n\t<')
);

var test = result.map(function(item){return {name:item.colorName,class:item.colorClass,accent:item.colorTextColor,color:item.colorValue}})

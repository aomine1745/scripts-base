var flecha = document.getElementById('flecha');
var caja1 = document.getElementById('caja1');
window.onscroll = () => {
	if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
		flecha.classList.add('mostrarFlecha');
	}else{
		flecha.classList.remove('mostrarFlecha');
	}
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
		caja1.classList.remove('bounceOut');
		caja1.classList.add('bounceInLeft');
	}else{
		caja1.classList.remove('bounceInLeft');
		caja1.classList.add('bounceOut');
	}
	if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
		caja1.classList.remove('bounceInLeft');
		caja1.classList.add('bounceOut');
	}
}
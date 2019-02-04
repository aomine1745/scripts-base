var loading = document.querySelector('.loading');
window.onload = () => {
	setTimeout(()=>{
		loading.classList.add('loadingOpacity');
	}, 2000);
	setTimeout(()=>{
		loading.classList.add('ghost');
	}, 2500);
};
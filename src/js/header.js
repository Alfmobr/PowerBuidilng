




document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.getElementById('hamburguer');
    const open = document.getElementById('open');
    const closed = document.getElementById('closed');


    
function ToggleTranslate (){
	hamburguer.style.opacity = '1' ;
    hamburguer.style.transform = (hamburguer.style.transform === 'translateX(0px)') ? 'translateX(300px)' : 'translateX(0px)';
	hamburguer.style.pointerEvents = (hamburguer.style.pointerEvents === 'auto') ? 'none' : 'auto';
	open.style.display = (open.style.display === 'none') ? 'flex' : 'none';
	closed.style.display = (closed.style.display === 'block') ? 'none' : 'block';
}


open.addEventListener('click', ToggleTranslate)

closed.addEventListener('click', ToggleTranslate);


    function handleResize() {
        if (window.innerWidth >= 768) {
            hamburguer.style.display = 'flex';
            hamburguer.style.transform = 'translateX(0px)'; 
            hamburguer.style.opacity = '1'; 
            hamburguer.style.pointerEvents = 'auto'; 
            open.style.display = 'none';
            closed.style.display = 'none';
           
        } else {
            hamburguer.style.display = 'flex';
            hamburguer.style.transform = 'translateX(300px)'; 
            hamburguer.style.opacity = '1';
            hamburguer.style.pointerEvents = 'none';
            open.style.display = 'flex';
            closed.style.display = 'none';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); 
});

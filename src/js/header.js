// function toggleNav() {
  

// }

function ToggleTranslate (){
	const hamburguer = document.getElementById('hamburguer');
	const open = document.getElementById('open');
	const closed = document.getElementById('closed');
	hamburguer.style.opacity = '1' ;
    hamburguer.style.transform = (hamburguer.style.transform === 'translateX(0px)') ? 'translateX(300px)' : 'translateX(0px)';
	hamburguer.style.pointerEvents = (hamburguer.style.pointerEvents === 'auto') ? 'none' : 'auto';
	open.style.display = (open.style.display === 'none') ? 'flex' : 'none';
	closed.style.display = (closed.style.display === 'block') ? 'none' : 'block';
}

// let start = null;
// const initialPosition = 200;
// const finalPosition = 0 ;
// const duration = 10000;



// function animate (timestamp){

//     const hamburguer = document.getElementById('hamburguer');
//     hamburguer.style.opacity = (hamburguer.style.opacity === '1') ? '0' : '1';
//     hamburguer.style.pointerEvents = (hamburguer.style.pointerEvents === 'auto') ? 'none' : 'auto';
// 	if(!start) start = timestamp;
// 	const progress = timestamp - start; 
// 	const progressPorcentage = Math.min(progress / duration, 1);

// 	const translateX = initialPosition + (finalPosition - initialPosition) * progressPorcentage;

// 	hamburguer.style.transform= `translateX(${translateX}px)`;

//     if(progress < duration){
//         requestAnimationFrame(animate)
//     }
// }



const open = document.getElementById('open');
open.addEventListener('click', ToggleTranslate)


const closed = document.getElementById('closed');
closed.addEventListener('click', ToggleTranslate);
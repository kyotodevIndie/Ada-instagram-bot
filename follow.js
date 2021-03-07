let count = 0;

document.querySelectorAll('.sqdOP.L3NKy.y3zKF').forEach((item, index) => {
  setTimeout(() => {
		if(!item.classList.countains('._8A5w5')){
        	item.click();
        	count++;
			console.log(`Ada followed ${count} people!`);
		} else { 
			console.log('You already follow this person.');
    }
  }, index * 20000);
});
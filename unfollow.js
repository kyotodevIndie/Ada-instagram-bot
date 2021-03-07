let count = 0;

document.querySelectorAll('._8A5w5').forEach((item, index) => {
    setTimeout(() => {
        if(item.innerText == 'Seguindo') {
            item.click();
            document.querySelectorAll('.-Cab_').forEach(item => {
                if(item.innerText == 'Deixar de seguir') {
                    item.click();
                    count++;
                    console.log(`Ada unfollow ${count} people!`)
                }
            })
        } 
    }, index * 10000);
});
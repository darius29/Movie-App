const btns = document.querySelectorAll('.btn');
const movieList = document.querySelectorAll('.movie-list-item');


for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        movieList.forEach((movie)=> {
            if (filter === 'all'){
                movie.style.display = 'block'
            } else {
                if (movie.classList.contains(filter)){
                    movie.style.display = 'block'
                } else {
                    movie.style.display = 'none'
                }
            }
        });
        console.log("item",item);
    });
};


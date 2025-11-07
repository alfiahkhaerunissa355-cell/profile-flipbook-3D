//click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');;

pageTurnBtn.forEach((el,  index   ) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;

            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;

            }, 500)
        }
    }
})


//contact me button click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelectorAll('.btn.contact-me');

contactMeBtn.forEach(btn => {
    btn.onclick = () => {
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('turn');

                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500);

            }, (index + 1) * 200 + 200);
        });
    };
});

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//back profile button
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = (() => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
})

//open book
const coverRight = document.querySelector('.cover.cover-right');
const coverLeft = document.querySelector('.book-page.page-left');

//open right animasi
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

//open left animasi or profile
setTimeout(() => {
    coverLeft.style.zIndex = 20;
}, 3200)

//openn all
 pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 2100)
    })

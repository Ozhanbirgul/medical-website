const faqs = document.querySelectorAll(".faq-item button");
faqs.forEach(faqItem => {
    faqItem.addEventListener('click', (e) => {
        let cont = e.target.closest(".faq-item");
        if (cont.classList.contains("active")) {
            cont.classList.remove("active");
            cont.querySelector("p").style.display = "none"; // Eğer kapatıyorsak içeriği gizle
        } else {
            closeAll();
            cont.classList.add('active');
            cont.querySelector("p").style.display = "block"; // Açıyorsak içeriği göster
        }
    })
});

function closeAll() {
    faqs.forEach(faqItem => {
        let cont = faqItem.closest(".faq-item");
        cont.classList.remove('active');
        cont.querySelector("p").style.display = "none"; // Tüm içerikleri gizle
    })
};


document.addEventListener("DOMContentLoaded", function() {
    var doctorSwiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop:false,
    });


    var reviewSwiper = new Swiper('.reviews', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop:false,
    });
    

    var newSwiper = new Swiper('.mySwiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop:false,
    });

   
});


    












   



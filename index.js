fetch ('http://localhost:3000/drinks').then ((data) =>{
/*console.log(data);*/
return data.json();
}).then ((completedata)=>{
console.log(completedata);
    let data1 ="";

    /*<div class="swiper-slide"><img src="assets/363-3630618_glass-of-wine-love-hd-png-download.png"></div>*/
    for (let i = 0; i < completedata.length; i++) {
      data1 += `<div class="swiper-slide"><img src="${completedata[i].image}"/></div>`;
    }
    console.log (data1);
    document.getElementById ("images2").innerHTML=data1;
    console.log (document.getElementById ("images2"));
    var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,                                                     /*slider*/
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true,
    });

    
}).catch((err)=>{
    console.log(err);

    
})

function toggleMenu(){
  const menuToggle = document.querySelector ('.toggle')
  const navigation = document.querySelector ('.navigation')
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}
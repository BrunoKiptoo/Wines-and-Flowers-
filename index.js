fetch ('http://localhost:3000/drinks').then ((data) =>{
/*console.log(data);*/
return data.json();
}).then ((completedata)=>{

    let data1 ="";
    completedata.map((values)=>{
        data1 +=` <div class="imgBox"> 
        <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src= ${values.strImageSource}></div>
        </div>
      </div>`;
    });
    

}).catch((err)=>{
    console.log(err);

    document.getElementById ("cards").innerHTML=data1;
})
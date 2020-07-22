$(window).scroll(function(){
    if($(this).scrollTop()>=500){
        $("#navBar").addClass("noTransparrent");
    }
    else{
        $("#navBar").removeClass("noTransparrent");
    }
});

$(document).ready(function(){
    $(function(){
        $("#commentForm").validate(); 
    });
    var wow = new WOW({
      mobile:false
  });

  wow.init();
});


$(document).ready(function(){

  $("a.scroll").on('click', function(event){
      var hash = this.hash;
      $('html, body').animate({ scrollTop: $(hash).offset().top - 68 }, 800, function(){});
  });

});


document.querySelector('.btn-buy').addEventListener('click', success);

function success() {
    swal({
        title: "هل تريد شراء هذا المنتج؟",
        text: "سيتم إضافة هذا المنتج إلي سلة المشتريات!",
        icon: "success",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("سيتم إضافته إلي سلة المشتريات!", {
            icon: "success",
          });
        } else {
          swal("تم إلغاء الطلب!");
        }
      });
}
document.querySelector('.btn-buy-2').addEventListener('click', success);

function success() {
    swal({
        title: "هل تريد شراء هذا المنتج؟",
        text: "سيتم إضافة هذا المنتج إلي سلة المشتريات!",
        icon: "success",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("تمت إضافته إلي سلة المشتريات!", {
            icon: "success",
          });
        } else {
          swal("تم إلغاء الطلب!");
        }
      });
}
document.querySelector('.btn-buy-3').addEventListener('click', success);

function success() {
    swal({
        title: "هل تريد شراء هذا المنتج؟",
        text: "سيتم إضافة هذا المنتج إلي سلة المشتريات!",
        icon: "success",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("تمت إضافته إلي سلة المشتريات!", {
            icon: "success",
          });
        } else {
          swal("تم إلغاء الطلب!");
        }
      });
}
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
    const element = document.querySelector('#svg-turkiye-haritasi');
    const info = document.querySelector('.il-isimleri');
    const iframe = document.querySelector('#video');

    // şehre geldiğimizde adını gösteren script
    element.addEventListener(
      'mouseover',
      function (event) {
        if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris' && event.target.parentNode.id !== 'kuzey-kibris') {
          info.innerHTML = [
            '<div>',
            event.target.parentNode.getAttribute('data-iladi'),
            '</div>'
          ].join('');
        }
      }
    );
      
    //mouse hareketini takip eden script
    element.addEventListener(
      'mousemove',
      function (event) {
        info.style.top = event.pageY + 25 + 'px';
        info.style.left = event.pageX + 'px';
      }
    );
    
    //mouse şehirin üstünden çıkarsa il adını silen script
    element.addEventListener(
      'mouseout',
      function (event) {
        info.innerHTML = '';
      }
    );
  
    //seçile şehrin video linkini modal box içindeki frame'e gönderen script
    //aynı zamanda şehrin adını modal'in başlığına da yazdırır
    element.addEventListener(
      'click',
      function (event) {
        $('#myModal').on('hidden.bs.modal', function (e) {
          iframe.setAttribute('src', "");
        });
  
        event.preventDefault();
        if (event.target.tagName === 'path') {
          const parent = event.target.parentNode;
          const id = parent.getAttribute('id');
          console.log(id);
  
          //video linki alma
          var $videoSrc = parent.getAttribute('data-src');
          console.log($videoSrc);

          //modal title' adlandırma
          const ilAd = parent.getAttribute('data-iladi');
          document.getElementById("exampleModalLabel").innerHTML=ilAd + " Şehri Tanıtım Videosu";
          
          //videoyu frame koyan ve otomatik oynatma
          iframe.setAttribute('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  
          if (
            id === 'guney-kibris'
          ) {
            return;
          }
  
          // window.location.href = (
          //   '#'
          //   + id
          //   + '-'
          //   + parent.getAttribute('data-plakakodu')
          // );
        }
      }
    );
}


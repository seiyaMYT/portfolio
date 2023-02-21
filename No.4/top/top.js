$(function() {
  // 背景の変更  
    $('.main').bgSwitcher({
        images: ['../images_AC/back1.jpg','../images_AC/back2.jpg','../images_AC/back3.jpg'], // 切り替える背景画像を指定
        interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 500, // エフェクトの時間を指定します。
        easing: "linear" // エフェクトのイージングをlinear,swingから指定
    });

    //お知らせのオートスクロール
    $('.slick-news').slick({ //{}を入れる
      autoplay: true, //「オプション名: 値」の形式で書く
      dots: true, //複数書く場合は「,」でつなぐ
      autoplaySpeed:2000,
      slidesToScroll:1,
      // slidesToShow:2,
      centerMode:true,
      centerPadding: '15%',
      loop:true,
      arrows:true,
      
    });
   
    
    
});










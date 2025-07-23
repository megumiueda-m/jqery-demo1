$(document).ready(function () {
  $(document).on('keydown', function () {
    // 画面サイズにランダムな位置を計算
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // 円のサイズ・色をランダムに設定
    const size = Math.random() * 200 + 50;
    const color = `hsl(${Math.random() * 360}, 100%, 70%)`;

    // 円を作成して位置とスタイルを指定
    const $circle = $('<div class="circle"></div>').css({
      width: size + 'px',
      height: size + 'px',
      top: y + 'px',
      left: x + 'px',
      backgroundColor: color,
    });

    // ページに追加してアニメーション
    $('body').append($circle);

    $circle.animate(
      {
        width: size * 2,
        height: size * 2,
        opacity: 0,
        top: y - size / 2,
        left: x - size / 2,
      },
      800,
      function () {
        $(this).remove(); // 消えたら削除
      }
    );
  });
});
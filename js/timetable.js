function tab_change() {
    let tabs = $(".tab");
    $(".tab").on("click", function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        const index = tabs.index(this);
        $(".content").removeClass("show").eq(index).addClass("show");
    });
};

  const buttons = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // ボタンの切り替え
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // コンテンツの切り替え
      contents.forEach(c => c.classList.remove('active'));
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
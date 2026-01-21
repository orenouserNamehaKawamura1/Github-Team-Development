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
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        const item = question.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('.icon');

        // 初期状態：閉じる
        answer.style.display = 'none';
        icon.textContent = '＋';

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            if (isOpen) {
                // 閉じる
                item.classList.remove('open');
                answer.style.display = 'none';
                icon.textContent = '＋';
            } else {
                // 開く
                item.classList.add('open');
                answer.style.display = 'block';
                icon.textContent = '−';
            }
        });
    });
});
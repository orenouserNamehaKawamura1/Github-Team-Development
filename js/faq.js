const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const currentAnswer = question.nextElementSibling;
        const currentIcon = question.querySelector('.icon');

        // いったん全部閉じる
        questions.forEach(q => {
            const answer = q.nextElementSibling;
            const icon = q.querySelector('.icon');

            if (answer !== currentAnswer) {
                answer.style.display = 'none';
                icon.classList.remove('open');
            }
        });

        // クリックしたものを開閉
        if (currentAnswer.style.display === 'block') {
            currentAnswer.style.display = 'none';
            currentIcon.classList.remove('open');
        } else {
            currentAnswer.style.display = 'block';
            currentIcon.classList.add('open');
        }
    });
});
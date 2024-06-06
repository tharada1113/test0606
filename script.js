// ナビゲーションバーのドロップダウンメニュー (オプション)
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');

navMenu.addEventListener('click', () => {
  navLinks.forEach(link => {
    link.classList.toggle('active');
  });
});

// フォームのバリデーション (オプション)
const contactForm = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameInput.value === '') {
    alert('お名前を入力してください');
    return;
  }

  if (!validateEmail(emailInput.value)) {
    alert('メールアドレスが正しくありません');
    return;
  }

  if (messageInput.value === '') {
    alert('お問い合わせ内容を入力してください');
    return;
  }

  // ここにフォーム送信処理を記述
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)@(([\w-]+\.)+[\w-]{2,})$/i;
  return re.test(email);
}


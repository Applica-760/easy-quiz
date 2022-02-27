const quiz = [
  {
    question: '次のうち、教師あり学習はどれか',
    answers: ['k-means', '線形回帰', '主成分分析', 'チューリングテスト'],
    correct: '線形回帰'
  }, {
    question: '次のうち、モデルに再帰的な構造を持つものはどれか',
    answers: ['ROC', 'CNN', 'LSTM', 'ReLU'],
    correct: 'LSTM'
  }, {
    question: '次のうち、生成モデルと呼ばれるのは何か',
    answers: ['EMアルゴリズム', 'raspberrypi', 'Dropout', 'GAN'],
    correct: 'GAN'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//$buttonをHTMLのbuttonと紐づけ
const $button = document.getElementsByTagName('button');

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  //問題文をidを用いてquestionに変更
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  //各buttonのtextをanswersに対応
  for (let buttonIndex = 0; buttonIndex < $button.length; buttonIndex++) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  }
}
setupQuiz();

//第一問の正誤判定
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！！');
    score++;
  } else {
    window.alert('不正解...');
  }

  quizIndex++;
  if(quizIndex < quizLength) {
    //問題がまだあればこっち
    setupQuiz();
  } else {
    //問題数がもう無ければこちらを実行
    window.alert('終了！ あなたの正解数は'　+ score + '/' + quizLength + 'です！');
  }

};
for (let handlerIndex = 0; handlerIndex < $button.length; handlerIndex++) {
  $button[handlerIndex].addEventListener('click', (e) =>{
    clickHandler(e);
  });
}

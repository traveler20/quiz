// // // const question = 'ゲーム史上、最も売れたゲーム機はどれ？';

// // // const answers = [
// // //   'スーパーファミコン'
// // //   , 'PlayStation 2'
// // //   , 'ニンテンドーDS'
// // //   , 'Xbox 360'
// // // ];

// // // const correct = 'ニンテンドーDS';

// // // document.getElementById('js-question').textContent = question;

// // // //1,ボタンごとの動作を取り敢えず書いてみる
// // // // ボタンの定義と答えとの対応
// // // // document.getElementsByTagName('button')[0].textContent = answers[0];
// // // // document.getElementsByTagName('button')[1].textContent = answers[1];
// // // // document.getElementsByTagName('button')[2].textContent = answers[2];
// // // // document.getElementsByTagName('button')[3].textContent = answers[3];
// // // //
// // // // ボタン（1つめ）をクリックしたときに正解不正解が出るような構文
// // // // document.getElementsByTagName('button')[0].addEventListener('click',()=>{
// // // //   if(correct === document.getElementsByTagName('button')[0].textContent){
// // // //     window.alert('正解！');
// // // //   }else{
// // // //     window.alert('不正解！');
// // // //   }
// // // // });


// // // //2,何度も繰り返し使うものは変数で定義する
// // // const $button = document.getElementsByTagName('button');

// // // $button[0].textContent = answers[0];
// // // $button[1].textContent = answers[1];
// // // $button[2].textContent = answers[2];
// // // $button[3].textContent = answers[3];

// // // $button[0].addEventListener('click',()=>{
// // //   if(correct === $button[0].textContent){
// // //     window.alert('正解！');
// // //   }else{
// // //     window.alert('不正解！');
// // //   }
// // // });

// // // $button[1].addEventListener('click',()=>{
// // //   if(correct === document.getElementsByTagName('button')[0].textContent){
// // //     window.alert('正解！');
// // //   }else{
// // //     window.alert('不正解！');
// // //   }
// // // });

// // // $button[2].addEventListener('click',()=>{
// // //   if(correct === document.getElementsByTagName('button')[0].textContent){
// // //     window.alert('正解！');
// // //   }else{
// // //     window.alert('不正解！');
// // //   }
// // // });

// // // $button[3].addEventListener('click',()=>{
// // //   if(correct === document.getElementsByTagName('button')[0].textContent){
// // //     window.alert('正解！');
// // //   }else{
// // //     window.alert('不正解！');
// // //   }
// // // });


// // //3,リファクタリングする
// // const question = 'ゲーム史上、最も売れたゲーム機はどれ？';

// // const answers = [
// //   'スーパーファミコン'
// //   , 'PlayStation 2'
// //   , 'ニンテンドーDS'
// //   , 'Xbox 360'
// // ];

// // const correct = 'ニンテンドーDS';

// // //3-2,ここからの流れを一旦関数でまとめる
// // //定数の文字列をHTMLに反映させる
// // // document.getElementById('js-question').textContent = question;

// // const $button = document.getElementsByTagName('button');

// // //3-12二回使っている変数を一つにまとめて上で定義した
// // const buttonLength = $button.length;

// // // //3-1,繰り返してるのでletbuttonIndexを使って省略する
// // // // $button[0].textContent = answers[0];
// // // // $button[1].textContent = answers[1];
// // // // $button[2].textContent = answers[2];
// // // // $button[3].textContent = answers[3];
// // // let buttonIndex = 0;
// // // let buttonLength = $button.length;
// // // while(buttonIndex < buttonLength){
// // //   $button[buttonIndex].textContent = answers[buttonIndex];
// // //   buttonIndex++;
// // // }

// // //3-3,関数でまとめる クイズの問題文、選択肢を定義
// // const setupQuiz = () =>{
// //   //定数の文字列をHTMLに反映させる
// //   document.getElementById('js-question').textContent = question;
// //   let buttonIndex = 0;
// //   //3-11,二回使っているので一つにまとめて上で定義する
// //   // let buttonLength = $button.length;
// //   while(buttonIndex < buttonLength){
// //     $button[buttonIndex].textContent = answers[buttonIndex];
// //     buttonIndex++;
// //   }
// // }
// // setupQuiz();


// // //3-4button[]をeで省略する
// // //ボタンをクリックしたら正誤判定
// // // // $button[0].addEventListener('click',()=>{
// // // //   if(correct === $button[0].textContent){
// // // //     window.alert('正解！');
// // // //   }else{
// // // //     window.alert('不正解！');
// // // //   }
// // // // });
// // // // $button[1].addEventListener('click',()=>{
// // // //   if(correct === document.getElementsByTagName('button')[0].textContent){
// // // //     window.alert('正解！');
// // // //   }else{
// // // //     window.alert('不正解！');
// // // //   }
// // // // });
// // // // $button[2].addEventListener('click',()=>{
// // // //   if(correct === document.getElementsByTagName('button')[0].textContent){
// // // //     window.alert('正解！');
// // // //   }else{
// // // //     window.alert('不正解！');
// // // //   }
// // // // });
// // // // $button[3].addEventListener('click',()=>{
// // // //   if(correct === document.getElementsByTagName('button')[0].textContent){
// // // //     window.alert('正解！');
// // // //   }else{
// // // //     window.alert('不正解！');
// // // //   }
// // // // });
// // // $button[0].addEventListener('click',(e)=>{
// // //   if(correct === e.target.textContent){
// // //     window.alert('正解！');
// // //   }else{
// // //     window.alert('不正解！');
// // //   }
// // // });
// // // button[1].addEventListener('click',(e)=>{
// // //   if(correct === e.target.textContent){
// // //     window.alert('正解！');
// // //   }else{
// // //     window.alert('不正解！');
// // //   }
// // // });
// // // button[2].addEventListener('click',(e)=>{
// // //   if(correct === e.target.textContent){
// // //     window.alert('正解！');
// // //   }else{
// // //     window.alert('不正解！');
// // //   }
// // // });
// // // button[3].addEventListener('click',(e)=>{
// // //   if(correct === e.target.textContent){
// // //     window.alert('正解！');
// // //   }else{
// // //     window.alert('不正解！');
// // //   }
// // // });


// // //3-5,if文の繰り返しを簡略化する
// // // const clickHandler = () =>{
// // //   if(correct === e.target.textContent){
// // //     window.alert('正解！');
// // //   }else{
// // //     window.alert('不正解！');
// // //   }
// // // };

// // //3-7,引数にeを追加する
// // const clickHandler = (e) =>{
// //   if(correct === e.target.textContent){
// //     window.alert('正解！');
// //   }else{
// //     window.alert('不正解！');
// //   }
// // };

// // //3-6,リプレイスする
// // // $button[0].addEventListener('click',(e)=>{
// // //   clickHandler(e);
// // // });

// // // button[1].addEventListener('click',(e)=>{
// // //   clickHandler(e);
// // // });

// // // button[2].addEventListener('click',(e)=>{
// // //   clickHandler(e);
// // // });

// // // button[3].addEventListener('click',(e)=>{
// // //   clickHandler(e);
// // // });

// // //3-8,while文で繰り返しを簡略化する
// // let handleIndex = 0;
// // //3-9,二回使ってるから一つにまとめて上で定義する
// // // const buttonLength = $button.length;
// // while(handleIndex < buttonLength){
// //   $button[handleIndex].addEventListener('click',(e)=>{
// //     clickHandler(e);
// //   });
// //   handleIndex++;
// // }


// //4,クイズゲームをつくる応用（クイズの追加）
// //4-1,クイズの定義を簡略化する
// // const question = 'ゲーム史上、最も売れたゲーム機はどれ？';
// // const answers = [
// //   'スーパーファミコン'
// //   , 'PlayStation 2'
// //   , 'ニンテンドーDS'
// //   , 'Xbox 360'
// // ];
// // const correct = 'ニンテンドーDS';
// const quiz = [
//   {
//     question: 'ゲーム史上、最も売れたゲーム機はどれ？',
//     answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
//     correct: 'ニンテンドーDS'
//   }, {
//     question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
//     answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
//     correct: 'MOTHER2'
//   }, {
//     question: 'ファイナルファンタジーⅣの主人公の名前は？',
//     answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
//     correct: 'セシル'
//   }
// ]

// //4-2,クイズの定義する
// const quizLength = quiz.length;
// let quizIndex = 0;

// const $button = document.getElementsByTagName('button');

// const buttonLength = $button.length;

// //4-4,再定義した問題文を反映させる
// // const setupQuiz = () =>{
// //   document.getElementById('js-question').textContent = question;
// //   let buttonIndex = 0;
// //   while(buttonIndex < buttonLength){
// //     $button[buttonIndex].textContent = answers[buttonIndex];
// //     buttonIndex++;
// //   }
// // }
// // setupQuiz();
// const setupQuiz = () =>{
//   document.getElementById('js-question').textContent = quiz[quizIndex].question;
//   let buttonIndex = 0;
//   while(buttonIndex < buttonLength){
//     $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
//     buttonIndex++;
//   }
// }
// setupQuiz();

// //4-3,if文で問題文を繰り返すようにしていく,あと再定義した反映も
// // const clickHandler = (e) =>{
// //   if(correct === e.target.textContent){
// //     window.alert('正解！');
// //   }else{
// //     window.alert('不正解！');
// //   }
// // };
// const clickHandler = (e) =>{
//   if(quiz[quizIndex].correct === e.target.textContent){
//     window.alert('正解！');
//   }else{
//     window.alert('不正解！');
//   }
//   quizIndex ++;
//   if(quizIndex < quizLength){
//     //問題文がまだあればこちらを実行
//     setupQuiz();
//   }else{
//     //問題がなければこちらを実行
//     window.alert('終了！')
//   }
// };

// let handleIndex = 0;
// while(handleIndex < buttonLength){
//   $button[handleIndex].addEventListener('click',(e)=>{
//     clickHandler(e);
//   });
//   handleIndex++;
// }


//5,クイズゲームをつくる応用（結果発表機能の追加）
const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機はどれ？',
    answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
    correct: 'セシル'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
//5-1,合計点数の値を定義
let score = 0;

const $button = document.getElementsByTagName('button');

const buttonLength = $button.length;

const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

//5-2,正解したら点数が増えて点数を出すロジックを反映させる
// const clickHandler = (e) =>{
//   if(quiz[quizIndex].correct === e.target.textContent){
//     window.alert('正解！');
//   }else{
//     window.alert('不正解！');
//   }
//   quizIndex ++;
//   if(quizIndex < quizLength){
//     //問題文がまだあればこちらを実行
//     setupQuiz();
//   }else{
//     //問題がなければこちらを実行
//     window.alert('終了！')
//   }
// };
const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++ ;
  }else{
    window.alert('不正解！');
  }
  quizIndex ++;
  if(quizIndex < quizLength){
    //問題文がまだあればこちらを実行
    setupQuiz();
  }else{
    //問題がなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！')
  }
};

let handleIndex = 0;
while(handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click',(e)=>{
    clickHandler(e);
  });
  handleIndex++;
}
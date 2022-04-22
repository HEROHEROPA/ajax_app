function post(){
const submit = document.getElementById("submit")
submit.addEventListener("click",(e)=>{//Javascriptにクリックイベントを認識させる。
  e.preventDefault();//ブラウザから送信されたクリックイベントをここで無効化する
  const form = document.getElementById("form")
  const formData = new FormData(form);
  const XHR = new XMLHttpRequest();
  XHR.open("POST","/posts",true);
  XHR.responseType = "json";//responseで要求するデータ型をこの時点で指定する
  XHR.send(formData);//Javascriptで作成された送信関数のみがサーバーに送られる。
// console.log("イベント発火")
})

} 

window.addEventListener('load',post);
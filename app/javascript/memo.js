const buildHTML = (XHR) => {
 const item = XHR.response.post;//createコントローラーからjson形式で{post:値}で送信された値を受け取っている
 const html = `
 <div class="post">
   <div class="post-date">
     投稿日時：${item.created_at}
   </div>
   <div class="post-content">
     ${item.content}
   </div>
 </div>`;

 return html
}

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
  XHR .onload = () =>{
    // console.log(XHR.response);
    if (XHR.status != 200) {//ステータスエラーがあった場合の処理
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
      return null;//処理を強制終了させるために返り値記述
    };
    const list = document.getElementById("list");
    const formText = document.getElementById("content")//formテキストの値を取得
    // console.log(formText.value);
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";//値をリセットして表示
  };
// console.log("イベント発火")
})

} 

window.addEventListener('load',post);
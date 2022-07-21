
import "./App.css";

function App() {
  return (
    <div class="main-wrapper">

      <div class="textbox">
        <h1>세상 어디에도 없는 <br/> TAB 에서만 가능한 투자</h1>
        <p>TAB의 특허기술과 함께 <br/> 누구보다 먼저 초기 스타트업에 투자하세요</p>
        <div class="btn-wrapper">
          <button type="button" class="btn">투자하러가기</button>
        </div>
      </div>

      <div class="video-wrapper">
        <video src="https://d31ckh8w5xnt40.cloudfront.net/video/market.webm" autoPlay muted loop >
        <source src="https://d31ckh8w5xnt40.cloudfront.net/video/market.webm"></source>
        </video>
      </div>  

      {/* Mobile Btn */}
      <button type="button" class="btn2">투자하러가기</button>
      
    </div>
  );
}

export default App;



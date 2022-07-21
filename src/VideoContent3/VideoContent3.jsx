
import "./App.css";

function App() {
  return (
    <div class="main-wrapper">

      <div class="textbox">
        <h1>언제 어디서든 <br/>투자자가 될 수 있어요!</h1>
        <div class="btn-wrapper">
          <button type="button" class="btn">모바일앱 다운로드</button>
        </div>
      </div>

      <div class="video-wrapper">
        <video src="https://d31ckh8w5xnt40.cloudfront.net/video/portfolio.webm" autoPlay muted loop >
        <source src="https://d31ckh8w5xnt40.cloudfront.net/video/portfolio.webm"></source>
        </video>
      </div>  

      {/* Mobile Btn */}
      <button type="button" class="btn2">모바일앱 다운로드</button>
      
    </div>
  );
}

export default App;



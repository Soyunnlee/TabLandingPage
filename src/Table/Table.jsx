
import "./App.css";


function App() {
  return (
    <div class="tableposition">
      <table>
        <colgroup>
          <col width="12%"></col>
          <col width="17%"></col>
          <col width="18%"></col>
          <col width="15%"></col>
          <col width="15%"></col>
          <col width=""></col>
        </colgroup>

                  <thead>
                    <tr>
                      <th scope="col" class="theadtitle">
                        순위
                      </th>
                      <th scope="col" class="theadtitle text-left">
                        종목명
                      </th>
                      <th scope="col" class="theadtitle text-right">
                        전일비
                      </th>
                      <th scope="col" class="theadtitle">
                        등락율
                      </th>
                      <th scope="col" class="theadtitle text-right">
                        기준가 -
                      </th>
                      <th scope="col" class="theadtitle text-right total">
                        권리 시가총액
                      </th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                      <td class="stocks ">
                        더엔젤브릿지
                      </td>
                      <td class="fulltime text-red-500">
                        +400원
                      </td>
                      <td class="fluctuations text-red-500">
                        1.16%
                      </td>
                      <td class="fulltime">34,300원</td>
                      <td class="fulltime text-rigtht total">1조 2,482억</td>
                    </tr>
                    
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                      <td class="stocks">
                        TAB
                      </td>
                      <td class="fulltime text-red-500">
                        +2000원
                      </td>
                      <td class="fluctuations text-red-500">
                        3.23%
                      </td>
                      <td class="fulltime">31,000원</td>
                      <td class="fulltime total">9,000억</td>
                    </tr>
                    
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                      <td class="stocks">
                        (주)아수
                      </td>
                      <td class="fulltime text-gray-400">
                        0원
                      </td>
                      <td class="fluctuations text-gray-400">0.00%</td>
                      <td class="fulltime">14,000원</td>
                      <td class="fulltime total">8,982억</td>
                    </tr>
                    
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                      <td class="stocks">
                        에스컴
                      </td>
                      <td class="fulltime text-blue-700">
                        -50원
                      </td>
                      <td class="fluctuations text-blue-700">
                        7.14%
                      </td> 
                      <td class="fulltime">146원</td>
                      <td class="fulltime total">7,286억</td>
                    </tr>
                    
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                      <td class="stocks">
                        에스튜엔터테이먼트
                      </td>
                      <td class="fulltime text-gray-400">
                        0원
                      </td>
                      <td class="fluctuations text-gray-400">
                        0.00%
                      </td>
                      <td class="fulltime">32,000원</td>
                      <td class="fulltime total">5,172억</td>
                    </tr>
                    
                  </tbody>
                </table>
            </div>    
  );
}

export default App;

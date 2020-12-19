export default class StationPathView {
  constructor() {
    this.app = document.getElementById('app');
  }

  view() {
    this.headerView();
    this.inputView();
    this.resultView();
  }

  headerView() {
    this.app.innerHTML = `
      <h1>🚇 지하철 길찾기 </h1>
      <div id="input-view"></div>
      <div id="result-view"></div>
    `
  }

  inputView() {
    document.getElementById('input-view').innerHTML = `
      <div style="margin-bottom: 20px">  
        <span>출발역</span>
        <input type="text" id="departure-station-name-input"></input>
      </div>
      <div style="margin-bottom: 20px">
        <span>도착역</span>
        <input type="text" id="arrival-station-name-input"></input>
      </div>
      <div style="margin-bottom: 20px">
        <input type="radio" name="search-type" value="shortest-path" checked></input>
        <label for="shortest-path">최단거리</label>
        <input type="radio" name="search-type" value="shortest-time"></input>
        <label for="shortest-time">최소시간</label>
      </div>
      <button id="search-button">길 찾기</button>
    `
  }

  resultView(distance, time, path) {
    document.getElementById('result-view').innerHTML = `
      <h2>결과</h2>
      <h3>최단거리</h3>
      <table border="1">
      <tr>
        <th align="center">총 거리</th>
        <th align="center">총 소요 시간</th>
      </tr>
      <tr>
        <td align="center">${distance}km</td>
        <td align="center">${time}분</td>
      </tr>
      <tr>
        <td align="center" colspan="2">
        ${path}
        </td>
      </tr>
    </table>
    `;
  }
}
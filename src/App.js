import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";

import './App.css'

// 첫번째 방법 JSON을 직접 import
import staticResponse from "./data/05120be83ae547229f65111bb3f5fd5b.json";

function App() {
  return (
    <div className="App">
      <h1>too easy lol</h1>
        <NotionRenderer // 웹페이지에 노션을 렌더링
          blockMap={staticResponse} // 페이지정보 넣기
          fullPage={true}
        />
    </div>
  );
}

export default App;

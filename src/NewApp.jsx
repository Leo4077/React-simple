
// - 箭頭
// - function
function NewApp() {

    const num = 100;
    const a = true;

    return <div>元件 {num * 2}
        {/* 核心:表達式(expression) */}
        {/* 可以做運算 */}
        {/* 可以運行函式 */}
        {/* 不能是判斷式 */}
        {num === 100}
        {num = 2}

        {/* 除非透過三元運算子的概念做判斷 */}
        {num === 100 ? '剛好100' : '不是100'}

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

        {/* 所有標籤都需要結尾 */}
        {/* input 記得一定要補 id */}
        {/* 這樣點標題才能選到輸入框 */}
        <label htmlFor="xxx">這是 label</label>
        <input type="text" id="xxx" />

        <hr />

        {/* 行內樣式需換成物件的形式 */}
        {/* 小駝峰寫法 */}
        <div style={{ color: 'red', backgroundColor: 'yellow' }}>這是一段文字</div>

        {/* 布林屬性 */}
        <input type="text" disabled />
        <input type="text" disabled={a} />



    </div>
}

// - JSX = 在 JS 中寫 HTML
// - JSX 本質就是 JS

export default NewApp;
/* const { Children } = require("react"); */

function Sidebar() {
    return <div style={{ width: "30%", border: "1px solid" }}>
        <p>Sidebar</p>
    </div>
}

{/* children 必須要使用小寫 */ }
function Main({ children }) {
    return <div style={{ width: "70%", border: "1px solid" }}>
        <h3>Main</h3>
        {children}
    </div>
}

function Child() {
    return <div>
        Child
    </div>
}

// 建立子元件，並在父元件中引入
function Example() {
    return <div>
        <p>這是父元件 Example</p>
        <div style={{ display: "flex" }}>
            <Sidebar />
            <Main>
                <Child />
            </Main>
        </div>
    </div >
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);
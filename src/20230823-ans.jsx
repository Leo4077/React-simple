

// 建立子元件，並在父元件中引入
function SideBar() {
    return <div style={{ width: "30%", border: "1px solid" }}> SideBar </div>
}




function Main({ children }) {
    return <div style={{ width: "70%", border: "1px solid" }}>
        <h3>Main</h3>
        {children}
    </div>
}
function Child() {
    return <div> Child </div>
}
function Example() {
    return <div>
        <p>這是父元件 Example</p>
        <div style={{ display: "flex" }}>
            <SideBar />
            <Main>
                <Child />
            </Main>
        </div>
    </div>
}
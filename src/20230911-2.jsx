function Timer() {
    const [count, setCount] = React.useState(0);
    // - 加入 useEffect 練習

    // - 空陣列僅執行一次
    React.useEffect(() => {
        console.log('count 初始值', count)
    }, [])

    // - 每當count的值改變，才會執行
    React.useEffect(() => {
        console.log('count 當前值', count)
    }, [count])

    return <div style={{ textAlign: "center" }}>
        <h1> {count} </h1>
        <button onClick={() => setCount(count + 1)}>更新</button>
    </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
function Child({ count, setCount }) {

    React.useEffect(() => {
        // - 練習區塊
        const intervalId = setInterval(() => {
            setCount(pre => pre + 1);
        }, 1000)

        return () => clearInterval(intervalId);
        // - 區塊結束
    }, [])

    return <h1>Child 元件: {count}</h1>
}

function Example() {
    const [count, setCount] = React.useState(0);
    const [show, setShow] = React.useState(true);

    return (<div style={{ textAlign: "center" }}>
        Example 元件: {count}
        {show && <Child count={count} setCount={setCount} />}
        <button type="button" onClick={() => setShow(!show)}>{show ? '隱藏' : '顯示'} </button>

    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);


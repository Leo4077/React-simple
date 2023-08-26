// props 練習
function Child({ name }) {
    return <p>Hello,{name} !</p>
};


function Example() {
    return (
        <div>
            <Child name="EveryOne" />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);
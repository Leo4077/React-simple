// props 練習
function Child1({ text }) {
    return <p>Hello, {text} !</p>
};

function Child2(props) {
    return <p>Hello, {props.name} !</p>
};

function Example() {
    return (
        <div>
            <Child1 text="EveryOne" />
            <Child2 name="John" />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);
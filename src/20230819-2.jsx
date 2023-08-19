function Example() {
    const [userData, setUserData] = React.useState({
        account: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((state) => ({ ...state, [name]: value }));
    }

    const submit = () => {
        console.log(`帳號：${userData.account}，密碼：${userData.password}`);
    }

    return (
        <div>
            <div>
                <label htmlFor="account">帳號</label>
                <input 
                    id="account" 
                    name="account"
                    value={userData.account}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">密碼</label>
                <input 
                    id="password"
                    name="password"
                    type="password" 
                    value={userData.password}
                    onChange={handleChange}
                />
            </div>
            <button onClick={submit}>送出</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);

import { useState } from "react";


function Hooks() {
    // - let a = 1
    // - [值 , 寫入的方法]
    const [a, setA] = useState(1);
    const [text, setText] = useState('卡斯伯');


    return (<div>
        Hooks
        <button onClick={() => {
            setA(a + 1)
        }}>{a}</button>

        {text}
        <input type="text" value={text} onChange={(event)=>{
            console.log(event.target.value); // 輸入的值
            // React 就是要很熟事件參數
            setText(event.target.value)
        }} />

    </div>)
}

export default Hooks
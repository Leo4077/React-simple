
function ArrayMethods() {

    const arr = [4, 5, 6]

    return (

        <div>
            {
                [1, 2, 3]
            }
            {
                [<div key='1'>1</div>, <div key='2'>2</div>, <div key='3'>3</div>]
            }

            {/* arr渲染 */}
            {/* Map 可以建立新陣列 */}
            {arr.map((item) => {
                return <div key={item}>
                    {item}
                </div>
            })}



        </div>)
}

export default ArrayMethods
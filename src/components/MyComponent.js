
function MyComponent({title,list}){
    console.log("제목:",title);
    console.log("목록",list)

    return(
        <div>
            <h2>{title}</h2>
            <ul>
                {
                    list.map((ele, idx)=>(
                        <li>[{idx}] {ele}</li>
                    ))
                }
            </ul> 
        </div>
    )
}
export default MyComponent
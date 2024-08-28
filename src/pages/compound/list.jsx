const TheList = (props) =>{
    let TheTitle = props.title;
    let TheContent = props.content1;
    let TheAuthor = props.author;
    let TheCategory = props.category;
    let TheTime = props.time;    
    return(<div className="container">
        <div className="orange">{TheTitle}</div>
        
        <div className="orange">{TheAuthor} </div>
        <div className="orange">{TheCategory} </div>
        <div className="orange">{TheTime} </div><div className="orange">{TheContent}</div>
    </div>)
}
export default TheList;
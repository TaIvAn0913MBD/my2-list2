const TheThree = (props) => {
    let TheTitle = props.title;
    let TheAuthor = props.author;
    let TheCategory = props.category;
    return(
    <div className="container3">
        <div className="orange">{TheTitle}</div>
        <div className="orange">{TheAuthor} </div>
        <div className="orange">{TheCategory} </div>
    </div>)
}
export default TheThree;
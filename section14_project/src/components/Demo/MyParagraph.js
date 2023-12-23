

const MyParagraph = (props) => {
    console.log('MyPara Running');
    return <p>{props.children}</p>;
}

export default MyParagraph
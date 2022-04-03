function List(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
      />
      <h4> {props.shoes.title} </h4>
      <p>
        {props.shoes.content} & {props.shoes.price}원
      </p>
    </div>
  );
}

export default List;

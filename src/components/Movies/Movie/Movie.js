import {BookingForm} from "../../BookingForm";

function Movie(props) {
  const {
    title,
    description,
    image
  } = props;

  return (
    <div className='movie px-3 row mx-3'>
      <li className="card col-5">
        <div>
          <h3 className="card-title">{title}</h3>
          <div className="card-content">
            <img src={process.env.PUBLIC_URL + image} alt="image" height="300px"/>
            <p>{description}</p>
          </div>
        </div>
      </li>
      <div className="col-6">
        <BookingForm {...props}/>
      </div>

    </div>
  );
}
export { Movie };

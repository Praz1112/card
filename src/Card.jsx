import image from "./assets/praz.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={image} alt="Profilepicture" />
      <h2>PraZ</h2>
      <p>professional jungler in mobile lengends</p>
    </div>
  );
}

export default Card;

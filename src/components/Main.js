import restauranMain from "../assets/restauranfood.jpg";

const Main = () => {
    return (
    <main className="main-container">
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">Little Lemon</div>
            <div className="div-5">Chicago</div>
            <div className="div-6">
              We are a family owned Mediterranean restaurant, focused on
              traditional <br />
              recipes served with a modern
              <br />
              twist.
            </div>
            <div className="div-7">Reserve a Table</div>
          </div>
          <img
            loading="lazy"
            srcSet={restauranMain}
            className="img"
            alt="Main"
          />
        </div>
      </div>
    </main>
    )
}

export default Main;
import heroImg from "../assets/restauranfood.jpg";

const Header = () => {
    return (
    <header>
        <section>
            <div className="hero-section">
                <div className="banner">
                    <div className="hero-description">
                        <h1 className="display-title">Little Lemon</h1>
                        <h2 className="sub-title">Chicago</h2>
                        <p>
                        We are a family owned Mediterranean restaurant, focused on
                        traditional <br />
                        recipes served with a modern
                        <br />
                        twist.
                        </p>
                        <button className="btn">Reserve a Table</button>
                    </div>
                    <img
                        loading="lazy"
                        srcSet={heroImg}
                        className="hero-banner"
                        alt="Hero section banner"
                    />
                </div>
            </div>
        </section>
    </header>
    )
}

export default Header;
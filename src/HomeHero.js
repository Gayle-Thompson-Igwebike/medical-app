import "./HomeHero.css";

export const HomeHero = () => {
  return (
    <div className="homepage-hero-wrapper">
      <div className="homepage-hero-logo-wrapper">
        <h1 className="homepage-hero-logo-a">Doctor's Inn</h1>
        <p className="homepage-hero-logo-b">Sugery.</p>
      </div>
      <div className="homepage-hero-about-wrapper">
        <div className="homepage-hero-about-text-wrapper">
          <h2 className="homepage-hero-about-text-title">About Us</h2>
          <p className="homepage-hero-about-text-summary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="homepage-hero-about-text-btn">
            Find Out More
          </button>
        </div>
        <div className="homepage-hero-about-img-wrapper">
          <img
            src="https://img.freepik.com/premium-photo/female-afro-american-doctor-having-video-conference-laptop-with-colleagues_570093-489.jpg?size=626&ext=jpg&uid=R89092146&ga=GA1.2.171131187.1682758223&semt=robertav1_2_sidr"
            className="homepage-hero-about-img-a"
            alt="doctor"
          />
          <img
            src="https://img.freepik.com/free-photo/form-records-desk-pen-information_1232-4181.jpg?size=626&ext=jpg&uid=R89092146&ga=GA1.2.171131187.1682758223&semt=robertav1_2_sidr"
            className="homepage-hero-about-img-b"
            alt="laptop"
          />
          <img
            src="https://img.freepik.com/free-photo/side-view-woman-making-plans-redecorate-house-with-laptop_23-2148814370.jpg?size=626&ext=jpg&uid=R89092146&ga=GA1.2.171131187.1682758223&semt=robertav1_2_sidr"
            className="homepage-hero-about-img-c"
            alt="doctor"
          />
        </div>
      </div>
    </div>
  );
};

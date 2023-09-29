import "./DoctorCards.css";
import "animate.css";

function DoctorCards({ doctors }) {
  return (
    <section className="doctor-cards">
      {doctors &&
        doctors.map((doctor) => (
          <div className="card" id={doctor.id} key={doctor.id}>
            <img src={doctor.imageURL} alt="selfie" className="profile-pic" />
            <h3 className="animate__animated animate__slideInDown doc-name" >
              Dr {doctor.first_name} {doctor.last_name}
            </h3>
            <h4 className="doc-spec">{doctor.discipline} specialist</h4>
            <h5 className="doc-cert">{doctor.certification}</h5>
            <a href={doctor.link} className="link">
              Read More
            </a>
          </div>
        ))}
    </section>
  );
}

export default DoctorCards;

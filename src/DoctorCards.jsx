import { useState, useEffect } from "react";
import "./DoctorCards.css";
import "animate.css";

function DoctorCards() {
  const [doctors, setDoctors] = useState([]);

  function fetchData() {
    fetch("http://localhost:5151/doctors")
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const doctors = [
  //   {
  //     id: "one",
  //     image: "",
  //     name: "Khadija",
  //     specialist: "Fibroids",
  //     link: "/Khadija",
  //   },
  //   {
  //     id: "two",
  //     image:
  //       "https://media.licdn.com/dms/image/C4D03AQHhwONn-rxiEw/profile-displayphoto-shrink_800_800/0/1554392197343?e=1688601600&v=beta&t=7Qowi0rJNGEvody47J5XsUWfdwu7FuZ3Q1W5Ki_sl80",
  //     name: "Andriana",
  //     specialist: "Breast Cancer",
  //     link: "/Andriana",
  //   },
  //   {
  //     id: "three",
  //     image: "",
  //     name: "Karleen",
  //     specialist: "Sickle Cell",
  //     link: "/Karleen",
  //   },
  //   {
  //     id: "four",
  //     image: "",
  //     name: "Gayle",
  //     specialist: "Keloids",
  //     link: "/Gayle",
  //   },
  // ];

  return (
    <section className="doctor-cards">
      {doctors &&
        doctors.map((doctor) => (
          <div className="card" id={doctor.id} key={doctor.id}>
            <img src={doctor.imageURL} alt="selfie" className="profile-pic" />
            <h3 className="animate__animated animate__slideInDown">
              Dr {doctor.first_name} {doctor.last_name}
            </h3>
            <h4>{doctor.discipline} specialist</h4>
            <h5>{doctor.certification}</h5>
            <a href={doctor.link} className="link">
              Read More
            </a>
          </div>
        ))}
    </section>
  );
}

export default DoctorCards;

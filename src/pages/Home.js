import profile from "../assets/profile.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h1>Sumanth Vaskuri</h1>

      <img src={profile} alt="profile" className="profile" />

      <h2>About Me</h2>
      <p>I am a Computer Science student interested in web development and machine learning.</p>

      <h2>Research Interests</h2>
      <p>Machine Learning, Data Science, Web Development</p>

      <h2>Personal Details</h2>
      <p>Name: Sumanth Vaskuri</p>
      <p>Phone: 9XXXXXXXXX</p>
      <p>Email: yourpersonal@email.com</p>
      <p>College Email: yourcollege@email.com</p>

      <h2>Skills</h2>
      <p>React, Java, Python, C</p>
    </div>
  );
}

export default Home;
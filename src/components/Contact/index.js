import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f17k0ry", "template_32yod8c", form.current, {
        publicKey: "wmTXNqKVbZvfXYXzB",
      })
      .then(
        () => {
          alert("Message Successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        },
      );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am currently seeking opportunities as a web developer, whether it
            be as a working student or in a full-time capacity. With a passion
            for creating innovative and user-friendly web experiences, I am
            eager to contribute my skills and expertise to projects that push
            boundaries and deliver exceptional results. If you're interested in
            collaborating or have a position available, please don't hesitate to
            reach out. I look forward to the possibility of working together to
            bring your vision to life.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Parth Kakadiya,
          <br />
          Germany,
          <br />
          Wittenberger str. 5, 09126 <br />
          Chemnitz <br />
          <span>parthkakdiya320@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[50.8197514, 12.9372585]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[50.8197514, 12.9372585]}>
              <Popup>Parth lives here, Let's have a cup of tea :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;

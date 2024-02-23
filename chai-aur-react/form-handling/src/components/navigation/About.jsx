import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        assumenda consectetur dolore aperiam hic sit vel illo tenetur
        voluptatibus voluptatum dolor mollitia ea ratione animi ex magni fugit,
        similique est. Dolores est amet, rerum et tempora officiis, non sed
        earum accusantium dignissimos nobis eveniet error blanditiis soluta, sit
        inventore iste? Praesentium quis ipsa fugiat quas sequi assumenda, fugit
        voluptatem odio? Doloremque quis beatae debitis, vel minus fugiat velit
        deleniti fugit quas illo nostrum sint, ratione sapiente? Velit debitis
        exercitationem placeat quas aspernatur repellat voluptatum, veniam,
        repudiandae obcaecati tenetur magni vel. Maiores temporibus alias ab
        delectus? Sint eos culpa odio excepturi ullam voluptas expedita harum,
        possimus eum quis doloremque tempore ratione, eaque aperiam voluptatem
        necessitatibus nisi quae adipisci illum quas suscipit? Est cumque ullam
        quo voluptatem deleniti. Mollitia architecto animi voluptate repellendus
        voluptas libero reiciendis hic? Asperiores veritatis, reprehenderit
        sapiente laborum ducimus repellendus at! Blanditiis, at porro reiciendis
        rerum quas earum! Delectus neque iste dolorum autem temporibus ipsam
        porro fuga aliquam saepe. Ipsum, ea at. Tempore deleniti delectus id
        voluptatem laudantium libero necessitatibus quo, eligendi quisquam
        dolorum aliquam excepturi, distinctio, modi corrupti animi nam.
        Provident accusamus modi consequatur incidunt voluptatum? Ea non
        mollitia reprehenderit beatae quasi explicabo quia sint velit? Amet odit
        consectetur quisquam commodi, alias nam accusantium! In voluptatibus
        optio facere sed soluta porro dolore consequatur laudantium, veniam
        dolorum rerum labore neque, mollitia iste ipsum. Quod modi provident
        corporis.
      </p>

      <ul className="internal">
        <li>
          <Link to="/about/image"> image</Link>
        </li>
        <li>
          <Link to="/about/prices"> prices</Link>
        </li>
        <Link to="/about/location"> location</Link>
      </ul>
      <Outlet />
    </div>
  );
}

export default About;

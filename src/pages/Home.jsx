import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
    <h1>ABOUT ME</h1>
    
      <div className="banner">
        <img src="/images/banner.png" alt="Banner" />
      </div>

      <section className="intro">
        
        <p>
          I’m Mishael Edegwa, a final-year Computer Science student with a strong interest 
          in building technology solutions that make everyday life easier and help businesses 
          operate more efficiently and profitably.
        </p>
      </section>

      <section className="technical">
        <p>
          I focus on software development and problem-solving, creating websites, web applications, 
          and software systems that address real-world needs. I enjoy turning ideas and challenges 
          into functional, scalable digital solutions. My technical interests center around developing 
          business-focused systems that improve processes, increase efficiency, and drive growth. 
          I work comfortably with Python, Java, and C++, and I have over six years of experience in UI/UX design, 
          which allows me to build products that are not only functional but intuitive and visually effective.
        </p>
      </section>

      <section className="design-marketing">
        <p>
          In addition, my background in marketing and copywriting helps me design websites that engage users, 
          communicate clearly, and convert effectively.
        </p>
      </section>
    </div>
  );
}

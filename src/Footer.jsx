import React from "react";
import "./footer.css";

export default function Footer() {
  const gmailLink = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mishaeledegwa@gmail.com&su=Let's Work Together!";

  return (
    <footer className="footer">

      <div className="footer-links">
        <a href={gmailLink} target="_blank" rel="noopener noreferrer">EMAIL ME</a>
        <a href="https://wa.me/+2347013355872" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
        <a href={gmailLink} target="_blank" rel="noopener noreferrer">HIRE ME</a>
      </div>
    </footer>
  );
}
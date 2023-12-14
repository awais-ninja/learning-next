"use client";
import Link from "./Link";
const Footer = () => {
  const date = new Date().getFullYear;
  return (
    <>
      <div>
        <Link path="/">Home</Link>
        <Link path="/about">About</Link>
        <Link path="/services">Services</Link>
        <Link path="/contact">Contact</Link>
        <Link path="/blog">Blog</Link>
      </div>
      <br />
      <div>
        Made by &#128151; |
        <Link path="https://www.brainloggers.co.uk">
          Brainloggers Ltd.&copy; {date}
        </Link>
      </div>
    </>
  );
};

export default Footer;

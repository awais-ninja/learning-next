import Link from "./Link";

const Navigation = () => {
  return (
    <div>
      <ul>
        <Link path="/">Home</Link>
        <Link path="/about">About</Link>
        <Link path="/services">Services</Link>
        <Link path="/contact">Contact</Link>
        <Link path="/blog">Blog</Link>
        <Link path="https:www.brainloggers.co.uk">Outsource</Link>
      </ul>
    </div>
  );
};
export default Navigation;

const Footer = () => {
  return (
    <footer>
      <footer className="footer grid grid-cols-2 md:grid-cols-4 text-white pt-10 px-2">
        <nav className="flex flex-col ">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav className="flex flex-col ">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Legal 2</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <aside className="footer footer-center p-4">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Papa
          Trends.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

export default function Knimbus() {
  return (
    <section className="secondary-fullwidth" aria-labelledby="knimbus-title">
      <div className="secondary-background">
        <div className="container">
          <h2 id="knimbus-title" className="section-title">ABOUT KNIMBUS</h2>
          <div className="secondary-grid">
            <img
              src="/images/knimbus.png"
              alt="Screenshot of the Knimbus digital library interface"
              className="secondary-image"
            />
            <div className="secondary-text secondary-text-left">
              <p>
                The Knimbus Library Page of the USLS Learning Resource Center provides seamless access to a wide range of e-resources, including e-books, journals, databases, and multimedia content. It serves as a one-stop digital platform supporting research, learning, and collaboration for the academic community.
              </p>
              <a className="btn small" href="#" aria-label="Learn more about Knimbus">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

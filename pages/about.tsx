import Head from 'next/head'

const about = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>About us</h2>
          <div className="line">
            <div />
            <div />
            <div />
          </div>
          <p className="text">
            Aran windows and doors, started in the year 2019, is one of the
            largest uPVC windows and doors brand. Aran windows and doors
            specializes in providing customized and diverge range uPVC window
            and door solutions.
          </p>
        </div>
        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span>
                <i className="fas fa-mobile-alt" />
              </span>
              <span>Phone No.</span>
              <span className="text">+91-9445675569</span>
            </div>
            <div>
              <span>
                <i className="fas fa-envelope-open" />
              </span>
              <span>E-mail</span>
              <span className="text">info@aranwindows.in</span>
            </div>
            <div>
              <span>
                <i className="fas fa-map-marker-alt" />
              </span>
              <span>Address</span>
              <span className="text">
                3/162C,M.G.R Nagar,Sankari Main
                Road,Karuveppampatti,Tiruchengode-637209
              </span>
            </div>
            <div>
              <span>
                <i className="fas fa-clock" />
              </span>
              <span>Opening Hours</span>
              <span className="text">
                Monday - Saturday (9:00 AM to 8:00 PM)
              </span>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <textarea
                rows={5}
                placeholder="Message"
                className="form-control"
                defaultValue={''}
              />
              <input
                type="submit"
                className="send-btn"
                defaultValue="send message"
              />
            </form>
            <div>
              <img src="/contact-png.png" alt="contact" />
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.3595768149244!2d77.8627673!3d11.381408599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96197a90a4deb%3A0x40674259b8e1b20f!2sAWD%20~%20Aran%20Windows%20and%20Doors(Production%20Unit)!5e0!3m2!1sen!2sin!4v1660201421064!5m2!1sen!2sin"
            width="100%"
            height={500}
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="contact-footer">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://m.facebook.com/1064784970359862/"
              className="fab fa-facebook-f"
            />
            <a href="#" className="fab fa-twitter" />
            <a
              href="https://www.instagram.com/aran_windows/?hl=en"
              className="fab fa-instagram"
            />
          </div>
          <br />
          <div className="et_pb_text_inner">
            <p
              style={{
                textAlign: 'center',
                color: 'aliceblue',
              }}
            >
              Copyright © 2022, Aran Windows and Doors
              <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default about

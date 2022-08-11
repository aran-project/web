// import Head from 'next/head'

// const about = () => {
//   return (
//     <div>

//       <Head>
//         <meta charSet="utf-8" />
//         <title />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <section classNameName="contact-section">
//         <div classNameName="contact-bg">
//           <h3>Get in Touch with Us</h3>
//           <h2>About us</h2>
//           <div classNameName="line">
//             <div />
//             <div />
//             <div />
//           </div>
//           <p classNameName="text">
//             Aran windows and doors, started in the year 2019, is one of the
//             largest uPVC windows and doors brand. Aran windows and doors
//             specializes in providing customized and diverge range uPVC window
//             and door solutions.
//           </p>
//         </div>
//         <div classNameName="contact-body">
//           <div classNameName="contact-info">
//             <div>
//               <span>
//                 <i classNameName="fas fa-mobile-alt" />
//               </span>
//               <span>Phone No.</span>
//               <span classNameName="text">+91-9445675569</span>
//             </div>
//             <div>
//               <span>
//                 <i classNameName="fas fa-envelope-open" />
//               </span>
//               <span>E-mail</span>
//               <span classNameName="text">info@aranwindows.in</span>
//             </div>
//             <div>
//               <span>
//                 <i classNameName="fas fa-map-marker-alt" />
//               </span>
//               <span>Address</span>
//               <span classNameName="text">
//                 3/162C,M.G.R Nagar,Sankari Main
//                 Road,Karuveppampatti,Tiruchengode-637209
//               </span>
//             </div>
//             <div>
//               <span>
//                 <i classNameName="fas fa-clock" />
//               </span>
//               <span>Opening Hours</span>
//               <span classNameName="text">
//                 Monday - Saturday (9:00 AM to 8:00 PM)
//               </span>
//             </div>
//           </div>
//           <div classNameName="contact-form">
//             <form>
//               <div>
//                 <input
//                   type="text"
//                   classNameName="form-control"
//                   placeholder="First Name"
//                 />
//                 <input
//                   type="text"
//                   classNameName="form-control"
//                   placeholder="Last Name"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   classNameName="form-control"
//                   placeholder="E-mail"
//                 />
//                 <input
//                   type="text"
//                   classNameName="form-control"
//                   placeholder="Phone"
//                 />
//               </div>
//               <textarea
//                 rows={5}
//                 placeholder="Message"
//                 classNameName="form-control"
//                 defaultValue={''}
//               />
//               <input
//                 type="submit"
//                 classNameName="send-btn"
//                 defaultValue="send message"
//               />
//             </form>
//             <div>
//               <img src="/contact-png.png" alt="contact" />
//             </div>
//           </div>
//         </div>
//         <div classNameName="map">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.3595768149244!2d77.8627673!3d11.381408599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96197a90a4deb%3A0x40674259b8e1b20f!2sAWD%20~%20Aran%20Windows%20and%20Doors(Production%20Unit)!5e0!3m2!1sen!2sin!4v1660201421064!5m2!1sen!2sin"
//             width="100%"
//             height={500}
//             style={{ border: '0' }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//         <div classNameName="contact-footer">
//           <h3>Follow Us</h3>
//           <div classNameName="social-links">
//             <a
//               href="https://m.facebook.com/1064784970359862/"
//               classNameName="fab fa-facebook-f"
//             />
//             <a href="#" classNameName="fab fa-twitter" />
//             <a
//               href="https://www.instagram.com/aran_windows/?hl=en"
//               classNameName="fab fa-instagram"
//             />
//           </div>
//           <br />
//           <div classNameName="et_pb_text_inner">
//             <p
//               style={{
//                 textAlign: 'center',
//                 color: 'aliceblue',
//               }}
//             >
//               Copyright © 2022, Aran Windows and Doors
//               <br />
//               All Rights Reserved.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
// export default about
export default () => (
  <>
    <div className="container my-24 mx-auto px-6">
      <section className="mb-32 text-gray-800">
        <div className="grid gap-4 lg:mb-0 lg:grid-cols-2 lg:gap-x-12">
          <div className="mb-12 lg:mb-0">
            <h2 className="mb-6 text-3xl font-bold">
              Frequently asked questions
            </h2>

            <p className="mb-12 text-gray-500">
              Didn't find your answer in the FAQ? Contact our sales team.
            </p>

            <form>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows={3}
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group form-check mb-6 text-center">
                <input
                  type="checkbox"
                  className="form-check-input mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                  id="exampleCheck87"
                  checked
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="exampleCheck87"
                >
                  Send me a copy of this message
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              >
                Send
              </button>
            </form>
          </div>

          <div className="mb-6 md:mb-0">
            <p className="mb-4 font-bold">
              Anim pariatur cliche reprehenderit?
            </p>
            <p className="mb-12 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              autem numquam dolore molestias aperiam culpa alias veritatis
              architecto eos, molestiae vitae ex eligendi libero eveniet
              dolorem, doloremque rem aliquid perferendis.
            </p>

            <p className="mb-4 font-bold">
              Non cupidatat skateboard dolor brunch?
            </p>
            <p className="mb-12 text-gray-500">
              Distinctio corporis, iure facere ducimus quos consectetur ipsa ut
              magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit
              iusto minus et suscipit? Minima sunt at nulla tenetur, numquam
              unde quod modi magnam ab deserunt ipsam sint aliquid dolores
              libero repellendus cupiditate mollitia quidem dolorem odit
            </p>

            <p className="mb-4 font-bold">
              Praesentium voluptatibus temporibus consequatur non aspernatur?
            </p>
            <p className="mb-12 text-gray-500">
              Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
              deserunt ipsam sint aliquid dolores libero repellendus cupiditate
              mollitia quidem dolorem.
            </p>

            <p className="mb-4 font-bold">
              Voluptatum magnam sed fugit iusto minus et suscipit?
            </p>
            <p className="mb-12 text-gray-500">
              Laudantium perferendis, est alias iure ut veniam suscipit dolorem
              fugit. Et ipsam corporis earum ea ut quae cum non iusto blanditiis
              ipsum dolor eius reiciendis, velit adipisci quas.
            </p>
          </div>
        </div>
      </section>
    </div>
  </>
)

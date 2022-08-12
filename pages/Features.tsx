import Link from 'next/link'

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Home Furniture',
    description: 'Home Automation and Accessories',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Doors',
    description: 'The Entry To Your Home',
    imageSrc:
      'https://pellabranch-prod.gumlet.io/webres/Image/windows-doors/doors/entryway-header.jpg?w=400&dpr=2.6',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
const solutions = [
  {
    name: 'Acoustic Solution',
    description: `A modern, comfortable, and peaceful city life is what most people want to ensure for their near and dear ones. However, ‘city’ and ‘modernity’ have presented people with modern lifestyle challenges like noise pollution.
    
Be it an office or home, coping with noise pollution has become a way of life these days. By installing Soundproof Doors and Windows you can minimize noise pollution. These acoustic doors and windows offer better safety and performance when compared to tempered and annealed glass.
    
So, what is noise pollution? Sound, a common feature of our life and the means of communication, is pleasant when low, and becomes noise when loud. So, unpleasant and unwanted sounds can be defined as noise pollution, leading to various problems such as poor concentration, productivity losses in the workplace, communication difficulties, fatigue from lack of sleep, cognitive impairment, tinnitus and hearing loss, etc.`,
    footerName:
      'Opt for Soundproof Doors and Windows from AIS Windows to Combat Total Noise Intrusion',
    footerDescription: `Soundproof glass window treatment is the best way to combat total noise intrusion in your personal spaces while improving your concentration, memory, performance, and a general sense of well-being.

AIS Windows designs the best soundproof doors and windows with best-in-class insulation technology to keep the environment of your homes and offices calm and peaceful. When installed with a special noise-canceling laminated glass, acoustic doors and windows reduce the noise intrusion by up to 42 decibels. `,
    imageSrc:
      'https://cdn-dlmgh.nitrocdn.com/czhNUEyPuUXIxbYXVrhRCMSuWJGswqag/assets/static/optimized/rev-401281a/wp-content/uploads/2018/04/soundproof.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },

  {
    name: 'Anti-Pollution Solution',
    description: `Dust and pollutants are inevitable unless you live in a bubble. No matter how much you clean your house, dust still exists and you have to deal with this pervasive problem every day. The problem gets even more serious for those who live in homes that don’t have any pollution free doors and windows. It is not only an annoyance but also an infliction that makes your everyday life difficult.

Your surroundings are full of fine particles that make up dust with airborne pollutants like vehicle exhausts, wood ash, chemicals, pollen, and mold spores. They invade your home in the absence of dust free windows and doors and accumulate on your floors, furniture, home appliances, and other areas making your battle with household dust and pollutants a never-ending one.

Not only does dust and pollution lead to hours of cleaning, it also reduces the life of décor items such as curtains, upholstery, and carpets.

Despite your efforts, these pollutants often remain neglected in various hard-to-reach areas of the home such as under the sofa, below the bed, behind the computer, TV, and wall hangings. 

Dust not only destroys the look and feel of your home but also affects your health badly.

The allergens that dust mites contain can cause a large number of respiratory infections like asthma. The situation even gets worsened when you are away from home on any tour or vacation, and on your return, what you find is a home laden with direful dust everywhere.

The best way to ensure your win against this everyday household battle with dust and pollutants is to prevent it from entering from gaps in windows and doors or cracks in walls. The ideal solution is to switch to anti dust windows and doors.`,
    footerName:
      'The complete anti-pollution solution - representing the future of smart fenestration technology',
    footerDescription: `Decades of R&D and experience in innovating glass and frame technology have led us to find cutting-edge solutions to various access-related problems. Precision-manufactured and installed uPVC and aluminium anti-smog doors and windows from AIS Windows block out around 95% or more of particles and smog infiltrating your home. These smog resistant doors windows are intelligently engineered to prevent all types of pollutant leakages into the interiors.

Features and benefits of dust resistant windows and doors from AIS Windows`,
    imageSrc:
      'https://cdn-dlmgh.nitrocdn.com/czhNUEyPuUXIxbYXVrhRCMSuWJGswqag/assets/static/optimized/rev-401281a/wp-content/uploads/2019/04/anti-1.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
]

export default function Features() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl  sm:py-24 lg:max-w-none ">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-2xl font-bold   text-gray-900">
              We Also Offer,
            </h2>
            <span className="flex items-center justify-center gap-x-2">
              <Link href={'/shop'}>
                <button className="rounded-lg bg-sec-color-dark-1 py-2 px-4 text-sm  font-semibold text-green-100 shadow transition duration-300 hover:text-white hover:shadow-md">
                  Shop Now
                </button>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl  sm:py-24 lg:max-w-none ">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-2xl font-bold   text-gray-900">
              Our Solutions
            </h2>
            <span className="flex items-center justify-center gap-x-2">
              <Link href={'/shop'}>
                <button className="rounded-lg bg-sec-color-dark-1 py-2 px-4 text-sm  font-semibold text-green-100 shadow transition duration-300 hover:text-white hover:shadow-md">
                  Read More
                </button>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>

          <div className="mt-6 space-y-12  lg:space-y-0">
            {solutions.map((callout, idx) => (
              <div key={callout.name} className=" relative mb-8">
                <h3 className="mt-6   mb-6 text-3xl text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {`${(idx +1)}. ${callout.name}`}
                  </a>
                </h3>
                <div className=" sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative mb-6 h-full w-full overflow-hidden rounded-lg bg-white shadow-md hover:opacity-75">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <pre className="whitespace-pre-wrap font-body text-base   text-gray-500">
                  {callout.description}
                </pre>

                <h3 className="text-md mt-6   mb-2  text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.footerName}
                  </a>
                </h3>
                <pre className="cursor-auto whitespace-pre-wrap font-body  text-base text-gray-500">
                  {callout.footerDescription}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

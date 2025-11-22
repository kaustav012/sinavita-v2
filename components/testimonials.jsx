import { Card } from "../components/ui/card";
import Marquee from "react-fast-marquee";


export default function Testimonials() {
  return (
    <>
      <div
        className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 py-16 md:py-24 text-white"
        style={{ overflow: "hidden" }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          {/* Heading Section */}
          <div className="max-w-md text-left md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold">
              WORD ON <br /> THE STREET
            </h2>
            <p className="text-2xl mt-4">Trust us with your immunity</p>
          </div>

          {/* Testimonials - Scrollable on Mobile */}
          <div className="w-full md:w-auto mt-10 md:mt-0 mr-5">
            <div className="flex md:flex-row flex-wrap gap-6 px-2 md:px-0">
              <TestimonialCard
                text="I haven’t sneezed since I took BOOST"
                user="@superman"
                tilt="-3"
              />
              <TestimonialCard
                text="The only [best] way to rise and shine"
                user="@TheentireKUWTKcast"
                tilt="3"
              />
              <TestimonialCard
                text="It’s like a refreshing cold shower"
                user="@JesseClemente"
                tilt="-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Components */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="py-6">
          <Marquee
            direction="left"
            speed={50}
            className="text-white text-xl md:text-3xl font-extrabold px-4 md:px-10"
          >
            • IT'S BEEN A TOTAL GAME-CHANGER FOR MY MIGRAINES • HAS BEEN A
            LIFESAVER FOR ME. I CAN'T EVEN TELL YOU HOW MUCH IT'S IMPROVED MY
            QUALITY OF LIFE • I CAN'T THANK YOU ENOUGH FOR HOW MUCH IT'S HELPED
            ME WITH MY MIGRAINES • I'VE TRIED SO MANY THINGS, BUT THIS STUFF
            ACTUALLY WORKS! • DEFINITELY WORTH GIVING IT A SHOT!
          </Marquee>
          <Marquee
            direction="right"
            speed={50}
            className="text-white text-xl md:text-3xl font-extrabold px-4 md:px-10 mt-3"
          >
            • IT'S BEEN A TOTAL GAME-CHANGER FOR MY MIGRAINES • HAS BEEN A
            LIFESAVER FOR ME. I CAN'T EVEN TELL YOU HOW MUCH IT'S IMPROVED MY
            QUALITY OF LIFE • I CAN'T THANK YOU ENOUGH FOR HOW MUCH IT'S HELPED
            ME WITH MY MIGRAINES • I'VE TRIED SO MANY THINGS, BUT THIS STUFF
            ACTUALLY WORKS! • DEFINITELY WORTH GIVING IT A SHOT!
          </Marquee>
        </div>
      </div>
    </>
  );
}

function TestimonialCard({ text, user, tilt }) {
  return (
    <Card
      className="bg-white text-black rounded-lg shadow-lg p-6 min-w-[250px] sm:min-w-[280px] md:w-80 flex-shrink-0"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="text-2xl mb-4">★★★★★</div>
      <p className="text-lg">{text}</p>
      <div className="mt-6 text-md font-semibold">{user}</div>
    </Card>
  );
}

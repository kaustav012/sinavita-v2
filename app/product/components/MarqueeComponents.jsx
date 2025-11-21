
import Marquee from "react-fast-marquee";

export default function MarqueeComponents({ productDetails }) {
    return (
        <>
            {/* Marquee Components */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <div className="py-6">
                    <Marquee
                        direction="left"
                        speed={50}
                        className="text-white text-xl md:text-3xl font-extrabold px-4 md:px-10"
                    >
                        {/* • IT'S BEEN A TOTAL GAME-CHANGER FOR MY MIGRAINES • HAS BEEN A
                        LIFESAVER FOR ME. I CAN'T EVEN TELL YOU HOW MUCH IT'S IMPROVED MY
                        QUALITY OF LIFE • I CAN'T THANK YOU ENOUGH FOR HOW MUCH IT'S HELPED
                        ME WITH MY MIGRAINES • I'VE TRIED SO MANY THINGS, BUT THIS STUFF
                        ACTUALLY WORKS! • DEFINITELY WORTH GIVING IT A SHOT! */}
                        <div dangerouslySetInnerHTML={{ __html: productDetails?.scroll_text }} />
                    </Marquee>
                    <Marquee
                        direction="right"
                        speed={50}
                        className="text-white text-xl md:text-3xl font-extrabold px-4 md:px-10 mt-3"
                    >
                        <div dangerouslySetInnerHTML={{ __html: productDetails?.scroll_text }} />
                    </Marquee>
                </div>
            </div>
        </>
    );
}



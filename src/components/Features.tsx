import { useState, useRef, type ReactNode, type MouseEvent, type FC } from "react";
import { TiLocationArrow } from "react-icons/ti";

// Type definitions for BentoTilt props
interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

export const BentoTilt: FC<BentoTiltProps> = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// Type definitions for BentoCard props
interface BentoCardProps {
  src: string;
  title: ReactNode;
  description?: string;
  isComingSoon?: boolean;
  isVideo?: boolean;
}

export const BentoCard: FC<BentoCardProps> = ({
  src,
  title,
  description,
  isComingSoon,
  isVideo = true,
}) => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [hoverOpacity, setHoverOpacity] = useState<number>(0);
  const hoverButtonRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      {isVideo ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      ) : (
        <img
          src={src}
          alt={typeof title === 'string' ? title : 'Feature'}
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features: FC = () => (
  <section className="bg-black pb-52 -mt-1">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Ultimate Racing Features
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Experience the most advanced racing simulation with cutting-edge
          features that deliver unparalleled realism, customization, and
          competitive gameplay.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/racing/feature-1.mp4"
          title={
            <>
              hyper<b>d</b>rive
            </>
          }
          description="Advanced physics engine delivering ultra-realistic handling, tire wear, and aerodynamics for the most authentic racing experience."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="img/feature-livery.jpg"
            title={
              <>
                liv<b>e</b>ry
              </>
            }
            description="Professional paint editor with dynamic weather effects, damage modeling, and real-time reflection mapping."
            isComingSoon
            isVideo={false}
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/racing/feature-2.mp4"
            title={
              <>
                gara<b>g</b>e
              </>
            }
            description="Deep customization system with thousands of parts, liveries, and tuning options to build your perfect racing machine."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/feature-online.jpg"
            title={
              <>
                onli<b>n</b>e
              </>
            }
            description="Competitive multiplayer with ranked seasons, tournaments, team championships, and global leaderboards."
            isComingSoon
            isVideo={false}
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re tra<b>c</b>ks c<b>o</b>ming.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <BentoCard
            src="img/feature-tracks.jpg"
            title={
              <>
              </>
            }
            isComingSoon
            isVideo={false}
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
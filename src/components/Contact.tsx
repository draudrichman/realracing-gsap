import type { FC } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

// Define an interface for the ImageClipBox component's props
interface ImageClipBoxProps {
    src: string;
    clipClass: string;
}

// Type the functional component with its props
const ImageClipBox: FC<ImageClipBoxProps> = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} />
    </div>
);

// Type the main Contact component
const Contact: FC = () => {
    return (
        <div id="contact" className="my-20 min-h-96 w-screen px-10">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        src="/img/footer3.jpg"
                        clipClass="contact-clip-path-1"
                    />
                    <ImageClipBox
                        src="/img/footer2.webp"
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                    />
                </div>

                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        src="/img/footer1.webp"
                        clipClass="contact-clip-path-2 absolute md:scale-125"
                    />
                    <ImageClipBox
                        src="/img/footer1.webp"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="mb-10 font-general text-[10px] uppercase">
                        Join Prima Corsa
                    </p>

                    <AnimatedTitle
                        title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> r<b>a</b>cing t<b>o</b>gether."
                    />

                    <Button title="contact us" containerClass="mt-10 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
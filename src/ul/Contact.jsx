import Container from "./Container";
import Subtitle from "./Subtitle";

const Contact = () => {
  return (
    <Container
      id="contact"
      className="py-10 lg:py-24 max-w-[500px] mx-auto text-center flex flex-col gap-5 "
    >
      <div className="flex flex-col gap-6">
        <p className="text-designColor text-lg font-semibold">
          04.What's Next?
        </p>
        <h3 className="md:text-6xl font-semibold">Get In touch</h3>
        <p className="text-darkText">
          Although i am not currently looking for any new opportunities,my inbox
          is always open whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>

        <a
          href="mailto:muhammadshourav625@gmail.com"
          target="blank"
          className="w-44 h-14 mx-auto text-xl tracking-wide font-semibold text-designColor rounded-md flex items-center
           justify-center border border-designColor hover:bg-textBg duration-200"
        >
          Say Hello
        </a>
      </div>
    </Container>
  );
};

export default Contact;

import Container from "./Container";

const Subtitle = ({ title, titleNo }) => {
  return (
    <Container>
      <h2 className="hidden md:inline-flex  items-center gap-1  text-2xl font-semibold ">
        <p className="text-designColor text-lg">{titleNo}</p>
        {title}
        <div className="w-60 h-[1px] bg-designColor/20" />
      </h2>
    </Container>
  );
};

export default Subtitle;

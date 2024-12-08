const SectionTitle = ({
    title,
    paragraph,
    center,
    mb = "100px",
  }: {
    title: string;
    paragraph: string;
    width?: string;
    center?: boolean;
    mb?: string;
  }) => {
    return (
      <>
        <div
          className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
          data-wow-delay=".1s"
          style={{ marginBottom: mb }}
        >
          <h2 className="text-center mb-4 text-3xl font-bold !leading-tight text-sky-800 sm:text-4xl md:text-[45px]">
            {title}
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        </div>
      </>
    );
  };
  
  export default SectionTitle;
  
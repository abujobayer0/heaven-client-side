import ReactImageMagnify from "react-image-magnify";

const ZoomImage = ({ img }) => {
  return (
    <div style={{ width: "300px", height: "200px" }}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: img,
          },
          largeImage: {
            src: img,
            width: 1200,
            height: 1800,
          },
        }}
      />
    </div>
  );
};

export default ZoomImage;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "purple",
        borderRadius: "20px",
        boxShadow: "2px 5px 2px 20px #f15a24",
      }}
      onClick={onClick}
    />
  );
}

export default SampleNextArrow;

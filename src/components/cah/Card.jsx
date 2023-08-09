import useSize from "use-fit-text";

const trueHeight = 1152;
const trueWidth = 836;
const ratio = 5.2;
const width = trueWidth/ ratio;
const height = trueHeight / ratio;

export const Card = ({ text, isBlack }) => {
  const { fontSize, ref } = useSize({maxFontSize: 550});
  console.log(fontSize);
  return (
    <div style={{width,height,border:'white 3px solid'}}>
      <div 
      ref={ref}
      style={{
        position: "absolute",
        color: isBlack ? 'white':'black',
        margin: '10px',
        width:width - 20,
        height:height - 80,
        lineHeight: fontSize ==='20%' ? 0.1 : 1,
      }}
      >
        <span style={{fontSize: fontSize}}>
        {text}
        </span>
      </div>
      <img src={isBlack ? "/cah_b.png" : "/cah_w.png"} width={width} height={height}/>
    </div>
  );
};

const text = " PLAY MUSIC • PLAY MUSIC • ";

export default function CircularText() {
  return (
    <div className="circle">
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            transform: `rotate(${i * 12}deg) translateY(-60px)`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
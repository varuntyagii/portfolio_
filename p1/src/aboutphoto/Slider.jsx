import { useEffect, useState } from "react";

const images = ["https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197929/download_6_nwgwgg.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197927/download_4_jkzmfv.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197924/Screenshot_20260622_150848_g8dd2s.jpg" , "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197926/wallpaper_programming_plphdm.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197926/download_8_rvcngk.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197927/download_5_hwhstp.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197927/download_7_kk19gm.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197927/wiponeo4x3c6yu9nx3rb.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197928/Bruce_Lee_etlxba.jpg" , "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197928/Batman_bigzsw.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197928/practice_makes_perfect_fg4roc.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197928/Impasto_Oil_Painting_of_Hands_Playing_Guitar_bewvp2.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1786549583/Samurai_quotation_wallpapers_fhfuoy.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1786549884/always_on_who_or_what_really_matters_____hctb4v.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1786549431/download_11_p1rm8q.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197930/levi_Ackerman_wallpaper_xpcwkq.jpg", "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1786547179/Screenshot_2023_1129_234958_mfr7du.jpg",];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000); // 500ms is too fast and looks broken

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="frame w-[80vw] sm:w-[60vw] md:w-[400px] aspect-[2/3] overflow-hidden relative mx-auto">
      <img
        src={images[index]}
        className="w-full h-full object-cover block transition-all duration-500"
      />
    </div>
  );
}
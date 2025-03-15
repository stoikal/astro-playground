import image1 from "~/assets/pic/Dok KLB INI IKJ_29 Oktober 2022_BW crop.jpeg";
import image2 from "~/assets/pic/Kampus IKJ_1_A4_koleksi Perpustakaan IKJ.jpeg";
import image3 from "~/assets/pic/Kampus IKJ_2_koleksi Perpustakaan IKJ.jpeg";
import image4 from "~/assets/pic/Sanggar Melukis di Kampus IKJ 3_koleksi Perpustakaan IKJ.jpeg";
import image5 from "~/assets/pic/arsip dokumentasi  LPKJ 1970-an_001_koleksi Facebook ruang arsip IKJ LPKJ.jpeg";
import image6 from "~/assets/pic/arsip dokumentasi LPKJ 1970-an_008_koleksi Facebook ruang arsip IKJ LPKJ.jpeg";

export const ImagesWithReact = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-2">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          className="w-96 h-96 object-cover"
        />
      ))}
    </div>
  );
};

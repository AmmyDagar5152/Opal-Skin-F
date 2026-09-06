import BannerSlider from "./client/BannerSlider";

export default async function Bannermain() {
  return (
    <BannerSlider
      videoUrl="https://res.cloudinary.com/dr1jqpozn/video/upload/v1788680664/bannervd.mp4"
        images={[
        "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
        "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
        "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
      ]}
    />
  );
}


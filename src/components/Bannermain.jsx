// import { adminDB } from "../lib/firebaseAdmin";
import BannerSlider from "./client/BannerSlider";

export default async function Bannermain() {
  // const docSnap = await adminDB.doc("main-banner/banner").get();
  // const data = docSnap.data();

  // if (!data) return null;

  return (
    <BannerSlider
      images={[
        "/fum-img/perf1.jpg",
        "/fum-img/ban6.png",
        "/fum-img/ban1.jpg",
        "/fum-img/perf4.jpg",
      ]}
      // title={data.title}
      // subtitle={data.subtitle}
    />
  );
}

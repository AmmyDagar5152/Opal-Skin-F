import Bannermain from "@/components/Bannermain";
// import { adminDB } from "../../lib/firebaseAdmin";

export async function generateMetadata() {
  // const snap = await adminDB.doc("main-banner/banner").get();
  // const data = snap.data();

  return {
    // title: data?.title || "My Website",
    // description: data?.subtitle || "Welcome to our site.",
    // openGraph: {
    //   images: [data?.img],
    // },
  };
}

export default function Home() {
  return (
    <main>
      <Bannermain />
    </main>
  );
}

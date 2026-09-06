import FragranceCollections from "@/components/reuseComp/FragranceCollections";
import CollectionPerfume from "@/components/reuseComp/CollectionPerfume";
import { collectionsData } from "@/data/collection";

export default function CollectionPage({ params }) {
  const data = collectionsData[params.type];

  if (!data) return <p>Collection not found</p>;

  return (
    <div className="flex flex-col w-full">
      <FragranceCollections data={data} />
      <CollectionPerfume type={params.type} />
    </div>
  );
}

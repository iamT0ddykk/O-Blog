type PostSlugPops = {
  params: Promise<{ slugs: string }>;
};

export default async function DefaultSlug({ params }: PostSlugPops) {
  const { slugs } = await params;
  return <h1>PAGINA DINAMICAAAAAAAA: {slugs}a </h1>;
}

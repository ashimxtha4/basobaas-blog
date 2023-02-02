import Head from "next/head";
import { useRouter } from "next/router";
export function PageAndTitleDesc({
  title,
  desc,
}: {
  title?: string;
  desc?: string;
}) {
  const router = useRouter();
  return (
    <Head>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {desc && (
        <>
          <meta name="description" content={desc} />
          <meta property="og:description" content={desc} />
          <meta name="twitter:description" content={desc} />
        </>
      )}
      <meta
        property="og:url"
        content={process.env.NEXT_PUBLIC_FRONT_END_URL + router.asPath}
      />
      <meta
        name="twitter:url"
        content={process.env.NEXT_PUBLIC_FRONT_END_URL + router.asPath}
      />
    </Head>
  );
}

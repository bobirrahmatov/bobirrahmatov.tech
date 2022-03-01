import Head from "next/head";

const siteURL = "https://bobirrahmatov.tech";
const author = "Bobir Rahmatov";
const shortname = "bobirrahmatov";
const description =
  "I'm Bobir Rahmatov. I am self-taught developer trying to learn new tech stacks and sharing my experiences and knowledge";
const socialBanner = "/favicon.png";

type Props = {
  pageTitle: string,
  postPath?: string,
  canonicalUrl?: string,
};

const DocumentHead = ({
  pageTitle,
  postPath,
  canonicalUrl,
}: Props) => {
  let postUrl = `${siteURL}`;

  if (postPath) {
    postUrl = `${siteURL}${postPath}/`;
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.jpg" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="light dark" name="msapplication-TileColor" />
      <link rel="canonical" href={canonicalUrl} />

      <link rel="apple-touch-icon" href="/favivon.jpg" />
      <meta content={description} name="description" />
      <meta name="author" content={author} />
      <meta name="author" content={shortname} />
      <meta name="publisher" content={author} />
      <meta
        name="keywords"
        content="Bobir Rahmatov, bobirrahmatov, tech, ReactJS, RPA, Python, Visual Basic, Figma, Vercel"
      />

      <meta name="robots" content="index,follow" />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      <meta property="og:title" content={pageTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:image:alt" content={socialBanner} />
      <meta property="og:url" content={postPath ? postUrl : siteURL} />
      <meta property="og:type" content={postPath ? "article" : "website"} />
      <meta
        property="og:site_name"
        content="Bobir Rahmatov's personal website"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={shortname} />
      <meta name="twitter:title" content="Bobir Rahmatov's personal website" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialBanner} />
    </Head>
  );
};

export default DocumentHead;

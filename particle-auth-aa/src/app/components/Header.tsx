import Head from "next/head";
import Image from "next/image";

const Header: React.FC = () => {
  // Links, metadata and titles for the Header component
  const headContent = {
    title: "Particle Auth Core App",
    metaDescription:
      "Particle Auth with Account Abstraction Code demo in Next js",
    favicon: "/favicon.ico",
  };

  const mainHeading = {
    text: "Welcome to",
    linkHref: "https://particle.network",
    linkImageSrc: "/dark.png",
    linkImageAlt: "Particle Logo",
    linkImageWidth: 240,
    linkImageHeight: 24,
  };

  const subHeading =
    "Connect with social logins using Particle Auth and send a transaction using the Account Abstraction SDK.";

  return (
    <>
      <Head>
        <title>{headContent.title}</title>
        <meta name="description" content={headContent.metaDescription} />
        <link rel="icon" href={headContent.favicon} />
      </Head>
      <h1 className="text-4xl mt-4 font-bold mb-12 text-center flex items-center justify-center">
        {mainHeading.text}
        <a
          href={mainHeading.linkHref}
          className="text-purple-400 hover:text-purple-300 transition duration-300 ml-2"
        >
          <Image
            src={mainHeading.linkImageSrc}
            alt={mainHeading.linkImageAlt}
            width={mainHeading.linkImageWidth}
            height={mainHeading.linkImageHeight}
          />
        </a>
      </h1>
      <h2 className="text-xl font-bold mb-6">{subHeading}</h2>
    </>
  );
};

export default Header;

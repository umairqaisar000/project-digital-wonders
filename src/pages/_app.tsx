import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}

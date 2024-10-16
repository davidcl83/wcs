import "../public/styles/main.css";
import Footer from "@/components/layouts/footer";
import NavHeader from "@/components/layouts/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div id="root">
        <div>
          <NavHeader />
          <main>
            <div className="fuQfHo">
              <div className="content_container">
                <Component {...pageProps} />
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

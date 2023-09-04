import ContentLoader from "react-content-loader";

const Loader = () => (
  <>
    <div className="mt-10">
      <div className="w-10 h-10 bg-black"></div>
      <ContentLoader className="w-full h-32">
        <rect x="0" y="0" rx="5" ry="5" className="w-10 h-10" />
        <rect x="80" y="17" rx="4" ry="4" className="w-7/12 h-2" />
      </ContentLoader>
    </div>
    <ContentLoader
      viewBox="0 0 380 70"
      backgroundColor="#ffadad"
      foregroundColor="#ff8080"
    >
      {/* Only SVG shapes */}
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
  </>
);

export default Loader;

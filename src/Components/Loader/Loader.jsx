const Loader = () => (
  <div
    className="position-fixed top-50 start-50 translate-middle"
    style={{
      zIndex: 9999,
    }}
  >
    <div
      className="spinner-border text-primary"
      role="status"
      style={{ width: "3rem", height: "3rem" }}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Loader;

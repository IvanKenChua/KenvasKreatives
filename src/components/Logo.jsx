export function Logo({ light = false, className = "" }) {
  return (
    <span
      className={`brand-lockup ${light ? "brand-lockup--light" : ""} ${className}`.trim()}
    >
      <img
        src={
          light
            ? "/brand/kenvas-wordmark-light.svg"
            : "/brand/kenvas-wordmark.svg"
        }
        alt=""
        className="brand-lockup__wordmark"
        width="842"
        height="168"
      />
      <span className="brand-lockup__sub" aria-hidden="true">
        KREATIVE
      </span>
    </span>
  );
}

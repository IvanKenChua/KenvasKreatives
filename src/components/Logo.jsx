export function Logo({ className = "" }) {
  return (
    <span className={`brand-lockup ${className}`.trim()}>
      <img
        src="/brand/kenvas-wordmark.svg"
        alt=""
        className="brand-lockup__wordmark brand-lockup__wordmark--ink"
        width="842"
        height="168"
      />
      <img
        src="/brand/kenvas-wordmark-light.svg"
        alt=""
        className="brand-lockup__wordmark brand-lockup__wordmark--paper"
        width="842"
        height="168"
      />
      <span className="brand-lockup__sub" aria-hidden="true">
        KREATIVE
      </span>
    </span>
  );
}

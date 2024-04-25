/* eslint-disable react/prop-types */
// eslint-disable-next-line react/no-unknown-property

export default function Button({ children, large, small,full }) {
  return (
    <>
      <button
        className={`button ${small ? "small" : ""} ${large ? "large" : ""} ${full ? "full" : ""}`}
      >
        {children}
      </button>
      <style>{`
        button {
          border: none;
          color: #fff;
          background: #0f4b5b;
          cursor: pointer;
          appearance: none;
          padding: 10px 16px; /* Default padding */
          transition: all 0.3s ease-in-out;
        }
        button:hover{
          background: #296778;
      }
      button:active{
          background:#61B5CB ;
      }
      .full{
        padding: 8px 128px;
        font-size:12px;
        font-weight:700;
        border-radius: 20px;
      }
        .small {
          padding: 10px 16px;
          font-size:16px;
          border-radius: 24px;
        }
        .large {
          padding: 22px 80px;
          font-size:22px;
          border-radius: 40px;
        }
        .medium {
          padding: 22px 80px;
          font-size:20px;
          border-radius: 40px;
        }
      `}</style>
    </>
  );
}

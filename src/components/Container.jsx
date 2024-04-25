/* eslint-disable react/prop-types */
// eslint-disable-next-line react/no-unknown-property

export default function Container({ children }) {
    return (
      <>
        <div style={{ width: '1320px', margin: '0 auto'}}>{children}</div>
      </>
    );
  }
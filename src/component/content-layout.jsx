export const ContentLayout = ({ type, count, children }) => {
  return (
    <>
      <h3>This state is managed by {type}</h3>
      <div className="parent">
        <div>
          <h4 className="parent-header">&apos;Global&apos; state</h4>
          <p className="parent-content">{count}</p>
        </div>
        <div className="children-wrapper">{children}</div>
      </div>
    </>
  );
};

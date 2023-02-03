import React from "react";

const Skeleton = (props: any) => {
  return <div className="skeleton"></div>;
};

function makeArray(length: number) {
  let dummy = [];
  for (var i = 0; i < length; i++) {
    dummy.push(i);
  }
  return dummy;
}

export const SkeletonLine = (props: any) => {
  const dummy = makeArray(props.count);
  return (
    <>
      {dummy.map((data: any) => (
        <div
          key={data}
          className="skeletonLine"
          style={{ height: `${props.height}` }}
        ></div>
      ))}
    </>
  );
};

export default Skeleton;

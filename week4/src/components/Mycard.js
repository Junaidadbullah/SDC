import React from "react";

function Mycard({ icons }) {
  return (
    <div className="text-center bg-white rounded-2xl flex flex-col items-center p-[10px]">
      <h1 className="text-3xl">{icons}</h1>
      <h1>Dummy Text</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quae
        excepturi placeat dolorem est, exercitationem iusto, voluptatibus
        explicabo consectetur laboriosam necessitatibus similique reiciendis
        culpa quibusdam velit itaque quidem ullam rerum.
      </p>
      <h1>Dummy Text</h1>
    </div>
  );
}

export default Mycard;

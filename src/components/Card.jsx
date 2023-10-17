import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img className="card-img-top" src="https://media.istockphoto.com/id/629050018/photo/chilli-paneer-tikka-or-paneer-kabab.jpg?s=1024x1024&w=is&k=20&c=NSUzZDW0lAmEWFC4UXObS7SU7BlDwGfv332U9PxGaV4=" alt="Card" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some Important text.</p>
            <div className="container w-100">
              <select className="m-2 h-100 rounded" style={{"backgroundColor":"#4CBB17"}}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 rounded" style={{"backgroundColor":"#4CBB17"}}>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

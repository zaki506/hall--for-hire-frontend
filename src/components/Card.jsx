import React from "react";

const Card = ({ imgUrl, text }) => {
  return (
    <>
      <div style={{ marginBottom: "3rem" }}>
        <div className="position-relative ">
          <img className="rounded" src={imgUrl} alt="" />
          <div
            className="rounded position-absolute p-2"
            style={{
              backgroundColor: "black",

              bottom: "10px",
              right: "10px",
            }}
          >
            <p className="text-white">
              from <span className="fs-2">$12500</span>
            </p>
            <p className="text-white">hire fee / per session</p>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <h3 className="fw-bold">Lorem, ipsum.</h3>
            <p>
              <span className="me-2">
                <i class="bx bx-chair"></i> 400
              </span>
              <span>
                <i class="bx bx-user-circle"></i> 600
              </span>
            </p>
          </div>
          <p className="text-muted">Lorem ipsum dolor sit amet.</p>
          <p className="text-muted">
            <i
              class="bx bxs-location-plus "
              style={{ verticalAlign: "middle" }}
            ></i>{" "}
            Lorem, ipsum.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <div className="position-relative ">
          <img className="rounded" src={imgUrl} alt="" />
          <div
            className="rounded position-absolute p-2"
            style={{
              backgroundColor: "black",
              bottom: "10px",
              right: "10px",
            }}
          >
            <p className="text-white">
              from <span className="fs-2">$12500</span>
            </p>
            <p className="text-white">hire fee / per session</p>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <h3 className="fw-bold">Lorem, ipsum.</h3>
            <p>
              <span className="me-2">
                <i class="bx bx-chair"></i> 400
              </span>
              <span>
                <i class="bx bx-user-circle"></i> 600
              </span>
            </p>
          </div>
          <p className="text-muted">Lorem ipsum dolor sit amet.</p>
          <p className="text-muted">
            <i
              class="bx bxs-location-plus "
              style={{ verticalAlign: "middle" }}
            ></i>{" "}
            Lorem, ipsum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

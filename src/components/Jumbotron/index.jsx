import { useState } from "react";
import FirstBox from "./First";

export default function Jumbotron() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  console.log(show);
  return (
    <section className="section ">
      <div className="container ">
        <FirstBox />

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
            <div
              className="intro-item mb-5 mb-lg-0"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <i
                className="ti-bar-chart color-one"
                style={{ textAlign: "center" }}
              ></i>
              <h4
                className="mt-4 mb-3 color-one"
                style={{ textAlign: "center" }}
              >
                Accountancy
              </h4>
              <div
                style={{
                  border: "2px solid #0275d8",
                  padding: "7px",
                  paddingTop: "12px",
                  borderRadius: "5px",
                }}
              >
                <p
                  style={{
                    height: !show1 ? "290px" : "100%",
                    overflow: "hidden",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Odit, ducimus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ad facere veniam velit voluptate corrupti
                  laborum esse, hic quas rerum, quod ipsum et qui quae possimus
                  molestias nihil numquam fuga consequatur. Nostrum neque,
                  reiciendis laboriosam exercitationem totam praesentium
                  asperiores voluptas expedita molestias quod culpa, explicabo
                  at nemo animi nisi fugit hic quas rerum, quod ipsum et qui
                  quae possimus molestias nihil numquam fuga consequatur.
                  Nostrum neque, reiciendis laboriosam exercitationem totam
                  praesentium asperiores voluptas expedita molestias quod culpa,
                  explicabo at nemo animi nisi fugit
                </p>
                <div
                  className="mt-2 color-one"
                  onClick={() => setShow1(!show1)}
                  style={{ cursor: "pointer" }}
                >
                  {show1 ? "Show Less" : "Show More"}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="intro-item mb-5 mb-lg-0 "
              style={{ display: "flex", flexDirection: "column" }}
            >
              <i
                className="ti-stats-up color-one"
                style={{ textAlign: "center" }}
              ></i>
              <h4
                className="mt-4 mb-3 color-one"
                style={{ textAlign: "center" }}
              >
                Advies
              </h4>
              <div
                style={{
                  border: "2px solid #0275d8",
                  padding: "7px",
                  paddingTop: "12px",
                  borderRadius: "5px",
                }}
              >
                <p
                  style={{
                    height: !show ? "290px" : "100%",
                    overflow: "hidden",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Odit, ducimus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ad facere veniam velit voluptate corrupti
                  laborum esse, hic quas rerum, quod ipsum et qui quae possimus
                  molestias nihil numquam fuga consequatur. Nostrum neque,
                  reiciendis laboriosam exercitationem totam praesentium
                  asperiores voluptas expedita molestias quod culpa, explicabo
                  at nemo animi nisi fugit hic quas rerum, quod ipsum et qui
                  quae possimus molestias nihil numquam fuga consequatur.
                  Nostrum neque, reiciendis laboriosam exercitationem totam
                  praesentium asperiores voluptas expedita molestias quod culpa,
                  explicabo at nemo animi nisi fugit
                </p>
                <div
                  className="mt-2 color-one"
                  onClick={() => setShow(!show)}
                  style={{ cursor: "pointer" }}
                >
                  {show ? "Show Less" : "Show More"}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div
              className="intro-item"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <i
                className="ti-blackboard color-one"
                style={{ textAlign: "center" }}
              ></i>
              <h4
                className="mt-4 mb-3 color-one"
                style={{ textAlign: "center" }}
              >
                Risk Management
              </h4>
              <div
                style={{
                  border: "2px solid #0275d8",
                  padding: "7px",
                  paddingTop: "12px",
                  borderRadius: "5px",
                }}
              >
                <p
                  style={{
                    height: !show2 ? "290px" : "100%",
                    overflow: "hidden",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Odit, ducimus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ad facere veniam velit voluptate corrupti
                  laborum esse, hic quas rerum, quod ipsum et qui quae possimus
                  molestias nihil numquam fuga consequatur. Nostrum neque,
                  reiciendis laboriosam exercitationem totam praesentium
                  asperiores voluptas expedita molestias quod culpa, explicabo
                  at nemo animi nisi fugit hic quas rerum, quod ipsum et qui
                  quae possimus molestias nihil numquam fuga consequatur.
                  Nostrum neque, reiciendis laboriosam exercitationem totam
                  praesentium asperiores voluptas expedita molestias quod culpa,
                  explicabo at nemo animi nisi fugit
                </p>
                <div
                  className="mt-2 color-one"
                  onClick={() => setShow2(!show2)}
                  style={{ cursor: "pointer" }}
                >
                  {show2 ? "Show Less" : "Show More"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

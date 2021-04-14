import React, { useEffect, useState } from "react";
import { Badge, Media } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobsList = () => {
  const [jobList, setJobList] = useState([]);
  let url = `https://my-json-server.typicode.com/HoNguyenTrieu/itviec_json/jobs`;
  useEffect(() => {
    const getJobsList = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setJobList(data);
      } catch (error) {
        console.log("error message", error);
      }
    };
    getJobsList();
  }, [url]);

  return (
    <div>
      <div>
        <h1 className="text-center">JOB LIST</h1>
      </div>
      <div className="row mt-2 d-flex justify-content-center">
        {jobList.map((job) => (
          <Media
            style={{
              width: "1000px",
              border: "grey solid 1px",
              borderRadius: "5px",
              marginBottom: "25px",
            }}
          >
            <div
              className="col-md-3 col-lg-2 d-none d-md-block"
              style={{ padding: "3rem" }}
            >
              <img
                width={64}
                height={64}
                className="align-self-start mr-3"
                src={job.img}
                alt="Generic placeholder"
              />
            </div>
            <div
              class="col-sm-12 col-md-9 col-lg-10"
              style={{ padding: "2rem" }}
            >
              <div className="d-flex justify-content-center">
                <Media.Body>
                  <h5>
                    <Link to={`/job/${job.id}`}>{job.title}</Link>
                  </h5>
                  <p>$ {job.salary}</p>
                  <p>
                    {job.benefits.map((item) => (
                      <ul>
                        <li key={job.id}>{item}</li>
                      </ul>
                    ))}
                  </p>
                  {job.tags.map((item) => (
                    <Badge className="mr-1" variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </Media.Body>
              </div>
            </div>
          </Media>
        ))}
      </div>
    </div>
  );
};

export default JobsList;

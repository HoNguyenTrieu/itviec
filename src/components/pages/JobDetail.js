import React, { useEffect, useState } from "react";
// useParams use to get parameter of the dynamic url
import { Badge, Card, Media } from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment";
const JobDetail = () => {
  const [getDetailJob, setGetDetailJob] = useState({});
  const [tag, setTag] = useState([]);
  const { id } = useParams();
  console.log("What is in parameter", id);
  useEffect(() => {
    const getSingleJob = async () => {
      let url = `https://my-json-server.typicode.com/HoNguyenTrieu/itviec_json/jobs/${id}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setGetDetailJob(data);
      setTag(data.tags);
    };
    getSingleJob();
  }, []);

  return (
    <>
      <div className="text-center mt-5">
        <h1>Chi tiết Công Việc Nè Chế!!!!!</h1>
      </div>
      <div
        className="d-flex flex-column justify-content-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="d-flex justify-content-center">
          <Card
            bg="info"
            text="white"
            style={{ width: "50rem", height: "auto" }}
            className="mb-2"
          >
            <Card.Header>{getDetailJob.title}</Card.Header>
            <Card.Body>
              <Card.Title> Công việc hấp dẫn </Card.Title>
              <p>{moment(getDetailJob.time).fromNow()}</p>
              {tag.map((item) => (
                <Badge className="mr-1" variant="secondary">
                  {item}
                </Badge>
              ))}
              <Card.Text>$ {getDetailJob.salary}</Card.Text>
              <Card.Text>{getDetailJob.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default JobDetail;

import { Col, Container, Row } from "react-bootstrap";
import "./WorkDetails.css";
import { Link, useParams } from "react-router-dom";

function WorkDetails({ works }) {

  const { id } = useParams();

  const findItem = works?.find((item) => item.id === Number(id));

  if (!findItem) {
    return <h2 className="text-center mt-5">Work Not Found</h2>;
  }

  const disableRightClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="work-details-section">

      <Container>

        <div className="work-title mt-5">
          <h2>{findItem.title}</h2>
          <p>{findItem?.category?? <span className="text-danger fs-5">This page is currently under maintenance. Comming soon...</span>} 
        </p>
        <Link to="/" className="back-home">
                Go Back
              </Link>
        </div>

        <Row className="work-grid">

          {findItem.videos?.map((video, index) => (

            <Col xs={12} sm={6} md={4} lg={3} key={index}>

              <div
                className="video-card"
                onContextMenu={disableRightClick}
              >

                <div className="video-wrapper">

                  <iframe
                    src={video.url}   /* use DRIVE PREVIEW LINK */
                    title={`video-${index}`}
                    className="video-frame"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>

                  <div className="video-overlay"></div>

                </div>

                

              </div>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
}

export default WorkDetails;
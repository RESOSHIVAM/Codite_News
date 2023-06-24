import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  const newDate = new Date(date).toGMTString();
  

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source} </span>
        </div>

        <img
          src={
            !imageUrl
              ? "https://img.etimg.com/thumb/msid-101102847,width-1070,height-580,imgsize-605584,overlay-etmarkets/photo.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              {" "}
              By {!author ? "Unknown" : author} on {newDate}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="blank"
            className="btn btn-sm btn-dark"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

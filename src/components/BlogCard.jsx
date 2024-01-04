import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function BlogCard({ stories }) {
  return (
    <>
      {stories.map((story) => (
        <div className="col-lg-6 col-md-6 mb-5" key={story.slug.current}>
          <Link to={`/blog/${story.slug.current}`}>
            <div className="blog-item">
              <div style={{ height: "12rem" }}>
                <img
                  src={story.mainImage.asset.url}
                  alt={story.title}
                  loading="lazy"
                  className="img-fluid w-full rounded fixed-height-image"
                />
              </div>
              <div className="blog-item-content bg-white p-4">
                <div className="blog-item-meta py-1 px-2">
                  <span className="text-muted text-capitalize mr-3">
                    <p className="text-black mb-2">
                      {story.name} &middot;{" "}
                      {format(new Date(story.publishedAt), "yyyy-MM-dd")}
                    </p>
                  </span>
                </div>
                <h3 className="mt-3 mb-3">{story.title}</h3>
                <p className="mb-4" style={{ height: "90px" }}>
                  {`${story.body[0].children[0].text.substring(0, 100)}...`}
                </p>
                <button className="btn btn-small btn-main btn-round-full">
                  Learn More
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

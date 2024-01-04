import React, { useEffect, useState } from "react";
import { client } from "../lib/clients";
import { Link } from "react-router-dom";
import { format } from "date-fns";
export const LatestBlog = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
      title,
      slug,
      body,
      publishedAt,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt,
      },
      "name": author -> name,
    } | order(publishedAt desc)`
      )
      .then((data) => {
        setStories(data);
      })
      .catch(console.error);
  }, []);
  
  const latestStories = stories.slice(0, 3);
  
  return (
    <>
      {latestStories.map((story) => (
        <div className="col-lg-4 col-md-6 mb-5" key={story.slug.current}>
          <Link to={`/blog/${story.slug.current}`}>
            <div className="card bg-white border-0" style={{ width: "100%", height: "100%" }}>
              <div className="ratio ratio-4x3">
                <img
                  src={story.mainImage.asset.url}
                  alt={story.title}
                  loading="lazy"
                  className="img-fluid rounded"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="card-body mt-2">
                <div className="blog-item-meta">
                  <p className="text-black">
                    By {story.name} &middot;
                    {format(new Date(story.publishedAt), "yyyy-MM-dd")}
                    <span className="ml-2 mr-2"></span>
                  </p>
                  <h3 className="text-black ">{story.title}</h3>
                  <p className=" text-black">
                    {`${story.body[0].children[0].text.substring(0, 100)}...`}
                  </p>
                </div>

                <button className="btn btn-small btn-solid-border btn-round-full text-black">
                  Learn More
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};


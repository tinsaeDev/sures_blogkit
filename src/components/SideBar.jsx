import { useEffect, useState } from "react";
import { client } from "../lib/clients";
import { Link } from "react-router-dom";
import { format } from "date-fns/esm";

export default function SideBar() {
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
    } | order(publishedAt asc)`
      )
      .then((data) => {
        setStories(data);
      })
      .catch(console.error);
  }, []);
  const olderStories = stories.slice(0,6)

  return (
    <div className="sidebar-widget latest-post card border-0 p-4 mb-3">
      <h5>Archives</h5>
      {olderStories.map((story) => (
        <Link
          to={`/blog/${story.slug.current}`}
          key={story.slug.current}
          className="media border-bottom py-3 d-flex align-items-center"
        >
          <img
            className="mr-3 img-fluid rounded"
            src={story.mainImage.asset.url}
            alt={story.title}
            loading="lazy"
            width="80" 
          />
          <div className="media-body">
            <h6 className="my-2">{story.title}</h6>
            <span className="text-sm text-muted">
            {format(new Date(story.publishedAt), "yyyy-MM-dd")}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

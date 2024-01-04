import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../lib/clients";
import { format } from "date-fns";
import PortableText from "@sanity/block-content-to-react";
import SideBar from "../components/SideBar";
import db from "../firebase.config";
import { SocialShare } from "./SocialShare";
import SyntaxHighlighter from "react-syntax-highlighter";
import urlBuilder from "@sanity/image-url";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";

const urlFor = (source) =>
  urlBuilder({ projectId: "replace with ur value", dataset: "production" }).image(source);

const serializer = {
  types: {
    mainImage: (props) => (
      <figure>
        <img
          src={urlFor(props.node.asset).width(600).url()}
          alt={props.node.alt}
        />
        <figcaption>{props.node.caption}</figcaption>
      </figure>
    ),
    code: (props) => {
      const [copied, setCopied] = useState(false);
      const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

      if (props.node && props.node.code && props.node.language) {
        return (
            <div className="flex">
              <div className="bg-secondary d-flex justify-content-end">
              <CopyToClipboard text={props.node.code} onCopy={handleCopy}>
                <button className="border-0">
                <i className="fab fa-file-o" aria-hidden="true" style={{backgroundColor:"gray"}}/>
                  {copied ? "Copied!" : "copy"}           
                </button>
              </CopyToClipboard>
              </div>
              <SyntaxHighlighter
                language={props.node.language}
                style={a11yDark}
              >
                {props.node.code}
              </SyntaxHighlighter>
            </div>
        );
      } else {
        return null;
      }
    },
    image: (props) => (
      <figure className="">
        <img
          src={urlFor(props.node.asset._ref).width(600).url()}
          alt={props.node.alt}
          style={{ height: 300, borderRadisu: 5, alignItems: "center" }}
        />
      </figure>
    ),
  },
};

export default function SingleBlog() {
  const [singlePost, setSinglePost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [likes, setLike] = useState(0);
  const [comments, setComments] = useState([]);
  const handleLikeClick = () => {
    setLike(likes + 1);
    db.collection("likes")
      .add({
        slug: slug,
        likes: likes + 1,
      })
      .then((docRef) => {
        console.log("Likes updated in the database.");
      })
      .catch((error) => {
        console.error("Error updating likes: ", error);
      });
  };
  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
          title,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          },
          publishedAt
        }`
      )
      .then((data) => {
        setSinglePost(data[0]);
        console.log(data);
        setIsLoading(false);
      });
  }, [slug]);

  const sub = (e) => {
    e.preventDefault();

    db.collection("comments")
      .add({
        name: name,
        email: email,
        message: message,
        story: slug,
      })
      .then((docRef) => {
        const newCommentId = docRef.id;
        const newComment = {
          name: name,
          email: email,
          message: message,
          story: slug,
          id: newCommentId,
        };
        setComments([...comments, newComment]);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const Fetchdata = () => {
    const lastCommentTimestamp =
      comments.length > 0 ? comments[comments.length - 1].timestamp : null;
    db.collection("comments")
      .where("story", "==", slug)
      .where("timestamp", ">", lastCommentTimestamp)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setComments((arr) => [...arr, data]);
        });
      });
  };

  useEffect(() => {
    Fetchdata();
  }, []);
  const FetchLikes = (slug) => {
    db.collection("likes")
      .where("slug", "==", slug)
      .get()
      .then((querySnapshot) => {
        let totalLikes = 0;
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          totalLikes += data.likes;
        });
        setLike(totalLikes);
      })
      .catch((error) => {
        console.error("Error fetching likes: ", error);
      });
  };

  useEffect(() => {
    FetchLikes(slug);
  }, [slug]);

  const renderedComments = comments.slice(0, 4);
  return (
    <>
     <section className="page-title bg-1">
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Blog</span>
                  <h1 className="text-capitalize mb-4 text-lg">Blog</h1>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="index.html" className="text-white">
                        Home
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-white">/</span>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-white-50">
                      Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    <section className="section blog-wrap bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div className="single-blog-item">
                  <div className="blog-item-content bg-white p-5">
                    {isLoading ? (
                      <h1>Loading...</h1>
                    ) : (
                      <section>
                        <img
                          src={singlePost.mainImage.asset.url}
                          alt={singlePost.title}
                          className="img-fluid rounded"
                        />
                        <div className="blog-item-meta  bg-gray py-1 px-2">
                          <span className="text-muted text-capitalize mr-3">
                            <button onClick={handleLikeClick} className="btn ">
                              <i
                                className="fa fa-thumbs-up"
                                aria-hidden="true"
                              ></i>
                            </button>
                            <span>
                              {likes} {likes == 1 ? "Like" : "Likes"}
                            </span>
                          </span>
                          <span className="text-muted text-capitalize mr-3">
                            Published On
                          </span>
                          <span className="text-black text-capitalize mr-3">
                            <i className="ti-time mr-1" />{" "}
                            {format(
                              new Date(singlePost.publishedAt),
                              "yyyy-MM-dd"
                            )}
                          </span>
                        </div>
                        <div className="block__content">
                          <h1>{singlePost.title}</h1>
                          <PortableText
                            blocks={singlePost.body}
                            serializers={serializer}
                          />
                        </div>
                      </section>
                    )}
                    <SocialShare />
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-5">
                <div className="comment-area card border-0 p-5">
                  <h4 className="mb-4">Comments</h4>
                  <ul className="comment-tree list-unstyled"></ul>
                  <ul className="list-group">
                    {renderedComments.map((comment, index) => (
                      <li key={index} className="list-group-item">
                        <p className="font-weight-bold mb-1">{comment.name}</p>
                        <p className="mb-0">{comment.message}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <form
                  onSubmit={(event) => {
                    sub(event);
                  }}
                  className="contact-form bg-white rounded p-5"
                >
                  <h4 className="mb-4">Write a comment</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name:"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="mail"
                          id="mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email:"
                        />
                      </div>
                    </div>
                  </div>
                  <textarea
                    className="form-control mb-3"
                    name="comment"
                    cols={30}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Your Comment"
                    defaultValue={""}
                  />
                  <button
                    className="btn btn-main btn-round-full"
                    type="submit"
                    name="submit-contact"
                    id="submit_contact"
                    defaultValue="Submit Message"
                  >
                    {" "}
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar-wrap">
              <div>
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

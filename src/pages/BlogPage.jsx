import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import SideBar from "../components/SideBar";
import { client } from "../lib/clients";
import FirstBox from "../components/Jumbotron/First";

export default function BlogPage() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredStories, setFilteredStories] = useState([]);
  const [allStories, setAllStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 10;

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
        setAllStories(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    setFilteredStories(allStories.slice(indexOfFirstStory, indexOfLastStory));
  }, [currentPage, allStories]);

  const handleSearch = () => {
    const filtered = allStories.filter((story) =>
      story.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredStories(filtered);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="main-wrapper">
        <section className="page-title bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Our Blog</span>
                  <h1 className="text-capitalize mb-4 text-lg">
                    Blog Artikelen
                  </h1>
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
                        Our Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section pb-0">
          <div className="container pb-0">
            <FirstBox />
          </div>
        </section>
        <section className="section blog-wrap bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <BlogCard
                    stories={
                      filteredStories.length > 0 ? filteredStories : allStories
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar-wrap">
                  <div className="sidebar-widget search card p-4 mb-3 border-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search"
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button
                      onClick={handleSearch}
                      className="btn btn-mian btn-small d-block mt-2"
                    >
                      search
                    </button>
                  </div>
                  <div
                    className="w-100 mb-5"
                    style={{ height: "250px", backgroundColor: "#fff" }}
                  >
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="img1"
                      style={{
                        width: "100%",
                        height: "80%",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <ul className="list-inline footer-socials">
                        <li className="list-inline-item p-3">
                          <a href="https://www.facebook.com/login">
                            <i className="fab fa-facebook-f mr-2"></i>
                          </a>
                        </li>
                        <li className="list-inline-item p-3">
                          <a href="https://twitter.com/login">
                            <i className="fab fa-twitter mr-2"></i>
                          </a>
                        </li>
                        <li className="list-inline-item p-3">
                          <a href="https://linkedin.com/login">
                            <i className="fab fa-linkedin mr-2"></i>
                          </a>
                        </li>
                        <li className="list-inline-item p-3">
                          <a href="https://www.instagram.com/login/">
                            <i className="fab fa-instagram mr-2 "></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <SideBar />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-8">
                <nav aria-label="...">
                  <ul className="pagination">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="btn  btn-small btn-main   page-link  mr-2 page-numbers"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Prev
                      </button>
                    </li>
                    {Array.from(
                      { length: Math.ceil(allStories.length / storiesPerPage) },
                      (_, index) => (
                        <li
                          className={`page-item ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                          key={index}
                        >
                          <button
                            className={`btn  btn-small btn-main  page-link page-numbers ${
                              currentPage === index + 1 ? "current" : ""
                            }`}
                            style={{ backgroundColor: "#65A8DC" }}
                            onClick={() => setCurrentPage(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      )
                    )}
                    <li
                      className={`page-item ${
                        currentPage ===
                        Math.ceil(allStories.length / storiesPerPage)
                          ? "disabled"
                          : ""
                      }`}
                    >
                      <button
                        className="btn  btn-small btn-main  page-link rounded text-black"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={
                          currentPage ===
                          Math.ceil(allStories.length / storiesPerPage)
                        }
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

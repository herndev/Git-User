import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [githubData, setGithubData] = useState([]);
  const [githubUser, setGithubUser] = useState("herndev");

  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${githubUser}`);
    const data = await response.json();
    return setGithubData(data);
  };

  const handleChange = (event) => {
    event.preventDefault();
    var username = document.getElementById("username").value;
    setGithubUser(username);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="content container my-5">
        <div className="card mini-card crv-25 mx-2">
          <div className="row">
            <div className="col-md bg-success p-2">
              <h1 className="text-white">Git User</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-5 py-4 alert-success text-left">
              {githubData.message && (
                <div className="alert alert-warning crv-8 mini-card">
                  <h5>No Github User Found</h5>
                  Please provide an existing github username
                </div>
              )}
              {githubData.login && (
                // if login is not null then show the data
                <div className="user_info">
                  <div className="row">
                    <div className="col-md-4">
                      <a
                        href={githubData.avatar_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={githubData.avatar_url}
                          alt="avatar"
                          className="img-fluid crv-25 bg-white mini-card"
                        />
                      </a>
                    </div>
                    <div className="col-md-8">
                      <h3 className="text-capitalize mt-2">
                        {githubData.name}
                      </h3>
                      <small className="form-inline">
                        <div className="display-startx">
                          <span className="bg-dark py-1 px-2 mini-card display-centery crv-25">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-github text-white imr-5"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            <a
                              href={githubData.html_url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-white"
                            >
                              {githubData.login}
                            </a>
                          </span>
                          {githubData.twitter_username && (
                            <span className="bg-info py-1 px-2 mini-card display-centery crv-25 mx-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-twitter text-white imr-5"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                              </svg>
                              <a
                                href={
                                  "https://twitter.com/" +
                                  githubData.twitter_username
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="text-white"
                              >
                                {githubData.twitter_username}
                              </a>
                            </span>
                          )}
                          {githubData.email && (
                            <span className="bg-danger py-1 mini-card display-centery px-2 crv-25">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-envelope-fill text-white imr-5"
                                viewBox="0 0 16 16"
                              >
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                              </svg>
                              <a
                                href={"mailto:" + githubData.email}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white"
                              >
                                {githubData.email}
                              </a>
                            </span>
                          )}
                        </div>
                      </small>
                      <p className="mt-4">{githubData.bio}</p>
                    </div>
                    <div className="col-md-2"></div>
                  </div>

                  <div className="mt-3">
                    {githubData.location && (
                      <p className="im-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-geo-alt text-danger"
                        >
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>{" "}
                        {githubData.location}
                      </p>
                    )}

                    {githubData.blog && (
                      <p className="im-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-globe2 text-primary imr-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                        </svg>
                        <span className="pl-5">
                          <a
                            href={githubData.blog}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {githubData.blog}
                          </a>
                        </span>
                      </p>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="bg-danger text-white p-3 crv-25 display-centered-spacebetween card mini-card mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-kanban-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                          </svg>
                          <span className="my-2">Repos</span>

                          <span className="font-weight-bold">
                            {githubData.public_repos}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="bg-primary text-white p-3 crv-25 display-centered-spacebetween card mini-card mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-person-hearts"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
                            />
                          </svg>
                          <span className="my-2">Followers</span>

                          <span className="font-weight-bold">
                            {githubData.followers}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="bg-warning p-3 crv-25 display-centered-spacebetween card mini-card mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-person-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
                          </svg>
                          <span className="my-2">Following</span>

                          <span className="font-weight-bold">
                            {githubData.following}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-6 p-5">
              <form
                onSubmit={handleChange}
                method="post"
                className="form-inline"
              >
                <input
                  type="text"
                  id="username"
                  placeholder="Search for username"
                  onChange={(e) => setGithubUser(e.target.value)}
                  className="input_search form-control"
                  required
                />
                <button className="search_button btn-success form-control mt-3">
                  Search Github
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

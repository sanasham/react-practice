import { Component } from "react";
import SinglePost from "../singlePost/SinglePost";
class Posts extends Component {
  state = {
    posts: [
      { title: "Post 1", description: "Post 1 description" },
      { title: "Post 2", description: "Post 2 description" },
    ],
    postTitle: "Posts Lists",
    showPosts: true,
  };
  updateTitelHandler() {
    this.setState({ postTitle: "modified title" });
    console.log("modified title");
    console.log("this", this);
  }
  TogglePosts = () => {
    console.log("toggle function clicked", this.state.showPosts);
    this.setState({ showPosts: !this.state.showPosts });
  };

  render() {
    // setTimeout(() => {
    //   const allPosts = [...this.state.posts];
    //   allPosts[0].title = "modified 1 post";
    //   allPosts[1].title = "modified 2 post";
    //   this.setState({ posts: allPosts });
    //   console.log("modifed");
    //   console.log("this", this);
    // }, 3000);
    return (
      <div className="flex-row w-1/3 justify-center items-center">
        <h1>{this.state.postTitle}</h1>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-red-900 focus:outline-none bg-white rounded-full border border-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={this.updateTitelHandler.bind(this)}
        >
          Update Posts Title
        </button>{" "}
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-red-900 focus:outline-none bg-white rounded-full border border-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={this.TogglePosts}
        >
          {this.state.showPosts ? "Hide posts" : "Show posts"}
        </button>
        {this.state.showPosts && (
          <div>
            <SinglePost
              title={this.state.posts[0].title}
              description={this.state.posts[0].description}
            />{" "}
            <br />
            <SinglePost
              title={this.state.posts[1].title}
              description={this.state.posts[1].description}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Posts;

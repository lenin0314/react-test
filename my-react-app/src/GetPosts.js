
import React, { useEffect, useState } from "react";
import './GetUsers.css'; // Import the CSS file

const GetPosts = () => {
  const authToken = "fba855bf2d9793ffb297b1c2d679eb284971326f362a1d4da3c2215ed4505665";
  const endpoint = "https://gorest.co.in/public/v2/posts";
  const usersEndpoint = "https://gorest.co.in/public/v2/posts";
  const commentsEndpoint = "https://gorest.co.in/public/v2/comments";
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedPostId, setSelectedPostId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCommentPage, setCurrentCommentPage] = useState(1);
  const postsPerPage = 5;
  const COMMENTS_PER_PAGE = 5;

  useEffect(() => {
    fetch(usersEndpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    })
      .then(response => response.json())
      .then(data => setUsers(data))
      .then(data => {
        console.log('USERS', data);
        setPosts(data && data ? data : []); // Adjust this line based on the structure of the API response
      })
      .catch(error => console.error('Error:', error));
  }, []);


 
  useEffect(() => {
    if (selectedUserId) {
      fetch(`${endpoint}?user_id=${selectedUserId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      })
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error:', error));
    } else {
      setPosts([]); // Empty the posts array when no user is selected

    }
  }, [selectedUserId]);


  useEffect(() => {
    setSelectedPostId("");
  }, [selectedUserId]);


  useEffect(() => {
    if (selectedPostId) {
      fetch(`${commentsEndpoint}?post_id=${selectedPostId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      })
        .then(response => response.json())
        .then(data => setComments(data))
        .catch(error => console.error('Error:', error));
    } else {
      setComments([]); // Empty the comments array when no post is selected
    }
  }, [selectedPostId]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
    height: '100px'
    // width: '100%'
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '35px',
    padding: '60px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.15)',
    backgroundColor: '#f8f9fa',
    // display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: '10px',
    marginLeft: "100px",
  };

  const cardStyle2 = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px", // Reduced padding from 30px to 10px
    width: "350px",
    boxSizing: "border-box",
    float: "left",
    marginLeft: "100px",
    marginTop: "55px",
    backgroundColor: "#f8f9fa", // light gray
  };

  return (
    <>
    <div style={cardStyle2}>
      <h3 style={{ textAlign: "center" }}>Filter Section</h3>
      <form className="user-form" style={formStyle}>
        <label>
          Select User:
          <select value={selectedUserId} onChange={e => setSelectedUserId(e.target.value)}>
            <option value="">Select User</option>
            {users.map((post) => (
              <option key={post.id} value={post.user_id}>
                {post.user_id}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
    <div className="container" style={{ display: 'flex' }}>
     
    <div style={cardStyle}>
        <h3 style={{ paddingLeft: '250px', width: '100%' }}>LIST OF POSTS ------ (Select a post)</h3>
        <table className="styled-table">
          <thead>
            <tr>
              <th>PostID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts && currentPosts.map((post) => (
              <tr key={post.id} onClick={() => setSelectedPostId(post.id)}>
              <td>{post.id}</td>
                <td>{post.user_id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {pageNumbers.map(number => (
            <button key={number} onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          ))}
        </div>
        {selectedPostId && (
        <div  >
          <h3 style={{ paddingLeft: '250px', width: '100%' }}>LIST OF COMMENTS</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Post ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
            {comments
              .slice((currentCommentPage - 1) * COMMENTS_PER_PAGE, currentCommentPage * COMMENTS_PER_PAGE)
              .map((comment) => (
                <tr key={comment.id}>
                  <td>{comment.id}</td>
                  <td>{comment.post_id}</td>
                  <td>{comment.name}</td>
                  <td>{comment.email}</td>
                  <td>{comment.body}</td>
                </tr>
            ))}
            </tbody>
          </table>
          <div className="pagination">
            {Array.from({ length: Math.ceil(comments.length / COMMENTS_PER_PAGE) }, (_, index) => (
              <button key={index} onClick={() => setCurrentCommentPage(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
  
      )}
        
      </div>
 
    </div>
    </>
  );
};

export default GetPosts;
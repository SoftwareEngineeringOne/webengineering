console.log("Admin script loaded");

/**
 *
 * @param {string} postId
 */
function deletePost(postId) {
  fetch(`/posts/${postId}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Error deleting post");
    }
  });
}

function approvePost(postId) {
  fetch(`/posts/${postId}/approve`, {
    method: "POST",
  }).then((response) => {
    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Error approving post");
    }
  });
}

window.deletePost = deletePost;
window.approvePost = approvePost;

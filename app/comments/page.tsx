"use client";
import React, { useEffect, useState } from "react";
const createComment = async (comment) => {
  try {
    const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments",
          {
            method:"POST",
            body:JSON.stringify(comment),
            headers:{
              "Content-type":"aplication.json; charset= UTF-8"
            },

          });
          const data = await response.json();
          return data
  } catch (error) {
    console.error(error);
    
  }

}
function page() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchcomments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await response.json();
        setComments(data);
        setLoading(false);
  
        
      } catch (error) {
        console.error(error);
        setLoading(false);
        
      }
    };
    fetchcomments();
  }, []);
  const handleCreate = async ()=>{
    const comment = {
      name: "Joe Due",
      email:"bjbdbj@mail.ru",
      body:"vgvxdsvcs"

    }
    const newComment = await createComment(comment);

  };
  return (
    <div className="bg-lightOrange4 min-h-screen">
      <h1 className="text-center font-bold text-5xl">Commints</h1>
      <button className="rounded-md bg-red" onClick={handleCreate}>create comment</button>
      {comments.length > 0 &&
        comments.map((commet) => (
          <div key={commet.id}>
            <h3>{commet.name}</h3>
            <p>{commet.body}</p>
          </div>
        ))}
      {comments.length === 0 && (
        <p className="text-center text-red">no commits</p>
      )}
      {loading && <p className="text-center">loading</p>}
    </div>
  );
}

export default page;

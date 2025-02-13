import React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const AdminUsers = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    if (title && content) {
      setPosts([...posts, { id: Date.now(), title, content }]);
      setTitle("");
      setContent("");
    }
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Blog</h1>
      <div className="mb-4">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-2"
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-2"
        />
        <Button onClick={addPost}>Add Post</Button>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-4 border rounded-lg shadow">
            <CardContent>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.content}</p>
              <Button
                variant="destructive"
                onClick={() => deletePost(post.id)}
                className="mt-2"
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}



"use client";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

interface IComment {
  id: number;
  title: string;
  comment: string;
  created_At: string;
}

const Supabase = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_PROJECT_URL as string,
    process.env.NEXT_PUBLIC_PROJECT_APL_KEYS as string
  );
  const [comments, setComments] = useState<IComment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getComments = async () => {
    try {
      const { data, error } = await supabase.from("comments").select();
      if (error) {
        throw error;
      }
      setComments(data as IComment[]);
    } catch (error) {
      setError((error as Error).message);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  const addNewComments = async () => {
    if (!title || !content) return;

    if (!title || !content) return;
    try {
      const { data, error } = await supabase
        .from("comments")
        .insert({
          title: title,
          comment: content,
        })
        .select("*");

      if (error) {
        throw error;
      }

      setComments((prev) => [...prev, ...(data as IComment[])]);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {comments?.map((c) => (
        <div key={c.id}>
          <p>{c.title}</p>
          <p>{c.comment}</p>
        </div>
      ))}
      <label htmlFor={title}>제목</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor={content}>내용</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="button" onClick={addNewComments}>
        추추
      </button>
    </div>
  );
};

export default Supabase;

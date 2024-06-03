"use client";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const Supabase = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_PROJECT_URL as string,
    process.env.NEXT_PUBLIC_PROJECT_APL_KEYS as string
  );
  const [comments, setComments] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const getComments = async () => {
    try {
      const { data, error } = await supabase.from("comments").select();
      if (error) {
        throw error;
      }
      setComments(data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {comments?.map((c) => (
        <div key={c.id}>{c.title}</div>
      ))}
    </div>
  );
};

export default Supabase;

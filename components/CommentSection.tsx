"use client";
import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Send, X } from "lucide-react";

type Comment = {
  id: number;
  commentor_name: string;
  comment: string;
  created_at: string;
};

export default function CommentSection({ pageName }: { pageName: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });

  // Fetch comments from Supabase
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("portfolio_comments")
        .select("*")
        .eq("page_name", pageName)
        .order("created_at", { ascending: false });
      if (!error) setComments(data || []);
    };
    fetchComments();
  }, []);

  // Add a new comment
  const handleAddComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("portfolio_comments")
      .insert([{page_name: pageName, commentor_name: newComment.name, comment: newComment.comment }])
      .select();
    if (!error && data) {
      setComments([data[0], ...comments]);
      setNewComment({ name: "", comment: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 relative">
      <h2 className="text-2xl mb-4 font-semibold">💬 Comments</h2>

      {/* Comments List */}
      <div className="space-y-4 mb-24">
        {comments.length === 0 && (
          <p className="text-gray-400 italic text-center">No comments yet.</p>
        )}
        {comments.map((c) => (
          <div key={c.id} className="border border-gray-700 p-3 rounded-lg">
            <p className="font-semibold">{c.commentor_name}</p>
            <p className="text-gray-400">{c.comment}</p>
          </div>
        ))}
      </div>

      {/* Floating Paper Plane Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-8 right-8 bg-indigo-600 p-4 rounded-full shadow-lg hover:bg-indigo-500 transition"
        aria-label="Add Comment"
      >
        <Send className="w-6 h-6" />
      </button>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl w-96 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Add Comment</h3>

            <form onSubmit={handleAddComment} className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                value={newComment.name}
                onChange={(e) =>
                  setNewComment({ ...newComment, name: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                required
              />
              <textarea
                placeholder="Write your comment..."
                value={newComment.comment}
                onChange={(e) =>
                  setNewComment({ ...newComment, comment: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                required
              />
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

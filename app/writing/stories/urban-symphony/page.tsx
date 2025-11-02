"use client";
import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Send } from "lucide-react";
import CommentSection from "@/components/CommentSection";

export default function UrbanSymphony() {
  const page_name = "urban_symphony";
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="prose prose-about dark:prose-invert max-w-none text-center">
        <h1 className="text-4xl font-bold mb-6">At the Equinox</h1>
        
      </div>
      <br />
      {/* Poem content */}
      <div className="prose prose-about dark:prose-invert max-w-none mb-12">
        <p className="text-left">
          The tide ebbs and reveals orange and purple sea stars.<br />
I have no theory of radiance,<br />
</p>
        <p className="text-right">
                only that light refracts through water droplets,<br />
                but after rain evaporates<br />
off pine needles, the needles glisten.<br />
</p>
        <p className="text-left">

In the courtyard, we spot the rising shell of a moon,<br />
and, at the equinox, bathe in its gleam.<br />
</p>
        <p className="text-right">
Using all the tides of starlight,<br />
                we find<br />
                vicissitude is our charm.<br />
</p>
        <p className="text-left">
On the mud flats off Homer,<br />
I catch the tremor when waves start to slide back in;<br />
</p>
        <p className="text-right">
and, from Roanoke, you carry<br />
                the leafing jade smoke of willows.<br />
</p>
        <p className="text-left">
Looping out into the world, we thread<br />
                and return. The lapping waves<br />
</p>
        <p className="text-center">
cover an expanse of mussels clustered on rocks;<br />
and, giving shape to what is unspoken,<br />

                forsythia buds and blooms in our arms.<br />
        </p>
      </div>

      {/* Render Comment Section */}
      <CommentSection pageName={page_name} />
    </div>
  );
}

// export default function PoemsPage() {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [showForm, setShowForm] = useState(false);
//   const [newComment, setNewComment] = useState({ name: "", comment: "" });

//   // Fetch comments from Supabase
//   // useEffect(() => {
//   //   const fetchComments = async () => {
//   //     const { data, error } = await supabase
//   //       .from("portfolio_comments")
//   //       .select("*")
//   //       .order("created_at", { ascending: false });

//   //     //console.error("Error fetching comments:", data);

//   //     if (error) {
//   //       console.error("Error fetching comments:", error);
//   //     } else {
//   //       setComments(data || []);
//   //     }
//   //   };

//   //   fetchComments();
//   // }, []);

//   // // Handle form submit
//   // const handleAddComment = async (e: FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();

//   //   const { data, error } = await supabase
//   //     .from("portfolio_comments")
//   //     .insert([{ commentor_name: newComment.name, comment: newComment.comment }])
//   //     .select();

//   //   if (error) {
//   //     console.error("Error adding comment:", error);
//   //   } else if (data) {
//   //     setComments([data[0], ...comments]);
//   //     setNewComment({ name: "", comment: "" });
//   //     setShowForm(false);
//   //   }
//   // };

  

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-between bg-gray-900 text-white p-8 relative">
//       {/* Header */}
//       <div className="max-w-3xl text-center">
//         <h1 className="text-4xl font-bold mb-6">Poems</h1>
//         <p className="text-gray-300 mb-12">
//           A space for my creative poetry and thoughts.
//         </p>
//       </div>

//       {/* Comments Section */}
//       <div className="w-full max-w-2xl">
//         <h2 className="text-2xl mb-4 font-semibold">Comments</h2>

//         <div className="space-y-4 mb-24">
//           {comments.map((c) => (
//             <div key={c.id} className="border border-gray-700 p-3 rounded-lg">
//               <p className="font-semibold">{c.commentor_name}</p>
//               <p className="text-gray-400">{c.comment}</p>
//             </div>
//           ))}
//           {comments.length === 0 && (
//             <p className="text-gray-500 italic">No comments yet. Be the first!</p>
//           )}
//         </div>
//       </div>

//       {/* Floating Paper Plane Button */}
//       <button
//         onClick={() => setShowForm(true)}
//         className="fixed bottom-8 right-8 bg-indigo-600 p-4 rounded-full shadow-lg hover:bg-indigo-500 transition"
//         aria-label="Add Comment"
//       >
//         <Send className="w-6 h-6" />
//       </button>

//       {/* Popup Comment Form */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="bg-gray-800 p-6 rounded-xl w-96 shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Add Comment</h3>

//             <form onSubmit={handleAddComment} className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 value={newComment.name}
//                 onChange={(e) =>
//                   setNewComment({ ...newComment, name: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
//                 required
//               />

//               <textarea
//                 placeholder="Write your comment..."
//                 value={newComment.comment}
//                 onChange={(e) =>
//                   setNewComment({ ...newComment, comment: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
//                 required
//               />

//               <div className="flex justify-end space-x-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="text-gray-400 hover:text-white"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import { useState } from "react";

export default function EditableSection({ defaultText, defaultImage }) {
  const [text, setText] = useState(defaultText);
  const [image, setImage] = useState(defaultImage);

  return (
    <div className="flex flex-col items-center space-y-4">
      <img src={image} alt="Custom" className="w-64 h-64 object-cover rounded-lg shadow-md" />
      <textarea
        className="w-3/4 p-3 border rounded-md dark:bg-gray-800 dark:text-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}


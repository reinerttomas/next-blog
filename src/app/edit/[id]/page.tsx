"use client";

import { PostFormInput } from "@/app/types";
import ButtonReturn from "@/components/ButtonReturn";
import PostForm from "@/components/PostForm";
import { SubmitHandler } from "react-hook-form";

const PostEditPage = () => {
  const handleUpdatePost: SubmitHandler<PostFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <ButtonReturn />
      <h1 className="text-2xl my-4 font-bold text-center">Update post</h1>
      <PostForm submit={handleUpdatePost} isEditing={true} />
    </div>
  );
};

export default PostEditPage;

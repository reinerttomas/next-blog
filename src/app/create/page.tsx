"use client";

import PostForm from "@/components/PostForm";
import { PostFormInput } from "../types";
import { SubmitHandler } from "react-hook-form";
import ButtonReturn from "@/components/ButtonReturn";

const PostCreatePage = () => {
  const handleCreatePost: SubmitHandler<PostFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <ButtonReturn />
      <h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
      <PostForm submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default PostCreatePage;

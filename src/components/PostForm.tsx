"use client";

import { PostFormInput } from "@/app/types";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface PostFormProps {
  submit: SubmitHandler<PostFormInput>;
  isEditing: boolean;
}

const PostForm: FC<PostFormProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<PostFormInput>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        className="input input-bordered w-full max-w-lg"
        placeholder="Title..."
        {...register("title", { required: true })}
      />

      <textarea
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Content..."
        {...register("content", { required: true })}
      ></textarea>

      <select
        className="select select-bordered w-full max-w-lg"
        defaultValue=""
        {...register("tag", { required: true })}
      >
        <option disabled value="">
          Select tags
        </option>
        <option>javascript</option>
        <option>php</option>
        <option>python</option>
      </select>

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default PostForm;

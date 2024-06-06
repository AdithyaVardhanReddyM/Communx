"use client";

import React, { ChangeEvent, useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { CommentValidation } from "@/lib/validations/post";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { useUploadThing } from "@/lib/uploadthing";
import { isBase64Image } from "@/lib/utils";
import { Button } from "./ui/button";
import { addCommentToPost } from "@/lib/actions/post.action";
import { usePathname } from "next/navigation";

type Props = {
  postId: string;
  currentUserId: string;
  currentUserImg: string;
};

const Comment = ({ postId, currentUserId, currentUserImg }: Props) => {
  const pathname = usePathname();
  const { startUpload } = useUploadThing("media");

  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof CommentValidation>>({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      post_photo: null,
      post: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    if (values.post_photo) {
      const blob = values.post_photo;

      const hasImageChanged = isBase64Image(blob);
      if (hasImageChanged) {
        const imgRes = await startUpload(files);

        if (imgRes && imgRes[0].url) {
          values.post_photo = imgRes[0].url;
        }
      }
    }

    await addCommentToPost(
      postId,
      values.post,
      JSON.parse(currentUserId),
      pathname,
      values.post_photo
    );
    form.reset();
  };

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-2">
      <h1 className="font-bold text-lg">Comments</h1>
      <Form {...form}>
        <form
          className="mt-5 flex justify-center items-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="post"
            render={({ field }) => (
              <FormItem className="flex w-full items-center gap-2 justify-center">
                <FormLabel>
                  <Image
                    src={currentUserImg}
                    alt="profile image"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </FormLabel>
                <FormControl className="no-focus">
                  <Input
                    type="text"
                    placeholder="Share your comment..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="post_photo"
            render={({ field }) => (
              <FormItem className="flex justify-center items-center gap-2">
                <FormLabel>
                  {/* {field.value ? (
                    <Image
                      src={field.value}
                      alt="profile_icon"
                      priority
                      width={70}
                      height={50}
                      className="object-contain border border-[#ff9500]"
                    />
                  ) : (
                    <h1 className="text-center text-gray-500">Image Preview</h1>
                  )} */}
                </FormLabel>
                <FormControl className="flex-1 text-base-semibold text-gray-200">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImage(e, field.onChange)}
                  />

                  {/* <Image
                    src={"/attach.svg"}
                    alt="attach icon"
                    width={24}
                    height={24}
                  >
                    
                  </Image> */}
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-[#ff9500] ml-2">
            Comment
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Comment;

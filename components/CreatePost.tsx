"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useOrganization } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { PostValidation } from "@/lib/validations/post";
import Image from "next/image";
import { Input } from "./ui/input";
import { useUploadThing } from "@/lib/uploadthing";
import { ChangeEvent, useState } from "react";
import { isBase64Image } from "@/lib/utils";
import { createPost } from "@/lib/actions/post.action";

interface Props {
  userId: string;
}

function PostThread({ userId }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { startUpload } = useUploadThing("media");

  const [files, setFiles] = useState<File[]>([]);

  const { organization } = useOrganization();

  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      post_photo: null,
      post: "",
      accountId: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof PostValidation>) => {
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

    await createPost({
      text: values.post,
      author: userId,
      image: values.post_photo ? values.post_photo : null,
      communityId: organization ? organization.id : null,
      path: pathname,
    });
    router.push("/home");
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
    <Form {...form}>
      <form
        className="mt-5 flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="post"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-1">
              <FormLabel className="ml-2">Content</FormLabel>
              <FormControl className="no-focus">
                <Textarea rows={10} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="post_photo"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center gap-4">
              <FormLabel>
                <p className="mb-6">Attach an Image</p>
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile_icon"
                    priority
                    width={150}
                    height={100}
                    className="w-full object-contain border border-[#ff9500]"
                  />
                ) : (
                  <h1 className="test-center text-gray-500">Image Preview</h1>
                )}
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Add an Image to your Post"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-[#ff9500]">
          Share Post
        </Button>
      </form>
    </Form>
  );
}

export default PostThread;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  UseFormReturn,
  DefaultValues,
  FieldValues,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "@/node_modules/next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constans/index";
import ImageUpload from "./ImageUpload";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  OnSubmit,
}: Props<T>) => {
  const isSignin = type === "SIGN_IN";

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {};

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        {isSignin ? "Welcome Back to BookWise" : "Create your Library Account"}
      </h1>
      <p className="text-light-100">
        {isSignin
          ? "Acces the vast collection of resources, and stay updated"
          : "Please completed all fields and upload a valid university ID to gain acces to the library"}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 w-full"
        >
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {field.name === "universityCard" ? (
                      <ImageUpload />
                    ) : (
                      <Input
                        required
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        {...field}
                        className="form-input"
                      />
                    )}
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit">Submit</Button>
        </form>
      </Form>

      <p className="text-center text-base fotn-medium">
        {isSignin ? "New to Bookwise ? " : "Already have an account ? "}

        <Link
          href={isSignin ? "/sign-up" : "/sign-in"}
          className="font-bold text-primary"
        >
          {isSignin ? "Create an account" : "Sign in"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;

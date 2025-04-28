"use client";

import { z } from "zod";
import { cn } from "@/lib/styles";
import { FormEventHandler } from "react";

export default function RatingForm({
  rating,
  updateRating,
  onSuccess,
}: {
  rating: number | null;
  updateRating: (rating: number) => void;
  onSuccess: () => void;
}) {
  function handleSubmit(e: FormEventHandler<HTMLFormElement>) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    const schema = z
      .object({
        rating: z.coerce.number().min(1).max(5),
      })
      .strict()
      .required();

    try {
      schema.parse(data);

      onSuccess();
    } catch (error: unknown) {
      // handle validation error but since there is no form submission, no catch is needed
      console.log({ error });
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
      <div className="flex justify-center items-center w-fit p-4 rounded-full bg-white/5">
        <img src={"/icon-star.svg"} alt="Star icon" />
      </div>
      <h1 className="text-2xl text-surface-text font-bold">How did we do?</h1>
      <p className="text-xs text-surface-text-dimmed tracking-wide">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul radioGroup="rating" className="flex w-full justify-between">
        {[1, 2, 3, 4, 5].map((points) => (
          <li
            key={points}
            className={cn(
              "size-10 rounded-full text-surface-text-dimmed bg-white/5",
              "hover:bg-primary hover:text-black",
              rating === points && "bg-white text-black"
            )}
          >
            <label
              htmlFor={"rating " + points}
              className="flex size-full justify-center items-center text-sm font-bold hover:cursor-pointer"
            >
              {points}
            </label>
            <input
              id={"rating " + points}
              type="radio"
              hidden={true}
              name="rating"
              value={points}
              onChange={() => updateRating(points)}
              checked={rating ? points === rating : false}
            />
          </li>
        ))}
      </ul>
      <button
        type="submit"
        disabled={!rating}
        className={cn(
          "p-3 rounded-full bg-primary uppercase text-sm font-bold tracking-widest",
          "hover:cursor-pointer hover:bg-white"
        )}
      >
        Submit
      </button>
    </form>
  );
}

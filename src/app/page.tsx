"use client";

import { useState } from "react";
import RatingForm from "./rating-form";
import Feedback from "./feedback";

export default function Home() {
  const [rating, setRating] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  return (
    <main className="flex flex-col h-screen justify-center items-center bg-background">
      <section className="flex justify-center w-full p-6">
        {/* Card */}
        <div className="flex flex-col items-center max-w-sm gap-4 p-6 rounded-2xl bg-surface">
          {showFeedback ? (
            <Feedback rating={rating as number} />
          ) : (
            <RatingForm
              rating={rating}
              updateRating={(rating) => setRating(rating)}
              onSuccess={() => setShowFeedback(true)}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default function Feedback({ rating }: { rating: number }) {
  return (
    <div className="flex flex-col items-center py-4 gap-6">
      <img src={"/illustration-thank-you.svg"} alt="" className="bg-inherit" />
      <h2 className="text-sm text-primary bg-white/5 px-3 py-1 rounded-full">
        You selected {rating} out of 5
      </h2>
      <h1 className="text-3xl text-surface-text font-semibold">Thank you!</h1>
      <p className="text-sm text-surface-text-dimmed text-center tracking-wide">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

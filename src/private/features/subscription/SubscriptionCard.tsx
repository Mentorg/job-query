import Button from "../../../shared/components/ui/Button";
import { Subscription } from "../../../shared/types/subscription";

type SubscriptionCardProps = {
  plan: Subscription;
};

function SubscriptionCard({ plan }: SubscriptionCardProps) {
  function handleChoice() {
    return;
  }

  return (
    <div
      className={`${plan.is_active ? "border-primary" : "border-slate-100 "} flex w-full flex-col items-center rounded-md border-2 bg-slate-100 px-6 py-6 xl:px-12 2xl:min-w-[75%] 2xl:max-w-[75%]`}
    >
      <h2 className="text-xl font-medium">{plan.name}</h2>
      {plan.is_active && <p className="text-primary">Active plan</p>}
      <p className="m-12 text-4xl font-medium xl:text-5xl">
        {plan.price}/
        {plan.is_annual ? (
          <span className="text-sm">Year</span>
        ) : (
          <span className="text-sm">Month</span>
        )}
      </p>
      <ul>
        {plan.features?.map((feature) => (
          <li key={feature} className="text-sm leading-8 xl:leading-10">
            {feature}
          </li>
        ))}
      </ul>
      <Button
        onClick={handleChoice}
        className="mb-auto mt-12 rounded-md bg-primary px-6 py-2 text-sm text-white transition-all hover:bg-primary/70"
      >
        Chose Plan
      </Button>
    </div>
  );
}

export default SubscriptionCard;

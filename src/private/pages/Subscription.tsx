import { useState } from "react";
import SubscriptionCard from "../features/subscription/SubscriptionCard";
import { subscription } from "../features/subscription/data/subscription";

function Subscription() {
  const [priceAnnual, setPriceAnnual] = useState<boolean>(false);

  const filteredSubscription = subscription.filter(
    (plan) => plan.is_annual === priceAnnual,
  );

  return (
    <div className="flex w-full flex-col gap-y-10 px-6 py-4 md:px-10 lg:px-12 xl:px-14">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold md:mt-4 2xl:text-3xl">
          Subscription
        </h1>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <h3 className="font-medium">Monthly</h3>
          <div className="mx-4 flex flex-col items-center justify-center ">
            <div
              className="flex h-[1.5rem] w-[3rem] cursor-pointer items-center rounded-full bg-primary p-1"
              onClick={() => {
                setPriceAnnual(!priceAnnual);
              }}
            >
              <div
                className={
                  "h-[1.25rem] w-[1.25rem] transform rounded-full bg-slate-100 shadow-md duration-300 ease-in-out" +
                  (priceAnnual ? " translate-x-5 transform" : null)
                }
              ></div>
            </div>
          </div>
          <h3 className="font-medium">Annual</h3>
        </div>
        <div className="mt-10 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 2xl:grid-cols-3">
          {filteredSubscription.map((plan) => (
            <SubscriptionCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subscription;

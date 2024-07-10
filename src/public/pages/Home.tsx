import { useState } from "react";
import Hero from "../layouts/Hero";
import JobAdvertisement from "../components/JobAdvertisement";
import Button from "../../shared/components/ui/Button";
import { job as jobData } from "../../shared/data/job";

function Home() {
  const jobPerGroup = 8;
  const [next, setNext] = useState<number>(jobPerGroup);

  const loadMore = () => setNext(next + jobPerGroup);

  return (
    <>
      <Hero />
      <section className="h-full w-full bg-slate-100 py-10">
        <div className="container mx-auto px-4">
          {jobData.slice(0, next).map((job) => (
            <JobAdvertisement key={job.id} job={job} />
          ))}
          <div className="flex justify-center">
            {next < jobData?.length && (
              <Button
                onClick={loadMore}
                className="mt-4 rounded-md bg-slate-300 px-8 py-2 text-sm font-medium text-white transition-all hover:bg-slate-400"
              >
                Load More
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

import { useContext } from "react";
import { PiArrowsDownUp } from "react-icons/pi";
import Table from "../../../../context/Table";
import Menus from "../../../../context/Menus";
import JobRow from "./JobRow";
import Button from "../../../../../shared/components/ui/Button";
import { JobContext } from "../../../../context/JobContext";
import { Job } from "../../../../../shared/types/job";
import { useSortableData } from "../../../../hooks/useSortableData";

function JobsTable() {
  const context = useContext(JobContext);
  if (!context) throw new Error("JobContext is not provided");

  const { jobList } = context;
  const { items, requestSort } = useSortableData(jobList);

  return (
    <Menus>
      <Table tableType="jobs">
        <Table.Header>
          <Button
            onClick={() => requestSort("id")}
            className="flex items-center justify-between"
          >
            Id
            <PiArrowsDownUp className="h-auto w-[1.25rem] rounded-full p-0.5 text-slate-600 transition-all hover:bg-slate-100" />
          </Button>
          <Button
            onClick={() => requestSort("position_title")}
            className="flex items-center justify-between"
          >
            Title
            <PiArrowsDownUp className="h-auto w-[1.25rem] rounded-full p-0.5 text-slate-600 transition-all hover:bg-slate-100" />
          </Button>
          <Button
            onClick={() => requestSort("employment_type")}
            className="flex items-center justify-between"
          >
            Type
            <PiArrowsDownUp className="h-auto w-[1.25rem] rounded-full p-0.5 text-slate-600 transition-all hover:bg-slate-100" />
          </Button>
          <Button
            onClick={() => requestSort("location")}
            className="flex items-center justify-between"
          >
            Location
            <PiArrowsDownUp className="h-auto w-[1.25rem] rounded-full p-0.5 text-slate-600 transition-all hover:bg-slate-100" />
          </Button>
          <Button
            onClick={() => requestSort("created_at")}
            className="flex items-center justify-between"
          >
            Date Posted
            <PiArrowsDownUp className="h-auto w-[1.25rem] rounded-full p-0.5 text-slate-600 transition-all hover:bg-slate-100" />
          </Button>
          <Button
            onClick={() => requestSort("applicants")}
            className="flex items-center justify-between"
          >
            Applicants
            <PiArrowsDownUp className="h-auto w-[1.25rem] rounded-full p-0.5 text-slate-600 transition-all hover:bg-slate-100" />
          </Button>
          <Button
            onClick={() => requestSort("status")}
            className="flex items-center justify-between"
          >
            Status
            <PiArrowsDownUp className="h-auto w-[1.25rem] rounded-full p-0.5 text-slate-600 transition-all hover:bg-slate-100" />
          </Button>
          <div>&nbsp;</div>
        </Table.Header>
        <Table.Body
          data={items as Job[]}
          render={(job: Job) => <JobRow job={job} key={job.id} />}
        />
      </Table>
    </Menus>
  );
}

export default JobsTable;

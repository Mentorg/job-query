import { useContext } from "react";
import { PiArrowsDownUp } from "react-icons/pi";
import Menus from "../../context/Menus";
import ApplicantRow from "./ApplicantRow";
import Table from "../../context/Table";
import Button from "../../../shared/components/ui/Button";
import { ApplicantContext } from "../../context/ApplicantContext";
import { useSortableData } from "../../hooks/useSortableData";
import { Application } from "../../../shared/types/application";

function ApplicantsTable() {
  const context = useContext(ApplicantContext);
  if (!context) throw new Error("ApplicantContext is not provided");

  const { filteredApplications } = context;
  const { items, requestSort } = useSortableData(filteredApplications);

  const filteredItems = items.filter((item) => "applicant_id" in item);

  return (
    <Menus>
      <Table tableType="applicants">
        <Table.Header>
          <Button
            onClick={() => requestSort("id")}
            className="flex items-center justify-between"
          >
            Id
            <PiArrowsDownUp className="h-auto w-[1.25rem] rounded-full p-0.5 text-slate-600 transition-all hover:bg-slate-100" />
          </Button>
          <Button
            onClick={() => requestSort("name")}
            className="flex items-center justify-between"
          >
            Name
            <PiArrowsDownUp className="h-auto w-[1.25rem] rounded-full p-0.5 text-slate-600 transition-all hover:bg-slate-100" />
          </Button>
          <Button
            onClick={() => requestSort("email")}
            className="flex items-center justify-between"
          >
            Email
            <PiArrowsDownUp className="h-auto w-[1.25rem] rounded-full p-0.5 text-slate-600 transition-all hover:bg-slate-100" />
          </Button>
          <Button
            onClick={() => requestSort("position_title")}
            className="flex items-center justify-between"
          >
            Position
            <PiArrowsDownUp className="h-auto w-[1.25rem] rounded-full p-0.5 text-slate-600 transition-all hover:bg-slate-100" />
          </Button>
          <Button
            onClick={() => requestSort("created_at")}
            className="flex items-center justify-between"
          >
            Application Date
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
          data={filteredItems as Application[]}
          render={(applicant: Application) => (
            <ApplicantRow key={applicant.id} applicant={applicant} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ApplicantsTable;

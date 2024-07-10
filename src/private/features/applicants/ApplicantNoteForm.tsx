import { useContext, useState } from "react";
import Label from "../../../shared/components/form/Label";
import TextArea from "../../../shared/components/form/TextArea";
import Button from "../../../shared/components/ui/Button";
import { ApplicantContext } from "../../context/ApplicantContext";
import { Application } from "../../../shared/types/application";

type ApplicantNoteFormProps = {
  applicant: Application;
  onCloseModal: () => void;
};

type ApplicantNote = {
  id: number;
  note: string;
};

type ApplicantNoteError = {
  note: string | null;
};

function ApplicantNoteForm({
  applicant,
  onCloseModal,
}: ApplicantNoteFormProps) {
  const context = useContext(ApplicantContext);
  if (!context) throw new Error("ApplicantContext is not provided");

  const { handleUpdateNote, applicantList } = context;

  const applicantData = applicantList.find(
    (record: ApplicantNote) => record.id === applicant.id,
  );

  const [newNote, setNewNote] = useState<ApplicantNote>(() => ({
    id: applicantData?.id ?? 0,
    note: applicantData?.note ?? "",
  }));
  const [errors, setErrors] = useState<ApplicantNoteError>({ note: "" });

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const error =
      !/^[a-zA-Z\s]{4,}$/.test(value) &&
      "Please provide a description with a minimum of 4 characters";
    setErrors({ ...errors, [name]: error });
    setNewNote((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof ApplicantNoteError],
    );
    if (errorFields.length > 0) {
      return;
    } else {
      console.log("Success");
    }
    handleUpdateNote(newNote.id, newNote.note);
    onCloseModal();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-[10 0dvw] w-full md:w-full sm:landscape:w-full"
    >
      <div className="my-8 flex flex-col">
        <Label htmlFor="note">Update note</Label>
        <TextArea
          name="note"
          value={newNote.note}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.note}
        />
      </div>
      <div>
        <Button className="mt-4 rounded-md bg-primary px-6 py-2 text-sm text-white">
          Add Note
        </Button>
      </div>
    </form>
  );
}

export default ApplicantNoteForm;

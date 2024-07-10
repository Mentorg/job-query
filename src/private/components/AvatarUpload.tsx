import { useRef } from "react";
import Button from "../../shared/components/ui/Button";
import { User } from "../../shared/types/user";
import { Recruiter } from "../../shared/types/recruiter";
import { Company } from "../../shared/types/company";

type ResourceData = User | Recruiter | Company;

type AvatarUploadProps = {
  resource: ResourceData | undefined | null;
  onResourceUpdate: (updatedProfile: ResourceData) => void;
};

function AvatarUpload({ resource, onResourceUpdate }: AvatarUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleImageFileUpload(imageFile: Blob) {
    const reader = new FileReader();
    reader.onload = () => {
      if (resource) {
        onResourceUpdate({
          ...resource!,
          avatar: reader.result as string,
        });
      }
    };
    reader.readAsDataURL(imageFile);
  }

  function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      handleImageFileUpload(file);
    }
  }

  function validateFormat(file: Blob) {
    const maxSizeInBytes = 200 * 1024; // 1MB in bytes

    if (!file) {
      alert("No file selected.");
      return;
    }

    if (file.size > maxSizeInBytes) {
      alert("File size exceeds 200KB limit.");
      return;
    }

    if (
      file.type !== "image/png" &&
      file.type !== "image/jpg" &&
      file.type !== "image/svg+xml"
    ) {
      alert("Please upload an image file with .png, .jpg or svg format.");
      return;
    }
    handleImageFileUpload(file);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const imageFile = e.dataTransfer.files?.[0];
    if (imageFile) {
      validateFormat(imageFile);
    }
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.click(); // Trigger click on file input
    }
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="flex h-full w-fit flex-col justify-center transition-all lg:items-center lg:border-4 lg:border-dotted lg:border-primary lg:py-2"
    >
      <p className="ml-4 hidden text-slate-500 lg:flex">
        Drag and drop your image here or Click the Browse button below
      </p>
      <Button
        onClick={handleButtonClick}
        className="mt-4 rounded-md bg-primary px-3 py-1 text-white transition-all hover:bg-opacity-75"
      >
        Upload
      </Button>
      <input
        type="file"
        accept="image/png, image/jpg, image/svg+xml"
        onChange={handleFileInputChange}
        ref={inputRef}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default AvatarUpload;

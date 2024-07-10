import Label from "../../../../../shared/components/form/Label";
import { useState } from "react";
import TextField from "../../../../../shared/components/form/TextField";
import Button from "../../../../../shared/components/ui/Button";
import { HiOutlineX } from "react-icons/hi";
import { Location } from "../../../../../shared/types/location";

type CompanyLocationProps = {
  companyLocations: Location[];
  onHandleLocationUpdate: (newLocations: Location[]) => void;
  onCloseModal: () => void;
};

type CompanyLocationErrors = {
  city: boolean | string;
  country: boolean | string;
};

function CompanyLocationsForm({
  companyLocations,
  onHandleLocationUpdate,
  onCloseModal,
}: CompanyLocationProps) {
  const [location, setLocation] = useState<Location>({
    id:
      companyLocations.length > 0
        ? companyLocations[companyLocations.length - 1].id + 1
        : 0,
    country: "",
    city: "",
  });
  const [errors, setErrors] = useState<CompanyLocationErrors>({
    country: "",
    city: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const error =
      !value ||
      (!/^[a-zA-Z\s]{4,}$/.test(value) &&
        "Please enter a location with a minimum of 4 characters");
    setErrors({ ...errors, [name]: error });
    setLocation((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleRemoveLocation(locationToRemove: Location) {
    const updatedLocations = companyLocations.filter(
      (location) => location !== locationToRemove,
    );
    onHandleLocationUpdate(updatedLocations);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newLocation = {
      ...location,
      id:
        companyLocations.length > 0
          ? companyLocations[companyLocations.length - 1].id + 1
          : 0,
    };
    const updatedLocationList = [...companyLocations, newLocation];
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof CompanyLocationErrors],
    );
    if (errorFields.length > 0) return;
    onHandleLocationUpdate(updatedLocationList);
    setLocation({ id: newLocation.id + 1, country: "", city: "" });
    onCloseModal();
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex w-fit flex-col gap-y-5">
        <h3 className="font-medium">Existing location</h3>
        <div className="flex flex-wrap gap-5">
          {companyLocations.map((location) => (
            <div
              key={location.id}
              className="flex justify-between rounded-md bg-slate-100 px-3 py-1"
            >
              <p className="w-max text-sm font-medium">
                {location.city}, {location.country}
              </p>
              <button onClick={() => handleRemoveLocation(location)}>
                <HiOutlineX className="ml-2 rounded-full p-0.5 transition-all hover:bg-slate-200" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="city">City</Label>
          <TextField
            name="city"
            type="text"
            value={location.city}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.city}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="country">Country</Label>
          <TextField
            name="country"
            type="text"
            value={location.country}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.country}
          />
        </div>
        <div className="flex justify-center">
          <Button className="w-fit rounded-md bg-primary px-6 py-2 text-white transition-all hover:bg-primary/75">
            Add Location
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CompanyLocationsForm;

import { IoIosLink } from "react-icons/io";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPen,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuPenLine } from "react-icons/lu";
import Modal from "../context/Modal";
import Menus from "../context/Menus";
import CompanyForm from "../features/profiles/components/company/CompanyForm";
import CompanyLocationsForm from "../features/profiles/components/company/CompanyLocationsForm";
import { useCompany } from "../hooks/useCompany";

function Company() {
  const {
    profile,
    companyLocations,
    handleProfileUpdate,
    handleLocationUpdate,
  } = useCompany();

  return (
    <div className="flex w-full flex-col gap-y-10 px-6 py-4 md:px-10 lg:px-12 xl:px-14">
      <div className="flex w-full flex-col 2xl:w-[80%] 2xl:min-w-[75%]">
        <div className="flex justify-between">
          <div className="mt-10 flex flex-col">
            <img
              src={profile?.avatar}
              alt={`${profile?.name}'s logo`}
              className="h-[5rem] w-[5rem] rounded-full"
            />
            <h1 className="mt-5 text-2xl font-medium">{profile?.name}</h1>
          </div>
          <div className="flex items-end gap-10">
            <Modal>
              <Modal.Open opens="edit">
                <Menus.Button type="edit">
                  <LuPenLine />
                  <span>Edit</span>
                </Menus.Button>
              </Modal.Open>
              <Modal.Window name="edit">
                <CompanyForm
                  profile={profile}
                  onHandleProfileUpdate={handleProfileUpdate}
                  onCloseModal={close}
                />
              </Modal.Window>
            </Modal>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 grid-rows-4 gap-4 sm:grid-cols-2 sm:grid-rows-2 md:gap-10 xl:flex">
          <div className="flex w-full items-center text-blue-500">
            <IoIosLink />
            <p className="ml-2">jobquery.com/company/{profile?.slug}</p>
          </div>
          <div className="flex w-full items-center text-blue-500">
            <IoIosLink />
            <p className="ml-2">{profile?.website}</p>
          </div>
          <div className="flex w-full items-center">
            <FaPhoneAlt />
            <p className="ml-2">{profile?.phone}</p>
          </div>
          <div className="flex w-full items-center">
            <FaEnvelope />
            <p className="ml-2">{profile?.email}</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col">
          <h2 className="text-lg font-medium">Company Overview</h2>
          <p className="mt-2.5 text-sm">{profile?.description}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-36">
          <div className="mt-10 flex flex-col gap-3">
            <div className="flex w-full items-baseline justify-between">
              <h2 className="mb-2.5 text-lg font-medium">Company Locations</h2>
              <div className="pl-4">
                <Modal>
                  <Modal.Open opens="edit">
                    <Menus.Button type="icon">
                      <FaPen className="text-xs text-green-600" />
                    </Menus.Button>
                  </Modal.Open>
                  <Modal.Window name="edit">
                    <CompanyLocationsForm
                      companyLocations={companyLocations}
                      onHandleLocationUpdate={handleLocationUpdate}
                      onCloseModal={close}
                    />
                  </Modal.Window>
                </Modal>
              </div>
            </div>
            {companyLocations.length > 0 ? (
              companyLocations.map((location) => (
                <div key={location?.id} className="flex items-center">
                  <FaLocationDot className="text-primary" />
                  <p className="ml-1 text-sm">
                    {location?.city}, {location?.country}
                  </p>
                </div>
              ))
            ) : (
              <>
                <h1>No location data available</h1>
              </>
            )}
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <h2 className="mb-2.5 text-lg font-medium">Company Social Media</h2>
            <div className="flex items-center">
              <FaTwitter className="text-blue-500" />
              <p className="ml-2 text-sm">@{profile?.socials}</p>
            </div>
            <div className="flex items-center">
              <FaFacebookF className="text-blue-500" />
              <p className="ml-2 text-sm">@{profile?.socials}</p>
            </div>
            <div className="flex items-center">
              <FaLinkedinIn className="text-blue-500" />
              <p className="ml-2 text-sm">@{profile?.socials}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;

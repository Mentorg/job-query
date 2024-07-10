import { LuPenLine } from "react-icons/lu";
import { HiOutlineX } from "react-icons/hi";
import Modal from "../../../../context/Modal";
import Menus from "../../../../context/Menus";
import ApplicantMetrics from "./ApplicantMetrics";
import ApplicantExperience from "./ApplicantExperience";
import ApplicantEducation from "./ApplicantEducation";
import ApplicantForm from "./ApplicantForm";
import AddAbility from "./AddAbility";
import { useApplicant } from "../../../../hooks/useApplicant";

function Applicant() {
  const {
    profile,
    userSkills,
    userLanguages,
    handleProfileUpdate,
    handleAddSkill,
    handleDeleteSkill,
    handleAddLanguage,
    handleDeleteLanguage,
  } = useApplicant();

  return (
    <div className="flex w-full flex-col gap-y-10 px-6 py-4 md:px-10 lg:px-12 xl:px-14">
      <div className="mt-10 flex flex-col items-center justify-center">
        <img
          src={profile?.avatar}
          alt="User's avatar"
          className="h-[5rem] w-[5rem] rounded-full"
        />
        <h1 className="mt-5 text-2xl font-medium">{profile?.name}</h1>
        <div className="flex justify-center gap-10 lg:justify-end">
          <Modal>
            <Modal.Open opens="edit">
              <Menus.Button>
                <span className="flex items-center gap-x-2 text-xs font-medium text-green-600">
                  <LuPenLine />
                  Edit Profile
                </span>
              </Menus.Button>
            </Modal.Open>
            <Modal.Window name="edit">
              <ApplicantForm
                profile={profile}
                onProfileUpdate={handleProfileUpdate}
                onCloseModal={close}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:grid-rows-2 md:flex-row xl:flex">
        <ApplicantMetrics />
      </div>
      <div>
        <h2 className="py-4 text-xl font-medium">Personal Details</h2>
        <div className="flex flex-wrap justify-between gap-10 rounded-md bg-slate-100 px-5 py-6">
          <div className="flex flex-col">
            <p className="font-medium">Email Address</p>
            <p className="text-sm">
              {profile?.email ? profile.email : "No email provided"}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-medium">Phone Number</p>
            <p className="text-sm">
              {profile?.phone ? profile.email : "No phone number provided"}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-medium">LinkedIn Profile</p>
            <p className="text-sm">
              @
              {profile?.linkedin_profile
                ? profile.linkedin_profile
                : "No profile provided"}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-medium">Country</p>
            <p className="text-sm">
              {profile?.country ? profile.country : "No country provided"}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-medium">City</p>
            <p className="text-sm">
              {profile?.city ? profile.city : "No city provided"}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-medium">Time Zone</p>
            <p className="text-sm">
              {profile?.timezone ? profile.timezone : "No time zone provided"}
            </p>
          </div>
        </div>
      </div>
      <div>
        <ApplicantExperience />
      </div>
      <div>
        <ApplicantEducation />
      </div>
      <div className="flex flex-col justify-around gap-4 py-5 md:flex-row">
        <div className="flex w-full flex-col gap-5 py-8">
          <h2 className="text-xl font-medium">Skills</h2>
          <div className="flex flex-wrap items-center gap-2">
            {userSkills && userSkills?.length > 0 ? (
              userSkills?.map((skill, index) => (
                <div
                  key={index}
                  className="flex h-fit w-max items-center rounded-md bg-primary px-4 py-2 text-xs text-white"
                >
                  <span>{skill}</span>
                  <button
                    onClick={() => handleDeleteSkill(index)}
                    className="ml-4"
                  >
                    <HiOutlineX />
                  </button>
                </div>
              ))
            ) : (
              <h2>No skills provided</h2>
            )}
            <Modal>
              <Modal.Open opens="add">
                <Menus.Button type="add">Add</Menus.Button>
              </Modal.Open>
              <Modal.Window name="add">
                <AddAbility
                  resource={userSkills}
                  onResourceCreate={handleAddSkill}
                  onCloseModal={close}
                />
              </Modal.Window>
            </Modal>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 py-8">
          <h2 className="text-xl font-medium">Languages</h2>
          <div className="flex flex-wrap items-center gap-2">
            {userLanguages && userLanguages?.length > 0 ? (
              userLanguages?.map((language, index) => (
                <div
                  key={index}
                  className="flex h-fit w-max items-center rounded-md bg-primary px-4 py-2 text-xs text-white"
                >
                  <span>{language}</span>
                  <button
                    onClick={() => handleDeleteLanguage(index)}
                    className="ml-4"
                  >
                    <HiOutlineX />
                  </button>
                </div>
              ))
            ) : (
              <h2>No languages provided</h2>
            )}
            <Modal>
              <Modal.Open opens="add">
                <Menus.Button type="add">Add</Menus.Button>
              </Modal.Open>
              <Modal.Window name="add">
                <AddAbility
                  resource={userLanguages}
                  onResourceCreate={handleAddLanguage}
                  onCloseModal={close}
                />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applicant;

import { MdWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { LuPenLine } from "react-icons/lu";
import RecruiterForm from "../features/profiles/components/recruiter/RecruiterForm";
import Menus from "../context/Menus";
import Modal from "../context/Modal";
import RecruiterTeam from "../features/profiles/components/recruiter/RecruiterTeam";
import RecruiterAds from "../features/profiles/components/recruiter/RecruiterAds";
import RecruiterMetrics from "../features/profiles/components/recruiter/RecruiterMetrics";
import { useCompany } from "../hooks/useCompany";
import { useRecruiter } from "../hooks/useRecruiter";

function Recruiter() {
  const {
    profile,
    userData,
    recruiterData,
    recruiterAds,
    teamWithData,
    handleProfileUpdate,
    handleRecruiterUpdate,
  } = useRecruiter();
  const { profile: companyProfile } = useCompany();
  console.log(profile?.avatar);
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
              <RecruiterForm
                profile={profile}
                recruiter={recruiterData}
                onHandleProfileUpdate={handleProfileUpdate}
                onHandleRecruiterUpdate={handleRecruiterUpdate}
                onCloseModal={close}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:grid-rows-2 md:flex-row xl:flex">
        <RecruiterMetrics />
      </div>
      <div className="flex flex-col gap-y-4 lg:gap-x-10 xl:flex-row">
        <div className="flex w-full flex-col gap-y-4 rounded-md bg-slate-100 p-10">
          <div className="flex w-full flex-col">
            <h2 className="text-lg font-medium">Experience</h2>
            <p className="mt-4 leading-8">{recruiterData?.expertise}</p>
          </div>
          <hr />
          <div className="flex flex-col">
            <h2 className="text-lg font-medium">About me</h2>
            <p className="mt-4 leading-8">{recruiterData?.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-10 rounded-md bg-slate-100 p-10 xl:flex-col">
          <div className="flex flex-col gap-y-2">
            <h2 className="font-medium">Contact Information</h2>
            <div className="flex w-full items-center text-sm">
              <FaEnvelope />
              <p className="ml-2">{profile?.email}</p>
            </div>
            <div className="flex w-full items-center text-sm">
              <FaPhoneAlt />
              <p className="ml-2">{profile?.phone}</p>
            </div>
            <div className="flex w-full items-center text-sm">
              <FaLocationDot />
              <p className="ml-2">
                {profile?.city}, {profile?.country}
              </p>
            </div>
            <div className="flex w-full items-center text-sm">
              <FaLinkedin />
              <p className="ml-2">@{profile?.linkedin_profile}</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="font-medium">Company information</h2>
            <div className="flex w-full items-center text-sm">
              <MdWork />
              <p className="ml-2">{companyProfile?.name}</p>
            </div>
            <div className="flex w-full items-center text-sm">
              <FaPhoneAlt />
              <p className="ml-2">{companyProfile?.phone}</p>
            </div>
            <div className="flex w-full items-center text-sm">
              <FaEnvelope />
              <p className="ml-2">{companyProfile?.email}</p>
            </div>
            <div className="flex w-full items-center text-sm">
              <FaLinkedin />
              <p className="ml-2">@{companyProfile?.socials}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center">
        <RecruiterTeam team={teamWithData} user={userData} />
      </div>
      <div>
        <RecruiterAds recruiterAds={recruiterAds} company={companyProfile} />
      </div>
    </div>
  );
}

export default Recruiter;

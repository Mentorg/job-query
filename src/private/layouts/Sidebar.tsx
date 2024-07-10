import {
  HiBuildingLibrary,
  HiMiniArrowTrendingUp,
  HiMiniHome,
  HiMiniUser,
  HiMiniUserGroup,
  HiMiniTag,
  HiMiniEnvelope,
  HiMiniBell,
  HiComputerDesktop,
  HiMiniPlus,
  HiMiniCog6Tooth,
} from "react-icons/hi2";
import { FaCircleDot } from "react-icons/fa6";
import MenuLink from "../../shared/components/ui/MenuLink";
import { job as jobData } from "../../shared/data/job";
import { useAuth } from "../../public/hooks/useAuth";

function Sidebar() {
  const { user } = useAuth();
  const jobs = jobData.filter((record) => record.recruiter_id === user?.id);

  return (
    <aside className="hidden w-[300px] min-w-[250px] lg:flex">
      <div
        className="fixed top-[70px] flex h-full w-[275px] flex-col justify-between border-r-2 border-slate-200 p-4"
        style={{ height: "calc(100dvh - 70px)" }}
      >
        {user?.role === "recruiter" ? (
          <>
            <div>
              <div className="py-2">
                <h4 className="mb-2 text-[0.65rem] font-bold uppercase text-slate-500">
                  Menu
                </h4>
                <ul>
                  <li>
                    <MenuLink to="overview">
                      <HiMiniHome className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        Overview
                      </p>
                    </MenuLink>
                  </li>
                  <li className="group">
                    <MenuLink to="analytics">
                      <HiMiniArrowTrendingUp className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        Analytics
                      </p>
                    </MenuLink>
                  </li>
                  <li className="group">
                    <MenuLink to="company">
                      <HiBuildingLibrary className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        Company Profile
                      </p>
                    </MenuLink>
                  </li>
                  <li className="group">
                    <MenuLink to="user">
                      <HiMiniUser className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        My Profile
                      </p>
                    </MenuLink>
                  </li>
                  <li className="group">
                    <MenuLink to="messages">
                      <HiMiniEnvelope className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        Messages
                      </p>
                    </MenuLink>
                  </li>
                  <li className="group">
                    <MenuLink to="notifications">
                      <HiMiniBell className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        Notifications
                      </p>
                    </MenuLink>
                  </li>
                  <li className="group">
                    <MenuLink to="applicants">
                      <HiMiniUserGroup className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        Applicants
                      </p>
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink to="jobs">
                      <HiComputerDesktop className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        Jobs
                      </p>
                    </MenuLink>
                  </li>
                  <li className="group">
                    <MenuLink to="newJob">
                      <HiMiniPlus className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        New Job
                      </p>
                    </MenuLink>
                  </li>
                </ul>
              </div>
              <div className="py-2">
                <h4 className="mb-2 text-[0.65rem] font-bold uppercase text-slate-500">
                  Your recent vacancies
                </h4>
                <ul>
                  {jobs.slice(0, 5).map((job) => (
                    <li key={job.id}>
                      <MenuLink to={`jobs/${job.id}`}>
                        <div>
                          <FaCircleDot className="h-5 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                        </div>
                        <p className="ml-2 truncate py-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                          {job.position_title}{" "}
                        </p>
                      </MenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <MenuLink to="subscription">
                <HiMiniTag className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                  Pricing Plans
                </p>
              </MenuLink>
              <MenuLink to="settings/account">
                <HiMiniCog6Tooth className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                  Settings
                </p>
              </MenuLink>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-full flex-col justify-between">
              <div className="py-2">
                <h4 className="mb-2 text-[0.65rem] font-bold uppercase text-slate-500">
                  Menu
                </h4>
                <ul>
                  <li className="group">
                    <MenuLink to="profile">
                      <HiMiniUser className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        My Profile
                      </p>
                    </MenuLink>
                  </li>
                  <li className="group">
                    <MenuLink to="messages">
                      <HiMiniEnvelope className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        Messages
                      </p>
                    </MenuLink>
                  </li>
                  <li className="group">
                    <MenuLink to="notifications">
                      <HiMiniBell className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        Notifications
                      </p>
                    </MenuLink>
                  </li>
                  <li className="group">
                    <MenuLink to="jobs">
                      <HiMiniUser className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                      <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                        Jobs
                      </p>
                    </MenuLink>
                  </li>
                </ul>
              </div>
              <div>
                <MenuLink to="settings">
                  <HiMiniCog6Tooth className="h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white" />
                  <p className="ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white">
                    Settings
                  </p>
                </MenuLink>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;

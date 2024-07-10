import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./public/components/ProtectedRoute";
import { Login } from "./public/pages/Login.tsx";
import { SignUp } from "./public/pages/SignUp.tsx";
import { AuthProvider } from "./public/hooks/useAuth";
import Loading from "./shared/components/ui/Loading.tsx";

const HomeLayout = lazy(() => import("./public/layouts/HomeLayout.tsx"));
const Home = lazy(() => import("./public/pages/Home.tsx"));
const SearchResults = lazy(() => import("./public/pages/SearchResults.tsx"));
const SingleJob = lazy(() => import("./public/pages/SingleJob.tsx"));
const PrivacyPolicy = lazy(() => import("./public/pages/PrivacyPolicy.tsx"));
const Contact = lazy(() => import("./public/pages/Contact.tsx"));
const Overview = lazy(() => import("./private/pages/Overview.tsx"));
const DashboardLayout = lazy(
  () => import("./private/layouts/DashboardLayout.tsx"),
);
const JobAdForm = lazy(() => import("./private/pages/JobAdForm.tsx"));
const Jobs = lazy(() => import("./private/pages/Jobs.tsx"));
const SingleJobAd = lazy(() => import("./private/pages/SingleJobAd.tsx"));
const Analytics = lazy(() => import("./private/pages/Analytics.tsx"));
const Company = lazy(() => import("./private/pages/Company.tsx"));
const Recruiter = lazy(() => import("./private/pages/Recruiter.tsx"));
const Messages = lazy(() => import("./private/pages/Messages.tsx"));
const MessageForm = lazy(() => import("./private/pages/MessageForm.tsx"));
const SingleMessage = lazy(() => import("./private/pages/SingleMessage.tsx"));
const Notifications = lazy(() => import("./private/pages/Notifications.tsx"));
const Applicants = lazy(() => import("./private/pages/Applicants.tsx"));
const Subscription = lazy(() => import("./private/pages/Subscription.tsx"));
const SettingsLayout = lazy(
  () => import("./private/layouts/SettingsLayout.tsx"),
);
const Account = lazy(() => import("./private/pages/Account.tsx"));
const Billing = lazy(() => import("./private/pages/Billing.tsx"));
const Locale = lazy(() => import("./private/pages/Locale.tsx"));
const NotificationSettings = lazy(
  () => import("./private/pages/NotificationSettings.tsx"),
);
const JobProvider = lazy(() => import("./private/context/JobContext.tsx"));
const SupportTerms = lazy(() => import("./private/pages/SupportTerms.tsx"));
const Applicant = lazy(
  () =>
    import("./private/features/profiles/components/applicant/Applicant.tsx"),
);
const ApplicantSettings = lazy(
  () => import("./private/features/settings/components/ApplicantSettings.tsx"),
);
const ApplicantProvider = lazy(
  () => import("./private/context/ApplicantContext.tsx"),
);
const BillingProvider = lazy(
  () => import("./private/context/BillingContext.tsx"),
);
const PageNotFound = lazy(() => import("./public/pages/PageNotFound.tsx"));
const GuestApply = lazy(() => import("./public/pages/GuestApply.tsx"));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="/apply/:slug" element={<GuestApply />} />
            <Route path="job/:slug" element={<SingleJob />} />
            <Route path="privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["recruiter"]}>
                <JobProvider>
                  <ApplicantProvider>
                    <DashboardLayout />
                  </ApplicantProvider>
                </JobProvider>
              </ProtectedRoute>
            }
          >
            <Route path="overview" element={<Overview />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="company" element={<Company />} />
            <Route path="user" element={<Recruiter />} />
            <Route path="messages" element={<Messages />} />
            <Route path="messages/newMessage" element={<MessageForm />} />
            <Route path="messages/:id" element={<SingleMessage />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="applicants" element={<Applicants />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/:id" element={<SingleJobAd />} />
            <Route path="newJob" element={<JobAdForm />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="settings" element={<SettingsLayout />}>
              <Route index={true} path="account" element={<Account />} />
              <Route
                path="billing"
                element={
                  <BillingProvider>
                    <Billing />
                  </BillingProvider>
                }
              />
              <Route path="locale" element={<Locale />} />
              <Route path="notifications" element={<NotificationSettings />} />
              <Route path="support-terms" element={<SupportTerms />} />
            </Route>
          </Route>
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={["applicant"]}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="profile" element={<Applicant />} />
            <Route path="messages" element={<Messages />} />
            <Route path="messages/newMessage" element={<MessageForm />} />
            <Route path="messages/:id" element={<SingleMessage />} />
            <Route path="notifications" element={<Notifications />} />
            <Route
              path="jobs"
              element={
                <JobProvider>
                  <Jobs />
                </JobProvider>
              }
            />
            <Route
              path="jobs/:id"
              element={
                <JobProvider>
                  <SingleJobAd />
                </JobProvider>
              }
            />
            <Route path="settings" element={<ApplicantSettings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;

type TeamMember = {
  avatar: string;
  id: number;
  name: string;
  user_id: number;
};

type TeamMemberDetails = {
  id: number;
};

type RecruiterTeamProps = {
  team: TeamMember[];
  user: TeamMemberDetails | null;
};

function RecruiterTeam({ team, user }: RecruiterTeamProps) {
  if (!user) return null; // Or render a fallback UI when user is undefined or null

  return (
    <>
      <h2 className="py-4 text-xl font-medium">Team</h2>
      <ul className="flex w-full justify-center gap-10">
        {team.map(
          (member: TeamMember) =>
            member.user_id !== user.id && (
              <li key={member.name} className="flex flex-col items-center">
                <img
                  src={member.avatar}
                  alt="Team member's profile picture"
                  className="w-fit"
                />
                <h4 className="mt-2 text-center font-medium">{member.name}</h4>
              </li>
            ),
        )}
      </ul>
    </>
  );
}

export default RecruiterTeam;

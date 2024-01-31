import { InviteProjectType } from "../../../../types/ProjectType";
import InviteItem from "../StepShareInvite/InviteItem/InviteItem";

type SummaryInviteShareProps = {
  invites: InviteProjectType[];
};
const SummaryInviteShare = ({ invites }: SummaryInviteShareProps) => {
  return (
    <div className="my-8">
      <h1 className="text-lg font-bold text-primary-dark">Share with </h1>
      <div className="flex gap-2 items-center">
        {invites.map((item, index) => (
          <InviteItem key={index} email={item.email} role={item.role} />
        ))}
      </div>
    </div>
  );
};

export default SummaryInviteShare;

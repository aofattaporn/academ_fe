import InviteItem from "../StepShareInvite/InviteItem/InviteItem";

const SummaryInviteShare = () => {
  return (
    <div className="my-8">
      <h1 className="text-lg font-bold text-primary-dark">Share with </h1>
      <div className="flex gap-2 items-center">
        <InviteItem email="aaaaaa" role="member" />
      </div>
    </div>
  );
};

export default SummaryInviteShare;

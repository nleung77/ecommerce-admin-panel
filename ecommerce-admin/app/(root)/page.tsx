import { UserButton } from "@clerk/next.js";

const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default SetupPage;
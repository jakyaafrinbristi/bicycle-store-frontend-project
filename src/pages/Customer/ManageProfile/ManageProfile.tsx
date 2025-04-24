/* eslint-disable @typescript-eslint/no-unused-vars */
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { useState } from "react";
import { toast } from "sonner"; 

const ManageProfile = () => {
  const [changePassword] = useChangePasswordMutation();
  const [passwordData, setPasswordData] = useState({ 
    currentPassword: "", 
    newPassword: "" 
  });

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state
    const toastId = toast.loading("Changing password...");
    
    try {
      await changePassword(passwordData).unwrap();
      toast.success("Password changed successfully!", { id: toastId });
      setPasswordData({ currentPassword: "", newPassword: "" });
    } catch (err) {
      toast.error("Failed to change password. Please try again.", { id: toastId });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-8">
      <form onSubmit={handlePasswordSubmit} className="space-y-4 border p-4 rounded-lg shadow">
        <h3 className="text-xl font-medium">Change Password</h3>
        <input
          type="password"
          placeholder="Current Password"
          value={passwordData.currentPassword}
          onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="New Password"
          value={passwordData.newPassword}
          onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-accent w-full">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ManageProfile;
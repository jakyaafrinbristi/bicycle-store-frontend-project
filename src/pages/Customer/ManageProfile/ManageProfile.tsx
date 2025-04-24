/* eslint-disable @typescript-eslint/no-unused-vars */
import { useChangePasswordMutation, useUpdateProfileMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCurrentUser, setUser } from "@/redux/features/auth/authSlice";
import { useState } from "react";
import { toast } from "sonner";

const ManageProfile = () => {
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();

  const [changePassword] = useChangePasswordMutation();
  const [updateProfile] = useUpdateProfileMutation();

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || "",
    role: user?.role || "",
  });

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Changing password...");

    try {
      await changePassword(passwordData).unwrap();
      toast.success("Password changed successfully!", { id: toastId });
      setPasswordData({ currentPassword: "", newPassword: "" });
    } catch (err) {
      toast.error("Failed to change password. Please try again.", { id: toastId });
    }
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Updating profile...");

    try {
      await updateProfile(profileData).unwrap();
      dispatch(setUser({ user: { ...user, ...profileData }, token }));
      toast.success("Profile updated successfully!", { id: toastId });
    } catch (err) {
      toast.error("Failed to update profile. Please try again.", { id: toastId });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-10">
      {/* Profile Update Form with Image on Right */}
      <div className="border p-4 rounded-lg shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <form onSubmit={handleProfileSubmit} className="flex-1 space-y-4 w-full">
          <h3 className="text-xl font-medium">Update Profile</h3>
          <input
            type="text"
            placeholder="Name"
            value={profileData.name}
            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={profileData.email}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
          <input
            type="text"
            placeholder="Address"
            value={profileData.address}
            onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Role"
            value={profileData.role}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
          <button type="submit" className="btn btn-primary w-full">
            Update Profile
          </button>
        </form>

        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={user?.image || "default-profile-image.jpg"}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-teal-500"
          />
        </div>
      </div>

      {/* Password Change Form */}
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

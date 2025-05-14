/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUpdateProfileMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCurrentUser, setUser } from "@/redux/features/auth/authSlice";
import { useState } from "react";
import { toast } from "sonner";
import { FiEdit, FiMail, FiMapPin, FiUser, FiShield, FiClock } from "react-icons/fi";

const ManageProfile = () => {
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const [updateProfile] = useUpdateProfileMutation();

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || "",
    role: user?.role || "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Updating profile...");

    try {
      await updateProfile(profileData).unwrap();
      dispatch(setUser({ user: { ...user, ...profileData }, token }));
      toast.success("Profile updated successfully!", { id: toastId });
      setIsEditing(false);
    } catch (err) {
      toast.error("Failed to update profile. Please try again.", { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="mt-2 text-lg text-gray-600">Manage your personal information and account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-teal-600 p-6 text-center">
                <div className="relative mx-auto w-32 h-32">
                  <img
                    src={user?.image || "/default-profile.png"}
                    alt="Profile"
                    className="w-full h-full rounded-full border-4 border-white object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    <FiEdit className="text-teal-600" />
                  </button>
                </div>
                <h2 className="mt-4 text-xl font-bold text-white">{user?.name}</h2>
                <p className="text-teal-100 flex items-center justify-center gap-1">
                  <FiShield className="text-teal-200" />
                  {user?.role}
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-50 rounded-full">
                      <FiMail className="text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{user?.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-50 rounded-full">
                      <FiMapPin className="text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">
                        {user?.address || "No address provided"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-50 rounded-full">
                      <FiClock className="text-teal-600" />
                    </div>
                    {/* <div>
                      <p className="text-sm text-gray-500">Member since</p>
                      <p className="font-medium">
                        {new Date(user?.createdAt || "").toLocaleDateString()}
                      </p>
                    </div> */}
                  </div>
                </div>

                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="mt-6 w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition flex items-center justify-center gap-2"
                >
                  <FiEdit />
                  {isEditing ? "Cancel Editing" : "Edit Profile"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Edit Profile Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <FiUser />
                  Personal Information
                </h2>
              </div>

              <div className="p-6">
                {isEditing ? (
                  <form onSubmit={handleProfileSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="flex items-center px-4 py-2 bg-gray-50 rounded-lg">
                        <FiMail className="text-gray-500 mr-2" />
                        <span>{profileData.email}</span>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        Contact support to change your email
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Address
                      </label>
                      <textarea
                        value={profileData.address}
                        onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                        rows={3}
                        placeholder="House No, Road No, Area, City"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">{profileData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{profileData.email}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">
                        {profileData.address || "No address provided"}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Account Type</p>
                      <p className="font-medium">{profileData.role}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <FiClock />
                  Recent Activity
                </h2>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">You successfully logged in</p>
                      <p className="text-sm text-gray-500">Today, 10:30 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Order #12345 placed</p>
                      <p className="text-sm text-gray-500">Yesterday, 3:45 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Profile information updated</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
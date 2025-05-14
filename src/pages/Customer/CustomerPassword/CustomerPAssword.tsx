/* eslint-disable @typescript-eslint/no-unused-vars */
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { useState } from "react";
import { toast } from "sonner";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const CustomerPassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New passwords don't match");
      return;
    }

    const toastId = toast.loading("Updating password...");

    try {
      await changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      }).unwrap();
      
      toast.success("Password updated successfully!", { id: toastId });
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    } catch (err) {
      toast.error("Failed to update password. Please try again.", { id: toastId });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Change Password</h2>
        <p className="text-gray-500 mt-1">Secure your account with a new password</p>
      </div>

      <form onSubmit={handlePasswordSubmit} className="space-y-5">
        <div className="space-y-1">
          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
            Current Password
          </label>
          <div className="relative">
            <input
              id="currentPassword"
              type={showCurrentPassword ? "text" : "password"}
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pl-10"
              required
            />
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <div className="relative">
            <input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pl-10"
              required
              minLength={8}
            />
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {showNewPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Must be at least 8 characters long
          </p>
        </div>

        <div className="space-y-1">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pl-10"
              required
            />
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition duration-200"
          >
            Update Password
          </button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-blue-800 flex items-center gap-2">
          <FiLock />
          Password Requirements
        </h3>
        <ul className="mt-2 text-sm text-blue-700 list-disc list-inside space-y-1">
          <li>Minimum 8 characters</li>
          <li>At least one uppercase letter</li>
          <li>At least one number or special character</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerPassword;
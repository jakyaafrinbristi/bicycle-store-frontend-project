/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDeactivateUserMutation, useGetUsersQuery } from "@/redux/features/auth/userApi";
import { IUser } from "@/Types/types";
import { Button, Table } from "antd";


export default function ManageUser() {
  const { data , isLoading } = useGetUsersQuery(undefined);
  const [deactivateUser] = useDeactivateUserMutation();
  console.log('user rafid',data)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-dashed border-teal-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 bg-teal-500 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>
    );
  };
  const users =data?.data.filter((user:IUser)=>user.role !== 'admin');
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, user: IUser) => (
        <Button
          type="default"
          onClick={() => deactivateUser(user._id)}
          disabled={user.role === 'admin'}
        >
          {user.role === 'admin' ? 'Cannot Deactivate' : 'Deactivate'}
        </Button>
      ),
    },
  ];
  return (
<div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="_id"
        loading={isLoading}
        pagination={false} 
      />
    </div>
  );
}

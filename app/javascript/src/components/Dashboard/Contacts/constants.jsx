import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Avatar, Typography, Dropdown } from "neetoui";

export const ROLES = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Editor",
    value: "editor",
  },
  {
    label: "User",
    value: "user",
  },
];

export const CONTACTS_DATA = [
  {
    id: 1,
    key: 1,
    person: {
      name: "Jacob Jones",
      role: "owner",
    },
    email: "albert@borer.com",
    created_at: "Sep 13, 2022",
  },
  {
    id: 2,
    key: 2,
    person: {
      name: "Ronald Richards",
      role: "owner",
    },
    email: "albert@borer.com",
    created_at: "Sep 13, 2022",
  },
];

export const buildContactColumnData = (
  setShowDeleteAlert,
  setDeleteContactName
) => {
  const handleDelete = name => {
    setDeleteContactName(name);
    setShowDeleteAlert(true);
  };

  return [
    {
      title: "Name & Role",
      dataIndex: "person",
      key: "person",
      width: 150,
      render: person => (
        <div className="flex items-center">
          <Avatar
            size="large"
            user={{
              name: person.name,
            }}
          />
          <div className="pl-3">
            <Typography style="h5">{person.name}</Typography>
            <Typography style="body3">{person.role}</Typography>
          </div>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 150,
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      width: 150,
    },
    {
      title: "",
      dataIndex: "person",
      key: "person",
      width: 80,
      render: person => (
        <Dropdown buttonStyle="text" icon={MenuHorizontal} strategy="fixed">
          <li>Edit</li>
          <li onClick={() => handleDelete(person.name)}>Delete</li>
        </Dropdown>
      ),
    },
  ];
};

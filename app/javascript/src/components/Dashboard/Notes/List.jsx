import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Tag, Dropdown, Avatar } from "neetoui";

import { calculateCreatedAgo } from "./utils";

const List = ({ notes, setShowDeleteAlert, setDeleteNoteTitle }) => {
  const handleDelete = title => {
    setDeleteNoteTitle(title);
    setShowDeleteAlert(true);
  };

  return (
    <div className="flex w-full flex-col space-y-4">
      {notes.map(note => (
        <div className="rounded-lg border bg-white p-4 shadow-sm" key={note.id}>
          <div className="flex justify-between">
            <Typography component="h2" lineHeight="relaxed" style="h4">
              {note.title}
            </Typography>
            <Dropdown buttonStyle="text" icon={MenuVertical}>
              <li>Edit</li>
              <li onClick={() => handleDelete(note.title)}>Delete</li>
            </Dropdown>
          </div>
          <Typography lineHeight="relaxed" style="body2">
            {note.description}
          </Typography>
          <div className="mt-3 flex justify-between border-t pt-4">
            <Tag label={note.tag} size="small" type="solid" />
            <div className="flex items-center space-x-2">
              <Clock color="#68737D" size={12} />
              <Typography style="body3">
                {note.status} {calculateCreatedAgo(note.createdAt)}
              </Typography>
              <Avatar
                size="small"
                user={{
                  name: note.createdBy,
                  imageUrl: note.imageUrl,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;

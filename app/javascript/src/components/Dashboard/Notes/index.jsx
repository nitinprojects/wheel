import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { NOTES_LIST_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NotesList from "./NoteList";
import NotesMenuBar from "./NotesMenuBar";
import AddNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [deleteNoteTitle, setDeleteNoteTitle] = useState("");
  const [showAddPane, setShowAddPane] = useState(false);

  useEffect(() => {
    setNotes(NOTES_LIST_DATA);
    setLoading(false);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <NotesMenuBar showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(showMenu => !showMenu)}
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Note"
              onClick={() => setShowAddPane(showAddPane => !showAddPane)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          <NotesList
            data={notes}
            setDeleteNoteTitle={setDeleteNoteTitle}
            setShowDeleteAlert={setShowDeleteAlert}
          />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => {}}
            primaryActionLabel="Add New Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <DeleteAlert
          deleteNoteTitle={deleteNoteTitle}
          isOpen={showDeleteAlert}
          onClose={() => setShowDeleteAlert(false)}
        />
        <AddNotePane setShowPane={setShowAddPane} showPane={showAddPane} />
      </Container>
    </>
  );
};

export default Notes;

import { useState, React } from "react";

const Note = ({ note, deleteNote, updateNote, setError, error }) => {
  const [modeEdit, setModeEdit] = useState(false);
  const [item, setItem] = useState(note);
  const toggle = (e) => {
    e.preventDefault();
    setModeEdit(!modeEdit);
    setItem(note);
    setError({
      "title":"",
      "body":""
    })
  };
  const edit = async (e) => {
    e.preventDefault();
    if (await updateNote(item)){
      setModeEdit(false);
      setError({
        "title":"",
        "body":""
      })
    }
  
  };
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Id: {note.id} </p>
        </header>
        <div className="card-content">
          {modeEdit ? (
            <label>
              Titulo
              <div className="field">
                <div className="control">
                  <input type="text"

                name="{item.title"
                value={item.title}
                onChange={(ev) => setItem({ ...item, title: ev.target.value })} className="input" /></div>
                <span className="help is-danger">{error.title}</span>
              </div>
            </label>
          ) : (
            <div>titulo: {note.title}</div>
          )}
          {modeEdit ? (
            <label>
              Corpo
              <div className="field">
                <div className="control">
                  <textarea
                    type="text"
                    name="{item.body}"
                    value={item.body}
                    onChange={(ev) =>
                      setItem({ ...item, body: ev.target.value })
                    }
                    className="textarea"
                  />
                </div>
                <span className="help is-danger">{error.body}</span>
              </div>
            </label>
          ) : (
            <div>Corpo: {note.body}</div>
          )}
          <footer className="card-footer">
            <a
              href={"/"}
              onClick={(e) => toggle(e)}
              className="card-footer-item"
            >
              {modeEdit ? "Cancelar" : "Editar"}
            </a>
            {modeEdit ? (
              <a
                href={"/"}
                className="card-footer-item"
                onClick={(e) => edit(e)}
              >
                Salvar
              </a>
            ) : (
              <a
                href={"/"}
                className="card-footer-item"
                onClick={(e) => deleteNote(note.id, e)}
              >
                Excluir
              </a>
            )}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Note;

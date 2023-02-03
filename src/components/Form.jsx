import { useState, React } from "react";
import axios from "axios";

const Form = ({ notes, setNotes }) => {
  const initialNotes = {
    id: "",
    title: "",
    body: "",
  };
  const [note, setNote] = useState(initialNotes);
  const [error, setError]=useState({
    'body':'',
    'title':'',
  });
  const addNote = (ev) => {
    ev.preventDefault();

    // if (note.title.trim() === "" || note.body.trim() === "") {
    //   return;
    // }
    // setNotes([
    //   ...notes,
    //   {
    //     ...note,
    //     id:
    //       notes.length > 0 ? Math.max(...notes.map((note) => note.id)) + 1 : 1,
    //   },
    // ]);

    axios
      .post("http://shield.test/api/notes", note)
      .then((payload) => {
        //console.log(payload);
        setNotes([
          ...notes,
          payload.data.data
        ]);
        setNote(initialNotes);
      })
      .catch((errors) => {
        //console.log(errors.response.data.messages);
        //const {body, title}= errors.response.data.message;
        setError(errors.response.data.messages);

      });
    //setNote(initialNotes);
  };
  return (
    <div className="has-background-success-light p-3">
      <form onSubmit={(ev) => addNote(ev)}>
        <div className="field">
          <label htmlFor="">
            Título
            <div className="control">
              <input
                className="input"
                id="title"
                type="text"
                value={note.title}
                onChange={(ev) => setNote({ ...note, title: ev.target.value })}
              />
              <span className="help is-danger">{error.title}</span>
            </div>
          </label>
        </div>
        <div className="field">
          <label htmlFor="">
            Corpo
            <div className="control">
              <textarea
                id="title"
                className="textarea"
                value={note.body}
                onChange={(ev) => setNote({ ...note, body: ev.target.value })}
              />
              <span className="help is-danger">{error.body}</span>
            </div>
            
          </label>
        </div>
        <button className="button is-primary">Adicionar</button>
      </form>
    </div>
  );
};

export default Form;

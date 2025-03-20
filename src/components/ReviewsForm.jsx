import axios from "axios";
import { useState } from "react";

export default function ReviewsForm({movie_id , reloadReviews}) {
  const endpoint = `http://localhost:3000/movies/${movie_id}/reviews`;

  const initialValue = {
    name: "scrivi qui il tuo nome",
    text: "che ne pensi del film?",
    vote: 4,
  };

  const [formData, setFormData] = useState(initialValue);

  const [isFormValid, setIsFormValid] = useState(true);

    //funzione di validazione
    const validateForm = () => {
        if ( !formData.text || !formData.name) return false;
        if( isNaN(formData.vote) || formData.vote < 1 || formData.vote > 5) return false;
        
        return true;
      }


  const handleSubmit = (e) => {

    e.preventDefault();

    //effettuiamo la validazione
    if( !validateForm() ){
      setIsFormValid(false);
      return;
    }


    axios
      .post(endpoint, formData, {
        headers: { "Content-Typer": "application/json" },
      })
      .then(() => {
        setFormData(initialValue); //Richiamare le recensioni da zero
        reloadReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="section-details-rev">
        <h5 className="titleRev">Add Reviews</h5>
        <div className="card-body">

        { !isFormValid && <div className='alert alert-danger mb-3'>I dati nel form non sono validi</div> }


          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="movieRev">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={setFieldValue}
              />
            </div>
            <div className="form-group">
              <label className="movieRev">Text</label>
              <textarea
                name="text"
                className="form-control"
                value={formData.text}
                onChange={setFieldValue}
              />
            </div>
            <div className="form-group">
              <label className="movieRev">vote</label>
              <input
                type="number"
                min={1}
                max={5}
                name="vote"
                className="form-control"
                value={formData.vote}
                onChange={setFieldValue}
              />
            </div>
            <div className="">
              <button type="submit" className="button-gen mt-2 mb-2">
                invia 
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

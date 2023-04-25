import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EntrepriseForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://square-backend.vercel.app/add-entreprise', {
        name,
        email,
        phone,
        description,
        address,


      });

      console.log(response.data);
      setName('');
      setEmail('');
      setPhone('') ;
      setDescription('');
      setAddress('');
    } catch (error) {
      console.error('Erreur lors de la requête POST :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      name : 
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br/>
      <label>
        email : 
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <br/>
      <label>
        phone : 
        <input type="text" value={phone} onChange={handlePhoneChange} />
      </label>
      <br/>
      <label>
        description : 
        <input type="text" value={description} onChange={handleDescriptionChange} />
      </label>
      <br/>
      <label>
        address : 
        <input type="text" value={address} onChange={handleAddressChange} />
      </label>
      <br/>
      <button type="submit">Envoyer</button>
    </form>
  );
};

const EntrepriseList = () => {
  const [entreprises, setEntreprises] = useState(null);

  useEffect(() => {
    // Fonction pour effectuer la requête GET à l'API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://square-backend.vercel.app/get-entreprises');
        setEntreprises(response.data);
      } catch (error) {
        console.error('Erreur lors de la requête GET :', error);
      }
    };

    fetchData();
  }, []);

  if (entreprises === null) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      <h1>Liste des entreprises :</h1>
      <ul>
        {entreprises.map((entreprise) => (
          <li key={entreprise._id}>
            {entreprise.name} {entreprise.email} {entreprise.phone} {entreprise.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <EntrepriseForm />
      <EntrepriseList />
    </div>
  );
};

export default App;

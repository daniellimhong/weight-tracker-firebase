import React, { useState } from "react";
import styled from "styled-components";

const AddLogModal = (props) => {
  const { isAdd, setIsAdd, newId, handleAddClick } = props;
  const [password, setPassword] = useState("");
  const [weight, setWeight] = useState(0);
  const [calories, setCalories] = useState(0);
  const [didActivity, setActivity] = useState(false);
  const [description, setDescription] = useState("");

  const getDate = () => {
    let date = new Date();
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0");
    var yyyy = date.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
  };

  const currentDate = getDate();

  return (
    <Body>
      <Form>
        <h2>Add Log for {currentDate}</h2>
        <Input
          placeholder="Weight"
          onChange={(event) => setWeight(event.target.value)}
        />
        <Input
          placeholder="Calories"
          onChange={(event) => setCalories(event.target.value)}
        />
        <p>
          Activity{" "}
          <input
            type="checkbox"
            onChange={() => {
              setActivity(!didActivity);
            }}
          />
        </p>
        <TextArea
          placeholder="Notes"
          onChange={(event) => setDescription(event.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" onClick={() => {
          password === 'danielhong'
          ? handleAddClick({
            id: newId,
            date: currentDate,
            weight: weight,
            calories: calories,
            activity: didActivity,
            description: description,
          })
          : 
          alert('Incorrect password! Try again.')
        }}>
          Add
        </button>
        <button type="button" onClick={() => setIsAdd(!isAdd)}>
          Cancel
        </button>
      </Form>
    </Body>
  );
};

export default AddLogModal;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: white;
  // choose color
  // background-color: ;
`;

const Form = styled.form`

  width: 800px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 35px;
  background-color: white;
  * {
    color: black;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  -webkit-box-shadow: 4px 4px 12px -3px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 4px 4px 12px -3px rgba(0, 0, 0, 0.63);
  box-shadow: 4px 4px 12px -3px rgba(0, 0, 0, 0.63);
`;
const Input = styled.input`
  width: 25%;
  height: 5%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const TextArea = styled.textarea`
  width: 50%;
  height: 40%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

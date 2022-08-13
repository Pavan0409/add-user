import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // const nameInputRef = useRef();
  // const ageInputRef = useRef();

  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredCollege, setEnteredCollege] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // const enteredName = nameInputRef.current.value;
    // const enteredUserAge  = ageInputRef.current.value;
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age(> 0).'
      })
      return;
    }
    props.onAddUser(enteredUserName, enteredAge, enteredCollege);
    // nameInputRef.current.value = '';
    // ageInputRef.current.value = '';

    setEnteredUserName("");
    setEnteredAge("");
    setEnteredCollege("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
  };


  const errorHandler =()=>{
    setError(null);
  }

  return (
    <Wrapper>
      { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUserName}
            // ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
            // ref={ageInputRef}
          />
          <label htmlFor="college">College Name</label>
          <input
            id="college"
            type="text"
            onChange={collegeChangeHandler}
            value={enteredCollege}
            // ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;

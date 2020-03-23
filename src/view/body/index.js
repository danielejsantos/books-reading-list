import React, { useState } from "react";
import styled from "styled-components";

import backgroundImg from "../../assets/background.jpg";

const Container = styled.div`
  width: 100%;
  height: 88%;
  background-image: url(${backgroundImg});
  background-position: left;
  background-size: 100% auto;
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 140px;
  width: 200px;
  align-items: center;
`;

const AddText = styled.p`
  color: gray;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15px;
  margin-top: 40px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 200px;
  border: 1px solid rgba(92, 151, 191, 1);
  padding: 5px;
`;

const Button = styled.button`
  width: 100px;
  background: rgba(92, 151, 191, 1);
  border: none;
  padding: 10px 20px;
  color: white;
  margin-top: 10px;
`;

const BooksList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 160px;
  margin-top: 50px;
`;

const List = styled.ul`
  list-style-type: circle;
  padding: 0px 20px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ListItem = styled.li`
  padding: 10px 0px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const Body = () => {
  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState("");

  const handleSubmit = () => {
    setBookList([...bookList, book]);
    setBook("");
  };

  return (
    <Container>
      <Wrapper>
        <AddText>Add books to the list:</AddText>
        <Input
          type="text"
          value={book}
          onChange={e => {
            setBook(e.target.value);
          }}
        />
        <Button type="submit" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Wrapper>
      <BooksList>
        <List>
          {bookList.map(book => (
            <ListItem key={book}>{book}</ListItem>
          ))}
        </List>
      </BooksList>
    </Container>
  );
};

export default Body;

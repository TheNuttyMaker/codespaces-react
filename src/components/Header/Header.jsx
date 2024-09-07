
const Header = ({ date, editor }) => {
  
  return (
    <header>
      <h1> Spelling Bee </h1>
      <p> {date} </p>
      <p> NYT game edited by {editor} </p>
    </header>
  );
};
  
  export default Header;
  

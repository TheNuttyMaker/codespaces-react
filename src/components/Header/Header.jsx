
const Header = ({ editor }) => {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return (
    <header>
      <h1> Spelling Bee </h1>
      <p> {today} </p>
      <p> NYT game edited by {editor} </p>
    </header>
  );
};
  
  export default Header;

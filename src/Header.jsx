function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </header>
  );
}

export default Header;
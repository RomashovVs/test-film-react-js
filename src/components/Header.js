function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mx-2  mb-0 h1">Страница онлайн бронирования билетов</span>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href='https://github.com/RomashovVs/test-film-react-js'
                rel='noreferrer'
                target='_blank'
              > Repo </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export { Header };

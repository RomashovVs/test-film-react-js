function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href='https://github.com/RomashovVs/'
                rel='noreferrer'
                target='_blank'
              > Repo </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href='/film-list'
                rel='noreferrer'
              >
                Order
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export { Header };

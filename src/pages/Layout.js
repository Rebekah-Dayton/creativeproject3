import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-custom">
      <Link to="/" class="navbar-brand"> TRIVIA</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/" class="nav-link">Home <span class="sr-only"></span></Link>
          </li>
          <li class="nav-item">
            <Link to="/TFQuestions" class="nav-link">True/False</Link>
          </li>
          <li class="nav-item">
            <Link to="/MultiQuestions" class="nav-link">Mutliple Choice</Link>
          </li>
        </ul>
      </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;
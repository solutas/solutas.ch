import "../scss/vanilla/index.scss";

export default () => {
  return (
    <div class="wrapper">
      <nav class="main-nav">
        <div class="logo"> </div>

        <ul class="main-nav-items">
          <li className="active">
            <a href="">Nav 1 ac</a>
          </li>
          <li>
            <a href="">Nav 2</a>
          </li>
          <li>
            <a href="">Nav 3</a>
          </li>
        </ul>
      </nav>
      <header class="main-header">header</header>
      <section class="content">
        <article>
          <h1>Main article area</h1>
          <p>
            In this layout, we display the areas in source order for any screen
            less that 500 pixels wide. We go to a two column layout, and then to
            a three column layout by redefining the grid, and the placement of
            items on the grid.
          </p>
        </article>
      </section>
      <footer class="main-footer">this is the footer</footer>
    </div>
  );
};

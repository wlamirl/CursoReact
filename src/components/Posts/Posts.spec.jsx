import { render, screen } from "@testing-library/react";

import { Posts } from ".";

const props = {
  posts: [
    {
      id: 1,
      title: "title 1",
      body: "body 1",
      cover: "img/img1.png",
    },
    {
      id: 2,
      title: "title 2",
      body: "body 2",
      cover: "img/img2.png",
    },
    {
      id: 3,
      title: "title 3",
      body: "body 3",
      cover: "img/img3.png",
    },
  ],
};

describe("<Posts />", () => {
  it("should render posts", () => {
    // para ver o que será renderizado
    /*     const { debug } = render(<Posts />);
    debug(); */

    render(<Posts {...props} />);

    expect(screen.getAllByRole("heading", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole("img", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);

    // para pegar uma específica
    expect(screen.getByRole("img", { name: /title 3/i })).toHaveAttribute(
      "src",
      "img/img3.png"
    );
  });

  // este teste está sendo implementado por que faltou no coveraged
  it("should not render posts", () => {
    render(<Posts />);
    //expect(screen.queryByRole("heading", { name: /title/i })).toHaveLength(0);
    //ou - dá na mesma
    // estamos usando query por que é um elemento que não vai existir na tela.
    expect(
      screen.queryByRole("heading", { name: /title/i })
    ).not.toBeInTheDocument();
  });

  // para fazer um snapshot do teste
  it("should match snapshot", () => {
    const { container } = render(<Posts {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

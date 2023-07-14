import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    // render(<PostCard {...mock}/>);
    // const { debug } = render(<PostCard {...mock} />);
    render(<PostCard {...props} />);

    //chamado teste snapshot, para verificar se alguma coisa mudou no componente
    //debug();

    // neste caso irá depender do props (mock.js)
    //expect(screen.getByRole("img", { name: /TITLE 1/i })).toBeInTheDocument();
    /*     expect(screen.getByRole("img", { name: /TITLE 1/i })).toHaveAttribute(
      "src",
      props.cover 
    ); */
    expect(screen.getByRole('img', { name: /TITLE 1/i })).toHaveAttribute('src', 'img/img.png');

    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();

    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    //render(<PostCard {...props} />);
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

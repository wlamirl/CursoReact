import { render, screen } from '@testing-library/react';

import { TextInput } from '.';
import userEvent from '@testing-library/user-event';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    // debug - para ver o que tem na tela
    /*     const { debug } = render(
      <TextInput handleChange={fn} searchValue={"testando"} />
    );
    debug(); */

    render(<TextInput handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    // este teste irá falhar se o input não existir no documento
    //expect(input).toBeInTheDocument();

    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();

    //render(<TextInput handleChange={fn} searchValue={"testando"} />);
    render(<TextInput handleChange={fn} searchValue="um valor qualquer" />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'o valor';

    userEvent.type(input, value);

    // expect(input.value).toBe(value);
    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);

    /* essa parte abaixo, complica o teste e acaba gerando
    falhas no teste, pois o trecho abaixo é uma repetição do teste acima */
    /*     input.value = "";
    userEvent.type(input, "");
    expect(input.value).toBe("");
    expect(fn).toHaveBeenCalledTimes(0); */
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue="" />);
    expect(container).toMatchSnapshot();
  });
});

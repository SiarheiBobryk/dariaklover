import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Introduction from './Introduction';

describe('<Introduction />', () => {
  describe('heading', () => {
    it('should be the `h2` element', () => {
      render(<Introduction />);
      expect(document.querySelector('h2')).toBeInTheDocument();
    });
    it('should have the right content', () => {
      render(<Introduction />);
      const heading = 'Кто я и что я делаю';
      expect(screen.getByText(heading)).toBeInTheDocument();
    });
  });

  describe('Всем привет...', () => {
    it('should have the right content', () => {
      render(<Introduction />);
      expect(document.querySelectorAll('p')[0]).toHaveTextContent('Всем привет, я - Дарья Кловер!');
    });
  });

  describe('Я прохожу обучение...', () => {
    it('should have a link with the right attributes', () => {
      render(<Introduction />);
      const link = document.querySelector('p > a');
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent('Университете образовательной медицины (УОМ)');
      expect(link).toHaveAttribute('href', 'https://uom.education/university');
      expect(link).toHaveAttribute('rel', 'noopener');
    });
    it('should have the open-in-new-window icon`', () => {
      render(<Introduction />);
      const icon = document.querySelector('svg[data-testid="OpenInNewIcon"]');
      expect(icon).toBeInTheDocument();
    });
    it('should have an italic (the `i` HTML element) school name', () => {
      render(<Introduction />);
      const italic = document.querySelector('i');
      expect(italic).toBeInTheDocument();
      expect(italic).toHaveTextContent('PreventAge LifeStyle School');
    });
    it('should have the right content', () => {
      render(<Introduction />);
      expect(document.querySelectorAll('p')[1]).toHaveTextContent('Я прохожу обучение в');
      expect(document.querySelectorAll('p')[1]).toHaveTextContent(
        'на интегративного health-коуча - специалиста по модификации образа жизни и немедикаментозному оздоровлению.',
      );
    });
  });

  describe('Я помогаю своим клиентам...', () => {
    it('should have the right content', () => {
      render(<Introduction />);
      expect(document.querySelectorAll('p')[2]).toHaveTextContent(
        // eslint-disable-next-line max-len
        'Я помогаю своим клиентам вести здоровый образ жизни и предотвратить появление хронических заболеваний, а также повысить качество жизни, улучшить самочувствие, делюсь рекомендациями для восстановления и поддержания здоровья.',
      );
    });
  });

  describe('Я разбираю запрос...', () => {
    it('should have the right content', () => {
      render(<Introduction />);
      expect(document.querySelectorAll('p')[3]).toHaveTextContent(
        // eslint-disable-next-line max-len
        'Я разбираю запрос клиента с разных сторон, что помогает увидеть полную картину конкретной ситуации и ее причины. Я использую различные подходы и инструменты, чтобы помочь проработать эти причины и придти к решению запроса клиента.',
      );
    });
  });

  describe('Одна из моих главных задач...', () => {
    it('should have the right content', () => {
      render(<Introduction />);
      expect(document.querySelectorAll('p')[4]).toHaveTextContent(
        'Одна из моих главных задач - осознание клиентом того, ',
      );
      expect(document.querySelectorAll('p')[4].querySelector('strong')).toHaveTextContent(
        'что, как и почему нужно делать',
      );
      expect(document.querySelectorAll('p')[4]).toHaveTextContent(', чтобы достичь желаемого результата.');
    });
  });
});

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import bookingMetaData from '../Booking/bookingMetaData';
import howToBookMetaData from './howToBookMetaData';
import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import LinkBlank from '../../components/LinkBlank';

export const PUBLIC_PATH = 'responsive_images';

export const Img = styled('img')(function styleImg({ theme }) {
  return {
    maxWidth: '100%',
    borderRadius: theme.typography.pxToRem(8),
  };
});

export const Figure = styled('figure')(function styleFigure({ theme }) {
  return {
    marginTop: 0,
    marginRight: 0,
    marginBottom: theme.typography.pxToRem(8),
    marginLeft: 0,
  };
});

function HowToBook() {
  const {
    instagram: { href: instagramHref },
    telegram: { href: telegramHref },
    whatsapp: { href: whatsappHref },
    email,
  }: Config = React.useContext(AppConfigContext);
  return (
    <>
      <Helmet>
        <title>{howToBookMetaData.title}</title>
      </Helmet>
      <Heading>{howToBookMetaData.heading}</Heading>
      <Paragraph>
        <strong>Шаг 1</strong>. Перейдите на страницу{' '}
        <Link component={RouterNavLink} to={bookingMetaData.path}>
          {bookingMetaData.heading}
        </Link>
        .
      </Paragraph>
      <Paragraph>
        <strong>Шаг 2</strong>. Выберите консультацию и нажмите на кнопку <i>ВЫБРАТЬ ДАТУ И ВРЕМЯ</i>.
      </Paragraph>
      <Paragraph>
        <strong>Шаг 3</strong>. В открывшемся окне убедитесь, что отображаемое время соответствует вашему местному
        времени. Если это не так, то установите ваш часовой пояс.
      </Paragraph>
      {/* TODO: Move it to the separate component */}
      <Figure>
        <picture>
          <source type="image/webp" srcSet={`${PUBLIC_PATH}/how-to-book-1.webp`} />
          <Img loading="lazy" src={`${PUBLIC_PATH}/how-to-book-1.png`} alt="Установка часового пояса" />
        </picture>
        <figcaption>
          <Typography component="p" variant="caption" sx={{ textAlign: 'center' }}>
            Установка вашего часового пояса
          </Typography>
        </figcaption>
      </Figure>
      <Paragraph>
        <strong>Шаг 4</strong>. Выберите день.
      </Paragraph>
      <Figure>
        <picture>
          <source type="image/webp" srcSet={`${PUBLIC_PATH}/how-to-book-2.webp`} />
          <Img loading="lazy" src={`${PUBLIC_PATH}/how-to-book-2.png`} alt="Выбор дня" />
        </picture>
        <figcaption>
          <Typography component="p" variant="caption" sx={{ textAlign: 'center' }}>
            Выбор дня
          </Typography>
        </figcaption>
      </Figure>
      <Paragraph>
        <strong>Шаг 5</strong>. Выберите время и подтвердите выбранное время нажав на кнопку <i>Confirm</i>.
      </Paragraph>
      <Figure>
        <picture>
          <source type="image/webp" srcSet={`${PUBLIC_PATH}/how-to-book-3.webp`} />
          <Img loading="lazy" src={`${PUBLIC_PATH}/how-to-book-3.png`} alt="Выбор времени" />
        </picture>
        <figcaption>
          <Typography component="p" variant="caption" sx={{ textAlign: 'center' }}>
            Выбор времени
          </Typography>
        </figcaption>
      </Figure>
      <Figure>
        <picture>
          <source type="image/webp" srcSet={`${PUBLIC_PATH}/how-to-book-4.webp`} />
          <Img loading="lazy" src={`${PUBLIC_PATH}/how-to-book-4.png`} alt="Подтверждение выбранного времени" />
        </picture>
        <figcaption>
          <Typography component="p" variant="caption" sx={{ textAlign: 'center' }}>
            Подтверждение выбранного времени
          </Typography>
        </figcaption>
      </Figure>
      <Paragraph>
        <strong>Шаг 6</strong>. Введите свое имя в поле <i>Name</i> [1], электронную почту в поле <i>Email</i> [2] и
        нажмите кнопку <i>Schedule Event</i> [3].
      </Paragraph>
      <Alert severity="warning">
        <AlertTitle>
          Электронная почта (<i>Email</i>)
        </AlertTitle>
        Пожалуйста, внимательно вводите адрес вашей электронной почты (<i>Email</i>), т.к. на этот адрес мы вам вышлем
        подтверждение записи на консультацию с указанием выбранного дня и времени.
      </Alert>
      <Figure>
        <picture>
          <source type="image/webp" srcSet={`${PUBLIC_PATH}/how-to-book-5.webp`} />
          <Img
            loading="lazy"
            src={`${PUBLIC_PATH}/how-to-book-5.png`}
            alt="Ввод вашего имени, электронной почты и подтверждение"
          />
        </picture>
        <figcaption>
          <Typography component="p" variant="caption" sx={{ textAlign: 'center' }}>
            Ввод вашего имени, электронной почты и подтверждение
          </Typography>
        </figcaption>
      </Figure>
      <Paragraph>
        <strong>Шаг 7</strong>. Вы увидите похожую страницу, где будет надпись <i>Confirmed</i> и подробная информация о
        консультации.
      </Paragraph>
      <Figure>
        <picture>
          <source type="image/webp" srcSet={`${PUBLIC_PATH}/how-to-book-6.webp`} />
          <Img loading="lazy" src={`${PUBLIC_PATH}/how-to-book-6.png`} alt="Подтверждение записи" />
        </picture>
        <figcaption>
          <Typography component="p" variant="caption" sx={{ textAlign: 'center' }}>
            Подтверждение записи
          </Typography>
        </figcaption>
      </Figure>
      <Paragraph>
        <strong>Шаг 8</strong>. Проверьте входящие сообщения на вашей электронную почте. Вам должно прийти сообщение с
        подтверждением записи в течение 5-10 минут (иногда сразу).
      </Paragraph>
      <Alert severity="warning">
        <AlertTitle>
          Папка <i>Спам</i>
        </AlertTitle>
        Если в папке <i>Входящие</i> ничего нет, попробуйте проверить папку <i>Спам</i>. Иногда, сообщение может быть
        там.
      </Alert>
      <Paragraph>Вам придет похожее сообщение с подтверждением записи на консультацию:</Paragraph>
      <Figure>
        <picture>
          <source type="image/webp" srcSet={`${PUBLIC_PATH}/how-to-book-7.webp`} />
          <Img
            loading="lazy"
            src={`${PUBLIC_PATH}/how-to-book-7.png`}
            alt="Сообщение с подтверждением записи на консультацию"
          />
        </picture>
        <figcaption>
          <Typography component="p" variant="caption" sx={{ textAlign: 'center' }}>
            Сообщение с подтверждением записи на консультацию
          </Typography>
        </figcaption>
      </Figure>
      <Paragraph>
        В полученном сообщении вы сможете увидеть следующее: название консультации [1] (<i>Event Name</i>), краткое
        описание консультации [2], кнопку для подключения к консультации [3] (<i>Join with Google Meet</i>), дату и
        время проведения консультации [6], а также ссылку для отмены [4] (<i>Cancel</i>) и переноса консультации на
        другое время [5] (<i>Reschedule</i>).
      </Paragraph>
      <Figure>
        <picture>
          <source type="image/webp" srcSet={`${PUBLIC_PATH}/how-to-book-8.webp`} />
          <Img
            loading="lazy"
            src={`${PUBLIC_PATH}/how-to-book-8.png`}
            alt="Важные элементы в сообщении с подтверждением записи на консультацию"
          />
        </picture>
        <figcaption>
          <Typography component="p" variant="caption" sx={{ textAlign: 'center' }}>
            Важные элементы в сообщении с подтверждением записи на консультацию
          </Typography>
        </figcaption>
      </Figure>
      <Paragraph>Поздравляем, у вас получилось 🎉</Paragraph>
      <Paragraph>Сохраните себе в календаре дату и время консультации.</Paragraph>
      <Paragraph>До встречи!</Paragraph>
      {/* SOMEDAY: Move it to the separate component */}
      <Alert severity="info">
        <AlertTitle>Помощь в записи</AlertTitle>
        Если у вас остались вопросы или вы продолжаете испытывать сложности в записи на консультацию, то не стесняйтесь
        и свяжитесь с нами через{' '}
        <LinkBlank href={instagramHref} rel="noopener">
          Instagram
        </LinkBlank>
        ,{' '}
        <LinkBlank href={telegramHref} rel="noopener">
          Telegram
        </LinkBlank>
        ,{' '}
        <LinkBlank href={whatsappHref} rel="noopener">
          WhatsApp
        </LinkBlank>{' '}
        или по{' '}
        <LinkBlank href={`mailto:  ${email}`} rel="noopener">
          электронной почте
        </LinkBlank>
        . Мы обязательно поможем 👍
      </Alert>
    </>
  );
}

export default HowToBook;

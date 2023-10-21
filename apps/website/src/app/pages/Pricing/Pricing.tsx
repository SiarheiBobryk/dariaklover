import * as React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink as RouterNavLink } from 'react-router-dom';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { styled, Theme, useTheme } from '@mui/material';
import AccordionMui from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContentMui from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemMui from '@mui/material/ListItem';
import ListItemIconMui from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import Heading from '../../components/Heading';
import bookingMetaData from '../Booking/bookingMetaData';

import pricingMetaData from './pricingMetaData';

const CardContent = styled(CardContentMui)(function styleCardContent({ theme }) {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    paddingTop: 0,
  };
});

const ListItemIcon = styled(ListItemIconMui)(function styleListItemIcon({ theme }) {
  return {
    minWidth: theme.spacing(0),
  };
});

const ListItem = styled(ListItemMui)(function styleListItem({ theme }) {
  return {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    gap: theme.spacing(1),
  };
});

const Accordion = styled(AccordionMui)(function styleAccordion({ theme }) {
  return {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
  };
});

const HTMLUnorderedList = styled('ul')(function styleHtmlList({ theme }) {
  return {
    paddingLeft: theme.spacing(2),
    marginTop: 0,
  };
});

// const Price = styled(Typography)(function stylePrice({ theme }) {
//   return {
//     fontSize: theme.spacing(2.75),
//     fontWeight: theme.typography.fontWeightBold,
//     textAlign: 'center',
//   };
// });

// const PriceOld = styled('small')(function stylePriceOld({ theme }) {
//   return {
//     textAlign: 'center',
//     textDecoration: 'line-through',
//     fontSize: theme.spacing(2),
//     fontWeight: theme.typography.fontWeightRegular,
//   };
// });

function Pricing() {
  const theme: Theme = useTheme();
  return (
    <>
      <Helmet>
        <title>{pricingMetaData.title}</title>
      </Helmet>
      <Heading>{pricingMetaData.heading}</Heading>
      <Grid container spacing={{ xs: 1, md: 2 }} sx={{ marginBottom: theme.spacing(2) }}>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardHeader title="Индивидуальная коуч-сессия" />
            <CardContent>
              <List dense>
                {/* Длительность работы */}
                <ListItem>
                  <ListItemIcon>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <ListItemText primary="-" />
                </ListItem>
                {/* Количество встреч */}
                <ListItem>
                  <ListItemIcon>
                    <QuestionAnswerIcon />
                  </ListItemIcon>
                  <ListItemText primary="1 сессия" />
                </ListItem>
                {/* Длительность встречи */}
                <ListItem>
                  <ListItemIcon>
                    <ScheduleIcon />
                  </ListItemIcon>
                  <ListItemText primary="60 минут" />
                </ListItem>
              </List>
              {/* Accordions container */}
              <Box>
                {/* Включает */}
                <Accordion disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Включает</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLUnorderedList>
                      <Typography component="li">1 запрос за 1 сессию</Typography>
                    </HTMLUnorderedList>
                  </AccordionDetails>
                </Accordion>
                {/* В результате */}
                <Accordion disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1b-content" id="panel1b-header">
                    <Typography>В результате</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLUnorderedList>
                      <Typography component="li">упорядочите хаос в голове</Typography>
                      <Typography component="li">поймете, на чем сфокусироваться</Typography>
                      <Typography component="li">почувствуете себя лучше</Typography>
                      <Typography component="li">определите дальнейшие шаги</Typography>
                    </HTMLUnorderedList>
                  </AccordionDetails>
                </Accordion>
              </Box>
              {/* <Price>110 €*</Price> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardHeader title="Пакет из 5 коуч-сессий" />
            <CardContent>
              <List dense>
                {/* Длительность работы */}
                <ListItem>
                  <ListItemIcon>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <ListItemText primary="1-2 месяца" />
                </ListItem>
                {/* Количество встреч */}
                <ListItem>
                  <ListItemIcon>
                    <QuestionAnswerIcon />
                  </ListItemIcon>
                  <ListItemText primary="5 сессий" />
                </ListItem>
                {/* Длительность встречи */}
                <ListItem>
                  <ListItemIcon>
                    <ScheduleIcon />
                  </ListItemIcon>
                  <ListItemText primary="60 минут" />
                </ListItem>
              </List>
              {/* Accordions container */}
              <Box>
                {/* Включает */}
                <Accordion disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Включает</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLUnorderedList>
                      <Typography component="li">1 запрос за 1 сессию</Typography>
                      <Typography component="li">коуч-сессии 1 раз в 7-10 дней</Typography>
                    </HTMLUnorderedList>
                  </AccordionDetails>
                </Accordion>
                {/* В результате */}
                <Accordion disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2b-content" id="panel2b-header">
                    <Typography>В результате</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLUnorderedList>
                      <Typography component="li">упорядочите хаос в голове</Typography>
                      <Typography component="li">поймете, на чем сфокусироваться</Typography>
                      <Typography component="li">почувствуете себя лучше</Typography>
                      <Typography component="li">100% начнете действовать</Typography>
                    </HTMLUnorderedList>
                  </AccordionDetails>
                </Accordion>
              </Box>
              {/* Prices box */}
              {/* <Price>
                520 €*&nbsp;<PriceOld>550 €</PriceOld>
              </Price> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardHeader title="Программа с сопровождением" />
            <CardContent>
              <List dense>
                {/* Длительность работы */}
                <ListItem>
                  <ListItemIcon>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <ListItemText primary="4 месяца" />
                </ListItem>
                {/* Количество встреч */}
                <ListItem>
                  <ListItemIcon>
                    <QuestionAnswerIcon />
                  </ListItemIcon>
                  <ListItemText primary="до 16 встреч" />
                </ListItem>
                {/* Длительность встречи */}
                <ListItem>
                  <ListItemIcon>
                    <ScheduleIcon />
                  </ListItemIcon>
                  <ListItemText primary="30-60 минут" />
                </ListItem>
              </List>
              {/* Accordions container */}
              <Box>
                {/* Включает */}
                <Accordion disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                    <Typography>Включает</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLUnorderedList>
                      <Typography component="li">консультации, коучинг, работу с подсознанием</Typography>
                      <Typography component="li">индивидуальную программу здоровья**</Typography>
                      <Typography component="li">1 месяц диагностики (анкетирование, анамнез, фото)</Typography>
                      <Typography component="li">3 месяца работы по программе</Typography>
                      <Typography component="li">2-4 встречи в месяц</Typography>
                      <Typography component="li">
                        еженедельная поддержка, включая ответы на ваши вопросы, укрепление мотивации, дополнительные
                        материалы по программе
                      </Typography>
                      <Typography component="li">проверка дневников питания, заданий</Typography>
                    </HTMLUnorderedList>
                  </AccordionDetails>
                </Accordion>
                {/* В результате */}
                <Accordion disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3b-content" id="panel3b-header">
                    <Typography>В результате</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLUnorderedList>
                      <Typography component="li">получите индивидуальную стратегию оздоровления</Typography>
                      <Typography component="li">поймете причинно-следственные связи своего состояния</Typography>
                      <Typography component="li">получите эффективные инструменты для поддержания здоровья</Typography>
                      <Typography component="li">найдете и укрепите мотивацию</Typography>
                      <Typography component="li">введете новые полезные привычки</Typography>
                      <Typography component="li">научитесь слушать и понимать свое тело</Typography>
                      <Typography component="li">трансформируете мышление</Typography>
                      <Typography component="li">улучшите здоровье и самочувствие</Typography>
                    </HTMLUnorderedList>
                  </AccordionDetails>
                </Accordion>
              </Box>
              {/* <Price>2500 €*</Price> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <Typography variant="caption" component="small">
        * в стоимость уже включены 25% НДС
      </Typography>
      <br />
      <Typography variant="caption" component="small">
        ** программа здоровья составляется по 1 основному и 2-3 дополнительным запросам
      </Typography> */}
      <Alert severity="warning" variant="outlined">
        В ближайшее время линейка услуг будет меняться. Появятся новые продукты и услуги, изменится стоимость. Уточняйте
        актуальную информацию лично у Дарьи или следите за нашими новостями. Совсем скоро информация на сайте будет
        обновлена.
      </Alert>
      <Alert severity="info" variant="outlined">
        Для новых клиентов запись на платные встречи доступна только после установочной встречи. Нажмите{' '}
        <Link component={RouterNavLink} to={bookingMetaData.path}>
          {bookingMetaData.heading}
        </Link>
        .
      </Alert>
    </>
  );
}

export default Pricing;

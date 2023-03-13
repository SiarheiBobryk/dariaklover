import * as React from 'react';
import { Helmet } from 'react-helmet';

import { NavLink as RouterNavLink } from 'react-router-dom';

import { styled, Theme, useTheme } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Typography from '@mui/material/Typography';

import bookingMetaData from '../Booking/bookingMetaData';
import pricingMetaData from './pricingMetaData';

const CardContentStyled = styled(CardContent)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    paddingTop: 0,
  };
});

const ListItemIconStyled = styled(ListItemIcon)(({ theme }) => {
  return {
    minWidth: theme.spacing(0),
  };
});

const ListItemStyled = styled(ListItem)(({ theme }) => {
  return {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    gap: theme.spacing(1),
  };
});

const AccordionStyled = styled(Accordion)(({ theme }) => {
  return {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
  };
});

const HTMLListStyled = styled('ul')(({ theme }) => {
  return {
    paddingLeft: theme.spacing(2),
    marginTop: 0,
  };
});

const Price = styled(Typography)(({ theme }) => {
  return {
    fontSize: theme.spacing(2.75),
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
  };
});

const PriceOld = styled('small')(({ theme }) => {
  return {
    textAlign: 'center',
    textDecoration: 'line-through',
    fontSize: theme.spacing(2),
    fontWeight: theme.typography.fontWeightRegular,
  };
});

function Pricing() {
  const theme: Theme = useTheme();
  return (
    <>
      <Helmet>
        <title>{pricingMetaData.title}</title>
      </Helmet>
      <Grid container spacing={{ xs: 1, md: 2 }} sx={{ marginBottom: theme.spacing(2) }}>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardHeader title="Индивидуальная коуч-сессия" />
            <CardContentStyled>
              <List dense>
                {/* Длительность работы */}
                <ListItemStyled>
                  <ListItemIconStyled>
                    <CalendarMonthIcon />
                  </ListItemIconStyled>
                  <ListItemText primary="-" />
                </ListItemStyled>
                {/* Количество встреч */}
                <ListItemStyled>
                  <ListItemIconStyled>
                    <QuestionAnswerIcon />
                  </ListItemIconStyled>
                  <ListItemText primary="1 сессия" />
                </ListItemStyled>
                {/* Длительность встречи */}
                <ListItemStyled>
                  <ListItemIconStyled>
                    <ScheduleIcon />
                  </ListItemIconStyled>
                  <ListItemText primary="60 минут" />
                </ListItemStyled>
              </List>
              {/* Accordions container */}
              <Box>
                {/* Включает */}
                <AccordionStyled disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Включает</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLListStyled>
                      <Typography component="li">1 запрос за 1 сессию</Typography>
                    </HTMLListStyled>
                  </AccordionDetails>
                </AccordionStyled>
                {/* В результате */}
                <AccordionStyled disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1b-content" id="panel1b-header">
                    <Typography>В результате</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLListStyled>
                      <Typography component="li">упорядочите хаос в голове</Typography>
                      <Typography component="li">поймете, на чем сфокусироваться</Typography>
                      <Typography component="li">почувствуете себя лучше</Typography>
                      <Typography component="li">определите дальнейшие шаги</Typography>
                    </HTMLListStyled>
                  </AccordionDetails>
                </AccordionStyled>
              </Box>
              <Price>110 €*</Price>
            </CardContentStyled>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardHeader title="Пакет из 5 коуч-сессий" />
            <CardContentStyled>
              <List dense>
                {/* Длительность работы */}
                <ListItemStyled>
                  <ListItemIconStyled>
                    <CalendarMonthIcon />
                  </ListItemIconStyled>
                  <ListItemText primary="1-2 месяца" />
                </ListItemStyled>
                {/* Количество встреч */}
                <ListItemStyled>
                  <ListItemIconStyled>
                    <QuestionAnswerIcon />
                  </ListItemIconStyled>
                  <ListItemText primary="5 сессий" />
                </ListItemStyled>
                {/* Длительность встречи */}
                <ListItemStyled>
                  <ListItemIconStyled>
                    <ScheduleIcon />
                  </ListItemIconStyled>
                  <ListItemText primary="60 минут" />
                </ListItemStyled>
              </List>
              {/* Accordions container */}
              <Box>
                {/* Включает */}
                <AccordionStyled disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Включает</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLListStyled>
                      <Typography component="li">1 запрос за 1 сессию</Typography>
                      <Typography component="li">коуч-сессии 1 раз в 7-10 дней</Typography>
                    </HTMLListStyled>
                  </AccordionDetails>
                </AccordionStyled>
                {/* В результате */}
                <AccordionStyled disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2b-content" id="panel2b-header">
                    <Typography>В результате</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLListStyled>
                      <Typography component="li">упорядочите хаос в голове</Typography>
                      <Typography component="li">поймете, на чем сфокусироваться</Typography>
                      <Typography component="li">почувствуете себя лучше</Typography>
                      <Typography component="li">100% начнете действовать</Typography>
                    </HTMLListStyled>
                  </AccordionDetails>
                </AccordionStyled>
              </Box>
              {/* Prices box */}
              <Price>
                520 €*&nbsp;<PriceOld>550 €</PriceOld>
              </Price>
            </CardContentStyled>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={2}>
            <CardHeader title="Программа с сопровождением" />
            <CardContentStyled>
              <List dense>
                {/* Длительность работы */}
                <ListItemStyled>
                  <ListItemIconStyled>
                    <CalendarMonthIcon />
                  </ListItemIconStyled>
                  <ListItemText primary="4 месяца" />
                </ListItemStyled>
                {/* Количество встреч */}
                <ListItemStyled>
                  <ListItemIconStyled>
                    <QuestionAnswerIcon />
                  </ListItemIconStyled>
                  <ListItemText primary="до 16 встреч" />
                </ListItemStyled>
                {/* Длительность встречи */}
                <ListItemStyled>
                  <ListItemIconStyled>
                    <ScheduleIcon />
                  </ListItemIconStyled>
                  <ListItemText primary="30-60 минут" />
                </ListItemStyled>
              </List>
              {/* Accordions container */}
              <Box>
                {/* Включает */}
                <AccordionStyled disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                    <Typography>Включает</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLListStyled>
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
                    </HTMLListStyled>
                  </AccordionDetails>
                </AccordionStyled>
                {/* В результате */}
                <AccordionStyled disableGutters elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3b-content" id="panel3b-header">
                    <Typography>В результате</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HTMLListStyled>
                      <Typography component="li">получите индивидуальную стратегию оздоровления</Typography>
                      <Typography component="li">поймете причинно-следственные связи своего состояния</Typography>
                      <Typography component="li">получите эффективные инструменты для поддержания здоровья</Typography>
                      <Typography component="li">найдете и укрепите мотивацию</Typography>
                      <Typography component="li">введете новые полезные привычки</Typography>
                      <Typography component="li">научитесь слушать и понимать свое тело</Typography>
                      <Typography component="li">трансформируете мышление</Typography>
                      <Typography component="li">улучшите здоровье и самочувствие</Typography>
                    </HTMLListStyled>
                  </AccordionDetails>
                </AccordionStyled>
              </Box>
              <Price>2000 €*</Price>
            </CardContentStyled>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="caption" component="small">
        * в стоимость уже включены 25% НДС
      </Typography>
      <br />
      <Typography variant="caption" component="small">
        ** программа здоровья составляется по 1 основному и 2-3 дополнительным запросам
      </Typography>
      <Alert severity="info" variant="outlined">
        Для новых клиентов запись на платные встречи доступна только после установочной встречи. Нажмите{' '}
        <Link component={RouterNavLink} to={bookingMetaData.path}>
          {bookingMetaData.heading}
        </Link>
        .
      </Alert>
      <Alert severity="warning" variant="outlined">
        Планируется повышение цен в апреле 2023 года.
      </Alert>
    </>
  );
}

export default Pricing;

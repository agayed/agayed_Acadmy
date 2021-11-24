import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import Section from '../components/Section';
import useRpay from '../hooks/useRpay';
import useGet from '../hooks/useGet';
import Image from '../assets/images/image.svg';
import CircleSpring from '../components/CircleSpring';
import { Carousel } from 'react-bootstrap';
import '../index.css'
import Fades from './Bootstrap/Fade';
import Fullscreen_Modal from './Bootstrap/Fullscreen Modal';
import CourseCard from '../components/CourseCard';
// import abouts from './Bootstrap/about';
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 6),
  },
  image: {
    height: '75%',
    width: '75%',
  },
  heroButtons: {
    marginTop: theme.spacing(1),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(30),
  },
}));

export default function Album() {
  const classes = useStyles();
  const history = useHistory();
  const [res, err, get] = useGet();

  useRpay();

  useEffect(() => {
    get('/pages/home');
  }, []);

  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRL6Dj3E1yjcNYpoKLt8IqoKeH7AuiFf4UQ&usqp=CAU"
        alt="معا نتحدى المستحيل"
      />
      <Carousel.Caption>
        <h3 className="Carousel_h3">معا نتحدى المستحيل</h3>
        <p className="Carousel_p">أحسن وسيلة للتغلب على الصعاب اختراقها</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 image"
        src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAMRUC4.img?h=416&w=799&m=6&q=60&u=t&o=f&l=f"
        alt="Second slide"
      />
  
      <Carousel.Caption>
      <h3 className="Carousel_h3">أنت الآن فى المكان الصحيح</h3>
      <p className="Carousel_p">  تريد أن تكون مبدعاً في هذه الحياة أول خطوة.. أحتك بالناجحين وأستمع لأفكارهم وحاورهم.. هذه أول خطوة للنجاح.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="data:image/jpeg;base64,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"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3 className="Carousel_h3">لكل مجتهد نصيب</h3>
        <p className="Carousel_p">اذا كنت من يهوى استعراض قدراته فإنك ستكون منفراً في نظر الآخرين، أما اذا كنت تتصرف بصدق وتؤدي أي عمل بإخلاص فتأكد أنك ستقدم للجميع أقوى العروض.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  

    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                الموقع التعليمي العربى
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={Image} alt="hero" className={classes.image} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className={classes.heroDescription}
              style={{ display: 'flex' }}
            >
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                هذا الموقع يتمتع بمقدرة عالية فى التعليم لما له من أساليب تربوية وتعليمية لكل الأعمار وفى كل المجلات ، تصفح الموقع وستجد كل ماتريده إنطلق الى الأمام
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        window.location.href = '/#explore';
                      }}
                    >
                      Explore the courses
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        if (!localStorage.getItem('role')) history.push('/sign-up');
                        else history.push('/profile/me');
                      }}
                    >
                      {!localStorage.getItem('role') ? `Join to our community now` : `my account`}
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* End hero unit */}
      {res && (
        <Container className={classes.cardGrid} maxWidth="lg" id="explore">
          <Section
            title="Top Courses"
            data={res?.courses}
            viewAll="/view-all/courses"
            type="course"
          />
          <div style={{ margin: 60 }} />
          <Section title="Goals" data={res?.goals} type="goal" />
          <div style={{ margin: 60 }} />
          <Section
            title="Projects"
            data={res?.projects}
            viewAll="/view-all/projects"
            type="project"
          />
        </Container>
      )}
      {!res && !err && <CircleSpring />}
    </main>
<Fades/>
<Fullscreen_Modal/>

    </div>
  );
}

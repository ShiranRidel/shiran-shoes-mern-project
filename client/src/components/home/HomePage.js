import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from './SwipeableViews';
import { autoPlay } from 'react-swipeable-views-utils';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '',
    imgPath:
      'https://imdesigngroup.com/wp-content/uploads/shoe-background.jpg',
  },
  {
    label: '',
    imgPath:
      'https://download.hipwallpaper.com/desktop/1920/1080/44/28/2rtTh0.jpg',
  },
  {
    label: '',
    imgPath:
      'https://download.hipwallpaper.com/desktop/1366/768/13/76/DVQ62C.jpg',
  },
  {
    label: '',
    imgPath:
      'https://download.hipwallpaper.com/desktop/1366/768/57/90/0mdKLb.jpg',
  },
];

function HomePage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (

    <Zoom collapse>
    <Box sx={{ maxWidth: 1600, flexGrow: 1 ,marginTop:'-60px'}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 60,
          pl: 2,
          bgcolor: 'background.default',

        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <Link to="/products">
<AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
         {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Fade> <Box
                component="img"
                sx={{
                  height: 355,
                  display: 'block',
                  maxWidth: 1600,
                  overflow: 'hidden',
                  width: '100%',

                }}
                src={step.imgPath}
                alt={step.label}
              />  </Fade>
            ) : null}
          </div> 
        ))}
      </AutoPlaySwipeableViews></Link>
        <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >  
            
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            
          </Button>
        }
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <h2  style={{textAlign:'center',font:'bold',color:'grey'}}>Our Moto</h2>  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <div style={{textAlign:'center'}}>We believe in a world where you have total freedom to be you, 
      without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary
       adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re
        capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you 
        the confidence to be whoever you want to be.</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div style={{textAlign:'center'}}>We have that same love for other labels, choosing only the best pieces from their collections to give you 
          all the things you want to wear… as well as some things you never imagined you’d fall for. Win-win.</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    </Box>
    </Zoom>
  );
  
}

export default HomePage;

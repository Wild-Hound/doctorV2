import React from "react";
//@ts-ignore
import styles from "./Accordation.module.scss";
//@ts-ignore
import labImg from "../../../Images/lab.jpg";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

function Accordation() {
  const classes = useStyles();

  return (
    <div className={styles.accordationWrapper}>
      <div className={styles.div1}>
        <img src={labImg} />
      </div>
      <div className={styles.div2}>
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                How does it work ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Do I need a designer to use Doctris ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                What do I need to do to start selling ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                What happens when I receive an order ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Accordation;

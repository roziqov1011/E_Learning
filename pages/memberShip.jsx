import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import style from '../styles/MemberShip.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function memberShip() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Head>
        <title>Member Ship</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
      </Head>
      <section className={style.membership}>
        <div className={`${style.membership__container} container`}>
          <main className={style.membership__container__wrapper}>
            <div className={style.membership__container__wrapper__title}>
              <h2>Affordable pricing</h2>
            </div>
            <ul className={style.membership__container__wrapper__list}>
              <li className={style.card1}>
                <span>
                  <a href="#">Like a pussy</a>
                  <div className={style.free}>
                    <h2>Free</h2>
                    <p>/ forever</p>
                  </div>
                  <section>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Components-driven system</p>
                    </div>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Sales-boosting landing pages</p>
                    </div>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Awesome Feather icons pack</p>
                    </div>
                  </section>
                </span>
                <Link className={style.link} href="/checkout">Try for free</Link>
              </li>
              <li className={style.card2}>
                <span>
                  <div className={style.month}>
                    <a href="#">👤 Individual</a>
                    <p>best!</p>
                  </div>
                  <div className={style.free}>
                    <h2>$24</h2>
                    <p>/ MONTH</p>
                  </div>
                  <section>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Components-driven system</p>
                    </div>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Sales-boosting landing pages</p>
                    </div>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Awesome Feather icons pack</p>
                    </div>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Awesome Feather icons pack</p>
                    </div>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Awesome Feather icons pack</p>
                    </div>
                  </section>
                </span>
                <Link className={style.link} href="/checkout">Try for free</Link>
              </li>
              <li className={style.card3}>
                <span>
                  <a href="#">Like a pussy</a>
                  <div className={style.free}>
                    <h2>Free</h2>
                    <p>/ forever</p>
                  </div>
                  <section>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Components-driven system</p>
                    </div>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Sales-boosting landing pages</p>
                    </div>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Awesome Feather icons pack</p>
                    </div>
                    <div>
                      <i className="bi bi-check2"></i>
                      <p>Awesome Feather icons pack</p>
                    </div>
                  </section>

                </span>
                <Link className={style.link} href="/checkout">Try for free</Link>
              </li>
            </ul>
            <div className={style.membership__container__wrapper__card}>
              <main className={style.membership__container__wrapper__card__text}>
                <h4>Online coaching lessons for remote learning.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <Link href='/checkout'>Start learning now</Link>
              </main>
            </div>
          </main>
          <section className={style.membership__container__wrapper__accordion}>
            <div>
              <h3>Online coaching lessons for remote learning</h3>
            </div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  Lorem ipsum dolor sit amet
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Consectetur adipiscing elit, sed do </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                  varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                  laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  Advanced settings
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                  amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  Advanced settings
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                  amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                  amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </section>
        </div>
      </section>
    </>
  )
}

export default memberShip;
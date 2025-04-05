import type { Component } from 'solid-js';

import styles from './Academic.module.scss';
import Container from './shared/Container';
import { Link } from '@solidjs/router';
import icons from './assets/minima-social-icons.svg';
import styleshome from './Home.module.scss';

const Academic: Component = () => {
    return (
        <div class={styles.Academic}>
            <Container>

                <div class={styleshome.Container}>
                    <div class={styleshome.Links}>
                        <a href="https://github.com/majapavlo" target="_blank">
                            <svg><use href={icons + '#github'}></use></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/maja-pavlovic/" target="_blank">
                            <svg><use href={icons + '#linkedin'}></use></svg>
                        </a>
                        <a href="https://twitter.com/maja_pavlo" target="_blank">
                            <svg><use href={icons + '#x'}></use></svg>
                        </a>
                        <a href="https://bsky.app/profile/majapavlo.bsky.social" target="_blank">
                            <svg><use href={icons + '#bluesky'}></use></svg>
                        </a>
                        <a href="https://scholar.google.com/citations?user=NEa-wIIAAAAJ&hl=en" target="_blank">
                            <svg><use href={icons + '#scholar'}></use></svg>
                        </a>
                        <a href="https://medium.com/@majapavlo" target="_blank">
                            <svg><use href={icons + '#medium'}></use></svg>
                        </a>
                        {/* <a href="https://stackoverflow.com/users/17896972/mpavlo" target="_blank">
              <svg><use href={icons + '#stackoverflow'}></use></svg>
            </a> */}
                    </div>
                </div>



                <div class="teaching">
                    <h3 class={styles.ResearchInterestsHeader}>Teaching</h3>
                    I'm a Teaching Assistant for the following modules at <strong>QMUL</strong>:
                    <ul>
                        <li> Neural Networks &amp; NLP (<strong>2025</strong>)</li>
                        <li> Deep Learning for Computer Vision (<strong>2024</strong>) </li>
                        <li> Natural Language Processing (<strong>2023</strong>, <strong>2024</strong>) </li>
                        <li> Machine Learning (<strong>2023</strong>, <strong>2024</strong>)</li>
                    </ul>
                    <div>
                        Before supporting teaching at Queen Mary, I volunteered as a <em>Python instructor</em> with <a href='https://codefirstgirls.com/'>Code First Girls</a>, where I taught foundational programming skills. Prior to that, I volunteered as a <em>mathematics tutor</em> with <a href='https://www.caritas.at/'>Cartias Austria</a>.
                    </div>

                    <h3 class={styles.ResearchInterestsHeader}>Mentoring</h3>
                    Currently, mentoring students through the <em><a href="https://www.wiml.org/mentorship-program">Women in Machine Learning (WiML) Mentorship program</a></em> (<strong>2023</strong>, <strong>2024</strong>)

                    <h3 class={styles.ResearchInterestsHeader}>Reviewing</h3>
                    <ul>
                        <li> <strong>2025</strong> COLING: &nbsp;  &nbsp;  CoMeDi: Context and Meaning - Navigating Disagreements in NLP Annotations workshop </li>
                        <li> <strong>2024</strong> Neurips: &nbsp;  &nbsp; Pluralistic Alignment workshop </li>
                    </ul>

                </div >

                <hr style="border: 1px solid #ccc; margin: 30px 0;"></hr>

                <div class="opensource">
                    <h3 class={styles.ResearchInterestsHeader}>Open-Source Contributions</h3>
                    Contributed to <a href="https://github.com/StatProofBook/StatProofBook.github.io">The Book of Statistical Proofs</a>, adding definitions and proofs
                </div>

                <div class="nonacademic">
                    <h3 class={styles.ResearchInterestsHeader}>Non-Academic Interests</h3>
                    Sports enthusiast, currently focused on <Link href="/climbing">sport-climbing</Link>.
                    Otherwise, can be found doing yoga or reading books
                </div>



            </Container >
        </div >
    );
};

export default Academic;

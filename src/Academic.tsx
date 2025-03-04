import type { Component } from 'solid-js';

import styles from './Academic.module.scss';
import Container from './shared/Container';


const Academic: Component = () => {
    return (
        <div class={styles.Academic}>
            <Container>
                <div class="about2">



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

                    <h3 class={styles.ResearchInterestsHeader}>Reviewing Activity</h3>
                    <ul>
                        <li> <strong>2025</strong> COLING: &nbsp;  &nbsp;  CoMeDi: Context and Meaning - Navigating Disagreements in NLP Annotations workshop </li>
                        <li> <strong>2024</strong> Neurips: &nbsp;  &nbsp; Pluralistic Alignment workshop </li>
                    </ul>

                </div >





            </Container >
        </div >
    );
};

export default Academic;

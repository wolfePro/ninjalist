import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Thomas Wolfe | Home</title>
        <meta name="keywords" content="Projects"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Brandon Brooks was listed as “limited” with a knee injury on the Eagles’ first practice
          report of the season. The starting right guard apparently didn’t suffer the injury at
          practice. The Eagles are likely managing his repetitions with the season opener Sunday at
          the Atlanta Falcons. Still, the 32-year-old Brooks is coming off an Achilles tendon
          rupture and missed the early portion of training camp with a hamstring injury. Coach Nick
          Sirianni said then that the Eagles were moving cautiously with the three-time Pro Bowler
          who missed all of last season. Brooks returned before the preseason and played in the
          first game. But like most of the Eagles’ starters, the snaps he played — just five — were
          his only live ones this summer. He continued to practice but mostly on a limited basis.
          It’s unclear if there was an isolated incident or that overuse contributed to Brooks’ knee
          injury.
        </p>
        <p className={styles.text}>
          Brooks has had a rough last few years. He tore his right Achilles in the divisional
          playoff loss to the Saints in January 2019. He made a remarkable return and was ready by
          next season’s opener. He started and played in all 16 games for a third straight season,
          although he did have to leave a November game early because of a panic attack. Brooks had
          previously missed games with the Eagles and the Houston Texans because of his anxiety, but
          he has been open about his struggles and willingness to treat his condition. He returned
          the following week and finished out the regular season, but injured his shoulder in the
          finale and missed the wild-card playoff game the Eagles lost. Six months later, while
          training, he ruptured his other Achilles. “It’s life, stuff happens,” Brooks said in May.
          “I’ve seen the highest of highs, and the lowest of lows in my career, and the Achilles was
          just another thing that I had to overcome.” Brooks missed all of 2020. He confirmed in the
          offseason a Sports Illustrated report that the Eagles had made him available to other
          teams in a trade. It’s likely that his contract — he’s signed through 2024 — and injuries
          made Brooks a hard sell. He worked feverishly to return in peak physical condition, but
          the Eagles felt compelled to slow play his return from an early camp hamstring strain.
          Nate Herbig would be Brooks’ likely replacement in Atlanta.
        </p>
        <Link href="/projects">
          <a className={styles.btn}>See Project Listing</a>
        </Link>
      </div>
    </>
  );
}

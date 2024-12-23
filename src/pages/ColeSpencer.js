export default function colesPage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='' />

        <main>
          <div className='underline'>
            <h1 className='title'> Cole Spencer </h1>
          </div>
          <img
            className='pic'
            src='https://media.licdn.com/dms/image/v2/D5603AQFCpzyRKK6UwQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724955963704?e=1737590400&v=beta&t=qKu7KCwPVqhYnz2St7RV-LN_mjnwQBqh1zP5wDseK0o'
            alt='colespencer'
          />

          <p className='description'>
            Hi there! My name is Cole Spencer and I am currently a first year CS student 
            minoring in physics, and I am pursuing a focus in quantum computing, and cybersecurity! As of
            right now, I primarily want to focus on gaining my certifications, such
            as Comptia Networking+ and Security+, and gaining experiance building and deploying mobile apps.
            I know that I have a long way to go, however, I know that these skills and certifications will benefit me in the future,
            and strengthen my resume. I have attached my LinkedIn and email if you would like to reach out
            to me with any questions you might have.
          </p>

<a className='button' href='https://www.linkedin.com/in/colejxspencer/'>
            <p> LinkedIn </p>
          </a>

<a className='button' href='mailto:colejxs@gmail.com'>
            <p> Email: colejxs@gmail.com </p>
          </a>
                
          <a className='button' href='/'>
            <p> Back </p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 250px;
            width: 150px;
          }

          .button {
            padding: 0.4rem 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 3px solid #742bc7;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            box-sizing: border-box;
          }

          .button p {
              margin: 0;
              line-height: 1rem;
            }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            background-color: #aea2bb;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}

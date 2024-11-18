export default function rileysPage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='' />

        <main>
          <div className='underline'>
            <h1 className='title'> Riley Rasizer </h1>
          </div>
          <img
            className='pic'
            src='/rileyimage'
            alt='rileyrasizer'
          />

          <p className='description'>
            Hi there! My name is Riley and I am currently a first year CS student 
            minoring in business, and I am pursuing a focus in cybersecurity! As of
            right now, I primarily want to focus on gaining my certifications, such
            as Comptia Networking+ and Security+, I know that I have a long way to
            go, however, I know that these will strongly benefit me in the future. 
            I have attached my LinkedIn and email if you would like to reach out
            to me with any questions you might have.
          </p>

<a className='button' href='https://www.linkedin.com/in/riley-rasizer-265258325/'>
            <p> LinkedIn </p>
          </a>

<a className='button' href='rileyrasizer@gmail.com'>
            <p> Email: rileyrasizer@gmail.com </p>
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
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
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

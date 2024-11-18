export default function andrewsPage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='' />

        <main>
          <div className='underline'>
            <h1 className='title'> Andrew Webber </h1>
          </div>
          <a href='https://github.com/acwebber01'>
            <img
              className='pic'
              src='https://avatars.githubusercontent.com/u/179530724?v=4'
              alt='Andrew Webber'
            />
          </a>

          <p className='description'>
            Hey! My name is Andrew Webber and I am a first year student @ CU Boulder majoring in 
            Computer Science and minoring in Mathematics & French. I am most interested in software development/
            game development. I am familiar with C++, HTML/CSS/JS, and Lua! I want to learn Python as a language and React to
            make web apps. I am also a math tutor at Front Range Community College. If you need anything, feel free to reach out!
          </p>

<a className='button' href='https://www.linkedin.com/in/andrew-webber-a5001a2b9/'>
            <p> LinkedIn </p>
          </a>

<a className='button' href='mailto:acwebber01@gmail.com'>
            <p> Email: acwebber01@gmail.com </p>
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
            opacity: 0;
            animation: fadeIn 2s forwards;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }

          .pic {
            height: 250px;
            width: 250px;
            transition: transform 0.3s ease;
            opacity: 0;
            animation: fadeIn 2s forwards;
          }

          .pic:hover {
            transform: scale(1.1);
          }

          .button {
            padding: 0.4rem 0.5rem;
            text-align: left;
            color: #000000;
            text-decoration: none;
            border: 3px solid #000000;
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
            background-color: #bbc0d8;
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

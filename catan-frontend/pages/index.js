import getConfig from 'next/config'

export default function Home({NODE_ENV, apiHost}) {
  console.log("apiHost: " + apiHost);
  console.log("NODE_ENV: " + NODE_ENV );

  return (
    <div>
      <button type="button" onClick={() => get({ apiHost })}>
        hey
      </button>
      Hello!
    </div>
  )
}

Home.getInitialProps = async (ctx) => {  
  const {publicRuntimeConfig} = getConfig()
  return {
    NODE_ENV: process.env.NODE_ENV,
    apiHost: publicRuntimeConfig.apiHost
  }
}


function get({ apiHost }){
  fetch(apiHost + '/ping')
  .then((response) => response.json())
  .then((data) => {
    console.log('ping response:', data);
  });
}
